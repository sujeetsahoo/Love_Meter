function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }
    
    let loveScore = Math.floor(Math.random() * 101);
    document.getElementById("result").innerText = `Love Score: ${loveScore}%`;
    
    let message = "";
    if (loveScore > 80) {
        message = "You are a perfect match! 💑";
    } else if (loveScore > 50) {
        message = "There's strong chemistry! 💕";
    } else {
        message = "Love takes time to bloom! 🌹";
    }
    
    document.getElementById("message").innerText = message;
}