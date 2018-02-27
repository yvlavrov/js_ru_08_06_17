import {articles as defaultArticles} from '../fixtures'
import {SELECT_ARTICLE_DATE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_ARTICLE_DATE: return articleState.filter(article => article.id !== payload.id)
    }

    return articleState
}
