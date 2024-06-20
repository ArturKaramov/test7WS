import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { rowService } from 'src/services/row.service'
import { IRow } from 'src/types/rows'

export function useRows() {
  const { data } = useQuery({
    queryKey: ['rows'],
    queryFn: () => rowService.getTreeRows()
  })

  const [rows, setRows] = useState<Array<IRow> | undefined>(data)

  useEffect(() => {
    setRows(data)
  }, [data])

  return { rows, setRows }
}
