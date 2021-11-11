import 'styled-components';

type ColorsProps = {
  BLUE: string;
  WHITE: string;
};

type SizeProps = {
  FONTSIZE_BUTTON: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizeProps;
    Colors: ColorsProps;
  }
}
