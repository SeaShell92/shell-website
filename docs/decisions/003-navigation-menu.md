# Navigation Bar

Date: 2024-08-05

Status: accepted

## Context

The navigation bar is a very important part of any website and a sleek design that is easy for users to navigate is very important to me.  I settled on a simple, text-based list of links styled horizontally with the current page being highlighted in a different colour.

Why did I choose this style of navigation bar? 

Why did I not decide to make a drop-down menu?

Why did I make a navigation bar in twig?  I had done this sort of thing before in PHP at university.

## Decision

I chose this style because I am familiar with it, having done it on previous websites throughout my time at university.  Also, it is a simple HTML and CSS based design from W3Schools, who are a respectible source when it comes to web development.

The initial iteration of this navigation bar did not have a "highlighted current page" style or function, I had only added styles on hover.  I wanted to find the page the user is currently on and highlight that in the navigation menu somehow and settled on adding the following code to my main-menu twig template, inside the for loop that creates the list of links.

```
{% set isHome = link.url == "/" and page.url == "/." %}
{% set isActive = link.url == page.url or isHome %}
```

As you can see the home page url is different for some reason so to handle that situation I took advantage of twig templates allowing `and` and `or` statements inside setting the variable.  I then used a ternary and the `isActive` variable to set a specific tailwind class:

```
{{ isActive ? 'bg-purple underline': 'no-underline' }}
```
while all the other classes, padding etc, stay the same.

I wanted to keep the focus on the content rather than the menu structure, so there is no drop-down.  There is also not really a "correct" or required user journey on this website, it is more for portraying information, so the user can decide which pages to visit in whichever order they'd like.

## Consequences

It makes the style of my website look a little simple and perhaps out-dated, not as modern as some other sleek menu designs out there today.

It could become cluttered with too many pages, however to deal with this potential consequence, some pages will be a "sub-menu" on other pages, rather than being displayed on the main navigation menu.
