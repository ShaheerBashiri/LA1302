let countries = [
    ["Afghanistan", "Kabul"],
    ["Albanien", "Tirana"],
    ["Algerien", "Algier"],
    ["Andorra", "Andorra la Vella"],
    ["Angola", "Luanda"],
    ["Antigua und Barbuda", "St. Johns"],
    ["Äquatorialguinea", "Malabo"],
    ["Argentinien", "Buenos Aires"],
    ["Armenien", "Eriwan"],
    ["Aserbaidschan", "Baku"],
    ["Äthiopien", "Addis Abeba"],
    ["Bahamas", "Nassau"],
    ["Bahrain", "Manama"],
    ["Bangladesch", "Dhaka"],
    ["Barbados", "Bridgetown"],
    ["Belarus", "Minsk"],
    ["Belgien", "Brüssel"],
    ["Belize", "Belmopan"],
    ["Benin", "Porto-Novo"],
    ["Bhutan", "Thimphu"],
    ["Bolivien", "La Paz"],
    ["Bosnien und Herzegowina", "Sarajevo"],
    ["Botswana", "Gaborone"],
    ["Brasilien", "Brasília"],
    ["Brunei", "Bandar Seri Begawan"],
    ["Bulgarien", "Sofia"],
    ["Burkina Faso", "Ouagadougou"],
    ["Burundi", "Gitega"],
    ["Chile", "Santiago de Chile"],
    ["China", "Peking"],
    ["Cookinseln", "Avarua"],
    ["Costa Rica", "San José"],
    ["Côte d'Ivoire", "Yamoussoukro"],
    ["Dänemark", "Kopenhagen"],
    ["Deutschland", "Berlin"],
    ["Dominica", "Roseau"],
    ["Dominikanische Republik", "Santo Domingo"],
    ["Dschibuti", "Dschibuti"],
    ["Ecuador", "Quito"],
    ["El Salvador", "San Salvador"],
    ["Elfenbeinküste", "Yamoussoukro"],
    ["Eritrea", "Asmara"],
    ["Estland", "Tallinn"],
    ["Eswatini", "Mbabane"],
    ["Fidschi", "Suva"],
    ["Finnland", "Helsinki"],
    ["Frankreich", "Paris"],
    ["Gabun", "Libreville"],
    ["Gambia", "Banjul"],
    ["Georgien", "Tiflis"],
    ["Ghana", "Accra"],
    ["Grenada", "St. George's"],
    ["Griechenland", "Athen"],
    ["Guatemala", "Guatemala-Stadt"],
    ["Guinea", "Conakry"],
    ["Guinea-Bissau", "Bissau"],
    ["Guyana", "Georgetown"],
    ["Haiti", "Port-au-Prince"],
    ["Honduras", "Tegucigalpa"],
    ["Indien", "Neu-Delhi"],
    ["Indonesien", "Jakarta"],
    ["Irak", "Bagdad"],
    ["Iran", "Teheran"],
    ["Irland", "Dublin"],
    ["Island", "Reykjavík"],
    ["Israel", "Jerusalem"],
    ["Italien", "Rom"],
    ["Jamaika", "Kingston"],
    ["Japan", "Tokio"],
    ["Jemen", "Sanaa"],
    ["Jordanien", "Amman"],
    ["Kambodscha", "Phnom Penh"],
    ["Kamerun", "Yaoundé"],
    ["Kanada", "Ottawa"],
    ["Kap Verde", "Praia"],
    ["Kasachstan", "Astana"],
    ["Katar", "Doha"],
    ["Kenia", "Nairobi"],
    ["Kirgisistan", "Bischkek"],
    ["Kiribati", "Tarawa"],
    ["Kolumbien", "Bogotá"],
    ["Komoren", "Moroni"],
    ["Kongo", "Brazzaville"],
    ["Kongo [Demokratische Republik]", "Kinshasa"],
    ["Kroatien", "Zagreb"],
    ["Kuba", "Havanna"],
    ["Kuwait", "Kuwait-Stadt"],
    ["Laos", "Vientiane"],
    ["Lesotho", "Maseru"],
    ["Lettland", "Riga"],
    ["Libanon", "Beirut"],
    ["Liberia", "Monrovia"],
    ["Libyen", "Tripolis"],
    ["Liechtenstein", "Vaduz"],
    ["Litauen", "Vilnius"],
    ["Luxemburg", "Luxemburg"],
    ["Madagaskar", "Antananarivo"],
    ["Malawi", "Lilongwe"],
    ["Malaysia", "Kuala Lumpur"],
    ["Malediven", "Malé"],
    ["Mali", "Bamako"],
    ["Malta", "Valletta"],
    ["Marokko", "Rabat"],
    ["Marshallinseln", "Delap-Uliga-Djarrit"],
    ["Mauritius", "Port Louis"],
    ["Mazedonien", "Skopje"],
    ["Mexiko", "Mexiko-Stadt"],
    ["Mikronesien", "Palikir"],
    ["Moldau", "Chisinau"],
    ["Monaco", "Monaco"],
    ["Mongolei", "Ulaanbaatar"],
    ["Montenegro", "Podgorica"],
    ["Mosambik", "Maputo"],
    ["Myanmar", "Naypyidaw"],
    ["Namibia", "Windhuk"],
    ["Nauru", "Yaren District"],
    ["Nepal", "Kathmandu"],
    ["Nicaragua", "Managua"],
    ["Niederlande", "Amsterdam"],
    ["Niger", "Niamey"],
    ["Nigeria", "Abuja"],
    ["Norwegen", "Oslo"],
    ["Oman", "Maskat"],
    ["Österreich", "Wien"],
    ["Pakistan", "Islamabad"],
    ["Palau", "Melekeok"],
    ["Panama", "Panama-Stadt"],
    ["Papua-Neuguinea", "Port Moresby"],
    ["Paraguay", "Asunción"],
    ["Peru", "Lima"],
    ["Philippinen", "Manila"],
    ["Polen", "Warschau"],
    ["Portugal", "Lissabon"],
    ["Ruanda", "Kigali"],
    ["Rumänien", "Bukarest"],
    ["Rusland", "Moskau"],
    ["Salomonen", "Honiara"],
    ["Sambia", "Lusaka"],
    ["Samoa", "Apia"],
    ["San Marino", "San Marino"],
    ["São Tomé und Príncipe", "São Tomé"],
    ["Saudi-Arabien", "Riad"],
    ["Schweden", "Stockholm"],
    ["Schweiz", "Bern"],
    ["Senegal", "Dakar"],
    ["Serbien", "Belgrad"],
    ["Seychellen", "Victoria"],
    ["Sierra Leone", "Freetown"],
    ["Simbabwe", "Harare"],
    ["Singapur", "Singapur"],
    ["Slowakei", "Bratislava"],
    ["Slowenien", "Ljubljana"],
    ["Somalia", "Mogadischu"],
    ["Spanien", "Madrid"],
    ["Sri Lanka", "Colombo"],
    ["St. Kitts und Nevis", "Basseterre"],
    ["St. Lucia", "Castries"],
    ["St. Vincent und die Grenadinen", "Kingstown"],
    ["Suriname", "Paramaribo"],
    ["Swasiland", "Mbabane"],
    ["Südafrika", "Pretoria"],
    ["Südsudan", "Juba"],
    ["Südkorea", "Seoul"],
    ["Syrien", "Damaskus"],
    ["Tadschikistan", "Duschanbe"],
    ["Taiwan", "Taipeh"],
    ["Tansania", "Dodoma"],
    ["Thailand", "Bangkok"],
    ["Timor-Leste", "Dili"],
    ["Togo", "Lomé"],
    ["Tonga", "Nukualofa"],
    ["Trinidad und Tobago", "Port of Spain"],
    ["Tschad", "NDjamena"],
    ["Tschechien", "Prag"],
    ["Tunesien", "Tunis"],
    ["Türkei", "Ankara"],
    ["Turkmenistan", "Aschgabat"],
    ["Tuvalu", "Vaiaku Village"],
    ["Uganda", "Kampala"],
    ["Ukraine", "Kiew"],
    ["Ungarn", "Budapest"],
    ["Uruguay", "Montevideo"],
    ["Usbekistan", "Taschkent"],
    ["Vanuatu", "Port Vila"],
    ["Vatikanstadt", "Vatikanstadt"],
    ["Venezuela", "Caracas"],
    ["Vereinigte Arabische Emirate", "Abu Dhabi"],
    ["Vereinigte Staaten von Amerika", "Washington D.C."],
    ["Vereinigtes Königreich", "London"],
    ["Vietnam", "Hanoi"],
    ["Zentralafrikanische Republik", "Bangui"],
    ["Zypern", "Nikosia"],
];

