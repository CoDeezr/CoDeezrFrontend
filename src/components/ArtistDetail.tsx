import { Badge, Grid, Group, Image, Text } from '@mantine/core'
import { Artist } from '../model/artist'
import { IconHeart } from '@tabler/icons-react'

const ArtistDetail = ({ artist }: { artist: Artist }) => {
  return (
    <Grid align='center'>
      <Grid.Col sm={12} md={8}>
        <Text size="xl" mb={20} weight={500}>{artist?.name}</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aut, ipsam sit et consequuntur quibusdam maiores accusamus culpa, provident quidem a non exercitationem, id esse ducimus laboriosam? Eveniet, quidem? Repudiandae.
        </Text>
        <Badge size="xl" mt={20}>
          <Group>
            <IconHeart />
            <Text>{Intl.NumberFormat().format(artist.nb_fan)}</Text>
          </Group>
        </Badge>
      </Grid.Col>
      <Grid.Col sm={12} md={4}>
        <Image radius={20} src={artist?.picture_medium} />
      </Grid.Col>
    </Grid>
  )
}

export default ArtistDetail
