import { NavItem } from "./NavItem";
import { useContext } from "react";
import { AppProviderContext } from "@/app/providers/providerContex";
import { StyledList } from "@/app/styles";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


type NavListProps = {
  open: any;

  toggle: () => void
}

export const NavList = ({ toggle, open }: NavListProps) => {
  const { currentCharacters } = useContext(AppProviderContext);
  if(currentCharacters?.length  < 1) return <></>

  return (
    <StyledList isOpen={open} variants={variants}>
    
      {currentCharacters?.map((character, index) => index < 8 && (
        <NavItem open={open} toggle={toggle} item={character} key={character.id} />
      ))}
    </StyledList>
  );
  
}
