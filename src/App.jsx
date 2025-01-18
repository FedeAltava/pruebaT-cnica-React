import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'http://catfact.ninja/fact'
export function App () {
  const [fact, setFact] = useState('lorem ipsum gcat fact whatever')
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => setFact(data.fat))
  })
  return (
    <main>
      <h1>APP de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
