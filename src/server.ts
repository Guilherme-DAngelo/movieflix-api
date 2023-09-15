import express from "express";

const port = 3000;
const app = express();

app.get("/movies", (req, res) => {
    res.send("Listagem de Filmes");
});

app.listen(port, () => {
    console.log(`Sevidor em execução na porta ${port}`)
})

