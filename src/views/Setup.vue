<template>
    <MainCard>
        <form>
            <h1>Setup New Game</h1>
            <h2>Team Setup</h2>
            <p>Enter the name of each player in counter-clockwise order based on where they are seated at the table.</p>
            <div id="table">
                <div>
                    <label for="player-1">Player 1</label>
                    <input type="text" id="player-1" v-model="players[0]"/>
                </div>
                <div>
                    <label for="player-2">Player 2</label>
                    <input type="text" id="player-2" v-model="players[1]" />
                </div>
                <div>
                    <label for="player-3">Player 3</label>
                    <input type="text" id="player-3" v-model="players[2]" />
                </div>
                <div>
                    <label for="player-4">Player 4</label>
                    <input type="text" id="player-4" v-model="players[3]" />
                </div>
            </div>
            <h2>Score to Win</h2>
            <label for="score-to-win">Score</label>
            <input type="number" id="score-to-win" name="score-to-win" v-model="scoreToWin"/>

            <h2>Who is dealing first?</h2>
            <p v-if="someNamesBlank">Make sure all 4 player's has been entered above first.</p>
            <PlayerSelect v-else :players="players" v-model="dealer"></PlayerSelect>

            <input id="start-new-game-button" type="submit" v-on:click="logButton" value="Start New Game" />
        </form>
    </MainCard>
</template>

<script>
import MainCard from '../components/MainCard.vue'
import PlayerSelect from '../components/PlayerSelect.vue'

export default {
    name: 'setup',
    components: {
        MainCard,
        PlayerSelect,
    },
    data: () => {
        return {
            players: [
                "",
                "",
                "",
                "",
            ],
            scoreToWin: 1000,
            dealer: null,
        }
    },
    methods: {
        logButton: function(event) {
            event.preventDefault();
            if (this.gameIsNotReady ) {
                console.log("Game is not READY!!")
            } else {
                console.log("READY TO START!")
                this.$router.push('round')
            }
        }
    },
    computed: {
        someNamesBlank: function() {
            function isBlank(str) {
                return (!str || str.trim().length === 0);
            }
            return this.players.some(isBlank)
        },
        gameIsNotReady: function() {
           return this.someNamesBlank || !this.dealer || this.scoreToWin <= 0 
        }
    }
}
</script>

<style scoped>
.main-card {
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
#start-new-game-button {
    display: block;
    padding: 1em 3em;
    margin-top: 2em;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 2em;
    letter-spacing: 0.0625rem;
    background: #CCCCCC;
    cursor: pointer;
}
p {
    max-width: 50ch;
    line-height: 1.5rem;
}
</style>