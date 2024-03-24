import { FaVault } from "react-icons/fa6";
import CollectionLoop from "./collection/Collection";

const testCollections = [
  {
    levels: 0,
    collectionName: "Python",
    title: "Note #0 on Level 0",
    items: [
      {
        levels: 1,
        title: "Beginner",
      },
      {
        levels: 1,
        title: "Advanced",
      },
      {
        levels: 1,
        collectionName: "Data Structures",
        items: [
          {
            levels: 2,
            title: "Dynamic Arrays",
          },
        ],
      },
    ],
  },
  {
    levels: 0,
    collectionName: "JavaScript",
    title: "Note #1 on Level 0",
    items: [
      {
        levels: 1,
        title: "Beginner",
      },
      {
        levels: 1,
        title: "Fullstack Development",
      },
    ],
  },
];

function Sidebar() {
  // TODO: Fix the height of the sidebar to the height of the screen
  return (
    <div className="sidebar border-r h-screen">
      <div className="vault flex items-center justify-center pt-3 pb-2">
        <span className="inline-block mr-2">
          <FaVault />
        </span>
        Dev Work
      </div>
      <CollectionLoop items={testCollections} />
    </div>
  );
}

export default Sidebar;
