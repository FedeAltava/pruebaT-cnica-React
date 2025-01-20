import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'http://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'http://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const threeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`http://cataas.com/cat/says/${threeFirstWord}?size=50&color=red`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <main>
      <h1>APP de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='cat image' />}
    </main>
  )
}
