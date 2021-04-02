import React,{useState, useEffect} from 'react'
import axios from 'axios'
import secrets from '../secrets'
import '../Styles/StockPage.css'

const StockPage = (props) => {
    const [stockData, setStockData] = useState({})
    const [stockStats, setStockStats] = useState({})
    const [stockNews, setStockNews] = useState([])

    const [moreInfo, setMoreInfo] = useState(false)
    const [toggleNews, setToggleNews] = useState(false)

    const fetchStockInfo = async () => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/company/?token=${secrets.iexKey}`)
            let stockInfo = response.data
            setStockData(stockInfo)
            console.log(stockInfo)

        }catch(error){
            console.log('err', error)
        }
    }

    const fetchStockStats = async () => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/stats/?token=${secrets.iexKey}`)
            let data = response.data
            setStockStats(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    const fetchCompanyNews = async () => {
        try{
            let response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/news/last/3/?token=${secrets.iexKey}`)
            let newsData = response.data
            setStockNews(newsData)
            console.log(newsData)
        }catch(error){
            console.log(error)
        }
    }
    const handleStockInformation = async () => {
        if(Object.keys(stockStats).length === 0){
            await fetchStockStats()
        }
        if(moreInfo){
            setMoreInfo(false) 
        }else if(!moreInfo){
            setMoreInfo(true)
        }
    }

    const handleStockNews = async () => {
        if(stockNews.length < 1){
            await fetchCompanyNews()
        }
        if(toggleNews){
            setToggleNews(false)
        }else if(!toggleNews){
            setToggleNews(true)
        }
    }

    const truncateNumber = (num) => {
       return Number.parseFloat(num).toFixed(4)
    }

    useEffect(()=> {
        fetchStockInfo()
    },[])

    return (
        <div className='stock-page'>
           <div className='stockInfo'>
                <h2>{stockData.companyName}</h2>
                <h4>{stockData.symbol}</h4>
                <a href={stockData.website}>{stockData.website}</a>
                <p>{stockData.description}</p>
           </div>
           <div className= 'more-info-button'>
                <button onClick={handleStockInformation}>Show Financials</button>
           </div>
        
           {moreInfo ? <div className='stock-stats'>
               <p><b>{'52 Week High: '}</b>{stockStats.week52high}</p>
               <p><b>{'52 Week Low: '}</b>{stockStats.week52low}</p>
               <p><b>{'YTD Change Percentage: '}</b>{truncateNumber(stockStats.ytdChangePercent)}</p>
               <p><b>{'Price to Earnings Ratio: '}</b>{truncateNumber(stockStats.peRatio)}</p>
               <p><b>{'Market Cap: '}</b>{stockStats.marketcap.toLocaleString()}</p>
           </div> : <div></div>}
           <div className='toggleNews-button'>
                <button onClick={handleStockNews}>Show Related News</button>
           </div>

           {toggleNews ? stockNews.map((article) => {
               return (
                 <div >
                     <h5>{article.source}</h5>
                     <a href={article.url}>{article.headline}</a>
                     <p>{article.summary}</p>
                </div>
               )
           }): <div></div>}
        </div>
    )
}


export default StockPage