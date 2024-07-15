import { useSpring, animated } from '@react-spring/web'


interface StarProps {
  x: number;
  x_start: number;
  delay: number;
}

export const Star = (props: StarProps) => {
  const { x, x_start } = props
  const springs = useSpring({

    from: {
      width: 1, height: 1,
      opacity: 0, x: x_start, y: -1000
    },
    to: {
      opacity: 1, x, y: 1000,
      width: 5, height: 5

    },
    config: { duration: 500 },
    delay: props.delay,
    loop: true
  })

  return (
    <animated.div
      style={springs}
      className="bg-white rounded-full absolute" />
  )
}