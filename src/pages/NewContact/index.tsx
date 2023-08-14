import LeftBar from '../../containers/LeftBar'
import AddContactForm from '../../containers/NewContact'

const NewContact = () => (
  <>
    <LeftBar mostrarFiltros={false} />
    <AddContactForm />
  </>
)

export default NewContact
