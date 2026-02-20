export enum ContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO_LINK = 'VIDEO_LINK',
  HEADER = 'HEADER',
  SUBHEADER = 'SUBHEADER',
  LIST = 'LIST',
  SPACER = 'SPACER'
}

export interface ContentBlock {
  type: ContentType;
  content?: string; // For text, headers, video links
  src?: string; // For images
  alt?: string; // For images
  caption?: string; // For image captions or artwork details
  items?: string[]; // For lists
}

export interface Project {
  id: string;
  title: string;
  category: string;
  blocks: ContentBlock[];
}

export interface Exhibition {
  year: string;
  title: string;
  location: string;
  description?: string;
}

export interface Education {
  years: string;
  degree: string;
  school: string;
}

export interface AboutData {
  name: string;
  roles: string[];
  location: string;
  email: string;
  overview: string[];
  skills: string[];
  exhibitions: Exhibition[];
  professionalRoles: string[];
  education: Education[];
}