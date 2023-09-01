import { Container, Grid, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import TrackItem from './TrackItem'

const MainPage = () => {
  return (
    <Container pb={200}>
      <TextInput
        icon={<IconSearch />}
        placeholder="Search tracks"
        size="xl"
        mb={50} />
      <Grid>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <TrackItem />
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <TrackItem />
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <TrackItem />
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <TrackItem />
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <TrackItem />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MainPage
