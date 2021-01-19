import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, HeaderP, Header, Image, ViewResumeLink, HeaderText, HeaderInfo } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <HeaderInfo>
          <HeaderText>{user.basics.name}</HeaderText>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <HeaderP>{user.basics.label}</HeaderP>
          <HeaderP>Coding in {user.basics.region}</HeaderP>
          <HeaderP>{user.basics.headline}</HeaderP>
        </HeaderInfo>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
