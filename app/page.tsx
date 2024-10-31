import CustomerForm from "@/components/forms/CustomerForm"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <div className="flex">
            <Image
              src="/logo.png"
              height={1000}
              width={1000}
              alt="logo"
              className="mb-12 h-10 w-fit"
            />
            <div className="ml-4 text-xl mt-1.5">Marketeer</div>
          </div>
          <CustomerForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Marketeer</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/markets-cropped.png"
        height={1000}
        width={1000}
        alt="logo"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}
