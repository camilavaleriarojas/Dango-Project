import Header from "../Header";
import Card from "../Card";
import { dataProducts } from "../../data/dataProducts";

const Layout = () => {
  return (
    <div className="bg-stone-100">
      <Header />
      <div className="flex flex-wrap items-center justify-center p-6">
        <div className="p- grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dataProducts.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
