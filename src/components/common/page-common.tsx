import { useAtom } from "jotai";
import { Header } from "../header"
import { useSpring, animated } from '@react-spring/web'
import { darkAtom } from "../../atom";
import { colorPalette } from "../style/theme";
import { Switch } from "../switch";
import { LinkNav } from "../nav-link";

interface PageCommonProps {
  children: any
}

export const PageCommon = (props: PageCommonProps) => {
  const [dark] = useAtom(darkAtom)

  const springs = useSpring({
    color: !dark ? colorPalette.lightMode.textPrimary : colorPalette.darkMode.textPrimary,
    backgroundColor: dark ? colorPalette.darkMode.background : colorPalette.lightMode.background,
  })

  return (
    <animated.div
      className={`w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat`}
      style={springs}
    >
      <Header.Root>
        <div
          className="w-full flex items-center"
        >
          <h1 className="text-2xl font-bold">
            João Gabriel Brandão
          </ h1>
        </div>
        <nav
          className="flex items-center"
        >
          <ul
            className="flex space-x-4 mx-4"
          >
            <LinkNav to="/" name="Home" />
            <LinkNav to="/project" name="Projetos" />
            <LinkNav to="/contact" name="Contact" />

          </ul>
          <Switch />
        </nav>
      </Header.Root>
      {/* <AnimatedTheme /> */}

      {props.children}
    </animated.div>
  )
}