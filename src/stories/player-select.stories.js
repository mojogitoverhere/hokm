import PlayerSelect from '../components/PlayerSelect.vue'

export default {
  title: 'PlayerSelect',
}

export const Default = () => ({
    components: { PlayerSelect },
    template: '<player-select :players="[\'David\', \'Shireen\', \'Korosh\', \'Bijan\']"/>',
})
