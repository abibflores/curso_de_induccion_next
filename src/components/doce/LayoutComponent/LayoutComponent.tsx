import { Header } from "../../Header/Header"

export const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header version="doce" />
            {children}
        </div>
    )
}   