import { AnimatedBox } from "../components/animeted-box"
import { PageCommon } from "../components/common/page-common"


export const Home = () => {

  return (
    <PageCommon>
      <section
        className="w-full h-full p-2 flex justify-center item-center px-16"
      >
        <div
          className="w-full flex flex-col justify-center items-center"
        >
          <AnimatedBox
            orientation_animation="top"
            className={`w-40 h-40 bg-red-500 rounded-full bg-[url('profile.jpeg')] bg-cover bg-center bg-no-repeat`}
            delay={500}

          />
          <AnimatedBox
            className="mt-4"
            orientation_animation="bottom"
            delay={750}
          >
            <p
              className="text-center text-2xl font-bold"
            >
              João Gabriel Brandão
            </p>
          </AnimatedBox>
          <AnimatedBox
            className="w-1/2 mt-4"
            orientation_animation="bottom"
            delay={1000}
          >
            <p
              className="text-center text-lg font-medium"
            >
              Sou um desenvolvedor fullstack, estou trabalhando na area de desenvolvimento a mais de 2 anos, tenho conhecimento em diversas tecnologias, como React, Node, Tailwind, Node, NestJS, Postgres, serviços AWS entre outras.
            </p>
          </AnimatedBox>
        </div>
      </section>
    </PageCommon>
  )
}