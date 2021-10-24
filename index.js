// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		console.log("Key Pressed");
		dodgerLeft();
	}
	if (e.key === "ArrowRight") {
		console.log("Key Pressed");
		dodgerRight();
	}
});

function dodgerLeft() {
	const leftNumbers = dodger.style.left.replace("px", "");
	const intLNumbers = parseInt(leftNumbers, 10);

	if (intLNumbers > 0) {
		dodger.style.left = `${intLNumbers - 5}px`;
	}
}
function dodgerRight() {
	const rightNumbers = dodger.style.left.replace("px", "");
	const intLNumbers = parseInt(rightNumbers, 10);

	if (intLNumbers < 360) {
		dodger.style.left = `${intLNumbers + 5}px`;
	}
}
