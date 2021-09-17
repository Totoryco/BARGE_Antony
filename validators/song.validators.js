const { Joi } = require("express-validation");
/**
 * Song Validators
 */

const SongValidators = {
  validateCreate: {
    body: Joi.object({
      genre: Joi.string().max(80).required(),
      titre: Joi.string().max(80),
      duree: Joi.number().integer(),
      auteur: Joi.string().max(100).required(),
    }),
  },
  validateUpdate: {
    params: Joi.object({
      guid: Joi.string().guid().required(),
    }),
    body: Joi.object({
      genre: Joi.string().max(80).required(),
      titre: Joi.string().max(80),
      duree: Joi.number().integer(),
      auteur: Joi.string().max(100).required(),
    }),
  },
};

module.exports = SongValidators;
