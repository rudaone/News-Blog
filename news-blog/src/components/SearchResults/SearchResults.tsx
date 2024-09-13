import { useDispatch, useSelector } from "react-redux"
import { IArticle, IStoreState } from "../../types"
import { Article } from "../Articles/Article"
import './SearchResults.css'
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { loadArticles } from "../redux/actionCreators/articlesActionCreators"
import { Pagination } from "../Pagination"

const SearchResults = () => {
    const articles = useSelector((state: IStoreState) => state.articles.articles)
    const limit = useSelector((state: IStoreState) => state.articles.limit)
    const currentPage = useSelector((state: IStoreState) => state.articles.currentPage)
    const search = new URLSearchParams(window.location.search)

    const dispatch = useDispatch()






    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        console.log(params.get('search'));
        dispatch(loadArticles({ limit, currentPage, search: params.get('search') }))
    }, [limit, currentPage])
console.log(articles)
    return (
        <>
            <div className="articles_main-wrap">
                <h1 className="articles_main-title">{`Search results "${search.get('search')}" `}</h1>
                <div className="articles_wrap">
                    {
                        articles.map((article: IArticle) =>
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
                            />)
                    }
                </div>
            </div>
            <Pagination/>
            <span className="searchresults-span">{`Found ${articles.length} books`}</span>

        </>

    )
}

export { SearchResults }