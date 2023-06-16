import { createContext, useReducer } from "react";

type CalculatorAction =
	| { type: "SET_VALUE"; payload: number }
	| { type: "ADD"; payload: number }
	| { type: "SUBTRACT"; payload: number }
	| { type: "MULTIPLY"; payload: number }
	| { type: "DIVIDE"; payload: number }
	| { type: "EVALUATE_EXPRESSION"; payload: string };

export type CalculatorContextType = {
	value: number;
	dispatch: React.Dispatch<CalculatorAction>;
};

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

const calculatorReducer = (state: number, action: CalculatorAction): number => {
	switch (action.type) {
		case "SET_VALUE":
			return action.payload;
		case "ADD":
			return state + action.payload;
		case "SUBTRACT":
			return state - action.payload;
		case "MULTIPLY":
			return state * action.payload;
		case "DIVIDE":
			return state / action.payload;
		case "EVALUATE_EXPRESSION":
			try {
				return eval(action.payload);
			} catch (error) {
				console.error("Error evaluating expression:", error);
				return state;
			}
		default:
			return state;
	}
};

type CalculatorProviderProps = {
	children: React.ReactNode;
};
export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
	const [value, dispatch] = useReducer(calculatorReducer, 0);

	const calculatorContextValue: CalculatorContextType = {
		value,
		dispatch,
	};

	return <CalculatorContext.Provider value={calculatorContextValue}>{children}</CalculatorContext.Provider>;
};
