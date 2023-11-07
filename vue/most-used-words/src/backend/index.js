const { ipcMain } = require("electron")
const pathToRows = require("./pathsToRows")
const prepareData = require("./prepareData")
const groupeWords = require("./groupeWords")

ipcMain.on("process-subtitle",(event, paths)=>{
    
    pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(preparedData => groupeWords(preparedData))
    .then(groupedWords => {
        event.reply("process-subtitle", groupedWords)
    })
})