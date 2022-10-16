import { PostRow } from 'entities/post'
import { FC } from 'react'
import { Post } from 'shared/services/post'
import { Layout } from 'widgets/layout'
// import styles from './styles.module.scss'

const PostsListPage: FC<IProps> = () => {
	const posts: Post[] = [
		{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
		},
	]

	return (
		<Layout>
			<div className="flex flex-col gap-6 p-4">
				{posts.map((post) => (
					<PostRow key={post.id} data={post} />
				))}
			</div>
		</Layout>
	)
}

interface IProps {}
export default PostsListPage
