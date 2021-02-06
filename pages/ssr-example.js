import React from 'react'
import Head from 'next/head'

import { localAPI } from '../services/apiClients'

import PostsList from '../components/PostsList'

/**
 * Server-side rendering example
 */
const SSRExample = ({ posts }) => (
	<div>
		<Head>
			<title>SSR Example</title>
		</Head>
		<PostsList posts={posts} />
	</div>
)

export const getServerSideProps = async () => {
	const posts = await localAPI.get('/posts')

	console.log('SSR - Requisição pelo lado do servidor...')

	return {
		props: {
			posts: posts.data,
		},
	}
}

export default SSRExample
