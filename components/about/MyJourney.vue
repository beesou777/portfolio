<template>
    <div class="my-journey flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center mb-8 md:mb-20">
        <ScrollParallax :opacityFrom="0.3" :opacityTo="1" class="my-journey-image w-[70%] max-w-[300px] md:order-2">
            <img src="/images/photos/graduation.jpg" alt="graduation" class="target">
        </ScrollParallax>
        <div class="my-journey-text flex-grow w-[90%] md:order-1">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-6">My Journey</h2>
            <p class="text-base sm:text-lg lg:text-xl !leading-relaxed mb-5">
                Formerly, I worked as a <span class="text-highlight font-bold">structural engineer</span> for 2 years in Hong Kong
                after completing my <span class="text-highlight font-bold">bachelor's degree</span> at City University of Hong Kong.
                With my interest in programming, in 2021, I decided to pursue a
                <span class="text-highlight font-bold">Post-Degree Diploma</span> in Information and Communication
                Technology at Douglas College in Canada.
            </p>
            <p class="text-base sm:text-lg lg:text-xl !leading-relaxed mb-5">
                After graduation, I planned on pursuing a <span class="text-highlight font-bold">web development career</span>.
                To achieve my goal, I continued to <span class="text-highlight font-bold">learn online</span> at home.
                With the help of online resources, I have gained more <span class="text-highlight font-bold">advanced knowledge</span> of web development by watching tons of YouTube videos and browsing numerous tutorials.
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.my-journey-image {
    box-shadow: -15px 15px 0px #A2C5C0;
}
</style>