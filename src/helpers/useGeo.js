import { useState, useEffect } from 'react'

const URL = 'https://ip.nf/me.json'

export default function useGeo() {
  const [geo, setGeo] = useState({})

  useEffect(() => {
    fetch(URL, { method: 'get' })
      .then(res => res.json())
      .then(data => setGeo(data.ip))
  }, [])

  return geo
}
