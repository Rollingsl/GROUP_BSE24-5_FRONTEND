import React, { Fragment } from "react";
import { MedicalForm } from "../UI/MedicalForm";
import { MedicalLayout } from "./MedicalLayout";
import { MedicalRecordList } from "../UI/MedicalRecordList";

export const MedicalFormLayout: React.FC = () => {
  return (
    <Fragment>
      {/* Wrapper component providing consistent layout and styling */}
      <MedicalLayout>
        {/* Container with spacing, background color, and padding */}
        <div className="space-y-8 bg-white p-4 rounded-md">
          {/* Header section with title and form */}
          <div
            className="flex items-center justify-between w-full
           border-b-[1px] border-gray-300 pb-4"
          >
            {/* Title for the Medical Form */}
            <div className="text-gray-700">
              <p>Medical Form</p>
            </div>
            {/* Renders the form for capturing medical information */}
            <MedicalForm />
          </div>

          {/* Section to display list of existing medical records */}
          <div>
            <MedicalRecordList />
          </div>
        </div>
      </MedicalLayout>
    </Fragment>
  );
};
