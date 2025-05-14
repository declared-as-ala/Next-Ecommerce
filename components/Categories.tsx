import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 124,
  },
  {
    id: 2,
    name: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 86,
  },
  {
    id: 3,
    name: "Home",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 53,
  },
];

export function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.name.toLowerCase()}`}
          className="group relative overflow-hidden rounded-lg aspect-[5/3]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${category.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold">{category.name}</h3>
            <p className="text-muted-foreground">{category.count} products</p>
          </div>
        </Link>
      ))}
    </div>
  );
}