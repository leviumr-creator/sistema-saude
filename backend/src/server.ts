import express from "express";

const app = express();

const PORT = 3000;

app.get("/",(req,res) =>{
    res.json({
        mensagem: "API do Sistema de Saúde funcionando!"
    });
});

app.get("/teste", (req,res) =>{
    res.send("Olá! o Servidor recebeu"
    );
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});