'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Registro() {

    const router = useRouter();

    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    function salvarRegistro(event) {
        event.preventDefault();

        alert("Registro realizado com sucesso!");

        router.push("/login");
    }

    return (
        <main className="principal">

            <section className="container">

                <div className="intro">

                    <p className="status">
                        <span></span>
                        SISTEMA ONLINE
                    </p>

                    <h1>Crie sua conta</h1>

                    <p className="descricao">
                        Cadastre seus dados para ter acesso
                        ao sistema de acompanhamento escolar.
                    </p>

                    <div className="info">
                        <h3>Seja bem-vindo!</h3>

                        <p>
                            Preencha seus dados corretamente
                            para realizar seu registro no sistema.
                        </p>
                    </div>

                </div>

                <div className="formulario">

                    <div className="formHeader">
                        <h2>Registro</h2>
                        <p>Preencha os campos abaixo.</p>
                    </div>

                    <form onSubmit={salvarRegistro}>

                        <div className="campo">
                            <label htmlFor="usuario">Usuário</label>

                            <input
                                id="usuario"
                                type="text"
                                placeholder="Digite seu usuário"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="nome">Nome completo</label>

                            <input
                                id="nome"
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>

                            <input
                                id="senha"
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="botao">
                            Salvar Registro
                        </button>

                        <button
                            type="button"
                            className="botaoSecundario"
                            onClick={() => router.push("/login")}
                        >
                            Já tenho uma conta
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}
