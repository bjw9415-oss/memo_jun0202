// components/SortControl.tsx

// 필요한 타입을 정의 (또는 types.ts에 정의하고 import 해도 됨)
export type SortOption = 'latest' | 'oldest' | 'alphabetical';

interface SortControlProps {
    sortOrder: SortOption;
    onSortChange: (order: SortOption) => void;
}

function SortControl({ sortOrder, onSortChange }: SortControlProps) {
    return (
        <div className="sort-buttons" style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button 
                onClick={() => onSortChange('latest')} 
                disabled={sortOrder === 'latest'}
            >
                최신순
            </button>
            <button 
                onClick={() => onSortChange('oldest')} 
                disabled={sortOrder === 'oldest'}
            >
                오래된순
            </button>
            <button 
                onClick={() => onSortChange('alphabetical')} 
                disabled={sortOrder === 'alphabetical'}
            >
                가나다순
            </button>
        </div>
    );
}

export default SortControl;