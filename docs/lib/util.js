export function unpackNestedArrays(list) {
    return list.reduce((acc, element) => {
        if (Array.isArray(element)) {
            acc.push(...element);
        }
        else {
            acc.push(element);
        }
        return acc;
    }, []);
}
function isDigit() {
}
//# sourceMappingURL=util.js.map