import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="border-t-black relative py-10 overflow-hidden bg-gray-400 border border-t-2">
            <div className="max-w-7xl relative z-10 px-4 mx-auto">
                <div className="flex flex-wrap -m-6">
                    <div className="md:w-1/2 lg:w-5/12 w-full p-6">
                        <div className="flex flex-col justify-between h-full">
                            <div className="inline-flex items-center mb-4">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-2/12 w-full p-6">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold text-gray-500 uppercase">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-2/12 w-full p-6">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold text-gray-500 uppercase">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-3/12 w-full p-6">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold text-gray-500 uppercase">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" hover:text-gray-700 text-base font-medium text-gray-900"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer