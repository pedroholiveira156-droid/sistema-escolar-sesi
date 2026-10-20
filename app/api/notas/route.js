import db from "../../db/banco.js";
import {NextResponse} from "next/server";

export async function GET(){
    const alunos = db.prepare(`SELECT alunos.
     nome, alunos.ra, notas.t1, notas.t2,
     notas.n1, notas.n2, notas.n3 FROM notas
     INNER JOIN alunos
     ON notas.aluno_id = alunos.id_aluno
     ORDER BY alunos.nome`)
    return NextResponse.json(alunos)
}

export async function POST(request){
    try{
        const dados = await request.json();
        const sql = db.prepare('INSERT INTO notas (aluno_id, t1, t2, n1, n2, n3) VALUES (?,?,?,?,?,?)')
        sql.run(
            dados.nome_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        )
        return NextResponse.json({
            mensagem: 'Nota salva com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao salvar', error)
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`UPDATE notas SET aluno_id = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ? WHERE id = ?`)
        sql.run(
            dados.nome_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        )
        return NextResponse.json({
            mensagem:'Aluno editado com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao editar usuário',error)
       
    }
}
export async function DELETE(request){
    const dados = await request.json();
    const sql = db.prepare('DELETE FROM notas WHERE id = ?');

    sql.run(dados.ra);

    return NextResponse.json({
        mensagem: 'Aluno excluído com sucesso!'
    });
}
export async function PUT(request) {
    try{
        const dados = await request.json();
        const sql = db.prepare(`UPDATE notas SET aluno_id = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ? WHERE id = ?`)
        sql.run(
            dados.nome_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3,
            dados.id
        )
        return NextResponse.json({
            mensagem:'Nota editada com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao editar nota',error)
    }
}
export async function DELETE(request){
    const dados = await request.json();
    const sql = db.prepare('DELETE FROM notas WHERE id = ?');

    sql.run(dados.id);

    return NextResponse.json({
        mensagem: 'Nota excluída com sucesso!'
    });
}