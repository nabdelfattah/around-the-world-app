export function Error({ msg }) {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-50">
        {msg}
      </p>
    </div>
  );
}
