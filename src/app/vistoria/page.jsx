"use client";


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
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <form className="w-full max-w-md p-4 bg-white shadow-lg border-4 border-cyan-500 rounded-lg" onSubmit={handleCadastro}>
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/img/porto-seguro-logo.png"
            alt="Logo da Porto"
            width={250}
            height={80}
          />
        </div>
        <fieldset>
          <legend className="form-legend text-xl font-bold mb-3 text-center">Informações da Bicicleta</legend>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="form-label block text-sm font-bold mb-2" htmlFor="idMarca">
                Marca:
              </label>
              <input
                className="form-input w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
                type="text"
                name="marca"
                id="idMarca"
                placeholder="Digite a marca da bicicleta"
                value={novaBicicleta.marca}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="form-label block text-sm font-bold mb-2" htmlFor="idTipo">
                Tipo:
              </label>
              <input
                className="form-input w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
                type="text"
                name="tipo"
                id="idTipo"
                placeholder="Digite o tipo de bicicleta"
                value={novaBicicleta.tipo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="form-label block text-sm font-bold mb-2" htmlFor="idModelo">
                Modelo:
              </label>
              <input
                className="form-input w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
                type="text"
                name="modelo"
                id="idModelo"
                placeholder="Digite o modelo da bicicleta"
                value={novaBicicleta.modelo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="form-label block text-sm font-bold mb-2" htmlFor="idPreco">
                Preço:
              </label>
              <input
                className="form-input w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
                type="text"
                name="preco"
                id="idPreco"
                placeholder="Digite o preço da bicicleta"
                value={novaBicicleta.preco}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="form-label block text-sm font-bold mb-2" htmlFor="idDataCompra">
                Data da Compra:
              </label>
              <input
                className="form-input w-full border border-2 border-cyan-500 rounded-md py-2 px-3"
                type="date"
                name="dataCompra"
                id="idDataCompra"
                value={novaBicicleta.dataCompra}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn-login bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-all duration-500 ease-out">
              Cadastrar Bicicleta
            </button>
          </div>
        </fieldset>
      </form>
    </div>


  
  
  
  );
}
