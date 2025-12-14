import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      
        <h1>Home page</h1>
        <SignedOut>
          <SignInButton mode='modal'/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </>
  )
}

export default App