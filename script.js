const googleDatabase = [
    'cats.com',
    'soup recipes.com',
    'flowers.com',
    'animals.com',
    'cat pictures.com',
    'my favourite cats.com',
    'my favourite cats2.com'
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter((website)=>{
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('soup'));