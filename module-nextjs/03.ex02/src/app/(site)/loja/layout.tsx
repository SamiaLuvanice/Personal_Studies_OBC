import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h1>Loja Universo em Foco</h1>
            {children}
        </div>
    );
}