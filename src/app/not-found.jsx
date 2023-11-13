import Link from "next/link";

export default function NotFound() {
    return (
      <div>
          <h1>OOPS! 404!</h1>
          <p>Desculpe, a página que você procura não existe!</p>
          <p className="flex justify-center"> <Link href="/"> Volte a página inicial</Link></p>
      </div>
    )
  }