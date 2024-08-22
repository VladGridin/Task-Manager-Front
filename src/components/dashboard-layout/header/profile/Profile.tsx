'use client'

import Loader from '@/components/ui/Loader'
import { UserImg } from '@/components/ui/avatar/Avatar'

import { userProfile } from '@/hooks/userProfile'

export function Profile() {
	const { data, isLoading } = userProfile()
	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>
					<UserImg
						id='User avatar header'
						disabled={true}
						extra='w-10 h-10'
					/>
				</div>
			)}
		</div>
	)
}
