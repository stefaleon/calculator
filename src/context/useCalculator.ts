import { useContext } from "react";
import { CalculatorContext } from "./calculatorContext";
import type { CalculatorContextType } from "./calculatorContext";

// Custom hook to consume the calculator context
export const useCalculator = (): CalculatorContextType => {
	const context = useContext(CalculatorContext);
	if (!context) {
		throw new Error("useCalculator must be used within a CalculatorProvider");
	}
	return context;
};
