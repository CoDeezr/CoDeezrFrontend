import { Container, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

const MainPage = () => {
  return (
    <Container>
      <TextInput
        icon={<IconSearch />}
        placeholder="Search tracks"
        size="xl" />
    </Container>
  )
}

export default MainPage
