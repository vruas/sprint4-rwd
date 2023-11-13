import { redirect } from "next/navigation";

export default async function Garagem() {
    let bikes = [];

    try {
        const response = await fetch('http://localhost:3000/dados/bikes/0');
        bikes = await response.json();
    } catch (error) {
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
            <h1>Garagem</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Preço</th>
                            <th>Modelo</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bikes.map((bike, index) => (
                            <tr key={index}>
                                <td>{bike.marca}</td>
                                <td>{bike.preco}</td>
                                <td>{bike.modelo}</td>
                                <td>{bike.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