let currentQuestionIndex = 0;
let isMultipleChoice = false;
let score = 0;
let askedQuestions = new Set();

function getRandomQuestionIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * countries.length);
    } while (askedQuestions.has(randomIndex));
    askedQuestions.add(randomIndex);
    return randomIndex;
}

function displayQuestion() {
    if (askedQuestions.size === countries.length) {
        endQuiz();
        return;
    }

    currentQuestionIndex = getRandomQuestionIndex();
    let question = countries[currentQuestionIndex][0];
    document.getElementById('question').innerText = `Was ist die Hauptstadt von ${question}?`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('score').innerText = `Punktzahl: ${score}`;
    document.getElementById('nextButton').classList.add('hidden');
    document.getElementById('checkButton').classList.add('hidden');
    document.getElementById('restartButton').classList.add('hidden');

    if (isMultipleChoice) {
        displayMultipleChoiceOptions();
    } else {
        document.getElementById('choices').classList.add('hidden');
        document.getElementById('answer').classList.remove('hidden');
        document.getElementById('checkButton').classList.remove('hidden');
    }
}

function displayMultipleChoiceOptions() {
    let choices = document.getElementById('choices');
    choices.innerHTML = '';
    let correctAnswer = countries[currentQuestionIndex][1];
    let options = [correctAnswer];
    while (options.length < 4) {
        let randomOption = countries[Math.floor(Math.random() * countries.length)][1];
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        let button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleMultipleChoiceSelection(button, option);
        choices.appendChild(button);
    });

    choices.classList.remove('hidden');
    document.getElementById('answer').classList.add('hidden');
}

