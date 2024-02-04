<template>
  <div
    class="my-hobbies flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center mb-8 md:mb-32"
  >
    <ScrollParallax
      :opacityFrom="0.3"
      :opacityTo="1"
      class="my-hobbies-image w-[80%] max-w-[400px] md:order-2"
    >
      <img src="/images/photos/nature.jpeg" alt="nature" class="target" />
    </ScrollParallax>
    <div class="my-hobbies-text flex-grow w-[90%] md:order-1">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-6">
        Apart From Coding...
      </h2>
      <p class="text-base sm:text-lg lg:text-xl !leading-relaxed mb-5">
        I am passionate of watching<span class="text-highlight font-bold">
          anime</span
        >. When I have free time, I usually read
        <span class="text-highlight font-bold"> articles</span> and
        <span class="text-highlight font-bold"> blogs</span>.I adore embarking
        on <span class="text-highlight font-bold"> adventures</span> to new
        places, immersing myself in the wonders of
        <span class="text-highlight font-bold"> nature's beauty</span>. 🌍✨
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.my-hobbies-image {
  box-shadow: -15px 15px 0px #e4c6bf;
}
</style>