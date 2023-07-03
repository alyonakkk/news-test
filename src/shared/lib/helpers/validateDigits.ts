function validateDigits(value: string) {
    return /^\d+$/.test(value.toString());
}

export default validateDigits;
