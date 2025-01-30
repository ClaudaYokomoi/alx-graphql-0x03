// pages/_app.tsx
import ErrorBoundary from '@/components/ErrorBoundary'; // Import ErrorBoundary
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
