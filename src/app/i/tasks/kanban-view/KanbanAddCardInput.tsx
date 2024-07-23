import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/tasks.types'

import styles from './KanbanView.module.scss'

interface IKanbanAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddRowInput({
	filterDate,
	setItems
}: IKanbanAddRowInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return
			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}
	return (
		<div className='mt-5'>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
			>
				Add task ...
			</button>
		</div>
	)
}
