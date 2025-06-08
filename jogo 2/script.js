const allQuestions = typeof gameQuestions !== 'undefined' ? [...gameQuestions] : [];

const difficultyScreen = document.getElementById('difficulty-screen');
const gameContainer = document.getElementById('game-container');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');
const achievementsScreen = document.getElementById('achievements-screen');
const settingsScreen = document.getElementById('settings-screen');
const studyModeScreen = document.getElementById('study-mode-screen');
const reviewScreen = document.getElementById('review-screen');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
const dailyChallengeStatus = document.getElementById('daily-challenge-status');
const timeAttackBtn = document.getElementById('time-attack-btn');
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
const reviewIncorrectBtn = document.getElementById('review-incorrect-btn');
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
const closeReviewBtn = document.getElementById('close-review-btn');

const nameInputModal = document.getElementById('name-input-modal');
const playerNameInput = document.getElementById('player-name-input');
const saveScoreBtn = document.getElementById('save-score-btn');
const cancelSaveBtn = document.getElementById('cancel-save-btn');

const adminPasswordModal = document.getElementById('admin-password-modal');
const adminPasswordInput = document.getElementById('admin-password-input');
const submitAdminPasswordBtn = document.getElementById('submit-admin-password-btn');
const cancelAdminLoginBtn = document.getElementById('cancel-admin-login-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = '';
let hintsRemaining = 3;
let fiftyFiftyRemaining = 1;
let dailyChallengeMode = false;
let currentStreak = 0;
let timer = null;
const TIME_PER_QUESTION = 20;
let timeLeft = TIME_PER_QUESTION;
let isTimedModeEnabled = false;

let incorrectlyAnsweredQuestions = [];

let isTimeAttackMode = false;
let timeAttackTimer = null;
const TIME_ATTACK_DURATION = 120;

const ADMIN_PASSWORD = "admin";
let isAdminModeActive = false;

let chosenTheme = localStorage.getItem('theme') || 'dark';

let ranking = JSON.parse(localStorage.getItem('ranking')) || {
    easy: [],
    medium: [],
    hard: [],
    daily: [],
    timeAttack: []
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
    'Viciado em Numerais': { unlocked: false, description: 'Jogue 20 jogos no total.' },
    'Rei do Time Attack': { unlocked: false, description: 'Marque mais de 15 pontos no modo Time Attack.'}
};

let gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
    easyGamesPlayed: 0,
    mediumGamesPlayed: 0,
    hardGamesPlayed: 0,
    timeAttackGamesPlayed: 0,
    totalGamesPlayed: 0,
    correctCardinalAnswers: 0,
    totalCorrectAnswers: 0,
    dailyChallengeLastPlayed: null,
    dailyChallengeStreak: 0,
    usedHintInCurrentGame: false
};

function showScreen(screenId) {
    document.querySelectorAll('.container > div').forEach(screen => {
        screen.classList.add('hidden');
    });
    const screenToShow = document.getElementById(screenId);
    if (screenToShow) {
        screenToShow.classList.remove('hidden');
    }
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
    document.body.className = '';
    document.body.classList.add(theme + '-theme');
    localStorage.setItem('theme', theme);
    chosenTheme = theme;
}

function updateTimedModeButton() {
    if (toggleTimedModeBtn) {
        toggleTimedModeBtn.textContent = isTimedModeEnabled ? 'Ligado' : 'Desligado';
        toggleTimedModeBtn.classList.toggle('on', isTimedModeEnabled);
        toggleTimedModeBtn.classList.toggle('off', !isTimedModeEnabled);
    }
}

function updateGameStats() {
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function updateAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
    renderAchievements();
}

