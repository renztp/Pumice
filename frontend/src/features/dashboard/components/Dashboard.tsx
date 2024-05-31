import { FaFileAlt } from "react-icons/fa";
const dummyNotes = [
  {
    id: "1",
    title: "Note 1",
    keyShortcut: "a",
    slug: "python/beginner/Note-1",
  },
  {
    id: "2",
    title: "Note 2",
    keyShortcut: "b",
    slug: "data-structures/dynamic-arrays/Note-2",
  },
  {
    id: "3",
    title: "Note 3",
    keyShortcut: "c",
  },
  {
    id: "4",
    title: "Note 4",
    keyShortcut: "d",
  },
  {
    id: "5",
    title: "Note 5",
    keyShortcut: "e",
  },
  {
    id: "6",
    title: "Note 6",
    keyShortcut: "f",
  },
  {
    id: "7",
    title: "Note 7",
    keyShortcut: "g",
  },
  {
    id: "8",
    title: "Note 8",
    keyShortcut: "h",
  },
  {
    id: "9",
    title: "Note 9",
    keyShortcut: "i",
  },
];

function NoteItemList() {
  return (
    <div className="w-full max-w-xl mx-auto">
      {dummyNotes.map((note) => (
        <div
          className="w-full hover:bg-slate-100 rounded rounded-md bg-white flex justify-between align-center mb-1 last:mb-0"
          key={note.keyShortcut}
        >
          <div className="flex items-center">
            <FaFileAlt className="inline-block text-lg mr-2" />
            <span className="inline-block">{note.title}</span>
          </div>
          <div className="text-right">
            <span>{note.keyShortcut}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Dashboard() {
  return (
    <>
      <section className="s-recent-notes">
        <h1 className="text-xl font-bold mb-2 text-center">Recent Notes</h1>
        <NoteItemList />
      </section>
      <section className="s-history"></section>
    </>
  );
}
