import Image from "next/image";
import React from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
export default function ProjetosPage() {
  return (
    <div>
 
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl text-black font-bold mb-4">Olá, Bem vindo ao meu portifólio   </h1>
          <p className="text-xl text-gray-700 mb-4">
            Olá! Eu sou um estudante de Sistemas para Internet da Unicap. Tenho
            paixão por tecnologia e desenvolvimento de software, com
            competências em diversas áreas. Durante minha trajetória acadêmica e
            projetos pessoais, desenvolvi habilidades em:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-gray-700">
            <li>
              <strong>React:</strong> Criação de interfaces dinâmicas e
              responsivas para aplicações web.
            </li>
            <li>
              <strong>Java:</strong> Desenvolvimento de aplicações robustas e
              escaláveis.
            </li>
            <li>
              <strong>Python:</strong> Automação, análise de dados e
              desenvolvimento de scripts eficientes.
            </li>
            <li>
              <strong>Banco de Dados:</strong> Design, implementação e
              manutenção de bases de dados relacionais e não-relacionais.
            </li>
          </ul>
          <p className="text-xl text-gray-700 mt-4">
            Estou sempre buscando aprender e me aprimorar. Navegue pelo site
            para conhecer meus projetos, saber mais sobre mim e entrar em
            contato.
          </p>
        </div>
      </section>
      <section
        id="projetos"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-4xl">Projetos</h1>
      </section>
      <section
        id="sobre"
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <h1 className="text-4xl">Sobre</h1>
      </section>
      <section
        id="contatos"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <h1 className="text-4xl">Contatos</h1>
      </section>
    </div>
  );
}
