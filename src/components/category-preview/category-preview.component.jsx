import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products
          .filter((_, index) => index < 3)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
