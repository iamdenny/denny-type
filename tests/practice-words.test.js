import test from 'node:test';
import assert from 'node:assert/strict';
import { missedWords, practicePassage } from '../src/practice-words.js';
test('only attempted incorrect words are included, with duplicates removed', () => {
 assert.deepEqual(missedWords('hello world hello later', 'hxllo world hxllo'), ['hello']);
 assert.deepEqual(missedWords('hello world', 'hello'), []);
});
test('NFC Korean, Japanese delimiters and emoji use correct positions', () => {
 assert.deepEqual(missedWords('우리 함께 연습', '우리 함깨'), ['함께']);
 assert.deepEqual(missedWords('가 나', '가 나'.normalize('NFD')), []);
 assert.deepEqual(missedWords('あいう。かきく。', 'あいえ。'), ['あいう']);
 assert.deepEqual(missedWords('😀 cat dog', '😀 cxt'), ['cat']);
});
test('review passage has useful length and respects input limit', () => {
 assert.equal(practicePassage([]), '');
 assert.ok(practicePassage(['cat']).length >= 150);
 assert.ok(practicePassage(['a'.repeat(9000)]).length <= 8000);
});
