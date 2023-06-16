import { useState } from "react";
import { useCalculator } from "../context/useCalculator";

const CalculatorInput: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const { dispatch } = useCalculator();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleOperation = (operation: "ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE") => {
		const number = parseFloat(inputValue);
		if (!isNaN(number)) {
			dispatch({ type: operation, payload: number });
			setInputValue("");
		}
	};

	return (
		<div>
			<input type="number" value={inputValue} onChange={handleInputChange} />
			<button onClick={() => handleOperation("ADD")}>Add</button>
			<button onClick={() => handleOperation("SUBTRACT")}>Subtract</button>
			<button onClick={() => handleOperation("MULTIPLY")}>Multiply</button>
			<button onClick={() => handleOperation("DIVIDE")}>Divide</button>
		</div>
	);
};

export default CalculatorInput;
