interface CardImageProps {
  src: string
}

export const CardImage = (props: CardImageProps) => {
  const { src } = props
  return (
    <div
      className='w-full h-64 bg-cover bg-center bg-no-repeat rounded-t-md'
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  )
}