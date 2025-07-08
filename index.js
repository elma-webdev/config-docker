const express=require('express');
const cors=require('cors');
const PORT=3000;
const HOST='0.0.0.0';
const app=express();
const db=require("./src/connection/sql")
app.use(cors())
app.use(express.json());
const {globalRoutes}=require("./src/routes/global.routes");
app.use("/api", globalRoutes);


// Sincronizar o banco de dados com o modelo
db.sync({ alter: true })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.get('/',(req,res)=>{
  return res.send('hello world, docker again!');
});


app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
}, HOST);