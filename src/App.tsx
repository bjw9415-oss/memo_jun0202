import { useState, useEffect } from "react";
import MemoForm from "./components/MemoForm";
import MemoList from "./components/MemoList";
import type { Memo } from "./types";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import SortControl from "./components/SortControl";
import MemoStats from "./components/MemoStats";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const STORAGE_KEY = "memo-app-data";

function App() {

    const [memos, setMemos] = useState<Memo[]>(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (savedData) {
            try {
                return JSON.parse(savedData);
            } catch (error) {
                console.error(
                    "저장된 데이터를 불러오는데 실패했습니다:",
                    error,
                );
                return [];
            }
        }
        return [];
    });
    
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
    }, [memos]); 


    const [filterText, setFilterText] = useState("");
    const [sortOrder, setSortOrder] = useState<'latest' | 'oldest' | 'alphabetical'>('latest');

    const handleAddMemo = (content: string) => {
        const newMemo: Memo = {
            id: Date.now(),
            content: content,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        setMemos([newMemo, ...memos]);
    };

    const handleUpdateMemo = (id: number, content: string) => {
        setMemos(
            memos.map((memo) =>
                memo.id === id
                    ? {
                          ...memo,
                          content: content,
                          updatedAt: new Date().toISOString(),
                      }
                    : memo,
            ),
        );
    };

    const handleDeleteMemo = (id: number) => {
        setMemos(memos.filter((memo) => memo.id !== id));
    };

    const filteredMemos = memos.filter((memo) =>
        memo.content.toLowerCase().includes(filterText.toLowerCase()),
    );
    const handleClearAll = () => {
    setMemos([]); // 1. 화면(State) 비우기
    localStorage.removeItem(STORAGE_KEY); // 2. 저장소(Local Storage) 비우기
    };

    const sortedMemos = [...filteredMemos].sort((a, b) => {
        if (sortOrder === 'latest') {
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        } else if (sortOrder === 'oldest') {
            return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        } else { // alphabetical
            return a.content.localeCompare(b.content);
        }
    });
    

    return (
        <div className="app">
            <Header onClearAll={handleClearAll} />
            
            <div className="app-content">
                <h1 className="app-title">📝 {import.meta.env.VITE_APP_TITLE || '메모장'}</h1>

                <MemoForm onAddMemo={handleAddMemo} />

                {/* 검색창 컴포넌트 */}
                <SearchBar 
                    value={filterText} 
                    onChange={setFilterText} 
                />

                {/* 정렬 버튼 컴포넌트 */}
                <SortControl 
                    sortOrder={sortOrder} 
                    onSortChange={setSortOrder} 
                />

                <MemoList
                    memos={sortedMemos}
                    onUpdateMemo={handleUpdateMemo}
                    onDeleteMemo={handleDeleteMemo}
                />

                {/* 통계 컴포넌트 */}
                <MemoStats 
                    filteredCount={sortedMemos.length} 
                    totalCount={memos.length} 
                />
            </div>
            
            <Footer />
        </div>
        
    );
}

export default App;
