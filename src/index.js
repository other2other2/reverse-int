module.exports = function reverse(n) {
    if (n === 0) return 0;
    let str = n.toString();
    let result = '';

    for (let i = str.length - 1; i >= 0; i -= 1) {
        if (str[i] === '-') continue;
        result = `${result}${str[i]}`;
    }
    return +result;
}
