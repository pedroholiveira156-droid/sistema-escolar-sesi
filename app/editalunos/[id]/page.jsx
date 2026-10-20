"use client";

import { useEffect, useState, use } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import "./cadaluno.css";

export default function EditarAlunoPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    // Tenta obter o ID a partir da rota [id] ou de query params (?id=1)
    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_aluno, setIdAluno] = useState("")
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            buscarAluno(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarAluno(idAluno) {
        try {
            setCarregando(true);
            const resposta = await fetch(`/api/alunos/${idAluno}`);

            if (!resposta.ok) {
                alert("Aluno não encontrado!");
                router.push("/listalunos");
                return;
            }

            const dados = await resposta.json();
            setIdAluno(dados.id_aluno || "");
            setNome(dados.nome || "");
            setIdade(dados.idade || "");
            setSerie(dados.serie || "");
            setRa(dados.ra || "");
        } catch (erro) {
            console.error("Erro ao carregar aluno:", erro);
            alert("Erro ao carregar dados do aluno.");
        } finally {
            setCarregando(false);
        }
    }

    async function salvarAluno(event) {
        event.preventDefault();

        if (!id) {
            alert("ID do aluno não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/alunos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_aluno,
                nome,
                idade,
                serie,
                ra,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listalunos");
        }
    }

    if (carregando) {
        return (
            <main className="container">
                <h1>Editar Aluno</h1>
                <p>Carregando informações do aluno...</p>
            </main>
        );
    }

    return (
        
<main className="editarAlunoPage">
    <section className="editarAlunoSection">
        <div className="editarAlunoGrid">

            {/* LADO ESQUERDO */}
            <div className="editarAlunoIntro">
                <span className="editarAlunoLabel">
                    ÁREA DE CADASTROS
                </span>

                <h1>
                    Editar <span>Aluno.</span>
                </h1>

                <p>
                    Atualize as informações do aluno de forma
                    simples e rápida. Confira os dados antes
                    de salvar as alterações.
                </p>

                <div className="editarAlunoInfo">
                    <span>01</span>

                    <div>
                        <strong>Dados atualizados</strong>
                        <p>
                            Mantenha as informações escolares
                            sempre corretas.
                        </p>
                    </div>
                </div>

                <div className="editarAlunoInfo">
                    <span>02</span>

                    <div>
                        <strong>Salvamento seguro</strong>
                        <p>
                            Confira os campos e salve as
                            alterações realizadas.
                        </p>
                    </div>
                </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="editarAlunoFormArea">

                <div className="editarAlunoHeader">
                    <div>
                        <span>GERENCIAMENTO ESCOLAR</span>
                        <h2>Dados do aluno</h2>
                    </div>

                    <div className="editarAlunoNumero">
                        01
                    </div>
                </div>

                <form
                    onSubmit={salvarAluno}
                    className="editarAlunoForm"
                >
                    <input
                        type="hidden"
                        value={id_aluno}
                        onChange={(event) =>
                            setIdAluno(event.target.value)
                        }
                    />

                    <div className="editarAlunoCampo campoCompleto">
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(event) =>
                                setNome(event.target.value)
                            }
                            placeholder="Digite o nome do aluno"
                            required
                        />
                    </div>

                    <div className="editarAlunoCampo">
                        <label htmlFor="idade">Idade</label>
                        <input
                            id="idade"
                            type="number"
                            value={idade}
                            onChange={(event) =>
                                setIdade(event.target.value)
                            }
                            placeholder="Ex.: 16"
                            min="1"
                            required
                        />
                    </div>

                    <div className="editarAlunoCampo">
                        <label htmlFor="serie">Série</label>
                        <input
                            id="serie"
                            type="text"
                            value={serie}
                            onChange={(event) =>
                                setSerie(event.target.value)
                            }
                            placeholder="Ex.: 3º A"
                            required
                        />
                    </div>

                    <div className="editarAlunoCampo campoCompleto">
                        <label htmlFor="ra">RA do aluno</label>
                        <input
                            id="ra"
                            type="text"
                            value={ra}
                            onChange={(event) =>
                                setRa(event.target.value)
                            }
                            placeholder="Digite o RA do aluno"
                            required
                        />
                    </div>

                    <div className="editarAlunoAcoes">
                        <span>
                            Confira os dados antes de salvar.
                        </span>

                        <button type="submit">
                            Salvar alterações
                            <span>→</span>
                        </button>
                    </div>
                </form>

                <div className="editarAlunoVoltar">
                    <Link href="/listalunos">
                        ← Voltar para a lista de alunos
                    </Link>
                </div>

            </div>
        </div>
    </section>
</main>

    );
}