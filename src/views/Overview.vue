<template>
    <div class="md-layout overview-container">
        <clicker />
        <powerup-list />
    </div>
</template>
<style lang="scss" scoped>
    @import "vue-material/dist/theme/engine";
    
</style>
<script lang="ts">
import Clicker from '@/components/Clicker.vue';
import PowerupList from '@/components/PowerupList.vue';

export default {
    components: {
        Clicker,
        PowerupList
    }
}
</script>