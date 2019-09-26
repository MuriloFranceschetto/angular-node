
export const config = {
    mongo: {
        uri: 'mongodb://localhost:27017/',
        database: 'projetoWeb',
        options: { useNewUrlParser: true, useCreateIndex: true }
    },
    secrets: {
        session: 'angular-fullstack-secret'
    }
}