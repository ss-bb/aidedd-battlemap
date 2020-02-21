<template>
    <v-app>
        <v-navigation-drawer absolute permanent right>
            <navigation--drawer-content />
        </v-navigation-drawer>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import NavigationDrawerContent from "@/components/navigation/NavigationDrawerContent.vue";

export default {
    name: "App",
    components: {
        "navigation--drawer-content": NavigationDrawerContent
    },

    data: () => ({})
};
</script>
