import dayjs from 'dayjs'
import { DateFormatter } from 'react-day-picker'

const seasonEmoji: Record<string, string> = {
	winter: '⛄',
	spring: '🌸',
	summer: '🌊',
	autumn: '🍂'
}

const getSeason = (month: Date): keyof typeof seasonEmoji => {
	const montNumber = month.getMonth() + 1
	if (montNumber > 2 && montNumber < 6) return 'spring'
	if (montNumber > 5 && montNumber < 9) return 'spring'
	if (montNumber > 8 && montNumber < 12) return 'spring'
	else return 'winter'
}

export const formatCaption: DateFormatter = month => {
	const season = getSeason(month)
	return (
		<>
			<span
				role='img'
				aria-label={season}
				className='mr-2'
			>
				{seasonEmoji[season]}
			</span>
			{dayjs(month).format('MMMM')}
		</>
	)
}
