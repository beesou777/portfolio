<template>
    <ScrollToggle class="project-video max-w-[1200px] mx-auto mb-20">
        <ScrollPlayVideo class="shadow-lg">
            <video autoplay muted loop playsinline class="w-full">
                <source :src="`${project.video}`" type="video/mp4">
            </video>
        </ScrollPlayVideo>
    </ScrollToggle>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-video {
    opacity: 0;
    transform: scale(0.8);
    transition: all 700ms 300ms;
}
.project-video.inview {
    opacity: 1;
    transform: scale(1);
}
</style>