function checkAndUnlockAchievements() {
    ['easy', 'medium', 'hard'].forEach(diff => {
        const gamesPlayed = gameStats[`${diff}GamesPlayed`];
        const minScoreForAchievement = 80;
        const gamesWithHighAccuracy = (ranking[diff] || []).filter(s => s.score >= minScoreForAchievement).length;

        if (achievements[`Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}`] &&
            gamesWithHighAccuracy >= 5 &&
            !achievements[`Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}`].unlocked) {
            achievements[`Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}`].unlocked = true;
            alert(`Conquista desbloqueada: Mestre Numeral ${diff.charAt(0).toUpperCase() + diff.slice(1)}!`);
        }
    });

    if (gameStats.correctCardinalAnswers >= 20 && achievements['Gênio dos Cardinais'] && !achievements['Gênio dos Cardinais'].unlocked) {
        achievements['Gênio dos Cardinais'].unlocked = true;
        alert('Conquista desbloqueada: Gênio dos Cardinais!');
    }

    const playedDifficulties = new Set();
    if (gameStats.easyGamesPlayed > 0) playedDifficulties.add('easy');
    if (gameStats.mediumGamesPlayed > 0) playedDifficulties.add('medium');
    if (gameStats.hardGamesPlayed > 0) playedDifficulties.add('hard');
    if ((ranking.daily && ranking.daily.length > 0) || (gameStats.dailyChallengeLastPlayed && gameStats.dailyChallengeStreak > 0) ) {
        playedDifficulties.add('daily');
    }

    if (playedDifficulties.size >= 4 && achievements['Explorador de Numerais'] && !achievements['Explorador de Numerais'].unlocked) {
        achievements['Explorador de Numerais'].unlocked = true;
        alert('Conquista desbloqueada: Explorador de Numerais!');
    }

    if (gameStats.totalGamesPlayed >= 20 && achievements['Viciado em Numerais'] && !achievements['Viciado em Numerais'].unlocked) {
        achievements['Viciado em Numerais'].unlocked = true;
        alert('Conquista desbloqueada: Viciado em Numerais!');
    }
    
    if (currentDifficulty === 'timeAttack' && score > 15 && achievements['Rei do Time Attack'] && !achievements['Rei do Time Attack'].unlocked) {
        achievements['Rei do Time Attack'].unlocked = true;
        alert('Conquista desbloqueada: Rei do Time Attack!');
    }

    updateAchievements();
}


function resetGameStatsForNewGame() {
    gameStats.usedHintInCurrentGame = false;
    updateGameStats();
}

function saveScore(name, score, difficulty) {
    if (!ranking[difficulty]) {
        ranking[difficulty] = [];
    }
    ranking[difficulty].push({ name, score, date: new Date().toLocaleDateString('pt-BR') });
    ranking[difficulty].sort((a, b) => b.score - a.score);
    ranking[difficulty] = ranking[difficulty].slice(0, 10);
    localStorage.setItem('ranking', JSON.stringify(ranking));
    renderRanking(difficulty);
}

function renderRanking(difficulty) {
    rankingList.innerHTML = '';
    const scores = ranking[difficulty] || [];
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
            removeBtn.classList.add('remove-player-btn', 'secondary-btn');
            removeBtn.style.marginLeft = '10px';
            removeBtn.style.padding = '5px 10px';
            removeBtn.style.fontSize = '0.8em';
            removeBtn.onclick = () => confirmRemovePlayer(entry.name, entry.date, difficulty);
            li.appendChild(removeBtn);
        }
        rankingList.appendChild(li);
    });
}

function getCurrentRankingDifficulty() {
    const activeFilter = document.querySelector('.ranking-filter-btn.active-filter');
    return activeFilter ? activeFilter.dataset.difficulty : 'easy';
}


function confirmRemovePlayer(playerName, playerDate, difficulty) {
    const diffNameText = difficultyName(difficulty);
    if (confirm(`Tem certeza que deseja remover o jogador ${playerName} (pontuação de ${playerDate}) do ranking ${diffNameText}?`)) {
        removePlayer(playerName, playerDate, difficulty);
    }
}

function removePlayer(playerName, playerDate, difficulty) {
    const diffNameText = difficultyName(difficulty);
    if (ranking[difficulty]) {
        const initialLength = ranking[difficulty].length;
        ranking[difficulty] = ranking[difficulty].filter(
            p => !(p.name === playerName && p.date === playerDate)
        );

        if (ranking[difficulty].length < initialLength) {
            localStorage.setItem('ranking', JSON.stringify(ranking));
            renderRanking(difficulty);
            alert(`Jogador ${playerName} (data: ${playerDate}) removido do ranking de ${diffNameText}.`);
        } else {
            alert(`Jogador ${playerName} (data: ${playerDate}) não encontrado no ranking de ${diffNameText} para remoção.`);
        }
    } else {
        alert(`Ranking para dificuldade ${diffNameText} não encontrado.`);
    }
}


