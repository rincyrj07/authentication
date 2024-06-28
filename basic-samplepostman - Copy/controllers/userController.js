const bcrypt = require("bcrypt");
const saltRound = 10;


const users =[
    {
        fullname: 'Ann',
  email: 'ann@gmail.com',
  password: '$2b$10$3Uxp9C45HNyMka3GUVKMZev3guOMKTbjMH3uXjconDaNWGOCZ4SIi'
    },
    {
        fullname: 'Tom',
  email: 'tom@gmail.com',
  password: '$2b$10$uyygf0DAwR1JEGGm6DXmV.zt9X5/.uaEQkyFUvawcyMZmdYnrnShm'
    }
]


exports.getUsers = (req,res)=>{
    res.send("Users list");
}

exports.userRegister = async (req, res)=> {

    //console.log("User Register");

    const {fullname, email, password} = req.body;

    const hashPassword = await bcrypt.hash(password,saltRound);

    //console.log(hashPassword);

    const user ={
        fullname,
        email,
        password:hashPassword,
    }

    console.log(user);
    
    res.status(201).json({
        success: true,
        message:"Registration completed successfully"
    })
    
}


exports.userLogin = (req,res) =>{

    const{email, password} = req.body;

    console.log("Email", email, "password",password);

    const user = users.find((u)=> u.email === email);

    if(!user){
        return res.status(401).json({
            success:false,
            message: "Invalid credentials"
        });

    }

    const isPassword = bcrypt.compare(password, user.password);

    if(!isPassword){
        return res.status(401).json({
            success:false,
            message: "Invalid credentials"
        });
    }
    
    res.status(200).json({
        success:true,
        message: "Logged in successfull",
        isAuthenticated:true,
        user
    });
}