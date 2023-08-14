import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contact'
import ContactClass from '../../models/Contato'

type Props = ContactClass

const InfoContact = ({
  name,
  group,
  cel: originalCel,
  notes: originalNotes,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [descriptionNotes, setDescriptionNotes] = useState('')
  const [descriptionCel, setDescriptionCel] = useState('')

  useEffect(() => {
    if (originalCel.length > 0) {
      setDescriptionCel(originalCel)
    }
  }, [originalCel])

  useEffect(() => {
    if (originalNotes.length > 0) {
      setDescriptionNotes(originalNotes)
    }
  }, [originalNotes])

  function cancelEdition() {
    setEditing(false)
    setDescriptionCel(originalCel)
    setDescriptionNotes(originalNotes)
  }
  return (
    <S.CardContato>
      <S.ProfileImgName>
        <img src="#" alt="" />
        <div>
          <h3>{name}</h3>
          <S.Grupo parametro="group" group={group}>
            {group}
          </S.Grupo>
        </div>
      </S.ProfileImgName>
      <S.InfoCelNotes>
        <div>
          <h4>Celular</h4>
          <S.DescricaoCel
            disabled={!editing}
            value={descriptionCel}
            onChange={(evento) => setDescriptionCel(evento.target.value)}
          />
        </div>
        <div>
          <h4>Notes</h4>
          <S.DescricaoNotes
            disabled={!editing}
            value={descriptionNotes}
            onChange={(evento) => setDescriptionNotes(evento.target.value)}
          />
        </div>
      </S.InfoCelNotes>
      <S.Buttons>
        {editing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  editar({
                    cel: descriptionCel,
                    group,
                    id,
                    name,
                    notes: descriptionNotes
                  })
                )
                setEditing(false)
              }}
            >
              Save
            </S.SaveButton>
            <S.CancelButton onClick={cancelEdition}>Cancel</S.CancelButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setEditing(true)}>Edit</S.EditButton>
            <S.RemoveButton onClick={() => dispatch(remover(id))}>
              Remove
            </S.RemoveButton>
          </>
        )}
      </S.Buttons>
    </S.CardContato>
  )
}

export default InfoContact
