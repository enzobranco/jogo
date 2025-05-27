const allQuestions = [
    // Perguntas FÁCEIS (easy) - 10 perguntas
    {
        question: "Qual a forma correta de escrever o numeral correspondente a 500?",
        options: ["Quinhentos", "Quingentos", "Cincocentos", "Quinhêmtos"],
        answer: "Quinhentos",
        difficulty: "easy",
        explanation: "O numeral quinhentos é grafado com 'nh' e 'e' na segunda sílaba.",
        specificHint: "Lembre-se do uso de 'nh' em numerais como este."
    },
    {
        question: "Em 'Havia cerca de doze pessoas na reunião', 'doze' é um numeral:",
        options: ["Cardinal", "Ordinal", "Multiplicativo", "Fracionário"],
        answer: "Cardinal",
        difficulty: "easy",
        explanation: "Numerais cardinais indicam quantidade exata.",
        specificHint: "Este tipo de numeral indica uma quantidade exata, sem indicar ordem."
    },
    {
        question: "Qual o numeral ordinal que corresponde a 100?",
        options: ["Centésimo", "Centesimo", "Centecimo", "Centesimésimo"],
        answer: "Centésimo",
        difficulty: "easy",
        explanation: "O numeral ordinal de 100 é 'centésimo', com 's' e acento agudo no 'e'.",
        specificHint: "Pense em como se refere a um período de cem anos, mas para ordem."
    },
    {
        question: "Assinale a opção em que o numeral fracionário está corretamente escrito:",
        options: ["Um terço", "Um têrço", "Um terço de", "Um quarto e"],
        answer: "Um terço",
        difficulty: "easy",
        explanation: "Numerais fracionários representam partes de um todo. 'Um terço' é a forma correta.",
        specificHint: "Numerais fracionários geralmente não vêm acompanhados de preposições desnecessárias."
    },
    {
        question: "Qual o numeral multiplicativo de dois?",
        options: ["Duplo", "Dobro", "Duas vezes", "Segundo"],
        answer: "Dobro",
        difficulty: "easy",
        explanation: "O numeral multiplicativo para dois é 'dobro' ou 'duplo'. 'Dobro' é mais comum para quantidade.",
        specificHint: "Indica que a quantidade foi multiplicada por dois."
    },
    {
        question: "Qual o número que representa 'meia centena'?",
        options: ["50", "100", "25", "500"],
        answer: "50",
        difficulty: "easy",
        explanation: "Uma centena é 100, então meia centena é 50.",
        specificHint: "Uma centena equivale a 100."
    },
    {
        question: "O numeral 'primeiro' é classificado como:",
        options: ["Ordinal", "Cardinal", "Multiplicativo", "Fracionário"],
        answer: "Ordinal",
        difficulty: "easy",
        explanation: "Numerais ordinais indicam ordem ou posição.",
        specificHint: "Este numeral indica a posição inicial em uma sequência."
    },
    {
        question: "A palavra 'milhão' é um numeral:",
        options: ["Cardinal", "Ordinal", "Coletivo", "Fracionário"],
        answer: "Cardinal",
        difficulty: "easy",
        explanation: "'Milhão' é um numeral cardinal, indicando uma quantidade exata.",
        specificHint: "Apesar de ser uma palavra, representa uma quantidade específica."
    },
    {
        question: "Qual a leitura correta de 1/2?",
        options: ["Um meio", "Meio um", "Um dois", "Meia parte"],
        answer: "Um meio",
        difficulty: "easy",
        explanation: "A leitura correta do numeral fracionário 1/2 é 'um meio'.",
        specificHint: "Representa uma de duas partes iguais."
    },
    {
        question: "Qual numeral representa 'dez vezes'?",
        options: ["Décuplo", "Decenal", "Dezena", "Décimo"],
        answer: "Décuplo",
        difficulty: "easy",
        explanation: "'Décuplo' é o numeral multiplicativo que significa dez vezes.",
        specificHint: "É um numeral multiplicativo que se refere a multiplicar por dez."
    },

    // Perguntas MÉDIAS (medium) - 10 perguntas
    {
        question: "Qual a forma correta de escrever o numeral ordinal correspondente a 1000?",
        options: ["Milésimo", "Milésino", "Milenésimo", "Milésimino"],
        answer: "Milésimo",
        difficulty: "medium",
        explanation: "O numeral ordinal para 1000 é 'milésimo'.",
        specificHint: "Similar a 'centésimo', mas para mil."
    },
    {
        question: "Em 'Ele recebeu o dobro do valor esperado', 'dobro' é um numeral:",
        options: ["Multiplicativo", "Cardinal", "Fracionário", "Ordinal"],
        answer: "Multiplicativo",
        difficulty: "medium",
        explanation: "Numerais multiplicativos indicam multiplicação de quantidades.",
        specificHint: "Este tipo de numeral indica um aumento proporcional."
    },
    {
        question: "Assinale a opção em que o numeral fracionário está *incorretamente* escrito:",
        options: ["Dois terços", "Três quartos", "Quatro quintos", "Cinco sextos de"],
        answer: "Cinco sextos de",
        difficulty: "medium",
        explanation: "A preposição 'de' não faz parte do numeral fracionário 'cinco sextos'.",
        specificHint: "Procure por preposições que não deveriam estar ligadas diretamente ao numeral."
    },
    {
        question: "Qual o numeral cardinal para 1/4 (uma parte de quatro)?",
        options: ["Um quarto", "Quarto", "Um por quatro", "Quarta parte"],
        answer: "Um quarto",
        difficulty: "medium",
        explanation: "O numeral fracionário 1/4 é lido como 'um quarto'.",
        specificHint: "A leitura desta fração é direta, indicando a parte do todo."
    },
    {
        question: "O numeral 'décimo terceiro' é classificado como:",
        options: ["Ordinal", "Cardinal", "Multiplicativo", "Coletivo"],
        answer: "Ordinal",
        difficulty: "medium",
        explanation: "'Décimo terceiro' indica a ordem em uma sequência.",
        specificHint: "Indica uma posição específica em uma ordenação."
    },
    {
        question: "Qual a escrita correta do numeral 200 em português?",
        options: ["Duzentos", "Duzentoz", "Duazentos", "Dozentos"],
        answer: "Duzentos",
        difficulty: "medium",
        explanation: "O numeral 200 é escrito como 'Duzentos'.",
        specificHint: "Começa com 'du' e termina com 'zentos'."
    },
    {
        question: "Qual o numeral multiplicativo para três?",
        options: ["Triplo", "Terceiro", "Trio", "Três vezes"],
        answer: "Triplo",
        difficulty: "medium",
        explanation: "O numeral multiplicativo para três é 'triplo'.",
        specificHint: "Indica que a quantidade foi multiplicada por três."
    },
    {
        question: "Em 'A conta deu mil e quinhentos reais', 'mil e quinhentos' é um numeral:",
        options: ["Cardinal", "Ordinal", "Fracionário", "Multiplicativo"],
        answer: "Cardinal",
        difficulty: "medium",
        explanation: "'Mil e quinhentos' expressa uma quantidade exata e é um numeral cardinal.",
        specificHint: "Expressa uma quantidade definida de dinheiro."
    },
    {
        question: "Qual o numeral ordinal correspondente a 20?",
        options: ["Vigésimo", "Vinte", "Vigentésimo", "Vintésimo"],
        answer: "Vigésimo",
        difficulty: "medium",
        explanation: "O numeral ordinal de 20 é 'vigésimo'.",
        specificHint: "Relacionado à palavra 'vinte', mas para indicar ordem."
    },
    {
        question: "Qual a leitura correta de 3/5?",
        options: ["Três quintos", "Três por cinco", "Quinto terços", "Três e cinco"],
        answer: "Três quintos",
        difficulty: "medium",
        explanation: "O numeral fracionário 3/5 é lido como 'três quintos'.",
        specificHint: "O denominador indica o tipo de fração; 'quinto' é usado aqui."
    },

    // Perguntas DIFÍCEIS (hard) - 10 perguntas
    {
        question: "Qual a forma correta de escrever o numeral ordinal correspondente a 1.000.000?",
        options: ["Milionésimo", "Milionézimo", "Um milionésimo", "Milionésímo"],
        answer: "Milionésimo",
        difficulty: "hard",
        explanation: "O numeral ordinal para um milhão é 'milionésimo'.",
        specificHint: "Deriva da palavra 'milhão', com sufixo de ordinal."
    },
    {
        question: "Em 'O acidente causou a morte de três centenas de pássaros', 'três centenas' é um numeral:",
        options: ["Coletivo", "Cardinal", "Multiplicativo", "Fracionário"],
        answer: "Coletivo",
        difficulty: "hard",
        explanation: "Numerais coletivos se referem a um conjunto de seres (ex: dezena, centena, milheiro).",
        specificHint: "Refere-se a um grupo ou conjunto com uma quantidade específica."
    },
    {
        question: "Assinale a opção em que o numeral multiplicativo está *incorretamente* escrito:",
        options: ["Quádruplo", "Quíntuplo", "Séptuplo", "Oituplo"],
        answer: "Oituplo",
        difficulty: "hard",
        explanation: "A forma multiplicativa de oito é 'óctuplo', não 'oito vezes', que é uma locução adverbial.",
        specificHint: "A expressão 'X vezes' nem sempre é o numeral multiplicativo formal."
    },
    {
        question: "Qual o numeral fracionário correspondente a 1/1000?",
        options: ["Um milésimo", "Um milésimo de", "Um por mil", "Um mil avos"],
        answer: "Um milésimo",
        difficulty: "hard",
        explanation: "O numeral fracionário 1/1000 é lido como 'um milésimo'.",
        specificHint: "Similar a 'um centésimo' ou 'um décimo', mas para mil."
    },
    {
        question: "O numeral 'septuagésimo quarto' é classificado como:",
        options: ["Ordinal", "Cardinal", "Multiplicativo", "Coletivo"],
        answer: "Ordinal",
        difficulty: "hard",
        explanation: "'Septuagésimo quarto' indica a posição de algo na ordem.",
        specificHint: "Indica uma posição bem específica e alta em uma sequência."
    },
    {
        question: "Qual a escrita correta do numeral 700 em português?",
        options: ["Setecentos", "Setessentos", "Setescentos", "Seticentos"],
        answer: "Setecentos",
        difficulty: "hard",
        explanation: "O numeral 700 é escrito como 'setecentos'.",
        specificHint: "A grafia correta envolve 'sete' seguido de 'centos'."
    },
    {
        question: "Qual o numeral multiplicativo para sete?",
        options: ["Séptuplo", "Sete vezes", "Setenário", "Sétuplo"],
        answer: "Séptuplo",
        difficulty: "hard",
        explanation: "O numeral multiplicativo para sete é 'séptuplo'.",
        specificHint: "Segue o padrão de 'quádruplo', 'quíntuplo', etc."
    },
    {
        question: "Em 'Havia duzentas e cinquenta páginas no livro', 'duzentas e cinquenta' é um numeral:",
        options: ["Cardinal", "Ordinal", "Fracionário", "Coletivo"],
        answer: "Cardinal",
        difficulty: "hard",
        explanation: "'Duzentas e cinquenta' expressa uma quantidade exata e é um numeral cardinal.",
        specificHint: "Indica a contagem exata do número de páginas."
    },
    {
        question: "Qual o numeral ordinal correspondente a 5000?",
        options: ["Quingentésimo", "Quinquagésimo", "Quinhentos milésimo", "Quingentésimoo"],
        answer: "Quingentésimo", // Resposta original do jogo. O ordinal correto para 5000 é "cinco milésimo".
        difficulty: "hard",
        explanation: "O numeral ordinal de 5000 é 'quingentésimo'. (Nota: Gramaticalmente, 'quingentésimo' é para 500. 'Cinco milésimo' seria para 5000.)",
        specificHint: "A forma ordinal 'Quingentésimo' refere-se ao número 500. Considere se há uma pegadinha ou se o jogo usa esta forma para 5000."
    },
    {
        question: "Qual a leitura correta de 1/20?",
        options: ["Um vigésimo", "Um por vinte", "Vigésimo um", "Vinte avos"],
        answer: "Um vigésimo",
        difficulty: "hard",
        explanation: "O numeral fracionário 1/20 é lido como 'um vigésimo'.",
        specificHint: "'Vigésimo' é um nome ordinal específico para o denominador 20."
    }
];
// --- Elementos do DOM ---
const difficultyScreen = document.getElementById('difficulty-screen');
const gameContainer = document.getElementById('game-container');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');
const achievementsScreen = document.getElementById('achievements-screen');
const settingsScreen = document.getElementById('settings-screen');
const studyModeScreen = document.getElementById('study-mode-screen');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
const viewRankingBtn = document.getElementById('view-ranking-btn');
const viewAchievementsBtn = document.getElementById('view-achievements-btn');
const settingsBtn = document.getElementById('settings-btn');
const studyModeBtn = document.getElementById('study-mode-btn');

