<template>
    <div class="w-full h-full flex flex-col justify-end overflow-hidden">
        <Cursor />
        <Loader :key="$route"/>
        <div class="w-full min-h-full max-h-full overflow-hidden relative">
            <Header />
            <div class="scroll-container w-full h-full overflow-auto absolute top-0 left-0" :class="isOpenMenu ? 'overflow-hidden' : 'overflow-auto'">
                <slot  />
            </div>
        </div>
        <Menu />
        <MenuToggle />
    </div>
</template>

<script setup>
    const isOpenMenu = useIsOpenMenu();
</script>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}
</style>