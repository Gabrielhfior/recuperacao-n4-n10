

  let campoIdade;
  let campoFantasia;
  let campoAventura;

function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de Livros");
    createSpan("Sua Idade: ");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox("Gosta de Fantasia?");
    campoAventura = createCheckbox ("Gosta de Aventura");
}

function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 7) {
    if(idade >= 16) {
      return "A Garota no Trem";
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "As Crônicas de Nárnia";
        } else {
          return "A Culpa é Das Estrelas";
        }
            } else {
            if(gostaDeFantasia){
                return "Como Treinar o Seu Dragão";
            } else {
                return "A Ilha do Tesouro";
             }
          }
        }
    } else {
        if(gostaDeFantasia) {
            return "Os 3 Porquinhos";
        } else {
            return "O Monstro das Cores";
        }
    }
}