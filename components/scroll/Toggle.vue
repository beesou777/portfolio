<template>
    <div ref="root" class="scroll-toggle">
        <slot />
    </div>
</template>

<script setup>
    const root = ref(null);
    const observer = ref(null);

    const { repeat } = defineProps({
        repeat: {
            type: Boolean,
            default: false
        }
    });

    function inview(entries, observer) {
        entries.forEach((entry) => {
            if(repeat) {
                entry.target.classList.toggle('inview', entry.isIntersecting);
            }
            else if(entry.isIntersecting) {
                entry.target.classList.add('inview');
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