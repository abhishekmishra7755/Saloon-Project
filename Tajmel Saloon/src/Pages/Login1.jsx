import React from "react";

const Login = () => {
  const handleFacebookLogin = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login or Signup with Facebook</h2>
      <button
        onClick={handleFacebookLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Continue with Facebook
      </button>
    </div>
  );
};

export default Login;
