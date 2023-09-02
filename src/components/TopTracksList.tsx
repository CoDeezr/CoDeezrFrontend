import { Artist } from '../model/artist'
import { Badge, Loader, Table, Text } from '@mantine/core'
import { useGetTopTracksQuery } from '../store/artist/artist.api'
import { formatDuration } from '../lib/time.lib'

const TopTracksList = ({ artist }: { artist: Artist }) => {
  const { data: apiResponse, isFetching } = useGetTopTracksQuery(artist.id)

  const tracks = apiResponse?.data

  return (
    <div>
      <Text size="xl" weight={500} mb={20}>Top tracks</Text>

      {isFetching && <Loader />}

      {tracks !== undefined && tracks.length == 0 && <Text>No top track found</Text>}

      <Table>
        <tbody>
          {tracks !== undefined && tracks.map((track, i) => <tr key={track.id}>
            <td>
              <Badge variant="filled">{i + 1}</Badge>
            </td>
            <td>
              <Text>{track.title}</Text>
            </td>
            <td>
              <Badge>{formatDuration(track.duration)}</Badge>
            </td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default TopTracksList
