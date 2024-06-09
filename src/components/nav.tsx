import Link from 'next/link';

export default function Nav() {
return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#F8F8F8] text-[#333333]">
    <Link href="#" className="flex items-center justify-center" prefetch={false}>
      <SyringeIcon className="h-6 w-6 text-[#E91E63]" />
      <span className="sr-only">Sewing Classes</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        href="/"
        className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
        prefetch={false}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
        prefetch={false}
      >
        About
      </Link>
      <Link
        href="/classes"
        className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
        prefetch={false}
      >
        Classes
      </Link>
      <Link
        href="/alterations"
        className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
        prefetch={false}
      >
        Alterations
      </Link>
      <Link
        href="/gallery"
        className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
        prefetch={false}
      >
        Gallery
      </Link>
    </nav>
  </header>
);
}

function SyringeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
      </svg>
    )
  }