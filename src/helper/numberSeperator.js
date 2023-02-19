export function numberSeperator(num) {
    return new Intl.NumberFormat('de-DE').format(num);
}