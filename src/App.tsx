import { Stack } from '@mui/material'
import Header from './components/Header'

function App() {
  return (
    <Stack direction={"column"} spacing={5} sx={{p: 2}}>
      <Header />
    </Stack>
  )
}

export default App
