<template>
    <v-sheet class="d-flex flex-column align-center">
        <div class="my-1">
            <v-btn class="primary" text @click="switchMainLayout('battlemap')" :disabled="currentSelected === 'battlemap'">Battlemap</v-btn>
            <v-divider vertical />
        </div>
        <div class="my-1">
            <v-btn class="primary" text @click="switchMainLayout('image')" :disabled="currentSelected === 'image'">Image</v-btn>
            <v-divider vertical />
        </div>
        <div class="my-1">
            <v-btn class="primary" text @click="switchMainLayout('fichePerso')" :disabled="currentSelected === 'fichePerso'">Feuille perso</v-btn>
            <v-divider vertical />
        </div>
        <div v-if="isMD">
            <v-btn class="primary" text @click="switchMainLayout('noteMD')">Notes MD</v-btn>
        </div>
    </v-sheet>
</template>

<script>
export default {
    name: "SelectorMainContent",
    components: {},
    computed: {
        currentSelected() {
            return this.$store.currentLayoutName;
        },
        isMD(){
            return this.$store.isMD;
        }
    },
    methods: {
        switchMainLayout(value) {
            this.$store.dispatch("updateCurrentLayout", value);
        }
    }
};
</script>

<style>
</style>