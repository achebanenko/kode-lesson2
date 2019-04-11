import React from 'react'
import { styled } from '@ui/theme'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField } from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Exchange = ({history}) => (
  <PageTemplate>
    <Header icon="back" action={() => history.push('/')} />
    <Flex1>
      <Wrapper>

        <SelectField
          label="Страна 1"
          onPress={() => history.push({
             pathname: '/modal/select-country',
             state: { modal: true }
          })}
        />

        <SelectField
          label="Страна 2"
          onPress={() => history.push('/exchange/router-modal')}
        />

        <Divider />
        <HBox />
        <TextField
          label="Российский рубль (RUB)"
          endAdornment="₽"
          value="100"
          onChange={console.log}
        />
        <HBox />
        <TextField
          label="Фунт стерлингов (GBP)"
          endAdornment="£"
          value="1"
          onChange={console.log}
        />
        <HBox />
        <DeliveryTime
          fromAction={console.log}
          toAction={console.log}
        />
        <HBox />
        <CheckboxWithText 
          onPress={console.log}
        >
          Со всеми условиями согласен, возможно вторая строка
        </CheckboxWithText>
      </Wrapper>
    </Flex1>
    <Wrapper>
      <ButtonAccent onPress={console.log}>Отправить</ButtonAccent>
    </Wrapper>
  </PageTemplate>
)

