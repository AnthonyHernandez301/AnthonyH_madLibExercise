//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings 
const timeOfDay = "bright morning";
const shipName = "The Black Pearl";
const seaDescription = "endless blue ocean";
const captainExclamation = "Could it be treasure?";
Numbers const mathResult = 5*5;
A boolean expression 
Const isAdventureExciting = seaDesciption.includes("Blue");
An object with properties 
const treasureChest = {
material: "wooden",
color: "golden",
contents: "shiny gold coins and sparkling jewels"
};

*/
// Step 1: Paste in one of the story templates above

const story = `// The Pirate Adventure
One ${timeOfDay}, I set sail on a pirate ship named ${shipName}.
The ${seaDescription} stretched endlessly before us.
Just then, we spotted a ${treasureChest.material} chest floating in the water.
"${captainExclamation}" the captain exclaimed.
We hauled it aboard and opened it to reveal ${treasureChest.contents}.
Did you know ${mathResult} equals 25? Incredible, right?

Was this an exciting adventure? ${isAdventureExciting ? "Absolutely!" : "Not really."}
`;
document.getElementById("madlibs-output").textContent = story;

console.log(story);

