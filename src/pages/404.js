import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <main className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold">Page not found</h1>
    <Link to="/" className="mt-4 text-blue-600 underline">Go home</Link>
  </main>
)

export default NotFoundPage

export const Head = () => <title>Not found</title>

