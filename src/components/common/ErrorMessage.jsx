import { FaExclamationTriangle } from "react-icons/fa";

const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6">
      <div className="flex items-center gap-3">
        <FaExclamationTriangle className="text-red-600" />

        <p className="font-medium text-red-700">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;