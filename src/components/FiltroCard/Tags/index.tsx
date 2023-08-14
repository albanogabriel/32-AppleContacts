import { useDispatch } from 'react-redux'
import { alteraTermo } from '../../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../../utils/enums/Group'

const Tags = () => {
  const dispatch = useDispatch()

  return (
    <>
      {Object.values(enums.Group).map((group) => (
        <div key={group}>
          <S.TagGroup ativo onClick={() => dispatch(alteraTermo(group))}>
            {group}
          </S.TagGroup>
        </div>
      ))}
    </>
  )
}

export default Tags
