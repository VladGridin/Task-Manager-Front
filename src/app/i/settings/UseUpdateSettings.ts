import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeUserForm } from '@/types/auth.types'

import { userServices } from '@/services/user.service'

export function useUpdateSettings() {
	const QueryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => userServices.update(data),
		onSuccess() {
			toast.success('Successfully update profile!')
			QueryClient.invalidateQueries({
				queryKey: ['profile']
			})
		}
	})
	return {
		mutate,
		isPending
	}
}
