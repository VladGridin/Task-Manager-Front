import Image from 'next/image'
import React from 'react'

import { userProfile } from '@/hooks/userProfile'

import Loader from '../Loader'

import { UpdateImage } from './hooks/UpdateImage'

interface IUseImage {
	id: string
	disabled?: boolean
	extra: string
}

export const UserImg = ({ disabled, extra, id }: IUseImage) => {
	// Fetching user avatar
	const { data, isLoading } = userProfile()
	// update or set user Image
	const { mutate } = UpdateImage()

	function handleChange(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault()

		// use form data to upload image
		const target = e.target as HTMLInputElement & {
			files: FileList
		}
		const form = new FormData()
		form.append('file', target.files[0])

		return mutate(form)
	}

	return (
		<div className={extra}>
			<label
				htmlFor={id}
				className={`${extra} ${!disabled ? 'cursor-pointer' : ''} flex justify-center items-center text-2xl relative  text-white bg-white/20 rounded overflow-hidden`}
			>
				{isLoading ? (
					<Loader />
				) : data?.user.userAvatar === undefined ||
				  data?.user.userAvatar === null ? (
					<p>{data?.user.name?.charAt(0) || 'A'}</p>
				) : (
					<Image
						src={process.env.NEXT_PUBLIC_ENV_BASE_URL + data.user.userAvatar}
						fill
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							objectFit: 'cover'
						}}
						alt='user avatar'
						priority
					/>
				)}
			</label>
			<input
				type='file'
				name='photo'
				accept='.jpg,.jpeg,.png,.gif,.webp,.flif'
				id={id}
				className='opacity-0 absolute -z-10 '
				onChange={e => handleChange(e)}
				disabled={disabled}
			/>
		</div>
	)
}
