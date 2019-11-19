<template>
    <div class="md-layout-item md-medium-size-33 md-small-size-100 clicker-container">
        <h3>{{ $store.getters.cookies }} cookies</h3>
        <img @click="vueClicked" src="@/assets/images/logo.png" alt="VUE logo">
    </div>
</template>
<script lang="ts">
export default {
    methods: {
        vueClicked() {
            this.$store.commit('addCookie');
        }
    }
}
</script>