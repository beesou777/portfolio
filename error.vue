<template>
    <div class="w-full h-screen flex flex-col justify-end overflow-hidden">
        <Cursor />
        <div class="w-full min-h-screen max-h-screen overflow-hidden relative">
            <Header />
            <div class="scroll-container w-full h-full overflow-auto absolute top-0 left-0 flex flex-col justify-center items-center" 
                :class="isOpenMenu ? 'overflow-hidden' : 'overflow-auto'">
                <div class="w-[90%] max-w-[300px] text-center">
                    <svg class="mx-auto" width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_336_1708)">
                        <circle cx="46" cy="43" r="40" fill="#ACA393"/>
                        </g>
                        <g filter="url(#filter1_d_336_1708)">
                        <circle cx="46" cy="43" r="40" fill="#E4C6BF"/>
                        </g>
                        <circle cx="56.1405" cy="50.9835" r="1.98347" fill="#626262"/>
                        <circle cx="34.9835" cy="50.9835" r="1.98347" fill="#626262"/>
                        <circle cx="34.9835" cy="50.9835" r="1.98347" fill="#626262"/>
                        <circle cx="17.5" cy="26.5" r="2.5" fill="white"/>
                        <path d="M37.6281 59.2986C44.2396 55.0011 49.6391 57.5356 52.5041 59.2986" stroke="#626262" stroke-width="1.32231" stroke-linecap="round"/>
                        <path d="M35 10C27.9262 12.4791 24.8588 14.8854 21 21" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        <defs>
                        <filter id="filter0_d_336_1708" x="0.710744" y="0.355372" width="90.5785" height="90.5785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_336_1708"/>
                        <feOffset dy="2.64463"/>
                        <feGaussianBlur stdDeviation="3.30579"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_1708"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_1708" result="shape"/>
                        </filter>
                        <filter id="filter1_d_336_1708" x="0.710744" y="0.355372" width="90.5785" height="90.5785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_336_1708"/>
                        <feOffset dy="2.64463"/>
                        <feGaussianBlur stdDeviation="3.30579"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_1708"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_1708" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    <h2 class="text-7xl mt-4 mb-7">{{ error.statusCode }}</h2>
                    <p class="mb-7 text-lg text-ellipsis overflow-hidden">{{ error.message }}</p>
                    <button class="button text-lg md:text-xl lg:text-2xl font-serif py-3 px-6" @click="handleClearError">
                        Home
                        <Icon class="inline group-hover:hidden" name="ic:round-home" size="1.25em" color="white"/> 
                    </button>
                </div>
            </div>
        </div>
        <Menu />
        <MenuToggle />
    </div>
</template>

<script setup>
defineProps(['error']);
const handleClearError = () => clearError({redirect: '/'});
const isOpenMenu = useIsOpenMenu();
</script>

<style lang="scss" scoped>

</style>