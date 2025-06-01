import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Router from './router/Router';
import GlobalFallbackComponent from './components/GlobalFallbackComponent';
import GlobalLoadingComponent from './components/GlobalLoadingComponent';

export default function App() {
  return (
    <Suspense fallback={<GlobalLoadingComponent />}>
      <ErrorBoundary FallbackComponent={GlobalFallbackComponent}>
        <Router />
      </ErrorBoundary>
    </Suspense>
  );
}
