'use client'
import Header from "../components/header";
import "../listnotas/page.css";

export default function ListaNotas() {

    return (
        <>
            <Header />

            <main className="lista-notas">

                <h2>Lista de Notas</h2>

                <table>

                    <thead>
                        <tr>
                            <th>Nome aluno</th>
                            <th>T1</th>
                            <th>T2</th>
                            <th>N1</th>
                            <th>N2</th>
                            <th>N3</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Ana Luiza</td>
                            <td>8.0</td>
                            <td>9.0</td>
                            <td>7.5</td>
                            <td>8.5</td>
                            <td>9.0</td>
                        </tr>

                        <tr>
                            <td>João Pedro</td>
                            <td>7.0</td>
                            <td>8.0</td>
                            <td>8.5</td>
                            <td>7.5</td>
                            <td>9.0</td>
                        </tr>

                    </tbody>

                </table>

            </main>
        </>
    )
}