<template>
    <v-sheet>
        <selector-main-content />
        <v-divider />
        <chat-overlay />
    </v-sheet>
</template>

<script>

import SelectorMainContent from "@/components/navigation/SelectorMainContent.vue";
import ChatOverLayVue from '@/components/chat/ChatOverLay.vue';

export default {
    name: "NavigationDrawerContent",
    components : {
        "selector-main-content": SelectorMainContent,
        "chat-overlay": ChatOverLayVue
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
</style>