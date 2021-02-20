import React, { useState, useEffect } from "react";
import Layout from './layout/layout.js';

import './App.css';

function App() {

	let [data, setData] = useState({});
	let [country, setCountry] = useState("");


	return (
		<div className="App">
			<Layout></Layout>
		</div>
	);
}

export default App;
