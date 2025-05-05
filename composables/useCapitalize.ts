export const useCapitalize = () => {
  const capitalize = (label: string): string => {
    return label.charAt(0).toLocaleUpperCase() + label.slice(1);
  };

  return {
    capitalize,
  };
};