function difficultyName(difficulty) {
    if (difficulty === 'daily') return 'Diário';
    if (difficulty === 'timeAttack') return 'Time Attack';
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}


function clearRanking(difficulty) {
    const diffNameText = difficultyName(difficulty);
    if (confirm(`Tem certeza que deseja limpar o ranking de ${diffNameText}?\nEsta ação é irreversível!`)) {
        ranking[difficulty] = [];
        localStorage.setItem('ranking', JSON.stringify(ranking));
        renderRanking(difficulty);
        alert(`Ranking de ${diffNameText} limpo com sucesso!`);
    }
}

function enterAdminMode() {
    isAdminModeActive = true;
    manageRankingBtn.textContent = 'Sair do Modo Admin';

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


    const difficulties = ['easy', 'medium', 'hard', 'daily', 'timeAttack'];
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
    renderRanking(getCurrentRankingDifficulty());
}

function exitAdminMode() {
    isAdminModeActive = false;
    manageRankingBtn.textContent = 'Gerenciar Ranking';
    const clearBtnsDiv = document.querySelector('.admin-clear-btns');
    if (clearBtnsDiv) {
        clearBtnsDiv.remove();
    }
    renderRanking(getCurrentRankingDifficulty());
}

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

function startGame(difficulty, isDaily = false) {
    showScreen('game-container');
    currentDifficulty = difficulty;
    dailyChallengeMode = isDaily;
    isTimeAttackMode = false;
    score = 0;
    currentQuestionIndex = 0;
    hintsRemaining = 3;
    fiftyFiftyRemaining = 1;
    currentStreak = 0;
    incorrectlyAnsweredQuestions = [];
    gameStats.usedHintInCurrentGame = false;

    updateHintButtons();
    updateFiftyFiftyButton();
    updateStreakDisplay();
    feedbackArea.textContent = '';
    nextQuestionBtn.textContent = 'Próxima Pergunta';
    nextQuestionBtn.classList.add('hidden');
    if (reviewIncorrectBtn) reviewIncorrectBtn.classList.add('hidden');


    if (dailyChallengeMode) {
        currentQuestions = getDailyChallengeQuestions();
    } else {
        let availableQuestions = allQuestions.filter(q => q.difficulty === difficulty);
        availableQuestions = shuffleArray([...availableQuestions]);
        currentQuestions = availableQuestions.slice(0, 10);
    }

    if (currentQuestions.length === 0) {
        feedbackArea.textContent = 'Nenhuma pergunta disponível para esta dificuldade.';
        setTimeout(() => showScreen('difficulty-screen'), 3000);
        return;
    }

    if (currentQuestions.length < 10 && currentQuestions.length > 0 && !dailyChallengeMode) {
        console.warn(`Apenas ${currentQuestions.length} perguntas encontradas para a dificuldade ${difficulty}. O jogo continuará com estas.`);
    }


    if (isTimedModeEnabled && !dailyChallengeMode) {
        timerDisplay.classList.remove('hidden');
    } else {
        timerDisplay.classList.add('hidden');
    }

    loadQuestion();
    updateProgressBar();
    resetGameStatsForNewGame();
}

function getDailyChallengeQuestions() {
    const today = new Date().toDateString();
    const rng = new Math.seedrandom(today);

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
    return dailyQuestionsPool.slice(0, 10);
}


