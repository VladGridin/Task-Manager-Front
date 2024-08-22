import { axiosWithAuth } from '@/api/interceptors'

class UseImage {
	private BASE_URL = '/files/'

	async uploadImage(data: FormData) {
		const response = await axiosWithAuth.put(this.BASE_URL, data, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
		return response.data
	}

	async getImage(url: string) {
		const response = await axiosWithAuth.get(this.BASE_URL + url)
		return response.data
	}
}

export const useImage = new UseImage()
