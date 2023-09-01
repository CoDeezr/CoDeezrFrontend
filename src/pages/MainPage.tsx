import { Center, Container, Grid, Loader, TextInput, Text, Kbd } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import TrackItem from './TrackItem'
import { useGetTracksQuery } from '../store/track/track.api'
import { KeyboardEvent, useState } from 'react'

const MainPage = () => {
  const [input, setInput] = useState('eminem')

  const [search, setSearch] = useState('eminem')

  const { data: apiResponse, isFetching } = useGetTracksQuery({ search, index: 0 })

  const tracks = apiResponse?.data

  function updateSearch(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      setSearch(input);
    }
  }

  return (
    <Container pb={200}>
      <TextInput
        icon={<IconSearch />}
        placeholder="Search tracks"
        size="xl"
        rightSection={isFetching ? <Loader /> : null}
        onChange={event => setInput(event.currentTarget.value)}
        onKeyDown={updateSearch} />
      <Text
        color="dimmed"
        mt={10}
        mb={50}
        size="xs">
        Press <Kbd>Enter</Kbd> to launch search
      </Text>
      {tracks !== null && !tracks?.length && <Center>
        <Text>No tracks found</Text>
      </Center>}
      <Grid>
        {tracks !== null && tracks?.map(track => (
          <Grid.Col key={track.id} xs={12} sm={6} md={4} lg={3}>
            <TrackItem track={track} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default MainPage
