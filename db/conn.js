const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log('Conectando ao MongoDB')
    } catch (e) {
        console.log('Erro ao conectar no mongodb', e)
    }
}

// Inicializa a função antes de exportar a função
run();

module.exports = client