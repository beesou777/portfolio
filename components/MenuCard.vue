<template>
    <NuxtLink 
        :to="path === 'home' ? '/': `/${path}`" 
        @click="isOpenMenu = !isOpenMenu" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false"
        class="menu-card flex-shrink-0 scale-95 opacity-80 hover:scale-100 hover:opacity-100 transition-all">
        <div>
            <p class="font-serif text-base md:text-lg tracking-widest uppercase mb-2 text-white">{{ path }}</p>
            <img class="w-[400px] aspect-video object-cover hidden md:block" :src="`/images/menu/${path}-labtop.png`"
                :alt="`thumbnail for ${path}`">
            <img class="w-[135px] h-[240px] object-cover block md:hidden" :src="`/images/menu/${path}-phone.png`"
                :alt="`thumbnail for ${path}`">
        </div>
    </NuxtLink>
</template>

<script setup>
    const cursorIsHovering = useCursorIsHovering();
    const { path } = defineProps(['path']);
</script>

<style scoped>
.router-link-active {
    opacity: 100%;
}
</style>