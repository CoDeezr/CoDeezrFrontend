import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ArtistPage from './pages/ArtistPage'
import AppHeader from './components/AppHeader'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'colorScheme', defaultValue: 'light' })

  function toggleColorScheme() {
    setColorScheme(p => p == 'dark' ? 'light' : 'dark')
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: 'red',
        }}>
        <AppHeader toggleColorScheme={toggleColorScheme} />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='artist/:id' element={<ArtistPage />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
