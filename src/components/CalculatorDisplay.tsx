import { useCalculator } from "../context/useCalculator";

const CalculatorDisplay: React.FC = () => {
	const { value } = useCalculator();

	return <div>{value}</div>;
};

export default CalculatorDisplay;
