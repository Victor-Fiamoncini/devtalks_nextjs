import React from 'react'

const PostsList = ({ posts }) => {
	return (
		!!posts.length && (
			<section>
				{posts.map(post => (
					<div key={post.id} className="mb-2">
						<p>{post.title}</p>
					</div>
				))}
			</section>
		)
	)
}

export default PostsList
