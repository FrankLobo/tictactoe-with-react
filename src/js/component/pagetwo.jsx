import React, { useState } from "react";

const PageTwo = () => {
	const [turn, setTurn] = useState("x");
	const [numerodejugadas, setNumerodejugadas] = useState(Array(9).fill(""));
	const showNumbers = (number) => {
		let cells = [...numerodejugadas];

		if (turn === "x") {
			cells[number] = "x";
			setTurn("o");
		} else {
			cells[number] = "o";
			setTurn("x");
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

// function matrixBuilder(builder) {
//     let newMatrix = [];
//     let matrixRow = [];
//     if (typeof builder === 'number') {
//         for (let i = 0; i < builder; i++) {
//             newMatrix.push(matrixRow);
//         }
//         for (let i = 0; i < builder; i++) {
//             matrixRow.push(Math.floor(Math.random() * 2));
//         }
//     }
//     return newMatrix;
// }

// // do not change anything from this line down
// console.log(matrixBuilder(5))
