import { HiPencilSquare } from "react-icons/hi2";

const SendMessageToTarini = () => {
  return (
    <a href="whatsapp://send?phone=79154779637"
      target="_blank"
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-1 text-indigo-600 dark:text-indigo-600">
      Тарини
      <HiPencilSquare />
    </a>
  )
}

export default SendMessageToTarini