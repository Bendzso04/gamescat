"use client";
import AdminGameList from "../../components/admingamelist/AdminGameList";

export default function admin() {
  const handleClearCookies = () => {
    // Clear the cookies here
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });

    console.log("Cookies cleared");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen  p-8">
      <main>
        <h1 className="text-4xl font-bold text-center mb-8">Admin Page</h1>
        <div>
          <AdminGameList />
        </div>
        <div>
          <button
            onClick={handleClearCookies}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-full"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
