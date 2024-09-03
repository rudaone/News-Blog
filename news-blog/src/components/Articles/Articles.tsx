import { useDispatch, useSelector } from "react-redux"
import { IArticle, IStoreState } from "../../types"
import { useEffect } from "react"
import { loadArticles } from "../redux/actionCreators/articlesActionCreators"
import { Article } from "./Article/Article"
import './Articles.css'
import { Link } from "react-router-dom"
import { Sort } from "../Sort"

const Articles = () => {

    const articles = useSelector((state: IStoreState) => state.articles.articles)
    const limit = useSelector((state: IStoreState) => state.articles.limit);
    const currentPage = useSelector((state: IStoreState) => state.articles.currentPage);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadArticles({ limit, currentPage }))
    }, [limit, currentPage])

    const renderArticles = () => {
        const cards = []
        for (let i = 0; i < articles.length; i += 1) {
            cards.push(
                <>
                    {articles.slice(i, i + 1).map((article: IArticle) => (
                        <Article
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            url={article.url}
                            image_url={article.image_url}
                            news_site={article.news_site}
                            summary={article.summary}
                            published_at={article.published_at}
                            updated_at={article.updated_at}
                            featured={article.featured}

                        />
                    ))
                    }
                </>
            )
        }
        return cards;
    }


    return (
        <div className="articles_main-wrap">
            <h1 className="articles_main-title">Blog</h1>
            <div className="pages-link">
                <div className="link__to-articles" >Articles</div>
                <Link className="route-link" to={'/blogs'}><div className="link__to-blogs" >Blogs</div></Link>
                
                </div>
                <Sort/>
            <div className="articles_wrap">
                {renderArticles()}
            </div>

        </div>
    )
}


export { Articles }