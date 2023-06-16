import { useState } from "react";
import { useCalculator } from "../context/useCalculator";

const EvalInput: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const { evaluateExpression } = useCalculator();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleEvaluate = () => {
		evaluateExpression(inputValue);
		setInputValue("");
	};

	return (
		<div>
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<button onClick={handleEvaluate}>Evaluate</button>
		</div>
	);
};

export default EvalInput;
