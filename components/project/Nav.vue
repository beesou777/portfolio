<template>
    <ScrollToggle class="project-nav flex justify-between my-5">
        <NuxtLink v-if="prevPath" :to="`/${prevPath}`" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="hover:scale-105 transition-all duration-500 text-[#8c8270] mx-auto md:mx-0">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl uppercase flex items-center gap-2">
                <span class="project-prev-icon inline-block transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3">
                    <Icon name="material-symbols:keyboard-double-arrow-left" size="1.5em" />
                </span>
                Prev <span class="hidden lg:inline-block">Project</span>
            </h2>
        </NuxtLink>
        <div v-else class="hidden md:block"></div>
        <NuxtLink v-if="nextPath" :to="`/${nextPath}`" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="hover:scale-105 transition-all duration-500 text-[#8c8270] mx-auto md:mx-0">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl uppercase flex items-center gap-2">
                Next <span class="hidden lg:inline-block">Project</span>
                <span class="project-next-icon inline-block transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3">
                    <Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
                </span>
            </h2>
        </NuxtLink>
        <NuxtLink v-else to="/about" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="hover:scale-105 transition-all duration-500 text-[#8c8270] mx-auto md:mx-0">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl uppercase flex items-center gap-2">
                About
                <span class="project-next-icon inline-block transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3">
                    <Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
                </span>
            </h2>
        </NuxtLink>
    </ScrollToggle>
</template>

<script setup>
const cursorIsHovering = useCursorIsHovering();
const { prevPath, nextPath } = defineProps(['prevPath', 'nextPath']);
</script>

<style scoped>
.project-nav {
    opacity: 0;
    transition: opacity 500ms linear 300ms;
}

.project-nav.inview {
    opacity: 1 ;
}

.project-next-icon {
    animation: nextIcon 1000ms infinite ease-in-out 500ms;
}

.project-prev-icon {
    animation: nextIcon 1000ms infinite ease-in-out;
}

@keyframes nextIcon {
    0% { transform: translateX(0rem) }
    50% { transform: translateX(0.5rem) }
    100% { transform: translateX(0rem) }
}

@keyframes prevIcon {
    0% { transform: translateX(0rem) }
    50% { transform: translateX(-0.5rem) }
    100% { transform: translateX(0rem) }
}

</style>