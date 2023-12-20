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
export function getUniqueValues(list) {
    return [...new Set(list)];
}
export function countElementsInNestedArray(arr = []) {
    return arr.reduce((count, element) => count + (Array.isArray(element) ? countElementsInNestedArray(element) : 1), 0);
}
//# sourceMappingURL=util.js.map