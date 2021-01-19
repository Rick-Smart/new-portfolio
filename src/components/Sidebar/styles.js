import styled from "styled-components";
import { SideNav } from "carbon-components-react/lib/components/UIShell";

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
  min-height: 100vh;
  background:linear-gradient(0deg, rgba(255, 0, 150, 0.8), rgba(255, 0, 150, 0.5)), url("./background.jpg");
  background-size: cover;
`;
