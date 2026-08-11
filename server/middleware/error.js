

function err(err, req, res, next) {



    
    if (err) {
        console.log(err);


        res.json({
            success: false,
            message: "internfsdfsdfal server error"
        })
    }

    next()



}


module.exports = { err }