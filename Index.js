
const addItem = document.getElementByClass("addItem");
const addItemtxt = document.getElementByClass("addItemtxt")
let n = 0;
addItem.onclick = function() {
    n++;
    addItemtxt.textContent = n;
}
