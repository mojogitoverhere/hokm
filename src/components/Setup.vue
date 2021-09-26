<template>
    <div class="main-card">
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
        <input type="number" id="score-to-win" name="score-to-win" v-model="scoreToWin"/>

        <h2>Who is dealing first?</h2>
        <p v-if="someNamesBlank">Make sure all 4 player's has been entered above first.</p>
        <div v-else id="dealers">
            <div class="dealer">
                <input type="radio" name="dealer" id="player-1" />
                <label for="player-1">{{player1}}</label>
            </div>
            <div class="dealer">
                <input type="radio" name="dealer" id="player-2" />
                <label for="player-2">{{player2}}</label>
            </div>
            <div class="dealer">
                <input type="radio" name="dealer" id="player-3" />
                <label for="player-3">{{player3}}</label>
            </div>
            <div class="dealer">
                <input type="radio" name="dealer" id="player-4" />
                <label for="player-4">{{player4}}</label>
            </div>
        </div>

        <button v-on:click="logButton">START NEW GAME</button>
    </div>
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
            scoreToWin: 1000,
            dealer: "",
        }
    },
    methods: {
        logButton: function() {
            console.log("STARTING NEW GAME")
        }
    },
    computed: {
        someNamesBlank: function() {
            function isBlank(str) {
                return (!str || str.trim().length === 0);
            }
            return isBlank(this.player1) || isBlank(this.player2) || isBlank(this.player3) || isBlank(this.player4)
        }
    }
}
</script>

<style scoped>
.main-card {
    /* border: 1px red solid; */
    box-shadow: 5px 10px 10px #CCCCCC;
    padding: 3em;
    border-radius: 1.5em;
    background: #F1F1F1;
}
#dealers {
    display: flex;
    flex-direction: column;
}
.dealer {
    margin: 0.25em 0;
}
.dealer label {
    padding-left: 0.5em;
}
label {
    margin-right: 0.5em;
}
input {
    padding: 0.5em;
    margin: 0.25em;
}
h1 {
    margin-top: 0;
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