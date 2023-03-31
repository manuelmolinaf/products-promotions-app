import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export const ProductsHeader = styled('div')({ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems:'center', 
  flexWrap:'wrap',
  marginTop:'10px',
  marginBottom:'20px'
})

export const ProductsTitle = styled(Typography)({ 
  margin:0,
  fontWeight:'bold',
  fontSize:'35px'
})