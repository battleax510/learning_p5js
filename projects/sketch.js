document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("talking-head");
    const context = canvas.getContext("2d");
    const mouthControlButton = document.getElementById("mouth-control");

    let isMouthOpen = false;

    mouthControlButton.addEventListener("click", toggleMouth);

    function drawHead() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw head
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
        context.stroke();

        // Draw eyes
        context.beginPath();
        context.arc(canvas.width / 2 - 40, canvas.height / 2 - 30, 10, 0, 2 * Math.PI);
        context.stroke();
        context.beginPath();
        context.arc(canvas.width / 2 + 40, canvas.height / 2 - 30, 10, 0, 2 * Math.PI);
        context.stroke();

        // Draw nose
        context.beginPath();
        context.moveTo(canvas.width / 2 - 5, canvas.height / 2 + 10);
        context.lineTo(canvas.width / 2 + 5, canvas.height / 2 + 10);
        context.stroke();

        // Draw mouth
        const mouthHeight = isMouthOpen ? 20 : 5;
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2 + 30, 50, 0, Math.PI, false);
        context.lineTo(canvas.width / 2 - 50, canvas.height / 2 + 30);
        context.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 30);
        context.closePath();
        context.fillStyle = "#f00";
        context.fill();
        context.stroke();
    }

    function toggleMouth() {
        isMouthOpen = !isMouthOpen;
        drawHead();
    }

    drawHead(); // Initial drawing
});
