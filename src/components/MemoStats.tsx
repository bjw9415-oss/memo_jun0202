// components/MemoStats.tsx

interface MemoStatsProps {
    totalCount: number;
    filteredCount: number;
}

function MemoStats({ totalCount, filteredCount }: MemoStatsProps) {
    return (
        <p className="memo-count">
            총 {filteredCount}개의 메모 (전체 {totalCount}개)
        </p>
    );
}

export default MemoStats;