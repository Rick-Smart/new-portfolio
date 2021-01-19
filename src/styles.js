
import styled from 'styled-components';
import { blue } from '@carbon/colors';
import { black100 } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-style: italic;
  font-weight: bold;
  font-size: 3rem;
  font-family: BP dots;
  text-decoration: 2px underline white;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  font-size: 20px;
  font-weight: bold;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[10]};
  color: ${black100};
  border-radius: 5px;
  
`;