import { Stack } from '@mui/material'
import Header from './components/Header'
import Discography from './components/Discography'
import ProfileSidebar from './components/ProfileSidebar'

function App() {
  return (
    <Stack direction={"column"} spacing={5} sx={{p: 2}}>
      <Header />
      <Stack direction={"row"} sx={{justifyContent: "space-between"}} >
        <Discography/>
        <ProfileSidebar/>
      </Stack>
    </Stack>
  )
}

export default App
