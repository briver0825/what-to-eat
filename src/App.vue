<script setup lang="ts">
import { reactive } from 'vue';

const themeVars = reactive({
});
</script>

<template>
    <van-config-provider :theme-vars="themeVars">
        <router-view></router-view>
    </van-config-provider>
</template>
