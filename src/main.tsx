import React from "react";
import ReactDOM from "react-dom";

import './styles/globals.scss';

import Resume from "./components/Resume/Resume";

ReactDOM.render(
	<React.StrictMode>
		<Resume />
	</React.StrictMode>,
	document.getElementById("root")
);
