import './SelectedPage.css';
import { useParams } from 'react-router-dom';
import { IStoreState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../Icons/Arrow';
import { useState } from 'react';
import { loadSelectedPage } from '../redux/actionCreators/articlesActionCreators';


const SelectedPage = () => {
    const { id = '' } = useParams();
    const selectedPage = useSelector((state: IStoreState) => state.articles.selectedPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSelectedPage(id))
    }, [])








    return (
        <div className='content__page-wrapper'>
            <span>Home / Post {selectedPage.id}</span>
            <div className='upper__wrapper'>
                <div className='content__page_header'>
                    <div className='content__page_header-menu'>
                        <Link to='/books' className='content__page_header-arrow'>
                            1
                        </Link>
                    </div>
                    <h3 className='content__page_header-title'>{selectedPage.title}</h3>
                </div>
                <div className='content__book-info'>
                    <div className='content__img-container'>
                        <img className="content__book-image" src={selectedPage.image_url} alt="img name" />
                    </div>
                    <div>{selectedPage.summary}</div>
                    <div className='content__book-infocard'>
                        <div className='price_rate-row'>
                        </div>
                        <div className='author-container'>
                            <div className='author'>Authors:</div>
                        </div>
                        <div className='publisher-container'>
                            <div className='publisher'>Publisher:</div>
                        </div>
                        <div className='year-container'>
                            <div className='year'>Year:</div>
                        </div>
                        <div className='page-container'>
                            <div className='page'>Pages:</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='middle__wrapper'>
                <div className='tabs'>
                </div>

                <div className='social__network'>
                    <Link to='https://www.facebook.com/'>
                    </Link>

                    <Link to='https://x.com/?lang=ru'>
                    </Link>

                    <Link className='dots' to=' '>
                        <span>•••</span>
                    </Link>
                </div>

            </div>



        </div>
    )
}

export { SelectedPage }