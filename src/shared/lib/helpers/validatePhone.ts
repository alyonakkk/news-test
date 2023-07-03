function validatePhone(phone?: string) {
    if (!phone) return;

    const phoneLength = phone?.replace(/[\+\-\_ \(\)]/g, "").length;

    return phoneLength === 11;
}

export default validatePhone;
