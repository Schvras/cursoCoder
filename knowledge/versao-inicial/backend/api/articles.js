const queries = require('./queries')

module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = async (req, res) =>{
        const article = { ... req.body }

        if(req.params.id) article.id = req.params.id

        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if(article.id){
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id,'Código do artigo não informado')

            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del()
                .catch(err => res.status(500).send(err))
            existsOrError(rowsDeleted, 'Artigo não localizado')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const limit = 10 // Usado para paginação
    const get = async (req, res) => {
        const page = req.query.page || 1
        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id','name','description', 'categoryId', 'userId')
            .limit(limit)
            .offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        try {
            existsOrError(req.params.id, 'Id não informado')
        } catch (msg){
            return res.status(400).send(msg)
        }

        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }

    const limit_by_category = 4 // Usado para paginação
    const getByCategory = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Id não informado')
        } catch (msg){
            return res.status(400).send(msg)
        }

        const categoryId = req.params.id
        const page = req.query.page || 1
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map( category => category.id)

        app.db({a: 'articles', u: 'users'})
            .select('a.id', 'a.name', 'a.description', {author: 'u.name'})
            .limit(limit_by_category).offset(page * limit_by_category - limit_by_category)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId',ids)
            .orderBy('a.id','desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getByCategory }
}