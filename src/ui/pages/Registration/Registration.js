import React from 'react'
import { styled } from '@ui/theme'
import { FormRegistration } from '@ui/organisms'
import { Header } from '@ui/molecules'
import { PageTemplate } from '@ui/atoms'

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Registration = () => (
  <PageTemplate>
    <Header icon="back" title="Регистрация" />
    <ContentWrapper>
      <FormRegistration />
    </ContentWrapper>
  </PageTemplate>
)