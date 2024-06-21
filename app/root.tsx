import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">
              <a href="/">Logo</a>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-400">Login</a>
              </li>
              <li>
                <a href="/register" className="hover:text-gray-400">Register</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
