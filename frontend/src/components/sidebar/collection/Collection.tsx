import { FaFile, FaFolder } from "react-icons/fa6";

interface Item {
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
  return (
    <>
      <li
        className={
          props?.levels === 0
            ? "flex items-center mb-2"
            : "flex items-center loop-item mb-2"
        }
      >
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

const CollectionLoop = ({ items }: { items: Item[] }) => {
  // TODO: Replace the manual height/width with ASCII text
  return (
    <ul
      key={items[0].key}
      className={items[0]?.levels === 0 ? "ml-6" : "loop ml-6"}
    >
      {items.map((item: any, iter) => {
        if (item?.items && item?.items.length > 0) {
          return (
            <>
              <CollectionItem
                key={item.key}
                collectionName={item?.collectionName}
                levels={item?.levels}
                isCollection={true}
              />
              <CollectionLoop key={item.key} items={item?.items} />
            </>
          );
        } else {
          return (
            <CollectionItem
              key={item.key}
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