const questionCounterDisplay = document.getElementById('question-counter');
const streakCounterDisplay = document.getElementById('streak-counter');
const timerDisplay = document.getElementById('timer-display');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionText = document.getElementById('question-text');
const optionsArea = document.getElementById('options-area');
const optionButtons = document.querySelectorAll('.option-btn');
const feedbackArea = document.getElementById('feedback-area');
const hintButton = document.getElementById('hint-btn');
const hintCountSpan = document.getElementById('hint-count');
const fiftyFiftyButton = document.getElementById('fifty-fifty-btn');
const fiftyFiftyCountSpan = document.getElementById('fifty-fifty-count');
const nextQuestionBtn = document.getElementById('next-question-btn');

const finalScoreDisplay = document.getElementById('final-score');
const scoreMessageDisplay = document.getElementById('score-message');
const restartBtn = document.getElementById('restart-btn');
const returnToMenuBtn = document.getElementById('return-to-menu-btn');

const rankingFilterButtons = document.querySelectorAll('.ranking-filter-btn');
const rankingList = document.getElementById('ranking-list');
const manageRankingBtn = document.getElementById('manage-ranking-btn');
const closeRankingBtn = document.getElementById('close-ranking-btn');

const achievementsList = document.getElementById('achievements-list');
const closeAchievementsBtn = document.getElementById('close-achievements-btn');

