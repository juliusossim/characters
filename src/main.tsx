import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { GlobalStyles } from '@/components/Styles/GlobalStyles';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
		<GlobalStyles />
		<App />
	</StrictMode>
);
