import { useMemo } from 'react'

const useTitle = () => {
  const params = useMemo(() => {
    let tempParams = {}
    window.location.search
      .substr(1)
      .split('&')
      .forEach(function (item) {
        let tmp = item.split('=')
        tempParams[tmp[0]] = tmp[1]
      })

    return tempParams
  }, [])

  const [title, noun] = useMemo(() => {
    let title = ''
    let noun = 'singular'
    if (Object.keys(params).find(p => p === 'name')) {
      let name = params.name
      let sex = params.sex
      title += `Liebe${sex === 'm' ? 'r' : ''} ${name},`
    }

    if (Object.keys(params).find(p => p === 'names')) {
      let names = params.names.split(',')
      let sex = params.sex.split(',')
      console.log(names, sex)
      names.forEach(
        (n, i) => (title += `Liebe${sex[i] === 'm' ? 'r' : ''} ${n}, `)
      )
      noun = 'plural'
    }

    return [title, noun]
  }, [params])

  return { title, noun }
}

export default useTitle
