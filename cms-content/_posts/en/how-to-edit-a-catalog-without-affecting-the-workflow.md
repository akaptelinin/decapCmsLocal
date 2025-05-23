---
title: How to edit a catalog without affecting the workflow
date: 2019-01-24
tags:
  - catalogs
  - form
  - how-to
  - lifehack
  - workflow
previewImage: directions-from-site-en.png
previewText: "Sometimes you need to update a catalog that’s being used in a workflow. Suppose your company has opened new offices or your analyst want to change the title of a Feedback column to Comments. Let’s learn how to edit a catalog so that changes to it don’t break your workflow."
author: Yulia Pugacheva
---
Sometimes you need to update a catalog that’s being used in a workflow. Suppose your company has opened new offices or your analyst want to change the title of a Feedback column to Comments. Let’s learn how to edit a catalog so that changes to it don’t break your workflow.

## Routing by column

Suppose there is a workflow for directing requests according to the customer service office. If you need to add/delete an office or change column name, you can easily do so in the interface without affecting the workflow settings.

For example, we changed **Director** to **Head.**

![](catalog-en-rename-column.webp)

Let’s do the same in Excel:

1. Export the catalog from Pyrus.
2. Change the title of the workflow column: Director → Head.
3. Import the catalog to Pyrus.

When Pyrus updates a catalog, it will detect that a new column has appeared. We see a warning that the former Director column will be deleted and the workflow won’t work correctly:

![](catalog-en-import-warning.webp)

**Pyrus tip:** when editing a catalog using Excel, don’t change the title of workflow columns. It’s better to do it in the Pyrus interface.

## Routing by catalog item

Suppose there is a workflow routing customer requests to a support specialist, according to type.

![](workflow-en-types.webp)

If you change a column title via Excel, the routing by its items will stop working. But you can easily update column title in Pyrus.

If you rename a category (like changing "Sales questions" to&nbsp"Sales") in Excel file or in Pyrus interface, routing by this element will stop working correctly.

**Pyrus tip:** add a column with IDs or codes for each item in the catalog. Then configure your workflow using these numbers. In the example below, we designated IDs for each category.

![](catalog-en-ids.webp)

From now on, if anyone changes a category name, its ID will stay the same, and the routing will still work correctly.

We recommend that you add a column with IDs to the new catalogs. If you don’t want this column to appear in your forms, [you can hide it](/en/help/workflow/catalogs#data-display-modes).