function summarizeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Empty array provided.");
    return null;
  }
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length
  };
}

// Tests
console.log("Case 1:", summarizeArray([4, 8, 12, 5, 20]));
console.log("Case 2:", summarizeArray(["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }]));
console.log("Case 3:", summarizeArray([99])); // single item
