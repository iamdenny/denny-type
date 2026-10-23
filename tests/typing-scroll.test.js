import test from 'node:test';
import assert from 'node:assert/strict';
import { followTypingCaret } from '../src/typing-scroll.js';
function box(scrollTop=0){return {scrollTop,clientTop:0,clientHeight:168,scrollHeight:1200,getBoundingClientRect:()=>({top:700})};}
const caret = top => ({getBoundingClientRect:()=>({top,height:28})});
test('follows a line below the viewport using the same coordinate space',()=>{const p=box();followTypingCaret(p,caret(900));assert.equal(p.scrollTop,172);});
test('backtracking brings earlier lines into view; visible lines stay still',()=>{const p=box(300);followTypingCaret(p,caret(650));assert.equal(p.scrollTop,222);followTypingCaret(p,caret(760));assert.equal(p.scrollTop,222);});
test('reset clamps to start and final line clamps to bottom',()=>{const p=box(300);followTypingCaret(p,caret(400));assert.equal(p.scrollTop,0);followTypingCaret(p,caret(3000));assert.equal(p.scrollTop,1032);});
