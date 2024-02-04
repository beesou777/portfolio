<template>
    <ScrollToggle class="project-header mb-14 lg:mb-20">
        <h1 class="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-8 text-highlight uppercase !leading-none">{{ project.name }}</h1>
        <h2 class="text-lg sm:text-2xl md:text-3xl mb-4 !leading-none">{{ project.description }}</h2>
        <h2 class="text-lg sm:text-2xl md:text-3xl !leading-none">{{ project.role }}</h2>
    </ScrollToggle>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-header h1, .project-header h2 {
    opacity: 0; 
    transform: translateY(25%); 
    transition: all 500ms linear 200ms;
}
.project-header h2 {
    transition-delay: 700ms;
}
.project-header.inview h1, .project-header.inview h2 {
    opacity: 1; 
    transform: translateY(0%); 
}
</style>