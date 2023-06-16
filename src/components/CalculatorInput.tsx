import { useState } from "react";
import { useCalculator } from "../context/useCalculator";

const CalculatorInput: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const { add, subtract, multiply, divide } = useCalculator();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleAdd = () => {
		const number = parseFloat(inputValue);
		if (!isNaN(number)) {
			add(number);
		}
	};

	const handleSubtract = () => {
		const number = parseFloat(inputValue);
		if (!isNaN(number)) {
			subtract(number);
		}
	};

	const handleMultiply = () => {
		const number = parseFloat(inputValue);
		if (!isNaN(number)) {
			multiply(number);
		}
	};

	const handleDivide = () => {
		const number = parseFloat(inputValue);
		if (!isNaN(number) && number !== 0) {
			divide(number);
		}
	};

	return (
		<div>
			<input type="number" value={inputValue} onChange={handleInputChange} />
			<button onClick={handleAdd}>+</button>
			<button onClick={handleSubtract}>-</button>
			<button onClick={handleMultiply}>x</button>
			<button onClick={handleDivide}>/</button>
		</div>
	);
};

export default CalculatorInput;
