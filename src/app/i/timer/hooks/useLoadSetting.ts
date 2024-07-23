import { userProfile } from '@/hooks/userProfile'

export function useLoadSettings() {
	const { data } = userProfile()

	const workInterval = data?.user.workInterval ?? 50
	const breakInterval = data?.user.breakInterval ?? 10

	return { workInterval, breakInterval }
}
