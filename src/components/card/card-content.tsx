
interface CardContentProps {
  children: any
}

export const CardContent = (props: CardContentProps) => {
  const { children } = props
  return (
    <div
      className='w-full p-1'
    >
      {children}
    </div>
  )
}