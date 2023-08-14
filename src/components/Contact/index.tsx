import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

export type Props = {
  ativo?: boolean
}

const Contact = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()

  const verificaEstaAtivo = (name: string): boolean => {
    return termo === name
  }

  return (
    <>
      {itens.map((t) => (
        <div key={t.id}>
          <div onClick={() => dispatch(alteraTermo(t.name))}>
            <S.Card ativo={verificaEstaAtivo(t.name)}>
              <S.Container>
                <S.Name>{t.name}</S.Name>
                <S.Group ativo={verificaEstaAtivo(t.name)}>{t.group}</S.Group>
              </S.Container>
            </S.Card>
          </div>
        </div>
      ))}
    </>
  )
}

export default Contact
