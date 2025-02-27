function messageVerify() {
    let message = prompt("Enter your message to verify:");

    if (!message) {
        document.getElementById("result").innerHTML = "No message entered.";
        return;
    }

    let confirmFR = message.includes("FR") && !message.includes("Fr") && !message.includes("fR");
    let confirmAI = message.includes("AI") && !message.includes("Ai") && !message.includes("aI");
    let confirmLowerAi = message.includes("aI") || message.includes("Ai");

    let resultText = `The message "${message}" `;

    if (confirmFR && confirmAI) {
        resultText += "is legitimate!";
    } else if (confirmAI) {
        resultText += "is fake!";
    } else if (confirmLowerAi) {
        resultText += "is legitimate!";
    } else if (confirmFR) {
        resultText += "is legitimate!";
    } else {
        resultText += "is not yet encoded!";
    }

    document.getElementById("result").innerHTML = resultText;
}
