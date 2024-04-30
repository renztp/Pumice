import MetaEditor from "./meta-editor/MetaEditor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EditorControls from "./editor-controls/EditorControls";
import { useState } from "react";


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
    <div className="p-5">
      <EditorControls toggleEditing={toggleEditing} />
      <MetaEditor />
      <div className="editor-wrapper">
      {editing ? <textarea className="w-full h-[70vh]" value={editorContent} onChange={e => handleEditorChange(e)}></textarea> : <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>}
      </div>
    </div>
  );
}

export default Editor;
