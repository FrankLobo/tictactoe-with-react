import React, { useState } from "react";
import Subtitle from "./subtitule.jsx";
import PageOneForm from "./pageoneform.jsx";

const PageTwo = (props) => {
	const [turn, setTurn] = useState(props.player1.begin ? "X" : "O");
	const [numerodejugadas, setNumerodejugadas] = useState(Array(9).fill(""));
	const [page, setPage] = useState(false);
	const [winner, setWinner] = useState();

	const checkWinner = (cells) => {
		let combinations = {
			horizontal: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			vertical: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
		for (let combination in combinations) {
			combinations[combination].forEach((pattern) => {
				if (
					cells[pattern[0]] === "" ||
					cells[pattern[1]] === "" ||
					cells[pattern[2]] === ""
				) {
					// do notihng
				} else if (
					cells[pattern[0]] === cells[pattern[1]] &&
					cells[pattern[1]] === cells[pattern[2]]
				) {
					setWinner(cells[pattern[0]]);
				}
			});
		}
	};

	const showNumbers = (number) => {
		let cells = [...numerodejugadas];
		if (cells[number] !== "") {
			return;
		}
		if (turn === "X") {
			cells[number] = "X";
			setTurn("O");
		} else {
			cells[number] = "O";
			setTurn("X");
		}
		checkWinner(cells);
		setNumerodejugadas(cells);
	};
	const Jugadas = ({ number }) => {
		return (
			<td onClick={() => showNumbers(number)}>
				{numerodejugadas[number]}
			</td>
		);
	};
	const handleRestart = () => {
		setWinner(null);
		setNumerodejugadas(Array(9).fill(""));
	};
	return (
		<>
			{page ? (
				<PageOneForm />
			) : (
				<div className="">
					<Subtitle numerodejugadas={`It is turn ${turn}`} />
					<div className="containerboard">
						<table>
							<tbody>
								<tr>
									<Jugadas number={0} />
									<Jugadas number={1} />
									<Jugadas number={2} />
								</tr>
								<tr>
									<Jugadas number={3} />
									<Jugadas number={4} />
									<Jugadas number={5} />
								</tr>
								<tr>
									<Jugadas number={6} />
									<Jugadas number={7} />
									<Jugadas number={8} />
								</tr>
							</tbody>
						</table>
						{winner && (
							<>
								<p>{winner} ganaste!</p>
								<button
									onClick={() => {
										handleRestart();
									}}>
									Reiniciar el juego
								</button>
							</>
						)}
					</div>
					<button
						className="botonHome"
						onClick={() => {
							<PageOneForm />;
							setPage(true);
						}}>
						Back to Home
					</button>
				</div>
			)}
		</>
	);
};

export default PageTwo;
