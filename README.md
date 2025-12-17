# Graduate Portfolio Website

***NOTICE: Repository archived as site is static (so will remain live) and I am taking a break from development***

Starting from a minimal, generic skeleton project for the [Sculpin][1] static site generator. This website will become a portfolio to hold the work done during my time as a Software Developer Graduate with Transport for Wales.

## Usage

1. Start adding content to `source/index.md` to build the home page.
1. Add more content, settings, layouts, includes etc as needed.
1. Build more pages to create a whole website.

## Scripts

This project includes a run file to hold aliases for some custom scripts.

These scripts are mainly to build and start a local environment for the project and watch the files for any changes. 

## Notes

- Each page is a markdown file which then uses a twig template to build the html page you see.
- [Tailwind][2] and the Tailwind Typography plugin have been added to build the CSS used to style the website.
- The `docs/decisions` folder has been added specifically to this Sculpin project to keep track of decisions made during the development of the website. Adapted from [EpicWeb.dev][3]

[1]: https://sculpin.io
[2]: https://tailwindcss.com/docs/installation
[3]: https://github.com/epicweb-dev/epic-stack/tree/main/docs/decisions

## License

[MIT][0]

[0]: https://github.com/opdavies/sculpin-skeleton/blob/master/LICENSE
