import React, { useState, useEffect } from "react";
import "./App.css";
import { graphqlClient, toolsQuery } from "./utils/data";
function App() {
	const [tools, setTools] = useState(null);

	useEffect(() => {
		const fetchTools = async () => {
			try {
				const tools = await graphqlClient.request(toolsQuery);
				console.log(tools);
				setTools(tools);
			} catch (error) {
				console.error(error);
				setTools([]);
			}
		};

		fetchTools();
	}, []);

	const [greeting, setGreeting] = useState(null);
	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch("/api/hello?name=nick");
				const greet = await res.text();
				console.log(greet);
				setGreeting(greet);
			} catch (error) {
				console.error(error);
				setGreeting("Error");
			}
		}
		getGreeting();
	}, []);

	return (
		<div className="App">
			{!tools ? (
				"Loading"
			) : (
				<React.Fragment>{JSON.stringify(tools, 4)}</React.Fragment>
			)}
			<hr></hr>
		</div>
	);
}

export default App;
