
// Et Array med objekter 
const dcCharacters = [
    {
        name: "Batman",
        image: "images/batman.jpg",
        facts: "Etter å ha mistet foreldrene sine, sverget Bruce Wayne å bekjempe kriminalitet i Gotham City. Han har ingen superkrefter, men bruker intelligens, kampsport og avansert teknologi."
    },
    {
        name: "Superman",
        image: "images/superman.jpg",
        facts: "Sendt til jorden fra den døende planeten Krypton. Under jordens gule sol har han superkrefter som usårbarhet, evnen til å fly og røntgensyn, men han svekkes av kryptonitt."
    },
    {
        name: "Wonder Woman",
        image: "images/wonderwoman.jpg",
        facts: "Prinsesse Diana av Themyscira er en amasonekriger med krefter fra de greske gudene. Hun kjemper for fred og rettferdighet med sitt magiske sannhetslasso."
    },
    {
        name: "The Joker",
        image: "images/joker.jpg",
        facts: "Gothams mest beryktede kriminelle og Batmans erkefiende. Han er en uforutsigbar, nihilistisk kaosbaktanke som gjemmer sine onde planer bak et klovneansikt."
    },
    {
        name: "Lex Luthor",
        image: "images/lexluthor.jpg",
        facts: "En av verdens smarteste menn og en milliardær-forretningsmann. Han ser på Superman som en trussel mot menneskeheten og bruker sin enorme formue og intellekt på å bekjempe ham."
    },
    {
        name: "Harley Quinn",
        image: "images/harleyquinn.jpg",
        facts: "Tidligere psykiater ved Arkham Asylum under navnet Harleen Quinzel. Hun ble fascinert av Jokeren, hjalp ham å rømme, og ble hans akrobatiske og uforutsigbare partner i partner-in-crime."
    }
];

const nameDisplay = document.getElementById("character-name");
const imageDisplay = document.getElementById("character-image");
const factsDisplay = document.getElementById("character-facts");
const selectButton = document.getElementById("select-button");

function showRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * dcCharacters.length);

    const choosenCharacter = dcCharacters[randomIndex]

    nameDisplay.textContent = choosenCharacter.name;
    factsDisplay.textContent = choosenCharacter.facts;
    imageDisplay.src = choosenCharacter.image;
}

selectButton.addEventListener("click", showRandomCharacter);