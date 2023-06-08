const Sequelize = require('sequelize')
const db = require('./db')

const Todo = db.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    is_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

// ;(async () => {
//     await db.sync({force:true})
//  })()

module.exports = Todo