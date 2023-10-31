import { Link } from "react-router-dom";

function AllCategoriesBar() {
  const Categories: { name: string; img: string }[] = [
    {
      name: "Groceries & Pets",
      img: "https://img.icons8.com/wired/64/ingredients.png",
    },
    {
      name: "Health & Beauty",
      img: "https://img.icons8.com/ios/50/lipstick.png",
    },
    {
      name: "Electronic Devices",
      img: "https://img.icons8.com/ios/50/multiple-devices.png",
    },
    {
      name: "Sports & Outdoor",
      img: "https://img.icons8.com/dotty/80/football2.png",
    },
    { name: "Home & Lifestyle", img: "https://icons8.com/icon/73/home.png" },
  ];
  return (
    <div className="text-xs flex justify-center items-center gap-3 py-2 mb-3 lg:mb-5 bg-primary-color md:text-sm border-y">
      {Categories.map((item: { name: string; img: string }) => {
        return (
          <Link
            to={`/productsPage/${item.name}`}
            className=" flex flex-wrap gap-x-1 items-center hover:border rounded-lg hover:shadow p-3"
          >
            <img width="15%" src={`${item.img}`} className="inline-block" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export { AllCategoriesBar };
