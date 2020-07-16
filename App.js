import React, {useState} from "react";

const App = () => {
	const state = useState();
	
	const [count, setCount] = useState(0);
	
	const IncNum = () => {
		setCount(count + 1);
	};
	return (
		<>
			<h1 style={{color: "red"}}>{count}</h1>
			<button className="btn" onClick={IncNum} >Click me</button>
		</>
	);
};
export default App;