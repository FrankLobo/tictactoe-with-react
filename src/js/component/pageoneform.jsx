import React from "react";
import DynamicSubtitle from "./subtitulodinamico.jsx";
const PageOneForm = () => {
	return (
		<>
			<DynamicSubtitle />
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
					<button className="boton-x">X</button>
					<button className="boton-o">O</button>
				</div>
			</div>
		</>
	);
};
export default PageOneForm;
