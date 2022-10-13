const express = require('express')
const router = express.Router()
const fs = require('fs')
const dataPath = './json_db/db.json'

const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

router.get('/', (req, res, next) => {
  const textList = getData()
  res.send(textList)
})

router.put('/:id', (req, res, next) => {
  var textList = getData()
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const textIndex = req.params['id']
    console.log(textList)
    console.log(textIndex)
    textList.data[textIndex].translation_text.output = req.body.content
    saveData(textList)
    res.send(`${textIndex}th text has been saved`)
  }, true)
})

module.exports = router