import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../components/FiltroCard'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const LeftBar = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <S.TopBar>
            <S.SearchBar>
              <BiSearchAlt2 />
              <input
                type="text"
                placeholder="Buscar"
                value={termo}
                onChange={(evento) =>
                  dispatch(alteraTermo(evento.target.value))
                }
              />
            </S.SearchBar>
            <FiltroCard />
          </S.TopBar>
          <S.ContactList>
            {/* talvez nao precise desse li, conferir dps */}
            <li>
              <Contact />
            </li>
          </S.ContactList>
          <S.AddBar>
            <div className="addcontato">
              <h3>Create Contact Card</h3>
            </div>
            <S.SquarePlus to="/addcontact">
              <h3>+</h3>
            </S.SquarePlus>
          </S.AddBar>
        </>
      ) : (
        <S.TopBar>
          <S.ButtonVoltar onClick={() => navigate('/')} type="button">
            Voltar
          </S.ButtonVoltar>
        </S.TopBar>
      )}
    </S.Aside>
  )
}

export default LeftBar
