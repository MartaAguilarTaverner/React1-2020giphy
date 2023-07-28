const apiKey ='xQVFsM4Qm7be08gapnkuh4c61DhTXpF4';

export default function getGifs ({keyword = 'mapache'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=40&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  return fetch(apiURL)
  .then(res => res.json())
  .then(response => {
    const {data = []} = response;
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } =  images.fixed_height
        return { title, id, url }
      })
      return gifs
    }
  })
}