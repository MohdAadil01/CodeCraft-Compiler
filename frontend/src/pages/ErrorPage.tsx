import { Button } from "@/components/ui/button";
function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] bg-gray-800 text-white w-full">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Button onClick={() => window.history.back()}>Go Back</Button>
    </div>
  );
}

export default ErrorPage;
