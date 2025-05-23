---
title: Большое обновление Service Desk
date: 2018-09-06
category: news
tags:
  - service-desk
  - integratsiya
  - otchety
  - sluzhba-podderzhki
  - formy
previewImage: main-image-from-site.png
previewText: "Рассказываем о главных результатах апгрейда формы для обращения клиентов: интеграция с телефонией, правила SLA и многое другое."
author: admin
---
Рассказываем о главных результатах апгрейда [формы для обращения клиентов:](https://pyrus.com/ru/servicedesk) интеграция с телефонией, правила SLA и многое другое.

## Интеграция с IP-телефонией

В Pyrus появилась интеграция с решениями для VoIP-телефонии и готовая настройка на базе приложения Zoiper.

Когда вам звонят, Pyrus определяет номер телефона и автоматически открывает новую заявку. Если есть другие заявки с таким же номером телефона, вы увидите их справа в блоке **Задачи с этим же контактом.** Это помогает распознать повторяющуюся проблему и предотвратить дублирование заявок. В поле **Клиент** Pyrus подскажет, кто из ваших клиентов может звонить с этого номера.

![Заявка с интегрированной IP-телефонией в Пайрус](telephony-01.webp)

[Как включить интеграцию с телефонией](/ru/help/integrations/telephony)

## Правила SLA для разных условий

Если вы предлагаете клиентам разные уровни сервиса, целевой срок решения может зависеть не только от критичности заявки, но и от уровня обслуживания. Вопрос клиента с премиум-тарифом должен решаться быстрее, чем аналогичный вопрос у клиента со стандартным тарифом.

Настройка **Правила SLA** нужна как раз для этого: вы задаёте, какое время и для каких заявок отводится на решение вопроса.

![Настройка правил SLA в Pyrus](sla.webp)

В этом примере вопросы с высоким приоритетом нужно решать за час, со средним — за два, а с низким — за восемь часов. Заявки от трёх указанных клиентов необходимо закрывать за 2 часа независимо от приоритета — если сработают несколько условий, применяется первое по порядку правило с выполненным условием.

[Как настроить правила SLA](/ru/help/servicedesk/sla)

## Оценки клиентов в ВК и Telegram

Раньше клиент мог оценить качество сервиса, если он отправлял заявку по электронной почте. Теперь оценки появились ещё в двух каналах: ВКонтакте и Telegram.

![Клиенты оценивают сервис в ВКонтакте и Telegram, а их оценки вы видите в Pyrus](customer-satisfaction.webp)

Напомним, оценки и комментарии клиентов доступны в реестре заявок, а в сводке есть не только общая удовлетворённость клиентов, но и средние оценки каждого специалиста.

![Удовлетворенность клиентов в сводке Пайрус](customer-satisfaction-01.webp)

[Как включить оценки сервиса](/ru/help/servicedesk/customer-satisfaction)

## Готовые ответы для внутренней переписки

Готовые ответы — это текстовые заготовки для работы с заявкой, которые помогают быстро запросить уточняющую информацию или, например, сообщить о статусе решения.

Раньше готовые ответы были доступны для общения с клиентами. Теперь — и во внутренней переписке с коллегами. Некоторые компании используют формы Pyrus для поддержки сотрудников, и готовые ответы упрощают эту работу.

![Настраиваем готовые ответы клиентам в форме Pyrus](quick-reply.webp)

В этом примере уточняющий комментарий — это заранее заготовленный шаблон. Имя в приветствии меняется в зависимости от того, кто отправил заявку.

[Как настроить и использовать готовые ответы](/ru/help/integrations/answers)

## Новый отчёт «Время согласования на этапах»

Этот отчёт показывает медианное и максимальное время согласования на каждом этапе. Временем согласования считается число минут или часов, за которое специалист передаёт заявку на следующий этап.

Отчёт детализируется не только по этапам согласования, но и по ролям и специалистам поддержки.

![Отчет «Время согласования на этапах» в Пайрус](dashboard.webp)

## Экспорт данных из сводки в Excel

Некоторым руководителям удобнее оценивать отчёты по KPI в виде таблиц. Для такого случая сделали экспорт сводки в xlsx-файл. Выбираем отчётный период и нужные блоки сводки, нажимаем **Экспорт,** и отчёт готов для детального анализа в Excel.

![Экспорт данных из сводки Pyrus в Excel](dashboard-export.webp)

Каждая вкладка — отдельный отчёт сводки. На первой вкладке есть общая статистика и ссылки на остальные отчёты.

![Сводка Pyrus в Excel](dashboard-export-excel.webp)

Экспорт сводки работает во всех формах Pyrus.

## Новый вопрос — новая заявка

Типичный случай: у клиента появился вопрос, он открывает старую переписку с техподдержкой и в ответном письме задаёт новый вопрос. В системе это выглядит как заявка с одной темой, в которой обсуждаются разные проблемы. Это неправильно, поэтому при обращении в техническую поддержку мы часто видим фразу «Пожалуйста, создавайте отдельную заявку для нового вопроса».

Для таких ситуаций мы сделали гибкую настройку в канале **E-mail.** Просто укажите время, после которого обращение в старую заявку будут автоматически открывать новый тикет.

![Новый вопрос клиента — новая заявка в Пайрус](new-request.webp)

## Другие полезные обновления

— При наведении на файл в задаче теперь видно, кто и когда его добавил:

![Вложенный файл в задаче Pyrus](files.webp)

— Если вы пользуетесь статусами заявок, настройте обновление статуса при ответе по электронной почте. Например, специалист задаёт клиенту уточняющий вопрос и переводит заявку в статус «Запрос информации». Когда клиент отвечает, статус автоматически меняется на «В работе».

![ Обновление статуса завяки Pyrus при ответе клиента по электронной почте.](statuses.webp)

— Если вы ещё не пробовали Service Desk и хотите принимать обращения клиентов, воспользуйтесь [быстрой установкой формы](https://pyrus.com/t#install/3).

На этом пока всё. В следующий раз расскажем о тонкостях маршрутизации по колонке справочника. Оставайтесь на связи!