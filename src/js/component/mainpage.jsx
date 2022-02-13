import React from "react";
import PageOneForm from "./pageoneform.jsx";
import Subtitle from "./subtitule.jsx";

//create your first component
const MainPage = () => {
	return (
		<>
			<h1>Tic Tac Toe in React.js</h1>
			<Subtitle numerodejugadas="Pic A Wapon" />
			<PageOneForm />
		</>
	);
};

export default MainPage;
