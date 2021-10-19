import { css } from "@emotion/core";
import colors from "../colors";

export const container = css`
  background-color: ${colors.gray};
`;

export const navbar = css`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 22px;
`;
