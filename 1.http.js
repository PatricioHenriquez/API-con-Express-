const http = require('node:http') // protocolo HTTP

console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hola Mundo')
})

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${port}`)
})
