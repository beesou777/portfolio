<template>
    <ScrollToggle class="project-detail w-full max-w-[1200px] aspect-video shadow-lg overflow-hidden" :class="index % 2 != 0 ? `self-start` : `self-end`">
        <img :src="`${images.front}`" :alt="`${projectName} labtop detail ${index+1} front`" class="front-image"/>
        <img :src="`${images.back}`" :alt="`${projectName} labtop detail ${index+1} back`" class="back-image"/>
    </ScrollToggle>
</template>

<script setup>
const { images, index, projectName } = defineProps(['images', 'index', 'projectName']);
</script>

<style>
.project-detail {
    position: relative;
    opacity: 0;
    transform: translateY(20%);
    transition: all 700ms 300ms;
}

.project-detail.inview {
    opacity: 1;
    transform: translateY(0%);
}

.front-image, .back-image {
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    transition: 300ms;
}

.front-image {
    opacity: 1;
    transform: translateX(0) scaleX(1); 
    filter: none;
}
.back-image {
    opacity: 0;
    transform: translateX(-50%) scaleX(2); 
    filter: blur(20px);
}

/* @media (hover: hover) { */
.project-detail:hover .front-image {
    opacity: 0;
    transform: translateX(50%) scaleX(2); 
    filter: blur(20px);
}
.project-detail:hover .back-image {
    opacity: 1;
    transform: translateX(0) scaleX(1); 
    filter: none;
}
/* } */

/* @media (hover: none) {
    .project-detail:active .front-image {
        opacity: 0;
        transform: translateX(50%) scaleX(2); 
        filter: blur(20px);
    }
    .project-detail:active .back-image {
        opacity: 1;
        transform: translateX(0) scaleX(1); 
        filter: none;
    }
} */

</style>