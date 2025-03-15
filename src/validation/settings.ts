import { z } from "zod";

const generalSchema = z.object({
  title: z.string(),
  logo: z.string(),
  iconLogo: z.string(),
  seo: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

const directorySchema = z.object({
  data: z.object({
    source: z.string(),
    links: z.string(),
    sheets: z
      .object({
        key: z.string(),
      })
      .optional(),
  }),
  search: z.object({
    placeholder: z.string(),
    showCount: z.boolean(),
    icon: z.string(),
    tags: z.object({
      display: z.enum(["none", "select", "show-all"]),
      intersection: z.boolean(),
    }),
  }),
  grid: z.object({
    list: z.boolean(),
    type: z.string(),
    emptyState: z.object({
      text: z.string(),
      type: z.enum(["button", "simple", "link"]),
      icon: z.string(),
    }),
    card: z.object({
      image: z.boolean(),
      border: z.enum(["dashed", "shadow", "outline"]),
    }),
    submit: z.object({
      show: z.boolean(),
      first: z.boolean(),
      title: z.string(),
      description: z.string(),
      hideable: z.boolean(),
    }),
  }),
  featured: z.object({
    showOnAllPages: z.boolean(),
    showOnSide: z.boolean(),
    icon: z.string(),
    labelForCard: z.string(),
  }),
  tagPages: z.object({
    title: z.string(),
  }),
  tags: z.array(
    z.object({
      key: z.string(),
      name: z.string(),
      color: z.string(),
    })
  ),
});

const headerSchema = z.object({
  banner: z.object({
    show: z.boolean(),
    text: z.string(),
    link: z.string().url(),
    brandText: z.string(),
  }),
  navbar: z.object({
    colorModeSelector: z.boolean(),
    links: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
        target: z.string().optional(),
      })
    ),
  }),
  actionButton: z.object({
    text: z.string(),
    href: z.string().url(),
  }),
});

const footerSchema = z.object({
  description: z.string(),
  socials: z.object({
    github: z.object({ link: z.string(), icon: z.string() }),
    facebook: z.object({ link: z.string(), icon: z.string() }),
    instagram: z.object({ link: z.string(), icon: z.string() }),
    x: z.object({ link: z.string(), icon: z.string() }),
    youtube: z.object({ link: z.string(), icon: z.string() }),
  }),
});

const uiSchema = z.object({
  icons: z.object({
    dark: z.string(),
    light: z.string(),
  }),
});

const settingsSchema = z.object({
  general: generalSchema,
  directory: directorySchema,
  header: headerSchema,
  footer: footerSchema,
  ui: uiSchema,
});

type SettingsSchema = z.infer<typeof settingsSchema>;

export { settingsSchema, type SettingsSchema };