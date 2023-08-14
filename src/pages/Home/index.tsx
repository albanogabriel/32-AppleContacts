import ContactView from '../../containers/ContactView'
import LeftBar from '../../containers/LeftBar'

const Home = () => (
  <>
    <LeftBar mostrarFiltros={true} />
    <ContactView />
  </>
)

export default Home
