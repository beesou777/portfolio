<template>
    <ScrollToggle class="contact-actions flex-1 flex flex-col items-center">
        <p class="text-base sm:text-lg lg:text-xl mb-5">- Social media -</p>
        <div class="social-media flex gap-5 mb-10">
            <NuxtLink to="https://www.linkedin.com/in/bishwa777/"
                @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
                class="transition-all opacity-70 hover:opacity-100 hover:scale-110">
                <div class="bg-[#14b8a6] h-10 w-10 rounded-full shadow-md flex bg-teal-500 flex-col justify-center items-center">
                    <Icon name="uim:linkedin-alt" size="25" color="white" />
                </div>
            </NuxtLink>
            <NuxtLink to="https://github.com/beesou777" 
                @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
                class="transition-all opacity-70 hover:opacity-100 hover:scale-110">
                <div class="bg-white h-10 w-10 rounded-full shadow-md flex flex-col justify-end items-center">
                    <Icon name="bi:github" size="45" color="#14b8a6" />
                </div>
            </NuxtLink>
            <NuxtLink to="https://www.facebook.com/profile.php?id=100089079516208"
                @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
                class="transition-all opacity-70 hover:opacity-100 hover:scale-110 ">
                <div class="bg-white h-10 w-10 rounded-full shadow-md flex flex-col justify-center items-center">
                    <Icon name="bi:facebook" size="45" color="#14b8a6" />
                </div>
            </NuxtLink>
        </div>
        <p class="text-base sm:text-lg lg:text-xl mb-5">- Send me an email -</p>
        <form @submit="handleSubmit"
            class="mail-form px-10 py-5 bg-white bg-opacity-70 shadow-lg font-serif text-base sm:text-lg lg:text-xl">
            <div class="flex flex-wrap mb-3">
                <p>Hi Bishwa! My name is&nbsp;</p>
                <input v-model="formValues.name" type="text" class="text-highlight outline-none bg-transparent"
                    placeholder="your name here" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" />
            </div>
            <div class="mb-3">
                <p>I am reaching out because&nbsp;</p>
                <textarea v-model="formValues.message" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
                    class="w-full h-[80px] lg:h-[100px] text-highlight outline-none bg-transparent resize-none"
                    placeholder="your message..." />
            </div>
            <div class="flex flex-wrap mb-10">
                <p>You can contact me at&nbsp;</p>
                <input v-model="formValues.email" type="text" class="text-highlight outline-none bg-transparent"
                    placeholder="your email address" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" />
            </div>
            <div class="flex gap-2 justify-end items-center">
                <div v-if="errorMsg" class="flex-grow text-red-700">{{ errorMsg }}</div>
                <div v-if="successMsg" class="flex-grow text-green-700">{{ successMsg }}</div>
                <button type="submit" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
                    class="button px-4 py-2 self-end flex-shrink-0 bg-teal-500 disabled:hover:scale-100 " :disabled="isSending">
                    <template v-if="!isSending">
                        <span>Send &nbsp;</span>
                        <Icon name="ph:paper-plane-right-fill" />
                    </template>
                    <template v-else>
                        Sending...
                    </template>
                </button>
            </div>

        </form>
    </ScrollToggle>
</template>

<script setup>
const cursorIsHovering = useCursorIsHovering();
const errorMsg = ref('');
const successMsg = ref('');
const isSending = ref(false);
const formValues = reactive({
    name: '',
    message: '',
    email: ''
});
function handleSubmit(event) {
    event.preventDefault();
    if (formValues.name == '' || formValues.message == '' || formValues.email == '') {
        successMsg.value = '';
        errorMsg.value = 'Please enter all the fields.';
        return;
    }
    else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formValues.email)) {
        successMsg.value = '';
        errorMsg.value = 'Please enter a valid email address.';
        return;
    }
    else {
        isSending.value = true;
        $fetch('/api/email', {
            method: 'POST',
            body: formValues
        }).then(() => {
            isSending.value = false;
            successMsg.value = 'Sent successfully!';
            errorMsg.value = '';
            formValues.name = '';
            formValues.message = '';
            formValues.email = '';
        })
        .catch(error => {
            successMsg.value = '';
            errorMsg.value = error.statusMessage;
        })
    }
}
</script>

<style scoped>
.contact-actions {
    opacity: 0;
    transform: translateY(15%);
}

.contact-actions.inview {
    opacity: 1;
    transform: translateX(0%) translateY(0%);
    transition: all 500ms 500ms;
}</style>