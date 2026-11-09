const yesButton = document.getElementById("yesButton");
const maybeButton = document.getElementById("maybeButton");
const reply = document.getElementById("reply");
const choiceReply = document.getElementById("choiceReply");
const choiceButtons = Array.from(document.querySelectorAll(".sparkle-option"));
const surpriseButton = document.getElementById("surpriseButton");
const celebration = document.getElementById("celebration");
const revealButton = document.getElementById("revealButton");
const hiddenNote = document.getElementById("hiddenNote");

function chooseSparkle(button) {
  choiceButtons.forEach((option) => {
    option.setAttribute("aria-pressed", String(option === button));
  });
  choiceReply.textContent = `${button.dataset.choice} sounds lovely! We can decide together.`;
}

choiceButtons.forEach((button) => {
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => chooseSparkle(button));
});

surpriseButton.addEventListener("click", () => {
  const options = choiceButtons.filter((button) => button.dataset.choice !== "A surprise");
  const selected = options[Math.floor(Math.random() * options.length)];
  chooseSparkle(selected);
});

function celebrate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  celebration.replaceChildren();
  const colors = ["rose", "blush", "berry", "pink"];
  for (let index = 0; index < 18; index += 1) {
    const piece = document.createElement("span");
    piece.className = `confetti confetti-${colors[index % colors.length]}`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    celebration.append(piece);
  }
  window.setTimeout(() => celebration.replaceChildren(), 2400);
}

yesButton.addEventListener("click", function () {
  const choice = choiceButtons.find((button) => button.getAttribute("aria-pressed") === "true");
  const idea = choice ? ` Your ${choice.dataset.choice.toLowerCase()} idea is on the list!` : "";
  reply.textContent = `It's a date. Let's plan our birthday adventure.${idea}`;
  celebrate();
});

maybeButton.addEventListener("click", function () {
  reply.textContent =
    "No pressure. Take your time; the invitation stays open.";
});

revealButton.addEventListener("click", () => {
  const isExpanded = revealButton.getAttribute("aria-expanded") === "true";
  revealButton.setAttribute("aria-expanded", String(!isExpanded));
  hiddenNote.hidden = isExpanded;
  revealButton.textContent = isExpanded ? "One more little surprise" : "Hide the note";
});
