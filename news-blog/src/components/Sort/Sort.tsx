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
              <span style={{color:'#31303780'}}> Sort: <span>Title</span></span>
                <select name=""></select>
            </div>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
               {/* <br><br>
                    <input type="submit" value="Submit">*/}
        </div>
    )

}

export {Sort}