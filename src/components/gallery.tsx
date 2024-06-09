import Nav from "./nav"
import Link from "next/link"

export function Gallery() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8F8F8] px-3 py-1 text-sm text-[#333333]">Our Gallery</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#E91E63]">Inspiring Creations</h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our gallery and discover the stunning creations crafted by our talented students and
                  instructors. From intricate embroidery to elegant garments, each piece showcases the passion and skill
                  that goes into every stitch.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Gallery Image 1" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Embroidered Blouse</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    Intricate floral embroidery on a delicate silk blouse.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Gallery Image 2" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Tailored Suit</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    A perfectly fitted suit for a polished and professional look.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img src="/placeholder.svg" width="200" height="200" alt="Gallery Image 3" className="rounded-lg" />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Quilted Blanket</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    A cozy and intricately quilted blanket for chilly evenings.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#E91E63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View More
              </Link>
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