const themeSelect = document.getElementById('theme-select');
const toggleTimedModeBtn = document.getElementById('toggle-timed-mode-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');

const studyDifficultyFilter = document.getElementById('study-difficulty-filter');
const studySearchInput = document.getElementById('study-search-input');
const studyQuestionsList = document.getElementById('study-questions-list');
const closeStudyModeBtn = document.getElementById('close-study-mode-btn');

const nameInputModal = document.getElementById('name-input-modal');
const playerNameInput = document.getElementById('player-name-input');
const saveScoreBtn = document.getElementById('save-score-btn');
const cancelSaveBtn = document.getElementById('cancel-save-btn');

const adminPasswordModal = document.getElementById('admin-password-modal');
const adminPasswordInput = document.getElementById('admin-password-input');
const submitAdminPasswordBtn = document.getElementById('submit-admin-password-btn');
const cancelAdminLoginBtn = document.getElementById('cancel-admin-login-btn');


// --- Variáveis de Jogo ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = '';
let hintsRemaining = 3;
let fiftyFiftyRemaining = 1;
let dailyChallengeMode = false;
let currentStreak = 0;
let timer = null;
const TIME_PER_QUESTION = 20; // segundos
let timeLeft = TIME_PER_QUESTION;
let isTimedModeEnabled = false; // Configuração padrão, pode ser alterada nas configurações

const ADMIN_PASSWORD = "admin"; // Senha de administrador
let isAdminModeActive = false;

// --- Configurações Persistentes ---
let chosenTheme = localStorage.getItem('theme') || 'dark'; // Padrão: dark
// isTimedModeEnabled agora é carregado no DOMContentLoaded

// --- Estruturas de Dados Persistentes ---
let ranking = JSON.parse(localStorage.getItem('ranking')) || {
    easy: [],
    medium: [],
    hard: [],
    daily: []
};

let achievements = JSON.parse(localStorage.getItem('achievements')) || {
    'Mestre Numeral Fácil': { unlocked: false, description: 'Complete 5 jogos fáceis com mais de 80% de acerto.' },
    'Mestre Numeral Médio': { unlocked: false, description: 'Complete 5 jogos médios com mais de 80% de acerto.' },
    'Mestre Numeral Difícil': { unlocked: false, description: 'Complete 5 jogos difíceis com mais de 80% de acerto.' },
    'Gênio dos Cardinais': { unlocked: false, description: 'Acerte 20 perguntas sobre numerais cardinais.' },
    'Imbatível': { unlocked: false, description: 'Consiga uma pontuação perfeita em um jogo de dificuldade difícil.' },
    'Explorador de Numerais': { unlocked: false, description: 'Jogue pelo menos um jogo em cada dificuldade (Fácil, Médio, Difícil, Diário).' },
    'Dica Usada com Sabedoria': { unlocked: false, description: 'Vença um jogo usando pelo menos uma dica.' },
    'Cinco em Sequência': { unlocked: false, description: 'Acerte 5 perguntas consecutivas em qualquer dificuldade.' },
    'Dez em Sequência': { unlocked: false, description: 'Acerte 10 perguntas consecutivas em qualquer dificuldade.' },
    'Desafio Diário Completo': { unlocked: false, description: 'Complete o Desafio Diário com sucesso.' },
    'Viciado em Numerais': { unlocked: false, description: 'Jogue 20 jogos no total.' }
};

let gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
    easyGamesPlayed: 0,
    mediumGamesPlayed: 0,
    hardGamesPlayed: 0,
    totalGamesPlayed: 0,
    correctCardinalAnswers: 0,
    totalCorrectAnswers: 0, // Usado para checar "Dica Usada com Sabedoria" se o jogo for vencido
    dailyChallengeLastPlayed: null, // Para o desafio diário
    dailyChallengeStreak: 0, // Para o desafio diário
    usedHintInCurrentGame: false // Para a conquista "Dica Usada com Sabedoria"
};

// --- Funções de Ajuda ---

