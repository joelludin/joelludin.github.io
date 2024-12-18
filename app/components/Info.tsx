import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"

export default function Info() {
  return (
    <Card className="w-full max-w-md bg-black/50 backdrop-blur-md text-white">
      <CardContent className="flex flex-col items-center text-center p-6">
        <h1 className="mb-4 text-3xl font-bold">Joel Ludin</h1>
        <p className="mb-6 text-lg font-semibold text-yellow-400">Under Construction</p>
        <p className="mb-6 text-white">
          This portfolio is currently being built. Check back soon for updates!
        </p>
        <div className="flex space-x-4">
          <Button variant="default" asChild>
            <Link href="https://www.linkedin.com/in/joelludin">LinkedIn</Link>
          </Button>
          <Button asChild>
            <Link href="mailto:joelludin20@gmail.com">Contact Me</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

