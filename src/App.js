import { Helmet } from 'react-helmet'
// helpers
import useTitle from './helpers/useTitle'
import useData from './helpers/useData'

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

function App() {
  const data = useData()
  const { title } = useTitle()

  if (!data) return <h1>Invitation</h1>

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
          {title && <h3>{title}</h3>}
          {data.left.paragraph.map(text => {
            const regex = /href/
            if (text.search(regex) > 0) {
              let link = JSON.parse(text)
              return (
                <a href={link.href} target='_blank' rel='noreferrer'>
                  {link.text}
                </a>
              )
            }
            return <p key={Math.random() * 10}>{text}</p>
          })}
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
