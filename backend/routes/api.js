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
  try {
    const textList = getData()
    res.send(textList)
  } catch (error) {
    console.error(error)
    next(error)
  }
  
})

router.put('/:id', async (req, res, next) => {
  try {
    var textList = getData()
    const textIndex = req.params['id']
    textList.data[textIndex].translation_text.output = req.body.content
    saveData(textList)
    res.send(`${textIndex}th text has been saved`)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router