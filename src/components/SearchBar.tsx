// components/SearchBar.tsx

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="검색할 내용을 입력하세요..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;