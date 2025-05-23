---
title: The Fundamental Problem With Conventional Support Systems
date: 2015-02-12
previewText: "Last year I left a company that ran on Pyrus to join a much larger company that simply relied on email to get everything done. It was hard to get reacquainted with email in everyday work, but it only means I discovered another industry which badly needs a Pyrus-style communications product: IT support."
author: Vasily Shabat
---

![attachment](attachment-1024x768.webp)

Last year I left a company that ran on Pyrus to join a much larger company that simply relied on email to get everything done. It was hard to get reacquainted with email in everyday work, but it only means I discovered another industry which badly needs a Pyrus-style communications product: IT support.

Our company is a retailer with 20,000 employees. 800 of these are in the main office, and the remaining 19,200 are spread out across our 350 stores. Here’s what I’ve learned about our IT support processes after working here for one year.

1. Despite everyone thinking that IT support is handled by dedicated or semi-dedicated staff, in reality, many people participate in resolving issues who are not support staff at all.
2. Despite everyone thinking support issues are processed in a linear fashion, from analyze to fix to deploy to verify, it actually branches wildly into many interrelated tasks that must be performed in parallel to each other. This process is more complicated than support systems allow.

My organization’s support setup is rather typical. Tickets are registered in the support system through e-mail or web and are issued a tracking number. The ticket then travels according to certain routing rules between support staff, until it is closed.

Now, what exactly is this “support staff?” It’s merely someone in IT who devotes a percentage of his or her time to support. These are:

- the support hotline staff, who register incidents and assist in resolving known ones (100% dedicated to support)
- people from IT operations who resolve hardware, network, and platform issues, (roughly 50% of their time spent on support)
- the developers who fix software bugs (10% to 100% of their time depending on their role and the project’s stage)
- a layer of analysts needed to make sense of a business issue and restate it in developer-friendly terms (also accounting for 10% to 100% of their time)

According to our management, that's everyone you need to resolve a support issue. As we discovered in practice, however, there are many more people who must be involved in other capacities.

**You need someone to do manual data fixes.** When a system malfunctions, it often results in incorrect data in the database. Fixing the bug will prevent this problem in the future but will not correct what happened in the past, and these problems may be quite tangible. We're an electronics retailer, so a missing customer delivery order means the delivery doesn’t take place. We’d obviously rather avoid the customer’s complaint, which is why such data problems then need to be fixed immediately, and usually manually.

**You need someone to do workaround solution design.** Live operations cannot wait for weeks until the issue is fixed in the software, so some form of workaround solution must be developed, tested, and communicated to the stores. In case of customer deliveries the workaround was to email the order to HQ. In this instance, such responsibility lies with Retail Management.

**You need someone to create new software tests.** A bug in the production system means a gap in testing, so new tests must be added. This is a task for the testing team in IT, but for those who are not designated as "support people". For example, there were no extra testers when extra support resources were provided during system stabilization.

**You need someone to master data or configuration data updates.** Sometimes the cause of the malfunction is not in the software code, but the data that is managed by another part of the business. For example, an order for a dishwasher may have been rejected because the dishwasher is incorrectly classified as personal electronics, which are not subject to delivery per company policy. This is a task for the business division that has jurisdiction over that data.

**Someone needs to handle escalation.** When some of the tasks above are delayed, you need an additional managerial push, perhaps with a request for priority increase. This can be handled by almost any manager in the organization. In our case, it comes most frequently from the store managers and regional directors. 

As you see, these tasks are usually performed by non-”support people", many of whom do not even have an account in the support system and/or do not know how to use it.

So what happens? You guessed it — emails, lots of them. The important information gathering is happening throughout this correspondence, and no one in the team is sure whether necessary information is contained in the emails or in the ticket body itself.

You will also have noticed that the tasks happen in parallel. While the linear sequence with one status per ticket ("in analysis", "in development", "in testing" etc) makes sense for the "support people" tasks, it is irrelevant to the others. This only sets you up for frustration and creates a tracking and reporting hell. Does "ticket closed" mean that all the tasks have been performed, or just that the bug has been identified and fixed? How do you know from the ticket whether communications about the workaround solution were sent or not? You don’t!

I really miss Pyrus in all this. When everything is just a task, you don't need to worry whether the person you assign it to is a "support person", you just create it, assign it, link it to the necessary information and other tasks, and it’s done. I hope that one day our support will work on Pyrus.

One final thought. Agile and Lean methodologies are teaching us to ask "five whys" about each problem to ensure quality in our business processes (the Information Technology Infrastructure Library, with its separation into incidents and problems, seems to think two “whys" are enough). In large support organizations analysis of the “why” must become a process (ideally it’s a question you consider every time you encounter a problem so that you might avoid it in the future). But certainly some of the identified problems (and the tasks necessary to correct them) will lie outside the domain of your support staff.

The root of the problem here is that while anyone in an organization can raise an issue, only so many “support staff” may respond and deploy. As recurring problems identify weaknesses or inefficiencies that could be automated, you need the process owners and business division managers involved so that they feel the weight of the issue as well. Don’t describe the problem as “a ticket that won’t go away,” put it in terms of time or cost that they may more easily understand.

Everybody should have access to the support system, but support systems were developed for specific support staff requiring more complex features. This barrier should be removed.