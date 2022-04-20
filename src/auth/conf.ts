const pluralize = require('pluralize')
const changeCase = require('change-case')
function toCamelCase(text) {
  return changeCase.camelCase(text)
}

module.exports.options = {
  dir: 'src',
  queryMap: {
    findUnique(type) {
      return toCamelCase(type)
    },
    findFirst(type) {
      return toCamelCase(type) + 'First'
    },
    findMany(type) {
      return pluralize(toCamelCase(type))
    },
    count(type) {
      return pluralize(toCamelCase(type)) + 'Count'
    },
    aggregate(type) {
      return pluralize(toCamelCase(type)) + 'Aggregate'
    },
    createOne(type) {
      return 'create' + type
    },
    updateOne(type) {
      return 'update' + type
    },
    deleteOne(type) {
      return 'delete' + type
    },
    upsertOne(type) {
      return 'upsert' + type
    },
    createMany(type) {
      return 'create' + pluralize(type)
    },
    updateMany(type) {
      return 'update' + pluralize(type)
    },
    deleteMany(type) {
      return 'delete' + pluralize(type)
    },
    subscription(type) {
      return toCamelCase(type)
    },
  },
}
