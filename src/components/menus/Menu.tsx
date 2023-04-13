import { Menu as HUIMenu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
interface MenuProps {
    triggerComponent: JSX.Element;
    content?: any;
    customContent?: JSX.Element;
    isCustomMenu?: boolean;
}
export default function
    Menu({
        triggerComponent,
        content,
        isCustomMenu,
        customContent,
    }: MenuProps) {
    return (
        <div className="cursor-pointer">
            <HUIMenu as="div" className="relative inline-block text-left">
                <div>
                    <HUIMenu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {triggerComponent}
                    </HUIMenu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <HUIMenu.Items className="z-50 absolute w-auto bg-bgColor-400 right-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white focus:outline-none shadow-lb-2xl p-2">
                        <div className="relative">
                            {!isCustomMenu ? (
                                content?.map((contentItem: any) => (
                                    <HUIMenu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                onClick={contentItem?.handleContent}
                                            >
                                                {contentItem.displayName}
                                            </button>
                                        )}
                                    </HUIMenu.Item>
                                ))
                            ) : (
                                <>{customContent}</>
                            )}
                        </div>
                    </HUIMenu.Items>
                </Transition>
            </HUIMenu>
        </div>
    );
}
