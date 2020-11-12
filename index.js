const express = require ("express");

const axios = require ("axios");

app.get("/:cityname", async, (req,res) =>{
    const data= axios(`api.openweathermap.org/data/2.5/weather?${cityname}& appid={API key}`);
    res.send(data)
})

app.listen(5000, (err) =>{
    if (err) console.log(err)
    else console.log("server is running on port 5000")
});
