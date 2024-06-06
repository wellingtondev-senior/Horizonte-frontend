import { Toaster } from "sonner"
import ColunaLeft from "./component/colunaLeft"
import ColunaRight from "./component/colunaRight"

export default function AuthenticationPage() {
  return (
      <div className="w-full h-screen flex items-start justify-between max-lg:flex-col ">
        <ColunaLeft/>
        <ColunaRight/>
        <Toaster/>
      </div>
  )
}