function calculateKGR() {
    var allintitle = parseFloat(document.getElementById("kgrAllintitle").value);
    var volume = parseFloat(document.getElementById("kgrVolume").value);
    var resultBox = document.getElementById("kgrResult");

    // Check for empty inputs, NaN, or division by zero
    if (isNaN(allintitle) || isNaN(volume) || volume <= 0) {
        resultBox.innerHTML = "Please enter valid numbers (Volume must be greater than 0).";
        resultBox.style.color = "red";
        return;
    }

    // Calculate KGR
    var kgrValue = allintitle / volume;
    var kgrFormatted = kgrValue.toFixed(2);
    var verdict = "";
    var color = "";

    // Logic for categorization
    if (kgrValue < 0.25) {
        verdict = "🔥 Excellent — High ranking potential";
        color = "#2ecc71"; // Green
    } else if (kgrValue <= 1.00) {
        verdict = "⚠ Moderate — Ranking possible";
        color = "#f1c40f"; // Yellow/Gold
    } else {
        verdict = "❌ Competitive — Avoid for fast ranking";
        color = "#e74c3c"; // Red
    }

    // Output result with styling
    resultBox.style.color = color;
    resultBox.innerHTML = "<strong>KGR Score: " + kgrFormatted + "</strong><br>" + verdict;
}

function searchAllintitle() {
    var keyword = document.getElementById("kgrKeyword").value;
    if (keyword.trim() === "") {
        alert("Enter a keyword first.");
        return;
    }
    var query = "allintitle:\"" + keyword + "\""; // Added quotes for exact match search
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
}
