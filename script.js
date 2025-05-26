let heroHP = 100;

const questions = [
  { q: 'Qual é o numeral cardinal que representa a quantidade de dedos em uma mão? (escreva por extenso)', a: 'cinco'},
  { q: 'Escreva por extenso o numeral 1.000.', a: 'mil' },
  { q: 'Quantos zeros tem o numeral um milhão? (escreva por extenso)', a: 'seis' },
  { q: 'Se você tem duas dúzias de ovos, quantos ovos você tem no total? (escreva por extenso)', a: 'vinte e quatro' },

  // Numerais Ordinais
  { q: 'Se você chegou em 3º lugar em uma corrida, qual numeral ordinal representa sua posição?', a: 'terceiro' },
  { q: 'Qual é o ordinal de 12?', a: 'décimo segundo' },
  { q: 'Se você está no século XXI, qual é o numeral ordinal que indica este século?', a: 'vigésimo primeiro' },
  { q: 'Escreva com algarismos o número ordinal "duzentésimo décimo oitavo"', a: '218' },

  // Numerais Multiplicativos
  { q: 'Qual numeral multiplicativo usamos para dizer que algo aumentou duas vezes?', a: 'dobro' },
  { q: 'Qual é o numeral multiplicativo que corresponde a "três vezes mais"?', a: 'triplo' },
  { q: 'Se o preço de um produto ficou quádruplo, quantas vezes ele aumentou?', a: 'quatro' },
  { q: 'Complete a frase: "Ele teve lucro ___________ no negócio." (multiplicativo de 5)', a: 'quíntuplo' },

  // Numerais Fracionários
  { q: 'Como se lê a fração 1/2?', a: 'um meio' },
  { q: 'Como se escreve a fração que representa "três quartos"?', a: '3/4' },
  { q: 'Se uma pizza foi dividida em oito pedaços e você comeu um, que fração você comeu? (escreva por extenso)', a: 'um oitavo' },
  { q: 'Qual é o numeral fracionário para 1/3?', a: 'um terço' },
  { q: 'Como se lê a fração 7/10?', a: 'sete décimos' },

  // Classificação e Uso Geral dos Numerais
  { q: 'Na frase "Comprei dois livros", qual a classificação do numeral "dois"?', a: 'cardinal' },
  { q: 'Na frase "Ele é o primeiro da fila", qual a classificação do numeral "primeiro"?', a: 'ordinal' },
  { q: 'Qual tipo de numeral é usado para indicar múltiplos de algo?', a: 'multiplicativo' },
  { q: 'Qual tipo de numeral é usado para indicar partes de um todo?', a: 'fracionário' },

  // Desafios e Aplicações
  { q: 'Se "bi" significa dois, qual numeral multiplicativo tem o prefixo "tri"?', a: 'triplo' },
  { q: 'Se você tem 3/4 de um bolo e come 1/4, quanto do bolo sobrou? (escreva por extenso)', a: 'dois quartos' },
  { q: 'Se você tem um número e o multiplica por 10, qual é o numeral multiplicativo correspondente?', a: 'décuplo' },
  { q: 'Você precisa dividir uma torta em metades. Qual numeral fracionário você está usando? (escreva por extenso)', a: 'um meio' },
  { q: 'Qual numeral é usado para indicar a ordem de um papa, como em "Papa Francisco I"? (Pode ser uma pegadinha!)', a: 'ordinal' }
];

const monsters = [
  { name: 'Slime', hp: 30, minDmg: 3, maxDmg: 7, img: 'monster1.png' },
  { name: 'Goblin', hp: 50, minDmg: 5, maxDmg: 10, img: 'monster2.png' },
  { name: 'Orc', hp: 70, minDmg: 7, maxDmg: 12, img: 'monster3.png' },
  { name: 'Dragão', hp: 100, minDmg: 10, maxDmg: 15, img: 'monster4.png' }
];

let currentQuestion = 0;
let currentMonster = null;
let monsterHP = 0;

function showQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById('question').textContent = questions[currentQuestion].q;
    document.getElementById('log').textContent = '';
    document.getElementById('answer').value = '';
  } else {
    document.getElementById('log').textContent = 'Parabéns! Você venceu todos os desafios!';
    disableButtons();
  }
}

function submitAnswer() {
  const answer = document.getElementById('answer').value.trim().toLowerCase();
  if (answer === questions[currentQuestion].a.toLowerCase()) {
    document.getElementById('log').textContent = 'Correto!';
    currentQuestion++;
    showQuestion();
  } else {
    document.getElementById('log').textContent = 'Errado! Prepare-se para o combate!';
    prepareMonster();
    enableCombat();
  }
}

function prepareMonster() {
  currentMonster = monsters[Math.floor(Math.random() * monsters.length)];
  monsterHP = currentMonster.hp;
  document.getElementById('monster-hp').textContent = monsterHP;
  const img = document.querySelector('#monster-container img');
  img.src = currentMonster.img;
  img.alt = currentMonster.name;
  showMonster();
}

function enableCombat() {
  document.getElementById('actions').innerHTML = `
    <button onclick="attack()">Atacar</button>
    <button onclick="heal()">Curar</button>
  `;
}

function attack() {
  const heroDamage = Math.floor(Math.random() * 20) + 5;
  const monsterDamage = Math.floor(Math.random() * (currentMonster.maxDmg - currentMonster.minDmg + 1)) + currentMonster.minDmg;
  monsterHP -= heroDamage;
  heroHP -= monsterDamage;
  updateStatus(`Você causou ${heroDamage} de dano. O ${currentMonster.name} causou ${monsterDamage}.`);
  checkGameOver();
}

function heal() {
  const healAmount = Math.floor(Math.random() * 20) + 10;
  heroHP += healAmount;
  if (heroHP > 100) heroHP = 100;
  const monsterDamage = Math.floor(Math.random() * (currentMonster.maxDmg - currentMonster.minDmg + 1)) + currentMonster.minDmg;
  heroHP -= monsterDamage;
  updateStatus(`Você se curou em ${healAmount}. O ${currentMonster.name} causou ${monsterDamage}.`);
  checkGameOver();
}

function updateStatus(message) {
  document.getElementById('hero-hp').textContent = Math.max(heroHP, 0);
  document.getElementById('monster-hp').textContent = Math.max(monsterHP, 0);
  document.getElementById('log').textContent = message;
}

function checkGameOver() {
  if (heroHP <= 0) {
    document.getElementById('log').textContent = 'Você foi derrotado!';
    disableButtons();
  } else if (monsterHP <= 0) {
    document.getElementById('log').textContent = `Você derrotou o ${currentMonster.name}! Responda a próxima pergunta.`;
    hideMonster();
    setTimeout(() => {
      document.getElementById('actions').innerHTML = `
        <input type="text" id="answer" placeholder="Sua resposta"> <br>
        <button onclick="submitAnswer()">Responder</button>
      `;
      currentQuestion++;
      showQuestion();
    }, 1500);
  }
}

function hideMonster() {
  const container = document.getElementById('monster-container');
  if (container) container.style.display = 'none';
}

function showMonster() {
  const container = document.getElementById('monster-container');
  if (container) container.style.display = 'block';
}

function disableButtons() {
  document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

document.addEventListener('DOMContentLoaded', () => {
  hideMonster();
  document.getElementById('actions').innerHTML = `
    <input type="text" id="answer" placeholder="Sua resposta"> <br>
    <button onclick="submitAnswer()">Responder</button>
  `;
  showQuestion();
});