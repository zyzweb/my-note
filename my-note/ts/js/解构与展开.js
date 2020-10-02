"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var input = [1, 2]; //元组
function fa(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
fa(input); // 1 2
var _a = [1, 2, 3, 4], second = _a[1], four = _a[3];
console.log(second); //2
console.log(four); //4
var _b = [1, 2, 3, 4], one = _b[0], two = _b.slice(1);
console.log(one); //1
console.log(two); //[2,3,4]
function keepObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a; //b给了一个默认值1001
}
//对象的展开 相当于 Object.assign()
var defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
var search = __assign(__assign({}, defaults), { food: 'rich' });
console.log(search); // {food: 'rich', price: '$10', ambiance: 'noisy'}
