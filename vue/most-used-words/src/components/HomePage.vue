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
import { ipcRenderer } from 'electron'

export default {
    name: "HomePage",
    data: () => ({
        groupedWords: [],
        files: null
    }),
    components: {
        PillComponent
    },
    methods: {
        proccessSubtitles(){
            const paths = this.files.map((file) => file.path)
            
            ipcRenderer.send("process-subtitle", paths)
            ipcRenderer.on("process-subtitle",(event, resp)=>{
                this.groupedWords = resp
            })
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