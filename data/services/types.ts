export type WorkflowStep = {
  step: number;
  label: string;
};

export type WhatWeDoItem = {
  title: string;
  description: string;
};

export type SolutionCard = {
  title: string;
  description: string;
  icon?: string;
};

export type Service = {
  slug: string;
  title: string;
  teaser: string;        // Homepage carousel card description
  summary: string;       // /services overview card summary
  
  // Section 1: Hero
  heroTagline?: string;
  heroImage: string;
  heroDescription: string;
  
  // Section 2: Comprehensive Solution Grid (From Figma)
  solutionsHeading?: string;
  solutionsSubtitle?: string;
  solutions?: SolutionCard[];

  // Section 3: Workflow Stepper
  workflowHeading?: string;
  workflowSteps: WorkflowStep[];

  // Section 4: Capabilities & Benefits
  capabilitiesCardTitle?: string;
  capabilitiesCardDescription?: string;
  capabilitiesHeading?: string;
  capabilitiesDescription?: string;
  capabilities: string[];
  capabilitiesBottomText?: string;
  capabilitiesImage: string;

  // Section 5: What We Do
  whatWeDoHeading?: string;
  whatWeDoSubtitle?: string;
  whatWeDoIntro?: string;
  whatWeDo: WhatWeDoItem[];
};