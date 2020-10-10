import styled from "styled-components";
import { Link } from "react-router-dom";

export const Flex = styled.section`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin-bottom: 20px;
  background: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
