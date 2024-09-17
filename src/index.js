
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    const sorted = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // For even rows, add elements from left to right
            sorted.push(...matrix[i]);
        } else {
            // For odd rows, add elements from right to left
            sorted.push(...matrix[i].reverse());
        }
    }  
    return sorted;
}
