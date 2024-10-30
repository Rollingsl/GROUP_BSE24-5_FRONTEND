import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";

// Interface for props to define the expected children
interface MedicalLayoutProps {
  children: ReactNode;
}

export const MedicalLayout: React.FC<MedicalLayoutProps> = (props) => {
  // Function to extract the last part of the URL, which determines the current route
  const getLastWordFromUrl = (): string => {
    const url = window.location.pathname;
    const segments = url.split("/");
    return segments[segments.length - 1];
  };

  // Storing the result of getLastWordFromUrl in a variable to use for route-based conditional styling
  const lastWord = getLastWordFromUrl();
  const isFormMedicalHistoryRoute = lastWord === "form";

  return (
    <Fragment>
      {/* Main container with padding and background color */}
      <div className="p-8 bg-white rounded-md">
        <div className="flex flex-col justify-center">
          {/* Header section for title with border and padding */}
          <div
            className="flex items-center justify-center 
             border-b-[1px] border-gray-300 p-2 -mt-6 text-lg
             text-gray-800 font-semibold"
          >
            <p>Medical History</p>
          </div>
          {/* Tab navigation with links to 'Files' and 'Form' */}
          <div
            className="flex items-center justify-center 
             border-b-[1px] border-gray-300 p-2 gap-8
             text-gray-700 -mt-4 text-sm"
          >
            <div
              className="inline-block px-6 py-3 space-x-8
              bg-gray-300 rounded-md my-2"
            >
              {/* 'Files' tab link with conditional styling based on route */}
              <span
                className={`${
                  !isFormMedicalHistoryRoute &&
                  "bg-white px-4 py-1 text-center rounded-md"
                }`}
              >
                <Link
                  to="/patient/medical-history/files"
                  className={`${
                    !isFormMedicalHistoryRoute && "text-primary font-semibold"
                  }`}
                >
                  Files
                </Link>
              </span>
              {/* 'Form' tab link with conditional styling based on route */}
              <span
                className={`${
                  isFormMedicalHistoryRoute &&
                  "bg-white px-4 py-1 text-center rounded-md"
                }`}
              >
                <Link
                  to="/patient/medical-history/form"
                  className={`${
                    isFormMedicalHistoryRoute && "text-primary font-semibold"
                  }`}
                >
                  Form
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* Render children components within the layout */}
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};
