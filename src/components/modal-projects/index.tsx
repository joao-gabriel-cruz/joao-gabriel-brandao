import { animated, useSpring } from "@react-spring/web"
import { Projects } from "../../@types/project"
import { projects } from "../../projects.ts"
import { IoClose } from "react-icons/io5"

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
      className="w-full h-screen justify-center items-center absolute bg-black bg-opacity-50 z-50"
    >
      <div
        className="w-[95%] h-[90%] bg-white flex justify-center items-center rounded-md"
      >
        <button
          onClick={props.onClose}
          className="absolute top-2 right-2 bg-white rounded-full hover:bg-gray-200 hover:shadow-lg hover:scale-105 duration-300"
        >
          <IoClose
            className="text-4xl text-red-500"
          />
        </button>
        {
          demostration ? (
            <div
              className="w-2/3 h-full flex justify-center items-center relative"
            >
              <img
                className="absolute w-[45%] h-[95%] top-5 rounded-l-md"
                src={"phone.png"}
              />
              <iframe
                seamless
                src={url}
                className="w-[41%] z-20 h-[75%] "
              />
            </div>
          ) :
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