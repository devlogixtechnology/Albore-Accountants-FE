import { bookKeeping } from "./book-keeping";
import { assuranceAudits } from "./assurance-audits";
import { financialAdvisory } from "./financial-advisory";
import { taxServices } from "./tax-services";
import { payrollManagement } from "./payroll-management";
import { corporateCompliance } from "./corporate-compliance";

export const services = [
  assuranceAudits,
  financialAdvisory,
  taxServices,
  bookKeeping,
  payrollManagement,
  corporateCompliance,
];

export type { Service } from "./types";