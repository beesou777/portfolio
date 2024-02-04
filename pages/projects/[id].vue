<template>
    <div class="content-container overflow-hidden" :class="isLoading && 'h-0'" ref="container">
        <div class="project pt-[150px] md:pt-[200px] w-[95%] mx-auto">
            <ProjectHeader :project="project"/>
            <ProjectMockups v-if="project.mockups.tablet" :project="project"/>
            <ProjectPrototypeMockups v-else :project="project"/>
            <ProjectInfo :project="project"/>
            <ProjectVideo v-if="project.video" :project="project"/>
            <ProjectPrototype v-if="project.prototype" :project="project"/>
            <ProjectDetails :project="project"/>
            <ProjectNav :prevPath="prevPath" :nextPath="nextPath"/>
        </div>
    </div>
</template>

<script setup>
import data from '~/assets/data.json';
const { id } = useRoute().params;
const projectIndex = data.projects.findIndex(project => project.id == id);
if(projectIndex < 0) {
    throw createError({statusCode: 404, statusMessage: 'Project not found', fatal: true});
} 
const project = data.projects[projectIndex];
const prevPath = projectIndex <= 0 ? null : `projects/${data.projects[projectIndex - 1].id}`;
const nextPath = projectIndex >= data.projects.length - 1 ? null : `projects/${data.projects[projectIndex + 1].id}`;

useHead({
    title: `${project.name} | bishwa shah's Portfolio`,
    meta: [
        { name: "description", content: `${project['meta-description']}` },
        { name: "twitter:title", content: `${project.name} | bishwa shah's Portfolio` },
        { name: "twitter:description", content: `${project['meta-description']}` },
        { property: "og:title", content: `${project.name} | bishwa shah's Portfolio` },
        { property: "og:description", content: `${project['meta-description']}` },
    ]
});

const isLoading = useIsLoading();
const loaderText = useLoaderText();
loaderText.value = `${project.name}`;

</script>

<style scoped>

</style>