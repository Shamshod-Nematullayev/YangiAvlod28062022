const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello from users.js');
})

// update user
router.put('/:id',async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const tuz = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, tuz)
            } catch (err) {
                return res.status(500).json(err)
            }
        }
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
                res.status(200).json("Accout updated")
            } catch (err) {
                return res.status(500).json(err)
            }
    }else{
        return res.status(403).json("you can update only your account")
    }
})
// delete user
router.delete('/:id',async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
            try {
                const user = await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Accout deleted")
            } catch (err) {
                return res.status(500).json(err)
            }
    }else{
        return res.status(403).json("you can delete only your account")
    }
})
// get a user
router.get('/:id', async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc 
        res.status(200).send(other);
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router