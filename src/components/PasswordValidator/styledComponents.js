// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputCard = styled.div`
  background-color: #475569;
  box-shadow: 0px 4px 16px #434451;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 30px 45px 30px;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 40px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 1px;
`
export const InputElement = styled.input`
  background-color: #ffffff;
  border-width: 0px;
  width: 400px;
  outline: none;
  padding: 12px;
  margin-top: 50px;
`
export const Message = styled.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  font-family: 'Roboto';
`
