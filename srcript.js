// Magic 8 Ball

// Event Listener
document.getElementById("ball").addEventListener("click", ballClicked);

// Function
function ballClicked() {
  let randNum = Math.random();
  let question = document.getElementById("input").value;
  question = question.toLowerCase();
  if (question === "does a magic 8 ball actually work") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (question === "is javascript awesome") {
    document.getElementById("output").innerHTML = " Of Course!";
  } else {
    if (randNum < 0.2) {
      document.getElementById("output").innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      document.getElementById("output").innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      document.getElementById("output").innerHTML =
        "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      document.getElementById("output").innerHTML = "Don't count on it.";
    } else {
      document.getElementById("output").innerHTML = "Outlook not so good.";
    }
  }
}
