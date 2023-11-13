"use client";

import "./login.css";
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
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-img">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={312}
            height={150}
          />
        </div>
        <fieldset className="form-fieldset">
          <legend className="form-legend">Login</legend>
          <div>
            <label className="form-label" htmlFor="idEmail">
              EMAIL:
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu e-mail"
              value={usuario.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label" htmlFor="idSenha">
              SENHA:
            </label>
            <input
              className="form-input"
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn-login">Entrar</button>
          </div>
        </fieldset>
        <div>
          <span>Ainda não possui um cadastro?</span>
          <Link href="/cliente/cadastro">
            <p>Clique aqui</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