function loadQuestion() {
    if (isTimeAttackMode) {
        if (timeLeft <= 0 || currentQuestionIndex >= currentQuestions.length) {
            endGame();
            return;
        }
        const questionData = currentQuestions[currentQuestionIndex];
        questionText.textContent = questionData.question;

        const shuffledOptions = shuffleArray([...questionData.options]);
        optionButtons.forEach((button, index) => {
            button.textContent = shuffledOptions[index];
            button.classList.remove('correct', 'incorrect', 'disabled');
            button.onclick = () => checkAnswer(button, questionData.answer, questionData.difficulty, questionData.explanation);
            button.disabled = false;
        });
        questionCounterDisplay.textContent = `Pontos: ${score}`;
        feedbackArea.textContent = '';
        nextQuestionBtn.classList.add('hidden');

        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';
        fiftyFiftyButton.disabled = true;
        fiftyFiftyButton.style.opacity = '0.5';

        const progress = ((TIME_ATTACK_DURATION - timeLeft) / TIME_ATTACK_DURATION) * 100;
        progressBarFill.style.width = `${Math.min(progress, 100)}%`;

    } else {
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
            feedbackArea.textContent = '';
            nextQuestionBtn.classList.add('hidden');

            if (hintsRemaining > 0) {
                hintButton.disabled = false;
                hintButton.style.opacity = '1';
            } else {
                hintButton.disabled = true;
                hintButton.style.opacity = '0.5';
            }
            if (fiftyFiftyRemaining > 0) {
                fiftyFiftyButton.disabled = false;
                fiftyFiftyButton.style.opacity = '1';
            } else {
                fiftyFiftyButton.disabled = true;
                fiftyFiftyButton.style.opacity = '0.5';
            }
            startTimer();
            updateProgressBar();
        } else {
            endGame();
        }
    }
}

