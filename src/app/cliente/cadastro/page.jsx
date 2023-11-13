"use client";
import "./cadastro.css";
import React from "react";
import { useState } from "react";
import Image from "next/image";


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
      const resposta = await fetch("http://localhost:8080/porto", {
        method: "POST",
        body: JSON.stringify(novoUsuario),
      });

      const resultado = await resposta.json();
      console.log(resultado)
      console.log(resposta.status)

    } catch (error) {
      console.log("ocorreu um erro no envio dos dados",error)
      // window.location.href = "/cliente/cadastro" 
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleCadastro}>
        <div className="form-img">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={312}
            height={150}
          />
        </div>
        <fieldset className="form-fieldset">
          <legend className="form-legend">Cadastro</legend>
          <div>
            <label className="form-label" htmlFor="idNome">
              NOME:
            </label>
            <input
              className="form-input"
              type="text"
              name="nome"
              id="idNome"
              placeholder="Digite seu nome"
              value={novoUsuario.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idNovoEmail">
              EMAIL:
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu e-mail"
              value={novoUsuario.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idNovaSenha">
              SENHA:
            </label>
            <input
              className="form-input"
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua senha"
              value={novoUsuario.senha}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn-login">Cadastrar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
