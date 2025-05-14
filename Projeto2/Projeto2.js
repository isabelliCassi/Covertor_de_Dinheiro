ganhou = 2; //se for 1, perdeu, se for 0, ganhou.
for (let rodada = 1; rodada <= 3 ; rodada++) {
  console.log("rodada:" + rodada);
  escolhajogador = Number(
    prompt(
      "Rodada " + rodada + ", escolha um vidro entre 1,2 ou 3"
    )
  );
  pisoquebrado = Math.floor(Math.random() * 3) + 1;
  if (isNaN(escolhajogador) || escolhajogador > 1 || escolhajogador < 1) {
    alert("tentando roubar né? ladrãozinho!!");
    ganhou = 1;
    break;
  } else if (!Number.isInteger(escolhajogador)) {
    alert(
      "Você digitou um número quebrado, mas ele foi arredondado pra baixo!"
    );
    escolhajogador = Math.floor(escolhajogador);
  }
  if (escolhajogador == pisoquebrado) {
    alert("O vidro quebrou! Você morreu.");
    ganhou = 1
    break;
  } else {
    alert("Você passou! O piso quebrado estava no: " + pisoquebrado + "!");
  }
}
if (ganhou == 0) {
  alert("🏆 Você venceu todas as 10 rodadas! Parabéns!");
}
