const Joi = require("joi");

function validateOrder(order) {
  let schema = Joi.object().keys({
    products: Joi.array()
      .items(
        Joi.object({
          image: Joi.string().required(),
          title: Joi.string().required(),
          description: Joi.string().required(),
          price: Joi.number().min(0).required(),
          category: Joi.string().required(),
        })
      )
      .min(1)
      .required(),
  });

  return schema.validate(order);
}

module.exports = validateOrder;
