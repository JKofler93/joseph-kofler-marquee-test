# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project details

Requirements:
This component should have a minimum height of 100vh but, if the browser is sufficiently short or the content is long, should be able to push past 100vh.
Any of the text placements (headline, subhead, etc) should accommodate any length of text without the layout suffering (such as text overlapping other text or being clipped by overflow: hidden). In other words, the marquee should just get taller if the text gets long relative to the aspect ratio of the viewport.
The component should responsively adjust from 320px up to 1920px wide. Everything but the background image should be constrained by a max-width of 1440px.
The headline and subhead text need to be vertically centered between the menu and the call to action (CTA) box along the bottom.
The logo, menu, and contact button should all live at the layout level whereas the headline, subhead, CTA box, and background image should all be contained by a marquee component at the page level. In other words, if one were to navigate to a new page that used this same marquee component, the marquee content would change (new copy, new images, etc) but the layout (logo, menu, etc) would be unaffected.
The content for the component should be loaded from the provided JSON file.  In other words, the content is not hardcoded as template strings.  You can load the JSON client side via XHR or you may fetch it during SSR/SSG.  However, you shouldn't import it as a JS dependency using Webpack.  In other words, treat it as if it were content coming from a remote CMS.
Interacting with the upper left menu should change the content in the marquee.
Don’t use a CSS framework like (Tailwind, Bootstrap, etc).
You are welcome to use a framework (such as Nuxt.js) as well as open source packages for features like lazy loading of images, animation, etc.

Judging criteria:
First and foremost, the build should match the design when the browser is the same width as the design. The design intent should be preserved as elements scale down for narrower browser widths.
Using of scaling units (vw, %, rem) over fixed units (px) and media queries is preferred. We would typically use our fluid() Stylus function when building with Vue to accomplish this. Ideally, your build uses no media queries except for when changing columns (for instance, moving the subhead under the headline on narrower viewports).
Elegant handling of the loading of content and image assets will be considered.
Build-in animation of the component’s elements on the initial render will be considered.
Easy to understand variable names and comments will be considered.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# joseph-kofler-marquee-test
