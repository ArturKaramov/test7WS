import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { Providers } from './app/providers'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<Providers>
		<App />
	</Providers>
)
