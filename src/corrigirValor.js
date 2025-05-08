// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  valor = parseFloat(valor);

  if (valor === Number) {
    return valor
  }
  else if (valor != Number){
    return "Valor inválido"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };