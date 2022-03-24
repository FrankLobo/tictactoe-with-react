import React, { useState } from "react";
import PageTwo from "./pagetwo.jsx";
import Subtitle from "./subtitule.jsx";

const PageOneForm = () => {
	let allGood = false;
	const [page, setPage] = useState(false);
	const [errores, setErrores] = useState({});

	const [player1, setPlayer1] = useState({
		name1: "",
		value: "X",
		begin: false,
	});
	const [player2, setPlayer2] = useState({
		name2: "",
		value: "O",
		begin: false,
	});

	const handleChangePlayers = (e, item) => {
		let aux1 = player1;
		let aux2 = player2;
		if (aux1 === player1) {
			aux1[item] = e.target.value;
			setPlayer1(aux1);
		}
		if (aux2 === player2) {
			aux2[item] = e.target.value;
			setPlayer2(aux2);
		}
		return;
	};

	const handleValidate = (values) => {
		const errores = {};
		if (!values.name1) {
			errores.name1 = "Nombre Jugador 1 es requerido!";
			allGood = true;
		}
		if (!values.name2) {
			errores.name2 = "Nombre Jugador 2 es requerido!";
			allGood = true;
		}
		return errores;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrores(handleValidate(player1, player2));
		if (allGood === false) {
			return (allGood = true), setPage(true);
		} else return false;
	};

	return (
		<>
			{page ? (
				<PageTwo player1={player1} player2={player2} />
			) : (
				<div className="main-container">
					<Subtitle numerodejugadas="Pic A Wapon" />
					<div className="container">
						<span>CHOOSE YOUR WEAPON</span>
						<form
							className="inputgroup"
							onSubmit={(e) => {
								handleSubmit(e);
							}}>
							<input
								onChange={(e) => {
									handleChangePlayers(e, "name1");
								}}
								type="text"
								className="campoA"
								id="name1"
								name="name1"
								placeholder="Player 1 usanername"
							/>
							<p className="errores">{errores.name1}</p>
							<input
								onChange={(e) => {
									handleChangePlayers(e, "name2");
								}}
								type="text"
								className="campoB"
								id="name2"
								name="name2"
								placeholder="Player 2 usanername"
							/>
							<p className="errores">{errores.name2}</p>
							<div className="buttongroup">
								<button type="submit" className="boton-x">
									X
								</button>
								<button type="submit" className="boton-o">
									O
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
export default PageOneForm;
