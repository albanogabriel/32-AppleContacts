import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'
import { button } from '../../styles'

export const Aside = styled.aside`
  background-color: ${variables.grey30};
  height: 100vh;
  position: relative;
`

export const TopBar = styled.div`
  background-color: ${variables.grey10};
  padding: 12px;
`

export const SearchBar = styled.div`
  border: 1px solid ${variables.grey100};
  border-radius: 8px;
  padding: 2px;
  display: flex;
  padding: 4px;

  input {
    background-color: ${variables.grey10};
    border: none;
    width: 100%;
    padding-left: 4px;
  }
`
export const ContactList = styled.div`
  padding: 8px;
  overflow-y: scroll;
  height: 80vh;
`

export const AddBar = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 64px;
  background-color: ${variables.grey10};
  border: 1px solid grey;
  align-items: center;
  justify-items: center;

  h3 {
    margin: 0;
  }

  .addcontato {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;

    h3 {
      font-weight: 300;
      font-size: 16px;
    }
  }
`

export const SquarePlus = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid grey;
  height: 100%;
  width: 20%;
  text-decoration: none;

  h3 {
    font-weight: 300;
    font-size: 24px;
  }
`

export const Linkdiv = styled(Link)``

export const ButtonVoltar = styled(button)`
  background-color: ${variables.grey80};
  color: #fff;
`
