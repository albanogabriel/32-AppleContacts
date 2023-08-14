import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contato'
import * as enums from '../../utils/enums/Group'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Gabriel Albano da Silva',
      group: enums.Group.WORK,
      cel: '48 999865898',
      notes: 'testing the notes'
    },
    {
      id: 2,
      name: 'Messi',
      group: enums.Group.FAMILY,
      cel: '48 32326-5898',
      notes: 'Pablina: Notes'
    },
    {
      id: 3,
      name: 'Neymar',
      group: enums.Group.LOVE,
      cel: '48 32326-5898',
      notes: 'Pablina: Notes'
    },
    {
      id: 4,
      name: 'Barbie',
      group: enums.Group.FRIENDS,
      cel: '48 32326-5898',
      notes: 'Pablina: Notes'
    },
    {
      id: 5,
      name: 'Oppenheimer',
      group: enums.Group.FAMILY,
      cel: '48 32326-5898',
      notes: 'Pablina: Notes'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contatoAlreadyExists = state.itens.find(
        (contact) =>
          contact.name.toLocaleLowerCase() ===
          action.payload.name.toLocaleLowerCase()
      )

      if (contatoAlreadyExists) {
        alert('já existe um contato com esse nome')
      } else {
        // [1, 2, 3, 4, 5]
        // .length / 5
        // .length - 1 / irá retornar o último item do array
        // então a const ultima contato será:
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactSlice.actions
export default contactSlice.reducer
