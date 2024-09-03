import { useDispatch, useSelector } from "react-redux"
import { IArticle, IBlog, IStoreState } from "../../types"
import { useEffect } from "react"
import { loadArticles } from "../redux/actionCreators/articlesActionCreators"
import { Blog } from "./Blog/Blog"
import './Blogs.css'
import { loadBlogs } from "../redux/actionCreators/blogsActionCreators"
import { Link } from "react-router-dom"
import { Sort } from "../Sort"

const Blogs = () => {

    const blogs = useSelector((state: IStoreState) => state.blogs.blogs)
    const limit = useSelector((state: IStoreState) => state.blogs.limit);
    const currentPage = useSelector((state: IStoreState) => state.blogs.currentPage);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBlogs({ limit, currentPage }))
    }, [limit, currentPage])

    const renderBlogs = () => {
        const cards = []
        for (let i = 0; i < blogs.length; i += 1) {
            cards.push(
                <>
                    {blogs.slice(i, i + 1).map((blog: IBlog) => (
                        <Blog
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            url={blog.url}
                            image_url={blog.image_url}
                            news_site={blog.news_site}
                            summary={blog.summary}
                            published_at={blog.published_at}
                            updated_at={blog.updated_at}
                            featured={blog.featured}

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
                <Link className="route-link" to={'/articles'}>  <div className="to-articles" >Articles</div></Link>
                <div className="to-blogs" >News</div>
            </div>
            <Sort />
            <div className="articles_wrap">
                {renderBlogs()}
            </div>

        </div>
    )
}


export { Blogs }