const express = require("express")
const cors = require("cors")
const Todo = require('./models/todo')

const app = express()

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {

    const list = await Todo.findAll()

    res.json({list})
})

app.post("/", async (req, res) => {
    const description = req.body.description

    if (!description)
    return res.status(400).json({
        error: true,
        message:"Informe a descrição"
    })

    const created = await Todo.create({
        description,
        is_completed: false
    })

    res.json(created)
})

app.put("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body

    if (!body.description)
    return res.status(400).json({
        error: true,
        message:"Informe a descrição"
    })

    await Todo.update({
        description: body.description,
        is_completed: body.is_completed
    }, {
        where: {
          id
        }
      });

    res.json({
        error: false,
        message: "Atualizado com sucesso"
    })
})

app.delete("/:id", async (req, res) => {
    const id = req.params.id

    await Todo.destroy({
        where: {
          id
        }
      });

    res.json({
        error: false,
        message: "Deletado com sucesso"
    })
})

app.listen(2323, () => {
    console.log("Servidor Iniciado na Porta 2323: http://localhost:2323")
})