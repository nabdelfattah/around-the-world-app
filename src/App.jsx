import { ErrorPage, CountryPage, HomePage, PageLayout } from "./pages";

// OLD WAY
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "countries/:country",
//         element: <CountryPage />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }

// NEW WAY. W3SCHOOLS
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="countries/:country" element={<CountryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