function startTimer() {
    if (!isTimedModeEnabled || dailyChallengeMode || isTimeAttackMode) {
        timerDisplay.classList.add('hidden');
        if (timer) clearInterval(timer);
        return;
    }

    timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = `Tempo: ${timeLeft}s`;
    timerDisplay.classList.remove('low-time', 'running');
    timerDisplay.classList.add('running');

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tempo: ${timeLeft}s`;

        if (timeLeft <= 5 && timeLeft > 0) {
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
    updateStreakDisplay();
    disableOptions();
    const questionData = currentQuestions[currentQuestionIndex];
    if (questionData) {
        incorrectlyAnsweredQuestions.push({
            question: questionData.question,
            yourAnswer: "Tempo esgotado",
            correctAnswer: questionData.answer,
            explanation: questionData.explanation,
            options: questionData.options
        });
    }
    showCorrectAnswer();
    nextQuestionBtn.classList.remove('hidden');
    currentQuestionIndex++;
    updateProgressBar();
}


function disableOptions() {
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    if (!isTimeAttackMode) {
      hintButton.disabled = true;
      fiftyFiftyButton.disabled = true;
    }
}

function showCorrectAnswer() {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) {
        return;
    }
    const questionData = currentQuestions[currentQuestionIndex];
    if (!questionData) {
        return;
    }
    const correctAnswer = questionData.answer;
    optionButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });
}

function checkAnswer(selectedButton, correctAnswerText, difficulty, explanation) {
    if (!isTimeAttackMode) {
        stopTimer();
    }
    disableOptions();

    const questionData = currentQuestions[currentQuestionIndex];
    if (!questionData) {
        endGame();
        return;
    }

    if (selectedButton.textContent === questionData.answer) {
        if (isTimeAttackMode) {
            score++;
            questionCounterDisplay.textContent = `Pontos: ${score}`;
        } else {
            score += 10;
        }
        feedbackArea.textContent = 'Correto!';
        feedbackArea.style.color = 'var(--correct-green)';
        selectedButton.classList.add('correct');
        currentStreak++;
        gameStats.totalCorrectAnswers++;
        if (questionData.explanation.toLowerCase().includes('cardinal') || questionData.question.toLowerCase().includes('cardinal')) {
            gameStats.correctCardinalAnswers++;
            updateGameStats();
        }
    } else {
        feedbackArea.textContent = `Incorreto. A resposta correta era: ${questionData.answer}.`;
        feedbackArea.style.color = 'var(--incorrect-red)';
        selectedButton.classList.add('incorrect');
        currentStreak = 0;
        showCorrectAnswer();
        if (!isTimeAttackMode) {
            incorrectlyAnsweredQuestions.push({
                question: questionData.question,
                yourAnswer: selectedButton.textContent,
                correctAnswer: questionData.answer,
                explanation: questionData.explanation,
                options: questionData.options
            });
        }
    }

    updateStreakDisplay();
    checkAndUnlockAchievements();

    currentQuestionIndex++;

    if (isTimeAttackMode) {
        if (timeLeft > 0 && currentQuestionIndex < currentQuestions.length) {
            setTimeout(loadQuestion, 300);
        } else {
            endGame();
        }
    } else {
        nextQuestionBtn.classList.remove('hidden');
        updateProgressBar();
    }
}


function useHint() {
    if (hintsRemaining > 0 && !hintButton.disabled) {
        const currentQuestionData = currentQuestions[currentQuestionIndex];
        if (currentQuestionData.specificHint) {
            hintsRemaining--;
            hintCountSpan.textContent = hintsRemaining;
            gameStats.usedHintInCurrentGame = true;
            updateGameStats();
            feedbackArea.innerHTML = `<span style="color: var(--accent-blue); font-style: italic;">Dica: ${currentQuestionData.specificHint}</span>`;
            hintButton.disabled = true;
            hintButton.style.opacity = '0.5';
        } else {
            feedbackArea.innerHTML = `<span style="color: var(--text-dark); font-style: italic;">Nenhuma dica específica disponível.</span>`;
            hintButton.disabled = true;
            hintButton.style.opacity = '0.5';
        }
         if (hintsRemaining === 0) {
            hintButton.style.opacity = '0.5';
        }
    } else if (hintsRemaining <= 0) {
        alert('Você não tem mais dicas disponíveis!');
    }
}

function useFiftyFifty() {
    if (fiftyFiftyRemaining > 0 && !fiftyFiftyButton.disabled) {
        fiftyFiftyRemaining--;
        fiftyFiftyCountSpan.textContent = fiftyFiftyRemaining;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const incorrectOptionsButtons = Array.from(optionButtons).filter(
            button => button.textContent !== currentQuestion.answer && !button.disabled
        );

        shuffleArray(incorrectOptionsButtons);
        let removedCount = 0;
        for (let i = 0; i < incorrectOptionsButtons.length && removedCount < 2; i++) {
            if (Array.from(optionButtons).filter(btn => !btn.disabled).length > 2) {
                incorrectOptionsButtons[i].disabled = true;
                incorrectOptionsButtons[i].classList.add('disabled');
                removedCount++;
            } else {
                break;
            }
        }
        fiftyFiftyButton.disabled = true;
        fiftyFiftyButton.style.opacity = '0.5';
        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';

        if (fiftyFiftyRemaining === 0) {
             fiftyFiftyButton.style.opacity = '0.5';
        }
    } else {
        alert('Você não tem mais 50/50 disponíveis!');
    }
}

function updateHintButtons() {
    hintCountSpan.textContent = hintsRemaining;
    if (hintsRemaining === 0 || isTimeAttackMode) {
        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';
    } else {
        hintButton.disabled = false;
        hintButton.style.opacity = '1';
    }
}

function updateFiftyFiftyButton() {
    fiftyFiftyCountSpan.textContent = fiftyFiftyRemaining;
    if (fiftyFiftyRemaining === 0 || isTimeAttackMode) {
        fiftyFiftyButton.disabled = true;
        fiftyFiftyButton.style.opacity = '0.5';
    } else {
        fiftyFiftyButton.disabled = false;
        fiftyFiftyButton.style.opacity = '1';
    }
}

function updateProgressBar() {
    const progress = currentQuestions.length > 0
        ? (currentQuestionIndex / currentQuestions.length) * 100
        : 0;
    progressBarFill.style.width = `${Math.min(progress, 100)}%`;
}


function updateStreakDisplay() {
    if (currentStreak > 0) {
        streakCounterDisplay.textContent = `Sequência: ${currentStreak}`;
        streakCounterDisplay.classList.remove('hidden');
    } else {
        streakCounterDisplay.classList.add('hidden');
    }

    if (currentStreak >= 5 && achievements['Cinco em Sequência'] && !achievements['Cinco em Sequência'].unlocked) {
        achievements['Cinco em Sequência'].unlocked = true;
        alert('Conquista desbloqueada: Cinco em Sequência!');
        updateAchievements();
    }
    if (currentStreak >= 10 && achievements['Dez em Sequência'] && !achievements['Dez em Sequência'].unlocked) {
        achievements['Dez em Sequência'].unlocked = true;
        alert('Conquista desbloqueada: Dez em Sequência!');
        updateAchievements();
    }
}


function endGame() {
    showScreen('result-screen');

    if (isTimeAttackMode) {
        if (timeAttackTimer) clearInterval(timeAttackTimer);
        timeAttackTimer = null;
        timerDisplay.classList.add('hidden');
        finalScoreDisplay.textContent = `Respostas Corretas: ${score}`;
        scoreMessageDisplay.textContent = score >= 15 ? "Impressionante velocidade e conhecimento!" : (score >= 8 ? "Bom desempenho no Time Attack!" : "Continue treinando sua agilidade!");
        resultScreen.classList.remove('fail');

        gameStats.timeAttackGamesPlayed++;
        gameStats.totalGamesPlayed++;

        const rankingForMode = ranking.timeAttack || [];
        const minScoreToEnter = rankingForMode.length < 10 ? -1 : rankingForMode[rankingForMode.length - 1].score;
        if (score > 0 && (score > minScoreToEnter || rankingForMode.length < 10)) {
            nameInputModal.classList.remove('hidden');
            playerNameInput.value = '';
            playerNameInput.focus();
        }
        isTimeAttackMode = false;
    } else {
        stopTimer();
        const totalPossibleScore = currentQuestions.length > 0 ? currentQuestions.length * 10 : 0;
        finalScoreDisplay.textContent = `Sua pontuação: ${score} de ${totalPossibleScore}`;

        const perfectScore = totalPossibleScore;
        let message = '';
        let win = false;

        if (totalPossibleScore === 0 && score === 0) {
            message = "Nenhuma pergunta foi jogada.";
            resultScreen.classList.remove('fail');
            win = false;
        } else if (score === perfectScore) {
            message = 'Parabéns! Você é um expert em numerais!';
            resultScreen.classList.remove('fail');
            win = true;
            if (currentDifficulty === 'hard' && achievements['Imbatível'] && !achievements['Imbatível'].unlocked) {
                achievements['Imbatível'].unlocked = true;
                alert('Conquista desbloqueada: Imbatível!');
            }
        } else if (score >= perfectScore * 0.5) {
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
            const today = new Date().toDateString();
            gameStats.dailyChallengeLastPlayed = today;
            if (win) {
                gameStats.dailyChallengeStreak++;
                if (score === perfectScore && achievements['Desafio Diário Completo'] && !achievements['Desafio Diário Completo'].unlocked) {
                    achievements['Desafio Diário Completo'].unlocked = true;
                    alert('Conquista desbloqueada: Desafio Diário Completo!');
                }
            } else {
                gameStats.dailyChallengeStreak = 0;
            }
        }

        if (win && gameStats.usedHintInCurrentGame && achievements['Dica Usada com Sabedoria'] && !achievements['Dica Usada com Sabedoria'].unlocked) {
            achievements['Dica Usada com Sabedoria'].unlocked = true;
            alert('Conquista desbloqueada: Dica Usada com Sabedoria!');
        }

        if (reviewIncorrectBtn) {
            if (incorrectlyAnsweredQuestions.length > 0) {
                reviewIncorrectBtn.classList.remove('hidden');
            } else {
                reviewIncorrectBtn.classList.add('hidden');
            }
        }
        
        if (totalPossibleScore > 0) {
            const rankingForDifficulty = ranking[currentDifficulty] || [];
            const minScoreToEnter = rankingForDifficulty.length < 10 ? 0 : rankingForDifficulty[rankingForDifficulty.length - 1].score;
             if (score > 0 && (score > minScoreToEnter || rankingForDifficulty.length < 10)) {
                nameInputModal.classList.remove('hidden');
                playerNameInput.value = '';
                playerNameInput.focus();
            }
        }
    }
    updateGameStats();
    checkAndUnlockAchievements();
}

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
            <p class="difficulty-tag">Dificuldade: ${difficultyName(q.difficulty)}</p>
        `;
        studyQuestionsList.appendChild(div);
    });
}

