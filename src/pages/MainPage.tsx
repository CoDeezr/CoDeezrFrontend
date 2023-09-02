import { ActionIcon, Center, Container, Grid, Group, Loader, Pagination, Stack, TextInput, Text, Kbd } from '@mantine/core'
import { IconSearch, IconMusic } from '@tabler/icons-react'
import TrackItem from './TrackItem'
import { useGetTracksQuery } from '../store/track/track.api'
import { useMemo, useState } from 'react'
import { MUSIC_GENRES } from '../constants/music-genres'
import { Form, useForm } from '@mantine/form'

function getPseudoRandomMusicGenre(): string {
  const index = Math.floor(Math.random() * MUSIC_GENRES.length)
  return MUSIC_GENRES[index]
}

const MainPage = () => {
  const initialSearch = useMemo(getPseudoRandomMusicGenre, [])

  const form = useForm({
    initialValues: {
      search: '',
    },
    validate: {
      search: val => val.trim() ? null : 'Search term required',
    }
  })

  const [search, setSearch] = useState(initialSearch)

  const [page, setPage] = useState(1);

  const { data: apiResponse, isFetching } = useGetTracksQuery({ search, index: (page - 1) * 25 })

  const tracks = apiResponse?.data

  const total = apiResponse?.total

  function updateSearch({ search }: typeof form.values) {
    const val = search.trim()
    if (val) {
      setPage(0)
      setSearch(val)
    }
  }

  return (
    <Container pb={200}>
      <Form form={form} onSubmit={updateSearch} noValidate>
        <TextInput
          radius={100}
          icon={<IconMusic />}
          placeholder="Search tracks"
          size="xl"
          value={form.values.search}
          onChange={event => form.setFieldValue('search', event.currentTarget.value)}
          rightSection={<ActionIcon type="submit" color="red" variant="filled" size="xl" radius={100}>
            {isFetching ? <Loader color="white" /> : <IconSearch />}
          </ActionIcon>}
          error={form.errors.search} />
      </Form>
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
      {isFetching && <Center>
        <Stack align="center">
          <Loader size="xl" />
          <Text>Loading {form.values.search || initialSearch} tracks</Text>
        </Stack>
      </Center>}
      <Grid>
        {!isFetching && tracks !== undefined && tracks.map(track => (
          <Grid.Col key={track.id} xs={12} sm={6} md={4} lg={3}>
            <TrackItem track={track} />
          </Grid.Col>
        ))}
      </Grid>
      {/* second condition to avoid displaying '0' as textual content */}
      {total !== undefined && total > 0 && <Group mt={50} position="right">
        <Pagination
          value={page}
          total={Math.ceil(total / 25)}
          onChange={setPage} />
      </Group>}
    </Container>
  )
}

export default MainPage
