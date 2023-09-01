import { createStyles, Center, Group, Header, rem, Text, UnstyledButton, useMantineColorScheme } from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { IconMoon, IconSun } from '@tabler/icons-react'

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  titleLeftPart: {
    color: theme.colors.red[0],
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },

  titleRightPart: {
    color: theme.colors.red[2],
    fontWeight: 'bold',
  },

  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: rem(4),
    width: rem(136),
    height: rem(36),
  },

  iconWrapper: {
    height: rem(28),
    width: rem(28),
    borderRadius: rem(28),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
    color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}))

const AppHeader = ({ toggleColorScheme }: { toggleColorScheme: () => void }) => {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? IconSun : IconMoon;

  return (
    <Header height={72} className={classes.header} mb={100}>
      <Group position="center" px={20}>
        <Group spacing={0}>
          <Text size={30} className={classes.titleLeftPart}>Co</Text>
          <Text size={30} className={classes.titleRightPart}>Deezr</Text>
        </Group>
        <Group position="center" my="xl">
        <UnstyledButton
          aria-label="Toggle theme"
          className={classes.control}
          onClick={toggleColorScheme}
        >
          <Text size="sm" className={classes.value}>
            {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} theme
          </Text>

          <Center className={classes.iconWrapper}>
            <Icon size="1.05rem" stroke={1.5} />
          </Center>
        </UnstyledButton>
      </Group>
      </Group>
    </Header>
  )
}

export default AppHeader
