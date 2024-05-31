import { MdOutlineClose } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";

export default function EditorControls({ toggleEditing }) {
  return (
    <div className="flex justify-between">
      <div className="left-controls">
        <div className="buttong-group">
          <button className="flex items-center">
            <MdOutlineClose />
            close
          </button>
        </div>
      </div>
      <div className="right-controls">
        <div className="buttong-group">
          <button onClick={e => toggleEditing()} className="flex items-center"><FaBookOpenReader />&nbsp;Preview</button>
        </div>
      </div>
    </div>
  );
}
