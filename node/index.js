const express = require('express')
const app = express()

const port = 3000
const config = {
    host: 'mysql-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

function createTable () {
    connection.query(`SHOW TABLES LIKE 'people'`, function (err, rows) {
        if (err) return console.error(err)
        if(rows.length == 1){
            return
        } else {
            const createTableQuery = `CREATE TABLE people (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL
              )`
              connection.query(createTableQuery, function(err, result) {
                if (err) return console.error(err);
                console.log(`A tabela people foi criada.`);
              })
        }
    })
}
createTable()

app.get('/',  async (req, res) => {
    function getUsers () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `people`', function (err, rows) {
                if (err) return console.error(err)
                const usersData = JSON.parse(JSON.stringify(rows))
                resolve(usersData)
            })
        })
        
    }
    const users = await getUsers()
    res.send(
        `
            <h1>Full cycle Rocks</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
                </thead>
                <tbody>
                    ${users.map((user) => {
                        return `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    )
})

app.get('/:name', (req, res) => {
    const name = req.params.name
    const sql = `INSERT INTO people (name) VALUES (?);`
    connection.query(sql, [name])
    res.send('<h1>Usuário salvo</h1>')
})

const start = async () => {
 try {
   app.listen(port, () => {
   console.log(`Process id: ${process.pid}`)
   })
 } catch (err) {
   console.error(err)
   process.exit(1)
 }
}
start()

async function closeGracefully(signal) {
   console.log(`Received signal to terminate: ${signal}`)
   connection.end()
   process.exit()
}
process.on('SIGINT', closeGracefully)
process.on('SIGTERM', closeGracefully)
