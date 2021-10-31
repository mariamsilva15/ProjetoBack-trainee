const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY] : Joi.object().keys({

            comentario_servico_id : Joi.string().required(),
            corpo : Joi.string().required(),
        }),
        
    }),
    getById: celebrate({
        [Segments.BODY] : Joi.object().keys({
            comentario_servico_id : Joi.string().required(),

        }),

    }),

}