function showReviewScreen() {
    showScreen('review-screen');
    const reviewList = document.getElementById('review-questions-list');
    reviewList.innerHTML = '';

    if (incorrectlyAnsweredQuestions.length === 0) {
        reviewList.innerHTML = '<p class="no-results">Parabéns, você acertou todas as questões ou não houve erros para revisar!</p>';
        return;
    }

    incorrectlyAnsweredQuestions.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('study-question-item');
        div.innerHTML = `
            <h4>${item.question}</h4>
            <p><strong>Sua resposta:</strong> <span style="${item.yourAnswer === item.correctAnswer || item.yourAnswer === "Tempo esgotado" ? 'color: var(--incorrect-red);' : 'color: var(--correct-green);'}">${item.yourAnswer}</span></p>
            <p><strong>Resposta correta:</strong> ${item.correctAnswer}</p>
            <p class="explanation"><strong>Explicação:</strong> ${item.explanation}</p>
        `;
        reviewList.appendChild(div);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimeAttackGame() {
    showScreen('game-container');
    currentDifficulty = 'timeAttack';
    dailyChallengeMode = false;
    isTimeAttackMode = true;
    score = 0;
    currentQuestionIndex = 0;
    hintsRemaining = 0;
    fiftyFiftyRemaining = 0;
    currentStreak = 0;
    incorrectlyAnsweredQuestions = [];

    updateHintButtons();
    updateFiftyFiftyButton();
    updateStreakDisplay();
    feedbackArea.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    if (reviewIncorrectBtn) reviewIncorrectBtn.classList.add('hidden');


    currentQuestions = shuffleArray([...allQuestions]);

    if (currentQuestions.length === 0) {
        feedbackArea.textContent = 'Nenhuma pergunta disponível.';
        setTimeout(() => showScreen('difficulty-screen'), 3000);
        return;
    }

    timerDisplay.classList.remove('hidden');
    timeLeft = TIME_ATTACK_DURATION;
    timerDisplay.textContent = `Tempo: ${formatTime(timeLeft)}`;
    timerDisplay.classList.remove('low-time');
    timerDisplay.classList.add('running');


    if (timeAttackTimer) clearInterval(timeAttackTimer);
    timeAttackTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tempo: ${formatTime(timeLeft)}`;
        if (timeLeft <= 10 && timeLeft > 0) {
            timerDisplay.classList.add('low-time');
        } else {
             timerDisplay.classList.remove('low-time');
        }
        if (timeLeft <= 0) {
            clearInterval(timeAttackTimer);
            endGame();
        }
        const progress = ((TIME_ATTACK_DURATION - timeLeft) / TIME_ATTACK_DURATION) * 100;
        progressBarFill.style.width = `${Math.min(progress, 100)}%`;

    }, 1000);

    questionCounterDisplay.textContent = `Pontos: ${score}`;
    progressBarFill.style.width = '0%';

    loadQuestion();
    resetGameStatsForNewGame();
}


difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        startGame(button.dataset.difficulty);
    });
});

if (dailyChallengeBtn) {
    dailyChallengeBtn.addEventListener('click', () => {
        const today = new Date().toDateString();
        if (gameStats.dailyChallengeLastPlayed && new Date(gameStats.dailyChallengeLastPlayed).toDateString() === today) {
            alert('Você já completou o desafio diário de hoje! Tente novamente amanhã.');
        } else {
            startGame('daily', true);
        }
    });
}

if (timeAttackBtn) {
    timeAttackBtn.addEventListener('click', startTimeAttackGame);
}


if (viewRankingBtn) {
    viewRankingBtn.addEventListener('click', () => {
        showScreen('ranking-screen');
        renderRanking('easy');
        rankingFilterButtons.forEach(btn => btn.classList.remove('active-filter'));
        document.querySelector('.ranking-filter-btn[data-difficulty="easy"]').classList.add('active-filter');
        if(isAdminModeActive) exitAdminMode();
    });
}


rankingFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        rankingFilterButtons.forEach(btn => btn.classList.remove('active-filter'));
        button.classList.add('active-filter');
        renderRanking(button.dataset.difficulty);
    });
});

if (closeRankingBtn) {
    closeRankingBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
        if (isAdminModeActive) exitAdminMode();
    });
}

if (viewAchievementsBtn) {
    viewAchievementsBtn.addEventListener('click', () => {
        showScreen('achievements-screen');
        renderAchievements();
    });
}

if (closeAchievementsBtn) {
    closeAchievementsBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
    });
}

if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        showScreen('settings-screen');
        themeSelect.value = chosenTheme;
        updateTimedModeButton();
    });
}

if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
    });
}

if (studyModeBtn) {
    studyModeBtn.addEventListener('click', () => {
        showScreen('study-mode-screen');
        renderStudyQuestions('all', '');
        studyDifficultyFilter.value = 'all';
        studySearchInput.value = '';
    });
}

if (closeStudyModeBtn) {
    closeStudyModeBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
    });
}

if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', loadQuestion);
}
if (hintButton) {
    hintButton.addEventListener('click', useHint);
}
if (fiftyFiftyButton) {
    fiftyFiftyButton.addEventListener('click', useFiftyFifty);
}

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        if (currentDifficulty === 'timeAttack') {
             startTimeAttackGame();
        } else {
            startGame(currentDifficulty, dailyChallengeMode);
        }
    });
}

if (returnToMenuBtn) {
    returnToMenuBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
    });
}

if (reviewIncorrectBtn) {
    reviewIncorrectBtn.addEventListener('click', showReviewScreen);
}
if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', () => {
        showScreen('difficulty-screen');
    });
}


if (saveScoreBtn) {
    saveScoreBtn.addEventListener('click', () => {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            saveScore(playerName, score, currentDifficulty);
            nameInputModal.classList.add('hidden');
        } else {
            alert('Por favor, digite seu nome para salvar a pontuação!');
        }
    });
}

if (cancelSaveBtn) {
    cancelSaveBtn.addEventListener('click', () => {
        nameInputModal.classList.add('hidden');
    });
}

if (manageRankingBtn) {
    manageRankingBtn.addEventListener('click', () => {
        if (isAdminModeActive) {
            exitAdminMode();
        } else {
            adminPasswordInput.value = '';
            adminPasswordModal.classList.remove('hidden');
            adminPasswordInput.focus();
        }
    });
}

if (submitAdminPasswordBtn) {
    submitAdminPasswordBtn.addEventListener('click', () => {
        if (adminPasswordInput.value === ADMIN_PASSWORD) {
            adminPasswordModal.classList.add('hidden');
            enterAdminMode();
        } else {
            alert('Senha incorreta!');
            adminPasswordInput.value = '';
            adminPasswordInput.focus();
        }
    });
}

if (cancelAdminLoginBtn) {
    cancelAdminLoginBtn.addEventListener('click', () => {
        adminPasswordModal.classList.add('hidden');
    });
}

if (themeSelect) {
    themeSelect.addEventListener('change', (event) => {
        applyTheme(event.target.value);
    });
}

if (toggleTimedModeBtn) {
    toggleTimedModeBtn.addEventListener('click', () => {
        isTimedModeEnabled = !isTimedModeEnabled;
        localStorage.setItem('isTimedModeEnabled', isTimedModeEnabled.toString());
        updateTimedModeButton();
    });
}

if (studyDifficultyFilter) {
    studyDifficultyFilter.addEventListener('change', (event) => {
        renderStudyQuestions(event.target.value, studySearchInput.value);
    });
}

if (studySearchInput) {
    studySearchInput.addEventListener('input', (event) => {
        renderStudyQuestions(studyDifficultyFilter.value, event.target.value);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showScreen('difficulty-screen');
    applyTheme(chosenTheme);

    const storedTimedMode = localStorage.getItem('isTimedModeEnabled');
    if (storedTimedMode !== null) {
        isTimedModeEnabled = storedTimedMode === 'true';
    } else {
        isTimedModeEnabled = false;
    }
    updateTimedModeButton();

    const today = new Date().toDateString();
    if (dailyChallengeBtn && dailyChallengeStatus) {
        if (gameStats.dailyChallengeLastPlayed && new Date(gameStats.dailyChallengeLastPlayed).toDateString() === today) {
            dailyChallengeBtn.disabled = true;
            dailyChallengeStatus.textContent = 'Você já completou o desafio diário de hoje! Tente novamente amanhã.';
            dailyChallengeStatus.classList.remove('hidden');
        } else {
            dailyChallengeBtn.disabled = false;
            dailyChallengeStatus.classList.add('hidden');
        }
    }
    checkAndUnlockAchievements();
})