"use client";

import "./vistoria.css";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Vistoria() {

  const [novaBicicleta, setNovaBicicleta] = useState({
    marca: "",
    tipo: "",
    modelo: "",
    preco: "",
    dataCompra: "",
  });

  // Função para manipular as mudanças nos campos da bicicleta
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setNovaBicicleta({ ...novaBicicleta, [name]: value });
  };

  // Função para submeter o cadastro da bicicleta
  const handleCadastro = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch("http://localhost:8080", {
        method: "POST",
        body: JSON.stringify(novaBicicleta),
      });

      const resultado = await response.json();
      console.log(resultado)
      console.log(resposta.status)
      window.location.href = "/";

    } catch (error) {
      alert("Ocorreu um erro no cadastro da bicicleta: " + error.message);
      // Adicione tratamento adicional ou log do erro, se necessário
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleCadastro}>
        <div className="form-img">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={400}
            height={200}
          />
        </div>
        <fieldset className="form-fieldset">
          <legend className="form-legend">Informações da Bicicleta</legend>
          <div>
            <label className="form-label" htmlFor="idMarca">
              Marca:
            </label>
            <input
              className="form-input"
              type="text"
              name="marca"
              id="idMarca"
              placeholder="Digite a marca da bicicleta"
              value={novaBicicleta.marca}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idTipo">
              Tipo:
            </label>
            <input
              className="form-input"
              type="text"
              name="tipo"
              id="idTipo"
              placeholder="Digite o tipo de bicicleta"
              value={novaBicicleta.tipo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idModelo">
              Modelo:
            </label>
            <input
              className="form-input"
              type="text"
              name="modelo"
              id="idModelo"
              placeholder="Digite o modelo da bicicleta"
              value={novaBicicleta.modelo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idPreco">
              Preço:
            </label>
            <input
              className="form-input"
              type="text"
              name="preco"
              id="idPreco"
              placeholder="Digite o preço da bicicleta"
              value={novaBicicleta.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="idDataCompra">
              Data da Compra:
            </label>
            <input
              className="form-input"
              type="date"
              name="dataCompra"
              id="idDataCompra"
              value={novaBicicleta.dataCompra}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn-login">Cadastrar Bicicleta</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
