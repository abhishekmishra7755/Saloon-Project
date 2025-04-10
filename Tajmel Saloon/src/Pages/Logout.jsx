import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Start loading
    setLoading(true);

    // Simulate a short delay (e.g., processing time)
    setTimeout(() => {
      // Clear authentication data
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");

      // Show logout success message
      setMessage("Logout successful. Redirecting to login...");
      setLoading(false);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {loading ? (
          <>
            <p className="text-lg font-semibold text-gray-700">
              Logging out...
            </p>
            <p className="text-gray-500">Please wait a moment.</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-600">Success!</h2>
            <p className="text-gray-600 mt-2">{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Logout;
