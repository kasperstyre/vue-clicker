<template>
    <div class="md-layout-item clicker-container">
        <h3>{{ cookies }} cookies</h3>
        <h4>{{ totalCps }} cookies per second</h4>
        <img @click="vueClicked" src="@/assets/images/logo.png" alt="VUE logo">
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Clicker extends Vue {
    loopFrequencyMS: number = 1000;

    get cookies(): number {
        return this.$store.getters.cookies;
    }

    get totalCps(): number {
        return this.$store.getters.totalCps;
    }

    vueClicked() {
        this.$store.commit('addCookie');
    }

    created() {
        setInterval(() => {
            this.$store.commit('addPowerupCookies');
        }, this.loopFrequencyMS);
    }
}
</script>