<template>
    <ScrollToggle class="section-nav flex justify-center md:justify-end my-5">
        <NuxtLink :to="`/${path}`" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="hover:scale-105 transition-all duration-500 text-[#8c8270]">
            <h2 class="text-3xl sm:text-5xl lg:text-6xl uppercase flex items-center gap-2">
                {{ path }}
                <span class="section-next-icon inline-block transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3">
                    <Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
                </span>
            </h2>
        </NuxtLink>
    </ScrollToggle>
</template>

<script setup>
const cursorIsHovering = useCursorIsHovering();
const { path } = defineProps(['path']);
</script>

<style scoped>
.section-nav {
    opacity: 0;
    transition: opacity 500ms linear 300ms;
}

.section-nav.inview {
    opacity: 1 ;
}

.section-next-icon {
    animation: nextIcon 1000ms infinite ease-in-out;
}

@keyframes nextIcon {
    0% { transform: translateX(0rem) }
    50% { transform: translateX(0.5rem) }
    100% { transform: translateX(0rem) }
}</style>