'use client'

import { useState } from "react";
import Header from "../components/header";
import "../cadnotas/page.css";

export default function Notas() {

    const [nomeAluno, setNomeAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    async function cadastraAluno(event){
        event.preventDefault();
        const resposta = await fetch("/api/alunos", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                nome,
                idade,
                serie,
                ra
            })
        })
        const dados = resposta.json();
        alert(dados.mensagem || dados.erro)
        if(reposta.ok){
            setNome('');
            setIdade('');
            setSerie('');
            setRA('');

        }
    }

    return (
        <>
            <Header />

            <main className="notas">

                <div className="notas-container">

                    <h2>Cadastro de Notas</h2>

                    <form>

                        <div className="campo">
                            <label htmlFor="nomeAluno">
                                Nome aluno
                            </label>

                            <input
                                id="nomeAluno"
                                type="text"
                                value={nomeAluno}
                                onChange={(e) => setNomeAluno(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="t1">
                                T1
                            </label>

                            <input
                                id="t1"
                                type="number"
                                step="0.1"
                                value={t1}
                                onChange={(e) => setT1(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="t2">
                                T2
                            </label>

                            <input
                                id="t2"
                                type="number"
                                step="0.1"
                                value={t2}
                                onChange={(e) => setT2(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="n1">
                                N1
                            </label>

                            <input
                                id="n1"
                                type="number"
                                step="0.1"
                                value={n1}
                                onChange={(e) => setN1(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="n2">
                                N2
                            </label>

                            <input
                                id="n2"
                                type="number"
                                step="0.1"
                                value={n2}
                                onChange={(e) => setN2(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="n3">
                                N3
                            </label>

                            <input
                                id="n3"
                                type="number"
                                step="0.1"
                                value={n3}
                                onChange={(e) => setN3(e.target.value)}
                            />
                        </div>

                        <button type="submit">
                            Salvar
                        </button>

                    </form>

                </div>

            </main>
        </>
    )
}