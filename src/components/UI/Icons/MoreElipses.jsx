function MoreElipses({ w, h }) {
  const widthClass = w ? `w-${w}` : "w-6";
  const heightClass = h ? `h-${h}` : "h-6";

  // Ensure the classes are explicitly used so they are not purged in production
  const validWidths = ["w-px", "w-1", "w-2", "w-4", "w-5", "w-6", "w-7", "w-8"]; // add more as needed
  const validHeights = [
    "h-px",
    "h-1",
    "h-2",
    "h-4",
    "h-5",
    "h-6",
    "h-7",
    "h-8",
  ]; // add more as needed

  const finalWidthClass = validWidths.includes(widthClass) ? widthClass : "w-6";
  const finalHeightClass = validHeights.includes(heightClass)
    ? heightClass
    : "h-6";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-${finalHeightClass} w-${finalWidthClass}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );
}

export default MoreElipses;
