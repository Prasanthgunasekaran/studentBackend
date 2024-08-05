const express = require("express");
const router = express.Router();

const usercontroller = require("../Controller/UserController");

router.post("/addstd", usercontroller.create_std);

router.get("/getstd", usercontroller.get_std);

router.put("/updatestd", usercontroller.update_std);

router.delete("/deletestd", usercontroller.delete_std);

router.delete("/deletestd/:id", usercontroller.delete_std_par)

router.get("/getonestd", usercontroller.getone_std);

router.put('/updatestd/:id', usercontroller.update_stdd);

router.get('/getstd/:id', usercontroller.get_params_std);



module.exports = router;