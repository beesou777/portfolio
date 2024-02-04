<template>
    <ScrollParallax :rotateFrom="0" :rotateTo="360" class="section-header pt-[90px] pb-10 md:pb-20 flex items-center justify-between gap-2 overflow-hidden">
        <ScrollToggle class="section-header-heading text-3xl sm:text-5xl lg:text-6xl font-serif uppercase border-l-8 md:border-l-[12px] pl-4 sm:pl-8 md:pl-10 border-[#bdb041] flex-shrink-0">
            <span v-for="(letter, idx) in heading.split('')" class="letter" :style="`transition-delay: ${idx * 50 }ms`">
                {{letter}}
            </span>
        </ScrollToggle>
        <svg v-show="canScroll" class="section-header-scroll-indicator target font-serif text-[24px] w-[100px] sm:w-[150px] md:w-[200px] flex-shrink-0 px-2 md:px-8"
            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve">
            <defs>
                <path id="circlePath2" d="M 100, 100 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0 " />
            </defs>
            <g>
                <use xlink:href="#circlePath2" fill="none" />
                <text fill="rgb(99,96,91)">
                    <textPath xlink:href="#circlePath2"> ✦ SCROLL TO EXPLORE ✦ SCROLL TO EXPLORE</textPath>
                </text>
            </g>
            <g filter="url(#filter0_d_122_36)">
                <circle cx="100" cy="100" r="40" fill="#EDE8BF" />
            </g>
            <circle cx="110.141" cy="107.983" r="1.98347" fill="#626262" />
            <circle cx="88.9835" cy="107.983" r="1.98347" fill="#626262" />
            <circle cx="88.9835" cy="107.983" r="1.98347" fill="#626262" />
            <circle cx="71.5" cy="83.5" r="2.5" fill="white" />
            <path d="M91.6279 113.934C98.2395 118.231 103.639 115.697 106.504 113.934" stroke="#626262"
                stroke-width="1.32231" stroke-linecap="round" />
            <path d="M89 67C81.9262 69.4791 78.8588 71.8854 75 78" stroke="white" stroke-width="3"
                stroke-linecap="round" />
            <defs>
                <filter id="filter0_d_122_36" x="54.7107" y="57.3554" width="90.5785" height="90.5785"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feMorphology radius="1.32231" operator="erode" in="SourceAlpha"
                        result="effect1_dropShadow_122_36" />
                    <feOffset dy="2.64463" />
                    <feGaussianBlur stdDeviation="3.30579" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                        values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_36" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_36" result="shape" />
                </filter>
            </defs>
        </svg>
    </ScrollParallax>
</template>

<script setup>
const { heading, canScroll } = defineProps(['heading', 'canScroll']);
</script>

<style scoped>
.section-header-heading > .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px) translateZ(0px) rotateX(-90deg) rotateZ(20deg);
    transition: 400ms linear;
}

.section-header-heading.inview > .letter {
    opacity: 1;
    transform: translateY(0px) translateZ(0px) rotateX(-0deg) rotateZ(0deg);
}
</style>