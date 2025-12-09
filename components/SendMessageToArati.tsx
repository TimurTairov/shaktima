import { HiPencilSquare } from "react-icons/hi2";

const SendMessageToArati = () => {
  return (
    <a href="whatsapp://send?phone=79266260215"
      target="_blank"
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-1 text-indigo-600 dark:text-indigo-600">
      Арати
      <HiPencilSquare />
    </a>
  )
}

export default SendMessageToArati 