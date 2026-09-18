const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const resultado = document.getElementById('resultado');

function somar() {
  // trata campo vazio ou não numérico como 0
  const v1 = parseFloat(campo1.value) || 0;
  const v2 = parseFloat(campo2.value) || 0;
  resultado.textContent = v1 + v2;
}

campo1.addEventListener('input', somar);
campo2.addEventListener('input', somar);

somar(); // executa a soma inicial (0 + 0 = 0)
