import { useMemo } from 'react'
import useGeo from './useGeo'
import useTitle from './useTitle'
import Data from './Data'

const SouthAmericaCountries = ['CO', 'BR', 'AR']
const EuropeCountries = ['DE', 'CH']

export default function useData() {
  const geo = useGeo()
  const { noun } = useTitle()

  const language = useMemo(() => {
    let language = 'english'

    if (SouthAmericaCountries.some(country => country === geo.country_code))
      language = 'spanish'

    if (EuropeCountries.some(country => country === geo.country_code))
      language = 'deutsche'

    return language
  }, [geo])

  return useMemo(() => {
    return Data[language][noun]
  }, [language, noun])
}
