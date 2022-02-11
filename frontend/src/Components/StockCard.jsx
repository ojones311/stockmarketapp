import React from 'react'
import '../Styles/StockCard.css'
//wanna use this comp across user homepaga and Landing page and maybe stock page

const StockCard = ({stock}) => {
    let {
        companyName,
        symbol,
        latestTime,
        close,
        changePercent
    } = stock

    const determineColor = () => {
        if(changePercent >= 0){
            return {color:'blue'}
        }else {
            return {color:'red'}
        }
    }

    return (
        <div className={'stock'}>
            <h5>{companyName}</h5>
            <h5>{symbol}</h5>
            <p>{latestTime}</p>
            <p style={determineColor()}>{close}</p>
            <p style={determineColor()}>{changePercent}</p>
        </div>
    )
}

export default StockCard