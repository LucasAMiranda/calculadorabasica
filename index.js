function calculadoraAdicaoSubtracao(num1, num2, soma = '+', subtracao = '-'){
soma = prompt("Informe uma operação: ")
subtracao = prompt("Informe outra operação: ")

if((soma == "+") && (subtracao == '-')){
    return num1 + num2
    return num1 - num2
}
else{
   console.log("Operacão Inválida!")
}
}
function efetuaOperacao(){
   var n1 = prompt('Digite um número');
   n1 = parseInt(n1);
   var n2 = prompt('Digite outro número');
   n2 = parseInt(n2);
   var operacao = prompt('Digite a operação:')
   var resultado = eval(n1+operacao+n2);
   alert('O resultado da operação é ' + resultado + '.')
}
