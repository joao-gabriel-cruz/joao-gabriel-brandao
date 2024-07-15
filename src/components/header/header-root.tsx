import { useSpring, animated } from '@react-spring/web'
import { darkAtom } from '../../atom';
import { useAtom } from 'jotai';
import { theme } from '../style/theme';


interface HeaderRootProps {
  children: React.ReactNode;
}

export const HeaderRoot = (props: HeaderRootProps) => {

  const [dark] = useAtom(darkAtom)

  const springs = useSpring({
    backgroundColor: !dark ? '#ccc8' : '#0005',
  })

  return (
    <animated.header
      style={springs}
      className="w-full p-2 flex items-center justify-between px-16">
      {props.children}
    </animated.header>
  )
}