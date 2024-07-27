// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  InputCard,
  Heading,
  Description,
  InputElement,
  Message,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, updatePassword] = useState('')
  const [message, clearMessage] = useState(
    'Your password must be at least 8 characters',
  )
  const displayMessage = () => {
    if (password.length > 7) {
      clearMessage('')
    } else {
      clearMessage('Your password must be at least 8 characters')
    }
  }
  const onChangePassword = event => {
    updatePassword(event.target.value)
    displayMessage()
  }

  // displayMessage()
  return (
    <MainContainer>
      <InputCard>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputElement type="password" onChange={onChangePassword} />
        <Message>{message}</Message>
      </InputCard>
    </MainContainer>
  )
}
export default PasswordValidator
