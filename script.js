let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count = count + 1;
    countEl.textContent = count;
}

function save(){
    let count_string = count + " - "
    saveEl.textContent += count_string
    console.log(count)
    countEl.textContent = 0;
    count = 0;
}
