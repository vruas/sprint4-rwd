import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, response) {
    try {
        // Ler o arquivo JSON e armazenar em uma constante.
        const file = await fs.readFile(process.cwd() + '/src/app/dados/bikes/db.json', 'utf8');

        // Converter o arquivo para um formato possível de ser manipulado.
        const dados = JSON.parse(file);

        // Retornar os dados da base.
        return NextResponse.json(dados);
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status falso.
        return NextResponse.json({ status: false, error: error.message });
    }
}
