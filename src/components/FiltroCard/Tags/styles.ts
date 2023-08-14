import styled from 'styled-components'
import variables from '../../../styles/variables'

type Props = {
  ativo?: boolean
}

export const TagGroup = styled.div<Props>`
  font-size: 8px;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 8px;
  color: ${variables.grey80};
  border: 1px solid
    ${(props) => (props.ativo ? `${variables.grey80}` : 'transparent')};
  font-weight: 500;
  cursor: pointer;
`
