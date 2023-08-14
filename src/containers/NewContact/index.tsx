import { FormEvent, useState } from 'react'
import { MainContainer, Titulo } from '../../styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import * as enums from '../../utils/enums/Group'
import { cadastrar } from '../../store/reducers/contact'

const AddContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [cel, setCel] = useState('')
  const [notes, setNotes] = useState('')
  const [group, setGroup] = useState(enums.Group.ALL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    // o 1( o id não será passado porque estamos omitindo o id lá no payload em store > reducers > contact > cadastrar)
    dispatch(cadastrar({ name, group, cel, notes }))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Add New Contact</Titulo>
      <S.FormDiv onSubmit={cadastrarTarefa}>
        <S.campo
          value={name}
          onChange={(evento) => setName(evento.target.value)}
          type="text"
          placeholder="Name"
        />
        <S.campo
          value={cel}
          onChange={(evento) => setCel(evento.target.value)}
          type="text"
          placeholder="cel number"
        />
        <S.campo
          as="textarea"
          value={notes}
          onChange={(evento) => setNotes(evento.target.value)}
          placeholder="Notes"
        ></S.campo>

        <S.Opcoes>
          <p>Group</p>
          {Object.values(enums.Group).map((group) => (
            <S.Opcao key={group}>
              <input
                value={group}
                name="group"
                type="radio"
                id={group}
                onChange={(evento) =>
                  setGroup(evento.target.value as enums.Group)
                }
                defaultChecked={group === enums.Group.ALL}
              />
              <label htmlFor={group}>{group}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.SaveButton type="submit">Create</S.SaveButton>
      </S.FormDiv>
    </MainContainer>
  )
}

export default AddContactForm
