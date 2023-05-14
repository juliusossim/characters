export const slugToCamel = (str: string, splitOn = '_'): string =>
  str
    .toLowerCase()
    .split(splitOn)
    .map((text, index) => {
      if (index > 0) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
      return text;
    })
    .join('');

export const configName = (str): string => {
  const strippedViteString = str.replace('VITE_', '');
  return slugToCamel(strippedViteString);
};

export const strippedString = (str: string): string => str.replace(/[^\w\s]|_/g, ''); // Strip special characters
