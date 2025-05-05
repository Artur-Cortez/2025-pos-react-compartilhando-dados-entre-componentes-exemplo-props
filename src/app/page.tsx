"use client";

import React, { useState } from "react";

const MeuBotao = (props) => {
	const [contadorDoBotao, setContadorDoBotao] = useState(0);
	return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 max-w-xs mx-auto mb-4">
			<button
				className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white py-2 px-4 text-base rounded-full"
				onClick={() => setContadorDoBotao(contadorDoBotao + props.incremento)}
			>
				{props.titulo}
			</button>
			<p className="text-sm">
				O valor do <span className="font-bold">contador deste botão</span> é {contadorDoBotao}
			</p>
			<p className="text-sm">
				O valor do <span className="font-bold">contador compartilhado</span> é {props.contador}
			</p>
		</div>
	);
};

const Home = () => {
	const [contadorCompartilhado, setContadorCompartilhado] = useState(0);

	const contar = (incremento) => {
		setContadorCompartilhado(contadorCompartilhado + incremento);
	};

	return (
		<div className="container mx-auto p-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-2xl font-bold mb-1 hover:cursor-pointer" onClick={() => contar(5)}>
				Valor do contador compartilhado é {contadorCompartilhado}
			</h1>
			<MeuBotao titulo="+1" incremento={1} contador={contadorCompartilhado} />
			<MeuBotao titulo="+10" incremento={10} contador={contadorCompartilhado} />
		</div>
	);
};

export default Home;
