const sendMail=require("../utils/sendMail");

exports.sendMsg=async(req,res)=>{
    try{
        const {name,email,msg}=req.body;
            
        await sendMail({
            email: process.env.MYEMAIL,
            subject: `Mail from Portfolio ~ ${name} & ${email}`,
            message:msg,
          });
      
          res.status(200).json({
            success: true,
            message: `Email sent successfully`,
          });
      
    }catch(error){
        
        res.status(500).json({
            success: false,
            message: error.message
          });
    }
}