import Header from '../Header';
import Card from '../Card';
import { dataProducts } from '../../data/dataProducts';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-6 flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 p-">
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
    </>
  );
};

export default Layout;
