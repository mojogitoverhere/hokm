<template>
    <h1>Starting Round 1</h1>
    <h2>It is Player 1's turn to deal!</h2>

    <p>Who is the new King?</p>
    <div>
        <div>
            <input type="radio" id="player-1" name="king" />
            <label for="player-1">Hearts</label>
        </div>
        <div>
            <input type="radio" id="player-2" name="king"/>
            <label for="diamonds">Diamonds</label>
        </div>
        <div>
            <input type="radio" id="player-3" name="king"/>
            <label for="clubs">clubs</label>
        </div>
        <div>
            <input type="radio" id="player-4" name="king"/>
            <label for="spades">Spades</label>
        </div>
    </div>


    <p>How much did they bet?</p>
    <input type="number" id="current-bet" />

    <p>Which suit is the new trump?</p>
    <div>
        <div>
            <input type="radio" id="hearts" name="suit" />
            <label for="hearts">Hearts</label>
        </div>
        <div>
            <input type="radio" id="diamonds" name="suit"/>
            <label for="diamonds">Diamonds</label>
        </div>
        <div>
            <input type="radio" id="clubs" name="suit"/>
            <label for="clubs">clubs</label>
        </div>
        <div>
            <input type="radio" id="spades" name="suit"/>
            <label for="spades">Spades</label>
        </div>
    </div>
    
    <button>Start Round</button>
</template>

<script>
export default {
    name: 'round-start',
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
    margin: 1em 0;
}
button {
    padding: 1em 3em;
    margin: 1em auto;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 2em;
    letter-spacing: 0.0625rem;
    background: #CCCCCC;
}
</style>