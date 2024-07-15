import { useAtom } from "jotai"
import { darkAtom } from "../../atom"
import { Star } from "../star"

export const AnimatedTheme = () => {
  const [dark] = useAtom(darkAtom)

  return dark ? (
    <>
      <Star
        x={-1000}
        x_start={1000}
        delay={1000}
      />
      <Star
        x={-1500}
        x_start={1000}
        delay={2000}
      />
      <Star
        x={-2000}
        x_start={1000}
        delay={3000}
      />
      <Star
        x={-2500}
        x_start={1000}
        delay={4000}
      />
    </>
  ) : (
    <Star
      x={1000}
      x_start={-1000}
      delay={1000}
    />
  )
}