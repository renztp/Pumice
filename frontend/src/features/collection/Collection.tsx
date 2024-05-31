import { useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa6";

interface Item {
  id: string;
  title: string;
  collectionName: string;
  levels: number;
}

interface ItemsProp extends Item {
  key: string;
  levels?: number;
  items?: Item[];
}

// TODO: Clean this code up
function CollectionItem(props) {
  function computeNodeClass() {
    const classNode = ["flex", "items-center", "mb-2"];
    if (props?.isCollection) {
      classNode.push("loop-collection");
      if (classNode.includes("loop-item")) {
        classNode.splice(classNode.indexOf("loop-item"), 1);
      }
    } else {
      classNode.push("loop-item");
      if (classNode.includes("loop-collection")) {
        classNode.splice(classNode.indexOf("loop-collection"), 1);
      }
    }

    return classNode.join(" ");
  }

  return (
    <>
      <li className={computeNodeClass()} onClick={props.toggleCollapse}>
        <span className="inline-block mr-2">
          {props?.isCollection ? <FaFolder /> : <FaFile />}
        </span>
        <span>
          {props?.title && <span>{props?.title}</span>}
          {props?.collectionName && <span>{props?.collectionName}</span>}
        </span>
      </li>
    </>
  );
}

const CollectionLoop = ({
  items,
  folderKey,
}: {
  items: Item[];
  folderKey?: string;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // TODO: Replace the manual height/width with ASCII text
  function collasepFolderNode(e) {
    console.log("collapsed!");
  }

  const toggleCollapse = (e: Event) => {
    console.log("toggleCollapse clicked!");
    e.preventDefault();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <ul
      key={folderKey}
      data-node-id={folderKey}
      className={
        items[0]?.levels === 0
          ? "ml-6 cursor-pointer"
          : "loop ml-6 cursor-pointer"
      }
    >
      {items.map((item: any) => {
        if (item?.items && item?.items.length > 0) {
          return (
            <>
              <CollectionItem
                key={item.id}
                collectionName={item?.collectionName}
                levels={item?.levels}
                isCollection={true}
                toggleCollapse={(e) => toggleCollapse(e)}
              />
              {!isCollapsed && (
                <CollectionLoop folderKey={item.id} items={item?.items} />
              )}
            </>
          );
        } else {
          return (
            <CollectionItem
              key={item.id}
              title={item?.title}
              levels={item?.levels}
            />
          );
        }
      })}
    </ul>
  );
};

export default CollectionLoop;
