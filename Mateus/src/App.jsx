import React, { useState } from 'react';
class Usuario {

  constructor(nome, email, telefone, idade) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.idade = idade;

  }

  exibirDados() {
    console.log("Nome: " + this.nome);
    console.log("E-mail: " + this.email);
    console.log("Telefone: " + this.telefone);
    console.log("Idade: " + this.idade);

  }

}


export default function App() {

  const [campos, setCampos] = useState({ nome: '', email: '', telefone: '', idade: '' });
  const validar = (e) => {

    e.preventDefault();

    try {

      if (!campos.nome.trim()) {

        throw new Error("O nome é obrigatório.");

      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) {

        throw new Error("E-mail inválido.");

      }

      if (!/^\d{10,11}$/.test(campos.telefone)) {

        throw new Error("Telefone inválido (digite apenas números com DDD).");

      }

      if (Number(campos.idade) <= 0) {

        throw new Error("A idade deve ser maior que zero.");

      }

      const usuarioNovo = new Usuario(campos.nome, campos.email, campos.telefone, campos.idade);

      usuarioNovo.exibirDados();


      alert("Sucesso! Verifique as informações salvas no console (F12).");


    } catch (err) {

      alert(err.message);

    }

  };

  const mudar = (e) => {

    setCampos({ ...campos, [e.target.name]: e.target.value });

  };


  return (

    <form onSubmit={validar} style={{ maxWidth: '300px', margin: '50px auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>

      <h3>Cadastro de Usuário</h3>
      <input name="nome" placeholder="Nome completo" onChange={mudar} style={{ padding: '8px' }} />

      <input name="email" placeholder="E-mail" onChange={mudar} style={{ padding: '8px' }} />

      <input name="telefone" placeholder="Telefone (apenas números)" onChange={mudar} style={{ padding: '8px' }} />

      <input name="idade" type="number" placeholder="Idade" onChange={mudar} style={{ padding: '8px' }} />

      <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Validar e Enviar
      </button>


    </form>

  );

}