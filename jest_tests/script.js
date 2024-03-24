
//This function googleSearch, performs a search operation on a database (db)
// based on a given searchInput
//and returns 3 results at max
const googleSearch = (searchInput, db) => {
    const matches = db.filter((website)=>{
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

module.exports = {
    googleSearch
}
