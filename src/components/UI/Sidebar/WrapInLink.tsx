import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkWrapperProps = {
    children: ReactNode,
    to: string;
    open: any;
    toggle: () => void;
}
export const WrapInLink = ({ children, toggle, to, open }: LinkWrapperProps) => (
    <>
    {
         open 
         ? <Link to={to} onClick={toggle}>{children}</Link>
         : children
    }
    </>
)
       
    
