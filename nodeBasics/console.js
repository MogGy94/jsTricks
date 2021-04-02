const { count } = require("console");

console.log("Console Methods");

console.error("This is an Error")

console.error("This is a Warning");

/***COnsole Table */
const table = [];
const getSeed = () => {
    const charnum = Math.floor(Math.random() * 10);
    let r = Math.random().toString(36).substring(charnum);
    /* console.log("random", r); */
    return r
}
for (let i = 0; i < 9; i++) {

    const seed = getSeed();
    table.push({
        id: seed,
        len: seed.length,
        third: seed[3]
    })
}
console.table(table)
/** Console Group */


const fun1 = (i, cb) => {
    console.group('fun1')
    if (i < 4) {
        console.log("FUN 1");
        cb();
    } else {
        console.log("**FIN FUN 1");
    }
    console.groupEnd('fun1')
}
const fun2 = (i, cb) => {
    console.group('fun2')
    if (i < 4) {
        console.log("FUN 2");
        cb();
    } else {
        console.log("**FIN FUN 2");
    }
    console.groupEnd('fun2')
}

const fun3 = (i, cb) => {
    console.group('fun3')
    if (i < 4) {
        console.log("FUN 3");
        cb();
    } else {
        console.log("**FIN FUN 3");
    }
    console.groupEnd('fun3')
}


const caller = (i = 0) => {
    const funArr = [fun1, fun2, fun3];
    const num = Math.floor(Math.random() * 3);
    const num2 = Math.floor(Math.random() * 3);
    funArr[num](i, funArr[num2]);
    i++
}

caller();


for (let u = 0; u < 30; u += 2) {
    console.count('cnt')
}