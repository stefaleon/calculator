import { createContext, useState } from "react";

// Step 1: Define the context
export type CalculatorContextType = {
	value: number;
	updateValue: (newValue: number) => void;
	add: (number: number) => void;
	subtract: (number: number) => void;
	multiply: (number: number) => void;
	divide: (number: number) => void;
};

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Step 2: Implement the provider component
type CalculatorProviderProps = {
	children: React.ReactNode;
};
export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
	const [value, setValue] = useState(0);

	const updateValue = (newValue: number) => {
		setValue(newValue);
	};

	const add = (number: number) => {
		setValue(value + number);
	};

	const subtract = (number: number) => {
		setValue(value - number);
	};

	const multiply = (number: number) => {
		setValue(value * number);
	};

	const divide = (number: number) => {
		setValue(value / number);
	};

	const calculatorContextValue: CalculatorContextType = {
		value,
		updateValue,
		add,
		subtract,
		multiply,
		divide,
	};

	return <CalculatorContext.Provider value={calculatorContextValue}>{children}</CalculatorContext.Provider>;
};
