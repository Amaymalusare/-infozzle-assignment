export function IconButton({ label, children, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`icon-btn btn btn-light border rounded-circle shadow-sm ${className}`.trim()}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
