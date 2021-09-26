<template>
    <div id="players">
        <div class="player">
            <input type="radio" name="player" id="player1" value=0 @input="$emit('update:modelValue', Number($event.target.value))" />
            <label for="player1">{{players[0]}}</label>
        </div>
        <div class="player">
            <input type="radio" name="player" id="player2" value=1 @input="$emit('update:modelValue', Number($event.target.value))" />
            <label for="player2">{{players[1]}}</label>
        </div>
        <div class="player">
            <input type="radio" name="player" id="player3" value=2 @input="$emit('update:modelValue', Number($event.target.value))" />
            <label for="player3">{{players[2]}}</label>
        </div>
        <div class="player">
            <input type="radio" name="player" id="player4" value=3 @input="$emit('update:modelValue', Number($event.target.value))" />
            <label for="player4">{{players[3]}}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'player-select',
    props: {
        players: Array,
        modelValue: Number,
    },
    emits: [
        'update:modelValue',
    ]
}
</script>

<style scoped>
#players {
    display: flex;
    flex-direction: column;
}
.player {
    margin: 0.25em 0;
}
.player label {
    padding-left: 0.5em;
}
label {
    margin-right: 0.5em;
}
input {
    padding: 0.5em;
    margin: 0.25em;
}
</style>