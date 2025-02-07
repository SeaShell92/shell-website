---
layout: default
title: Design System Refresh
---

This is the project I've spent most of my time on as a software developer graduate.  The design team decided the Transport for Wales (TfW) website needed a refresh and the software developmet team decided to help make the new designs come to life.

<figure>
<img class="max-w-xs mx-auto md:max-w-full" src="/assets/images/pt-1-design-system.jpg" alt="a screenshot of the design system" />
<figcaption class="text-center">From Figma designs...</figcaption>
</figure>

The design team would look at existing components and use Figma to see how they could be modernised and refreshed with new usage of colour and iconography.  This was mainly done through the use of hand-crafting components and changing shape/size/colour with the touch of a button.

<figure>
<img class="max-w-xs mx-auto md:max-w-full" src="/assets/images/pt-2-design-system.jpg" alt="a screenshot of the web design system" />
<figcaption class="text-center">...to fully functional web components.</figcaption>
</figure>

The software developer team would then re-create these designs in Fractal using HMTL and CSS to make a fully functional web ready component.  Within Fractal we use <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank">atomic design</a> (external link), so the buttons can be easily changed and the three cards can be inserted into a mock-up of any web page to see if the design works with other elements of the site.

Fractal is pretty cool but I have a whole page about my fractal work if you'd like to check that out [here](/fractal-dev).

Once the designs were tested in fractal, they were then implemented on the website, which is written in Drupal.

In a perfect world we'd just flip a switch and reveal a new website design in one go, but actually we decided it would be easier to update the website in a component by component basis.  We created tickets to keep track of the work to be done on each component, a few are shown below.

<figure>
<img class="max-w-xs mx-auto md:max-w-full" src="/assets/images/dsr-tickets-eg.png" alt="a screenshot of jira tickets">
<figcaption class="text-center"> This was just part of phase 1, it's still an ongoing project. </figcaption>
</figure>

Rather than starting fresh, we decided to update the code for the existing components and come back later to remove any components that become obsolete.  Dealing with legacy code has given the whole team our fair share of headaches, but actually I found it to be quite helpful in my software developer graduate journey.  I had made a Drupal website before, in university, so I am familiar with the basics but the TfW website is anything but basic.
