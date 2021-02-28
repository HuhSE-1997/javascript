const getMovie = () =>{
    fetch("https://yts.mx/api/v2/list_movies.json").then(response =>{
        console.log(response)
        return response.json
    }).catch(e =>{
        console.log(`${e}si bal`)
    }).finally(()=>console.log("done project"))
}

// async, await 를 쓰는 이유는 then,catch,finally 같은 코드를 효율적이고 깔끔하게 코드를 간추릴 수 있기때문이다.
const getMovieAsync = async() =>{
    try{
        const [movieResponse, suggetResponse] =await Promise.all([
            fetch("https://yts.mx/api/v2/list_movies.json"),
            fetch("https://yts.mx/api/v2/movie_suggestions.json")
        ]);
        const [movie, suggest] = await Promise.all([
            movieResponse.json(),
            suggetResponse.json()
        ])
    }catch(e){
        console.log(`${e} sibal ah`)
    }finally{
        console.log("finally done")
    }
}

getMovieAsync()