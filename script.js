function generateSalami() {
  const sender = document.getElementById("sender").value.trim();
  const receiver = document.getElementById("receiver").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!sender || !receiver || !amount) {
    alert("Please fill in all fields.");
    return;
  }

  const quotes = [
    "Keep smiling, it’s Sunnah!",
    "Spread love and blessings this Eid!",
    "Every small act of kindness counts.",
    "Joy multiplies when shared. Eid Mubarak!",
    "Happiness is giving even when you don't have much.",
    "Gratitude turns what we have into enough.",
    "The best gift is a cheerful heart!",
    "Smiles are free. Share them generously!",
    "Let’s make this Eid unforgettable!",
    "A joyful heart brings the brightest light."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const message = `🎉 ${sender} sent virtual Eid Salami of Tk ${amount} to ${receiver}!`;
  document.getElementById("salami-message").textContent = message;
  document.getElementById("quote").textContent = `"${randomQuote}"`;

  const encoded = encodeURIComponent(`${message}\n"${randomQuote}"`);

  document.getElementById("whatsapp").href = `https://wa.me/?text=${encoded}`;
  document.getElementById("messenger").href = `https://www.facebook.com/sharer/sharer.php?u=https://yourusername.github.io/eid-salami&quote=${encoded}`;

  document.getElementById("result").style.display = "block";
}
