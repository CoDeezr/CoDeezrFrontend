import { Card, Image, Text, Group, Badge, createStyles, rem, Stack } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconLink } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    // padding: theme.spacing.md,
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
  }
}))

const TrackItem = () => {
  const { classes } = useStyles()

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src="https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg"
          alt="Tesla Model S" />
      </Card.Section>

      <Stack mt="md" spacing={0} mb={30} align="start">
        <Text fw={500}>Curtain Call 2</Text>
        <Text color="dimmed" size="sm">Duration</Text>
        <Badge variant="outline">02:40</Badge>
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
                  Burna Boy
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
