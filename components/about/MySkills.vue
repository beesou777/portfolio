<template>
    <div class="my-skills flex flex-col md:flex-row gap-2 md:gap-10 justify-center items-center mb-14 md:mb-20">
        <div class="my-skills-text flex-grow w-[90%] md:order-2">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-6">My Skills</h2>
            <p class="text-base sm:text-lg lg:text-xl !leading-relaxed mb-5">
                Throughout my 1.5 years of learning at school and home,
                I have acquired <span class="text-highlight font-bold">various skills</span> in both <span
                    class="text-highlight font-bold">frontend</span> and <span
                    class="text-highlight font-bold">backend</span> development.
                I wish to <span class="text-highlight font-bold">deepen my understanding</span> from my <span
                    class="text-highlight font-bold">future working experiences</span>.
            </p>

        </div>
        <div class="my-skills-list flex-grow w-[90%] target">
            <div class="mb-4">
                <p class="text-lg mb-2 uppercase text-highlight">Frontend Development</p>
                <div v-for="(arr, propertyName, index) in data.skills.frontend" class="flex gap-2 mb-2">
                    <span class="capitalize">{{ propertyName }}:</span>
                    <div class="flex flex-wrap gap-1">
                        <div v-for="(item, subIndex) in arr" class="text-xs md:text-sm py-1 px-2 rounded-full"
                            :class="(index % 2 == 0 && subIndex % 2 == 0) || (index % 2 != 0 && subIndex % 2 != 0) ? `bg-[#E4C6BF]` : `bg-[#A2C5C0]`">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-lg mb-2 uppercase text-highlight">Backend Development</p>
                <div v-for="(arr, propertyName, index) in data.skills.backend" class="flex gap-2 mb-2">
                    <span class="capitalize">{{ propertyName }}:</span>
                    <div class="flex flex-wrap gap-1">
                        <div v-for="(item, subIndex) in arr" class="text-xs md:text-sm py-1 px-2 rounded-full"
                            :class="(index % 2 == 0 && subIndex % 2 == 0) || (index % 2 != 0 && subIndex % 2 != 0) ? `bg-[#E4C6BF]` : `bg-[#A2C5C0]`">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from '~/assets/data.json';
</script>

<style scoped>
</style>