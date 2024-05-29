const {check, validationResult} = require("express-validator");

exports.registerRules = () => 
    [check ('name', 'name is required').notEmpty(),
    check ('lastname', 'lastname is required').notEmpty(),
    check ('adress', 'adress is required').notEmpty(),
    check ('phonenumber', 'phone number is required').notEmpty(),
    check ('email', 'email is required').notEmpty(),
    check ('email', 'check your email again').isEmail(),
    check ('password', 'password must be 6 to 20 characters').isLength(
        {
            min : 6 , 
            max : 20,
        }
    ),
check ('company',"company name is required").notEmpty(),
check ('tax_number',"tax number is required").notEmpty()
    ]
;

exports.loginRules = () => 
    [
        check ('email', 'email is required').notEmpty(),
        check ('email', 'check your email again').isEmail(),
        check ('password', 'password must be 6 to 20 characters').isLength(
            {
                min : 6 , 
                max : 20,
            }
    ), 
    ];

 exports.validation = (req,res,next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array().map((el)=>({msg:el.msg}))});   
    };
    next();
}

