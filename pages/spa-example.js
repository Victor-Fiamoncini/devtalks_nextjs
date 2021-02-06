import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { localAPI } from '../services/apiClients'

import PostsList from '../components/PostsList'

/**
 * Single page application example
 */
const SPAExample = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function fetchPosts() {
			const posts = await localAPI.get('/posts')

			setPosts(posts.data)

			console.log('SPA - Requisição pelo lado do cliente...')
		}

		fetchPosts()
	}, [])

	return (
		<div>
			<Head>
				<title>SPA Example</title>
			</Head>
			<PostsList posts={posts} />
		</div>
	)
}

export default SPAExample
