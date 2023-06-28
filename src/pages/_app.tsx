import type {AppProps} from 'next/app'

import {Inter} from 'next/font/google'

import '@/styles/global.scss'

const inter = Inter({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	style: 'normal',
	variable: '--font-inter'
})

export default function App({Component, pageProps}: AppProps) {
	return (
		<div className={inter.variable}>
			<Component {...pageProps} />
		</div>
	);
}
