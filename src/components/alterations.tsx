import Nav from "./nav"
import Link from "next/link"

export function Alterations() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8F8F8] px-3 py-1 text-sm text-[#333333]">
                  Our Alterations Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#E91E63]">
                  Tailored to Perfection
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our expert tailors are dedicated to ensuring your garments fit like a glove. Whether you need a simple
                  hem adjustment or a complete overhaul, we have the skills and attention to detail to bring your vision
                  to life. Trust us to transform your clothes into a perfect, personalized fit.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Hemming Services" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Hemming</h3>
                  <p className="text-[#333333] dark:text-gray-400">Precise hemming for the perfect length.</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Resizing Services" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Resizing</h3>
                  <p className="text-[#333333] dark:text-gray-400">Expert resizing for a tailored fit.</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Repair Services" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Repair</h3>
                  <p className="text-[#333333] dark:text-gray-400">Restoring your garments to their former glory.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#E91E63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">Our Commitment</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  Quality Craftsmanship
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At our alteration studio, we take pride in our meticulous attention to detail and commitment to
                  quality craftsmanship. From the finest fabrics to the most intricate stitching, we ensure every
                  garment receives the care and expertise it deserves.
                </p>
              </div>
              <div className="space-y-4">
                <ul className="grid gap-4">
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Expert Tailors</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      Our team of skilled tailors brings years of experience to every project.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Personalized Attention</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      We take the time to understand your unique needs and preferences.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Timely Service</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      We value your time and strive to deliver your garments promptly.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#F8F8F8] text-[#333333]">
        <p className="text-xs">&copy; 2024 Sewing Classes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
