import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { AddContact } from "./views/AddContact.jsx";
import { ContactGrid } from "./views/ContactGrid.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<AddContact />} />
						<Route path="/agenda" element={<ContactGrid />} />
						{/* <Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} /> */}
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