function handleMultipleChoiceSelection(button, selectedAnswer) {
    let correctAnswer = countries[currentQuestionIndex][1];
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = 'green';
        score++;
        setTimeout(() => {
            displayQuestion();
        }, 1000);
    } else {
        button.style.backgroundColor = 'red';
        document.getElementById('restartButton').classList.remove('hidden');
    }
}

function checkAnswer() {
    let givenAnswer = document.getElementById('answer').value;
    let correctAnswer = countries[currentQuestionIndex][1];
    if (givenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').innerText = 'Richtig!';
        document.getElementById('feedback').style.color = 'green';
        score++;
        document.getElementById('nextButton').classList.remove('hidden');
    } else {
        document.getElementById('feedback').innerText = `Falsch. Die richtige Antwort war ${correctAnswer}.`;
        document.getElementById('feedback').style.color = 'red';
        document.getElementById('restartButton').classList.remove('hidden');
    }
}

function nextQuestion() {
    displayQuestion();
}

function toggleMode() {
    isMultipleChoice = !isMultipleChoice;
    displayQuestion();
}

function restartQuiz() {
    askedQuestions.clear();
    score = 0;
    displayQuestion();
}

function endQuiz() {
    document.getElementById('question').innerText = 'Quiz beendet!';
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('answer').classList.add('hidden');
    document.getElementById('checkButton').classList.add('hidden');
    document.getElementById('nextButton').classList.add('hidden');
    document.getElementById('restartButton').classList.remove('hidden');
    document.getElementById('feedback').innerText = `Endpunktzahl: ${score}`;
}

// Initialize the first question
displayQuestion();