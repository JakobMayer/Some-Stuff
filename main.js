function calculateFuel() {
    kosten = document.getElementById("kosten").value;
    strecke = document.getElementById("strecke").value;
    verbrauch = document.getElementById("verbrauch").value;
    result = document.getElementById("resultFuel");
    result.innerHTML = "Spritkosten: " + ((strecke/100)*verbrauch*kosten) + "€";
}

function calculateInterest() {
    var kapital = document.getElementById("kapital").value;
    var zinssatz = document.getElementById("zinssatz").value;
    var jahre = document.getElementById("jahre").value;
    var ergebnis = kapital*(Math.pow(1+zinssatz/100,jahre));
    
    result = document.getElementById("resultInterest");
    result.innerHTML = ergebnis.toFixed(2) + "€";

}