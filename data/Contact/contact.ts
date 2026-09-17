

// ------------------------------------------------------------------------------
// 1. GLOBAL DELIVERY HUB & CONTACT CHANNELS
// ------------------------------------------------------------------------------
export interface ContactChannel {
    label: string;
    value: string;
    href?: string;
}

export interface ContactHubData {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    email: ContactChannel;
    hq: ContactChannel;
    phone: ContactChannel;
    certifications: string;
}

export const contactHubData: ContactHubData = {
    badge: "Global Delivery Hub",
    titleLine1: "Initiate",
    titleAccent: "The Dialogue.",
    email: {
        label: "Electronic Mail",
        value: "hello@alboreaccountants.com",
        href: "mailto:hello@alboreaccountants.com",
    },
    hq: {
        label: "Global HQ",
        value: "Main Boulevard, Bahria Town, Lahore, Pakistan.",
    },
    phone: {
        label: "Secure Line",
        value: "+92 (335) 427 4079",
        href: "tel:+923354274079",
    },
    certifications: "ISO 27001 Certified for Data Security"
};


// ------------------------------------------------------------------------------
// 2. CONSULTATION FORM COPY & STATE MESSAGES
// ------------------------------------------------------------------------------
export interface FormCopyData {
    sectionHeading: string;
    fields: {
        fullName: string;
        email: string;
        company: string;
        phone: string;
        service: string;
        message: string;
        date: string;
        time: string;
    };
    actions: {
        submit: string;
        submitting: string;
        reset: string;
    };
    successState: {
        title: string;
        message: string;
    };
}

export const formCopyData: FormCopyData = {
    sectionHeading: "Book a Consultation",
    fields: {
        fullName: "Full Name",
        email: "Working Email",
        company: "Business/Company Name",
        phone: "Contact Number",
        service: "Services of Interest",
        message: "Describe your project",
        date: "Select Date",
        time: "Select Time Slot",
    },
    actions: {
        submit: "Book Consultation",
        submitting: "Submitting...",
        reset: "Submit another request",
    },
    successState: {
        title: "Thanks, we've got your request.",
        message: "A partner will reach out shortly to confirm.",
    },
};


// ------------------------------------------------------------------------------
// 3. FREQUENTLY ASKED QUESTIONS (FAQ)
// ------------------------------------------------------------------------------
export interface FaqItem {
    question: string;
    answer: string;
}

export const contactFaqItems: FaqItem[] = [
    {
        question: "What services does Albore Accountant offer?",
        answer:
            "We provide bookkeeping, audits & assurance, financial advisory, and tax services tailored to your business.",
    },
    {
        question: "How can Albore help my business grow?",
        answer:
            "Our partners work alongside your team to streamline your finances, stay compliant, and surface the insights that support better growth decisions.",
    },
    {
        question: "How do I get started with Albore?",
        answer:
            "Fill out the form above or call our direct office line, and a partner will follow up within 4 business hours.",
    },
];


// ------------------------------------------------------------------------------
// 4. HOME CONSULTATION PROMO (Homepage card content)
// ------------------------------------------------------------------------------
export interface HomeConsultationData {
    badge: string;
    heading: string;
    description: string;
    benefits: string[];
}

export const homeConsultationData: HomeConsultationData = {
     badge: "Free Initial Consultation",
    heading: "Let's Begin Your Financial Journey",
    description:
        "Whether you need back-office support, audit-ready accounts, or strategic advisory, our team is ready to listen.",
    benefits: [
        "No obligation, first consultation is free",
        "Response within 4 business hours",
        "Senior-partner oversight on every engagement",
    ],
};

// ------------------------------------------------------------------------------
// 5. CONTACT PAGE INTRO
// ------------------------------------------------------------------------------
export interface ContactPageIntroData {
    titlePrefix: string;
    description: string;
}

export const contactPageIntroData: ContactPageIntroData = {
    titlePrefix: "Let's Talk About How We Can Help",
    description:
        "Share your requirements and our experts will get in touch with you to explore the best solutions for your business.",
};

// ------------------------------------------------------------------------------
// 6. SERVICE OFFERINGS
// ------------------------------------------------------------------------------
export interface ServiceOption {
    value: string;
    label: string;
}

export const consultationServices: ServiceOption[] = [
    { value: "tax", label: "Corporate Tax & FBR Compliance" },
    { value: "audit", label: "Statutory Audit & Assurance" },
    { value: "advisory", label: "Strategic Financial Advisory" },
    { value: "bookkeeping", label: "Bookkeeping & Management Accounts" },
    { value: "secp", label: "Company Incorporation & SECP Filing" },
    { value: "ma_advisory", label: "Cross-Border M&A and Due Diligence" },
];

// ------------------------------------------------------------------------------
//  CONTACT FORM TIME SLOTS
// ------------------------------------------------------------------------------
export const TIME_SLOTS: string[] = [
  '10:00 am',
  '10:30 am',
  '11:00 am',
  '11:30 am',
  '12:00 pm',
  '12:30 pm',
  '2:00 pm',
  '2:30 pm',
  '3:00 pm',
];

// ------------------------------------------------------------------------------
//  CONTACT FORM VALIDTAION COPY
// ------------------------------------------------------------------------------

export const formValidationCopy = {
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[0-9\s-]{7,15}$/,
  },
  errors: {
    fullNameRequired: 'Please enter your full name.',
    fullNameShort: 'Name must be at least 2 characters.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Enter a valid email address.',
    companyRequired: 'Please enter your business/company name.',
    phoneRequired: 'Please enter your contact number.',
    phoneInvalid: 'Enter a valid phone number.',
    serviceRequired: 'Please select a service.',
    messageRequired: 'Please describe your project.',
    dateTimeRequired: 'Pick a date and time before booking.',
  },
  placeholders: {
    serviceSelect: 'Select a service',
  },
  actions: {
    cancel: 'Cancel submission',
  },
  prefixes: {
    selectedSlot: 'Selected slot',
    requiredMark: '*',
  },
};