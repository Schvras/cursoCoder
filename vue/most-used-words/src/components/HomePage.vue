<template>
    <div class="home">
        <v-form>
            <v-file-input
                label="Selecione os arquivos de legendas"
                prepend-icon="mdi-file"
                append-icon="mdi-send"
                extension="srt"
                outlined
                multiple
                v-model="files"
                @click:append="proccessSubtitles"
            >
            </v-file-input>
        </v-form>
        <div class="pills">
            <PillComponent v-for="item in groupedWords" :word="item.word" :amount="item.amount" :key="item.word"/>
        </div>
    </div>
</template>

<script>
import PillComponent from './PillComponent.vue'

export default {
    name: "HomePage",
    data: () => ({
        groupedWords: [
            {word: "i", amount: 500},
            {word: "you", amount: 478},
            {word: "it", amount: 10},
        ],
        files: null
    }),
    components: {
        PillComponent
    },
    methods: {
        proccessSubtitles(){
            console.log(this.files)
        }
    }
}
</script>

<style scoped>
    .home{
        margin: 20px
    }
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
</style>