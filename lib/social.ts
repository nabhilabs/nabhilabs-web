/** Canonical brand profiles — keep sameAs + UI links in sync. */
export const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/nabhilabs/",
  instagram: "https://www.instagram.com/nabhilabs/",
} as const;

export const sameAsProfiles = [
  socialProfiles.linkedin,
  socialProfiles.instagram,
] as const;
