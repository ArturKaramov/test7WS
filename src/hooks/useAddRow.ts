import { useMutation, useQueryClient } from '@tanstack/react-query'
import { rowService } from 'src/services/row.service'
import { TRowCreate } from 'src/types/rows'

export function useCreateRow() {
  const queryClient = useQueryClient()

  const { mutate: createRow } = useMutation({
    mutationKey: ['createRow'],
    mutationFn: (data: TRowCreate) => rowService.createRowInEntity(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['rows']
      })
    }
  })

  return { createRow }
}
