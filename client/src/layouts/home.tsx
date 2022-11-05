import styled, { css } from 'styled-components';

export const ContainerLayout = styled.div`
  width: 60%;
  margin: auto
`

export const NavigationLayout = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`
export const PrimaryButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  color: black;
  font-weight: 700;
`

export const Logo = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  color: black;
  font-weight: 700;
  width: 90px;
  height: 50px;
  background: transparent;
  cursor: pointer;
`

export const LoginTypeLayout = styled.div`
  margin: 10% auto;
  width: 50%;
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`
export const LoginButton = styled(PrimaryButton)`
  width: 70%;
  padding: 20px;
  border-radius: 8px;
  background-color: blue;
  color: white;
  cursor: pointer;
  margin: 0;
`

export const Loading = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.6);
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`