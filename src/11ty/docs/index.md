---
layout: docs
---

## Get started

### How to use

Thank you for purchasing this template! This is a **pure HTML** template, so it not compatible with any CMS system such as WordPress, Drupal, Joomla, etc. This template is built using [Bootstrap 5](https://getbootstrap.com/) and [Eleventy/11ty](https://www.11ty.dev/) static site generator, so it includes not just final `.html`, `.js` and `.css` files, but also source `.scss` and [Eleventy](https://www.11ty.()dev/) files. The 11ty generator helps you to easily edit the template without needing to edit every separate HTML file.

We have included **exclusive Torus Kit license** just for this template. [Torus Kit](https://toruskit.com/) allows you to create advanced interactions and effects with simple code.

### Installation

Before you start, you need to install Node package manager (if you haven't already) and couple of other tools that will helps you to build the template. We have prepared `package.json` file, that includes everything you need.

#### NPM

Check [NodeJS](https://nodejs.org/en/) installation tutorials.

### Eleventy

To install 11ty generator, open command line / terminal and type `npm install -g @11ty/eleventy` then hit <kbd>enter</kbd>. This will install 11ty in a global scope.

### Other tools

When you are in command line / terminal, navigate to the `src` folder of your extracted template, then enter `npm install`. This will install all necessary packages from `package.json`.

## Editing the template

### Run the 11ty and SASS

Before you start to edit source files, you need to start the 11ty **server** and let the Gulp to **watch for changes** on source `.scss` files.

Open command line / terminal and navigate to `src` folder, then enter `eleventy --serve`. This starts a **localhost server** where you can see your template just if it were uploaded on live server. Open your browser and enter `localhost:8080` to your address bar.

Open new command line / terminal and navigate again to `src` folder. This time enter `gulp` command - this will start the Gulp task manager to watch for changes you made in source `.scss` files.

### Edit SASS files

This templates uses SASS and it's `.scss` files to generate final `.css` files. In order to run the template without any styling errors, please edit only `_user-style.scss` and `_user-variables.scss` files. Other files are source Torus Kit and Bootstrap files, that shouldn't be edited.

* `_user-variables.scss` - here you can add any custom variables that will override the Torus Kit and Bootstrap default ones.
* `_user-style.scss` - place your custom CSS rules here.

### Torus Kit effects

To change the default effects that comes within the template, or to create new ones, please read the [Torus Kit documentation](https://toruskit.com/docs/getting-started/introduction/)

### Template data

The majority of *data* in the template is stored in `src/11ty/_data/eleventyComputed.js` file. By the *data* we means:

* navigation items
* feature boxes
* slider contents
* or any content that is repeating

### Disabling preview mode

To view the template with all illustrations and effects, change the `preview` variable to `false` in `src/11ty/_data/eleventyComputed.js`.