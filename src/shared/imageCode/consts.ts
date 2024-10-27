import HtmlFiler from 'shared/assets/icon/filter/html.svg';
import CssFiler from 'shared/assets/icon/filter/css.svg';
import JsFiler from 'shared/assets/icon/filter/javascript.svg';
import TsFilter from 'shared/assets/icon/filter/typescript.svg';
import ReduxFiler from 'shared/assets/icon/filter/redux.svg';
import ReactFiler from 'shared/assets/icon/filter/react.svg';
import WebpackFiler from 'shared/assets/icon/filter/webpack.svg';
import LibraryFiler from 'shared/assets/icon/filter/library.svg';
import StorybookFiler from 'shared/assets/icon/filter/storybook.svg';
import EnglishFiler from 'shared/assets/icon/filter/english.svg';
import type React from 'react';

export const imagesList: Record<string, React.VFC<React.SVGProps<SVGSVGElement>>> = {
  HTML: HtmlFiler,
  JS: JsFiler,
  CSS: CssFiler,
  TS: TsFilter,
  REDUX: ReduxFiler,
  REACT: ReactFiler,
  WEBPACK: WebpackFiler,
  LIBRARY: LibraryFiler,
  STORYBOOK: StorybookFiler,
  ENGLISH: EnglishFiler
};
