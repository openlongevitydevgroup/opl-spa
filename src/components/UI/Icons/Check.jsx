function CheckSvg({ w, h }) {
  const widthClass = w ? `w-${w}` : "w-6";
  const heightClass = h ? `h-${h}` : "h-6";

  // Ensure the classes are explicitly used so they are not purged in production
  const validWidths = ["w-4", "w-5", "w-6", "w-7", "w-8"]; // add more as needed
  const validHeights = ["h-4", "h-5", "h-6", "h-7", "h-8"]; // add more as needed

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
      className={`${finalWidthClass} ${finalHeightClass}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default CheckSvg;
