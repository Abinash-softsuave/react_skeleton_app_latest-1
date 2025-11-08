import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { queryClient } from '@lib/queryClient';
import { THEME } from '@utils/constants';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState<string>(() => {
    // Initialize theme from DOM
    const root = document.documentElement;
    return root.classList.contains(THEME.DARK) ? THEME.DARK : THEME.LIGHT;
  });

  useEffect(() => {
    // Watch for theme changes
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const isDark = root.classList.contains(THEME.DARK);
      setTheme(isDark ? THEME.DARK : THEME.LIGHT);
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme === THEME.DARK ? 'dark' : 'light'}
        />
      </BrowserRouter>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
