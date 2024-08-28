import { useDispatch, useSelector } from 'react-redux'
import './Pagination.css'
import { IStoreState } from '../../types'
import { setCurrentPage } from '../redux/actionCreators'

const Pagination = () => {
    const dispatch = useDispatch()
    const { currentPage } = useSelector((state: IStoreState) => state.articles)

    return (
        <div className='pagination__wraper'>
            <button onClick={() => dispatch(setCurrentPage(currentPage - 1))} disabled={currentPage === 1}
                className="back">Prew</button>

            <div className='currentpage__wrapper'>
                <span
                    className={`first`}
                    onClick={() => dispatch(setCurrentPage(currentPage))}>
                    {currentPage}
                </span>
                <span
                    className={`second`}
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                    {currentPage + 1}
                </span>   
                
                <span
                    className={`first`}
                    onClick={() => dispatch(setCurrentPage(currentPage + 2))}>
                    {currentPage + 2}
                </span>
                {/* <span className='second'>
                    {currentPage}
                </span>
                <span className={`third`}
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                    {/* {currentPage !== && currentPage + 1} */}
                {/* </span> */}
            </div>



            <button onClick={() => dispatch(setCurrentPage(currentPage + 1))} className="next">Next</button>
        </div>

    )
}


export { Pagination }