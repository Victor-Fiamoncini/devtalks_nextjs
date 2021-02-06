import React from 'react'
import Head from 'next/head'

import { localAPI } from '../services/apiClients'

import PostsList from '../components/PostsList'

/**
 * Static site generation example
 */
const SSGExample = ({ posts }) => (
	<div>
		<Head>
			<title>SSG Example</title>
		</Head>
		<PostsList posts={posts} />
	</div>
)

export const getStaticProps = async () => {
	const posts = await localAPI.get('/posts')

	console.log(
		'SSG - Pré geração da página pelo lado do servidor a cada 20 segundos...'
	)

	return {
		props: {
			posts: posts.data,
		},
		revalidate: 20,
	}
}

export default SSGExample
