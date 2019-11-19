<template>
    <div class="md-layout-item md-medium-size-66 md-small-size-100 powerup-container">
        <md-list class="md-double-line">
            <md-list-item
                v-for="powerup in powerups"
                v-bind="powerup"
                :key="powerup.id"
            >
                <div class="md-list-item-text">
                    <span>{{ powerup.name }}</span>
                    <span>{{ powerup.basePrice }}</span>
                </div>
            </md-list-item>
        </md-list>
    </div>
</template>
<script lang="ts">

class Powerup {
    id: number;
    name: string;
    basePrice: number;
    multiplier: number;

    constructor(id:number, name: string, basePrice: number, multiplier: number) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.multiplier = multiplier;
    }

}

export default {
    data() {
        return {
            powerups: [
                new Powerup(1, "Cursor", 15, 1.15),
                new Powerup(2, "Script Kiddie", 100, 1.20),
                new Powerup(3, "Hobby coder", 1000, 1.25),
            ]
        };
    },
    computed: {

    }
}
</script>