import { createStyles, Button, Center, Container, Grid, Loader, rem } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetArtistQuery } from '../store/artist/artist.api'
import ArtistDetail from '../components/ArtistDetail'
import TopTracksList from '../components/TopTracksList'
import AlbumsList from '../components/AlbumsList'

const useStyles = createStyles(theme => ({
  artistDetail: {
    borderRadius: theme.radius.lg,
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
  },
  carouselItem: {
    backgroundColor: theme.primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const ArtistPage = () => {
  const { classes } = useStyles()

  const { id } = useParams()

  const { data: artist, isFetching } = useGetArtistQuery(parseInt(id!))

  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Button
        onClick={goBack}
        variant="light"
        leftIcon={<IconChevronLeft />}
        mb={50}>
        BACK
      </Button>

      {isFetching && <Center><Loader /></Center>}

      {artist && <Grid gutter={40} align="stretch" p={10}>
        <Grid.Col sm={12} md={8} className={classes.artistDetail}>
          <ArtistDetail artist={artist} />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <TopTracksList artist={artist} />
        </Grid.Col>
        <Grid.Col sm={12}>
          <AlbumsList artist={artist} />
        </Grid.Col>
      </Grid>}
    </Container>
  )
}

export default ArtistPage
