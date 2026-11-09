const birthdayMessages = [
  { initial: "C", text: "Cheers to another year of becoming the amazing person you are!" },
  { initial: "L", text: "Let your dreams grow bigger and your happiness shine brighter." },
  { initial: "P", text: "Promise yourself to keep chasing everything your heart desires." },
  { initial: "C", text: "Continue to shine, grow and make beautiful memories." },
  { initial: "L", text: "Life has so many beautiful things waiting for you. Enjoy every moment!" },
  { initial: "P", text: "May this new chapter bring you endless joy and beautiful opportunities." },
  { initial: "C", text: "Celebrate yourself today. You deserve all the good things coming your way!" },
  { initial: "L", text: "Let nothing stop you from becoming everything you dream of." },
  { initial: "P", text: "Keep pushing, keep believing and keep being wonderfully you." },
  { initial: "C", text: "Cheers to growth, love, laughter and a year full of blessings!" }
];
const messagesList = document.getElementById("messagesList");
const messageCount = document.getElementById("messageCount");
const emptyMessages = document.getElementById("emptyMessages");
const envelopeButton = document.getElementById("envelopeButton");
const finalSurprise = document.getElementById("finalSurprise");
const confetti = document.getElementById("confetti");
const reply = document.getElementById("reply");
const yesButton = document.getElementById("yesButton");
const maybeButton = document.getElementById("maybeButton");

function renderMessages(messages) {
  messagesList.replaceChildren();
  emptyMessages.hidden = messages.length > 0;
  messageCount.textContent = `(${messages.length})`;

  messages.forEach((message) => {
    const card = document.createElement("article");
    card.className = "message-note";

    const text = document.createElement("p");
    text.textContent = message.text;

    const signature = document.createElement("p");
    signature.className = "message-signature";
    signature.setAttribute("aria-label", `Initial ${message.initial}`);
    signature.textContent = message.initial;

    card.append(text, signature);
    messagesList.append(card);
  });
}

function celebrateEnvelope() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pieces = ["#d65b91", "#e8a0bf", "#b94c7d", "#f0bfd2", "#c884a2"];
  confetti.replaceChildren();

  pieces.concat(pieces, pieces).forEach((piece) => {
    const item = document.createElement("span");
    item.className = "message-confetti-piece";
    item.style.setProperty("--confetti-color", piece);
    item.style.setProperty("--confetti-x", `${Math.random() * 100}%`);
    item.style.setProperty("--confetti-drift", `${Math.random() * 180 - 90}px`);
    item.style.setProperty("--confetti-delay", `${prefersReducedMotion ? 0 : Math.random() * 0.6}s`);
    confetti.append(item);
  });

  if (!prefersReducedMotion) {
    window.setTimeout(() => confetti.replaceChildren(), 2600);
  }
}

renderMessages(birthdayMessages);

envelopeButton.addEventListener("click", () => {
  if (envelopeButton.getAttribute("aria-expanded") === "true") return;
  envelopeButton.setAttribute("aria-expanded", "true");
  envelopeButton.classList.add("is-open");
  finalSurprise.hidden = false;
  celebrateEnvelope();
});

yesButton.addEventListener("click", () => {
  reply.textContent = "A delightful decision. We look forward to celebrating with you on November 11.";
});

maybeButton.addEventListener("click", () => {
  reply.textContent = "Of course. Take all the time you need. The invitation remains open.";
});
