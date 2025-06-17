require('dotenv').config();
const { MongoClient } = require('mongodb')

const uri = process.env.URI;

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