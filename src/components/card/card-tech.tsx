import { useSpring, animated } from '@react-spring/web'
import { darkAtom } from '../../atom'
import { useAtom } from 'jotai'

const tec = {
  "NestJS": {
    name: 'NestJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
  },
  "React": {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  "TypeScript": {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  },
  "JavaScript": {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  "HTML": {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  "CSS": {
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  "NodeJS": {
    name: 'NodeJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  "PostgreSQL": {
    name: 'PostgreSQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  "Docker": {
    name: 'Docker',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  },
  "Git": {
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  },
  "GitHub": {
    name: 'GitHub',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
  },
  "GitLab": {
    name: 'GitLab',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg'
  },
  "Linux": {
    name: 'Linux',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
  },
  "VSCode": {
    name: 'VSCode',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
  },
  "Trello": {
    name: 'Trello',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg'
  },
  "AWS": {
    name: 'AWS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg'
  },
}

interface CardTechProps {
  name: keyof typeof tec
}


export const CardTech = (props: CardTechProps) => {
  const [dark] = useAtom(darkAtom)

  const spring = useSpring({
    backgroundColor: props.name === 'GitHub' ? '#ccc' : dark ? '#222' : '#ccc',
    color: props.name === 'GitHub' ? '#000' : dark ? '#fff' : '#000',
  })

  return (
    <animated.div
      style={spring}
      className="flex items-center p-3 rounded-full h-8 m-1"
    >
      <img
        src={tec[props.name].image}
        alt={tec[props.name].name}
        className="w-6 h-6"
      />
      <p className="text-center ml-2">
        {tec[props.name].name}
      </p>
    </animated.div>
  )

}