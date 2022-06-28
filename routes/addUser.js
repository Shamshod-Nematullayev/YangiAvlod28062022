const express = require('express');
const router = express.Router()
const Count = require('../model/CountGet')
const Student = require('../model/Student')

router.post("/",async (req, res)=>{
    let yangi_avlod_id_c;
    const {name, lastname, father, gender, sinf, direction, birthday, address, school} = req.body;
    let fullname;
    let gender_id;
    let sinf_id;
    let direction_id;
    let yangi_avlod_id;   
        let count = await Count.findOne({name: "yangi_avlod_id"})

        if(count == null){
            const count = new Count({
                name: "yangi_avlod_idd",
                yangi_avlod_id_c: 0
            })
            await count.save()
            yangi_avlod_id_c = 0
        }else{
            yangi_avlod_id_c = count.yangi_avlod_id_c
        }
        await Count.updateOne({name: "yangi_avlod_idd"}, {$set: {yangi_avlod_id_c: yangi_avlod_id_c+1}})
    
    yangi_avlod_id_c++
    if(sinf < 10){
        sinf_id = '0'+sinf
    }else{
        sinf_id = sinf
    }
    if(direction ==="prezident"){
        direction_id = '10'
    }else if(direction ==="xususiy_maktab"){
        direction_id = '20'
    }else if(direction === "dtm"){
        direction_id = '30'
    }
    if(gender === "erkak"){
        fullname = lastname + " " + name  + " " + father + " o'g'li"
        gender_id = '01';
    }else{
        fullname = lastname + " " + name + " " + father + " qizi" 
        gender_id = '02';
    }
    
    if(yangi_avlod_id_c<10){
        yangi_avlod_id_c = '000' + yangi_avlod_id_c
    }else if(yangi_avlod_id_c < 100){
        yangi_avlod_id_c = '00' + yangi_avlod_id_c
    }else if(yangi_avlod_id_c < 1000){
        yangi_avlod_id_c = '0' + yangi_avlod_id_c
    }
    yangi_avlod_id = Number(direction_id + sinf_id + gender_id + yangi_avlod_id_c) 


    await new Student({
        yangi_avlod_id,
        fullname,
        gender,
        sinf,
        direction,
        birthday,
        address,
        school
    }).save()

    res.status(200).send(yangi_avlod_id + "<a href='/admin'>Orqaga</a>")
})

module.exports = router;