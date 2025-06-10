const gameQuestions = [

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
    {
        question: "Como se escreve o número 3 por extenso?",
        options: ["Três", "Treis", "Trêz", "Trez"],
        answer: "Três",
        difficulty: "easy",
        explanation: "O número 3 é escrito como 'três'.",
        specificHint: "Grafia comum para um número de um dígito."
    },
    {
        question: "Qual numeral vem antes de 'cinco'?",
        options: ["Quatro", "Seis", "Três", "Dois"],
        answer: "Quatro",
        difficulty: "easy",
        explanation: "O numeral cardinal que antecede 'cinco' é 'quatro'.",
        specificHint: "Pense na ordem crescente dos números."
    },
    {
        question: "O numeral 'segundo' indica:",
        options: ["Ordem", "Quantidade", "Multiplicação", "Fração"],
        answer: "Ordem",
        difficulty: "easy",
        explanation: "'Segundo' é um numeral ordinal, usado para indicar posição.",
        specificHint: "Relacionado à posição em uma fila ou lista."
    },
    {
        question: "Quantos elementos há em uma 'dúzia'?",
        options: ["Doze", "Dez", "Seis", "Vinte"],
        answer: "Doze",
        difficulty: "easy",
        explanation: "Uma 'dúzia' corresponde a doze unidades.",
        specificHint: "É um numeral coletivo comum."
    },
    {
        question: "Como se escreve 20 em algarismos romanos?",
        options: ["XX", "XV", "IIX", "VC"],
        answer: "XX",
        difficulty: "easy",
        explanation: "Em algarismos romanos, X representa 10. Portanto, XX é 20.",
        specificHint: "Lembre-se que X = 10."
    },
    // --- Mais 35 questões FÁCEIS ---
    {
        question: "Qual é o numeral cardinal para o número 1?",
        options: ["Um", "Primeiro", "Uno", "Inicial"],
        answer: "Um",
        difficulty: "easy",
        explanation: "O numeral cardinal para 1 é 'um'.",
        specificHint: "É o início da contagem."
    },
    {
        question: "Como se escreve 'oitavo' em algarismo ordinal?",
        options: ["8º", "8", "Oito", "VIII"],
        answer: "8º",
        difficulty: "easy",
        explanation: "Oitavo é representado por 8 seguido do símbolo de ordinal.",
        specificHint: "Pense no número e no símbolo de ordem."
    },
    {
        question: "Qual o resultado de 'dois mais três'?",
        options: ["Cinco", "Quatro", "Seis", "Sete"],
        answer: "Cinco",
        difficulty: "easy",
        explanation: "A soma de dois e três é cinco.",
        specificHint: "Operação básica de adição."
    },
    {
        question: "Se você tem 'meia dúzia' de laranjas, quantas laranjas você tem?",
        options: ["Seis", "Doze", "Três", "Quatro"],
        answer: "Seis",
        difficulty: "easy",
        explanation: "Uma dúzia é 12, então meia dúzia é 6.",
        specificHint: "Dúzia = 12."
    },
    {
        question: "Qual numeral vem depois de 'sessenta e nove'?",
        options: ["Setenta", "Sessenta e oito", "Setenta e um", "Cinquenta e nove"],
        answer: "Setenta",
        difficulty: "easy",
        explanation: "Após sessenta e nove (69) vem setenta (70).",
        specificHint: "Contagem na casa das dezenas."
    },
    {
        question: "Como se escreve o número 15 por extenso?",
        options: ["Quinze", "Dez e cinco", "Quinse", "Sinze"],
        answer: "Quinze",
        difficulty: "easy",
        explanation: "O número 15 é escrito como 'quinze'.",
        specificHint: "Número entre dez e vinte."
    },
    {
        question: "O que significa 'terceiro lugar'?",
        options: ["A terceira posição", "Três lugares", "Um terço de um lugar", "Três vezes um lugar"],
        answer: "A terceira posição",
        difficulty: "easy",
        explanation: "'Terceiro' é um ordinal que indica a posição número 3.",
        specificHint: "Relacionado à ordem em uma competição."
    },
    {
        question: "Qual o numeral para 'zero'?",
        options: ["Zero", "Nada", "Nulo", "Vazio"],
        answer: "Zero",
        difficulty: "easy",
        explanation: "O numeral que representa a ausência de quantidade é 'zero'.",
        specificHint: "Antes do número um."
    },
    {
        question: "Qual é o dobro de quatro?",
        options: ["Oito", "Seis", "Dois", "Dezesseis"],
        answer: "Oito",
        difficulty: "easy",
        explanation: "O dobro de quatro é 4 x 2 = 8.",
        specificHint: "Multiplicar por dois."
    },
    {
        question: "Como se lê a fração 1/4?",
        options: ["Um quarto", "Quatro um", "Um sobre quatro", "Quarto de um"],
        answer: "Um quarto",
        difficulty: "easy",
        explanation: "A fração 1/4 é lida como 'um quarto'.",
        specificHint: "Uma parte de quatro."
    },
    {
        question: "Quantos dias tem uma 'semana'?",
        options: ["Sete", "Cinco", "Dez", "Trinta"],
        answer: "Sete",
        difficulty: "easy",
        explanation: "Uma semana tem sete dias.",
        specificHint: "Coletivo para dias."
    },
    {
        question: "Qual o algarismo romano para 5?",
        options: ["V", "I", "X", "L"],
        answer: "V",
        difficulty: "easy",
        explanation: "O algarismo romano V representa o número 5.",
        specificHint: "Um dos símbolos básicos romanos."
    },
    {
        question: "Qual numeral cardinal está entre 'vinte e um' e 'vinte e três'?",
        options: ["Vinte e dois", "Vinte", "Vinte e quatro", "Trinta"],
        answer: "Vinte e dois",
        difficulty: "easy",
        explanation: "Entre 21 e 23 está o número 22.",
        specificHint: "Sequência numérica simples."
    },
    {
        question: "O numeral 'décimo' se refere a qual posição?",
        options: ["10ª", "1ª", "100ª", "2ª"],
        answer: "10ª",
        difficulty: "easy",
        explanation: "'Décimo' é o ordinal para a décima posição.",
        specificHint: "Relacionado ao número dez."
    },
    {
        question: "Como se escreve o número 40 por extenso?",
        options: ["Quarenta", "Corenta", "Quatroenta", "Quadraginta"],
        answer: "Quarenta",
        difficulty: "easy",
        explanation: "O número 40 é escrito como 'quarenta'.",
        specificHint: "Dezena após o trinta."
    },
    {
        question: "Qual é o triplo de três?",
        options: ["Nove", "Seis", "Doze", "Um"],
        answer: "Nove",
        difficulty: "easy",
        explanation: "O triplo de três é 3 x 3 = 9.",
        specificHint: "Multiplicar por três."
    },
    {
        question: "O que é 'um par'?",
        options: ["Dois", "Um", "Três", "Quatro"],
        answer: "Dois",
        difficulty: "easy",
        explanation: "Um par refere-se a um conjunto de dois elementos.",
        specificHint: "Exemplo: um par de meias."
    },
    {
        question: "Qual o ordinal para a primeira letra do alfabeto?",
        options: ["Primeiro", "Um", "Alfa", "Principal"],
        answer: "Primeiro",
        difficulty: "easy",
        explanation: "A letra 'A' ocupa a primeira posição.",
        specificHint: "Início de uma sequência."
    },
    {
        question: "Como se escreve 'cem' em algarismos?",
        options: ["100", "10", "1000", "010"],
        answer: "100",
        difficulty: "easy",
        explanation: "O numeral 'cem' é representado por 100.",
        specificHint: "Três dígitos."
    },
    {
        question: "Se algo é 'duplo', quantas vezes ele é maior?",
        options: ["Duas vezes", "Metade", "Igual", "Três vezes"],
        answer: "Duas vezes",
        difficulty: "easy",
        explanation: "'Duplo' significa duas vezes a quantidade.",
        specificHint: "Sinônimo de dobro."
    },
    {
        question: "Qual é 'um terço' de nove?",
        options: ["Três", "Seis", "Um", "Nove"],
        answer: "Três",
        difficulty: "easy",
        explanation: "Um terço de nove é 9 dividido por 3, que é 3.",
        specificHint: "Dividir em três partes iguais."
    },
    {
        question: "Qual o algarismo romano para 1?",
        options: ["I", "V", "X", "II"],
        answer: "I",
        difficulty: "easy",
        explanation: "O algarismo romano I representa o número 1.",
        specificHint: "O mais simples dos algarismos romanos."
    },
    {
        question: "Qual numeral indica 'nenhum' ou 'zero' itens?",
        options: ["Zero", "Um", "Algum", "Vários"],
        answer: "Zero",
        difficulty: "easy",
        explanation: "Zero indica a ausência de quantidade.",
        specificHint: "Usado antes de começar a contar."
    },
    {
        question: "Como se escreve o ordinal para 5º?",
        options: ["Quinto", "Cinco", "Quinze", "Cinquenta"],
        answer: "Quinto",
        difficulty: "easy",
        explanation: "O ordinal para a quinta posição é 'quinto'.",
        specificHint: "Corresponde ao número cinco."
    },
    {
        question: "Qual é a metade de 'dez'?",
        options: ["Cinco", "Dois", "Vinte", "Um"],
        answer: "Cinco",
        difficulty: "easy",
        explanation: "A metade de dez é 10 dividido por 2, que é 5.",
        specificHint: "Dividir por dois."
    },
    {
        question: "O numeral 'onze' vem depois de qual número?",
        options: ["Dez", "Doze", "Nove", "Vinte"],
        answer: "Dez",
        difficulty: "easy",
        explanation: "Onze (11) sucede o dez (10).",
        specificHint: "Início da segunda dezena."
    },
    {
        question: "Como se chama um conjunto de três elementos?",
        options: ["Trio", "Par", "Quarteto", "Trinca"], // Trinca também é usado, mas Trio é comum
        answer: "Trio",
        difficulty: "easy",
        explanation: "Um conjunto de três é frequentemente chamado de 'trio'.",
        specificHint: "Pense em músicos."
    },
    {
        question: "Qual o numeral cardinal para 30?",
        options: ["Trinta", "Trigésimo", "Treze", "Trezentos"],
        answer: "Trinta",
        difficulty: "easy",
        explanation: "O numeral cardinal para 30 é 'trinta'.",
        specificHint: "Termina com '-inta'."
    },
    {
        question: "Se você está em 'quarto lugar', quantas pessoas estão à sua frente?",
        options: ["Três", "Quatro", "Duas", "Cinco"],
        answer: "Três",
        difficulty: "easy",
        explanation: "Estar em quarto lugar significa que três competidores o precedem.",
        specificHint: "Pense nas posições anteriores."
    },
    {
        question: "Qual o algarismo romano para 10?",
        options: ["X", "V", "I", "L"],
        answer: "X",
        difficulty: "easy",
        explanation: "X é o algarismo romano para dez.",
        specificHint: "Um dos símbolos fundamentais."
    },
    {
        question: "Como se lê a fração 2/3?",
        options: ["Dois terços", "Três meios", "Dois sobre três", "Terço de dois"],
        answer: "Dois terços",
        difficulty: "easy",
        explanation: "A fração 2/3 é lida como 'dois terços'.",
        specificHint: "O numerador é lido como cardinal e o denominador como ordinal (a partir de terço)."
    },
    {
        question: "Qual número é 'uma dezena mais três unidades'?",
        options: ["Treze", "Dez mais três", "Trinta", "Sete"],
        answer: "Treze",
        difficulty: "easy",
        explanation: "Uma dezena (10) mais três unidades (3) é igual a treze (13).",
        specificHint: "Dezena = 10."
    },
    {
        question: "O que é 'um século'?",
        options: ["Cem anos", "Mil anos", "Dez anos", "Cinquenta anos"],
        answer: "Cem anos",
        difficulty: "easy",
        explanation: "Um século é um período de cem anos.",
        specificHint: "Relacionado a 'cem'."
    },
    {
        question: "Qual o ordinal de 'sete'?",
        options: ["Sétimo", "Sete", "Setenta", "Setuagésimo"],
        answer: "Sétimo",
        difficulty: "easy",
        explanation: "O numeral ordinal correspondente a sete é 'sétimo'.",
        specificHint: "Indica a sétima posição."
    },
    {
        question: "Como se escreve 'sessenta' em algarismos?",
        options: ["60", "16", "600", "06"],
        answer: "60",
        difficulty: "easy",
        explanation: "O numeral 'sessenta' é representado por 60.",
        specificHint: "Seis dezenas."
    },

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
    {
        question: "Qual é o numeral ordinal para o número 44?",
        options: ["Quadragésimo quarto", "Quarenta e quatro avos", "Quarentavo quarto", "Quatro e quarenta"],
        answer: "Quadragésimo quarto",
        difficulty: "medium",
        explanation: "O ordinal de 44 é 'quadragésimo quarto'.",
        specificHint: "Combina o ordinal de 40 com o ordinal de 4."
    },
    {
        question: "A expressão 'uma década' refere-se a quantos anos?",
        options: ["Dez anos", "Cem anos", "Mil anos", "Cinco anos"],
        answer: "Dez anos",
        difficulty: "medium",
        explanation: "'Uma década' é um período de dez anos.",
        specificHint: "Pense em 'dez'."
    },
    {
        question: "Como se escreve 900 por extenso?",
        options: ["Novecentos", "Novessentos", "Novesentos", "Nonacentos"],
        answer: "Novecentos",
        difficulty: "medium",
        explanation: "O numeral 900 é escrito como 'novecentos'.",
        specificHint: "Combina 'nove' com 'centos'."
    },
    {
        question: "O que significa 'quíntuplo'?",
        options: ["Cinco vezes", "A quinta parte", "O quinto lugar", "Um grupo de cinco"],
        answer: "Cinco vezes",
        difficulty: "medium",
        explanation: "'Quíntuplo' é um numeral multiplicativo que indica cinco vezes uma quantidade.",
        specificHint: "Pense em 'quinta-feira' e multiplicação."
    },
    {
        question: "Qual o numeral romano para 50?",
        options: ["L", "C", "D", "M"],
        answer: "L",
        difficulty: "medium",
        explanation: "Em algarismos romanos, L representa 50.",
        specificHint: "É uma das letras base do sistema romano."
    },
    // --- Mais 35 questões MÉDIAS ---
    {
        question: "Qual o numeral ordinal para 77º?",
        options: ["Septuagésimo sétimo", "Setenta e sete ordinal", "Setentavo sétimo", "Septuagésimo sete"],
        answer: "Septuagésimo sétimo",
        difficulty: "medium",
        explanation: "O ordinal de 77 é 'septuagésimo sétimo'.",
        specificHint: "Combinação de 70 (septuagésimo) e 7 (sétimo)."
    },
    {
        question: "Se um produto custa 'cento e cinquenta reais', qual o valor?",
        options: ["R$ 150,00", "R$ 100,50", "R$ 105,00", "R$ 1000,50"],
        answer: "R$ 150,00",
        difficulty: "medium",
        explanation: "'Cento e cinquenta' representa o número 150.",
        specificHint: "Cento = 100."
    },
    {
        question: "Qual é a leitura de 7/10?",
        options: ["Sete décimos", "Dez sétimos", "Sete dez avos", "Sétimo de dez"],
        answer: "Sete décimos",
        difficulty: "medium",
        explanation: "Para denominadores 10, 100, 1000, usamos décimo, centésimo, milésimo.",
        specificHint: "Denominador é uma potência de dez."
    },
    {
        question: "O que é um 'bimestre'?",
        options: ["Período de dois meses", "Duas vezes por mês", "Período de duas semanas", "Meio mês"],
        answer: "Período de dois meses",
        difficulty: "medium",
        explanation: "'Bimestre' é um período de tempo correspondente a dois meses.",
        specificHint: "Prefixo 'bi-' significa dois."
    },
    {
        question: "Qual o numeral romano para 90?",
        options: ["XC", "LXXXX", "IC", "XM"],
        answer: "XC",
        difficulty: "medium",
        explanation: "Em romanos, 90 é XC (100 - 10).",
        specificHint: "Usa o princípio subtrativo (C-X)."
    },
    {
        question: "Como se escreve 'trezentos e três' em algarismos?",
        options: ["303", "330", "3003", "333"],
        answer: "303",
        difficulty: "medium",
        explanation: "Trezentos (300) e três (3) formam 303.",
        specificHint: "Posição das centenas e unidades."
    },
    {
        question: "Qual é o sêxtuplo de 10?",
        options: ["Sessenta", "Dezesseis", "Seis", "Cem"],
        answer: "Sessenta",
        difficulty: "medium",
        explanation: "'Sêxtuplo' significa seis vezes. 6 x 10 = 60.",
        specificHint: "Multiplicativo de seis."
    },
    {
        question: "O ordinal 'Vigésima Primeira' refere-se a qual número?",
        options: ["21ª", "20ª e 1ª", "12ª", "210ª"],
        answer: "21ª",
        difficulty: "medium",
        explanation: "Vigésima (20ª) + Primeira (1ª) = 21ª.",
        specificHint: "Combinação de ordinais."
    },
    {
        question: "Um 'milhar' corresponde a quantas unidades?",
        options: ["Mil", "Cem", "Dez mil", "Cinquenta"],
        answer: "Mil",
        difficulty: "medium",
        explanation: "Um 'milhar' é um numeral coletivo que representa mil unidades.",
        specificHint: "Relacionado a 'mil'."
    },
    {
        question: "Qual a forma correta de escrever 1.500 por extenso?",
        options: ["Mil e quinhentos", "Um mil quinhentos", "Mil quinhentos", "Quinhentos e mil"],
        answer: "Mil e quinhentos", // "Um mil e quinhentos" também é aceito, "Mil quinhentos" mais informal
        difficulty: "medium",
        explanation: "A forma mais comum é 'mil e quinhentos'.",
        specificHint: "Uso da conjunção 'e'."
    },
    {
        question: "Qual o valor de XLVI em algarismos arábicos?",
        options: ["46", "66", "44", "56"],
        answer: "46",
        difficulty: "medium",
        explanation: "XL = 40, V = 5, I = 1. Logo, 40 + 5 + 1 = 46.",
        specificHint: "Combine os valores dos símbolos romanos."
    },
    {
        question: "Como se lê a fração 1/100?",
        options: ["Um centésimo", "Cem avos", "Um sobre cem", "Centésima parte de um"],
        answer: "Um centésimo",
        difficulty: "medium",
        explanation: "Para denominador 100, usa-se 'centésimo'.",
        specificHint: "Relacionado a 'cem'."
    },
    {
        question: "O que significa 'tríduo'?",
        options: ["Período de três dias", "Três vezes ao dia", "Terceiro dia do mês", "Algo dividido em três"],
        answer: "Período de três dias",
        difficulty: "medium",
        explanation: "'Tríduo' é um período de três dias, geralmente de orações ou celebrações.",
        specificHint: "Coletivo de tempo, 'tri' indica três."
    },
    {
        question: "Qual o ordinal para 600º?",
        options: ["Sexcentésimo", "Seiscentésimo", "Sescentésimo", "Seiscentos ordinal"],
        answer: "Sexcentésimo", // "Seiscentésimo" também pode ser aceito por alguns.
        difficulty: "medium",
        explanation: "O ordinal para 600 é 'sexcentésimo'.",
        specificHint: "Origem latina 'sexcenti'."
    },
    {
        question: "Como se escreve 2.002 por extenso?",
        options: ["Dois mil e dois", "Dois mil dois", "Vinte e dois", "Dois mil e duzentos"],
        answer: "Dois mil e dois",
        difficulty: "medium",
        explanation: "A forma correta é 'dois mil e dois'.",
        specificHint: "Conjunção 'e' entre milhar e unidade, quando não há centena nem dezena."
    },
    {
        question: "Qual o numeral romano para 400?",
        options: ["CD", "CCCC", "XD", "LM"],
        answer: "CD",
        difficulty: "medium",
        explanation: "400 em romanos é CD (500 - 100).",
        specificHint: "Princípio subtrativo: D - C."
    },
    {
        question: "Um 'lustro' equivale a quantos anos?",
        options: ["Cinco anos", "Dez anos", "Cinquenta anos", "Cem anos"],
        answer: "Cinco anos",
        difficulty: "medium",
        explanation: "Um 'lustro' é um período de cinco anos.",
        specificHint: "Termo clássico para um período."
    },
    {
        question: "Qual a leitura da fração 5/8?",
        options: ["Cinco oitavos", "Oito quintos", "Cinco oito avos", "Quinto de oito"],
        answer: "Cinco oitavos",
        difficulty: "medium",
        explanation: "Lê-se o numerador como cardinal e o denominador como ordinal (até décimo) ou com 'avos'.",
        specificHint: "Denominador menor que 10."
    },
    {
        question: "Qual o multiplicativo de quatro?",
        options: ["Quádruplo", "Quarto", "Quarteto", "Quarenta"],
        answer: "Quádruplo",
        difficulty: "medium",
        explanation: "O numeral multiplicativo para quatro é 'quádruplo'.",
        specificHint: "Indica multiplicação por 4."
    },
    {
        question: "Como se escreve 'setecentos e cinquenta' em algarismos?",
        options: ["750", "705", "70050", "7500"],
        answer: "750",
        difficulty: "medium",
        explanation: "Setecentos (700) mais cinquenta (50) é 750.",
        specificHint: "Composição de centenas e dezenas."
    },
    {
        question: "O que é um 'semestre'?",
        options: ["Período de seis meses", "Metade de um mês", "Seis vezes por ano", "A cada seis semanas"],
        answer: "Período de seis meses",
        difficulty: "medium",
        explanation: "Um 'semestre' corresponde a um período de seis meses.",
        specificHint: "'Semi' (metade) + 'estre' (relativo a ano, de forma indireta)."
    },
    {
        question: "Qual o ordinal de 300?",
        options: ["Trecentésimo", "Tricentésimo", "Trezentésimo", "Tringentésimo"],
        answer: "Trecentésimo", // Tricentésimo é variante aceita.
        difficulty: "medium",
        explanation: "O numeral ordinal para 300 é 'trecentésimo'.",
        specificHint: "Relacionado a 'trezentos'."
    },
    {
        question: "Qual o numeral romano para 60?",
        options: ["LX", "XXC", "VL", "LC"],
        answer: "LX",
        difficulty: "medium",
        explanation: "LX (L=50, X=10) representa 60.",
        specificHint: "Combinação aditiva."
    },
    {
        question: "Como se lê '1.000.000'?",
        options: ["Um milhão", "Mil milhares", "Cem dezenas de milhar", "Uma unidade de milhão"],
        answer: "Um milhão",
        difficulty: "medium",
        explanation: "O número 1.000.000 é lido como 'um milhão'.",
        specificHint: "Numeral cardinal para grande quantidade."
    },
    {
        question: "Qual a fração que representa 'meio por cento'?",
        options: ["1/200", "1/2", "50/100", "1/50"],
        answer: "1/200",
        difficulty: "medium",
        explanation: "Meio por cento é (1/2)/100 = 1/200.",
        specificHint: "Porcento significa 'por cem'."
    },
    {
        question: "Qual o resultado de 'CD + L' em algarismos arábicos?",
        options: ["450", "405", "550", "350"],
        answer: "450",
        difficulty: "medium",
        explanation: "CD = 400, L = 50. Então CD + L = 400 + 50 = 450.",
        specificHint: "Some os valores romanos."
    },
    {
        question: "O que significa 'undécuplo'?",
        options: ["Onze vezes", "A décima primeira parte", "Um décimo de um", "Relativo a ondas"],
        answer: "Onze vezes",
        difficulty: "medium",
        explanation: "'Undécuplo' é o numeral multiplicativo que significa onze vezes.",
        specificHint: "Relacionado ao número onze."
    },
    {
        question: "Qual o ordinal para 'quinquagésimo'?",
        options: ["50º", "15º", "500º", "5º"],
        answer: "50º",
        difficulty: "medium",
        explanation: "Quinquagésimo é o ordinal para 50.",
        specificHint: "Terminação '-gésimo' indica dezenas."
    },
    {
        question: "Como se escreve 'novecentos e noventa e nove'?",
        options: ["999", "9099", "9909", "90099"],
        answer: "999",
        difficulty: "medium",
        explanation: "Representa o número anterior a mil.",
        specificHint: "Máximo de três algarismos."
    },
    {
        question: "Um ' biênio' se refere a um período de quantos anos?",
        options: ["Dois anos", "Dois meses", "Duas décadas", "Metade de um ano"],
        answer: "Dois anos",
        difficulty: "medium",
        explanation: "Um 'biênio' é um período de dois anos.",
        specificHint: "Prefixo 'bi-' significa dois, 'ênio' relaciona-se a ano."
    },
    {
        question: "Qual a leitura de 3/1000?",
        options: ["Três milésimos", "Mil terços", "Três mil avos", "Milésimo de três"],
        answer: "Três milésimos",
        difficulty: "medium",
        explanation: "Denominador 1000, usa-se 'milésimo'.",
        specificHint: "Relacionado a 'mil'."
    },
    {
        question: "Qual o numeral romano para 150?",
        options: ["CL", "LM", "CMD", "CLI"],
        answer: "CL",
        difficulty: "medium",
        explanation: "C (100) + L (50) = 150.",
        specificHint: "Adição de C e L."
    },
    {
        question: "O ordinal 'octogésimo' representa qual número?",
        options: ["80º", "8º", "18º", "800º"],
        answer: "80º",
        difficulty: "medium",
        explanation: "Octogésimo é o ordinal para 80.",
        specificHint: "Relacionado a 'oito' e dezenas."
    },
    {
        question: "Como se escreve 'quatrocentos e cinquenta e seis'?",
        options: ["456", "400506", "4506", "4056"],
        answer: "456",
        difficulty: "medium",
        explanation: "Quatrocentos (400) + cinquenta (50) + seis (6).",
        specificHint: "Valor posicional dos algarismos."
    },
    {
        question: "O que é um 'novelo' em termos numéricos (originalmente)?",
        options: ["Nove fios (sentido antigo)", "Cem metros de fio", "Um tipo de numeral", "Algo novo"],
        answer: "Nove fios (sentido antigo)", // Contexto histórico do termo
        difficulty: "medium",
        explanation: "Originalmente, 'novelo' podia referir-se a um conjunto de nove fios, derivado de 'nove'. Hoje é mais genérico.",
        specificHint: "Etimologia da palavra."
    },


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
        explanation: "A forma multiplicativa de oito é 'óctuplo'. 'Oituplo' não é a forma padrão.",
        specificHint: "A expressão 'X vezes' nem sempre é o numeral multiplicativo formal. Pense em 'octógono'."
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
        explanation: "'Septuagésimo quarto' indica a posição de algo na ordem (74º).",
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
        options: ["Cinco milésimo", "Quingentésimo", "Quinquagésimo milésimo", "Quintomilésimo"],
        answer: "Cinco milésimo",
        difficulty: "hard",
        explanation: "O numeral ordinal de 5000 é 'cinco milésimo'. 'Quingentésimo' refere-se a 500.",
        specificHint: "Pense na combinação do cardinal 'cinco' com o ordinal 'milésimo'."
    },
    {
        question: "Qual a leitura correta de 1/20?",
        options: ["Um vigésimo", "Um por vinte", "Vigésimo um", "Vinte avos"],
        answer: "Um vigésimo",
        difficulty: "hard",
        explanation: "O numeral fracionário 1/20 é lido como 'um vigésimo'.",
        specificHint: "'Vigésimo' é um nome ordinal específico para o denominador 20."
    },
    {
        question: "Como se lê a fração 13/10000?",
        options: ["Treze décimos de milésimo", "Treze dezmilésimos avos", "Treze milésimos sobre dez", "Treze dez milésimos"],
        answer: "Treze décimos de milésimo", // "Treze dez mil avos" também é comum
        difficulty: "hard",
        explanation: "Para denominadores como 10.000 (dez mil), a leitura pode ser 'décimos de milésimo' ou usando 'avos'.",
        specificHint: "Envolve potências de dez no denominador."
    },
    {
        question: "O numeral 'quadringentésimo' refere-se a qual posição ordinal?",
        options: ["400º", "40º", "4000º", "4º"],
        answer: "400º",
        difficulty: "hard",
        explanation: "'Quadringentésimo' é o numeral ordinal correspondente a quatrocentos.",
        specificHint: "Um ordinal menos comum, relacionado a centenas e ao número quatro."
    },
    {
        question: "Qual o valor de 'um sesquicentenário' em anos?",
        options: ["150 anos", "100 anos e meio", "60 anos", "160 anos"],
        answer: "150 anos",
        difficulty: "hard",
        explanation: "'Sesqui-' significa 'um e meio'. Um sesquicentenário é 1,5 vezes um centenário (100 anos), ou seja, 150 anos.",
        specificHint: "Lembre-se do prefixo 'sesqui-' (um e meio) e 'centenário' (cem)."
    },
    {
        question: "Se algo custa 'duodécuplo' do preço original, quantas vezes mais caro ficou?",
        options: ["Doze vezes", "Vinte vezes", "Duas vezes mais dez", "Cento e duas vezes"],
        answer: "Doze vezes",
        difficulty: "hard",
        explanation: "'Duodécuplo' é o numeral multiplicativo que significa doze vezes.",
        specificHint: "Relacionado a 'duo' (dois) e 'deca' (dez)."
    },
    {
        question: "Qual o numeral romano para 1999?",
        options: ["MCMXCIX", "MIM", "MDCCCCXCIX", "IC"],
        answer: "MCMXCIX",
        difficulty: "hard",
        explanation: "M=1000, CM=900, XC=90, IX=9. Então, 1000+900+90+9 = 1999.",
        specificHint: "Envolve subtração em algarismos romanos (CM, XC, IX)."
    },
    // --- Mais 35 questões DIFÍCEIS ---
    {
        question: "Como se escreve 'um bilhão e duzentos milhões' em algarismos?",
        options: ["1.200.000.000", "1.000.200.000", "1.200.000", "12.000.000.000"],
        answer: "1.200.000.000",
        difficulty: "hard",
        explanation: "Um bilhão (10^9) e duzentos milhões (200 x 10^6).",
        specificHint: "Contagem de zeros é crucial."
    },
    {
        question: "Qual o ordinal de 999?",
        options: ["Nongentésimo nonagésimo nono", "Novecentos e noventa e nove ordinal", "Milésimo menos um", "Ultimus"],
        answer: "Nongentésimo nonagésimo nono",
        difficulty: "hard",
        explanation: "Combinação dos ordinais: 900 (nongentésimo) + 90 (nonagésimo) + 9 (nono).",
        specificHint: "Formação complexa de ordinais."
    },
    {
        question: "A expressão 'trinta avos' refere-se a uma fração com qual denominador?",
        options: ["30", "3", "1/30", "Indeterminado"],
        answer: "30",
        difficulty: "hard",
        explanation: "A terminação 'avos' é usada para denominadores a partir de 11, indicando o próprio número do denominador.",
        specificHint: "Regra para leitura de frações com denominadores grandes."
    },
    {
        question: "O que é um 'quindecilhão'?",
        options: ["10 elevado a 48", "10 elevado a 15", "10 elevado a 30", "Um número inventado"],
        answer: "10 elevado a 48", // Escala longa (Brasil/Europa Continental)
        difficulty: "hard",
        explanation: "Na escala longa, usada no Brasil, um quindecilhão é 10^(6*15-6) = 10^84, ou 10^(6*15) = 10^90. Na escala curta (EUA), 10^(3*15+3)=10^48. Há divergências.  Se for escala curta: 10^48.  Se for escala longa baseada em milhão elevado a N: Milhão^15 = (10^6)^15 = 10^90. Se for 1000 x (1000)^N: Quindecilhão seria 1000 x (1000)^15 = 10^3 x 10^45 = 10^48.  A opção mais próxima é 10^48 (escala curta). Vamos assumir escala curta para esta questão, pois é mais comum em contextos internacionais.",
        specificHint: "Numerais para grandes potências de dez. A nomenclatura pode variar entre escala curta e longa."
    },
     {
        question: "Qual o valor de 'CMLXIV' em algarismos arábicos?",
        options: ["964", "944", "1164", "100044"],
        answer: "964",
        difficulty: "hard",
        explanation: "CM = 900, LX = 60, IV = 4. Soma: 900 + 60 + 4 = 964.",
        specificHint: "Múltiplas subtrações e adições em numeração romana."
    },
    {
        question: "A palavra 'miríade' representa classicamente qual quantidade?",
        options: ["Dez mil", "Um milhão", "Infinito", "Cem"],
        answer: "Dez mil",
        difficulty: "hard",
        explanation: "Na Grécia Antiga, 'miríade' (myrias) significava dez mil.",
        specificHint: "Origem grega do termo."
    },
    {
        question: "Qual é 'um ducentésimo quinquagésimo de segundo'?",
        options: ["1/250 de segundo", "250 segundos", "1/200 + 1/50 de segundo", "0,025 segundos"],
        answer: "1/250 de segundo",
        difficulty: "hard",
        explanation: "Ducentésimo (200) + quinquagésimo (50) indica a fração 1/250.",
        specificHint: "Combinação de ordinais para formar denominador fracionário."
    },
    {
        question: "O que é um 'milênio e meio'?",
        options: ["1500 anos", "1005 anos", "1050 anos", "1000,5 anos"],
        answer: "1500 anos",
        difficulty: "hard",
        explanation: "Um milênio são 1000 anos. Meio milênio são 500 anos. Total: 1500 anos.",
        specificHint: "Milênio = 1000."
    },
    {
        question: "O ordinal 'noningentésimo nonagésimo' corresponde a qual número?",
        options: ["990º", "909º", "90090º", "900090º"],
        answer: "990º",
        difficulty: "hard",
        explanation: "Noningentésimo (900º) + nonagésimo (90º) = 990º.",
        specificHint: "Combinação de ordinais de centenas e dezenas."
    },
    {
        question: "Como se lê a fração 23/17 (imprópria)?",
        options: ["Vinte e três dezessete avos", "Vinte e três sobre dezessete", "Um inteiro e seis dezessete avos", "Todas as anteriores estão corretas"],
        answer: "Todas as anteriores estão corretas", // A leitura de fração imprópria pode ser direta ou como número misto.
        difficulty: "hard",
        explanation: "Uma fração imprópria pode ser lida diretamente (numerador + denominador + 'avos') ou convertida para número misto.",
        specificHint: "Fração com numerador maior que o denominador."
    },
    {
        question: "Quantos anos há em 'três quartos de século'?",
        options: ["75 anos", "34 anos", "43 anos", "125 anos"],
        answer: "75 anos",
        difficulty: "hard",
        explanation: "Um século tem 100 anos. Três quartos de 100 é (3/4) * 100 = 75.",
        specificHint: "Fração de um período de tempo."
    },
    {
        question: "Qual o numeral romano para 3555?",
        options: ["MMMDLV", "MMMVLV", "LLLMMMVD", "MMMCDDLV"],
        answer: "MMMDLV",
        difficulty: "hard",
        explanation: "MMM = 3000, D = 500, L = 50, V = 5.  Total: 3000 + 500 + 50 + 5 = 3555.",
        specificHint: "Representação de milhares, centenas, dezenas e unidades."
    },
    {
        question: "O que significa 'septuplicar'?",
        options: ["Multiplicar por sete", "Dividir em sete partes", "Elevar à sétima potência", "Contar até sete"],
        answer: "Multiplicar por sete",
        difficulty: "hard",
        explanation: "'Septuplicar' significa tornar algo sete vezes maior.",
        specificHint: "Verbo derivado do multiplicativo 'séptuplo'."
    },
    {
        question: "Qual o ordinal para 'o milésimo primeiro' concorrente?",
        options: ["Milésimo primeiro", "Um mil e um ordinal", "Milésimo e um", "Primeiro milésimo"],
        answer: "Milésimo primeiro",
        difficulty: "hard",
        explanation: "Combinação direta do ordinal 'milésimo' com o ordinal 'primeiro'.",
        specificHint: "Ordinal composto após mil."
    },
    {
        question: "Qual o valor da expressão romana 'M - CM'?",
        options: ["100 (C)", "1000 (M)", "1900 (MCM)", "Erro de cálculo"],
        answer: "100 (C)",
        difficulty: "hard",
        explanation: "M = 1000, CM = 900. Então M - CM = 1000 - 900 = 100, que é C.",
        specificHint: "Subtração de valores romanos."
    },
    {
        question: "Um 'eon' na geologia representa que ordem de magnitude em anos?",
        options: ["Bilhões de anos", "Milhões de anos", "Milhares de anos", "Trilhões de anos"],
        answer: "Bilhões de anos",
        difficulty: "hard",
        explanation: "Um eon é a maior divisão do tempo geológico, geralmente abrangendo bilhões de anos.",
        specificHint: "Escala de tempo geológico."
    },
    {
        question: "Como se escreve 'quinhentos e cinco mil e cinquenta'?",
        options: ["505.050", "550.050", "500.550", "505.500"],
        answer: "505.050",
        difficulty: "hard",
        explanation: "Quinhentos e cinco mil (505.000) + cinquenta (50).",
        specificHint: "Atenção aos zeros e à conjunção 'e'."
    },
    {
        question: "Qual o multiplicativo para doze?",
        options: ["Duodécuplo", "Dozabos", "Décimo segundo", "Doze vezes"],
        answer: "Duodécuplo",
        difficulty: "hard",
        explanation: "O numeral multiplicativo para doze é 'duodécuplo'.",
        specificHint: "Forma erudita para 'doze vezes'."
    },
    {
        question: "A expressão 'um sesquimês' se refere a:",
        options: ["Um mês e meio", "Seis meses", "Um sexto de mês", "Quinze meses"],
        answer: "Um mês e meio",
        difficulty: "hard",
        explanation: "O prefixo 'sesqui-' significa 'um e meio'.",
        specificHint: "'Sesqui' + 'mês'."
    },
    {
        question: "Qual o ordinal de 2000?",
        options: ["Dois milésimo", "Duplo milésimo", "Bimilésimo", "Vigésimo centésimo"],
        answer: "Dois milésimo", // "Bimilésimo" também pode ser encontrado, mas "dois milésimo" é mais analítico.
        difficulty: "hard",
        explanation: "Para ordinais de milhares, combina-se o cardinal com 'milésimo'.",
        specificHint: "Combinação de cardinal com ordinal."
    },
    {
        question: "Qual o numeral romano para 99?",
        options: ["XCIX", "IC", "LXXXXIX", "XCVIIII"],
        answer: "XCIX",
        difficulty: "hard",
        explanation: "XC (90) + IX (9) = 99.",
        specificHint: "Duas aplicações do princípio subtrativo."
    },
    {
        question: "Se uma medida é 'centesimal', ela é dividida em quantas partes?",
        options: ["Cem", "Mil", "Dez", "Vinte"],
        answer: "Cem",
        difficulty: "hard",
        explanation: "O adjetivo 'centesimal' indica divisão por cem.",
        specificHint: "Relacionado a 'centésimo'."
    },
    {
        question: "Qual o resultado de (V x L) + C em arábicos?",
        options: ["350", "250", "550", "155"],
        answer: "350",
        difficulty: "hard",
        explanation: "V=5, L=50, C=100. (5 * 50) + 100 = 250 + 100 = 350.",
        specificHint: "Operações matemáticas com valores romanos."
    },
    {
        question: "A palavra 'grosa' como numeral coletivo significa:",
        options: ["Doze dúzias (144)", "Cem unidades", "Uma grande quantidade", "Vinte unidades"],
        answer: "Doze dúzias (144)",
        difficulty: "hard",
        explanation: "Uma 'grosa' é um numeral coletivo que representa 144 unidades (12 x 12).",
        specificHint: "Usado antigamente em comércio."
    },
    {
        question: "Qual o ordinal de 'um milhão e um'?",
        options: ["Milionésimo primeiro", "Um milhão e um ordinal", "Milionésimo e um", "Primeiro milionésimo"],
        answer: "Milionésimo primeiro",
        difficulty: "hard",
        explanation: "Combinação do ordinal 'milionésimo' com 'primeiro'.",
        specificHint: "Ordinal composto após um milhão."
    },
    {
        question: "Como se escreve 'seiscentos e seis mil seiscentos e seis'?",
        options: ["606.606", "660.606", "600.600.606", "606.660"],
        answer: "606.606",
        difficulty: "hard",
        explanation: "Seiscentos e seis mil (606.000) + seiscentos e seis (606).",
        specificHint: "Atenção à colocação dos termos 'mil'."
    },
    {
        question: "O que é um 'novenário'?",
        options: ["Período de nove dias", "Algo multiplicado por nove", "A nona parte", "Um grupo de noventa"],
        answer: "Período de nove dias",
        difficulty: "hard",
        explanation: "Um 'novenário' ou 'novena' é um período de nove dias, geralmente de práticas religiosas.",
        specificHint: "Coletivo de tempo, relacionado a 'nove'."
    },
    {
        question: "Qual o numeral romano para 2500?",
        options: ["MMD", "MMDL", "IID", "MCCL"],
        answer: "MMD",
        difficulty: "hard",
        explanation: "MM (2000) + D (500) = 2500.",
        specificHint: "Combinação simples para milhares e centenas."
    },
    {
        question: "Se algo é 'cêntuplo', quantas vezes é maior?",
        options: ["Cem vezes", "Dez vezes", "Mil vezes", "Vinte vezes"],
        answer: "Cem vezes",
        difficulty: "hard",
        explanation: "'Cêntuplo' é o numeral multiplicativo que significa cem vezes.",
        specificHint: "Relacionado a 'cem'."
    },
    {
        question: "Qual a leitura correta de 7/12 (sete doze avos)? O denominador é lido como:",
        options: ["Ordinal até décimo, depois cardinal + avos", "Sempre cardinal + avos", "Sempre ordinal", "Cardinal, exceto para potências de dez"],
        answer: "Ordinal até décimo, depois cardinal + avos",
        difficulty: "hard",
        explanation: "Para denominadores de 2 a 10, lê-se o ordinal (meio, terço, ..., décimo). A partir de 11, usa-se o cardinal seguido de 'avos', exceto para potências de 10 (centésimo, milésimo).",
        specificHint: "Regra geral de leitura de frações."
    },
    {
        question: "O ordinal 'milésimo ducentésimo' se refere a qual posição?",
        options: ["1200º", "100200º", "1000200º", "2100º"],
        answer: "1200º",
        difficulty: "hard",
        explanation: "Milésimo (1000º) + Ducentésimo (200º) = 1200º.",
        specificHint: "Soma de ordinais de milhar e centena."
    },
    {
        question: "Qual o valor de (M/D) * X?",
        options: ["20", "50", "200", "5"],
        answer: "20",
        difficulty: "hard",
        explanation: "M=1000, D=500, X=10. (1000/500) * 10 = 2 * 10 = 20.",
        specificHint: "Operações mistas com valores romanos."
    },
    {
        question: "Um 'heptacontaedro' é um poliedro com quantas faces?",
        options: ["Setenta", "Dezessete", "Sete", "Setecentas"],
        answer: "Setenta",
        difficulty: "hard",
        explanation: "'Hepta' (sete) + 'conta' (dez, para dezenas) + 'edro' (face). Indica 70 faces.",
        specificHint: "Nomenclatura de poliedros baseada em numerais gregos."
    },
    {
        question: "A data 'MCDXCII' corresponde a que ano importante?",
        options: ["1492 (Chegada de Colombo à América)", "1412 (Nascimento de Joana d'Arc)", "1592 (Shakespeare começa a ser conhecido)", "1498 (Vasco da Gama chega à Índia)"],
        answer: "1492 (Chegada de Colombo à América)",
        difficulty: "hard",
        explanation: "M=1000, CD=400, XC=90, II=2. Total: 1000+400+90+2 = 1492.",
        specificHint: "Conversão de data histórica em romanos."
    },
    {
        question: "Qual o ordinal para 'setingentésimo trigésimo sexto'?",
        options: ["736º", "637º", "700306º", "367º"],
        answer: "736º",
        difficulty: "hard",
        explanation: "Setingentésimo (700º) + trigésimo (30º) + sexto (6º) = 736º.",
        specificHint: "Forma menos comum para 700 (Setecentésimo é mais usual, mas Setingentésimo também existe)."
    }
];