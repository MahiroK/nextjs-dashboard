import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      {/* ヘッダー部分 */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>

      {/* コンテンツ部分 */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* 左カラム */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* 三角形を目立たせるために余白を追加 */}
          <div className="flex justify-center">
            <div className="relative mt-4 h-0 w-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          </div>

          {/* テキスト */}
          <p className="font-lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          {/* ログインリンク */}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* 右カラム */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* モバイル用 */}
          <div className="md:hidden">
            <Image
              src="/hero-mobile.png"
              alt="Hero mobile"
              width={750}
              height={1000}
              priority
              className="rounded-xl object-cover w-full h-auto"
              sizes="100vw"
            />
          </div>

          {/* デスクトップ用 */}
          <div className="hidden md:block">
            <Image
              src="/hero-desktop.png"
              alt="Hero desktop"
              width={1600}
              height={900}
              priority
              className="rounded-2xl object-cover w-full h-auto"
              sizes="(min-width: 768px) 1200px, 100vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
