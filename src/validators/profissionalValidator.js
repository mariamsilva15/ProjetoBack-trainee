const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {

    create: celebrate({
        
        [Segments.BODY] : Joi.object().keys({
            
            profissional_servico_id : Joi.string().required(),
            nome : Joi.string().required(),
            email : Joi.string().email().required(),
            estado : Joi.string().required(),
            cidade : Joi.string().required(),
            descricao : Joi.string().required(),
            senha : Joi.string().min(6).required(),
            confirmarSenha : Joi.ref('senha'),
            contato : Joi.string().required(),

        }),
    }),

    getById: celebrate({
        [Segments.BODY] : Joi.object().keys({

            profissional_servico_id : Joi.string().required(),

        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            profissionais_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            profissional_servico_id: Joi.string().optional(),
            nome: Joi.string().optional(),
            email: Joi.string().optional(),
            estado: Joi.string().optional(),
            cidade: Joi.string().optional(),
            descricao: Joi.string().optional(),
            senha: Joi.string().optional(),
            contato: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            profissionais_id: Joi.string().required(),
        }),
    }),

};