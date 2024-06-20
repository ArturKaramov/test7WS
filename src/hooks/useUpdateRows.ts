import { useMutation, useQueryClient } from '@tanstack/react-query'

import { rowService } from 'src/services/row.service'
import { TRowUpdate } from 'src/types/rows'

export function useUpdateRow(key: number) {
  const queryClient = useQueryClient()

  const { mutate: updateRow } = useMutation({
    mutationKey: ['updateRow', key],
    mutationFn: ({ id, data }: { id: number; data: TRowUpdate }) =>
      rowService.updateRow(id, data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['rows'] })
    }
  })
  return { updateRow }
}
