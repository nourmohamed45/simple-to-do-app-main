import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[60vh] space-y-8 px-4">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">404</h1>
        <div className="text-center space-y-2">
          <p className="text-2xl font-semibold text-foreground">Oops! Page not found</p>
          <p className="text-muted-foreground max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
      </div>
      <Button 
        asChild
        className="px-8 py-6 text-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
      >
        <Link to="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}

export default NotFound