
import Nav from "./nav"
import Link from 'next/link';

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Sewing Class"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#E91E63]">
                    Create your own looks together with me
                  </h1>
                  <p className="max-w-[600px] text-[#333333] md:text-xl dark:text-gray-400">
                    Join our expert-led sewing classes and unlock your creative potential. From beginner to advanced, we
                    have a class for every skill level.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#E91E63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  Elevate Your Sewing Skills
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Sewing Classes, we're passionate about empowering individuals to unleash their creativity through
                  the art of sewing. Our experienced instructors guide you every step of the way, ensuring you develop
                  the skills and confidence to tackle any sewing project.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#E91E63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#E91E63] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">Our Instructor</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  Assela as the Instructor
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our sewing instructor, Assela, is a passionate and dedicated professional with 30 years of experience in
                  the fashion industry working for local fashion designers. With her wealth of knowledge and expertise, she'll guide you through every step
                  of your sewing journey, ensuring you develop the skills and confidence to tackle any project.
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="120"
                    alt="Instructor Assela"
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-[#E91E63]">Assela</h3>
                  <p className="text-[#333333] dark:text-gray-400">Lead Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8F8F8] px-3 py-1 text-sm text-[#333333]">
                  Sewing Classes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#E91E63]">
                  Explore Our Class Schedule
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Whether you're a beginner or an experienced sewer, we have a class that's perfect for you. Check out
                  our upcoming schedule and sign up today!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-[#E91E63]">Beginner Sewing</h3>
                  <p className="text-sm text-[#333333] dark:text-gray-400">
                    Learn the fundamentals of sewing, from threading a needle to constructing simple projects.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#333333] dark:text-gray-400">Tuesdays, 6pm</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#E91E63] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-[#E91E63]">Intermediate Sewing</h3>
                  <p className="text-sm text-[#333333] dark:text-gray-400">
                    Take your sewing skills to the next level with more advanced techniques and projects.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#333333] dark:text-gray-400">Thursdays, 6pm</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#E91E63] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-[#E91E63]">Advanced Sewing</h3>
                  <p className="text-sm text-[#333333] dark:text-gray-400">
                    Dive into complex sewing techniques and create professional-level projects.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#333333] dark:text-gray-400">Saturdays, 10am</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#E91E63] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-[#E91E63]">Sewing Machine Repair</h3>
                  <p className="text-sm text-[#333333] dark:text-gray-400">
                    Learn how to maintain and repair your sewing machine for optimal performance.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#333333] dark:text-gray-400">Sundays, 2pm</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#E91E63] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg dark:bg-gray-800">
                  <h3 className="text-lg font-bold text-[#E91E63]">Sewing for Kids</h3>
                  <p className="text-sm text-[#333333] dark:text-gray-400">
                    Introduce your little ones to the joy of sewing with our fun and engaging classes.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#333333] dark:text-gray-400">Saturdays, 2pm</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#E91E63] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#F8F8F8] text-[#333333]">
        <p className="text-xs">&copy; 2024 Sewing Classes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-" prefetch={false} />
        </nav>
      </footer>
    </div>
  )
}


