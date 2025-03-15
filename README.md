<div align="center">
  <h1>Minted Directory Astro</h1>
  <p>Markdown driven directory template. Built with Astro and Tailwindcss. Optimized for SEO. Beautiful Customizable Style</p>
</div>

<br/>

<div align="center">
  <img src="https://github.com/user-attachments/assets/febde860-00be-408b-8a13-41953f7178e1" alt="Minted Directory Screenshot" />
</div>

<br/>

## Features:
+ 🖌️ Add Listings with markdown.
+ 🔋 SEO optimizations and pSEO out of the box
+ 💻 Pre-built components for directories.
+ 💅 Customizable style.
+ 🌙 Dark/Light mode
+ 💸 Sponsored Content

## Getting Started

### Local Development

Duplicate the template then clone the repository.

```sh
git clone git@github.com:youraccount/projectname.git my-directory
```

Or use the github cli to create a repository based on the template and clone in one command:

```sh
gh repo create my-directory --template masterkram/minted-directory-astro --private --clone
```

Go to the cloned folder:
```sh
cd my-directory
```

Install dependencies

```sh
pnpm install
```

Run the website:

```sh
pnpm dev
```

Congrats :tada:

You can start customizing and building your directory.

## Customization

To customize the directory style:
+ Change the `primary`, `secondary` color and `fontFamily` in `tailwind.config.ts`
+ Customize the `src/config/theme-config.toml`


### Adding Content

Add listings by adding markdown files to `/src/content/directory`

## Deployment

Deploy as a static site for best SEO performance:

```bash
pnpm run build
```

## Community

[Join the discord](https://discord.gg/5UbrTNzX7y)
