import { IoMdClose } from "react-icons/io";

export default function Tag({ tag, tagAction }) {
  return <div className="flex items-center">{tag.name} <IoMdClose onClick={tagAction} /> </div>;
}
