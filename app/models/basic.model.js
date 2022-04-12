module.exports = mongoose => mongoose.model( 'bmi',
        mongoose.Schema(
            {
                name : String,
                weight : String,
                height : String     
            }, {timestamps: true}
        )
    )

module.exports = mongoose => mongoose.model( 'calc',
        mongoose.Schema(
            {
                num1 : String,
                opcode : String,
                num2 : String
            }, {timestamps : true}
        )
)