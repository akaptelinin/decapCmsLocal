---
title: "Pyrus Updates: related tasks access status and business process owners in forms"
date: 2021-04-15
categories:
  - pyrus
  - work
  - workflow-automation
tags:
  - associated-tasks
  - forms
  - scripts
previewImage: Рассылка-март-630х420-from-site-en.png
previewText: "Forms now allow you to indicate who is responsible for a business process in general. When working with related tasks, you no longer have to guess whether you have been granted access to them. See if you have access to an associated task from your current task, instead of navigating."
author: Yulia Bystrova
---
Forms now allow you to indicate who is responsible for a business process in general. When working with related tasks, you no longer have to guess whether you have been granted access to them. See if you have access to an associated task from your current task, instead of navigating.

**Do I have access?**

It used to be that a colleague would send you a link to a related task as part of a project, you would click on it, and discover that they had neglected to grant you access. The guessing game is over! The access status of related tasks is now visible right in the comments thread, so you can immediately tell if you have been given access.

If you have access, the task shows up in green; if not, it’s grayed out and there’s a lock next to it. If a task you have access to has unread comments, the link is bold. Completed tasks are grayed out and struck through.

![Access to associated tasks width=](access.webp)

**Delegating areas of responsibility**

Any business process has to have an owner, or else no one will be responsible for anything. Pyrus form tasks now allow you to indicate and see the owner of a process, as well as the form’s author - the person who set up and launched the business process.

When a form is created, its author is indicated automatically, so you can always go to them for clarification on details of the process, or to discuss improvements. The owner of the business process can be indicated on the form access page. This status does not grant any additional rights for setting up the process, it’s just there to let everyone involved in the process know who is responsible.

![The owner of the business process](owner.webp)

**If the name of a field in your form has changed, the script will still work!**

Scripts allow you to expand the functionality of Pyrus forms - to automatically determine field definitions and check data entered by users. Normally, a script references the name of a field that needs to be defined. But if, accidentally, or out of necessity, that name has been changed, the script would simply stop working. Or if, for example, a field with an already existing name has appeared in the form template, the script will not know what to define.

You can now tie a unique (“u\_12345” type) id number to fields to avoid confusion in requests with similar, identical or changed field names. The script will always reference the field you need, and it will not break when the name is changed.

[More about scripts](https://pyrus.com/en/help/scripts/quick-start)

If you have questions about setting up or using our updates, please contact us at [support@pyrus.com](mailto:support@pyrus.com). We’re happy to help!