'use client'

import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { userProfile } from '@/hooks/userProfile'

export function useInitialData(reset: UseFormReset<TypeUserForm>) {
	const { data, isSuccess } = userProfile()

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				email: data?.user.email,
				name: data?.user.name,
				breakInterval: data?.user.breakInterval,
				intervalsCount: data?.user.intervalsCount,
				workInterval: data?.user.workInterval
			})
		}
	}, [isSuccess])
}
