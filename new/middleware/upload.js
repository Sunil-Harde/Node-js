import multer from "multer"
import path from "path"

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cd(null, "../uploads")
//     },
//     filename: (req, file, cb) => {
//         const newFileName = Date.now() + path.extname(file.originalname)
//         cd(null, newFileName)
//     }
// })

const upload = multer({

    storage: storage,
    limits: {
        filesize: 1024 * 1024 * 5
    }

})


const storage = multer.diskStorage({

    destination: (req, res, cb) => {
        cd(null, "../uploads")
    },
    filename: (req, res, cb) => {
        const newFilename = Date.now() + path.extname(File.originalname)
        cd(null, newFilename)
    }

})

