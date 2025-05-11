const express = require("express")
const path = require("path")
const app = express()

// View engine setup
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Static files
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

// Start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
