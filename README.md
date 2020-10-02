
## AWS Solutions Architect Associate Note - 2020

## How to use it
* get started by reading the article <a href="https://medium.com/@thomas.reinecke/create-compelling-documentation-with-github-pages-16e4149efe9e" target="_blank">Create compelling Documentation with Github Pages</a>
* edit "src/pageConfig.json" and change the document structure as you desire
* write your documents in Markdown and put them into the "static" folder
* create yourself a GIT repository and import your playbook trunk
* deploy it with `npm run gh-pages`
* in your GH repository > Settings > scroll down to "Github Pages", make sure it points to your "gh-pages" branch
* find the link to your GH page deployment on that screen aswell
  ![image](https://user-images.githubusercontent.com/35994116/45642352-36be7380-bab8-11e8-95d5-a014c0422f63.png)
* for feedback, enhancement requests or defect reports use "Issues" here on this repo

Enjoy!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification, also build the search index
npm run build

# build the search index only
npm run build-search

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# deploy playbook to GH pages (includes build and deploy to GH pages)
npm run gh-pages
```

