import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode
}
export default function Offcanvas({ isOpen, setIsOpen, children, title }: Props) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden bg-[#00000038]">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-4 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white absolute right-4"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle opacity="0.05" cx="20" cy="20" r="20" fill="#FF69B4" />
                          <path opacity="0.8" d="M20.9161 19.9999L24.8099 23.8939C25.0634 24.1472 25.0634 24.5567 24.8099 24.81C24.5567 25.0633 24.1471 25.0633 23.8939 24.81L19.9999 20.916L16.1061 24.81C15.8527 25.0633 15.4433 25.0633 15.1901 24.81C14.9366 24.5567 14.9366 24.1472 15.1901 23.8939L19.0839 19.9999L15.1901 16.1059C14.9366 15.8526 14.9366 15.4431 15.1901 15.1898C15.3163 15.0635 15.4822 15 15.6481 15C15.8139 15 15.9798 15.0635 16.1061 15.1898L19.9999 19.0838L23.8939 15.1898C24.0202 15.0635 24.1861 15 24.3519 15C24.5178 15 24.6836 15.0635 24.8099 15.1898C25.0634 15.4431 25.0634 15.8526 24.8099 16.1059L20.9161 19.9999Z" fill="#FF69B4" />
                        </svg>

                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="font-semibold text-2xl leading-6 text-gray-900 text-text-primary">
                        {title}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
