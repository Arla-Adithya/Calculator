
function add(a, b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    if(b==0) {
        return "Undefined";
    }
    return a/b;
}

function operate(operator,a,b) {
    if(operator == "+") {
        return add(a,b);
    }
    else if (operator == "-") {
        return subtract(a,b);
    }
    else if (operator == "x") {
        return multiply(a,b);
    }
    else if (operator == "/") {
        return divide(a,b);
    }
}

function splitting(str) {
    let arr = str.split(" ")
    let ans = operate(arr[1],parseInt(arr[0]),parseInt(arr[2]));
    return ans;
}
let str = "";
function display(key) {
    const div = document.createElement('div');
    div.classList.add('Display');
    const body = document.querySelector('div.display');
    div.textContent = key;
    body.append(div);
    
    if(key == '+' || key == '-' || key == "/" || key == "x"  || key == "=") {
        if(key == "=") {
            let a = splitting(str);
            console.log(a);
            str = "";
            Clean();
            div.textContent = a;
            body.append(div);
            return;
        }

        else if(str.includes("+") || str.includes("-") || str.includes("x") || str.includes("/")) {
            let a = splitting(str);
            console.log(a);
            Clean();
            console.log(str);
            div.textContent = a + key;
            body.append(div);
            str = splitting(str) +" "+ key + " ";
        }

        else {
            str = str + " " +key + " ";
        }
    }
    else {
        str = str + key;
    }

}


function Clean() {
    
    const display = document.querySelector("div.display");
    display.textContent = "";
}
function Clear() {
    const display = document.querySelector("div.display");
    display.textContent = "";
    str = "";
}
