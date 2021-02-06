import React from 'react'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => (
	<main className="m-auto p-2 text-center">
		<h1 className="text-4xl text-blue-500 font-semibold mb-4">
			Devtalks NextJS
		</h1>
		<Component {...pageProps} />
	</main>
)

export default MyApp
