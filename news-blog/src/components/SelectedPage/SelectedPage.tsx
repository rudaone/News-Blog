import './SelectedPage.css';
import { useParams } from 'react-router-dom';
import { IStoreState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../Icons/Arrow';
import { useState } from 'react';
import { loadSelectedPage } from '../redux/actionCreators/articlesActionCreators';
import { Facebook } from '../Icons/Facebook';
import { Twitter } from '../Icons/Twitter';
import { url } from 'inspector';
import { select } from 'redux-saga/effects';
import { traceDeprecation } from 'process';


const SelectedPage= () => {
    const { id = '' } = useParams();
    const selectedPage = useSelector((state: IStoreState) => state.articles.selectedPage)
    const SelectedPageBlog = useSelector((state: IStoreState) => state.blogs.selectedPage)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSelectedPage(id))
    }, [])







    return (
        <div className='selected-page__wrap'>
            <span className='selected-page__id'><Link to={'/articles'} style={{textDecoration:'none', color:'black'}}>Home</Link> <span className='id__number'>/ Post {selectedPage.id}</span></span>
            <h1 className='selected-page__title'>{selectedPage.title}</h1>
            <div className='selected-page__wrap__img'>
                <img className='selected-page__img' src={selectedPage.image_url} alt="article-image" />
                <div className="selected-page__image-color"></div>
            </div>
            <div className='selected-page__text'>
                {selectedPage.summary}
                <div className='selected-page__links'>
                    <Link className='link-style' to='https://www.facebook.com/'>
                        <div className='link'>
                            <Facebook />
                        </div>
                    </Link>

                    <Link className='link-style' to='https://x.com/?lang=ru'>
                        <div className='link'>
                            <Twitter />
                        </div>
                    </Link>

                    <Link className='link-style' to={selectedPage.url}>
                        <div className='dots-link'>
                            •••
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    )
}

export { SelectedPage }