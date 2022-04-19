// require() para solicitar el archivo de estilo css, en el parentesis colocar el nombre 
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")




async function sendEMail(email, uniqueText) {
     console.log(uniqueText)
     console.log(email)
    const trasporter = nodemailer.createTransport({

        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "solmytinerarymindhub@gmail.com",
            pass: "jignacio206"
        }

    })

    const sender = "solmytinerarymindhub@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "Verification for user",
        html: `Click <a href=http://localhost:4000/api/verify/${uniqueText}> here </a> to validate your email`,
    }


    await trasporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log("Mensaje Enviado")
        }
    })

}

const usersControllers = {

    verifyEmail: async (req, res) => {
        const { uniqueText} = req.params
        const user = await User.findOne({ uniqueText: uniqueText })

        if (user) {

            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:4000/signin")
        } else {
            res.json({ success: false, response: "su email no se ha podido verificar" })
        }

    },



    nuevoUsuario: async (req, res) => {

        const { name, lastName, email, password } = req.body.nuevoUsuario


        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
                

                res.json({ success: "falseUE", response: "Usuario Existente, realice Signin" })
            }
            else {


                const emailVerificado = false
                const uniqueText = crypto.randomBytes(15).toString("hex")
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    name,
                    lastName,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    connected:false,

                })


                if (!emailVerificado)
              
                    await NewUser.save()
                await sendEMail(email, uniqueText)
                res.json({ success: "trueUE", response: "Hemos creado un mensaje para verificar tu email" })
            }
        }

        catch (error) {
            res.json({ success: "falseUE", response: null, error: error })
        }
    },

   accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData

        try {
            const usuario = await User.findOne({ email })

            if (!usuario) {
                res.json({ success: false, from: "controller", error: "El usuario y/o contraseña es incorrecta" })

            }
            else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)

                    if (passwordCoincide) {

                        const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
                        const datosUser = {
                            name: usuario.name,
                            lastName: usuario.lastName,
                            email: usuario.email

                        }
                        usuario.connected=true
                        await usuario.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } })

                    }
                    else { res.json({ success: false, from: "controller", error: "El usuario y/o contraseña es incorrecta" }) }
                }
                else { res.json({ success: false, from: "controller", error: "verifica tus datos para validarlos" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }

    },

    cerrarCesion: async (req,res)=>{
     console.log(req.body)
        const email=req.body
        const user= await User.findOne({email})
        user.connected=false

await user.save()
res.json({success:true,response:"secion cerrada"})
    }


}

module.exports = usersControllers













