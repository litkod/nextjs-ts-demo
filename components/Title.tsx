import { styled, Typography } from "@mui/material";

export default styled(Typography)`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  & a {
    color: #0070f3;
    text-decoration: none;
  }

  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }
`