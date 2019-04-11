import React from 'react'
import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'

export const SelectCountry = (props) => {
  return (
    <PageTemplate>
      <ModalHeader action={props.history.goBack}>
        <SearchInput onChange={console.log} />
      </ModalHeader>
      <HBox />

      <CountriesList
        title={'История поиска'}
        list={[
          { title: 'Российская Федерация', id: 'RF' },
          { title: 'Соединенные Штаты Америки', id: 'USA' },
        ]}
        selectCountry={console.log}
      />
      <SearchStatus status="initial" />
    </PageTemplate>
  )
}