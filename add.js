function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) return a + b;
    return "invalid param";
}

function sub(a, b) {
    if (a > 0 && b > 0) return a - b;
    return "invalid param";
}

module.exports = {add, sub};