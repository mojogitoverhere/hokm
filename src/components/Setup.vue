<template>
    <h1>Setup New Game</h1>
    <h2>Team Setup</h2>
    <p>Enter the name of each player in counter-clockwise order based on where they are seated at the table.</p>
    <div id="table">
        <div>
            <label for="player-1">Player 1</label>
            <input type="text" id="player-1" />
        </div>
        <div>
            <label for="player-2">Player 2</label>
            <input type="text" id="player-2" />
        </div>
        <div>
            <label for="player-3">Player 3</label>
            <input type="text" id="player-3" />
        </div>
        <div>
            <label for="player-4">Player 4</label>
            <input type="text" id="player-4" />
        </div>
    </div>
    <h2>Score to Win</h2>
    <input type="number" id="score-to-win" />
    <button>START NEW GAME</button>
</template>

<script>
export default {
    name: 'setup',
}
</script>

<style scoped>
input {
    padding: 0.5em;
    margin: 0.5em;
}
h1 {
    font-size: 1.5rem;
}
h2 {
    font-size: 1.25rem;
}
button {
    padding: 0.5em;
    margin: 1em auto;
    text-align: center;
}
</style>