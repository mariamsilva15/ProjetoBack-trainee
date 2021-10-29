const { celebrate, Segments, Joi} = require("celebrate");
//const { getById, update } = require("./profissionalValidator");

module.exports = {

    create: celebrate({
        [Segments.BODY] : Joi.object().keys({

            nome : Joi.string().required(),
            especificaçoes : Joi.string().required(),
        }),
        
    }),
    getById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            servico_id : Joi.string().required(),

        }),

    }),
    update: celebrate({
        [Segments.PARAMS] :Joi.object().keys({
            servico_id : Joi.string().required(),   
        }),

        [Segments.BODY] : Joi.object().keys({
            nome : Joi.string().optional(),
            especificaçoes : Joi.string().optional(), 
        }),
    
    }),
    delete: celebrate({
        [Segments.PARAMS] :Joi.object().keys({
            servico_id : Joi.string().required(),   
        }),

    }),

}