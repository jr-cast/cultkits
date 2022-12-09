import styled from 'styled-components';
import ProductItem from './ProductItem';
import { products } from '../data';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MerchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1em;
  letter-spacing: 0.05em;
  font-weight: 400;
  padding-top: 2em;
  padding-bottom: 1em;
  font-size: 1.2em;
  margin-left: 1.5em;
  text-align: left;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  padding 0.95em 2.25em;
  cursor: pointer;
  letter-spacing: 0.055em;
  font-size: 0.9em;
  width: 8.5em;
  background-color: black;
  color white;
  margin: 2.5em 0;
`;

const Products = () => (
  <Container>
    <Title>NEWLY ADDED PRODUCTS</Title>
    <MerchContainer>
      {merch.map((item) => (
        <MerchItem key={item.id} item={item} />
      ))}
    </MerchContainer>
    <Button>View all</Button>
  </Container>
);

export default Products;
