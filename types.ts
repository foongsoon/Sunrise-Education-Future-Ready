export type Language = 'en' | 'cn';

export interface ContentStrings {
  nav: {
    home: string;
    programs: string;
    about: string;
    contact: string;
    funZone: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  programs: {
    title: string;
    primary: string;
    primaryDesc: string;
    secondary: string;
    secondaryDesc: string;
  };
  aiSection: {
    title: string;
    desc: string;
    button: string;
    placeholder: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    followUs: string;
  };
}

export enum ProgramType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}