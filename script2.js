const getData = async ()=>{
    try
    {
        // API call to swapi.dev
        let response = await fetch('https://swapi.dev/api/people');
        let data = await response.json();
        return {
            count: data.count,
            results: data.results
        };
    }
    catch(error)
    {
        console.log(error.message);
    }
}

module.exports = {
    getData
}
