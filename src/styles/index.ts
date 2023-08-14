import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
`

export const button = styled.button`
  font-weight: 500;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const MainContainer = styled.main`
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  overflow-y: scroll;
  height: 100vh;
`
export const Titulo = styled.h2`
  padding-bottom: 56px;
`

export const Buttons = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: left;
`

export default EstiloGlobal
