<template>
    <div class="project-prototype-copntainer w-[95%] max-w-[1400px] mx-auto mb-10">
        <ScrollToggle class="project-prototype-intro text-5xl border-t-2 border-[#b9a859] py-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl mb-4">Interactive Prototype</h2> 
            <p class="text-base sm:text-lg md:text-xl !leading-relaxed mb-4">
                Interact with the Figma prototype below to get started...
            </p>
        </ScrollToggle>
        <ScrollToggle @mouseenter="cursorIsHidden = true" @mouseleave="cursorIsHidden = false"
            class="project-prototype w-[55%] max-w-[400px] aspect-phone mx-auto bg-[#DEECF3]">
                <iframe :src="`${project.prototype}`" class="w-full h-full mx-auto border-none outline-none" />
        </ScrollToggle>
    </div>

</template>

<script setup>
const cursorIsHidden = useCursorIsHidden();
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-prototype-intro {
    opacity: 0;
    transform: translateY(20%);
    transition: all 700ms 300ms;
}
.project-prototype-intro.inview {
    opacity: 1;
    transform: translateY(0%);
}
.project-prototype {
    opacity: 0;
    transform: scale(0.8);
    transition: all 700ms 300ms;
}

.project-prototype.inview {
    opacity: 1;
    transform: scale(1);
}
</style>