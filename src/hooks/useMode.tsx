import { darkMode } from "@/utils/darkMode";
import { useEffect, useState } from "react";

export const useMode = (): string => {
  const [isDark, setIsDark] = useState(false);
  const milisecondsInHour =  60 * 60 * 1000; // 60 minutes * 60 seconds * 1000 milliseconds = 3.6*10^6 miliseconds
const mode = isDark ? 'dark' : 'light';

  useEffect(() => {
    const updateIsDark = () => {
        setIsDark(darkMode());
      };
    
    updateIsDark();

    // then, update hourly
    const interval = setInterval(updateIsDark, milisecondsInHour);

    return (): void => {
      clearInterval(interval);
    };
  }, []);
  return isDark ? 'dark' : 'light';
};

