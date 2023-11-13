
import { redirect } from "next/navigation";

export default async function UsersView() {

    let items;

    try{
        const response = await fetch('http://localhost:3000/api/garagem');
        items = await response.json();
        
    }catch(error){
        console.log(error);
        redirect('/error');
    }

    return(
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
                        {items.map((item)=> (
                            <tr key={item.id}>
                                <td>{item.marca}</td>
                                <td>{item.preco}</td>
                                <td>{item.modelo}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    );

  }
