import { useAtom } from "jotai"
import { Link, useLocation } from "react-router-dom"
import { darkAtom } from "../../atom"
import { useSpringValue, animated } from "@react-spring/web"
import { useEffect } from "react";
import { colorPalette } from "../style/theme";

interface LinkNavProps {
  to: string;
  name: string;

}

export const LinkNav = (props: LinkNavProps) => {
  const location = useLocation()
  const [dark] = useAtom(darkAtom)
  const width = useSpringValue("0%")
  const color = useSpringValue(!dark ? colorPalette.lightMode.textPrimary : colorPalette.darkMode.textPrimary)

  useEffect(() => {
    if (location.pathname === props.to) {
      width.start("100%")
      color.start("#3b82f6")
    } else {
      width.start("0%")
      color.start(!dark ? colorPalette.lightMode.textPrimary : colorPalette.darkMode.textPrimary)
    }
  }, [location.pathname, dark])


  return (
    <Link to={props.to}
    >
      <div
        className="flex flex-col items-center justify-center"
      >
        <animated.p
          style={{ color }}
          className={`text-xl font-bold`}
        >
          {props.name}
        </animated.p>
        <animated.hr
          style={{ width }}
          className={`h-1 bg-blue-500 `}
        />
      </div>
    </Link>
  )
}
