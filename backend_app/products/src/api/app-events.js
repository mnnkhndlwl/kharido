
module.exports = (app) => {
    
    
    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;

        console.log("============= Shopping ================");
        console.log(payload);

        return res.status(200).json({ message: 'notified!'});
 
    });

}