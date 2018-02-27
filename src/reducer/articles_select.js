import {articles as defaultArticles} from '../fixtures'
import {SELECT_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_ARTICLE: a();
    }

    function a() {
        const ids = [];
        for(i of payload ) {
            for(const key in i) {
                ids.push(i[key])
            }}

        return articleState.filter(article => article.id !== payload.id)
    }

    return articleState
}