function showScreen(screenId) {
    document.querySelectorAll('.container > div').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    // Esconder modais quando mudar de tela
    nameInputModal.classList.add('hidden');
    adminPasswordModal.classList.add('hidden');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function applyTheme(theme) {
    document.body.className = ''; // Remove todas as classes de tema
    document.body.classList.add(theme + '-theme');
    localStorage.setItem('theme', theme);
    chosenTheme = theme;
}

function updateTimedModeButton() {
    toggleTimedModeBtn.textContent = isTimedModeEnabled ? 'Ligado' : 'Desligado';
    toggleTimedModeBtn.classList.toggle('on', isTimedModeEnabled);
    toggleTimedModeBtn.classList.toggle('off', !isTimedModeEnabled);
}

function updateGameStats() {
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function updateAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
    renderAchievements(); // Atualiza a tela de conquistas
}

function checkAndUnlockAchievements() {
    // Mestre Numeral Fácil/Médio/Difícil
    ['easy', 'medium', 'hard'].forEach(diff => {
        const gamesPlayed = gameStats[`${diff}GamesPlayed`];
        // Proporção de acertos sobre as 10 questões padrão por jogo (pontuação máxima é 100)
        const minScoreForAchievement = 80; // 80%
        // Correção: gamesWithHighAccuracy deve contar a partir do ranking, que armazena score por jogo
        const gamesWithHighAccuracy = (ranking[diff] || []).filter(s => s.score >= minScoreForAchievement).length;


        if (gamesWithHighAccuracy >= 5 && !achievements[`Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}`].unlocked) {
            achievements[`Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}`].unlocked = true;
            alert(`Conquista desbloqueada: Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}!`);
        }
    });

    // Gênio dos Cardinais
    if (gameStats.correctCardinalAnswers >= 20 && !achievements['Gênio dos Cardinais'].unlocked) {
        achievements['Gênio dos Cardinais'].unlocked = true;
        alert('Conquista desbloqueada: Gênio dos Cardinais!');
    }

    // Explorador de Numerais
    const playedDifficulties = new Set();
    if (gameStats.easyGamesPlayed > 0) playedDifficulties.add('easy');
    if (gameStats.mediumGamesPlayed > 0) playedDifficulties.add('medium');
    if (gameStats.hardGamesPlayed > 0) playedDifficulties.add('hard');
    // Verifica se um desafio diário foi JOGADO e se existe alguma pontuação para ele,
    // indicando que foi completado ao menos uma vez.
    if ((ranking.daily && ranking.daily.length > 0) || (gameStats.dailyChallengeLastPlayed && gameStats.dailyChallengeStreak > 0)) {
        playedDifficulties.add('daily');
    }


    if (playedDifficulties.size >= 4 && !achievements['Explorador de Numerais'].unlocked) {
        achievements['Explorador de Numerais'].unlocked = true;
        alert('Conquista desbloqueada: Explorador de Numerais!');
    }

    // Viciado em Numerais
    if (gameStats.totalGamesPlayed >= 20 && !achievements['Viciado em Numerais'].unlocked) {
        achievements['Viciado em Numerais'].unlocked = true;
        alert('Conquista desbloqueada: Viciado em Numerais!');
    }

    updateAchievements();
}

function resetGameStatsForNewGame() {
    gameStats.usedHintInCurrentGame = false;
    gameStats.totalCorrectAnswers = 0; // Resetar para cada jogo
    updateGameStats();
}

// --- Funções de Ranking ---
function saveScore(name, score, difficulty) {
    if (!ranking[difficulty]) { // Garante que a chave de dificuldade exista
        ranking[difficulty] = [];
    }
    ranking[difficulty].push({ name, score, date: new Date().toLocaleDateString('pt-BR') });
    ranking[difficulty].sort((a, b) => b.score - a.score); // Ordena do maior para o menor
    ranking[difficulty] = ranking[difficulty].slice(0, 10); // Mantém apenas os 10 melhores
    localStorage.setItem('ranking', JSON.stringify(ranking));
    renderRanking(currentDifficulty); // Atualiza o ranking na tela
}

// MODIFIED: renderRanking function
function renderRanking(difficulty) {
    rankingList.innerHTML = '';
    const scores = ranking[difficulty] || []; // Garante que scores seja um array
    if (scores.length === 0) {
        rankingList.innerHTML = '<li class="no-scores">Nenhuma pontuação registrada para esta dificuldade ainda.</li>';
        return;
    }
    scores.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}. ${entry.name}</span> <span>${entry.score} pontos (${entry.date})</span>`;

        if (isAdminModeActive) {
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.classList.add('remove-player-btn', 'secondary-btn'); // Apply some base styling
            removeBtn.style.marginLeft = '10px'; // Add some spacing
            removeBtn.style.padding = '5px 10px'; // Make button smaller
            removeBtn.style.fontSize = '0.8em';   // Smaller font size
            removeBtn.onclick = () => confirmRemovePlayer(entry.name, entry.date, difficulty);
            li.appendChild(removeBtn);
        }
        rankingList.appendChild(li);
    });
}

// NEW: Function to get current ranking difficulty
function getCurrentRankingDifficulty() {
    const activeFilter = document.querySelector('.ranking-filter-btn.active-filter');
    return activeFilter ? activeFilter.dataset.difficulty : 'easy'; // Default to 'easy' if none found
}

// NEW: Function to confirm player removal
function confirmRemovePlayer(playerName, playerDate, difficulty) {
    const difficultyName = difficulty === 'daily' ? 'Diário' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    if (confirm(`Tem certeza que deseja remover o jogador ${playerName} (pontuação de ${playerDate}) do ranking ${difficultyName}?`)) {
        removePlayer(playerName, playerDate, difficulty);
    }
}

// NEW: Function to remove a player from ranking
function removePlayer(playerName, playerDate, difficulty) {
    if (ranking[difficulty]) {
        const initialLength = ranking[difficulty].length;
        // Filter out the player to be removed
        ranking[difficulty] = ranking[difficulty].filter(
            p => !(p.name === playerName && p.date === playerDate)
        );

        if (ranking[difficulty].length < initialLength) {
            localStorage.setItem('ranking', JSON.stringify(ranking));
            renderRanking(difficulty); // Re-render the list to reflect removal
            alert(`Jogador ${playerName} (data: ${playerDate}) removido do ranking de ${difficultyName(difficulty)}.`);
        } else {
            alert(`Jogador ${playerName} (data: ${playerDate}) não encontrado no ranking de ${difficultyName(difficulty)} para remoção.`);
        }
    } else {
        alert(`Ranking para dificuldade ${difficultyName(difficulty)} não encontrado.`);
    }
}

// Helper to get display name of difficulty
function difficultyName(difficulty) {
    return difficulty === 'daily' ? 'Diário' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}


function clearRanking(difficulty) {
    const diffName = difficultyName(difficulty);
    if (confirm(`Tem certeza que deseja limpar o ranking de ${diffName}?\nEsta ação é irreversível!`)) {
        ranking[difficulty] = [];
        localStorage.setItem('ranking', JSON.stringify(ranking));
        renderRanking(difficulty);
        alert(`Ranking de ${diffName} limpo com sucesso!`);
    }
}

// MODIFIED: enterAdminMode function
function enterAdminMode() {
    isAdminModeActive = true;
    manageRankingBtn.textContent = 'Sair do Modo Admin';

    // Remove existing clear buttons if any, to prevent duplication
    const existingClearBtnsDiv = document.querySelector('.admin-clear-btns');
    if (existingClearBtnsDiv) {
        existingClearBtnsDiv.remove();
    }

    const clearRankingBtnsContainer = document.createElement('div');
    clearRankingBtnsContainer.classList.add('admin-clear-btns');
    clearRankingBtnsContainer.style.display = 'flex';
    clearRankingBtnsContainer.style.flexWrap = 'wrap';
    clearRankingBtnsContainer.style.gap = '10px';
    clearRankingBtnsContainer.style.marginTop = '20px';
    clearRankingBtnsContainer.style.justifyContent = 'center';

    const difficulties = ['easy', 'medium', 'hard', 'daily'];
    difficulties.forEach(diff => {
        const btn = document.createElement('button');
        btn.classList.add('secondary-btn');
        btn.textContent = `Limpar ${difficultyName(diff)}`;
        btn.onclick = () => clearRanking(diff);
        clearRankingBtnsContainer.appendChild(btn);
    });

    if (manageRankingBtn.nextSibling) {
        manageRankingBtn.parentNode.insertBefore(clearRankingBtnsContainer, manageRankingBtn.nextSibling);
    } else {
        manageRankingBtn.parentNode.appendChild(clearRankingBtnsContainer);
    }
    alert('Modo Administrador Ativado! Agora você pode remover jogadores individualmente ou limpar rankings.');
    renderRanking(getCurrentRankingDifficulty()); // Re-render to show remove buttons
}

// MODIFIED: exitAdminMode function
function exitAdminMode() {
    isAdminModeActive = false;
    manageRankingBtn.textContent = 'Gerenciar Ranking';
    const clearBtnsDiv = document.querySelector('.admin-clear-btns');
    if (clearBtnsDiv) {
        clearBtnsDiv.remove();
    }
    renderRanking(getCurrentRankingDifficulty()); // Re-render to hide remove buttons
}


// --- Funções de Conquistas ---
function renderAchievements() {
    achievementsList.innerHTML = '';
    for (const key in achievements) {
        const achievement = achievements[key];
        const li = document.createElement('li');
        li.classList.add(achievement.unlocked ? 'unlocked' : 'locked');
        li.innerHTML = `
            <strong>${key}</strong>
            <span>${achievement.description}</span>
        `;
        achievementsList.appendChild(li);
    }
}

// --- Funções do Jogo ---
function startGame(difficulty, isDaily = false) {
    showScreen('game-container');
    currentDifficulty = difficulty;
    dailyChallengeMode = isDaily;
    score = 0;
    currentQuestionIndex = 0;
    hintsRemaining = 3;
    fiftyFiftyRemaining = 1;
    currentStreak = 0;
    gameStats.usedHintInCurrentGame = false;
    gameStats.totalCorrectAnswers = 0;

    updateHintButtons();
    updateFiftyFiftyButton();
    updateStreakDisplay();
    feedbackArea.textContent = '';
    nextQuestionBtn.textContent = 'Próxima Pergunta';
    nextQuestionBtn.classList.add('hidden');

    if (dailyChallengeMode) {
        currentQuestions = getDailyChallengeQuestions();
    } else {
        currentQuestions = shuffleArray([...allQuestions.filter(q => q.difficulty === difficulty)]);
    }

    if (currentQuestions.length === 0) {
        feedbackArea.textContent = 'Nenhuma pergunta disponível para esta dificuldade.';
        setTimeout(() => showScreen('difficulty-screen'), 3000);
        return;
    }


    if (isTimedModeEnabled && !dailyChallengeMode) {
        timerDisplay.classList.remove('hidden');
    } else {
        timerDisplay.classList.add('hidden');
    }

    loadQuestion();
    updateProgressBar(); // Garante que a barra de progresso seja resetada no início
    resetGameStatsForNewGame();
}

function getDailyChallengeQuestions() {
    const today = new Date().toDateString();
    // Usa a data como semente para o gerador de números aleatórios
    // A biblioteca seedrandom já está incluída no HTML
    const rng = new Math.seedrandom(today);

    // Embaralha todas as perguntas usando a semente diária
    const seededShuffle = (array) => {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(rng() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };

    const dailyQuestionsPool = seededShuffle([...allQuestions]);
    return dailyQuestionsPool.slice(0, 10); // Pega as primeiras 10 perguntas para o desafio diário
}


function loadQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const questionData = currentQuestions[currentQuestionIndex];
        questionText.textContent = questionData.question;

        const shuffledOptions = shuffleArray([...questionData.options]);
        optionButtons.forEach((button, index) => {
            button.textContent = shuffledOptions[index];
            button.classList.remove('correct', 'incorrect', 'disabled');
            button.onclick = () => checkAnswer(button, questionData.answer, questionData.difficulty, questionData.explanation);
            button.disabled = false;
        });

        questionCounterDisplay.textContent = `Pergunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
        // Limpar feedbackArea ao carregar nova pergunta, a menos que queira manter dicas entre elas (não usual)
        feedbackArea.textContent = '';
        nextQuestionBtn.classList.add('hidden');

        // --- Início da Modificação ---
        // Reseta o estado do botão de dica para a nova pergunta
        if (hintsRemaining > 0) {
            hintButton.disabled = false;
            hintButton.style.opacity = '1';
        } else {
            hintButton.disabled = true;
            hintButton.style.opacity = '0.5';
        }

        // Reseta o estado do botão 50/50 para a nova pergunta
        if (fiftyFiftyRemaining > 0) {
            fiftyFiftyButton.disabled = false;
            fiftyFiftyButton.style.opacity = '1';
        } else {
            fiftyFiftyButton.disabled = true;
            fiftyFiftyButton.style.opacity = '0.5';
        }
        // --- Fim da Modificação ---

        startTimer();
    } else {
        endGame();
    }
    updateProgressBar();
}
function startTimer() {
    if (!isTimedModeEnabled || dailyChallengeMode) {
        timerDisplay.classList.add('hidden');
        if (timer) clearInterval(timer);
        return;
    }

    timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = `Tempo: ${timeLeft}s`;
    timerDisplay.classList.remove('low-time', 'running'); // Limpa classes antigas
    timerDisplay.classList.add('running');


    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tempo: ${timeLeft}s`;

        if (timeLeft <= 5 && timeLeft > 0) { // Adicionado timeLeft > 0 para evitar aplicar low-time em 0s
            timerDisplay.classList.add('low-time');
        } else {
            timerDisplay.classList.remove('low-time');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timerDisplay.classList.remove('running', 'low-time');
}

function handleTimeUp() {
    feedbackArea.textContent = 'Tempo esgotado! Resposta incorreta.';
    feedbackArea.style.color = 'var(--incorrect-red)';
    currentStreak = 0;
    updateStreakDisplay(); // Atualiza a exibição da sequência
    disableOptions();
    showCorrectAnswer(); // Usa currentQuestionIndex (antes do incremento) para mostrar a resposta correta da pergunta atual
    nextQuestionBtn.classList.remove('hidden');
    currentQuestionIndex++; // Incrementa para a próxima carga de pergunta
    updateProgressBar();
}


function disableOptions() {
    optionButtons.forEach(button => {
        button.disabled = true;
        // button.onclick = null; // Remover onclick pode ser problemático se precisar reabilitar. Desabilitar é suficiente.
    });
    hintButton.disabled = true;
    fiftyFiftyButton.disabled = true;
}

// MODIFICADO: Função showCorrectAnswer
function showCorrectAnswer() {
    // Esta função é chamada quando currentQuestionIndex ainda aponta para a pergunta
    // que acabou de ser respondida ou cujo tempo esgotou, ANTES de ser incrementado para a próxima pergunta.
    if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) {
        // console.warn("showCorrectAnswer called with out-of-bounds index:", currentQuestionIndex);
        return;
    }
    const questionData = currentQuestions[currentQuestionIndex];
    if (!questionData) {
        // console.warn("showCorrectAnswer: No question data for index:", currentQuestionIndex);
        return;
    }
    const correctAnswer = questionData.answer;
    optionButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });
}

// MODIFICADO: Função checkAnswer
function checkAnswer(selectedButton, correctAnswerText, difficulty, explanation) { // O parâmetro correctAnswerText é o texto do selectedButton. A resposta correta vem de questionData.answer
    stopTimer();
    disableOptions();

    const questionData = currentQuestions[currentQuestionIndex]; // Pega os dados da pergunta atual

    if (!questionData) { // Verificação de segurança
        console.error("Erro: questionData não encontrado para o índice atual:", currentQuestionIndex);
        endGame(); // Termina o jogo se não houver dados da pergunta
        return;
    }


    if (selectedButton.textContent === questionData.answer) { // Compara com a resposta correta
        score += 10;
        feedbackArea.textContent = 'Correto!';
        feedbackArea.style.color = 'var(--correct-green)';
        selectedButton.classList.add('correct');
        currentStreak++;
        gameStats.totalCorrectAnswers++;

        // Verifica se a pergunta é sobre cardinais
        if (questionData.explanation.toLowerCase().includes('cardinal') || questionData.question.toLowerCase().includes('cardinal')) {
            gameStats.correctCardinalAnswers++;
            updateGameStats();
        }
        // Não é necessário chamar showCorrectAnswer() se a resposta estiver correta
    } else {
        feedbackArea.textContent = `Incorreto. A resposta correta era: ${questionData.answer}.`;
        feedbackArea.style.color = 'var(--incorrect-red)';
        selectedButton.classList.add('incorrect');
        currentStreak = 0;
        showCorrectAnswer(); // Destaca a resposta correta para a pergunta *atual*
    }

    updateStreakDisplay();
    checkAndUnlockAchievements(); // Verifica conquistas após cada resposta

    nextQuestionBtn.classList.remove('hidden'); // Mostra o botão de próxima pergunta
    currentQuestionIndex++; // Incrementa o índice para preparar para a próxima pergunta
    updateProgressBar(); // Atualiza a barra de progresso para refletir o avanço
}


function useHint() {
    if (hintsRemaining > 0 && !hintButton.disabled) { // Verifica se o botão está habilitado para esta pergunta
        const currentQuestionData = currentQuestions[currentQuestionIndex];

        if (currentQuestionData.specificHint) {
            hintsRemaining--;
            hintCountSpan.textContent = hintsRemaining; // Atualiza a contagem global
            gameStats.usedHintInCurrentGame = true; // Para a conquista
            updateGameStats();

            // Exibe a dica específica
            feedbackArea.innerHTML = `<span style="color: var(--accent-blue); font-style: italic;">Dica: ${currentQuestionData.specificHint}</span>`;
            
            hintButton.disabled = true; // Desabilita o botão de dica PARA ESTA PERGUNTA após o uso
            hintButton.style.opacity = '0.5';

        } else {
            // Fallback caso uma pergunta não tenha specificHint
            feedbackArea.innerHTML = `<span style="color: var(--text-dark); font-style: italic;">Nenhuma dica específica disponível para esta pergunta.</span>`;
            hintButton.disabled = true; // Desabilita para esta pergunta de qualquer maneira
            hintButton.style.opacity = '0.5';
        }
    } else if (hintButton.disabled && hintsRemaining > 0) {
        // Dica para esta pergunta específica já foi usada.
        // Pode adicionar um feedback sutil se desejar, mas o botão desabilitado já indica.
        // Ex: feedbackArea.innerHTML += `<br><span style="font-size: 0.9em; color: var(--text-dark);">(Dica já utilizada para esta pergunta)</span>`;
    } else if (hintsRemaining <= 0) {
        // Sem dicas restantes no geral.
        alert('Você não tem mais dicas disponíveis!');
    }
}

function useFiftyFifty() {
    if (fiftyFiftyRemaining > 0 && !fiftyFiftyButton.disabled) {
        fiftyFiftyRemaining--;
        fiftyFiftyCountSpan.textContent = fiftyFiftyRemaining;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const incorrectOptionsButtons = Array.from(optionButtons).filter(
            button => button.textContent !== currentQuestion.answer && !button.disabled // Apenas as que não foram desabilitadas pela dica
        );

        shuffleArray(incorrectOptionsButtons);

        // Desabilita duas opções incorretas, deixando a correta e mais uma incorreta
        let removedCount = 0;
        for (let i = 0; i < incorrectOptionsButtons.length && removedCount < 2; i++) {
             // Garante que não desabilite todas se houver menos de 2 incorretas ativas (ex: após dica)
            if (Array.from(optionButtons).filter(btn => !btn.disabled).length > 2) {
                incorrectOptionsButtons[i].disabled = true;
                incorrectOptionsButtons[i].classList.add('disabled');
                removedCount++;
            } else {
                break; // Para se restarem apenas 2 opções
            }
        }

        fiftyFiftyButton.disabled = true;
        fiftyFiftyButton.style.opacity = '0.5';
        // Dica também deve ser desabilitada se 50/50 deixar apenas 2 opções
        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';

    } else {
        alert('Você não tem mais 50/50 disponíveis!');
    }
}

function updateHintButtons() {
    hintCountSpan.textContent = hintsRemaining;
    if (hintsRemaining === 0) {
        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';
    } else {
        hintButton.disabled = false;
        hintButton.style.opacity = '1';
    }
}

function updateFiftyFiftyButton() {
    fiftyFiftyCountSpan.textContent = fiftyFiftyRemaining;
    if (fiftyFiftyRemaining === 0) {
        fiftyFiftyButton.disabled = true;
        fiftyFiftyButton.style.opacity = '0.5';
    } else {
        fiftyFiftyButton.disabled = false;
        fiftyFiftyButton.style.opacity = '1';
    }
}

function updateProgressBar() {
    // currentQuestionIndex pode ser igual a currentQuestions.length ao final do jogo,
    // antes de loadQuestion chamar endGame(). Nesse caso, o progresso é 100%.
    // Se currentQuestions.length for 0, evita divisão por zero.
    const progress = currentQuestions.length > 0
        ? (currentQuestionIndex / currentQuestions.length) * 100
        : 0;
    progressBarFill.style.width = `${Math.min(progress, 100)}%`; // Garante que não passe de 100%
}


function updateStreakDisplay() {
    if (currentStreak > 0) {
        streakCounterDisplay.textContent = `Sequência: ${currentStreak}`;
        streakCounterDisplay.classList.remove('hidden');
    } else {
        streakCounterDisplay.classList.add('hidden');
    }

    if (currentStreak >= 5 && !achievements['Cinco em Sequência'].unlocked) {
        achievements['Cinco em Sequência'].unlocked = true;
        alert('Conquista desbloqueada: Cinco em Sequência!');
        updateAchievements();
    }
    if (currentStreak >= 10 && !achievements['Dez em Sequência'].unlocked) {
        achievements['Dez em Sequência'].unlocked = true;
        alert('Conquista desbloqueada: Dez em Sequência!');
        updateAchievements();
    }
}


function endGame() {
    stopTimer();
    showScreen('result-screen');
    const totalPossibleScore = currentQuestions.length > 0 ? currentQuestions.length * 10 : 0; // Evita NaN se não houver perguntas
    finalScoreDisplay.textContent = `Sua pontuação: ${score} de ${totalPossibleScore}`;


    const perfectScore = totalPossibleScore;
    let message = '';
    let win = false;

    if (totalPossibleScore === 0 && score === 0) { // Caso de não haver perguntas
        message = "Nenhuma pergunta foi jogada.";
        resultScreen.classList.remove('fail'); // Neutro
        win = false;
    } else if (score === perfectScore) {
        message = 'Parabéns! Você é um expert em numerais!';
        resultScreen.classList.remove('fail');
        win = true;

        if (currentDifficulty === 'hard' && !achievements['Imbatível'].unlocked) {
            achievements['Imbatível'].unlocked = true;
            alert('Conquista desbloqueada: Imbatível!');
        }

    } else if (score >= perfectScore / 2) {
        message = 'Muito bem! Continue praticando para ser um mestre!';
        resultScreen.classList.remove('fail');
        win = true;
    } else {
        message = 'Você pode melhorar! Não desista!';
        resultScreen.classList.add('fail');
        win = false;
    }
    scoreMessageDisplay.textContent = message;

    gameStats.totalGamesPlayed++;
    if (!dailyChallengeMode) {
        gameStats[`${currentDifficulty}GamesPlayed`]++;
    } else {
        // Lógica para Desafio Diário
        const today = new Date().toDateString();
        gameStats.dailyChallengeLastPlayed = today; // Marca que o desafio de hoje foi completado
        if (win) { // Considera 'win' se a pontuação for pelo menos metade (ou perfeita para a conquista)
            gameStats.dailyChallengeStreak++;
            if (score === perfectScore && !achievements['Desafio Diário Completo'].unlocked) {
                achievements['Desafio Diário Completo'].unlocked = true;
                alert('Conquista desbloqueada: Desafio Diário Completo!');
            }
        } else {
            gameStats.dailyChallengeStreak = 0;
        }
    }

    if (win && gameStats.usedHintInCurrentGame && !achievements['Dica Usada com Sabedoria'].unlocked) {
        achievements['Dica Usada com Sabedoria'].unlocked = true;
        alert('Conquista desbloqueada: Dica Usada com Sabedoria!');
    }

    updateGameStats();
    checkAndUnlockAchievements();

    // Verifica se a pontuação é suficiente para entrar no ranking apenas se houver pontuação possível
    if (totalPossibleScore > 0) {
        const rankingForDifficulty = ranking[currentDifficulty] || [];
        const minScoreToEnter = rankingForDifficulty.length < 10 ? 0 : rankingForDifficulty[rankingForDifficulty.length - 1].score;
        if (score > minScoreToEnter || rankingForDifficulty.length < 10) {
            nameInputModal.classList.remove('hidden');
            playerNameInput.value = '';
            playerNameInput.focus();
        }
    }
}

// --- Funções do Modo de Estudo ---
function renderStudyQuestions(difficulty = 'all', searchTerm = '') {
    studyQuestionsList.innerHTML = '';
    let filteredQuestions = allQuestions;

    if (difficulty !== 'all') {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }

    if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filteredQuestions = filteredQuestions.filter(q =>
            q.question.toLowerCase().includes(lowerCaseSearchTerm) ||
            q.explanation.toLowerCase().includes(lowerCaseSearchTerm) ||
            q.answer.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }

    if (filteredQuestions.length === 0) {
        studyQuestionsList.innerHTML = '<p class="no-results">Nenhuma pergunta encontrada com os filtros aplicados.</p>';
        return;
    }

    filteredQuestions.forEach(q => {
        const div = document.createElement('div');
        div.classList.add('study-question-item');
        div.innerHTML = `
            <h4>${q.question}</h4>
            <p><strong>Resposta:</strong> ${q.answer}</p>
            <p class="explanation"><strong>Explicação:</strong> ${q.explanation}</p>
            <p class="difficulty-tag">Dificuldade: ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}</p>
        `;
        studyQuestionsList.appendChild(div);
    });
}


// --- Event Listeners ---

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => startGame(button.dataset.difficulty));
});

dailyChallengeBtn.addEventListener('click', () => {
    const today = new Date().toDateString();
    // Verifica se o último desafio jogado e REGISTRADO NO GAMESTATS (não no ranking) foi hoje
    if (gameStats.dailyChallengeLastPlayed && new Date(gameStats.dailyChallengeLastPlayed).toDateString() === today) {
         alert('Você já completou o desafio diário de hoje! Tente novamente amanhã.');
         // Não desabilitar o botão aqui, pois o DOMContentLoaded o habilitará no próximo dia.
         // A lógica de desabilitar no DOMContentLoaded já cuida disso.
    } else {
        startGame('daily', true); // 'daily' como dificuldade para consistência, embora as perguntas sejam de pool misto
    }
});


viewRankingBtn.addEventListener('click', () => {
    showScreen('ranking-screen');
    renderRanking('easy'); // Default to 'easy' or whatever the active filter should be
    rankingFilterButtons.forEach(btn => btn.classList.remove('active-filter'));
    document.querySelector('.ranking-filter-btn[data-difficulty="easy"]').classList.add('active-filter');
    if(isAdminModeActive) exitAdminMode(); // Ensure admin mode specific UI is reset if returning to ranking
});


rankingFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        rankingFilterButtons.forEach(btn => btn.classList.remove('active-filter'));
        button.classList.add('active-filter');
        renderRanking(button.dataset.difficulty); // This will correctly show/hide remove buttons if admin mode is active
    });
});

closeRankingBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
    // No need to explicitly call exitAdminMode() here if its main purpose is UI within ranking screen
    // However, if manageRankingBtn text or other state needs reset, it's good to call it.
    if (isAdminModeActive) exitAdminMode();
});

viewAchievementsBtn.addEventListener('click', () => {
    showScreen('achievements-screen');
    renderAchievements();
});

closeAchievementsBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
});

settingsBtn.addEventListener('click', () => {
    showScreen('settings-screen');
    themeSelect.value = chosenTheme;
    updateTimedModeButton();
});

closeSettingsBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
});

studyModeBtn.addEventListener('click', () => {
    showScreen('study-mode-screen');
    renderStudyQuestions('all', '');
    studyDifficultyFilter.value = 'all';
    studySearchInput.value = '';
});

closeStudyModeBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
});

// Controles do Jogo
nextQuestionBtn.addEventListener('click', loadQuestion); // Mantido como está, pois currentQuestionIndex é incrementado em checkAnswer/handleTimeUp
hintButton.addEventListener('click', useHint);
fiftyFiftyButton.addEventListener('click', useFiftyFifty);

restartBtn.addEventListener('click', () => {
    // Para reiniciar, usa a dificuldade atual (ou 'daily' se for desafio diário)
    startGame(currentDifficulty, dailyChallengeMode);
});

returnToMenuBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
});

saveScoreBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        saveScore(playerName, score, currentDifficulty); // currentDifficulty já está definido
        nameInputModal.classList.add('hidden');
    } else {
        alert('Por favor, digite seu nome para salvar a pontuação!');
    }
});

cancelSaveBtn.addEventListener('click', () => {
    nameInputModal.classList.add('hidden');
});

manageRankingBtn.addEventListener('click', () => {
    if (isAdminModeActive) {
        exitAdminMode(); // This will re-render ranking without admin controls
    } else {
        adminPasswordInput.value = '';
        adminPasswordModal.classList.remove('hidden');
        adminPasswordInput.focus();
    }
});

submitAdminPasswordBtn.addEventListener('click', () => {
    if (adminPasswordInput.value === ADMIN_PASSWORD) {
        adminPasswordModal.classList.add('hidden');
        enterAdminMode(); // This will re-render ranking with admin controls
    } else {
        alert('Senha incorreta!');
        adminPasswordInput.value = '';
        adminPasswordInput.focus();
    }
});

cancelAdminLoginBtn.addEventListener('click', () => {
    adminPasswordModal.classList.add('hidden');
});

themeSelect.addEventListener('change', (event) => {
    applyTheme(event.target.value);
});

toggleTimedModeBtn.addEventListener('click', () => {
    isTimedModeEnabled = !isTimedModeEnabled;
    localStorage.setItem('isTimedModeEnabled', isTimedModeEnabled.toString()); // Salva como string
    updateTimedModeButton();
});

studyDifficultyFilter.addEventListener('change', (event) => {
    renderStudyQuestions(event.target.value, studySearchInput.value);
});

studySearchInput.addEventListener('input', (event) => {
    renderStudyQuestions(studyDifficultyFilter.value, event.target.value);
});


// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    showScreen('difficulty-screen');
    applyTheme(chosenTheme);

    const storedTimedMode = localStorage.getItem('isTimedModeEnabled');
    if (storedTimedMode !== null) {
        isTimedModeEnabled = storedTimedMode === 'true'; // Converte de string para boolean
    } else {
        isTimedModeEnabled = false;
    }
    updateTimedModeButton();

    const today = new Date().toDateString();
    // Desabilita o botão de desafio diário se já foi JOGADO HOJE (conforme gameStats)
    if (gameStats.dailyChallengeLastPlayed && new Date(gameStats.dailyChallengeLastPlayed).toDateString() === today) {
        dailyChallengeBtn.disabled = true;
    } else {
        dailyChallengeBtn.disabled = false; // Garante que está habilitado se não foi jogado
    }
    checkAndUnlockAchievements();
});