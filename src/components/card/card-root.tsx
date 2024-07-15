import { useSpring, animated } from '@react-spring/web'
import { darkAtom } from '../../atom'
import { useAtom } from 'jotai'
import { colorPalette } from '../style/theme'
import { AnimatedBox } from '../animeted-box'

interface CardRootProps {
  children: any
  onClick?: () => void
}

export const CardRoot = (props: CardRootProps) => {
  const { children, onClick } = props
  const [dark] = useAtom(darkAtom)
  const springs = useSpring({
    borderColor: !dark ? colorPalette.lightMode.border : colorPalette.darkMode.border,
    backgroundColor: dark ? colorPalette.darkMode.backgroundSecondary : colorPalette.lightMode.backgroundSecondary,
  })

  return (
    <AnimatedBox
      delay={500}
      orientation_animation="bottom"
    >
      <animated.div
        style={springs}
        onClick={onClick}
        className='w-96 border-2 rounded-md cursor-pointer hover:shadow-lg hover:scale-105 duration-300'
      >
        {children}
      </animated.div>
    </AnimatedBox>
  )
}