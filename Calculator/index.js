const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let string = "";
let arry = Array.from(buttons);

arry.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
                string = eval(string);
                display.value = string;
        } else if (e.target.innerText == "AC") {
            string = "";
            display.value = string;
        }
        else if (e.target.innerText == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else {
            string += e.target.innerText;
            display.value = string;
        }
    });
});
