import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { localAPI } from '../services/apiClients'

export default function SPAExample() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function fetchPosts() {
			const posts = await localAPI.get('/posts')

			setPosts(posts.data)

			console.log('Requisição pelo lado do cliente...')
		}

		fetchPosts()
	}, [])

	return (
		<div>
			<Head>
				<title>SPA Example</title>
			</Head>
			<main>
				{!!posts.length && (
					<section>
						{posts.map(post => (
							<div key={post.id} className="mb-2">
								<p>{post.title}</p>
							</div>
						))}
					</section>
				)}
			</main>
		</div>
	)
}
