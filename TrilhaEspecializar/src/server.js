const express = require("express");

const app = express();

app.use(express.json());

app.get("/test", (req, res)=>{
    return res.json({ mes4sage: "Valew, Valew Sací" });
});

app.post("/test", (req, res)=>{
    const data = req.body;

    return res.json(data);
});

app.get("/test/:id", (req, res) =>{
    const { id } = req.params;

    return res.json({ id: id });
});

app.listen("3050");