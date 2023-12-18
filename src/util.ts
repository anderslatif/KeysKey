import KeysKey from './index.js';

export function unpackNestedArrays(list: KeysKey[]): KeysKey[] {
  return list.reduce((acc, element) => {
    if (Array.isArray(element)) {
      acc.push(...element);
    } else {
      acc.push(element);
    }
    return acc;
  }, [] as any);
}

export function getUniqueValues(list: KeysKey[]): KeysKey[] {
  return [...new Set(list)];
}

export function countElementsInNestedArray(arr = []) {
  return arr.reduce((count, element) => 
      count + (Array.isArray(element) ? countElementsInNestedArray(element) : 1), 0);
}
