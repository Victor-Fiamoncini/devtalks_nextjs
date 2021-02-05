import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { jsonPlaceholderAPI } from '../services/apiClients'

export default function SPAExample() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function fetchPosts() {
			const posts = await jsonPlaceholderAPI.get('/posts')

			setPosts(posts.data)
		}

		fetchPosts()
	}, [])

	return (
		<div>
			<Head>
				<title>Devtalks NextJS</title>
			</Head>
			<main>
				<h1>Devtalks NextJS</h1>
				{!!posts.length && (
					<ul>
						{posts.map(post => (
							<li key={post.id}>
								<h4>{post.title}</h4>
							</li>
						))}
					</ul>
				)}
			</main>
		</div>
	)
}
