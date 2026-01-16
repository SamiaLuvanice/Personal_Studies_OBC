import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Sobre | Planets APP",
    description: "Saiba mais sobre o Planets APP, um projeto desenvolvido ao longo das aulas da OBC.",
};

export default function Page() {
    return (
        <main style={{ textAlign: 'center' }}>
            <h1>Página Sobre</h1>
        </main>
    )
}   