"use client";

import React from "react";

const MeuBotao = () => {
	return <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-base rounded-full">Meu botão</button>;
};
const Home = () => {
	return (
		<div className="container mx-auto p-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-1">Valor do contador global</h1>
      <MeuBotao />
      <MeuBotao />
    </div>
	);
};

export default Home;
