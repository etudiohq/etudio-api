const bcrypt = require('bcryptjs')

const resolvers = {
  Query: {
    async user (root, { id }, { models}) {
      return models.User.findById(id)
    },
    async allUsers (root, args, { models }) {
      return models.User.findAll()
    },
    async desk (root, { id }, { models }) {
      return models.Desk.findById(id)
    },
    async allDesks (root, args, { models }) {
      return models.Desk.findAll()
    }
  },
  Mutation: {
    async createUser (root, { deskId, email, password }, { models }) {
      return models.User.create({
        deskId,
        email,
        password: await bcrypt.hash(password, 10)
      })
    },
    async createDesk (root, { name }, { models }) {
      return models.Desk.create({ name })
    }
  },
  Desk: {
    async users (desk) {
      return desk.getUsers()
    }
  },
  User: {
    async desk (user) {
      return user.getDesk()
    }
  }
}

module.exports = resolvers
