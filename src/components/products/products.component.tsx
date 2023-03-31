import { Button, Grid } from '@mui/material';
import { Product } from '../../interfaces/product.interface';
import { Promotion } from '../../interfaces/promotion.interface';
import Container from '@mui/material/Container';
import ProductCard from './product-card/product-card.component';
import SellIcon from '@mui/icons-material/Sell';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import { ProductsHeader, ProductsTitle } from './products.styles';

interface ProductsProps {
  productsData: Product[],
  promotions: Promotion[]
};

const Products = ({ productsData, promotions }: ProductsProps) => {

  // Initialize state for the products and original products, and whether a promotion has been applied
  const [products, setProducts] = useState<Product[]>([...productsData]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([...productsData]);
  const [promotionApplied, setPromotionApplied] = useState(false);

  // Function to apply promotions to the products
  const applyPromotions = () => {

    // If promotions have already been applied, show a toast message and return early
    if (promotionApplied) {
      toast('Promotions already applied!', { icon: <ErrorIcon /> });
      return;
    }

    // For each product, apply the highest discount promotion (if any)
    const newProducts: Product[] = [...products].map(product => {

      const productPromotions = promotions
        .filter(promotion => promotion.productId === product.id)
        ?.sort((a, b) => b.discount - a.discount);

      if (productPromotions.length < 1) return product;

      const totalDiscount = productPromotions.reduce((accumulator, currentValue) => {

        const totalDiscount = accumulator + currentValue.discount;

        // If the discounted price is less than zero, don't apply the promotion
        if (product.price - totalDiscount > 0) return totalDiscount;

        return accumulator;

      }, 0);

      // Calculate the discounted price and update the product
      const discountedPrice = Math.round((product.price - totalDiscount) * 100) / 100;

      if (productPromotions && discountedPrice > 0) return { ...product, price: discountedPrice };

      return product;

    });

    // Update the products state and set promotionApplied to true
    setProducts(newProducts);
    setPromotionApplied(true);

    // Show a success toast message
    toast.success('Promotions Applied!');
  }

  // Function to get the original price of a product
  const getProductOriginalPrice = (product: Product): number | undefined => {
    return originalProducts.find(p => p.id === product.id)?.price;
  }

  return (
    <Container maxWidth="lg">

      {/* Header with title and apply promotions button */}
      <ProductsHeader>
        <ProductsTitle style={{ marginRight: 'auto' }}>Products</ProductsTitle>
        <div>
          <Button
            onClick={applyPromotions}
            startIcon={<SellIcon />}
            color="success"
            variant="contained">
            Apply Promotions
          </Button>
        </div>
      </ProductsHeader>

      {/* Grid of product cards */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={5} md={4} lg={3} >
            <ProductCard product={product} originalPrice={getProductOriginalPrice(product)} />
          </Grid>
        ))}
      </Grid>

    </Container>

  )
}

export default Products;
