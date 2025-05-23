---
title: Using multiple Pyrus accounts on iOS and managing your tasks from Viber
date: 2018-11-09
tags:
  - forms
  - ios
  - pyrus-app
  - script
  - softphone-pro
  - task-history
  - viber
  - workflow
previewImage: october-cover630x420-from-site-en.png
previewText: "This update covers our integration with Softphone.Pro, the new workflow editor, the new design for task history, and more. Let’s go!"
author: Yulia Pugacheva
---
This update covers our integration with Softphone.Pro, the new workflow editor, the new design for task history, and more. Let’s go!

## Working with multiple accounts in Pyrus

Good news for [iOS users](https://itunes.apple.com/us/app/pyrus/id385251753?mt=8): the Pyrus mobile app can now manage up to five accounts at once, seamlessly switching between them without logging out and logging back in.

![](multiacc-en.webp)

We’ll have this same functionality for Android users soon.

## Integrating your Viber bot with Pyrus

If you use Viber to communicate with clients, you can connect your Viber bot to the Pyrus support workflow and automatically receive their Viber messages as Pyrus tickets. From there, you can manage them like regular tasks. When your support team responds from Pyrus, the client receive their message in Viber.

[How to connect your Viber bot to your service ticket form](/en/help/integrations/viber)

![](viber-en-messages.webp)

## Integrating Softphone.Pro

You can use [SoftPhone.Pro](https://softphone.pro/) to make Pyrus work with conventional phone calls. It works like Zoiper, identifying clients during phone calls, pulling up their previous tickets, and generally getting you more information more quickly. You can read more on [configuring Softphone.Pro](/en/help/integrations/telephony#softphonepro-integration) here.

![](softphone-en.webp)

## Adding new steps to the workflow

Suppose you need to add additional checks to your workflow. You only have to [edit the initial sequence](/en/help/workflow/editor#workflow-steps), adding a new step before or after a current one.

![](workflow-en-editor.webp)

Now you can also [add conditions](https://pyrus.com/en/help/workflow/editor#workflow-conditions) for the Number field in your workflow.

## The Multiple choice field has a new setting

Sometimes it’s enough to choose one item from a multiple choice field, to identify if there was a prepayment or not, for example. But to give an employee access to corporate services, you have to choose two or more from a dozen options. For tasks like that, we added multiple selection to the Multiple choice field settings.

![](checkboxes-dropdown-en.webp)

If there are a lot of options, Pyrus can display the list in a dropdown menu.

## Currency in the Money field

The US Dollar ($) used to be the default [currency symbol](/en/help/workflow/field-types) when you set English as the interface language. Now you can choose from a list of 17 world currencies.

![](money-currency-en.webp)

## Sending information from a form to a third-party service

Suppose you want to check your partner’s tax ID number. To do that, add a button with the ${field name} parameter in the URL to the form. Pyrus will add the value from the corresponding field to the link and send it to the designated URL. Read more about [Comment field](/en/help/workflow/field-types#formatting) in our Help section.

## New design for the task activity feed

We made it easier to read [task history](/en/help/tasks/working-on-tasks-together#task-history). By default, you see only updates with comments. If you need more detail on changes that have been made to the task, click on **Action >> Show all updates.**

![](activity-log-en-open.webp)

## Script examples

We are constantly developing the Pyrus Scripting platform. In our Help section, you can find [11 useful script samples](/en/help/scripts/samples). You can use them to copy a value from one field to another, check a field’s value, hide fields, automatically change a task’s status, and more.