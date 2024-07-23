export interface IPomodoroRoundResponse {
	id: string
	createdAt?: string
	updateAt?: string

	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse {
	id: string
	createdAt?: string
	updateAt?: string

	isCompleted?: boolean
	rounds?: IPomodoroRoundResponse[]
}
export type TypePomodoroSessionFormState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updateAt'>
>

export type TypePomodoroRoundFormState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updateAt'>
>
