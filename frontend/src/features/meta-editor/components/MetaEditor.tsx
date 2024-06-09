import { FaTags } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Tags from '../../tag/components/Tags';
import { TagProps, TagsProps } from "../../tag/tag";


type Inputs = {
  tags: string;
  aliases: string;
}

export default function MetaEditor() {

  const tags: TagProps[] = [
    { name: "tag1", id: "1" },
    { name: "tag2", id: "2" },
  ]

  function removeTag() {
    console.log('test!')
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="flex items-center pl-2">
            <span className="inline-flex font-medium inline-block w-24"><FaTags className="mt-1 mr-1" />Tags: </span>
            <Tags tags={tags} tagAction={e => removeTag()} />
            <input
              className="w-24 rounded-md border border-gray-300"
              type="text"
            />
          </label>
        </div>

        <div className="mb-16">
          <label className="flex items-center pl-2">
            <span className="inline-flex font-medium inline-block w-24"><MdAlternateEmail className="mt-1 mr-1" />Aliases: </span>
            <input
              className="w-24 rounded-md font-medium border border-gray-300"
              type="text"
            />
          </label>
        </div>
      </form>
    </div>
  )
}
