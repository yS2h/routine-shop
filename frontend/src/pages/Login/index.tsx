export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center px-6 space-y-4">
        <h1
          className="text-xl font-bold"
          style={{
            color: 'var(--main)',
            marginTop: '-40px',
          }}
        >
          Routine #
        </h1>

        <div className="flex flex-col space-y-2 mt-6">
          <input type="text" placeholder="Id" className="w-64 border rounded-[10px] p-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-64 border rounded-[10px] p-2"
          />
        </div>

        <button
          onClick={() => {
            localStorage.setItem('isLoggedIn', 'true')
            window.location.href = '/'
          }}
          className="w-64 bg-[#57aeff] text-white py-2 rounded-[10px] mt-8"
        >
          Log in
        </button>
      </div>
    </div>
  )
}
