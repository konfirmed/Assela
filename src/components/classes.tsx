import Nav from "./nav"
import Link from "next/link"

export function Classes() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8F8F8] px-3 py-1 text-sm text-[#333333]">Our Classes</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#E91E63]">
                  Unleash Your Sewing Potential
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our diverse range of sewing classes designed to cater to all skill levels and interests.
                  Whether you are a beginner or an experienced sewer, our expert instructors will guide you through each
                  step, ensuring you acquire the necessary techniques and skills to bring your sewing projects to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Beginner Sewing Class"
                    className="rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Beginner Sewing</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    Start your sewing journey with our beginner-friendly classes.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Intermediate Sewing Class"
                    className="rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Intermediate Sewing</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    Enhance your skills with our intermediate-level classes.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Advanced Sewing Class"
                    className="rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Advanced Sewing</h3>
                  <p className="text-[#333333] dark:text-gray-400">
                    Challenge yourself with our advanced sewing classes.
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
                Register Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">
                  Class Highlights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  What to Expect
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our classes are designed to provide a comprehensive and engaging learning experience. From hands-on
                  instruction to personalized guidance, our expert instructors will ensure you develop the skills and
                  confidence needed to tackle any sewing project.
                </p>
              </div>
              <div className="space-y-4">
                <ul className="grid gap-4">
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Hands-on Learning</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      Gain practical experience through hands-on projects and exercises.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Expert Guidance</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      Receive personalized attention and guidance from our experienced instructors.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Small Class Sizes</h3>
                    <p className="text-[#333333] dark:text-gray-400">
                      Enjoy a supportive and intimate learning environment with small class sizes.
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
