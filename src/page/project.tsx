import { Card } from "../components/card"
import { PageCommon } from "../components/common/page-common"
import srconsultoriaimobiliaria from "../../public/srconsultoriaimobiliaria.png"
import { ModalProject } from "../components/modal-projects"
import { useState } from "react"
export const Project = () => {
  const [projectName, setProjectName] = useState<any>("srconsultoriaimobiliaria")

  const [open, setOpen] = useState(false)
  return (
    <PageCommon>
      <ModalProject
        onClose={() => {
          setOpen(false)
        }}
        open={open}
        project_name={projectName}
      />
      <section
        className="w-full h-full  p-2 flex justify-evenly items-center flex-wrap px-16"
      >
        <Card.Root
          onClick={() => {
            setOpen(true)
            setProjectName("srconsultoriaimobiliaria")
          }}
        >
          <Card.Image src={srconsultoriaimobiliaria} />
          <Card.Content>
            <div
              className="w-full flex flex-wrap items-center"
            >
              <Card.Tech name="React" />
              <Card.Tech name="NestJS" />
              <Card.Tech name="TypeScript" />
            </div>
            <div
              className="w-full flex flex-col justify-center items-center"
            >
              <Card.Text
                text="SR Consultoria Imobiliária"
                type="title"
              />
              <div
                className="w-full flex justify-start items-center text-left"
              >
                <Card.Text
                  text="É um projeto um catalogo de imóveis, onde o usuário pode ver os imóveis disponíveis, e entrar em contato com a vendedora"
                  type="text"
                />
              </div>
            </div>
          </Card.Content>
        </Card.Root>
      </section>
    </PageCommon>
  )
}