const conn = require('../db/conn')

// Criando classe

class Product {

// Criando o construtor com as propriedades   
    constructor(name, price, description) {

// Associando as propriedades do objeto
        this.name = name
        this.price = price
        this.description = description
    }
// Método save para salvar (função criada)
    save() {
// Método para enviar ao banco de dados, passando os parâmetros da classe
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        })

        return product
    }
}

module.exports = Product