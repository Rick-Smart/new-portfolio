import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-left: 3rem;
  border: 5px double white;
  border-radius: 50%;
`;

export const HeaderInfo = styled.div`
  margin-left: 5rem;
`;
export const HeaderText = styled.h2`
  font-size: 5rem;
  font-family: BP dots;
`;
export const HeaderP = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ViewResumeLink = styled.a`
  display: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;
