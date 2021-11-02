const Firebase = require("../utils/Firebase");
const profissionalModels = require("../models/profissionalModels");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(request, response){
        try {
            const { email, senha } = request.body;

            let firebaseId;
            try {
                firebaseId = await Firebase.login(email, senha);
            } catch (error) {
                return response.status(403).json({notification: "credencial invalida"});
            }
        
            const profissional = await profissionalModels.getByFields({firebase_id: firebaseId});

            const accessToken = jwt.sign({profissional}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30d",});

            return response.status(200).json({profissional, accessToken});
            
        } catch (error) {
            console.warn(error);
            return response.status(500).json({notification: "erro interno do servidor ao tentar logar"});
        }
    }

};