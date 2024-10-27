import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import 'app/style/index.scss';
import { Suspense } from 'react';
import { StoreProvider } from 'app/provider/store/ui/StoreProvider';

const container = document.getElementById('root');

if (container != null) {
  container.className = 'dark';
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <StoreProvider>
        <Suspense fallback={'loading'}>
          <App />
        </Suspense>
      </StoreProvider>
    </BrowserRouter>
  );
} else {
  throw new Error('Не получилось найти контейнер для вмонтирования');
}
