---
title: How To Set Conditional Visibility In Forms
date: 2016-02-19
previewText: "More and more processes are being reflected in Pyrus and the system requires maximum flexibility in all activities. There are processes that involve different sets of data for different chains of transmission and functionality is needed to accomplish this."
author: Josiah Motley
---
More and more processes are being reflected in Pyrus and the system requires maximum flexibility in all activities. There are processes that involve different sets of data for different chains of transmission and functionality is needed to accomplish this.

Of course, you can add all necessary fields to the form, and fill in only what you need, but doing this leads to the time consuming task of analyzing every form users fill out.

To expedite data entries, we’ve added the ability to specify conditional visibility of form sections. Let's see how this works, with an example of process support.

At first, we’ll create a form for that process and also a list, which will be the visibility trigger. In our case it will be the ‘Category’.  Then we will mark ‘Conditional visibility’ for the ‘Hardware Failure Details’ section. Two new fields appear, where we choose the list and the value to trigger the section.

![image02](image02.webp)

**Note**: In the form creator the trigger list should be positioned before the section you tune.

When you start to fill the form the section is not visible.

![image01](image01.webp)

But when we choose ‘Hardware’ failure, a new section appears.

![image00](image00.webp)

In that section you can also add one more list with its own routing. For example, to fix hardware you need the approval from the engineer, and if you choose to replace it — from the CFO.

Another important note: If you change the value of the list, which is a trigger of the visibility section, then the values of all fields in the section will be deleted because this information is no longer relevant. You can, however, always look at their initial values in the history of the task.