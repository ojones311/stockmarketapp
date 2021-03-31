import React,{useState, useEffect} from 'react'
import axios from 'axios'
import secrets from '../secrets'

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
            let response = await axios.get(`https://cloud-sse.iexapis.com/stable/stock/${props.match.params.symbol}/news/last/3/?token=${secrets.iexKey}`)
            let newsData = response.data
            setStockNews(newsData)
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
        if(stockNews.length < 0){
            await fetchCompanyNews()
        }
        if(toggleNews){
            setToggleNews(false)
        }else if(!toggleNews){
            setToggleNews(true)
        }
    }
    useEffect(()=> {
        fetchStockInfo()
    },[])

    return (
        <div>
           <div className='stockInfo'>
                <h2>{stockData.companyName}</h2>
                <h4>{stockData.symbol}</h4>
                <a href={stockData.website}>{stockData.website}</a>
                <p>{stockData.description}</p>
           </div>
           <div className= 'more-info-button'>
                <button onClick={handleStockInformation}>More Info</button>
           </div>
           {moreInfo ? <div className='stock-stats'>
               <p>{'52 Week High: '}{stockStats.week52high}</p>
               <p>{'52 Week Low: '}{stockStats.week52low}</p>
               <p>{'YTD Change Percentage: '}{stockStats.ytdChangePercent}</p>
               <p>{'Market Cap: '}{stockStats.marketcap.toLocaleString()}</p>
           </div> : <div></div>}
           <div className='toggleNews-button'>
                <button onClick={handleStockNews}>Related News</button>
           </div>
        </div>
    )
}


export default StockPage