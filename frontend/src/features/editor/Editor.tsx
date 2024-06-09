import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EditorControls from "../editor-controls/EditorControls";
import MetaEditor from "../meta-editor/components/MetaEditor";

function Editor() {
  let markdown = `## Just a link: www.nasa.gov.`;
  const [editorContent, setEditorContent] = useState("");
  const [markdownContent, setMarkdownContent] = useState(markdown);
  const [editing, setEditing] = useState(false);

  function handleEditorChange(e) {
    setEditorContent(e.target.value);
  }

  function toggleEditing() {
    console.log("editing", editing);
    if (editing) {
      setMarkdownContent(editorContent);
    }
    setEditing(!editing);
  }

  return (
    <div className="edit-area bg-white p-5">
      <h1>Editor</h1>
      <EditorControls toggleEditing={toggleEditing} />
      <MetaEditor />
      <div className="editor-wrapper">
        {editing ? (
          <textarea
            cols={100}
            className="w-full bg-transparent p-5 outline-none border text-black"
            value={editorContent}
            onChange={(e) => handleEditorChange(e)}
          ></textarea>
        ) : (
          <div className="preview-container">
            <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default Editor;
