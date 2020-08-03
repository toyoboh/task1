//初期値
let total = 0;
let inputText = '';
let ope = '+';
let check = 1;
let formula = '';
let inputBG
let inputFC
let colors = [
  'rgb(255, 70, 70)',
  'rgb(255, 221, 70)',
  'rgb(200, 255, 70)',
  'rgb(92, 255, 70)',
  'rgb(70, 255, 209)',
  'rgb(70, 172, 255)',
  'rgb(70, 82, 255)',
  'rgb(135, 70, 255)',
  'rgb(255, 70, 132)'
 ];
 let randNum 

//表示されるとこのid取得
let wind = document.getElementById('wind');

//数字とCEが入力された時の処理関数
function number(data) {
  if(data == 'CE') {
    check = 0;
    inputText = 0;
    wind.value = inputText;
  } else {
    check = 0;
    inputText = inputText + data;
    wind.value = inputText;
  }
}

//演算子が入力された時の処理関数
function operator(data) {
  if(check == 0) {
    check = 1;
    formula = total + ope + inputText;
    total = eval(formula);
    inputText = '';
    wind.value = total;
  }
  if(data == '=') {
    total = 0;
    ope = '+';
  } else {
    ope = data;
  }
}

//（C）全リセットの関数、計算途中のデータもトータルのデータも消す
function allClear() {
  total = 0;
  inputText = '';
  ope = '+';
  check = 0;
  wind.value = total;
}

//オリジナル機能のためのid取得
let origin = document.querySelectorAll('.input-w');
//オリジナル機能
function original() {
  randNum = Math.floor(Math.random() * colors.length);
  inputBG = colors[randNum];
  inputFC = 'black';
  for(let i = 0; i < origin.length; i++) {
    origin[i].style.backgroundColor = inputBG;
    origin[i].style.color = inputFC;
  }
}