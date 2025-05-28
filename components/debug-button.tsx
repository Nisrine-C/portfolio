"use client"

import { Button } from "@/components/ui/button"

export default function DebugButton() {
  const resetSplashScreen = () => {
    try {
      localStorage.removeItem("hasVisitedBefore")
      window.location.reload()
    } catch (e) {
      console.log("Could not access localStorage")
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={resetSplashScreen}
      className="fixed bottom-4 right-4 bg-black/50 text-xs"
    >
      Reset Splash
    </Button>
  )
}
