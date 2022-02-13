const Calc = document.getElementById("Calc");
const Input = document.getElementById("Input");
const StandartPanel = document.getElementById("Standart_Panel");
const AdvancedPanel = document.getElementById("Advanced_Panel");

const StdButtonList = [
    '0','.','C','+',
    '1','2','3','-',
    '4','5','6','*',
    '7','8','9','/',
    '%','(',')','=',
]

const AdvButtonList = [
    'pow','sqrt','abs','1/x',
    'sin','cos','tan','round',
    'asin','acos','atan','rand',
    'exp','log','log2','log10',
    'π','τ','e','φ',
]

function createButton(panel, button) {
    panel.insertAdjacentHTML("Beforeend",`
        <button class="calc-panels__item-button--${button}" onclick="buttonClick('${button}')">${button}</button>
    `)
    return;
}

function tryCalc() {
    try {
        Input.value = eval(Input.value);
    } catch (e) {
        Input.value = NaN;
    }
}

function insert(symbol) {
    if (Input.value == '0' || Input.value == 'NaN') Input.value = symbol;
    else Input.value += symbol;
}

function buttonClick(btn) {
    switch (btn) {
        case 'C':
            Input.value = '0';
            return;
        case '=':
            tryCalc();
            return;
        case '%':
            tryCalc();
            Input.value = eval(Input.value) / 100;
            return;
        case 'π':
            insert(Math.PI);
            return;
        case 'τ':
            insert(2*Math.PI);
            return;
        case 'e':
            insert(Math.E);
            return;
        case 'φ':
            insert((Math.sqrt(5) + 1) / 2);
            return;
        case 'pow':
            insert('**');
            return;
        case '1/x':
            tryCalc();
            Input.value = 1/Input.value;
            return;
        case 'sin':
        case 'cos':
        case 'sqrt':
        case 'abs':
        case 'tan':
        case 'round':
        case 'exp':
        case 'asin':
        case 'acos':
        case 'atan':
        case 'log':
        case 'log2':
        case 'log10':
            tryCalc();
            Input.value = eval(`Math.${btn}(Input.value)`);
            return;
        case 'rand':
            tryCalc();
            Input.value = Input.value*Math.random();
            return;
        default:
            insert(btn);
            return;
    }
}

window.onload = function() {
    StdButtonList.forEach(btn => createButton(StandartPanel, btn));
    AdvButtonList.forEach(btn => createButton(AdvancedPanel, btn));
    return
} 