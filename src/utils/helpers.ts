export function wait(timeout: number): Promise<any> {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
}

export const validateIBAN = (iban: string): boolean => {
	const cleanedIBAN = iban.replace(/\s/g, '').replace(/-/g, '');

	if (cleanedIBAN.length < 15 || cleanedIBAN.length > 34) {
		return false;
	}

	const rearrangedIBAN = cleanedIBAN.slice(4) + cleanedIBAN.slice(0, 4);

	const convertedIBAN = rearrangedIBAN
		.split('')
		.map(char => {
			const code = char.charCodeAt(0);
			if (code >= 65 && code <= 90) {
				return code - 55;
			}
			return char;
		})
		.join('');

	const remainder = convertedIBAN.split('').reduce((acc, digit) => {
		return (acc * 10 + parseInt(digit, 10)) % 97;
	}, 0);

	return remainder === 1;
};
