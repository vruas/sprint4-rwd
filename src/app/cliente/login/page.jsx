"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState({
    info: "login",
    email: "",
    senha: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await fetch(
      "http://localhost:3000/dados/base/base-users",
      {
        method: "POST",
        body: JSON.stringify(usuario),
      }
    );

    const resultado = await response.json();

    if (resultado.status) {
      window.location.href = "/";
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
  <form className="w-full max-w-md p-4 bg-white shadow-lg border-4 border-cyan-500 rounded-lg">
      <div className="flex justify-center p-0">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={250}
            height={80}
          />
        </div>
    <fieldset>
      <legend className="text-xl font-bold mb-3 text-center">Login</legend>
      <div className="mb-4">
        <label className="block text-sm text-lg font-bold mb-2" htmlFor="idEmail">
          Email:
        </label>
        <input
          className="w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
          type="email"
          name="email"
          id="idEmail"
          placeholder="Digite seu e-mail"
          value={usuario.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-lg font-bold mb-2" htmlFor="idSenha">
          Senha:
        </label>
        <input
          className="w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
          type="password"
          name="senha"
          id="idSenha"
          placeholder="Digite sua senha"
          value={usuario.senha}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-all duration-500 ease-out">
          Entrar
        </button>
      </div>
    </fieldset>
    <div className="mt-4 text-center">
      <span>Ainda não possui um cadastro?</span>
      <Link href="/cliente/cadastro">
        <p className="text-cyan-500">Clique aqui</p>
      </Link>
    </div>
  </form>
</div>

  );
}
