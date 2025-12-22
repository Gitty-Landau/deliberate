import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Deliberate</h1>
      <p className="text-muted-foreground mb-8">Decision Tracking App</p>
      <Button>Get Started</Button>
    </div>
  )
}

export default App
