const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();


cron.schedule("*/5 * * * * *", function() {
    console.log("running a task");
})


app.listen(3128);