import React from "react";
import { createRoot } from "react-dom/client";

import './styles/globals.scss';

import Resume from "./components/Resume/Resume";

const root = createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<Resume />
	</React.StrictMode>
);
