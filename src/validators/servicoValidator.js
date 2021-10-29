const { celebrate, Segments, Joi} = require("celebrate");
//const { getById, update } = require("./profissionalValidator");

module.exports = {

    create: celebrate({
        [Segments.BODY] : Joi.object().keys({

            nome : Joi.string().required(),
            especificaçoes : Joi.string().required(),
        })
        
    }),
    getById: celebrate({
        [Segments.BODY] : Joi.object().keys({})

    }),
    update: celebrate({
        [Segments.BODY] : Joi.object().keys({})
    
    }),
    delete: celebrate({
        [Segments.BODY] : Joi.object().keys({})

    }),

}