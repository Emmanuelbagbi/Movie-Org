const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b924ed3190bd3a919b9697bd6bb1a25b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;