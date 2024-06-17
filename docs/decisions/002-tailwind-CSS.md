# Tailwind Classes

Date: 2024-06-17

Status: proposed

## Context

Why do I want to use Tailwind classes over writing and updating my CSS files by hand?

For testing purposes, I wrote a CSS file and added a few classes to HTML elements like `<p>` and `<h1>` however, as the site develops and becomes more complex, I'd like to be able to quickly style components by adding a pre-written set of classes from Tailwind to the elements.

## Decision

I will add Tailwind to my sculpin site so I can continue to use the knowledge I built up working on projects at TfW.  This will allow me to quickly style my website so I can continue focussing on building up the content of the site.

## Consequences

It adds another build step, making running/testing my site more complicated.
It also adds another language as Tailwind needs Node and JavaScript to compile whereas Sculpin only uses PHP.
