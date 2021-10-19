import React, { FC } from "react";
import * as className from "./style";

const Header: FC = () => {
  return (
    <div css={className.container}>
      <div css={className.navbar}>
        <div css={className.navWrapper}>
          <nav></nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
