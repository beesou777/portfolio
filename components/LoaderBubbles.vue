<template>
        <div class="loader-bubbles flex">
            <svg class="yellow-bubble -mx-3" width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_50)">
                <circle cx="46" cy="43" r="40" fill="#ECE7B7"/>
                </g>
                <circle cx="64.843" cy="51.9256" r="1.98347" fill="#828282"/>
                <circle cx="43.686" cy="51.9256" r="1.98347" fill="#828282"/>
                <circle cx="17.5" cy="26.5" r="2.5" fill="white"/>
                <path d="M46.3306 57.876C52.9422 62.1736 58.3416 59.6391 61.2066 57.876" stroke="#828282" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M35 10C27.9262 12.4791 24.8588 14.8854 21 21" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <defs>
                <filter id="filter0_d_1_50" x="0.710744" y="0.355372" width="90.5785" height="90.5785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_50"/>
                <feOffset dy="2.64463"/>
                <feGaussianBlur stdDeviation="3.30579"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.604167 0 0 0 0 0.441337 0 0 0 0 0.0226563 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_50"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_50" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg class="pink-bubble -mx-3" width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_6_10)">
                <circle cx="46" cy="43" r="40" fill="#E4C6BF"/>
                </g>
                <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 80 24)" fill="white"/>
                <path d="M58 10C65.5791 12.4791 68.8656 14.8854 73 21" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <path d="M16.5785 53.2479C19.0779 49.564 20.5326 49.8831 23.1901 53.2479" stroke="#828282" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M34.4298 53.2479C37.1792 49.564 38.7794 49.8831 41.7025 53.2479" stroke="#828282" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M21.8678 58.5372C28.4794 62.8347 33.8788 60.3003 36.7438 58.5372" stroke="#828282" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M41.7025 52.5868C42.4339 52.248 42.6945 51.9344 43.0248 51.2645" stroke="#828282" stroke-width="0.661157" stroke-linecap="round"/>
                <path d="M40.3801 51.9256C41.1115 51.5868 41.3721 51.2733 41.7024 50.6033" stroke="#828282" stroke-width="0.661157" stroke-linecap="round"/>
                <path d="M16.5785 52.5868C15.8471 52.248 15.5865 51.9344 15.2562 51.2645" stroke="#828282" stroke-width="0.661157" stroke-linecap="round"/>
                <path d="M17.9009 51.9256C17.1695 51.5868 16.9089 51.2733 16.5786 50.6033" stroke="#828282" stroke-width="0.661157" stroke-linecap="round"/>
                <defs>
                <filter id="filter0_d_6_10" x="0.710744" y="0.355372" width="90.5785" height="90.5785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_6_10"/>
                <feOffset dy="2.64463"/>
                <feGaussianBlur stdDeviation="3.30579"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_10"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_10" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
</template>

<script setup>

</script>

<style scoped>
.yellow-bubble, .pink-bubble {
    animation: bounce 2000ms cubic-bezier(0.280, 0.840, 0.420, 1), appear 1200ms;
}
.pink-bubble
{
    animation-delay: 200ms;
}

@keyframes appear {
    from { opacity: 0%; } 
    to { opacity: 100%; } 
}

@keyframes bounce {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-70px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
}

</style>