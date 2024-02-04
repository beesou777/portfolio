<template>
    <div ref="root" class="scroll-play-video">
        <slot />
    </div>
</template>

<script setup>
    const root = ref(null);
    const observer = ref(null);

    function inview(entries, observer) {
        entries.forEach((entry) => {
            const video = entry.target.querySelector('video');
            video.pause();
            if(entry.isIntersecting) {
                video.play();
                observer.unobserve(entry.target);
            } 
        });
    } 

    onMounted(()=> {
        observer.value = new IntersectionObserver(inview);
        observer.value.observe(root.value);
    })

</script>

<style scoped>
</style>