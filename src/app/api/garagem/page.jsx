
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

    


  }
