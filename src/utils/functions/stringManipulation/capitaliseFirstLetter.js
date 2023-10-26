export default function capitaliseFirstLetter(word) {
  const capitalised = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalised;
}
