import styled from 'styled-components'
import { button } from '../../styles'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Group'

type TagProps = {
  group?: enums.Group
  parametro: 'group'
}

function BackgroudGroupColor(props: TagProps): string {
  if (props.parametro === 'group') {
    if (props.group === enums.Group.FAMILY) return variables.green
    if (props.group === enums.Group.FRIENDS) return variables.red
    if (props.group === enums.Group.LOVE) return variables.pink
    if (props.group === enums.Group.WORK) return variables.grey100
  }
  return '#ccc'
}

export const CardContato = styled.div`
  border-radius: 32px;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 40px 48px;
  margin-bottom: 32px;
  background-color: ${variables.grey01};
  max-width: 800px;
`

export const ProfileImgName = styled.div`
  display: flex;
  align-items: center;

  div {
    padding-left: 8px;
  }

  img {
    height: 66px;
    width: 66px;
    border-radius: 50%;
    background-color: grey;
  }

  h3 {
    margin-bottom: 2px;
  }
`
export const Grupo = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 500;
  color: #fff;
  background-color: ${(props) => BackgroudGroupColor(props)};
  border-radius: 4px;
`

export const InfoCelNotes = styled.div`
  padding-top: 40px;

  div {
    padding-bottom: 8px;

    h4 {
      padding-right: 8px;
    }
  }
`

export const DescricaoCel = styled.textarea`
  background-color: ${variables.grey01};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  height: 24px;
  resize: none;
  border: none;
`

export const DescricaoNotes = styled(DescricaoCel)`
  height: 40px;
`

export const Buttons = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: left;
`

export const EditButton = styled(button)`
  background-color: ${variables.pink};
  color: #fff;
  margin-right: 8px;
`

export const RemoveButton = styled(button)`
  background-color: #5555;
  color: #262626;
`

export const SaveButton = styled(button)`
  background-color: ${variables.green};
  color: #fff;
  margin-right: 8px;
`
export const CancelButton = styled(button)`
  background-color: ${variables.red};
  color: #fff;
`
