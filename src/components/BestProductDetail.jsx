import { useParams } from "react-router-dom";
import { bestProducts } from "../products";
import Product from "../pages/product/Product";

function BestProductDetail() {
  const { id } = useParams();
  const product = bestProducts.find((p) => p.id === parseInt(id));
  console.log(product);
  return (
    <Product
      name={product.name}
      price={product.price}
      l={product.url}
      brand={product.brand}
      f={product.f}
      b={product.b}
      bt={product.bt}
      desc={product.description}
      discount={product.discount}
    />
  );
}

export default BestProductDetail;
