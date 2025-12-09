import { HiPencilSquare } from 'react-icons/hi2'

interface SendMessageToProps {
  name: string;
  phone: string;
}

const SendMessageTo = (props: Readonly<SendMessageToProps>) => {
  return (
    <a
      href={`whatsapp://send?phone=` + props.phone}
      target="_blank"
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-1 text-indigo-600 dark:text-indigo-600"
    >
      {props.name}
      <HiPencilSquare />
    </a>
  )
}

export default SendMessageTo
