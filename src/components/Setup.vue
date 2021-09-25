<template>
    <h1>Setup New Game</h1>
    <h2>Team Setup</h2>
    <p>Enter the name of each player in counter-clockwise order based on where they are seated at the table.</p>
    <div id="table">
        <div>
            <label for="player-1">Player 1</label>
            <input type="text" id="player-1" v-model="player1"/>
        </div>
        <div>
            <label for="player-2">Player 2</label>
            <input type="text" id="player-2" v-model="player2" />
        </div>
        <div>
            <label for="player-3">Player 3</label>
            <input type="text" id="player-3" v-model="player3" />
        </div>
        <div>
            <label for="player-4">Player 4</label>
            <input type="text" id="player-4" v-model="player4" />
        </div>
    </div>
    <h2>Score to Win</h2>
    <label for="score-to-win">Score</label>
    <input type="number" id="score-to-win" name="score-to-win"/>
    <button v-on:click="logButton">START NEW GAME</button>
</template>

<script>
export default {
    name: 'setup',
    data: () => {
        return {
            player1: "",
            player2: "",
            player3: "",
            player4: "",
        }
    },
    methods: {
        logButton: function() {
            console.log("STARTING NEW GAME")
        }
    }
}
</script>

<style scoped>
label {
    margin-right: 0.5em;
}
input {
    padding: 0.5em;
    margin: 0.25em;
}
h1 {
    font-size: 1.5rem;
}
h2 {
    font-size: 1.25rem;
}
button {
    display: block;
    padding: 1em 3em;
    margin-top: 2em;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 2em;
    letter-spacing: 0.0625rem;
    background: #CCCCCC;
}
p {
    max-width: 50ch;
    line-height: 1.5rem;
}
</style>