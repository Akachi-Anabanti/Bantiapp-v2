export const formatCount = (count: number) => {
  if (count >= 1_000_000_000) {
    return (count / 1_000_000_000).toFixed(1) + "B"; // For billions
  }
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + "M"; // For millions
  }
  if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + "K"; // For thousands
  }
  return count; // Return the number as is for smaller numbers
};
