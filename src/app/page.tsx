"use client";

import React, { useState } from "react";

const MeuBotao = (props) => {
	const [contadorDoBotao, setContadorDoBotao] = useState(0);
	return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 max-w-xs mx-auto mb-4">
			<button
				className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-base rounded-full"
				onClick={() => setContadorDoBotao(contadorDoBotao + props.incremento)}
			>
				{props.titulo}
			</button>
			<p>O valor do contador deste botão é {contadorDoBotao}</p>
		</div>
	);
};

const Home = () => {
	return (
		<div className="container mx-auto p-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-2xl font-bold mb-1">Valor do contador global</h1>
			<MeuBotao titulo="+1" incremento={1} />
			<MeuBotao titulo="+10" incremento={10} />
		</div>
	);
};

export default Home;
