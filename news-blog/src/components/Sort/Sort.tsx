import './Sort.css'

import { IArticle, IStoreState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { loadArticles, setArticles, sortingArticles } from '../redux/actionCreators/articlesActionCreators'
import { log } from 'console'
import { sortingBlogs } from '../redux/actionCreators/blogsActionCreators'
import { useEffect } from 'react'

const Sort = () => {
    const articles = useSelector((state: IStoreState) => state.articles.articles)
    const blogs = useSelector((state: IStoreState) => state.blogs.blogs)
    const dispatch = useDispatch()




    const sortOnChange = (e: any
    ) => {
        const type = e.target.value;    

        if (type === 'az') {
            dispatch(sortingArticles([...articles].sort((a, b) => {
                return a.title.localeCompare(b.title);
            })))
        }
        if (type === 'za') {
            dispatch(sortingArticles([...articles].sort((b, a) => {
                console.log(sortingArticles)
                return a.title.localeCompare(b.title);
            })))

        }if (type === 'az') {
            dispatch(sortingBlogs([...blogs].sort((a, b) => {
                return a.title.localeCompare(b.title);
            })))

        }if (type === 'za') {
            dispatch(sortingBlogs([...blogs].sort((b, a) => {
                return a.title.localeCompare(b.title);

            })))
        }
    }

    return (
        <div className="wrap">
            <div className="wrap__sort-date">
                <button className="sort-day">Day</button>
                <button className="sort-week">Week</button>
                <button className="sort-month">Month</button>
                <button className="sort-year">Year</button>
            </div>
            <div className="sort__title">
                <span style={{ color: '#31303780' }}> Sort: </span>

                <select className='select-az' name="cars" id="cars" onChange={(e) => sortOnChange(e)}>
                    <option className='az' value="az">Title (A-Z)</option>
                    <option className='az' value="za">Title (Z-A)</option>
                </select>
            </div>
        </div>
    )

}

export { Sort }