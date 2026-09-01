"use client";

import Link from "next/link";
import "./page.css";

export default function Principal() {
    return (
        <>
            {/* HEADER */}
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
                        <Link href="/listalunos">
                            Lista de Alunos
                        </Link>
                        <Link href="/cadnotas">Notas</Link>
                        <Link href="/listnotas">
                            Lista de Notas
                        </Link>
                    </nav>

                </div>
            </header>

            {/* HERO */}
            <main>

                <section className="hero">
                    <div className="hero-content">

                        <span className="tag">
                            SISTEMA ESCOLAR
                        </span>

                        <h1>
                            Bem-vindo ao
                            <strong>SESI Mirandópolis</strong>
                        </h1>

                        <p>
                            Acesse de forma rápida e simples
                            as informações dos alunos, cadastros
                            e notas do sistema escolar.
                        </p>

                        <a
                            href="#servicos"
                            className="hero-button"
                        >
                            Acessar sistema
                        </a>

                    </div>
                </section>

                {/* CARDS */}
                <section
                    id="servicos"
                    className="services"
                >

                    <div className="section-title">
                        <span>ACESSO RÁPIDO</span>

                        <h2>
                            O que você deseja fazer?
                        </h2>
                    </div>

                    <div className="cards">

                        <Link
                            href="/cadalunos"
                            className="card"
                        >
                            <div className="card-icon">
                                +
                            </div>

                            <h3>
                                Cadastrar Aluno
                            </h3>

                            <p>
                                Adicione novos alunos
                                ao sistema escolar.
                            </p>
                        </Link>

                        <Link
                            href="/listalunos"
                            className="card"
                        >
                            <div className="card-icon">
                                👥
                            </div>

                            <h3>
                                Lista de Alunos
                            </h3>

                            <p>
                                Consulte todos os
                                alunos cadastrados.
                            </p>
                        </Link>

                        <Link
                            href="/cadnotas"
                            className="card"
                        >
                            <div className="card-icon">
                                ✓
                            </div>

                            <h3>
                                Cadastrar Notas
                            </h3>

                            <p>
                                Registre as notas dos
                                alunos.
                            </p>
                        </Link>

                        <Link
                            href="/listnotas"
                            className="card"
                        >
                            <div className="card-icon">
                                ▤
                            </div>

                            <h3>
                                Lista de Notas
                            </h3>

                            <p>
                                Consulte as notas
                                cadastradas.
                            </p>
                        </Link>

                    </div>
                </section>

                {/* GALERIA */}
                <section className="gallery">

                    <div className="gallery-container">

                        <div className="gallery-title">

                            <span>
                                NOSSO AMBIENTE
                            </span>

                            <h2>
                                Galeria
                            </h2>

                            <p>
                                Conheça um pouco mais do
                                nosso sistema escolar.
                            </p>

                        </div>

                        <div className="images">

                            <div className="image-card">

                                <img
                                    src="/cachorro.png"
                                    alt="Imagem ilustrativa"
                                />

                                <div className="image-info">
                                    <h3>
                                        SESI Mirandópolis
                                    </h3>

                                    <p>
                                        Educação e tecnologia
                                        juntas.
                                    </p>
                                </div>

                            </div>

                            <div className="image-card">

                                <img
                                    src="/animal.png"
                                    alt="Imagem ilustrativa"
                                />

                                <div className="image-info">
                                    <h3>
                                        Ambiente Escolar
                                    </h3>

                                    <p>
                                        Um espaço para
                                        aprender e crescer.
                                    </p>
                                </div>

                            </div>

                            <div className="image-card">

                                <img
                                    src="/cachorro-social.png"
                                    alt="Imagem ilustrativa"
                                />

                                <div className="image-info">
                                    <h3>
                                        Sistema Escolar
                                    </h3>

                                    <p>
                                        Organização e
                                        praticidade.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="footer">
                <p>
                    © 2026{" "}
                    <strong>SESI Mirandópolis</strong>
                    {" "}— Sistema Escolar
                </p>
            </footer>
        </>
    );
}