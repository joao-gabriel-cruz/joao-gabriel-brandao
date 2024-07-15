interface CardTextProps {
  text: string;
  type: "title" | "subtitle" | "text";
}

const verifyType = (type: "title" | "subtitle" | "text") => {
  switch (type) {
    case "title":
      return "text-2xl font-bold text-blue-500";
    case "subtitle":
      return "text-sm font-medium";
    case "text":
      return "text-ls font-medium";
    default:
      return "text-xl font-medium";
  }
}
export const CardText = (props: CardTextProps) => {
  const { text, type } = props;


  return (
    <p
      className={`text-xl ${verifyType(type)} text-center p-2`}
    >
      {text}
    </p>
  )
}