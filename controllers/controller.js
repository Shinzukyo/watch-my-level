'use strict';

class Controller {

    constructor(model) {
        this.model = model;
    }

    async add(arrayOrFields) {
        if ( arrayOrFields.constructor === Array ) {
            const result = [];
            for( const fields of arrayOrFields) {
                result.push(await this.add(fields));
            }
            return result;
        }else{
            return this.model.create(arrayOrFields);
        }

    }

    async getAll() {
        return this.model.findAll();
    }

    async getById(id) {
        return this.model.findOne({
            where: {
                id: id
            }
        });
    }

    async getByParams(params) {
        return this.model.findOne({
            where: params
        });
    }

    async update(id, fields) {
        if(id === undefined){
            return undefined;
        }
        return await this.model.findOne({
            where: {
                id: id
            }
        }).then(Model =>{
            return Model.update(fields);
        });
    }

    async delete(id) {
        if(id === undefined){
            return undefined;
        }
        return await this.model.destroy({where : {
                id : id
            }}).then( deleted => {
            return deleted;
        });
    }
}

module.exports = Controller;
