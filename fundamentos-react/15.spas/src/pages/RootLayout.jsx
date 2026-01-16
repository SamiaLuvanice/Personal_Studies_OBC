import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to the Root Layout</h2>
        <p>This is the root layout of our application.</p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>© 2025 My Sample Application</p>
      </footer>

    </>
  );
}
