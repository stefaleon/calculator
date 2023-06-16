import React from "react";
import { CalculatorProvider } from "./context/calculatorContext";
import { useCalculator } from "./context/useCalculator";

const CalculatorDisplay: React.FC = () => {
	const { value } = useCalculator();

	return <div>{value}</div>;
};

type CalculatorButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ children, onClick }) => {
	return <button onClick={onClick}>{children}</button>;
};

const CalculatorApp: React.FC = () => {
	const { add, subtract } = useCalculator();

	return (
		<div>
			<CalculatorDisplay />
			<CalculatorButton onClick={() => add(5)}>Add 5</CalculatorButton>
			<CalculatorButton onClick={() => subtract(3)}>Subtract 3</CalculatorButton>
		</div>
	);
};

const App: React.FC = () => {
	return (
		<CalculatorProvider>
			<CalculatorApp />
		</CalculatorProvider>
	);
};

export default App;
