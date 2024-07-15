import { animated, useSpring } from "@react-spring/web"
import { Projects } from "../../@types/project"
import { projects } from "../../projects.ts"

interface ModalProjectProps {
  project_name: Projects
  open: boolean
  onClose: () => void
}

export const ModalProject = (props: ModalProjectProps) => {
  const { description, image, name, status, type, url } = projects[props.project_name]

  const demostration = status === "production" && type === "site"

  const { open } = props
  const springs = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'scale(1)' : 'scale(0)',
    display: open ? 'flex' : 'none',
  })

  return (
    <animated.div
      style={springs}
      className="w-full h-screen justify-center items-center absolute bg-black bg-opacity-50 "
    >
      <div
        className="w-[95%] h-[90%] bg-white flex justify-center items-center rounded-md"
      >
        {
          demostration ? <iframe
            src={url}
            className="w-[85%] h-full rounded-l-md"
          /> :
            <section
              className={`w-2/3 h-full flex-col justify-center items-center  `}
              style={{ backgroundImage: `url(${image})` }}
            >
              <img src={image} alt="project" className="w-full h-full" />
            </section>}
        <section
          className="w-1/3 h-full flex flex-col items-center p-4 text-center"
        >
          <h1
            className="text-3xl font-bold"
          >
            {name}
          </h1>
          <p
            className="text-lg"
          >
            {description}
          </p>

        </section>
      </div>
    </animated.div >
  )
}