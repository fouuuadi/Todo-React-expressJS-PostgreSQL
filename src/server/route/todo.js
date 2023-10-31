const express = require('express');


const router = express.Router();


router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        res.send(200, {content: "OK"})
    } catch (e) {
        console.error(e.message)
    }
})


router.get('/fouad', async (req, res) => {
    res.send(200, "Fouad");
})


module.exports = router;
