import type { Dispatch, SetStateAction } from 'react'

import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

export interface ITimerState {
	secondsLeft: number
	activeRound: IPomodoroRoundResponse | undefined
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	isRunning: boolean
}
