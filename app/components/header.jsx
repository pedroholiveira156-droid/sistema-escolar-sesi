
import Link from "next/link";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <Link href="/" className="logo">
                    <span className="logo-icon">S</span>
                    <div>
                        <strong>SESI</strong>
                        <small>Sistema Escolar</small>
                    </div>
                </Link>

                <nav className="nav">
                    <Link href="/">Início</Link>
                    <Link href="/cadalunos">Alunos</Link>
                    <Link href="/listalunos">Lista de Alunos</Link>
                    <Link href="/cadnotas">Notas</Link>
                    <Link href="/listnotas">Lista de Notas</Link>
                </nav>

            </div>
        </header>
    );
}

