<template>
    <div ref="root" class="observer w-full">
        <slot />
    </div>
</template>

<script setup>
const root = ref(null);
const observer = ref(null);
const {opacityFrom, opacityTo, rotateFrom, rotateTo, translateXpc, translateYpc, scaleFrom, scaleTo, step } = defineProps({ 
    opacityFrom: {
        type: Number,
        default: 1
    },
    opacityTo: {
        type: Number,
        default: 1
    },   
    rotateFrom: {
        type: Number,
        default: 0
    }, 
    rotateTo: {
        type: Number,
        default: 0
    }, 
    translateXpc: {
        type: Number,
        default: 0
    }, 
    translateYpc: {
        type: Number,
        default: 0
    }, 
    scaleFrom: {
        type: Number,
        default: 1
    }, 
    scaleTo: {
        type: Number,
        default: 1
    },
    step: {
        type: Number,
        default: 500
    }
});

function createThrehold() {
    const threshold = [];
    for(let i = 0; i <= step; i++) {
        threshold.push(i / step);
    }
    return threshold;
}

function observe(entries) {
    entries.forEach((entry) => {
        const targets = entry.target.querySelectorAll('.target');
        if(entry.isIntersecting) {
            const opacity = ( opacityTo - opacityFrom ) * entry.intersectionRatio + opacityFrom;
            [...targets].forEach((target)=> {
                target.style.opacity = opacity;
            })

            const rotate = entry.boundingClientRect.y < 0 ? ( rotateTo - rotateFrom ) * entry.intersectionRatio + rotateFrom : rotateTo;
            const trans_x = ( entry.boundingClientRect.y < 0 ? 1 : -1 ) * ( translateXpc  * (1 - entry.intersectionRatio) );
            const trans_y = ( entry.boundingClientRect.y < 0 ? 1 : -1 ) * ( translateYpc  * (1 - entry.intersectionRatio) );
            const scale = ( scaleTo - scaleFrom ) * entry.intersectionRatio + scaleFrom;
            [...targets].forEach((target)=> {
                target.style.transform = `rotate(${rotate}deg) translateX(${trans_x}%) translateY(${trans_y}%) scale(${scale})`;
            });
        }
        else {
            [...targets].forEach((target)=> {
                target.style.opacity = opacityTo;
                target.style.transform = `rotate(${rotateTo}deg) translateX(${0}%) translateY(${0}%) scale(${scaleTo})` 
            });
        }
    });
}

onMounted(()=> {

    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: createThrehold(),
    }
    observer.value = new IntersectionObserver(observe, options);
    observer.value.observe(root.value);
});
</script>

<style scoped>

</style>