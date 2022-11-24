import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor1: string;
    bgColor2: string;
    bgColor3: string;
    bgColor4: string;
    accentColor: string;
  }
}
