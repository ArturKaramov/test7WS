import { TRowCreate, TRowUpdate } from 'src/types/rows'

class RowService {
	private ID = '126436'
	private BASE_URL = `http://185.244.172.108:8081/v1/outlay-rows/entity/${this.ID}/row`

	private async _request(
		params: string,
		options?: {
			method: string
			headers: {
				'Content-Type': 'application/json'
			}
			body?: string
		}
	) {
		const res = options
			? await fetch(`${this.BASE_URL}${params}`, options)
			: await fetch(`${this.BASE_URL}${params}`)

		return res.json()
	}

	async getTreeRows() {
		const res = await this._request('/list')
		return res
	}

	async createRowInEntity(data: TRowCreate) {
		const res = await this._request('/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		return res
	}

	async updateRow(id: number, data: TRowUpdate) {
		console.log(data)
		const res = await this._request(`/${id}/update`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		return res
	}

	async deleteRow(id: number) {
		const res = await this._request(`/${id}/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return res
	}
}

export const rowService = new RowService()
