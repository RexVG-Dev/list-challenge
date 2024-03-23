'use client'

type ErrorType = Error; 

const Error = ({error, reset}:{error: ErrorType, reset: () => void}) => {
  return (
    <div className="bg-red-500 text-white p-7">
      {error.message}
      <button
        onClick={reset}
        className="border border-white bg-white text-black p-2 m-2"
      >Try again</button>
    </div>
  )
}
export default Error