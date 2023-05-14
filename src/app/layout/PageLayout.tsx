import { ReactNode } from "react"
import { Head } from "./Head"

type PageLayoutProps = {
    children: ReactNode,
    title: string
}
export const PageLayout = ({ children, title }: PageLayoutProps) => (
   
    <div>
    <Head title={title} />
        {children}
    </div>
)