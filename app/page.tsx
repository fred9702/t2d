import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Try T2D for Free
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600">Text</span> to <span className="text-blue-600">Data</span> 
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
          T2D helps you extract actionable insights from textual data at scale
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={"/dashboard"}
        >
          Start Now
        </Link>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.png"
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Intro */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Start your first session in seconds
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Gaining insights from text has never been easier than with T2D.
                </p>
              </div>
            </div>
            {/* steps */}

            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                    Sign up for a Free Account
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span> */}
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                    Upload a <span className="text-blue-600">JSON</span> or <span className="text-blue-600">CSV</span> file
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                    Get your insights, in any format
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                
              </span> */}
                </div>
              </li>
            </ol>
          </div>

          {/* Scenarios */}
          <div id="use-cases">
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Use Cases
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Use T2D to convert text into data and produce actionable insights
                </p>
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>E-commerce</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Learn what you&apos;re doing well and what needs improving from product reviews
                  </CardDescription>
                  <Image
                    src="/coffee.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Social Media</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Analyze audience feedback to understand preferences and trends, and tailor content.
                  </CardDescription>
                  <Image
                    src="/schedule.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Human Resources</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Analyze employee feedback from surveys to improve workplace satisfaction 
                  </CardDescription>
                  <Image
                    src="/schedule.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>
          
          {/* Pricing */}
          <div id="pricing">
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Pricing
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1 ">
                  <CardTitle>Free</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Free Plan
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Pro</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Pro Plan
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Enterprise Plan
                  </CardDescription>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
