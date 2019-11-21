<template>
    <div class="md-layout-item md-xlarge-size-66 md-large-size-66 md-medium-size-66 md-small-size-100 powerup-container">
        <md-list class="md-double-line">
            <powerup-component
                v-for="powerup in powerups"
                v-bind="powerup"
                :key="powerup.id"
                @select-powerup="addPowerup"
            >
            </powerup-component>
        </md-list>
    </div>
</template>
<script lang="ts">
import { Powerup } from '@/classes/Powerup.ts';

import PowerupComponent from '@/components/Powerup.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        PowerupComponent
    }
})
export default class PowerupList extends Vue {
    powerups: Powerup[] = [
        new Powerup(1, "Cursor", 15, 1.15, 1),
        new Powerup(2, "Script Kiddie", 100, 1.20, 5),
        new Powerup(3, "Hobby coder", 1000, 1.25, 20),
    ];

    addPowerup(powerupId: number) {
        const selectedPowerup = this.powerups.find((powerup: Powerup) => powerup.id === powerupId);

        this.$store.commit('addPowerup', selectedPowerup);
    }
}
</script>