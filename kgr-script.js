function calculateKGR() {
    var allintitle = document.getElementById("kgrAllintitle").value;
    var volume = document.getElementById("kgrVolume").value;
    var resultBox = document.getElementById("kgrResult");

    if(allintitle === "" || volume === "" || volume == 0) {
        resultBox.innerHTML = "Please enter valid numbers.";
        return;
    }

    var kgr = (allintitle / volume).toFixed(2);
    var verdict = "";

    if(kgr < 0.25) verdict = "🔥 Excellent — High ranking potential";
    else if(kgr <= 1) verdict = "⚠ Moderate — Ranking possible";
    else verdict = "❌ Competitive — Avoid for fast ranking";

    resultBox.innerHTML = "KGR Score: " + kgr + "<br>" + verdict;
}

function searchAllintitle() {
    var keyword = document.getElementById("kgrKeyword").value;
    if(keyword === "") {
        alert("Enter a keyword first.");
        return;
    }
    var query = "allintitle:" + keyword;
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
}
