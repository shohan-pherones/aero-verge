import { Link } from "react-router-dom";

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
    <section className="container mx-auto py-10 min-h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Explore categories
      </h2>
      <div className="categories-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {categories.map((category) => (
          <div
            className="card w-96 bg-base-100 shadow-xl image-full"
            key={category.id}
          >
            <figure>
              <img src={category.image} alt={category.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category.name}</h2>
              <p>{category.description}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`category/${category.name}`}
                  className="btn btn-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
