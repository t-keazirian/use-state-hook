import React, { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(4);

	const decrementCount = () => {
		setCount(prevCount => prevCount - 1);
	};

	const incrementCount = () => {
		setCount(prevCount => prevCount + 1);
	};

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<p>{count}</p>
			<button onClick={incrementCount}>+</button>
		</>
	);
}
