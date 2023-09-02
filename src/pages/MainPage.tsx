import { ActionIcon, Center, Container, Grid, Loader, Stack, TextInput, Text, Kbd } from '@mantine/core'
import { IconSearch, IconMusic } from '@tabler/icons-react'
import TrackItem from './TrackItem'
import { useGetTracksQuery } from '../store/track/track.api'
import { KeyboardEvent, useMemo, useState } from 'react'
import { MUSIC_GENRES } from '../constants/music-genres'

function getPseudoRandomMusicGenre(): string {
  const index = Math.floor(Math.random() * MUSIC_GENRES.length)
  return MUSIC_GENRES[index]
}

const MainPage = () => {
  const initialSearch = useMemo(getPseudoRandomMusicGenre, [])

  const [search, setSearch] = useState(initialSearch)

  const [input, setInput] = useState('')

  const { data: apiResponse, isFetching } = useGetTracksQuery({ search, index: 0 })

  const tracks = apiResponse?.data

  function updateSearch(event: KeyboardEvent<HTMLInputElement>) {
    const val = input.trim()
    if (event.key == 'Enter' && val) {
      setSearch(val)
    }
  }

  return (
    <Container pb={200}>
      <TextInput
        radius={100}
        icon={<IconMusic />}
        placeholder="Search tracks"
        size="xl"
        onChange={event => setInput(event.currentTarget.value)}
        onKeyDown={updateSearch}
        rightSection={<ActionIcon color="red" variant="filled" size="xl" radius={100}>
          {isFetching ? <Loader color="white" /> : <IconSearch />}
        </ActionIcon>} />
      <Text
        color="dimmed"
        mt={10}
        mb={50}
        size="xs">
        Press <Kbd>Enter</Kbd> to launch search
      </Text>
      {!isFetching && tracks !== null && !tracks?.length && <Center>
        <Text>No tracks found</Text>
      </Center>}
      {isFetching && tracks == null && <Center>
        <Stack align="center">
          <Loader size="xl" />
          <Text>Loading {initialSearch} tracks</Text>
        </Stack>
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
