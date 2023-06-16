import { useRef } from "react";
import { useCalculator } from "../context/useCalculator";

const CalculatorDisplay: React.FC = () => {
	const { value } = useCalculator();
	const divRef = useRef<HTMLDivElement>(null);

	// const handleCopy = () => {
	// 	if (divRef.current) {
	// 		const range = document.createRange();
	// 		range.selectNode(divRef.current);
	// 		window.getSelection()?.removeAllRanges();
	// 		window.getSelection()?.addRange(range);
	// 		document.execCommand("copy");
	// 		window.getSelection()?.removeAllRanges();
	// 	}
	// };
	
	const handleCopy = () => {
		if (divRef.current) {
			const textToCopy = divRef.current.innerText;
			navigator.clipboard
				.writeText(textToCopy)
				.then(() => {
					console.log("Text copied to clipboard");
				})
				.catch((error) => {
					console.error("Failed to copy text to clipboard:", error);
				});
		}
	};

	return (
		<div ref={divRef} onClick={handleCopy}>
			{value}
		</div>
	);
};

export default CalculatorDisplay;
