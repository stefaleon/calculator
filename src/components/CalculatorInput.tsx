import { useState } from "react";
import { useCalculator } from "../context/useCalculator";

const CalculatorInput: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const { add, subtract, multiply, divide } = useCalculator();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleOperation = (operation: (number: number) => void) => {
		const number = parseFloat(inputValue);
		if (!isNaN(number)) {
			operation(number);
			setInputValue("");
		}
	};

	return (
		<div>
			<input type="number" value={inputValue} onChange={handleInputChange} />
			<button onClick={() => handleOperation(add)}>Add</button>
			<button onClick={() => handleOperation(subtract)}>Subtract</button>
			<button onClick={() => handleOperation(multiply)}>Multiply</button>
			<button onClick={() => handleOperation(divide)}>Divide</button>
		</div>
	);
};

export default CalculatorInput;
