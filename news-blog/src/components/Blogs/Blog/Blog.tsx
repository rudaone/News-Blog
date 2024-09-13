import { Link } from "react-router-dom"
import { IBlog } from "../../../types"
import './Blog.css'
const Blog = ({ id, title, url, image_url, news_site, summary, published_at, updated_at, featured }: IBlog) => {

    const date = new Date(published_at);
    const monthName = date.toLocaleString('EN', { month: 'long' });
    const getDay = date.getDate()
    const result = `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} ${getDay}, ${date.getFullYear()}`
    console.log(result)
    return (
        <div className="article__wrap">
            <Link to={`/blogs/${id}`} className="link__article">
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

export { Blog }