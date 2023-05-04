input.onButtonPressed(Button.A, function () {
    basic.showString("Jedi " + jedi._pickRandom())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Jedi " + jedi._pickRandom() + ("" + Travel._pickRandom() + planets._pickRandom()))
    basic.showString("in " + ships._pickRandom())
})
let Travel: string[] = []
let jedi: string[] = []
let planets: string[] = []
let ships: string[] = []
ships = [
"Kalee Bastion",
"Gand Navigator",
"Calamity",
"Harmony",
"Blade",
"Beast",
"Mandalorian Mercenary",
"Naboo Brute",
"Devaron Marauder",
"Messenger"
]
planets = [
"Lelsodi",
"Asem",
"Chevu",
"Russuc",
"Okind",
"Truth",
"Tor",
"Urre",
"Vit",
"Yus"
]
jedi = [
"Dansinc Romerai",
"Calrya Popwadh",
"Micdom Connbene",
"Josbray Aswgrah",
"Rylejov Cradeer",
"Coopalfr Belcros",
"Coleconn Haynnor",
"Jortrav Plarode",
"Giantyle Permilb",
"Brygabr Vinerr"
]
Travel = ["escapes from", "returns from ", "flies to"]
basic.forever(function () {
	
})
