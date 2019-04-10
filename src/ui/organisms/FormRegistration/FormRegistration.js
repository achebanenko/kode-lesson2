import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextField, RadioButtonGroup, TextareaField, CheckboxWithText, ButtonAccent } from '@ui/molecules'
import { HBox } from '@ui/atoms'

const initialValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  gender: '',
  about: '',
  terms: false
}

const schema = Yup.object().shape({
  firstname: Yup.string()
    .required('Обязательное поле')
    // eslint-disable-next-line
    .min(3, 'От ${min} символов')
    // eslint-disable-next-line
    .max(20, 'До ${max} символов')
  ,
  lastname: Yup.string()
    .required('Обязательное поле')
    // eslint-disable-next-line
    .min(3, 'От ${min} символов')
    // eslint-disable-next-line
    .max(20, 'До ${max} символов')
  ,
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(/^[0-9]+$/, 'Только цифры')
    // eslint-disable-next-line
    .length(10, 'Всего ${length} цифр')
  ,
  email: Yup.string()
    .required('Обязательное поле')
  ,
  gender: Yup.string()
    .required('Выберите пол')
  ,
  about: Yup.string()
    // eslint-disable-next-line
    .max(200, 'Не более ${max} символов')
  ,
  terms: Yup.boolean()
    .test('agree-to-terms' ,'Вы согласны?', value => value === true)
})

const handleSubmit = values => {
  const obj = values
  const str = JSON.stringify(obj, null, 4)
  console.log(str)
}

export const FormRegistration = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={Form}
    />
  )
}

const Form = props => (
  <form>
    <TextField key="firstname" 
      name="firstname"
      label="Ваше имя"
      placeholder="Иван"
      value={props.values.firstname}
      onChange={value => props.setFieldValue('firstname', value)}
      onBlur={props.handleBlur}
      error={props.touched.firstname && props.errors.firstname}
    />
    <HBox/>
    <TextField key="lastname"
      name="lastname"
      label="Ваша фамилия"
      placeholder="Иванов"
      value={props.values.lastname}
      onChange={value => props.setFieldValue('lastname', value)}
      onBlur={props.handleBlur}
      error={props.touched.lastname && props.errors.lastname}
    />
    <HBox/>
    <TextField key="phone"
      name="phone"
      label="Номер телефона"
      startAdornment="+7"
      placeholder="XXXXXXXXXX"
      value={props.values.phone}
      onChange={value => props.setFieldValue('phone', value)}
      onBlur={props.handleBlur}
      error={(props.errors.phone === 'Только цифры' && props.errors.phone) || (props.touched.phone && props.errors.phone)}
    />
    <HBox/>
    <TextField key="email"
      name="email"
      label="Email"
      placeholder="simple@mail.com"
      value={props.values.email}
      onChange={value => props.setFieldValue('email', value)}
      onBlur={props.handleBlur}
      error={props.touched.email && props.errors.email}
    />
    <HBox/>

    <RadioButtonGroup key="gender"
      name="gender"
      label="Пол"
      options={[{value: 'male', label: 'муж.'}, {value: 'female', label: 'жен.'}]}
      value={props.values.gender}
      onPress={value => props.setFieldValue('gender', value)}
      error={props.touched.firstname && props.touched.lastname && props.touched.email && props.touched.phone && props.errors.gender}
    />
    <HBox/>

    <TextareaField key="about"
      name="about"
      label="Немного о себе"
      placeholder="Ваше хобби, любимые книги и т.д."
      value={props.values.about}
      onChange={value => props.setFieldValue('about', value)}
      onBlur={props.handleBlur}
      error={props.touched.about && props.errors.about}
    />
    
    <HBox height={20} />
    <CheckboxWithText
      name="terms"
      children={<div>Со всеми <a href="//link">условиями</a> согласен вторая строка</div>}
      value={props.values.terms}
      onPress={value => props.setFieldValue('terms', !value)}
      error={props.touched.firstname && props.touched.lastname && props.touched.email && props.touched.phone && props.errors.terms}
    />

    <HBox height={24} />
    <ButtonAccent 
      disabled={!props.isValid} 
      loading={props.isSubmitting}
      onPress={props.handleSubmit}
    >
      Отправить
    </ButtonAccent>
  </form>
)