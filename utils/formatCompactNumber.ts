export const formatCompactNumbers = (value: number): string => {
  // Super pro option:
  //   return Intl.NumberFormat("en-US", {
  //     notation: "compact",
  //     maximumFractionDigits: 1,
  //   })
  //     .format(value)
  //     .replace(/\.0$/, "");

  if (value < 10_000) return value.toString();

  if (value < 1_000_000) return `${Math.floor(value / 1_000)}k`;

  return `${Math.floor(value / 1_000_000)}M`;
};

export default formatCompactNumbers;
