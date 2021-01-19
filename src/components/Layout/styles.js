import styled from "styled-components";
import { Content } from "carbon-components-react/lib/components/UIShell";

export const StyledContent = styled(Content)`
  min-height: 100vh;
  background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("./background.jpg");
  background-size:cover;
  color: black;
  font-size: 1.2rem;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;
