import { Router } from "express";
import { login, register, refreshToken, logout } from "../controllers/auth.contoller.js";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { bodyTextValidator, bodyBirthDateValidator, bodyEmailValidator, bodyPasswordValidator } from "../middlewares/validatorUser.js";

const router = Router();

router.post("/register", 
            bodyTextValidator("names", "nombre"),
            bodyTextValidator("surname", "apellido"),
            bodyBirthDateValidator,
            bodyEmailValidator,
            bodyPasswordValidator, 
            validationResultExpress
            ,register
);

router.post("/login",
            bodyEmailValidator,
            bodyPasswordValidator,
            validationResultExpress,
            login       
);

router.get("/logout", logout);

router.post("/refresh", refreshToken);

export default router;