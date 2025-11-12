import React from "react";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import HeaderSection from "./HeaderSection";
import RequestorInformation from "./RequestorInformation";
import ChangeDetailsSection from "./ChangeDetailsSection";
// import ImpactAssessmentSection from "./ImpactAssessmentSection";
// import MOCLevelSection from "./MOCLevelSection";
// import FileUploadSection from "./FileUploadSection";
// import FormActions from "./FormActions";

const PumpReplacementForm: React.FC = () => {
  return (
    <Container>
      <SectionWrapper title="">
        <HeaderSection />
      </SectionWrapper>

      <SectionWrapper title="">
        <RequestorInformation />
      </SectionWrapper>

     
      <SectionWrapper title="">
        <ChangeDetailsSection />
      </SectionWrapper>

    {/*
      <SectionWrapper title="Impact Assessment">
        <ImpactAssessmentSection />
      </SectionWrapper>

      <SectionWrapper title="MOC Level">
        <MOCLevelSection />
      </SectionWrapper>

      <SectionWrapper title="File Upload">
        <FileUploadSection />
      </SectionWrapper>

      <SectionWrapper title="Actions">
        <FormActions />
      </SectionWrapper> 
    */}
    </Container>
  );
};

export default PumpReplacementForm;
