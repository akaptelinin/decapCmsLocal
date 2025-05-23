---
title: Мультиаккаунты на iOS и обработка заявок из Viber
date: 2018-10-26
category: news
tags:
  - softphone-pro
  - viber
  - zadachi
  - integratsiya
  - obnovleniya
  - redaktor-marshruta
  - formy
previewImage: october-cover630x420-from-site.png
previewText: "Плюс интеграция с Softphone.Pro, обновленный редактор маршрута, новый дизайн истории изменений в задачах и другие обновления октября. Полетели!"
author: admin
---
Плюс интеграция с Softphone.Pro, обновленный редактор маршрута, новый дизайн истории изменений в задачах и другие обновления октября. Полетели!

## Работа с несколькими аккаунтами в приложении на iOS

Если у вас несколько компаний работают в [Pyrus](https://pyrus.com/ru/product) или вы используете разные аккаунты для рабочих и личных дел, вы можете переключаться между ними внутри приложения.

![Аккаунт пользователя в мобильном приложении Pyrus](multiacc-rus.webp)

Пока радуем пользователей [iOS](https://itunes.apple.com/ru/app/pyrus/id385251753), Android на подходе — следите за анонсами.

## Интеграция с Viber

Общаетесь с клиентами в Viber? Подключите вашего бота к процессу в Pyrus, чтобы автоматически создавать из сообщений заявки, обрабатывать их и отвечать клиентам из Pyrus прямо в Viber.

[Как подключить Viber к форме Обращение клиента](/ru/help/integrations/viber)

![Интеграция Pyrus + Viber](viber-integration.webp)

## Обработка звонков из Softphone.Pro

Подключить телефонию в Pyrus можно при помощи приложения [Softphone.Pro](https://softphone.pro/). Работает так же, как интеграция с Zoiper: создает новые заявки по форме, определяет клиента во время звонка и находит его предыдущие обращения. [Подробнее о настройке](/ru/help/integrations/telephony#integracija-s-softphonepro)

![Форма Пайрус](integration-softphone.webp)

## Добавление нового этапа в любое место маршрута

Представьте, вы настроили маршрут согласования, всё работает безупречно. И тут понадобилось добавить дополнительный шаг в середину маршрута. Что делать? Конечно же, усовершенствовать действующий процесс — теперь можно [добавлять новый этап](/ru/help/workflow/editor#ehtapy-marshruta) согласования до или после текущего.

![Маршрутизация заявки в Пайрус](workflow-editor.webp)

Кстати, теперь можно [настраивать условную маршрутизацию](/ru/help/workflow/editor#uslovija-marshruta) по полю типа **Число**.

## Новая настройка в поле типа Выбор

Обычно в форме достаточно выбрать из нескольких вариантов только один: например, была ли предоплата или нет. А бывает, что нужно открыть сотруднику доступ к нескольким корпоративным системам и из десятка вариантов выбрать несколько нужных. Для таких ситуаций мы предусмотрели новую настройку поля типа **Выбор.**

![Фото 1: Настройка полей формы в Pyrus](checkboxes-dropdown.webp)

Чтобы при заполнении формы можно было выбрать несколько из предложенных вариантов, используйте [Множественный выбор](/ru/help/workflow/field-types#polzovatelskie-polja). Если вариантов много и показывать их списком неудобно, Pyrus может отобразить их в виде выпадающего меню.

## Валюта в поле типа Деньги

Раньше в русскоязычном интерфейсе Pyrus для полей типа **Деньги** мы показывали значок рубля. Теперь можно настроить значок одной из 17 мировых валют, и он появится в отчётах сводки.

![Фото 2: Настройка полей формы в Pyrus](money-currency-1.webp)

## Передача значений из полей формы в сторонние сервисы

Например, вы хотите проверить контрагента по номеру ИНН во внешней программе. Чтобы это сделать, добавьте в форму Pyrus поле типа **Примечание** с кнопкой-ссылкой на страницу проверки. Pyrus запишет в ссылку значение из поля ИНН и передаст его во внешний сервис. Подробнее [о настройке поля типа Примечание](/ru/help/workflow/field-types#primechanie).

## Новый дизайн истории изменений

Читать ленту задачи стало удобнее — мы свернули всю [историю изменений](/ru/help/tasks/working-on-tasks-together#istorija-zadachi), кроме комментариев. Если понадобится детально разобраться, кто и какие изменения вносил в задачу, нажмите на **Действия** и выберите **Показать все обновления.**

![Действия в задачах Пайрус](activity-log-open.webp)

## Примеры скриптов

Продолжаем развивать платформу Pyrus Scripting и добавили в справку [11 примеров полезных скриптов](/ru/help/scripts/sample). Они помогут скопировать значение из одного поля в другое, провалидировать и скрыть поля, автоматически изменить статус задачи при ответе, автоматически заполнить сроки SLA и т. д.