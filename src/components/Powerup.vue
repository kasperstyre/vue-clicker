<template>
    <md-list-item :class="this.purchasable ? 'purchasable-powerup' : 'disabled-powerup'">


        <div class="md-list-item-text">
            <span>{{ name }}</span>
            <span><img class="currency-logo" src="@/assets/thumbnails/logo.png">{{ price }}</span>
        </div>
    </md-list-item>
</template>
<script lang="ts">
import '@/styles/powerup.scss';

import { Component, Prop, Vue } from 'vue-property-decorator';
import { PowerupCount } from '@/classes/PowerupCount.ts';

@Component
export default class PowerupComponent extends Vue {
    @Prop(Number) id!: number;
    @Prop(String) name!: string;
    @Prop(Number) basePrice!: number;
    @Prop(Number) multiplier!: number;

    get price(): number {
        const powerupCount: PowerupCount | undefined =
            this.$store.getters.powerupCounts.find((x: PowerupCount) => x.id === this.id);

        if (!powerupCount) {
            return this.basePrice;
        } else {
            return this.basePrice * (powerupCount.count * this.multiplier);
        }
    }

    get purchasable(): boolean {
        const cookies = this.$store.getters.cookies;

        return this.price <= cookies;
    }
}
</script>