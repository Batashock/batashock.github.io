    function OPENTHEDOOR(h) {
	var dooropen = new Audio('dooropen.wav');
	dooropen.play();
	document.getElementById("door").src=h;
    setTimeout(removedoor, 3000);
	setTimeout(hereticanthem, 3000);
	setTimeout(revealpage, 3000);
}
	function removedoor() {
	document.getElementById("door").style.width="0px";
}
	function hereticanthem() {
	MIDIjs.play('TheHereticAnthem.mid');
}
	function revealpage() {
	document.getElementById("WELCOMETO").style.opacity="100%";
}
	var Counter = 0;
	function secretCounter() {
	if (Counter == 50) {
	window.location.href = "https://miastonished.github.io/secret.html"
	};
}