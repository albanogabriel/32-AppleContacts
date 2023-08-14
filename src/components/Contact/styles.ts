import styled from 'styled-components'
import variables from '../../styles/variables'

import { Props } from '.'

type PropsSemNome = Omit<Props, 'name'>

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div<PropsSemNome>`
  overflow-y: scroll;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? `${variables.pink}` : 'none')};
  color: ${(props) => (props.ativo ? 'white' : `${variables.grey100}`)};
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding-left: 8px;
  padding-right: 8px;
`

export const Group = styled.span<PropsSemNome>`
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? 'white' : `${variables.grey100}`)};
`
