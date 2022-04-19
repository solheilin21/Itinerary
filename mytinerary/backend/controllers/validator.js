const joi = require("joi")

const validator = (req, res, next) => {

    console.log(req.body.nuevoUsuario)

    const Schema = joi.object({
        name: joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min": "El nombre debe tener al menos 3 caracteres",
            "string.empty": "El nombre no puede estar vacio"
        }),

        lastName: joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min": "El apellido debe tener al menos 3 caracteres",
            "string.empty": "El apellido no puede estar vacio"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            "string.email": "Email incorrecto"
        }),

        password: joi.string().max(30).min(6).trim().alphanum().required().messages({

            "string.min": "El password debe tener al menos 6 caracteres",
             "string.alphanum": "El contraseña debe ser alfanumerica"
        }),

    })

    const validation = Schema.validate(req.body.nuevoUsuario, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: "falseVAL", response: validation })
    }

    next()

}

module.exports = validator
