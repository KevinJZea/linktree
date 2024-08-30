export interface User {
  id: string;
  name: string;
  username: string;
  description?: string;
  social: UserSocialLinks;
  links: UserLink[];
}

interface UserSocialLinks {
  facebook?: string;
  instagram?: string;
  x?: string;
  linkedin?: string;
  youtube?: string;
  reddit?: string;
  pinterest?: string;
}

interface UserLink {
  title: string;
  url: string;
}
