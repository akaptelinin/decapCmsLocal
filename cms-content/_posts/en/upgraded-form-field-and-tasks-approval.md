---
title: Upgraded Form field and tasks approval
date: 2018-11-30
tags:
  - forms
  - inbox
  - managing-tasks
  - scripts
previewImage: november-cover-man-from-site-en.png
previewText: "New Pyrus features for November: fill out forms, process similar tickets, view form statistics on the dashboard, route tasks by author, supervise the work of a new employee, and more."
author: Yulia Pugacheva
---
New Pyrus features for November: fill out forms, process similar tickets, view form statistics on the dashboard, route tasks by author, supervise the work of a new employee, and more.

## Approving tasks

Now you can [approve tasks](/en/help/tasks/managing-inbox#responding-to-tasks) in the new Pyrus interface. Use one of the following statuses **Approve,** **Acknowledge,** or **Disagree.**

![](tasks-en-approve-1.webp)

## Form statistics on the dashboard

If you have [linked forms](/en/help/workflow/dashboard#form-statistics), you’ll see their stats on your dashboard. In our example, the widget shows how many contracts were signed with each vendor, and the total contract sums.

![](forms-en-dashboard-vendor.webp)

## Filling out form fields using data from a linked task

Suppose you need to add some information to a form, and that info already appears in another form. In this case, link the two tasks and Pyrus will [automatically fill out the fields](/en/help/workflow/field-types#form) of the main form using data from the attached task. If you linked a partner’s card to the contract approval form, the corresponding fields would be automatically filled out with that partner’s information.

![](form-en-fill-one.webp)

## Attaching several tasks to a form

Suppose you’re holding a meeting to discuss a project. In this case, it’s convenient to fill out a form for each task and link them to a meeting. To do this, choose Several values in the Filling section of [Form field settings](/en/help/workflow/field-types#form).

![](form-en-fill-several.webp)

You will be able to create new tasks within the form, as well as attach existing tasks to it.

![](form-en-fill-several-meeting.webp)

## Filtering the registry by a Form field

Sometimes more than one person will report a problem. For example, when your site is down, several people might report that they can’t log in. Instead of handling each ticket separately, it’s useful to link them to one problem ticket for quick filtering and batch management.

For a support specialist to link the tickets to a form describing the problem, add a form field to the service ticket form. In our example, we added the Problems form to the Service ticket form.

![](en-common-issue-form.webp)

Now we can link every ticket reporting the same problem to the common task.

![](en-common-issue.webp)

Now a support specialist can filter linked tickets and close them simultaneously when the problem is resolved.

![](en-common-issue-filter.webp)

## Automatic field changing for tickets received from any channel

Suppose you have several email addresses for receiving client requests, as well as a Facebook page and a Telegram bot. To identify where a request came from, you can configure an autocomplete for the Category field in tasks. This is useful for filtering these requests in a form registry and analyzing them from a dashboard.

![](fb-en-change-fields.webp)

To learn how to configure automatic field changing for [email messsages](/en/help/integrations/email#how-to-automatically-change-form-fields), [Facebook](/en/help/integrations/facebook#how-to-automatically-change-form-fields), [Telegram](/en/help/integrations/telegram#automatic-field-changing), and [Viber](/en/help/integrations/viber#how-to-automatically-change-form-fields), visit our Help section.

## Routing by author

Conditioning your workflow [by author](/en/help/workflow/editor#workflow-conditions) will be useful if you are supervising the work of a new employee, or cross-checking work with a colleague. In the workflow settings, select the Author field, choose Equal to, and add your colleague’s name. Now every task they create will be forwarded to your Inbox.

![](workflow-en-author.webp)

## Other updates

You can designate [preset values](/en/help/workflow/field-types#catalog) for the Catalog field. For example, if a Support plan field in the service agreement form should always be filled out, you can set Basic as the default value.

![](fields-en-catalog-default.webp)

To come back to it later, [mark the task as unread](/en/help/tasks/managing-inbox#mark-a-task-as-unread).

![](tasks-en-mark-unread1.webp)

If there are participants in the task that aren’t in your contacts, you can add them from the task.

![](users-en-add.webp)

Pyrus scripts now work in all web forms. You can find [11 examples](/en/help/scripts/sample) of the most-used scripts in our Help section. If you need a script that isn’t listed there, feel free to [contact us](mailto:support@pyrus.com) — we’re here to help.