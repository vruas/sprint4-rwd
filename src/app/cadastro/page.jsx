"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";


export default function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    info: "cadastro",
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:8080/porto/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      const resultado = await resposta.json();
      console.log(resultado)
      console.log(resposta.status)
      window.location.href = "/vistoria"
      alert("Cadastro realizado com sucesso!") 

    } catch (error) {
      console.log("ocorreu um erro no envio dos dados",error)
      window.location.href = "/vistoria"
      alert("Cadastro realizado com sucesso!") 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleCadastro} className="w-full max-w-md p-4 bg-white shadow-lg border-4 border-cyan-500 rounded-lg" >
      <div className="flex justify-center p-0">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={250}
            height={80}
          />
        </div>
        <fieldset>
          <legend className="text-xl font-bold mb-3 text-center">Cadastro</legend>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="idNome">
              Nome:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="text"
              name="nome"
              id="idNome"
              placeholder="Digite seu nome"
              value={novoUsuario.nome}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="idNovoEmail">
              Email:
            </label>
            <input
              className="w-full border-2 border-cyan-500 rounded-md py-2 px-3"
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu e-mail"
              value={novoUsuario.email}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm  font-bold mb-2" htmlFor="idNovaSenha">
              Senha:
            </label>
            <input
              className="w-full  border-2 border-cyan-500 rounded-md py-2 px-3"
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua senha"
              value={novoUsuario.senha}
              required
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-6">
            <button className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-all duration-500 ease-out">Cadastrar</button>
            <div className="mt-8 mb-8 flex justify-center">
              <Link href="/">
                <AiFillHome className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}