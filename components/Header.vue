<template>
    <div class="header absolute z-30 top-0 left-0 w-fit px-6 pt-3 pb-3 md:pb-6 bg-[#F5F5DC] bg-opacity-0">
        <NuxtLink to="/" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false"
            class="w-fit flex flex-col items-center origin-top-left md:scale-125 opacity-70 hover:opacity-100 hover:scale-125 md:hover:scale-[140%] transtion-all duration-500">
            <svg width="81" height="46" viewBox="0 0 81 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_21_32)">
                    <circle cx="23" cy="22" r="20" fill="#EFEBC4" />
                </g>
                <g filter="url(#filter1_d_21_32)">
                    <circle cx="23" cy="22" r="20" fill="#EFEBC4" />
                </g>
                <circle cx="32.4214" cy="26.4628" r="0.991736" fill="#828282" />
                <circle cx="21.8431" cy="26.4628" r="0.991736" fill="#828282" />
                <circle cx="8.75" cy="13.75" r="1.25" fill="white" />
                <path d="M23.1653 29.438C26.4711 31.5867 29.1708 30.3195 30.6033 29.438" stroke="#828282"
                    stroke-width="0.661157" stroke-linecap="round" />
                <path d="M17.5 5.5C13.9631 6.73953 12.4294 7.94272 10.5 11" stroke="white" stroke-width="1.5"
                    stroke-linecap="round" />
                <g filter="url(#filter2_d_21_32)">
                    <circle cx="58" cy="22" r="20" fill="#E4C6BF" />
                </g>
                <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(-1 0 0 1 75 12.5)" fill="white" />
                <path d="M64 5.5C67.7895 6.73953 69.4328 7.94272 71.5 11" stroke="white" stroke-width="1.5"
                    stroke-linecap="round" />
                <path d="M43.2893 27.1239C44.539 25.282 45.2664 25.4415 46.5951 27.1239" stroke="#828282"
                    stroke-width="0.661157" stroke-linecap="round" />
                <path d="M52.2148 27.1239C53.5895 25.282 54.3896 25.4415 55.8512 27.1239" stroke="#828282"
                    stroke-width="0.661157" stroke-linecap="round" />
                <path d="M45.9338 29.7686C49.2396 31.9173 51.9393 30.6501 53.3719 29.7686" stroke="#828282"
                    stroke-width="0.661157" stroke-linecap="round" />
                <path d="M55.8513 26.7934C56.217 26.624 56.3473 26.4672 56.5125 26.1322" stroke="#828282"
                    stroke-width="0.330579" stroke-linecap="round" />
                <path d="M55.1901 26.4628C55.5558 26.2934 55.6861 26.1366 55.8512 25.8016" stroke="#828282"
                    stroke-width="0.330579" stroke-linecap="round" />
                <path d="M43.2893 26.7934C42.9236 26.624 42.7933 26.4672 42.6281 26.1322" stroke="#828282"
                    stroke-width="0.330579" stroke-linecap="round" />
                <path d="M43.9504 26.4628C43.5847 26.2934 43.4544 26.1366 43.2893 25.8016" stroke="#828282"
                    stroke-width="0.330579" stroke-linecap="round" />
                <defs>
                    <filter id="filter0_d_21_32" x="0.355372" y="0.677686" width="45.2893" height="45.2893"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feMorphology radius="0.661157" operator="erode" in="SourceAlpha"
                            result="effect1_dropShadow_21_32" />
                        <feOffset dy="1.32231" />
                        <feGaussianBlur stdDeviation="1.65289" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix"
                            values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_32" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_32" result="shape" />
                    </filter>
                    <filter id="filter1_d_21_32" x="0.355372" y="0.677686" width="45.2893" height="45.2893"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feMorphology radius="0.661157" operator="erode" in="SourceAlpha"
                            result="effect1_dropShadow_21_32" />
                        <feOffset dy="1.32231" />
                        <feGaussianBlur stdDeviation="1.65289" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix"
                            values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_32" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_32" result="shape" />
                    </filter>
                    <filter id="filter2_d_21_32" x="35.3554" y="0.677686" width="45.2893" height="45.2893"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feMorphology radius="0.661157" operator="erode" in="SourceAlpha"
                            result="effect1_dropShadow_21_32" />
                        <feOffset dy="1.32231" />
                    <feGaussianBlur stdDeviation="1.65289" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                        values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_32" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_32" result="shape" />
                </filter>
            </defs>
            </svg>
    </NuxtLink>
</div></template>

<script setup>
    const cursorIsHovering = useCursorIsHovering();
</script>

<style scoped>
</style>