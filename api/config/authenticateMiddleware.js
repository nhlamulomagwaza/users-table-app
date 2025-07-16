
var authUsername= process.env.AUTH_USERNAME;
var authPassword= process.env.AUTH_PASSWORD;

const authenticationMiddleWare = (req, res, next) => {
        const { username, password } = req.headers;

    if (username === authUsername && password === authPassword) {
        next(); 
    } else {
      
        res.status(401).json({ message: 'Access denied, provide valid credentials' });
    }
};


module.exports= authenticationMiddleWare;