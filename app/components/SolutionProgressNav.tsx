export function SolutionProgressNav({ label }: { label: string }) {
  return (
    <div className="solution-detail-rail">
      <div className="ss-container detail-rail-inner">
        <span>{label}</span>
        <span className="detail-rail-hint">Scroll to explore ↓</span>
      </div>
    </div>
  );
}
