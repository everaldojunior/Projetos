const express = require("express")
const path = require("path")

let initialPath = path.join(__dirname, "public")

let app = express()
app.use(express.static(inicialPath))