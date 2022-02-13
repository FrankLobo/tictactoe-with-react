import React, { useState } from "react";

const PageTwo = (props) => {
	const [turn, setTurn] = useState(props.player1.begin ? "X" : "O");
	const [numerodejugadas, setNumerodejugadas] = useState(Array(9).fill(""));

	const showNumbers = (number) => {
		let cells = [...numerodejugadas];

		if (turn === "X") {
			cells[number] = "X";
			setTurn("O");
		} else {
			cells[number] = "O";
			setTurn("X");
		}
		setNumerodejugadas(cells);
	};
	const Jugadas = ({ number }) => {
		return (
			<td onClick={() => showNumbers(number)}>
				{numerodejugadas[number]}
			</td>
		);
	};
	return (
		<>
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
			</div>
		</>
	);
};
export default PageTwo;
