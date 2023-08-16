import { useParams } from "react-router-dom";
import { productList } from "../products";
import Product from "../pages/product/Product";


function ProductDetail() {
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));
  console.log(product);
  return (
    <Product
      price={product.price}
      name={product.name}
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

export default ProductDetail;
