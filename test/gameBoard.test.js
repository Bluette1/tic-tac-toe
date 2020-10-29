/**
 * @jest-environment jsdom
 */

import Board from '../src/gameBoard';
import {bodyContent, initialBoard} from './helpers/content_test_helper';
  // Inject DOM element, and add code to test logic
document.body.innerHTML = bodyContent;
const introHeader = document.querySelector('#intro-header');
const optionsDiv = document.querySelector('#options-div');
const namesForm = document.querySelector('#names-form');
const gameBoardSection = document.querySelector('#gamebord-section');
const newRoundBtn = document.querySelector('#new-round-btn');
const gameBoardContainer = document.querySelector('#gamebord-container');

test('displayBoard adds content to the game board container', () => {

optionsDiv.classList.add('hidden-element');
        namesForm.classList.add('hidden-element');
        introHeader.classList.add('hidden-element');
        gameBoardSection.classList.remove('hidden-element');
        gameBoardContainer.setAttribute('disabled', false);
        Board(['Mary', 'Jane'], introHeader, optionsDiv, newRoundBtn).displayBoard();
        expect(gameBoardContainer.innerHTML).not.toBe('');
        expect(gameBoardContainer.innerHTML).toBe(initialBoard);
});