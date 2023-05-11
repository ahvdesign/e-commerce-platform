import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "D&D Minis",
      imageUrl: "https://i.imgur.com/XqI3WFV.jpeg",
    },
    {
      id: 2,
      title: "Warhammer Minis",
      imageUrl: "https://i.imgur.com/BTeQiHU.jpeg",
    },
    {
      id: 3,
      title: "Environment Props",
      imageUrl:
        "https://i.pinimg.com/736x/7d/62/e7/7d62e7f03e2ac7b05da105fb9c3ff3f1.jpg",
    },
    {
      id: 4,
      title: "Miscellaneous",
      imageUrl: "https://i.imgur.com/HlrZUUo.jpeg",
    },
    {
      id: 5,
      title: "Custom Order",
      imageUrl: "https://i.imgur.com/uzilltj.jpeg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
