
import Link from "next/link"
import Nav from "./nav"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#E91E63]">
                    About Sewing Classes
                  </h1>
                  <p className="max-w-[600px] text-[#333333] md:text-xl dark:text-gray-400">
                    At Sewing Classes, we are dedicated to fostering a community of passionate sewers and empowering
                    individuals to unleash their creativity through the art of sewing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#E91E63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#C2185B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join a Class
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
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  Empowering Creativity
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our mission is to provide a nurturing and inclusive environment where individuals of all skill levels
                  can explore their passion for sewing. We strive to inspire creativity, foster confidence, and equip
                  our students with the knowledge and techniques to bring their sewing dreams to life.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  Quality, Passion, and Community
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Sewing Classes, we are committed to delivering high-quality instruction, fostering a passion for
                  sewing, and building a supportive community of like-minded individuals. Our values are deeply rooted
                  in excellence, creativity, and a shared love for the art of sewing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8F8F8] px-3 py-1 text-sm text-[#333333]">
                  Our Instructor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#E91E63]">
                  Meet Assela
                </h2>
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My name is Assela Hashemi, I have been sewing for more than 30 years. I worked as a pattern maker, grader, and sample sewer for many local fashion designers. Currently, work as a tailor for the Department of National Defense(DND). In my spare time, I offer sewing and pattern-making classes for all ages and skill levels and I started in my student years but a hobby became a passion. I am married and have 2 beautiful sons. I also love to work in my garden and love to cook delicious meals.</p> 
                <p className="max-w-[900px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  They say things worth trying are never easy. Just like everyone else I had my challenges. But I would not change them. Why? Because I learned a lot on this journey and proved that my services bring good results. My cliënts use from those years of experience.  I wanna share them also with you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                </div>
              </div>
              <div className="grid gap-4">
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
              <div className="grid gap-4">
                <div className="flex flex-col items-center space-y-2">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#333333]">Our Facilities</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#E91E63]">
                  A Welcoming and Inspiring Space
                </h2>
                <p className="max-w-[600px] text-[#333333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our sewing studio is designed to provide a comfortable and inspiring environment for learning and
                  creating. With state-of-the-art equipment, ample workspaces, and a well-stocked fabric library, you will
                  have everything you need to bring your sewing projects to life.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Sewing Studio"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
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