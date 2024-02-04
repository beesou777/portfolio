<template>
    <ScrollToggle class="project-info w-[95%] max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 md:gap-14 mb-14">
        <div class="project-overview flex-1 basis-7/12 border-t-2 border-[#b9a859] py-4 md:order-2">
            <h2 class="text-2xl sm:text-3xl md:text-4xl mb-4">Overview</h2> 
            <p class="sm:text-lg md:text-xl !leading-relaxed">{{ project.overview }}</p>
        </div>       
        <div class="flex-1 basis-5/12 md:order-1">
            <div class="project-links border-t-2 border-[#b9a859] py-4 mb-4">
                <h2 class="text-2xl sm:text-3xl md:text-4xl mb-4">Links</h2> 
                <div class="flex flex-wrap gap-5 sm:text-lg md:text-xl">
                    <a v-if="project.links.live" :href="`${project.links.live}`" class="project-link" target="_blank">Live Website</a>
                    <a v-if="project.links.repo" :href="`${project.links.repo}`" class="project-link" target="_blank">GitHub Repo</a>
                    <a v-if="project.links.project" :href="`${project.links.project}`" class="project-link" target="_blank">Figma Project File</a>
                    <a v-if="project.links.prototype" :href="`${project.links.prototype}`" class="project-link" target="_blank">Figma Prototype</a>
                </div>
            </div>
            <div class="project-technologies border-t-2 border-[#b9a859] py-4">
                <h2 class="text-2xl sm:text-3xl md:text-4xl mb-4">Techologies</h2> 
                <div class="flex flex-wrap gap-3 text-[#a7a49f] text-sm sm:text-base md:text-lg">
                    <div v-for="technology in project.technologies" class="bg-white rounded-lg px-2">{{ technology }}</div>
                </div>
            </div>
        </div> 
    </ScrollToggle>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-info {
    opacity: 0;
    transform: translateY(10%);
    transition: all 700ms 300ms;
}
.project-info.inview {
    opacity: 1;
    transform: translateY(0%);
}

.project-link {
    opacity: 0.7;
    position: relative;
    transition: all 300ms;
}
.project-link::after {
    content: " ";
    position: absolute;
    height: 1px;
    width: 0%;
    bottom: 0;
    left: 0;
    background: #63605b;
    opacity: 0.7;
    transition: all 300ms;
}
.project-link:hover {
    opacity: 1;
}
.project-link:hover::after {
    width: 100%;
    opacity: 1;  
}
</style>