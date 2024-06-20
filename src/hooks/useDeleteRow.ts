import { useMutation, useQueryClient } from '@tanstack/react-query'
import { rowService } from 'src/services/row.service'

export function useDeleteRow() {
	const queryClient = useQueryClient()

	const { mutate: deleteRow } = useMutation({
		mutationKey: ['deleteRow'],
		mutationFn: (id: number) => rowService.deleteRow(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['rows']
			})
		}
	})

	return { deleteRow }
}
