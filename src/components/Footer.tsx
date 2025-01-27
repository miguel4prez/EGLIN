import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer style={{backgroundColor: '#314fd8'}}>
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-white">
              <Link className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                {/* <!--Icon from: http://www.potlabicons.com/ --> */}
                <svg className="h-8 fill-current inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                EGLIN
              </Link>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-5">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">FAQ</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">Help</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">Support</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-5">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/terms" className="no-underline  text-stone-200 hover:text-pink-500">Terms</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/privacy" className="no-underline  text-stone-200 hover:text-pink-500">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-5">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">Linkedin</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline  text-stone-200 hover:text-pink-500">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-5">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/blog" className="no-underline text-stone-200 hover:text-pink-500">Official Blog</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/about" className="no-underline  text-stone-200 hover:text-pink-500">About Us</Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/contact" className="no-underline  text-stone-200 hover:text-pink-500">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}