import * as S from './styles'
import * as enums from '../../utils/enums/Group'
import Tags from './Tags'

export type Props = {
  ativo?: boolean
  criterio: 'todas' | 'group'
  valor?: enums.Group
}

const FiltroCard = () => {
  return (
    <S.Box>
      <Tags />
    </S.Box>
  )
}

export default FiltroCard
