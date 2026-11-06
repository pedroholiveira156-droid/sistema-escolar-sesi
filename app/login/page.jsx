
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Login() {

    const router = useRouter();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function entrarSistema(event) {
        event.preventDefault();

        router.push("/principal");
    }

    return (
        <main className="principal">

            <section className="container">

                <div className="intro">

                    <p className="status">
                        <span></span>
                        SISTEMA ONLINE
                    </p>

                    <h1>Bem-vindo de volta!</h1>

                    <p className="descricao">
                        Acesse sua conta para utilizar
                        o sistema de acompanhamento escolar.
                    </p>

                    <div className="info">
                        <h3>Sistema escolar</h3>

                        <p>
                            Entre com seu usuário e senha
                            para acessar a área principal do sistema.
                        </p>
                    </div>

                </div>

                <div className="formulario">

                    <div className="formHeader">
                        <h2>Login</h2>
                        <p>Informe seus dados de acesso.</p>
                    </div>

                    <form onSubmit={entrarSistema}>

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
                            Entrar no Sistema
                        </button>

                        <button
                            type="button"
                            className="botaoSecundario"
                            onClick={() => router.push("/registro")}
                        >
                            Criar uma conta
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}
