const exprees = require("express");
const router = exprees.Router();
const cors = require("cors");
const {
  test,
  addboy,
  loginUser,
  registeruser,
} = require("../controllers/authControllers");

//middleware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/register", registeruser);
router.post("/login", loginUser);
router.post("/add", addboy);

module.exports = router;
