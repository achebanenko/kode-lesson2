import React from 'react'
import { Header } from '@ui/molecules'
import { PageTemplate } from '@ui/atoms'
import { FormRegistration } from '@ui/organisms'

export const Registration = ({ history }) => (
  <PageTemplate>
    <Header icon="back" action={() => history.push('/')} title="Регистрация" />
    <FormRegistration  />
  </PageTemplate>
)