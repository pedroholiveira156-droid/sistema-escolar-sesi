'use client'
import Header from "../components/header";
import "../listalunos/page.css";

export default function ListAlunos() {

    return (
        <>
            <Header />

            <main className="lista-alunos">

                <h2>Lista de Alunos</h2>

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Série</th>
                            <th>RA</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>01</td>
                            <td>Ana Luiza</td>
                            <td>17</td>
                            <td>3B</td>
                            <td>909030</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>João Pedro</td>
                            <td>16</td>
                            <td>2A</td>
                            <td>909031</td>
                        </tr>

                        <tr>
                            <td>03</td>
                            <td>Gabriel Santos</td>
                            <td>17</td>
                            <td>3A</td>
                            <td>909032</td>
                        </tr>

                    </tbody>

                </table>

            </main>
        </>
    )
}