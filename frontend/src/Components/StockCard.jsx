import React from 'react'
import '../Styles/StockCard.css'
//wanna use this comp across user homepaga and Landing page and maybe stock page

const StockCard = ({stock}) => {
    let {
        companyName,
        symbol,
        latestTime,
        close,
        changePercentage
    } = stock

    const determineColor = () => {
        if(changePercentage >= 0){
            return 'blue-card'
        }else {
            return 'red-card'
        }
    }
    return (
        <div className={'stock ' + determineColor()}>
            <h5>{companyName}</h5>
            <h5>{symbol}</h5>
            <p>{latestTime}</p>
            <p>{close}</p>
            <p>{changePercentage}</p>
        </div>
    )
}

export default StockCard