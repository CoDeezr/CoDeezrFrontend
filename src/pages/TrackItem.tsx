import { Card, Image, Text, Group, Badge, createStyles, rem, Stack, Popover } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconLink } from '@tabler/icons-react'
import { Track } from '../model/track'
import { useDisclosure } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },

  artistLink: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7],
  },

  title: {
    maxWidth: '100%',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

function formatDuration(duration: number) {
  const minutes = Math.floor(duration / 60).toString().padStart(2, '0');
  const seconds = (duration % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

const TrackItem = ({ track }: { track: Track }) => {
  const { classes } = useStyles()

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={track.album.cover_medium}
          alt={track.album.title} />
      </Card.Section>

      <Stack mt="md" spacing={0} mb={30} align="start">
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
          <Popover.Target>
            <Text className={classes.title} onMouseEnter={open} onMouseLeave={close}>
              {track.title}
            </Text>
          </Popover.Target>
          <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
            <Text size="sm">{track.title}</Text>
          </Popover.Dropdown>
        </Popover>
        <Text color="dimmed" size="sm">Duration</Text>
        <Badge variant="outline">{formatDuration(track.duration)}</Badge>
      </Stack>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mb={3}>
              Artist
            </Text>
            <Link to={`/artist/13`} className={classes.artistLink}>
              <Group spacing={5}>
                <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                  {track.artist.name}
                </Text>
                <IconLink size={20} />
              </Group>
            </Link>
          </div>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default TrackItem
