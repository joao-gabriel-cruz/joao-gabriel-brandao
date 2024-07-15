import { animated, useSpring } from "@react-spring/web"
import { darkAtom } from "../../atom";
import { useAtom } from "jotai";
import { CiSun } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";



export const Switch = () => {
  const [dark, setDark] = useAtom(darkAtom)
  const springs = useSpring({
    backgroundColor: dark ? "#2e2e2e" : "#fff",
  })

  const springs_button = useSpring({
    backgroundColor: !dark ? "#000" : "#fff",
    transform: dark ? "translateX(80%)" : "translateX(0%)",
  })

  return (
    <animated.button
      onClick={() => {
        setDark(!dark)
      }}
      style={springs}
      className="w-20  rounded-full flex items-center p-2 shadow-md "
    >
      <animated.button
        style={springs_button}

        className="p-2 rounded-full flex items-center justify-center "
      >
        {dark ? <IoMoon
          color="#000000"
          size={18}
        /> : <CiSun
          color="#fff"
          size={18}
        />}
      </animated.button>
    </animated.button>
  )
}