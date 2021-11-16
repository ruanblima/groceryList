import 'styled-components';

type ColorsProps = {
  BLUE: string;
  WHITE: string;
  ICON_NO_CLICKABLE: string;
  FONT_INPUT: string;
  ERROR: string;
  MEDIUM_GRAY: string;
  TEXT_NO_CLICKABLE: string;
  TEXT_CLICKABLE: string;
  ICON_COLOR_CLICKABLE: string;
  TITLE_TEXT: string;
};

type SizeProps = {
  FONTSIZE_BUTTON: string;
  FONTSIZE_INPUT: string;
  FONTSIZE_LABEL: string;
  FONTSIZE_INPUT_LABEL: string;
  ICON_SIZE: string;
  ICON_SIZE_BACK: string;
  ICON_SIZE_HEADER: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizeProps;
    Colors: ColorsProps;
  }
}
