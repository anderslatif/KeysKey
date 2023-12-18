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
//# sourceMappingURL=util.js.map