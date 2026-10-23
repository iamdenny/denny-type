// Keep the active line inside the passage without scrolling the page or input.
export function followTypingCaret(passage, caret) {
  if (!caret) { passage.scrollTop = 0; return; }
  const box = passage.getBoundingClientRect();
  const line = caret.getBoundingClientRect();
  const top = line.top - box.top - passage.clientTop;
  const margin = Math.min(line.height, passage.clientHeight / 4);
  if (top < margin || top + line.height > passage.clientHeight - margin) {
    passage.scrollTop = Math.max(0, Math.min(
      passage.scrollHeight - passage.clientHeight,
      passage.scrollTop + top - margin,
    ));
  }
}
