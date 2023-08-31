import { Button } from "@/components/ui/button";


const state = true;

export default function Home() {
  return (
    <div className="flex-col">
      <p className="text-3xl font-bold text-indigo-500">
      Discord Clone! (friends.tech?)
      </p>
      <Button>
        Click Me
      </Button>
    </div>
  )
}
