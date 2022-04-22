# FAST

## Introduction

This is the repository for the Framework for Authoring Styled Talks, a [Pursuit] system for quickly bootstrapping a slide deck. FAST is a framework for creating and serving presentations, powered by [reveal-md] and customized for [Pursuit].

Decks can be easily written with Markdown, come with a Pursuit stylesheet and brand assets, and can be served locally or hosted for online access.

## Getting Up And Running

- Create a new repository by clicking "Use this template" on [this GitHub repository](https://github.com/abbreviatedman/talks-template). Clone that new repo down to your local machine.
- In your newly cloned repo, erase the contents of this readme, substituting your own if you want your own presentation repo documented. You do not have to include your own readme, but either way, **do not leave this readme in**. _Our_ repository is a framework for making presentations—yours _is_ a presentation.
- Add your deck's content to [the presentation's markdown file](./index.md).
- Serve the content locally by navigating to this repository's directory in your terminal and entering `npm start`.

## Authoring A Presentation Using FAST

### The Basics Of Markdown

Markdown is a lightweight markup language that enables you to write formatted content in a readable syntax.

Markdown is well documented at [https://www.markdownguide.org/](https://www.markdownguide.org/) and elsewhere. For a quick start, check out [Markdown Guide's Basic Syntax section](https://www.markdownguide.org/basic-syntax/) or [the Markdown Cheat Sheet from Markdown Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Special Features Of Markdown Using This Framework

Regular Markdown is great for standard web documents, but web _presentations_ are a specific use case. This repository's framework provides additional syntax to make that easier by leveraging the [reveal-md] tool and customizing it with some additional features and defaults.

#### Separating Slides

Simply add three dashes on their own line to create a new slide.

Example:

```md
## A Slide

Welcome to a presentation!

---

## Another Slide

[A link](https://www.duckduckgo.com)

- some things
- with other things
- so many things

---

## Yet Another Slide
```

#### Headings

Headings using this framework are in most ways just like regular Markdown headings, with the following special features:

- Headings come in four sizes. All headings below the fourth level are inadvisable for a presentation.
- The highest-level heading should be reserved for splash pages (see more on splash pages below). The top-level heading style is designed for that purpose and takes up too much of the slide to allow much other content.
- Heading relationships follow the Pursuit style guide, with the biggest heading on a slide in black and all caps, and any subheadings on a slide using yellow, title-cased text. Fonts have been customized for them as well.

#### Adding A Splash Page

A splash page is meant to separate sections of your presentation. A splash page typically contains a heading and a background image, though a still image (or GIF) is a great addition.

There is currently only one built-in background image. You can use it by adding a special class to the slide with an HTML comment.

```md
---
<!-- .slide: class="splash-page" -->
## function expressions vs. "fat arrows"

### the eternal debate
---
```

#### Bullet List Fragments

Documentation coming soon.

#### Speaker Notes

Documentation coming soon.

## Styling

This repo contains a `style.css` file that provides a uniform Pursuit style for presentations. This section contains tips for:

- changing to a dark palette,
- or overriding the default style.

Overriding the style is _not_ recommended. Maintaining stylistic consistency both between your own presentations and between your presentations and the presentations of other instructors has many benefits from an audience experience standpoint. It's also far easier to focus on content than bike-shedding about style. This framework is meant to make it fast to bootstrap a presentation so that you can instead focus on the content.

### Dark Mode

TODO add Dark Mode
TODO add configuration for Dark Mode

### Overriding The Style

TODO add configuration for Overriding The Style

## Hosting

TODO add documentation on Hosting—maybe through `surge`? With an `npm build` that creates a static site with `reveal-md --static` and starts the `surge` process?

## Further Reading

TODO add documentation on Further Reading

Things to link to:

- `surge`
- `reveal-md`
- Markdown

[reveal-md]: https://github.com/webpro/reveal-md
[pursuit]: https://www.pursuit.org/
