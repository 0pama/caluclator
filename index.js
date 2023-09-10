let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', function (e) {
        
        if (e.target.innerText == 'C') {
            display.innerText = '';
        }
        else if (e.target.innerText == '=') {
            try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            };
        } else if (e.target.innerText == '←') {
            display.innerText = display.innerText.slice(0,-1);
        }
        else {
            display.innerText += e.target.innerText
        }
    });
});
