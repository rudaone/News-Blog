import { Link } from "react-router-dom"
import { IBlog } from "../../../types"
import './Blog.css'
const Blog = ({ id, title, url, image_url, news_site, summary, published_at, updated_at, featured }: IBlog) => {

    const date = new Date(published_at);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const getDay = date.getDate()

    console.log(monthName)
    return (
        <div className="article__wrap">
            <div className="article__image-wrap">
                <img src={image_url} className="article__image"></img>
                <div className="article__image-color"></div>
            </div>
            <div className="article__date">{monthName}{getDay}</div>
            <div className="article__title">{title}</div>

        </div>)
}

export { Blog }