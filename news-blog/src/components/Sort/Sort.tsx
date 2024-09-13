import './Sort.css'


const Sort = () => {

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

                <select className='select-az' name="cars" id="cars">
                    <option className='option-1' value="volvo">Title (A-Z)</option>
                    <option value="saab">Title (Z-A)</option>
                </select>
            </div>
        </div>
    )

}

export { Sort }