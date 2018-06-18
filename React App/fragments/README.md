Fragments
==========
Fragments will work from 16.2 +

Case:
If we use the following command the program will run but in the console we will get an error as follows:

const FragmentCheck = () => {
  return (
    // <div>Hi</div>
    [
      <div>Hi</div>,
      <div>Hello</div>
    ]

  )
}

Error:

index.js:2178 Warning: Each child in an array or iterator should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.
    in FragmentCheck (at App.js:20)
    in div (at App.js:19)
    in App (at index.js:7)

Solution:
==========
const FragmentCheck = () => {
  return (
    // <div>Hi</div>
    [
      <div key="1">Hi</div>,
      <div key="2">Hello</div>
    ]
  )
}

This kind of approach is very bad so that we will use Fragments

<Fragment>
  <div>Hi</div>
  <div>Hello</div>
</Fragment>

Shorter syntax:
<>
  <div>Hi</div>
  <div>Hello</div>
</>
But Shorter syntax is not supported in many devices
