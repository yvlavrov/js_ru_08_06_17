import {
    DELETE_ARTICLE,
    INCREMENT,
    SELECT_ARTICLE,
    SELECT_ARTICLE_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(ids) {
    return {
        type: SELECT_ARTICLE,
        payload: { ids }
    }
}

export function selectArticleDate(date) {
    return {
        type: SELECT_ARTICLE_DATE,
        payload: { date }
    }
}


