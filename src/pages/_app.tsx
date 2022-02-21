import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps}>
    <GlobalStyles />
  </Component>
);

export default MyApp;
