import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/tasks.types'

import { FILTERS } from '../colums.data'
import { filterTasks } from '../filter-task'

import { KanbanAddRowInput } from './KanbanAddCardInput'
import { KanbanCard } from './KanbanCard'
import styles from './KanbanView.module.scss'

interface IKanbanRowParent {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanColumn({
	value,
	label,
	items,
	setItems
}: IKanbanRowParent) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={styles.column}>
						<div className={styles.columnHeading}>{label}</div>

						{filterTasks(items, value)?.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id}
								index={index}
							>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<KanbanCard
											key={item.id}
											item={item}
											setItems={setItems}
										/>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddRowInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
