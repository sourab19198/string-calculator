
// let input = '(20 * (30 + 10) / (10 * 2))';

let input = prompt("input a value");

const reg = /[^0-9%^*\/()\-+.]/g;

input = input.replace(reg, "");


let opp = {

    add: '+',
    sub: '-',
    mlt: '*',
    div: '/',
    mod: '%',
    exp: '^',

};
opp.order = [
    [
        [opp.mlt],
        [opp.div],
        [opp.mod],
        [opp.exp]
    ],
    [
        [opp.sub],
        [opp.add]
    ]
]




let n = opp.order.length;
let ans = 0;

for (i = 0; i < n; i++) {
    let re = new RegExp('(\\d+\\.?\\d*)([\\' + opp.order[i].join('\\') + '])(\\d+\\.?\\d*)');
    re.lastIndex = 0;

    while (re.test(input)) {
        ans = calculateExp(RegExp.$1, RegExp.$2, RegExp.$3);
        if (isNaN(ans) || !isFinite(ans))
            break;
        input = input.replace(re, ans);
    }

}



function calculateExp(a, op, b) {
    a = a * 1;
    b = b * 1;
    switch (op) {
        case opp.add:
            return a + b;
            break;
        case opp.sub:
            return a - b;
            break;
        case opp.div:
            return a / b;
            break;
        case opp.mlt:
            return a * b;
            break;
        case opp.mod:
            return a % b;
            break;
        case opp.exp:
            return Math.pow(a, b);
            break;
        default:
            null;
    }
}



console.log(ans);


const h2 = document.querySelector('h2');

h2.innerText = ans;