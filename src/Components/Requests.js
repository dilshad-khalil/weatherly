const Requests = {
    WeatherForecast: {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: '', days: '3' },
        headers: {
            'X-RapidAPI-Key': '74f35d5dc5msh8250a5da3932200p17b4ccjsn5942855a20e0',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
}


export default Requests;