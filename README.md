# 2 занятие

## Домашнее задание

- указать в readme.md декомпозицию, оценку, реально затраченное время
- реализовать компонент выбора пола
- реализовать 5 экран (обновления есть в фигме). Экран не надо прописывать в сторибуке, он просто должен открываться при запуске приложения
- переписать компонент Checkbox/CheckboxWithText для работы с formik
- подключить formik и yup к 5 экрану
- рекомендации по правилам валидации по каждому полю - в комментариях в фигме, можете добавлять свои
- при сабмите формы выводить данные формы в консоль


### Дополнительные задания

- полключить react-router v5.0
- сделать 4 страницу модальным окном, открывающимся по клику на селект
- можно использовать библиотеку react-roluter-modal для анимаций

### Ссылки:
formik https://github.com/jaredpalmer/formik

yup https://github.com/jquense/yup

redux-form https://redux-form.com/8.1.0/

react-router-modal https://github.com/davidmfoley/react-router-modal

### Дедлайн

Четверг, 12 апреля, 12:00 KGD

# Процесс выполнения

## Результат

https://artchebanenko.github.io/lesson-2/  

Contents:  
- Registration - Formik and Yup
- Exchange
  - country1 - my modal with fade-in and outsideClick and display with direct URL
  - country2 - react-router-modal with animation

### Time

|Task|Est|Fact|
|-|-|-|
|Setup|1 hour|1 hour|
|Gender RadioButtonGroup|3 hours|4 hours|
|FormRegistration|1 hour|1 hour|
|CheckboxWithText|2 hours|1 hour|
|Formik|1 hours|1 hours|
|Yup|2 hours|2 hours|
|***|
|react-router, history|1 hour|1 hour|
|Exchange layout|1 hour|1 hour|
|My modal|3 hours|3 hours|
|react-router-modal, transtition|2 hours|2 hours|

### Workflow

**Gender**  
atoms IconRadioButtonOn IconRadioButtonOff  
molecule RadioButton  
molecule RadioButtonGroup  
_storyState  

**Registration**
page  
props with Formik  
schema with Yup  

**CheckboxWithText**  

**Modal**  
switch  
history.push with state modal  
styled and keyframes  
useEffect for body.style.overflow  
outsideClick  

**react-router-modal**  
install  
switch  
transition  
