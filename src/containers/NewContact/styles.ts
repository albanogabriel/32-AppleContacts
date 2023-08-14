import styled from 'styled-components'
import variables from '../../styles/variables'
import { button } from '../../styles'

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    resize: none;
  }
`

export const campo = styled.input`
  border: 1px solid ${variables.grey100};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: #fff;
  width: 100%;
  max-width: 547px;
`
export const Opcoes = styled.div`
  margin-bottom: 24px;
  font-size: 14px;

  p {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 16px;
  }

  label {
    margin-right: 16px;
  }
`

export const SaveButton = styled(button)`
  background-color: ${variables.green};
  color: #fff;
  margin-right: 8px;
  width: 100%;
  padding: 12px 0px;
  max-width: 120px;
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;

  label {
    margin-left: 4px;
  }
`
