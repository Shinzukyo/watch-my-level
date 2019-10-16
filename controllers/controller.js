'use strict';

class Controller {

    constructor(model) {
        this.model = model;
    }

    async add(fields) {
        return this.model.create(fields);
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
