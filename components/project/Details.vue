<template>
    <div class="project-details w-[95%] max-w-[1400px] mx-auto mb-16 md:mb-32">
        <ScrollToggle class="project-details-intro text-5xl border-t-2 border-[#b9a859] py-4 mb-10">
            <h2 class="text-2xl sm:text-3xl md:text-4xl mb-4">Details</h2> 
            <p class="text-base sm:text-lg md:text-xl !leading-relaxed">
                Hover <Icon name="fluent:cursor-hover-16-filled" size="1.5em" color="#aba8a2"/> or touch <Icon name="material-symbols:touch-app-rounded" size="1.5em" color="#aba8a2"/> the images to explore...
            </p>
        </ScrollToggle>
        <div class="project-details-labtop flex flex-col gap-10 mb-10 md:gap-20 md:mb-20">
            <ProjectDetailLabtop v-for="(images, index) in project.details.labtop" :images="images" :index="index" :projectName="project.name" />
        </div>
        <div class="project-details-phone max-w-[1200px] mx-auto flex justify-between gap-5">
            <ProjectDetailPhone v-for="(images, index) in project.details.phone" :images="images" :index="index" :projectName="project.name"/>
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-details-intro {
    opacity: 0;
    transform: translateY(20%);
    transition: all 700ms 300ms;
}
.project-details-intro.inview {
    opacity: 1;
    transform: translateY(0%);
}

</style>