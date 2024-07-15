import { useSpring, animated } from '@react-spring/web'

interface AnimatedBoxProps {
  orientation_animation?: "left" | "right" | "top" | "bottom";
  delay: number;
  children?: React.ReactNode;
  className?: string;
}

export const AnimatedBox = (props: AnimatedBoxProps) => {
  const { children, orientation_animation, delay } = props

  const verify_orientation = () => {
    if (orientation_animation === "left" || orientation_animation === "right") {
      return {
        x: orientation_animation === "left" ? -100 : 100,
        y: 0
      }
    } else {
      return {
        x: 0,
        y: orientation_animation === "top" ? -100 : 100

      }
    }
  }

  const springs = useSpring({
    from: { opacity: 0, ...verify_orientation() },
    to: { opacity: 1, x: 0, y: 0 },
    config: { duration: delay }
  })

  return (
    <animated.div
      className={props.className}
      style={springs}
    >
      {children}
    </animated.div>
  )
}