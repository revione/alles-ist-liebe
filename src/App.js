import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import {
  Main,
  MainContainer,
  Left,
  Right,
  ContainerSeparator2,
  DateContent,
  NamesContent
} from './styles'
import { ReactComponent as Separator1 } from './assets/separator1.svg'
import { ReactComponent as Separator2 } from './assets/separator2.svg'
import Leones from './assets/leones.png'

const Data = {
  spanish: {
    left: {
      title: 'Querida Familia',
      paragraph: [
        'Bienvenidos a nuestra fiesta de boda.',
        'Queremos compartir con ustedes nuestra alegria y amor.',
        'Los esperamos.'
      ],
      list: {
        title: 'Lista de regalos:',
        items: ['Plantas para casa', 'Dinero para Luna de miel']
      }
    }
  },
  english: {},
  deutsche: {}
}

function App() {
  const [Language, setLanguage] = useState('spanish')
  const [data, setData] = useState({})

  useEffect(() => {
    setData(Data[Language])
  }, [Language])

  if (Object.keys(data).length === 0) return <h1>Invitation</h1>

  return (
    <Main>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Invitation</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Parisienne&display=swap'
          rel='stylesheet'
        />
      </Helmet>

      <MainContainer>
        <Left>
          <h2>{data.left.title}</h2>
          {data.left.paragraph.map(text => (
            <p key={Math.random() * 10}>{text}</p>
          ))}

          <ul>
            {data.left.list.items.map(item => (
              <li key={Math.random() * 10}>{item}</li>
            ))}
          </ul>
        </Left>
        <ContainerSeparator2>
          <Separator2 />
        </ContainerSeparator2>
        <Right>
          <h1>Alles ist Liebe</h1>
          <div>
            <Separator1 />
          </div>
          <NamesContent>REVI & MAY</NamesContent>
          <DateContent>JULY, 3 2021</DateContent>
          <img src={Leones} alt='Leones' />
        </Right>
      </MainContainer>
    </Main>
  )
}

export default App
