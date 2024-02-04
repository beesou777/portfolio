<template>
    <div class="loader fixed w-full h-full z-40 bg-[#617079] flex flex-col justify-center items-center gap-6"
        :class="isActive && 'active'">
        <LoaderBubbles />
        <LoaderText />
    </div>
</template>

<script setup>
const isLoading = useIsLoading();
const isActive = ref(true);
const timerLoading = ref(); 
const timerActive = ref();
onMounted(() => {
    timerActive.value = setTimeout(() => {
        isActive.value = false;
        timerLoading.value = setTimeout(()=> {
            isLoading.value = false;
        }, 500);
    }, 2500);
});
onUnmounted(() => {
    clearTimeout(timerLoading);
    clearTimeout(timerActive);
});

const route = useRoute();
watch(route, value => {
    isLoading.value = true
}, { deep: true, immediate: true })
</script>

<style scoped>
.loader {
    height: 200vh;
    padding-top: 100vh;
    bottom: 0;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 1500ms cubic-bezier(.8, -.2, .2, 1);
}

.loader.active {
    transform: translateY(0) !important;
    opacity: 100%;
    transition: all 1500ms cubic-bezier(.8, -.2, .2, 1);
}
</style>