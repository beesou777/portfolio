<template>
    <div class="project-mockups flex flex-col lg:flex-row lg:justify-center pb-32">
        <div class="project-mockups-phone">
            <img :src="`${project.mockups.phone}`" :alt="`${project.name} phone mockup`" />
        </div>
        <div class="project-mockups-labtop">
            <img :src="`${project.mockups.labtop}`" :alt="`${project.name} labtop mockup`" />
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>

.project-mockups-phone {
    width: 60%;
    max-width: 300px;
    z-index: 3;
    perspective: 225vw;
    align-self: center;
}
.project-mockups-labtop {
    display: none;
    width: 120%;
    z-index: 1;
    perspective: 140vw;
    align-self: start;
}
.project-mockups-phone img {
    transform: rotate3d(1, -1, 1, 48deg);
}    
.project-mockups-labtop img {
    transform: rotate3d(1, 1, -1, 29deg); 
}

@media (min-width: 1024px) {
    .project-mockups-phone {
        width: 20%;
        perspective: 225vw;
        align-self: end;
        margin: 0%;
        margin-left: -10%;
        order: 2;
    }
    .project-mockups-labtop {
        display: block;
        width: 80%;
        perspective: 140vw;
        align-self: end;
        padding-bottom: 8%;
        order: 1;
    }
    .project-mockups-phone img, .project-mockups-labtop img {
        transform: none;
    }    
}
</style>