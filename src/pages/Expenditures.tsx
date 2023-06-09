import { useEffect, useState } from 'react'
import { useExpenditures } from '../hooks/useExpenditures'
import { CreateExpenditures } from '../components/CreateExpenditures'
import { type ExpendituresList } from '../types'

export const Expenditures: React.FC = () => {
  const { getExpenditures } = useExpenditures()
  const [expenditures, setExpenditures] = useState<any[]>([])
  useEffect(() => {
    if (expenditures.length === 0) {
      getExpenditures().then((response: { data: { data: any[] }, status: number }) => {
        const { data } = response.data
        setExpenditures(data)
      })
    }
  }, [expenditures])
  return (
    <div className='flex pt-2'>
      <div className='mx-4 pr-4  border-rose-300/30  border-r'>
        <CreateExpenditures/>
      </div>
      <div className='w-full overflow-auto h-[calc(100vh-5rem)] '>
        <table className='min-w-full divide-y mb-10'>
          <thead>
            <th>-</th>
            <th>Proveedor</th>
            <th>Descripcion</th>
            <th>Valor</th>
          </thead>
          <tbody className='divide-y  divide-gray-100 '>
            {expenditures.map((expenditure: ExpendituresList) => (
              <tr key={expenditure.id} className='text-center hover:bg-rose-200/40'>
                <td>
                  {<input
                    id={`${expenditure.id}-description`}
                    aria-describedby={`${expenditure.id}-expenditure`}
                    name="expenditures"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-rose-400/50 focus:ring-rose-400/50"
                  />}
                </td>
                <td>{expenditure.supplierDetail.name}</td>
                <td>{expenditure.description}</td>
                <td>{expenditure.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
