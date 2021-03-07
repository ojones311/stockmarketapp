
const apiURL = () => {
    if(window.location.hostname === 'localhost'){
        return `http://localhost:3100`
    }
}

export default apiURL()