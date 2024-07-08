export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface ProfessionalExperience {
    id: number;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
  }
  
  export interface ProfileData {
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
    experiences: {
      role: string;
      company: string;
      startDate: string;
      endDate: string;
    }[];
    skills: {
      name: string;
    }[];
    resume: File | null; 
  }