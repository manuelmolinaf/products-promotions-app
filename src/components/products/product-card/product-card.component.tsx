import { Product } from '../../../interfaces/product.interface';
import Card from '@mui/material/Card';
import { 
  StyledProductCard, 
  ProductCardImageContainer, 
  ProductCardBody,
  ProductCardImage,
  ProductCardPrice,
  ProductCardTitle,
  ProductCardFooter,
  ProductCardOriginalPrice
} from './product-card.styles';

interface ProductCardProps {
  product: Product,
  originalPrice:number|undefined
}

const ProductCard = ({ product, originalPrice }: ProductCardProps) => {

  return (
    <StyledProductCard>

      <ProductCardImageContainer>
        <ProductCardImage src={product.image}/>
      </ProductCardImageContainer>

      <ProductCardBody> 
        <ProductCardTitle >
          {product.title}
        </ProductCardTitle>

        
        <ProductCardFooter>
          {originalPrice && originalPrice !== product.price ?
          <ProductCardOriginalPrice color="text.secondary">
            ${originalPrice}
          </ProductCardOriginalPrice>
          :<></>
          }
          

          <ProductCardPrice>
            ${product.price}
          </ProductCardPrice>

        </ProductCardFooter>
        

      </ProductCardBody>


    </StyledProductCard>
  )
}

export default ProductCard