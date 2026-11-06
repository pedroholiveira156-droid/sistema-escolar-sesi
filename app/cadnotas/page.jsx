
'use client';

import { useState, useEffect } from "react";
import Header from "../components/header";
import { useRouter } from "next/navigation";
import "./page.css";

export default function CadNotas() {

    const router = useRouter();

    const [id_aluno, setIdAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        buscarAlunos();
    }, []);

    async function buscarAlunos() {
        try {
            const resposta = await fetch("/api/alunos");
            const dados = await resposta.json();

            if (resposta.ok) {
                setAlunos(dados);
            }

        } catch (erro) {
            console.log("Erro ao buscar alunos:", erro);
        }
    }

    async function cadastraNotas(event) {
        event.preventDefault();

        try {
            const resposta = await fetch("/api/notas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_aluno,
                    t1,
                    t2,
                    n1,
                    n2,
                    n3
                })
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                alert(dados.mensagem || "Notas cadastradas com sucesso!");
                router.push("/listnotas");
            } else {
                alert(dados.erro || dados.mensagem || "Erro ao cadastrar notas.");
            }

        } catch (erro) {
            console.log(erro);
            alert("Erro ao cadastrar notas.");
        }
    }

    return (
        <>
            <Header />

            <main className="principal">

                <section className="container">

                    <div className="intro">

                        <p className="status">
                            <span></span>
                            SISTEMA ONLINE
                        </p>

                        <h1>Cadastro de Notas</h1>

                        <p className="descricao">
                            Cadastre e organize as notas dos alunos
                            de maneira simples e rápida.
                        </p>

                        <div className="info">
                            <h3>Área acadêmica</h3>

                            <p>
                                Preencha os campos ao lado para registrar
                                os trabalhos e as avaliações dos alunos.
                            </p>
                        </div>

                    </div>

                    <div className="formulario">

                        <div className="formHeader">
                            <h2>Nova avaliação</h2>

                            <p>
                                Preencha todas as informações abaixo.
                            </p>
                        </div>

                        <form onSubmit={cadastraNotas}>

                            <div className="campo">
                                <label htmlFor="id_aluno">
                                    Nome do aluno
                                </label>

                                <select
                                    id="id_aluno"
                                    value={id_aluno}
                                    onChange={(event) =>
                                        setIdAluno(event.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Selecione um aluno
                                    </option>

                                    {alunos.map((aluno) => (
                                        <option
                                            key={aluno.id_aluno}
                                            value={aluno.id_aluno}
                                        >
                                            {aluno.nome} - RA {aluno.ra}
                                        </option>
                                    ))}

                                </select>
                            </div>

                            <div className="linha">

                                <div className="campo">
                                    <label htmlFor="t1">
                                        Trabalho 1 (T1)
                                    </label>

                                    <input
                                        id="t1"
                                        type="text"
                                        value={t1}
                                        onChange={(e) => setT1(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="campo">
                                    <label htmlFor="t2">
                                        Trabalho 2 (T2)
                                    </label>

                                    <input
                                        id="t2"
                                        type="text"
                                        value={t2}
                                        onChange={(e) => setT2(e.target.value)}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="divisor">
                                Notas das avaliações
                            </div>

                            <div className="linha">

                                <div className="campo">
                                    <label htmlFor="n1">Nota 1 (N1)</label>

                                    <input
                                        id="n1"
                                        type="number"
                                        value={n1}
                                        onChange={(e) => setN1(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="campo">
                                    <label htmlFor="n2">Nota 2 (N2)</label>

                                    <input
                                        id="n2"
                                        type="number"
                                        value={n2}
                                        onChange={(e) => setN2(e.target.value)}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="campo">
                                <label htmlFor="n3">Nota 3 (N3)</label>

                                <input
                                    id="n3"
                                    type="number"
                                    value={n3}
                                    onChange={(e) => setN3(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="botao">
                                Salvar Notas
                            </button>

                        </form>

                    </div>

                </section>

            </main>
        </>
    );
}
