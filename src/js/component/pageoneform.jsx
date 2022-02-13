import React, { useState } from "react";
import PageTwo from "./pagetwo.jsx";

const PageOneForm = () => {
	const [player1, setPlayer1] = useState({
		name: "",
		value: "X",
		begin: false,
	});
	const [player2, setPlayer2] = useState({
		name: "",
		value: "O",
		begin: false,
	});
	const [page, setPage] = useState(false);
	return (
		<>
			{page ? (
				<PageTwo player1={player1} player2={player2} />
			) : (
				<div className="container">
					<span>CHOOSE YOUR WEAPON</span>
					<div className="inputgroup">
						<input
							onChange={(event) => {
								setPlayer1({
									...player1,
									name: event.target.value,
								});
							}}
							type="text"
							className=""
							placeholder="Player 1 usanerme"
						/>
						<input
							onChange={(event) => {
								setPlayer2({
									...player2,
									name: event.target.value,
								});
							}}
							type="text"
							className=""
							placeholder="Player 2 usanerme"
						/>
					</div>
					<div className="buttongroup">
						<button
							onClick={() => {
								setPlayer1({ ...player1, begin: true });
								setPage(true);
								console.log(player1);
							}}
							className="boton-x">
							X
						</button>
						<button
							onClick={() => {
								setPlayer2({ ...player2, begin: true });
								setPage(true);
								console.log(player2);
							}}
							className="boton-o">
							O
						</button>
					</div>
				</div>
			)}
		</>
	);
};
export default PageOneForm;
