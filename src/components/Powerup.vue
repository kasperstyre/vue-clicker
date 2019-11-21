<template>
    <md-list-item @click="attemptPurchase()" :class="this.purchasable ? 'purchasable-powerup' : 'disabled-powerup'">
        <div class="md-list-item-text">
            <span>{{ name }}</span>
            <span><img class="currency-logo" src="@/assets/thumbnails/logo.png">{{ price }}</span>
        </div>
        <h3>
            {{ count }}
        </h3>
    </md-list-item>
</template>
<script lang="ts">
import '@/styles/powerup.scss';

import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { PowerupCount } from '@/classes/PowerupCount.ts';

@Component
export default class PowerupComponent extends Vue {
    @Prop(Number) id!: number;
    @Prop(String) name!: string;
    @Prop(Number) basePrice!: number;
    @Prop(Number) multiplier!: number;


    get powerupCount(): PowerupCount | undefined {
        return this.$store.getters.powerupCounts.find((x: PowerupCount) => x.id === this.id);
    }

    get price(): number {
        if (!this.powerupCount) {
            return this.basePrice;
        } else {
            return Math.floor(this.basePrice * (this.powerupCount.count * this.multiplier));
        }
    }

    get count(): number {
        if (!this.powerupCount) {
            return 0;
        } else {
            return this.powerupCount.count;
        }
    }

    get purchasable(): boolean {
        const cookies = this.$store.getters.cookies;

        return this.price <= cookies;
    }

    attemptPurchase() {
        if (!this.purchasable) {
            console.log('Not enough cookies!');
            return;
        }

        this.selectPowerup();
    }

    @Emit()
    selectPowerup() {
        return this.id;
    }
}
</script>