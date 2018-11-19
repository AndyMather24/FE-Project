# Andy Mather - AndyMather24

## README

You need to write one, make sure to include a link to the deployed version when you write it.

- [ ] provides general info about app
- [ ] clear instructions on how to run locally
- [ ] link to API & back end repo
- [ ] specifies minimum versions
- [ ] `package.json` includes dependencies
- [x] deployed

## UX

- [ ] Styling needs some love... When you are working on it consider the following:
- [x] Where do the topics go on a smaller screen??
- [x] Login button should be clearer, and give me an indication of an example user I can login as (think of a hiring partner looking at this and wondering what to do)
- [] I refreshed a page and jessjellys picture changed.
- [x] Cant see number of votes on article page, shows NaN <3 NaN when i try to vote. We should have `totalVotes` set in state on component did mount, we can access these from `this.props.article
- [x] Could make clearer that clicking on speech marks will show me the comments
- [x] Posting an article looks good, but nothing to stop my trying to post an article with no title or body! Ends up getting errors in the console from the api request
- [x] Posting a comment works but I get console errors
- [ ] Add the ability to vote on comments.
      Code
- [x] Well laid out directories, organisation looks good.
- [x] Destructuring should be consistent. setUser should destructure instead of user:user.
- [ ] Api calls are nicely extracted out but they are nearly all returning the axios data object. Just return out what you require from the function. I.e. data.topics etc…
- [x] In your post components the handleChange functions do not need to spread this.state. setState will only update the keys it has been passed.
- [x] Delete everything from create-react-app you are not using. App.css, serviceWorker, readme’s etc…
- [ ] Error handling doesn’t seem to be working...

## Error Handling

- [ ] Error pages
- [ ] All errors handled
  - Navigation: (Bad url / Bad topic slug in url / Bad article id in url / Bad username in url)
  - Login: (Bad username / No username)
  - Post comment: (No text in comment body / Can you post without logging in?)
  - Post article: (No text in article body / No title / No topic selected / Can you post without logging in?)

## Code

- [ ] Well named components
- [ ] Functional components used where possible
- [ ] `node_modules` git ignored
- [ ] Components reused where possible (`Articles` / `Voter`...)
- [ ] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Uses object destructuring where possible
- [ ] prop-types
- [ ] No `console.log`s / comments
- [ ] If untidy recommend ESLint & Prettier
