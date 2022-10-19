import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Camera Drones",
      description:
        "Looking for a camera drone? DJI drones offer incredible drone technology for every user.",
      image:
        "https://stormsend1.djicdn.com/tpc/uploads/core_selling_point/image/113d29348ee248f16ddd463322a546a6@origin.jpg",
    },
    {
      id: 2,
      name: "Handheld",
      description:
        "Looking for a handheld camera? DJI handhelds offer incredible handheld camera technology for every user.",
      image:
        "https://stormsend1.djicdn.com/tpc/uploads/core_selling_point/image/8ef845b0ea395996ae21cb2f5c0936c1@origin.jpg",
    },
    {
      id: 3,
      name: "Education & Industry",
      description:
        "Looking for an educational tech? DJI educational department offers incredible inventions for every user.",
      image:
        "https://stormsend1.djicdn.com/tpc/uploads/core_selling_point/image/6692a9071a54f78d41c9553d493e78bb@origin.jpg",
    },
  ];

  return (
    <div className="  flex items-start gap-10 justify-center py-20 flex-wrap">
      {categories.map((category) => (
        <div
          className="card w-96 bg-base-100 shadow-xl image-full"
          key={category.id}
        >
          <figure>
            <img src={category.image} alt={category.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{category.name}</h2>
            <p>{category.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Explore now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
