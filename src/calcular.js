// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, 
// que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  
  if (num2 === 0 && operador === '/') {
    return "Erro: divisão por zero"
  }
  else if (operador != (`+`, `-`, `*`, `/`)) {
    return "Erro: operação inválida"
  }
  else if (!isNaN(num1) || !isNaN(num2)) {
    return "Erro: parâmetros inválidos"
  }
  else {
    return num1 + operador + num2
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };