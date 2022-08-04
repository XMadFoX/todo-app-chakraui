# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://todo-app-chakra.vercel.app/](https://todo-app-chakra.vercel.app//)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - Production ready React framework
- [Chakra UI](https://styled-components.com/) - component library
- [Framer Motion](https://www.framer.com/motion/) - animation library
- [Recoil](https://recoiljs.org/) - atom state management library

### What I learned

Create UI using Chakra. It uses "atomic" styling concept same as Tailwind CSS but using props instead of classes. Overall I liked the developer experience Chakra provides, except customizing some form elements like checkboxes and radio buttons. I just wanted to round checkbox and have unstyled radio buttons (text without circles) but looks like it was possible only by creating custom components. Bundle size is a concern, I'm pretty sure it would be much smaller if I used Tailwind CSS. Maybe that's because Chakra uses framer motion under the hood.

Make drag and drop in list for reordering items. I've tried a few solutions and libraries but at the end I've found [reorder](https://www.framer.com/docs/reorder/) component in [Framer motion docs](https://www.framer.com/docs/introduction/).

Basics of Recoil.

### Continued development

Some features maybe added in the feature. For example history & deletion undo to learn Recoil side effects. Also I may redo the challenge using another technology stack.

### Useful resources

- [Chakra UI docs](https://chakra-ui.com/getting-started/) - Chakra has good docs. It was a good starting point for me.
- [Framer motion reorder component](https://www.framer.com/docs/reorder/) - A good way to make drag and drop in the list especially if you're already using Framer motion in your project.

## Author

- Website - [https://madfox.laserflare.net](https://madfox.laserflare.net)
- Frontend Mentor - [@XMadFoX](https://www.frontendmentor.io/profile/XMadFoX)
