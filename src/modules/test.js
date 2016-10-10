// export
// var pi = 3.141593;
// var test = "sdfsadfd";
//
// module.exports = {
// 	'test': 'testvar'
// }

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export var pi = 3.141593;
export var testing = 5334344333433455;
