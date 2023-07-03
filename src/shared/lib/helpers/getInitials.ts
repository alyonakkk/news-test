function getInitials(value: string) {
    return value
        .split(" ")
        .map((n) => n[0])
        .join("");
}

export default getInitials;
