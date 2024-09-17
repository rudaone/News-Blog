import { Link } from "react-router-dom"
import { IArticle } from "../../../types"
import './Article.css'
const Article = ({ id, title, url, image_url, news_site, summary, published_at, updated_at, featured }: IArticle) => {

    const date = new Date(published_at);
    const monthName = date.toLocaleString('EN', { month: 'long' });
    const getDay = date.getDate()
    const getYear = date.getFullYear()
    const result = `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} ${getDay}, ${date.getFullYear()}`
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="article__wrap" onClick={scrollToTop}>
            <Link to={`/articles/${id}`} className="link__article">
                <div className="article__image-wrap">
                    <img src={image_url} className="article__image"></img>
                    <div className="article__image-color"></div>
                </div>
                <div className="article__info">
                    <div className="article__date">{result}</div>
                    <div className="article__title">{title}</div>
                </div>
            </Link>

        </div>)
}

export { Article}