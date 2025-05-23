---
title: Роли в системе Pyrus
date: 2015-08-28
category: practice
tags:
  - lajfhaki
  - marshrutizatsiya
  - predydushhaya-versiya-interfejsa
  - priemy-raboty
  - roli
previewImage: Screenshot_14-630x420-from-site.png
previewText: "Продолжаем свой рассказ про возможности системы Pyrus при настройке процессов. Давайте рассмотрим, что можно сделать, если у нас есть несколько сотрудников на одной должности, которые должны быть взаимозаменяемы. Для таких ситуаций в систему был добавлен механизм Ролей."
author: admin
---
Продолжаем свой рассказ про возможности системы Pyrus при настройке процессов.  Давайте рассмотрим, что можно сделать, если у нас есть несколько сотрудников на одной должности, которые должны быть взаимозаменяемы. Для таких ситуаций в систему был добавлен механизм Ролей.

Совсем недавно мы писали про [условную видимость разделов](https://pyrus.com/ru/blog/2015/08/uslovnaya-vidimost-razdelov-v-formah.html) на примере запроса в поддержку. Для ускорения проведения работ, ремонт должен производить первый освободившийся инженер. Но как система должна понять, кто из них свободен в каждый момент? Кто может сказать ей об этом? Получается, что надо держать в голове график работы других сотрудников. Тяжело!

Мы не будем так делать. Вместо сложных алгоритмов, мы создадим отдельную роль Инженер и включим в нее всех сотрудников с этой должностью. Вот как это делается.

Сначала зайдем в редактор ролей.

![Вход в редактор ролей](Vhod-v-redaktor-rolej.webp)

В нем выберем **Создать новую роль**. Добавим роли название и список участников, а затем сохраним изменения.

![Создание роли](Sozdanie-roli.webp)

После создания роль станет полноценным участником системы. Посмотрите, как она выглядит в списке маршрутизации:

![Снимок экрана 2015-08-21 в 19.35.49](Snimok-ekrana-2015-08-21-v-19.35.49.webp)

В этом списке есть две роли Инженер и Руководитель. Если этап согласования должен быть закрыт ролью, то задача попадет во входящие сразу всем ее участникам. И как только кто-нибудь согласует ее, она перейдет на следующий этап. Похожая ситуация и при назначении роли в качестве ответственного.

А для того, чтобы понять поставлена ли задача на вас лично, или на всех участников роли, можно воспользоваться переключателем вида для списка входящих:

![Снимок экрана 2015-08-28 в 14.11.41](Snimok-ekrana-2015-08-28-v-14.11.41.webp)