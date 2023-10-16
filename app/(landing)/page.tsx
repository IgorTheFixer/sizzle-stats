import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"

const LandingPage = () =>{
  return(
    <div className="flex items-center justify-center bg-black w-full h-full lg:bg-opacity-50">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Sizzle Stats!</CardTitle>
          <CardDescription>
            Please Sign-Up or Register for complete access
          </CardDescription>
          <CardDescription>
            If you wish to use the app as a Guest, please select "Guest Login"
            {/* TODO: Once the user has logged in as a guest, direct them to an explanation page with what they have access to. */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/sign-in">
            <Button>
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button>
              Register
            </Button>
          </Link>
          {/* <Link href="/guest"> */}
            <Button>
              Guest Login
            </Button>
          {/* </Link> */}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LandingPage
