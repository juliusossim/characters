import { ReactNode, createContext, FC, useState, useMemo, useRef } from "react";
import { useMode } from "@/hooks/useMode";
import { Main } from "@/components/Styles/Main";
import { CharacterDataType } from "@/features/character/types";

const initialContextValue = {mode: '', currentCharacterKeys: 1, currentCharacterPage: 1, 
setCurrentCharacterkeys: (a: number) => a, setCurrentCharacterPage: (a: number) => a,
characterRef: null, setCurrentCharacters: (a: 1) => a, currentCharacters: []
};


type ProviderContextValueProps = {
    mode: string;
    currentCharacterKeys: number;
    setCurrentCharacterkeys: any;
     currentCharacterPage: number;
    setCurrentCharacterPage: any;
    characterRef: any
    currentCharacters: CurrentCharactersProps; 
    setCurrentCharacters: any
}
type ProviderContextProps = {children: ReactNode}
type CurrentCharactersProps = CharacterDataType[]


export const AppProviderContext = createContext<ProviderContextValueProps>(initialContextValue);

export const ProviderContextProvider: FC<ProviderContextProps> = ({ children }) => {

    const [currentCharacterKeys, setCurrentCharacterkeys] = useState<number>(1)
    const [currentCharacterPage, setCurrentCharacterPage] = useState<number>(1);
    const [currentCharacters, setCurrentCharacters] = useState<CurrentCharactersProps>([]);
    const characterRef = useRef();

    const mode = useMode(); //switches to night mode, between by 7PM - 6AM

    const values = useMemo(() => ({
        mode, currentCharacterKeys, setCurrentCharacterkeys,
         currentCharacterPage, setCurrentCharacterPage, characterRef,
         currentCharacters, setCurrentCharacters
    }), [
      mode, currentCharacterKeys, setCurrentCharacterkeys,
       currentCharacterPage, setCurrentCharacterPage, characterRef.current,
       currentCharacters, setCurrentCharacters
      ]);
    
    return (
      <AppProviderContext.Provider value={values}>
          <Main variant={mode}>
          {children}
          </Main>
      </AppProviderContext.Provider>
    );
  };
  