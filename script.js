
// Et Array med objekter 
const dcCharacters = [
    {
        name: "Batman",
        image: "./Images/batman.jpg",
        facts: "Etter å ha mistet foreldrene sine, sverget Bruce Wayne å bekjempe kriminalitet i Gotham City. Han har ingen superkrefter, men bruker intelligens, kampsport og avansert teknologi."
    },
    {
        name: "Superman",
        image: "./Images/superman.jpg",
        facts: "Sendt til jorden fra den døende planeten Krypton. Under jordens gule sol har han superkrefter som usårbarhet, evnen til å fly og røntgensyn, men han svekkes av kryptonitt."
    },
    {
        name: "Wonder Woman",
        image: "./Images/wonderwoman.jpg",
        facts: "Prinsesse Diana av Themyscira er en amasonekriger med krefter fra de greske gudene. Hun kjemper for fred og rettferdighet med sitt magiske sannhetslasso."
    },
    {
        name: "The Joker",
        image: "./Images/joker.jpg",
        facts: "En uforutsigbar skurk som bare lever for å skape fullstendig lovløshet. Batmans erkefiende bruker det ikoniske klovneutseendet sitt som en skummel kontrast til sine onde og gale planer."
    },
    {
        name: "Lex Luthor",
        image: "./Images/lexluthor.jpg",
        facts: "En av verdens smarteste menn og en milliardær-forretningsmann. Han ser på Superman som en trussel mot menneskeheten og bruker sin enorme formue og intellekt på å bekjempe ham."
    },
    {
        name: "Harley Quinn",
        image: "./Images/harleyquinn.jpg",
        facts: "Tidligere psykiater ved Arkham Asylum under navnet Harleen Quinzel. Hun ble fascinert av Jokeren, hjalp ham å rømme, og ble hans akrobatiske og uforutsigbare partner-in-crime."
    }
];
// DOM-KOBBLINGER (Henter elementer fra HTML)
// Henter referansen fra index.html Denne gjør så at javascript kan bytte navnet til karakteren som blir valgt i javacript(Arrayet)
const nameDisplay = document.getElementById("character-name");
// Henter referansen fra index.html Denne gjør så at javascript kan bytte bilder som er tilknyttet karakteren som blir valgt i javascript(Arrayet)
const imageDisplay = document.getElementById("character-image");
// Henter referansen fra index.html Denne gjør så at javascriptet kan endre Paragraphen i htmlen. denne teksten blir endret fra info teksten i javascript(Arrayet)
const factsDisplay = document.getElementById("character-facts");
// Henter referansen fra index.html Denne skal brukes til å starte å starte showRandomCharacter funskjonen når man trykker på knappen
const selectButton = document.getElementById("select-button");

function showRandomCharacter() {
    // Her så gjør jeg at funksjonen blir math.random ganges med dcCharacter.length. Så det blir et tall fra 0.00 til 5.99 siden det er seks objekter i arrayet og vi bruker math.floor til å runde av til et helt tall
    const randomIndex = Math.floor(Math.random() * dcCharacters.length);
    // Her forteller vi choosenCharacter hvilken plass som har blitt trukket i arrayet
    const choosenCharacter = dcCharacters[randomIndex]

    // textContent går inn inn htmlen og endrer character name til navnet i den valgte arrayet
    nameDisplay.textContent = choosenCharacter.name;
    // Her går text.content å endrer paragrapghen som er ID tagget med character-facts. den endrer teksten etter hvilken character som blir valgt i arrayet 
    factsDisplay.textContent = choosenCharacter.facts;
    // Her oppgraderer src attributen i bilde elemtet på htmlen. slik at bildet blir endret i htmlen når vi kjører funskjonen. det blir tatt ifra arrayen. 
    imageDisplay.src = choosenCharacter.image;
}
// Når noen trykker på selectButton så vil showRandomCharacter funskjonen kjøre. selectButtom.addeventlistener hører etter når man trykker på knappen.
selectButton.addEventListener("click", showRandomCharacter);