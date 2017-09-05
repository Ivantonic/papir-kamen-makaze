// var element = document.getElementByClass("choice1");

// element.addEventListener("click", function(){  
// 	papir();
// 	prikaziPapir();
// });

// kamen dugme ******************************

var wins = 0;
var losses = 0;

function kamen() {

	var korisnik = "kamen";

// racunarov RNG ----------------------------

	var racunar = Math.random();
	console.log(racunar);
	
	if (racunar < 0.34)
{
	racunar = "papir"
	updejtujLosses()
	document.getElementById('rng-papir').style.display = "block";
	document.getElementById('rng-kamen').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('lose-text').style.display = "block";
	document.getElementById('win-text').style.display = "none";
	document.getElementById('even-text').style.display = "none";
}

else if (racunar <= 0.67)
{
	racunar = "kamen"
	document.getElementById('rng-kamen').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('even-text').style.display = "block";
	document.getElementById('win-text').style.display = "none";
	document.getElementById('lose-text').style.display = "none";
}

else {
	racunar = "makaze"
	updejtujWins()
	document.getElementById('rng-makaze').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-kamen').style.display = "none";

	document.getElementById('win-text').style.display = "block";
	document.getElementById('even-text').style.display = "none";
	document.getElementById('lose-text').style.display = "none";
}

console.log (racunar);

// neresen ishod

if (korisnik == racunar)
{
	console.log("Nereseno");
}

// papir vs kamen ishod ------------------------

else if (korisnik == "papir")
{
	if (racunar === "kamen")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// kamen vs makaze ishod ------------------------

else if (korisnik == "kamen")
{
	if (racunar === "makaze")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// makaze vs papir ishod ------------------------

else if (korisnik == "makaze")
{
	if (racunar === "papir")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}
}

// papir dugme ****************************************

function papir() {

	var korisnik = "papir";

// racunarov RNG ----------------------------

	var racunar = Math.random();
	console.log(racunar);
	
	if (racunar < 0.34)
{
	racunar = "papir"
	document.getElementById('rng-papir').style.display = "block";
	document.getElementById('rng-kamen').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('even-text').style.display = "block";
	document.getElementById('win-text').style.display = "none";
	document.getElementById('lose-text').style.display = "none";
}

else if (racunar <= 0.67)
{
	racunar = "kamen"
	updejtujWins()
	document.getElementById('rng-kamen').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('win-text').style.display = "block";
	document.getElementById('even-text').style.display = "none";
	document.getElementById('lose-text').style.display = "none";
}

else {
	racunar = "makaze"
	updejtujLosses()
	document.getElementById('rng-makaze').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-kamen').style.display = "none";

	document.getElementById('lose-text').style.display = "block";
	document.getElementById('even-text').style.display = "none";
	document.getElementById('win-text').style.display = "none";
}

console.log (racunar);

// neresen ishod

if (korisnik == racunar)
{
	console.log("Nereseno");
}

// papir vs kamen ishod ------------------------

else if (korisnik == "papir")
{
	if (racunar === "kamen")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// kamen vs makaze ishod ------------------------

else if (korisnik == "kamen")
{
	if (racunar === "makaze")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// makaze vs papir ishod ------------------------

else if (korisnik == "makaze")
{
	if (racunar === "papir")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}
}

// makaze dugme ****************************************

function makaze() {

	var korisnik = "makaze";

// racunarov RNG ----------------------------

	var racunar = Math.random();
	console.log(racunar);
	
	if (racunar < 0.34)
{
	racunar = "papir"
	updejtujWins()
	document.getElementById('rng-papir').style.display = "block";
	document.getElementById('rng-kamen').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('win-text').style.display = "block";
	document.getElementById('lose-text').style.display = "none";
	document.getElementById('even-text').style.display = "none";
}

else if (racunar <= 0.67)
{
	racunar = "kamen"
	updejtujLosses()
	document.getElementById('rng-kamen').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-makaze').style.display = "none";

	document.getElementById('lose-text').style.display = "block";
	document.getElementById('win-text').style.display = "none";
	document.getElementById('even-text').style.display = "none";
}

else {
	racunar = "makaze"
	document.getElementById('rng-makaze').style.display = "block";
	document.getElementById('rng-papir').style.display = "none";
	document.getElementById('rng-kamen').style.display = "none";

	document.getElementById('even-text').style.display = "block";
	document.getElementById('win-text').style.display = "none";
	document.getElementById('lose-text').style.display = "none";
}

console.log (racunar);

// neresen ishod

if (korisnik == racunar)
{
	console.log("Nereseno");
}

// papir vs kamen ishod ------------------------

else if (korisnik == "papir")
{
	if (racunar === "kamen")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// kamen vs makaze ishod ------------------------

else if (korisnik == "kamen")
{
	if (racunar === "makaze")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}

// makaze vs papir ishod ------------------------

else if (korisnik == "makaze")
{
	if (racunar === "papir")
	{
		console.log("Korisnik je pobedio");
	}
	else {
		console.log("racunar je pobedio");
	}
}
}

// interakcije sa interfejsom

function prikaziPapir () {
   document.getElementById('user-papir').style.display = "block";
   document.getElementById('user-kamen').style.display = "none";
   document.getElementById('user-makaze').style.display = "none";
}

function prikaziKamen () {
   document.getElementById('user-kamen').style.display = "block";
   document.getElementById('user-papir').style.display = "none";
   document.getElementById('user-makaze').style.display = "none";
}

function prikaziMakaze () {
   document.getElementById('user-makaze').style.display = "block";
   document.getElementById('user-kamen').style.display = "none";
   document.getElementById('user-papir').style.display = "none";
}

// wins / losses attempt

function updejtujWins() {
	wins++;
	document.getElementById("win-value").innerHTML = wins;
}

function updejtujLosses() {
	losses++;
	document.getElementById("loss-value").innerHTML = losses;
}
