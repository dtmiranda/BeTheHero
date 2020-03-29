const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    //metode to list ONGs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    //Metode to create ONGs
    async create(request, response) {
        /**
         * Doing desestruct to pic up each variable only
         * to certify that the user can not send a wrong data.
         */
        const { name, email, whatsapp, city, uf } =  request.body;
        
        //create a string ONGs id
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};