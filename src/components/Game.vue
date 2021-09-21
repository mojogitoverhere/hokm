<template>
  <div>
    <label>Bet
      <input type="text" v-model="bet" />
    </label>
    <label>King
      <input type="radio" id="team1" value="team1" v-model="king"/>
      <label for="team1">Team 1</label>
      <input type="radio" id="team2" value="team2" v-model="king"/>
      <label for="team2">Team 2</label>
    </label>
    <p>Score to win: {{scoreToWin}}</p>
    <div class="game">
      <div class="team-1">
        <h1>Team 1</h1>
        <ul>
          <li v-for="(score, index) in team1.scores" :key="index">{{score}}</li>
        </ul>
      </div>
      <div class="team-2">
        <h1>Team 2</h1>
        <ul>
          <li v-for="(score, index) in team2.scores" :key="index">{{score}}</li>
        </ul>
      </div>
    </div>
    <input v-model="score" type="text"/>
    <button v-on:click="submitScore">Submit Score</button>
    <div v-if="winner">
      <div>{{winner}} wins!</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      bet: 150,
      score: 0,
      scoreToWin: 500,
      winner: null,
      king: 'team1',
      team1: {
        scores: [0]
      },
      team2: {
        scores: [0]
      }
    }
  },
  methods: {
    submitScore: function() {
      if (this.king === "team1") {
        const t1PrevScore = this.team1.scores[this.team1.scores.length-1]
        const t2PrevScore = this.team2.scores[this.team2.scores.length-1]
        if (this.score >= this.bet) { // king won (team 1)
          this.team1.scores.push(t1PrevScore + parseInt(this.score))
          this.team2.scores.push(t2PrevScore)

        } else {
          this.team1.scores.push(t1PrevScore - this.bet)
          this.team2.scores.push(t2PrevScore + (185 - this.bet))
        }
      } else {
        const t2PrevScore = this.team2.scores[this.team2.scores.length-1]
        const t1PrevScore = this.team1.scores[this.team1.scores.length-1]
        if (this.score >= this.bet) { // king won (team 1)
          this.team2.scores.push(t2PrevScore + parseInt(this.score))
          this.team1.scores.push(t1PrevScore)

        } else {
          this.team2.scores.push(t2PrevScore - this.bet)
          this.team1.scores.push(t1PrevScore + (185 - this.bet))
        } 
      }
      if (this.team2.scores[this.team2.scores.length-1] >= this.scoreToWin) {
        this.winner = "Team 2"
      }
      if (this.team1.scores[this.team1.scores.length-1] >= this.scoreToWin) {
        this.winner = "Team 1"
      }
      this.score = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.game {
  background-color:#42b983;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 10em;
  margin-right: 10em;
  column-gap: 50px;
  row-gap: 50px;
}

</style>
