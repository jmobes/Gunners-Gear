const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

function validateOrder(order) {
  let schema = Joi.object().keys({
    products: Joi.array()
      .items(
        Joi.object({
          _id: Joi.objectId().required(),
          image: Joi.string().required(),
          title: Joi.string().required(),
          description: Joi.string().required(),
          price: Joi.number().min(0).required(),
          category: Joi.string().required(),
          country: Joi.string(),
          first: Joi.string(),
          last: Joi.string(),
          number: Joi.string(),
          position: Joi.string(),
        })
      )
      .min(1)
      .required(),
  });

  return schema.validate(order);
}

module.exports = validateOrder;
