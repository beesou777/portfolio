<template>
    <div class="content-container h-full pt-[110px] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <HomeAnimation />
        <HomeContent />
    </div>
</template>

<script setup>
const loaderText = useLoaderText();
loaderText.value = 'Welcome';
</script>

<style scoped>

</style>