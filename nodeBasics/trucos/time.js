let sum = 0;
const bound = 10;
console.time("t");
for (let i = 0; i < bound ** 5; i++) {

    sum += 1;
}
console.timeEnd("t");

console.time('as');
asyncFun().then(() => {
    console.timeEnd('as');

})
function asyncFun(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("termino el ASYNC prosceso");

            resolve()
        })
    })
}  