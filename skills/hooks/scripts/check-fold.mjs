#!/usr/bin/env node
// Check a hook against a platform's visible fold.
// Usage: node check-fold.mjs <platform> "hook text"

const FOLDS = {
  linkedin: { chars: 210, note: 'characters visible before "...see more" on mobile' },
  x: { chars: 280, note: 'full tweet length; the first line still carries the scroll-stop' },
  'email-subject': { chars: 50, note: 'characters most inbox clients show for a subject' },
  'email-preview': { chars: 90, note: 'preview text shown after the subject' },
  video: { words: 8, note: 'roughly the words a viewer hears in the first 3 seconds' },
};

const [platform, ...rest] = process.argv.slice(2);
const text = rest.join(' ').trim();
const fold = FOLDS[platform];

if (!fold || !text) {
  console.error(`Usage: node check-fold.mjs <${Object.keys(FOLDS).join('|')}> "hook text"`);
  process.exit(2);
}

let visible, over;
if (fold.chars) {
  visible = text.slice(0, fold.chars);
  over = text.length - fold.chars;
  console.log(`Platform: ${platform} (${fold.chars} chars; ${fold.note})`);
  console.log(`Length: ${text.length} chars${over > 0 ? ` (${over} over the fold)` : ' (fits)'}`);
} else {
  const words = text.split(/\s+/);
  visible = words.slice(0, fold.words).join(' ');
  over = words.length - fold.words;
  console.log(`Platform: ${platform} (${fold.words} words; ${fold.note})`);
  console.log(`Length: ${words.length} words${over > 0 ? ` (${over} past the 3-second mark)` : ' (fits)'}`);
}

console.log(`Above the fold: "${visible}${over > 0 ? '...' : ''}"`);

if (over > 0) {
  console.log('Check: read only the visible part. If it does not stand alone as a hook, cut or restructure.');
  process.exit(1);
}
console.log('Fits the fold. Still verify it leaves one specific question open.');
