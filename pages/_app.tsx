import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EmptyLayout } from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const Layoutt = Component.Layout ?? EmptyLayout;
  return (
    <Layoutt>
      <Component {...pageProps} />
    </Layoutt>
  );
}

export default MyApp;
