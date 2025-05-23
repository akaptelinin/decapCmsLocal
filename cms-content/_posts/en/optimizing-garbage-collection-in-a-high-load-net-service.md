---
title: Optimizing garbage collection in a high load .NET service
date: 2019-12-13
categories:
  - technology
tags:
  - highload
  - productivity
  - software-development
previewImage: main-825x510-from-site-en.jpeg
previewText: "Pyrus is used daily by several thousand organizations worldwide. The service’s responsiveness is an important competitive advantage, as it directly affects user experience. Our key performance metric is “percentage of slow queries.”"
author: Max Nalsky
---
Pyrus is used daily by several thousand organizations worldwide. The service’s responsiveness is an important competitive advantage, as it directly affects user experience. Our key performance metric is “percentage of slow queries.”

One day we noticed that our application servers tend to freeze up for about 1000 ms every other minute. During these pauses several dozen queries piled up, and customers occasionally observed random delays in UI response times.

In this post we search out the reasons for this erratic behavior, and eliminate the bottlenecks in our service caused by the garbage collector:

[https://medium.com/@maxnalsky/optimizing-garbage-collection-in-a-high-load-net-web-service-3bb620b444a7](https://medium.com/@maxnalsky/optimizing-garbage-collection-in-a-high-load-net-web-service-3bb620b444a7)