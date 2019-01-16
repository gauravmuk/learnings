const Joi = require('Joi');

let schema = Joi.object({
    name: Joi.string().min(5).required().options({
        language: {
          any: { required: '!!is required' },
          string: { min: '!!must be at least 5 Characters' },
        },
      })
}).options({
    language: {
        object: {
            child: '!!Segment {{reason}}'
        },
        messages: {
            wrapArrays: false
        }
    }
});
const {result, error } = schema.validate({}); 

console.log(error.message);