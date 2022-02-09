import React from "react";
const PageOneForm = () => {
	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');
	return (
		<>
			<div className="container">
				<span>CHOOSE YOUR WEAPON</span>
				<div className="inputgroup">
					<input
						type="text"
						className=""
						placeholder="Player 1 usanerme"
					/>
					<input
						type="text"
						className=""
						placeholder="Player 2 usanerme"
					/>
				</div>
				<div className="buttongroup">
					<button onClick={() => {
						setPlayer1()
					}} className="boton-x">X</button>
					<button className="boton-o">O</button>
				</div>
			</div>
		</>
	);
};
export default PageOneForm;
