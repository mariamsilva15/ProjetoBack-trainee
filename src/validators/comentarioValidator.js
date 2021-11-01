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
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            comentario_id: Joi.string().required(),
        }),
        [Segments.BODY] : Joi.object().keys({

            comentario_servico_id : Joi.string().optional(),
            corpo : Joi.string().optional(),
        })
        .min(1),
        

    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            comentario_id: Joi.string().required(),
        }),
    }),

}