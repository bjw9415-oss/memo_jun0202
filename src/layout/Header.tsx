
import "../styles/Header.css";
// 1. Props 타입 정의
// 부모 컴포넌트(App)가 이 헤더에게 넘겨줘야 할 데이터나 함수의 규칙을 정합니다.
// 여기서는 '전체 삭제 버튼을 눌렀을 때 실행할 함수(onClearAll)'를 받기로 약속합니다.
interface HeaderProps {
     onClearAll: () => void;
}

export default function Header({ onClearAll }: HeaderProps) {
    // 로고를 눌러서 초기화 하는 UX 함수
    const handleReload = () => {
        window.location.reload();
    }
    //전체 삭제 클릭 핸들러
    // 데이터가 다 날아가는 작업으로 한번더 확인하는 UX
    const handleClearAll = () => {
        if (window.confirm('정말 모든 메모를 삭제하시겠습니까?')) {
            onClearAll();
        }
    }
  return (
    <header className="app-header">
        <div className="header-brand" onClick={handleReload} style={{ cursor: 'pointer' }}>
            <span className="app-title">{import.meta.env.VITE_APP_TITLE || '메모장'}</span>
        </div>
        <button className="clear-all-btn" onClick={handleClearAll}>
            전체 삭제
        </button>
    </header>
    
  )
}
