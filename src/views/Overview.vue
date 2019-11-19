<template>
    <div class="md-layout">
        <clicker />
        <powerup-list />
    </div>
</template>
<style lang="scss" scoped>
    @import "vue-material/dist/theme/engine";
    
</style>
<script lang="ts">
import '@/styles/overview.scss';

import Clicker from '@/components/Clicker.vue';
import PowerupList from '@/components/PowerupList.vue';

export default {
    components: {
        Clicker,
        PowerupList
    }
}
</script>