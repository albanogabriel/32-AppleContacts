import InfoContact from '../../components/InfoContact'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ContactView = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.name.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >=
            0 ||
          item.group.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
    }
    return contatosFiltrados
  }

  return (
    <MainContainer>
      <Titulo>My Contacts</Titulo>

      {termo === 'all' ? (
        <div>
          {itens.map((t) => (
            <div key={t.name}>
              <InfoContact
                id={t.id}
                name={t.name}
                group={t.group}
                cel={t.cel}
                notes={t.notes}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div>
            {filtraContatos().map((t) => (
              <div key={t.name}>
                <InfoContact
                  id={t.id}
                  name={t.name}
                  group={t.group}
                  cel={t.cel}
                  notes={t.notes}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </MainContainer>
  )
}

export default ContactView
