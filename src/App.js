import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import Header from './components/Header'
import ChooseOptions from './components/ChooseOptions'
import { Container } from './components/styles/Container.styled'

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    accent: '#D94E3B'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <ChooseOptions />
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
