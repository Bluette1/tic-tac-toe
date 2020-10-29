const bodyContent = `<section id="intro-section" class="intro-section width-90 centered-horizontal centers-h-v">
<h1 id="intro-header" class="intro-header">Welcome to Tic Tac Toe game</h1>
<div id="options-div" class="options-div centers-h-v">
    <div class="options-btns">
        <button
            type="button"
            id="start-game-btn"
            class="primary-btn start-game-btn">Start a new game</button>
        <button
            type="button"
            id="new-round-btn"
            class="primary-btn start-game-btn hidden-element">Play a new round</button>
        <button
            type="button"
            id="read-instructions-btn"
            class="hidden-element primary-btn read-instructions-btn">Read instructions</button>
    </div>
    <form id="names-form" class="names-form hidden-element">
        <div class="player-names-div">
            <label for="player-one-name" class="player-names-labels">What is the name of the first player? </label>
            <input type="text" id="player-one-name" placeholder="Enter player one name here...">
        </div>
        <div class="player-names-div">
            <label for="player-two-name" class="player-names-labels">What is the name of the second player? </label>
            <input type="text" id="player-two-name" placeholder="Enter player two name here...">
        </div>
        <div class="player-names-div centers-h-v">
            <button
                type="button"
                class="play-btn primary-btn centers-h-v"
                id="play-btn">Play</button>
        </div>
    </form>
</div>
</section>
<section
id="gamebord-section"
class="gamebord-section width-90 height-90 centered-horizontal centers-h-v hidden-element">
<div id="gamebord-container" class="gamebord-container"/>
</section>
<script type="module" src="./src/index.js"></script>`;

const initialBoard = '<div class="centers-h-v" data-i="0" data-j="0"><h1></h1></div><div class="centers-h-v" data-i="0" data-j="1"><h1></h1></div><div class="centers-h-v" data-i="0" data-j="2"><h1></h1></div><div class="centers-h-v" data-i="1" data-j="0"><h1></h1></div><div class="centers-h-v" data-i="1" data-j="1"><h1></h1></div><div class="centers-h-v" data-i="1" data-j="2"><h1></h1></div><div class="centers-h-v" data-i="2" data-j="0"><h1></h1></div><div class="centers-h-v" data-i="2" data-j="1"><h1></h1></div><div class="centers-h-v" data-i="2" data-j="2"><h1></h1></div>';

export { bodyContent, initialBoard };
