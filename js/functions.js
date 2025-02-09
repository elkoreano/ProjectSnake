function getRandomX() {
	return Math.floor(17 * Math.random() + 3);
}
function getRandomY() {
	return Math.floor(12 * Math.random() + 3);
}
function gameOver(o) {
	(maxScore.innerHTML = o.score), modalGameOver.setAttribute("style", "top:0;"), noLoop();
}
function stopGame() {
	frameRate(0);
}
function playGame() {
	frameRate(velInicial);
}
function moveSnake(o, n) {
	const r = first(o);
	return cons({ x: r.x + n.x, y: r.y + n.y }, o.slice(0, length(o) - 1));
}
function gestorColisiones(o) {
	const n = first(o.snake);
	if (
		n.x < 1.6 ||
		n.x * dx >= WIDTH - 1.6 * SIZE ||
		n.y < 1.6 ||
		n.y * dy >= HEIGHT - 1.6 * SIZE
	)
		return !0;
}
function gestionarMordidas(o, n) {
	return (
		!isEmpty(o) &&
		(JSON.stringify(first(rest(o))) === JSON.stringify(n) ||
			gestionarMordidas(rest(o), n))
	);
}
function comerSnake(o, n, r) {
	const a = first(o),
		e = first(n);
	return a.x == e.x && a.y == e.y;
}
function gestionarTrampas(o, n) {
	const r = first(o),
		a = first(n);
	return !isEmpty(n) && ((r.x == a.x && r.y == a.y) || gestionarTrampas(o, rest(n)));
}
function moveDonkey(o, n) {
	const r = first(o);
	return cons({ x: r.x + n.x, y: r.y + n.y }, o.slice(0, length(o) - 1));
}
function moveBarril(o, n) {
	const r = first(o);
	return cons({ x: r.x + n.x, y: r.y + n.y }, o.slice(0, length(o) - 1));
}
function gestorColisionesDonkey(o) {
	const n = first(o.donkey);
	return n.x + SIZE >= WIDTH - SIZE ? 1 : n.x < 1.6 ? 2 : void 0;
}
function gestorColisionesBarril(o, n) {
	const r = first(o),
		a = first(n);
	return (
		!isEmpty(n) &&
		(null == a
			? gestorColisionesBarril(o, rest(n))
			: (r.y <= 20 * a.y &&
					r.y + 60 >= 20 * a.y &&
					r.x <= 20 * a.x &&
					r.x + 60 >= 20 * a.x) ||
			  gestorColisionesBarril(o, rest(n)))
	);
}

//Se precarga las imagenes del juego

//Se precarga las imagenes del juego
let marioBrick;
let arbolJungla;
let manzana;
let tronco;
let pez;
let algas;
let fuego;
let carne;
let bomba;
let hoguera;
let mina;
let donkeyNormal;
let donkeyBarril;
let imgBarril;

function preload() {
	marioBrick = loadImage("img/bricksMario.png");
	manzana = loadImage("img/manzana.png");
	tronco = loadImage("img/tronco.jpg");
	pez = loadImage("img/pez.png");
	algas = loadImage("img/algas.png");
	fuego = loadImage("img/fuego.webp");
	carne = loadImage("img/carne.png");
	bomba = loadImage("img/bombs.svg");
	hoguera = loadImage("img/hoguera2.png");
	mina = loadImage("img/mina.png");
	donkeyNormal = loadImage("img/DonKeyKong.png");
	donkeyBarril = loadImage("img/DonKeyTarro.jpg");
	imgBarril = loadImage("img/barrilDonKey.png");
}
