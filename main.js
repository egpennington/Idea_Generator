const games = ["False Faces", "Slice and Dice", "Cherry Split", "Think Bubbles", "Scamper", "Tug of War", "Idea Box", "Idea Grid", "Lotus Blossom", "Phoenix", "The Great Transpacific Airline and Storm Door Company", "Future Fruit", "Brutethink", "Hall of Fame", "Circle of Opportunity", "Ideatoons", "Clever Trevor", "Chilling Out", "Blue Roses", "The Three B's", "Rattlesnakes and Roses", "Stone Soup", "Color Bath", "Dreamscape", "Da Vinci's Technique", "Dali's Technique", "Not Kansas", "The Shadow", "The Book of the Dead"];

function newGame() {
  var randomNumber = Math.floor(Math.random() * (games.length));
  document.getElementById("gameDisplay").innerHTML = games[randomNumber];
}