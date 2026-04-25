import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	const AuthenticatedRoutes = () => {
		return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Auth />} />
				</Route>
			</Routes>
		);
	};

	return (
		<section className="app">
			<HelmetProvider>
				<Router>
					<AuthenticatedRoutes />
				</Router>
			</HelmetProvider>
		</section>
	);
};

export default App;
