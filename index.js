const express = require('express'); // const variavel que não muda, let variavel muda o objeto,
const app = express();

app.get("'/exercicio1/", (req, res) => {
   const num1= req.query.num1
   const num2= req.query.num1

   const resultado = Number(num1)+ Number(num2);
   
  res.json({ message: resultado})
})

app.listen(3070, () => {
    console.log("Servidor esta rodando na porta 3000");
})
