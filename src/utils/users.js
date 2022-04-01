const users = []

const addUser = ({ id, username, room }) => {
    // Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validar os dados
    if (!username || !room) {
        return {
            error: 'Nome de usuário e sala são necessários!'
        }
    }

    // Verificar se o usuário já existe
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Verificar o username
    if (existingUser) {
        return {
            error: 'Nome de usuário já está sendo usado'
        }
    }

    // Armazenar usuário
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }

}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
} 

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}