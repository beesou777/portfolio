<template>
    <div class="home-content flex-shrink-0 flex-grow pb-20 lg:pb-0 lg:pl-10">
        <h1 class="home-content-intro-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize mb-3 md:mb-5">I'm <span class="text-highlight text-teal-500">Bishwa</span>,</h1>
        <h2 class="home-content-intro-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize mb-1 md:mb-3">a full stack</h2>
        <h2 class="home-content-intro-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize mb-10 md:mb-14 lg:mb-20"><span class="text-highlight text-teal-500">web developer</span>.</h2>
        <NuxtLink to="/projects" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="home-content-projects-button button text-xl md:text-2xl lg:text-3xl font-serif py-3 px-6 group bg-[#14b8a6]" id="home-content-projects-button">
            View My Projects&nbsp;
            <span class="with-hover">
                <Icon class="inline group-hover:hidden" name="mingcute:eye-close-fill" color="white" size="1.25em"/> 
                <Icon class="!hidden group-hover:!inline" name="mingcute:eye-2-fill" color="white" size="1.25em"/> 
            </span>
            <span class="without-hover">
                <Icon name="mingcute:eye-2-fill" color="white" size="28"/> 
            </span>
        </NuxtLink>
    </div>
</template>

<script setup>
const cursorIsHovering = useCursorIsHovering();
</script>

<style scoped>
    .home-content > h1,.home-content > h2{
        opacity: 0;
        transform: translateY(50%);
        animation: fadeUp 300ms linear forwards 3800ms;
    }
    .home-content-projects-button {
        visibility: hidden;
        opacity: 0;
        transform: translateY(0%);
        animation: fadeButton 300ms linear forwards 5000ms, moveButton 300ms linear 5000ms;
    }
    .home-content-intro-1 {
        animation-delay: 3800ms !important;
    }
    .home-content-intro-2 {
        animation-delay: 4200ms !important;
    }
    .home-content-intro-3 {
        animation-delay: 4500ms !important;
    }
    .without-hover {
            display: none;
    }   

    @media(hover: none) {
        .with-hover {
            display: none;
        }
    
        .without-hover {
            display: inline-block;
        }
    }

    @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(50%)  }
        100% { opacity: 1; transform: translateY(0%) }
    }
    /** Seperate fade button and move button to make transition (transform) on hover work  */
    @keyframes fadeButton {
        0% { visibility: hidden; opacity: 0;  }
        100% { visibility: visible; opacity: 0.8; }
    }
    @keyframes moveButton {
        0% { transform: translateY(50%) }
        100% { transform: translateY(0%) }
    }
</style>