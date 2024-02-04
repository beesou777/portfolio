<template>
    <div class="content-container" :class="isLoading && 'h-0 overflow-hidden'" ref="container">
        <div class="contact w-[90%] mx-auto">
            <SectionHeader heading="Contact" :canScroll="canScroll" />
            <div class="contact-container max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-5 pb-5 lg:pb-10 overflow-hidden">
                <ContactIntro />
                <ContactActions />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Contact | bishwa shah Portfolio",
    meta: [
        { name: "description", content: "Feel free to contact Bishwa on social media or by email." },
        { property: "og:title", content: "Contact | BIshwa's Portfolio" },
        { property: "og:description", content: "Feel free to contact bishwa shah on social media or by email." },
    ]
});
const isLoading = useIsLoading();
const loaderText = useLoaderText();
loaderText.value = 'Contact';

const canScroll = ref(true);
const container = ref(null);

onMounted(()=> {
    canScroll.value = container.value.scrollHeight > document.body.clientHeight;
})
</script>

<style scoped>
.bubble-left {
    opacity: 0; 
    transform: translateX(-50%);
}
.bubble-right {
    opacity: 0; 
    transform: translateX(50%);
}

.contact-left h3, .contact-left p, .contact-right {
    opacity: 0; 
    transform: translateY(50%);
}


.contact-left.inview .bubble-left, 
.contact-left.inview .bubble-right, 
.contact-left.inview h3, 
.contact-left.inview p,
.contact-right.inview {
    opacity: 1; 
    transform: translateX(0%) translateY(0%);
    transition: all 500ms 500ms; 
} 

.contact-left.inview h3, .contact-left.inview p {
    transition-delay: 800ms; 
}

</style>