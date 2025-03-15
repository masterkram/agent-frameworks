import { z, defineCollection } from "astro:content";
import configData from "@util/themeConfig";
import { sheetLoad } from "@lib/loaders/sheets";
import { mockLoader } from "@ascorbic/mock-loader";
import { glob } from 'astro/loaders';

const directorySchema =
  z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    image: z.string().url().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
  });

let directory;
const source = configData.directory.data.source;
if (source === 'sheets') {
  directory = defineCollection({
    loader: sheetLoad(),
    schema: directorySchema
  });
}
else if (source === 'mock') {
  directory = defineCollection({
    loader: mockLoader({schema: directorySchema, entryCount: 10},),
    schema: directorySchema
  });
}
else {
  directory = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/directory" }),
    schema: directorySchema
  });
}

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/pages" }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  directory,
  pages,
  blog,
};
