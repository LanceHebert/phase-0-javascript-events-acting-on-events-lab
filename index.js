// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		console.log("Key Pressed");
		moveDodgerLeft();
	}
	if (e.key === "ArrowRight") {
		console.log("Key Pressed");
		moveDodgerRight();
	}
});

function moveDodgerLeft() {
	const leftNumbers = dodger.style.left.replace("px", "");
	const intLNumbers = parseInt(leftNumbers, 10);

	if (intLNumbers > 0) {
		dodger.style.left = `${intLNumbers - 5}px`;
	}
}
function moveDodgerRight() {
	const rightNumbers = dodger.style.left.replace("px", "");
	const intLNumbers = parseInt(rightNumbers, 10);

	if (intLNumbers < 360) {
		dodger.style.left = `${intLNumbers + 5}px`;
	}
}
