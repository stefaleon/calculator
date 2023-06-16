import React from "react";
import { CalculatorProvider } from "./context/calculatorContext";
import CalculatorDisplay from "./components/CalculatorDisplay";
import CalculatorInput from "./components/CalculatorInput";

const CalculatorApp: React.FC = () => {
	return (
		<>
			<CalculatorDisplay />
			<CalculatorInput />
		</>
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
