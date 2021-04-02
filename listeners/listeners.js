console.log("listeners Tutorial");

const grantparent = document.querySelector('.grantparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grantparent.addEventListener('click', (e) => {
    console.log("OPUKUPY Clicked");
}, {
    once: true,
    capture: true,

})

grantparent.addEventListener('click', (e) => {
    console.log("GrantParent Clicked");
})

parent.addEventListener('click', (e) => {
    console.log("Parent Clicked");
})


child.addEventListener('click', (e) => {
    /* e.stopPropagation(); */
    console.log("Child Clicked");
})


/**Delegate Enventes */

const divs = document.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener('click', (e) => {
        /* e.stopPropagation(); */
        console.log("HOli");
    })
})


function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

const selectorCallback = () => {
    console.log("Selector Calbak");
}

addGlobalEventListener("click", "div", selectorCallback)