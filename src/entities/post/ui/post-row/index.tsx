import { FC } from 'react'
import { Post } from 'shared/services/post'
// import styles from './styles.module.scss'

export const PostRow: FC<IProps> = (p) => {
	const { data } = p

	return (
		<div className="p-4 bg-gray-100 flex flex-col gap-2 rounded-lg">
			<h2 className="text-xl font-bold">{data.title}</h2>
			<p>{data.body}</p>
		</div>
	)
}

interface IProps {
	data: Post
}
