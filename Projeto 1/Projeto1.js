function conversor() {
    const valor = prompt("Digite o valor em reais:"); //Const não permite que o valor seja alterado//
    const dolar = 5.65;
  
    if (valor && !isNaN(valor)) { // is nan= se não for um número. Se acrescenta ! na frente quer dizer ao contrario,
    //  && ele funciona apenas se as duas informações forem verdadeiras. EX:Se o usuário digitou alguma coisa E o que ele digitou é um número válido, CONTINUA A CONVERSÃO//
      const convertido = (valor / dolar).toFixed(2);// Ele converte o numero com suas casas decimais, por conta do tofixed(2)
      document.getElementById("resultado").innerText = `US$ ${convertido}`; //document.getelementbyid= Ele vai procurar o elemento no htmll, neste caso ele procurou o "resultado"
      //innerText é uma propriedade que define ou pega o conteúdo de texto dentro de um elemento HTML.
      // US$ Converte o número colocado em dolar   
    } else {
      document.getElementById("resultado").innerText = "Por favor, digite um número válido."; //Procura o elemento resultado e acrescenta o texto
    }   
   } 