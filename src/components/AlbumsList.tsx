import { formatDate } from '../lib/time.lib'
import { Artist } from '../model/artist'
import { useGetAlbumsQuery } from '../store/artist/artist.api'
import { Carousel } from '@mantine/carousel'
import { createStyles, Loader, Paper, Title, Text, rem } from '@mantine/core'

const useStyles = createStyles(theme => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
    textShadow: "3px 3px 10px gray",
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
    textShadow: "3px 3px 10px gray",
  },
}))

const AlbumsList = ({ artist }: { artist: Artist }) => {
  const { classes } = useStyles()

  const { data: apiResponse, isFetching } = useGetAlbumsQuery(artist.id);

  const albums = apiResponse?.data

  return (
    <>
      <Text size="xl" weight={500} mt={80} mb={20}>Albums</Text>

      {isFetching && <Loader />}

      {albums !== undefined && albums.length == 0 && <Text>No album found</Text>}

      {albums !== undefined && albums.length > 0 && <Carousel
        withIndicators
        loop
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xs"
        align="start"
        mb={100}>
        {albums.map(album => <Carousel.Slide key={album.id}>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${album.cover_medium})` }}
            className={classes.card} >
            <div>
              <Title order={3} className={classes.title}>
                {album.title}
              </Title>
              <Text className={classes.category} size="xs">
                {formatDate(album.release_date)}
              </Text>
            </div>
          </Paper>
        </Carousel.Slide>)}
      </Carousel>}
    </>
  )
}

export default AlbumsList
