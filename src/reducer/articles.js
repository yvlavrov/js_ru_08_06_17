import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id);
        case CHANGE_SELECTION: return articleState.filter(article => {article.id == payload.id; debugger; console.log(article.id, payload[0].value)})
    }

    return articleState
}