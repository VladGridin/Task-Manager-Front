import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { useImage } from '@/services/file.service'

export function UpdateImage() {
	const QueryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['update image'],
		mutationFn: (data: FormData) => useImage.uploadImage(data),
		onSuccess() {
			toast.success('Successfully update image!')
			QueryClient.invalidateQueries({
				queryKey: ['profile']
			})
		}
	})
	return {
		mutate
	}
}
