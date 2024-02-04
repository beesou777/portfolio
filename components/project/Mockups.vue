<template>
    <div class="project-mockups flex flex-col lg:flex-row pb-32">
        <div class="project-mockups-phone">
            <img :src="`${project.mockups.phone}`" :alt="`${project.name} phone mockup`" />
        </div>
        <div class="project-mockups-tablet">
            <img :src="`${project.mockups.tablet}`" :alt="`${project.name} tablet mockup`" />
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
    width: 35%;
    z-index: 3;
    perspective: 225vw;
    align-self: start;
    margin-left: 8%;
    margin-bottom: -25%;
}
.project-mockups-tablet {
    width: 65%;
    z-index: 2;
    perspective: 225vw;
    align-self: end;
    margin-bottom: -2%;
}
.project-mockups-labtop {
    width: 120%;
    z-index: 1;
    perspective: 140vw;
    align-self: start;
}
.project-mockups-phone img {
    transform: rotate3d(2, 2, -1.5, 34deg);
}    
.project-mockups-tablet img{
    transform: rotate3d(1, -1, 1, 48deg);
}
.project-mockups-labtop img {
    transform: rotate3d(1, 1, -1, 29deg); 
}

@media (min-width: 1024px) {
    .project-mockups-phone {
        width: 15%;
        perspective: 225vw;
        align-self: end;
        margin: 0%;
        margin-right: -5%;
        order: 1;
    }
    .project-mockups-tablet {
        width: 30%;
        perspective: 225vw;
        align-self: end;
        margin: 0%;
        margin-left: -5%;
        order: 3;
    }
    .project-mockups-labtop {
        width: 80%;
        perspective: 140vw;
        align-self: end;
        padding-bottom: 8%;
        order: 2;
    }
    .project-mockups-phone img, .project-mockups-tablet img, .project-mockups-labtop img {
        transform: none;
    }    
}
</style>