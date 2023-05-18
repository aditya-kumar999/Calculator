let opNo = 0;
let a=0;
let b=0;
let operation = '';
let ans = 0;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return 'great';
    }
    return a/b;
}

function operate(a,b,op){
    a = Number(a);
    b = Number(b);
    ans = 0;
    switch (op) {
        case '+':
            ans = add(a,b);
            break;
        case '-':
            ans = subtract(a,b);
            break;
        case '*':
            ans = multiply(a,b);
            break;
        case '/':
            ans = divide(a,b);
            break;
    }
    return ans;
}

const number = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const ac = document.querySelector('.clear');
const del = document.querySelector('.del');
const op = document.querySelectorAll('.op')
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

ac.addEventListener('click',()=> {
    display.textContent = "";
    a=0;
    b=0;
    operation='';
    opNo=0;
});

del.addEventListener('click',()=>{
    let arr = display.textContent.split('');
    arr.splice(-1,1);
    display.textContent = arr.join("");
})

number.forEach(num => {
    num.addEventListener('click',()=>{
        if(display.textContent.length>=4){
            return;
        }
        let arr = display.textContent.split('');
        if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
            operation = display.textContent;
            display.textContent = "";
        }
        display.textContent += num.textContent;
    })
})

op.forEach(op =>{
    op.addEventListener('click',()=>{
        let arr = display.textContent.split("");
        if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
            arr[arr.length-1] = op.textContent;
        }
        else{
            opNo++;
            if(opNo==1){
                a = display.textContent;
            }
            if(opNo==2){
                b = display.textContent;
                a=operate(a,b,operation);
                opNo=1;
            }
            display.textContent = "";
            display.textContent += op.textContent;
        }
    })
})

equal.addEventListener('click',()=>{
    if(opNo<1){
        return;
    }
    b = display.textContent;
    display.textContent = operate(a,b,operation);
    opNo=0;
})

dot.addEventListener('click',()=>{
    let arr = display.textContent.split('');
    if(arr.includes('.')){
        return;
    }
    if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
        operation = display.textContent;
        display.textContent = "";
    }
    display.textContent += dot.textContent;
})

document.addEventListener('keydown',(event)=> {
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'){
        if(display.textContent.length>=4){
            return;
        }
        let arr = display.textContent.split('');
        if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
            operation = display.textContent;
            display.textContent = "";
        }
        display.textContent += event.key;
    }


    if(event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/'){
        let arr = display.textContent.split("");
        if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
            arr[arr.length-1] = op.textContent;
        }
        else{
            opNo++;
            if(opNo==1){
                a = display.textContent;
            }
            if(opNo==2){
                b = display.textContent;
                a=operate(a,b,operation);
                opNo=1;
            }
            display.textContent = "";
            display.textContent += event.key;
        }
    }


    if(event.key=='Backspace'){
        let arr = display.textContent.split('');
        arr.splice(-1,1);
        display.textContent = arr.join("");
    }


    if(event.key=='='||event.key=='Enter'){
        if(opNo<1){
            return;
        }
        b = display.textContent;
        display.textContent = operate(a,b,operation);
        opNo=0;
    }


    if(event.key=='.'){
        let arr = display.textContent.split('');
        if(arr.includes('.')){
            return;
        }
        if(arr.slice(-1,)=='/'||arr.slice(-1,)=='*'||arr.slice(-1,)=='-'||arr.slice(-1,)=='+'){
            operation = display.textContent;
            display.textContent = "";
        }
        display.textContent += event.key;
    }
});