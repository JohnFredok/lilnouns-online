import {Events} from "./events";

export default function Content() {
  return (
    <main className="tw-mt-16 tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-mt-24">
      <div className="tw-text-center">
        <h1 className="tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-gray-900 sm:tw-text-5xl md:tw-text-6xl">
          <span className="tw-block xl:tw-inline">Lil Nouns</span>{' '}
          <span className="tw-block tw-text-neutral-600 xl:tw-inline">Online</span>
        </h1>
        <p className="tw-mt-3 tw-max-w-md tw-mx-auto tw-text-base tw-text-gray-500 sm:tw-text-lg md:tw-mt-5 md:tw-text-xl md:tw-max-w-3xl">
          Lil Nouns Online, aggregate data from all over the DAO and create live feeds of information related to things that happen around the DAO.
        </p>
        <div className="tw-mt-5 tw-max-w-md tw-mx-auto sm:tw-flex sm:tw-justify-center md:tw-mt-8">
        </div>
      </div>

      <section>
        <Events />
      </section>
    </main>
  )
}
