import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export const StyledProductCard = styled(Card)({ 
  maxWidth: '300px', 
  height: '320px', 
  display:'flex', 
  padding:'10px', 
  flexDirection:'column' 
});

export const ProductCardImageContainer = styled('div')({ 
  height: '60%',
  textAlign: 'center',
  marginBottom:'20px'
});

export const ProductCardImage = styled('img')({ 
  height: '100%',
  objectFit: 'cover'
});

export const ProductCardBody = styled('div')({ 
  display: 'flex', 
  flexDirection: 'column', 
  flex:'1' 
});

export const ProductCardTitle = styled(Typography)({ 
  fontWeight:'bold',
  textAlign:'center'
});

export const ProductCardFooter = styled('div')({ 
  marginTop:'auto',
  display:'flex',
  flexDirection:'row',
  gap:'10px',
  alignItems:'center',
  justifyContent:'flex-end'
});

export const ProductCardPrice = styled(Typography)({ 
  textAlign:'right',
  fontSize:'25px',
  fontWeight:'bold'
});

export const ProductCardOriginalPrice = styled(Typography)({ 
  textAlign:'right',
  fontWeight:'bold',
  textDecoration:'line-through',
  color: 'palette.secondary.main',
});