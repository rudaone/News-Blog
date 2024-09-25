import { useDispatch, useSelector } from 'react-redux'
import './Pagination.css'
import { IStoreState } from '../../types'
import { setCurrentPage } from '../../components/redux/actionCreators/articlesActionCreators'
import { Arrow } from '../Icons/Arrow'

const Pagination = () => {
    const dispatch = useDispatch()
    const { currentPage } = useSelector((state: IStoreState) => state.articles)

    return (
        <div className='pagination__wraper'>
            <button onClick={() => dispatch(setCurrentPage(currentPage - 1))} disabled={currentPage === 1}
                className="back">
                <Arrow isLeft={true}
                    className='pagination_arrow-left'
                    disabled={currentPage === 1}
                />
            </button>

            <div className='currentpage__wrapper'>
                <button
                    className={`first`}
                    onClick={() => dispatch(setCurrentPage(currentPage-1))}
                    disabled={currentPage === 1}>
                    {currentPage-1}
                </button>
                <button
                    className={`second`}
                    onClick={() => dispatch(setCurrentPage(currentPage))}>
                    {currentPage}
                </button>

                <button
                    className={`third`}
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                    {currentPage + 1}
                </button>
            </div>



            <button onClick={() => dispatch(setCurrentPage(currentPage + 1))} className="next">
                <Arrow isLeft={false}
                className='pagination_arrow-right'
                disabled={currentPage === 1}
            /></button>
        </div>

    )
}


export { Pagination }