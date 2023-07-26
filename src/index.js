// You should implement your task here.
function towelSort(matrix) {
    return matrix && matrix.length > 0
        ? matrix.reduce((acc, cur, idx) =>
              idx % 2 !== 0 ? [...acc, ...[...cur].reverse()] : [...acc, ...cur]
          )
        : [];
}

module.exports = towelSort;
