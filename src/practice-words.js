// Match code-point positions, including NFC Korean and supplementary characters.
export function missedWords(target, input) {
  const typed = Array.from(input.normalize("NFC"));
  const chars = Array.from(target.normalize("NFC"));
  const result = new Set();
  let token = [], wrong = false;
  const flush = () => { if (wrong && token.length) result.add(token.join("")); token = []; wrong = false; };
  chars.forEach((char, index) => {
    if (/\s|[。！？]/u.test(char)) { flush(); return; }
    token.push(char);
    if (index < typed.length && char !== typed[index]) wrong = true;
  });
  flush();
  return [...result].slice(0, 20);
}
export function practicePassage(words) {
  const base = words.join(" ").trim();
  if (!base) return "";
  return (base + " ").repeat(Math.max(1, Math.ceil(160 / (base.length + 1)))).trim().slice(0, 8000);
}
