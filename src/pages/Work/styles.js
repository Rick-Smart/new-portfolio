import styled from "styled-components";
import { white } from "@carbon/colors";

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const WorkTitle = styled.h4`
  font-weight: bold;
  font-family: BP dots;
  font-size: 2.3rem;
`;

export const JobTitle = styled.p`
  font-weight: bold;
  display: block;
  font-size: 1.5rem;
`;

export const JobLocation = styled.span`
  font-weight: bold;
  display: block;
  font-size: 1.2rem;
`;
