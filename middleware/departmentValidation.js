const joi=require('joi')

exports.createDepartmentValidation=(req,res,next)=>{
    const schema= joi.object({
    name:joi.string().trim().pattern(new RegExp(`^[a-zA-Z]+$`)).required().messages({   
   'string.base': 'name must be a letter in the alphabet',
    'string.empty': 'name cannot be empty',
    'any.required': 'name is required',
     'string.pattern.base': 'name must contain both letters  with no spaces'
    }),
     college:joi.string().trim().pattern(new RegExp(`^[a-zA-Z]+$`)).required().messages({
         'string.base': 'college must be a letter in the alphabet',
    'string.empty': 'college cannot be empty',
    'any.required': 'college is required',
    'string.pattern.base': 'college must contain both letters  with no spaces'
     })
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).json({
            message:'there is a bad request',
            err:error.details[0].message
        })
    }
    next()
}

exports.updateDepartmentValidation=(req,res,next)=>{
    const schema= joi.object({
    name:joi.string().trim().pattern(new RegExp(`^[a-zA-Z]+$`)).optional().messages({   
     'string.base': 'name must be a letter in the alphabet',
    'string.empty': 'name cannot be empty',
    'any.required': 'name is required',
     'string.pattern.base': 'name must contain both letters  with no spaces'
    }),
     college:joi.string().trim().pattern(new RegExp(`^[a-zA-Z]+$`)).optional().messages({
        'string.base': 'college must be a letter in the alphabet',
    'string.empty': 'college cannot be empty',
    'any.required': 'college is required',
    'string.pattern.base': 'college must contain both letters  with no spaces'
     })
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).json({
            message:'there is a bad request',
            err:error.details[0].message
        })
    }
    next()
}