import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "D&D Minis",
    imageUrl: "https://i.imgur.com/XqI3WFV.jpeg",
    route: "shop/d&d%20minis",
  },
  {
    id: 2,
    title: "Warhammer Minis",
    imageUrl: "https://i.imgur.com/BTeQiHU.jpeg",
    route: "shop/warhammer%20minis",
  },
  {
    id: 3,
    title: "Environment Props",
    imageUrl:
      "https://i.pinimg.com/736x/7d/62/e7/7d62e7f03e2ac7b05da105fb9c3ff3f1.jpg",
    route: "shop/environment%20props",
  },
  {
    id: 4,
    title: "Miscellaneous",
    imageUrl: "https://i.imgur.com/HlrZUUo.jpeg",
    route: "shop/miscellaneous",
  },
  {
    id: 5,
    title: "Custom Order",
    imageUrl: "https://i.imgur.com/uzilltj.jpeg",
    route: "shop/custom order",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
