import { useContext } from "react";
import { Link, useOutlet } from "react-router-dom";
import { AppProviderContext } from "../providers/providerContex";
import { HomeIcon } from "../styles";
import { Sidebar } from "./Sidebar";
import { HiOutlineHome } from 'react-icons/hi'

export const Layout = () => {
  const { currentCharacters } = useContext(AppProviderContext)
  const SHOW_MENU = currentCharacters?.length > 0;

  return (
    <>
   {
      SHOW_MENU && (<Sidebar />)
    }
    <Link to=''>
    <HomeIcon><HiOutlineHome /></HomeIcon>
    </Link>

    {useOutlet()}
    </>
      
  );
};
