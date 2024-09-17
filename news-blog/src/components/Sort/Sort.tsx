import './Sort.css'

import { useState } from 'react'
import { IArticle, IStoreState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { sortingArticles } from '../redux/actionCreators/articlesActionCreators'
import { log } from 'console'
import { sortingBlogs } from '../redux/actionCreators/blogsActionCreators'

const Sort = () => {
    const articles = useSelector((state: IStoreState) => state.articles.articles)
    const blogs = useSelector((state: IStoreState) => state.blogs.blogs)
    const dispatch = useDispatch()

    const [activeTab, setActiveTab] = useState('day');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };


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
                return a.title.localeCompare(b.title);
            })))

        } if (type === 'az') {
            dispatch(sortingBlogs([...blogs].sort((a, b) => {
                return a.title.localeCompare(b.title);
            })))

        } if (type === 'za') {
            dispatch(sortingBlogs([...blogs].sort((b, a) => {
                return a.title.localeCompare(b.title);
            })))
        }
    }

    return (
        <div className="wrap">

            <div className='tabs'>
                <button
                    className={activeTab === 'sort-day' ? 'active' : ''}
                    onClick={() => handleTabClick('sort-day')}>
                    Day
                </button>
                <button
                    className={activeTab === 'sort-week' ? 'active' : ''}
                    onClick={() => handleTabClick('sort-week')}>
                    Week
                </button>
                <button
                    className={activeTab === 'sort-month' ? 'active' : ''}
                    onClick={() => handleTabClick('sort-month')}>
                    Month
                </button>
                <button
                    className={activeTab === 'sort-year' ? 'active' : ''}
                    onClick={() => handleTabClick('sort-year')}>
                    Year
                </button>
            </div>
            <div className='tab-content'>
                {activeTab === 'sort-day' && <p>dday</p>}
                {activeTab === 'sort-week' && <p>wweek</p>}
                {activeTab === 'sort-month' && <p>mmonth</p>}
                {activeTab === 'sort-year' && <p>yyear</p>}
            </div>

            <div className="sort__title">
                <span style={{ color: '#31303780' }}> Sort: </span>

                <select className='select-az' name="cars" id="cars" onChange={(e) => sortOnChange(e)}>
                    <option className='az' value="Sort by...">Sort by...</option>
                    <option className='az' value="az">Title (A-Z)</option>
                    <option className='az' value="za">Title (Z-A)</option>
                </select>
            </div>
        </div>
    )

}

export { Sort }