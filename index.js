// Array com os nomes dos Pokémon
let nomesPokemon = ["Poochyena", "Zigzagoon", "Dragonite", "Dragonite", "Dragonite", "Poochyena", "Wurmple"];

// Informações dos Pokémon
let informacoesPokemon = [
  {nome: "Poochyena", Lv: 2, sexo: "M", vidaTotal: 13 + "/" + 13},
  {nome: "Zigzagoon", Lv: 2, sexo: "F", vidaTotal: 13 + "/" + 13},
  {nome: "Dragonite", Lv: 5, sexo: "M", vidaTotal: 25 + "/" + 25},
  {nome: "Dragonite", Lv: 5, sexo: "F", vidaTotal: 24 + "/" + 24},
  {nome: "Dragonite", Lv: 5, sexo: "F", vidaTotal: 24 + "/" + 24},
  {nome: "Poochyena", Lv: 3, sexo: "F", vidaTotal: 15 + "/" + 15},
  {nome: "Wurmple",   Lv: 2, sexo: "M", vidaTotal:  7 + "/" + 14},
];

// Loop para exibir a mensagem
for (let i = 0; i < 7; i++) {
    console.log(nomesPokemon[i] + " Cadastrado com sucesso. Tem " + informacoesPokemon[i].vidaTotal + " de vida.");
}