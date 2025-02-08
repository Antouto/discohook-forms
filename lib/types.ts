type Oauth2Guild = {
  id: string;
  name: string;
  icon: string | null;
  banner: string | null;
  owner?: boolean;
  permissions?: number;
  features: string[];
};

type User = {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string | null;
  avatar?: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
  avatar_decoration_data?: object | null;
};

export type SessionData = {
  guilds: Oauth2Guild[];
  user: User;
};

export type Guild = {
  id: string;
  name: string;
  icon: string | null;
  banner: string | null;
  owner?: boolean;
  permissions?: number;
  features: string[];
  channels?: [];
  forms?: object;
}