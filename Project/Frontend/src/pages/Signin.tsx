import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

const Signin = () => {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2">
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-md">
          <Auth type={"signin"} />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <Quote />
      </div>
    </div>
  )
}

export default Signin