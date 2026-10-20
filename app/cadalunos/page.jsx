'use client';

import { useState } from 'react';
import Header from '../components/header';
import './page.css';

export default function CadAlunos() {

    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    async function cadastraAluno(event){
        event.preventDefault();
        const resposta = await fetch("/api/alunos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                idade,
                serie,
                ra
            })
        })
        const dados = await resposta.json();
        alert(dados.mensagem || dados.erro)
        if(resposta.ok){
            setNome('');
            setIdade('');
            setSerie('');
            setRa('');
        }
    }

    function salvarAluno(e) {
        e.preventDefault();

        console.log({
            nome,
            idade,
            serie,
            ra
        });
        function salvarAluno(e) {
    e.preventDefault();

    setMensagem('Cadastro realizado com sucesso!');
}
    }

    return (
        <>
            <Header />

            <main className="cadAlunoPage">

                <section className="cadAlunoSection">

                    <div className="container cadAlunoGrid">

                        {/* LADO ESQUERDO */}
                        <div className="cadAlunoIntro">

                            <span className="sectionLabel">
                                ALUNOS
                            </span>

                            <h1>
                                Cadastro de
                                <span> alunos.</span>
                            </h1>

                            <p>
                                Preencha os dados do estudante para
                                adicioná-lo ao sistema escolar.
                            </p>

                            <div className="cadAlunoInfo">

                                <span>01</span>

                                <div>
                                    <strong>Novo estudante</strong>

                                    <p>
                                        Informe os dados solicitados
                                        no formulário.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* LADO DIREITO */}
                        <div className="cadAlunoFormArea">

                            <div className="formHeader">

                                <div>
                                    <span>CADASTRO</span>

                                    <h2>Dados do aluno</h2>
                                </div>

                                <span className="formNumber">
                                    01
                                </span>

                            </div>


                            <form
                                className="cadAlunoForm"
                                onSubmit={cadastraAluno}
                            >

                                {/* NOME */}
                                <div className="formGroup formGroupFull">

                                    <label htmlFor="nome">
                                        Nome completo
                                    </label>

                                    <input
                                        id="nome"
                                        type="text"
                                        placeholder="Digite o nome do aluno"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                    />

                                </div>


                                {/* IDADE */}
                                <div className="formGroup">

                                    <label htmlFor="idade">
                                        Idade
                                    </label>

                                    <input
                                        id="idade"
                                        type="number"
                                        placeholder="Ex: 16"
                                        value={idade}
                                        onChange={(e) => setIdade(e.target.value)}
                                        required
                                    />

                                </div>


                                {/* SÉRIE */}
                                <div className="formGroup">

                                    <label htmlFor="serie">
                                        Série
                                    </label>

                                    <input
                                        id="serie"
                                        type="text"
                                        placeholder="Ex: 3º EM"
                                        value={serie}
                                        onChange={(e) => setSerie(e.target.value)}
                                        required
                                    />

                                </div>


                                {/* RA */}
                                <div className="formGroup formGroupFull">

                                    <label htmlFor="ra">
                                        RA
                                    </label>

                                    <input
                                        id="ra"
                                        type="text"
                                        placeholder="Digite o RA do aluno"
                                        value={ra}
                                        onChange={(e) => setRa(e.target.value)}
                                        required
                                    />

                                </div>


                                {/* BOTÃO */}
                                <div className="formActions">

                                    <span>
                                        Verifique os dados antes de salvar.
                                    </span>

                                    <button type="submit">
                                        Salvar aluno
                                        <span>→</span>
                                    </button>
                            

                                </div>

                            </form>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
}