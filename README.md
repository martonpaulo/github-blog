# 👨‍💻 GitHub Blog

![License](https://img.shields.io/github/license/martonpaulo/github-blog) ![Last Commit](https://img.shields.io/github/last-commit/martonpaulo/github-blog) ![React Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/github-blog/react) ![TypeScript Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/github-blog/dev/typescript) ![Test and Deploy Status](https://github.com/martonpaulo/github-blog/actions/workflows/deploy.yml/badge.svg)

**GitHub Blog** is a personal blog application that leverages GitHub's API to display a user's profile and blog posts. The posts are managed as GitHub issues, meaning the title is the post's title and the issue content is the post body.

The app fetches data from GitHub's Users, Issues, and Search APIs, displays a summary of each post, and uses dynamic routing to show full posts. It converts markdown content from GitHub into HTML for proper display, offering an engaging and integrated experience.

<br />

<img alt="Recording of live application" src="public/uploads/recording.gif" />

🔗 **Live Project:** [martonpaulo.github.io/github-blog](https://martonpaulo.github.io/github-blog)

<br />

This project is based on a RocketSeat tutorial.

For more of my work, visit my portfolio: [martonpaulo.com](https://martonpaulo.com).

## 🔧 Features

- Display user profile information from GitHub.
- List blog posts as GitHub issues with a brief summary.
- Dynamic routing to view full post details.
- Markdown to HTML conversion for proper post rendering.
- Issue filtering and search functionality.
- Responsive design for various devices.

## 🛠️ Technologies Used

This project is built using React, Vite, TypeScript, Styled Components, React Router DOM, React Hook Form, Zod, Axios, React Compiler, and GitHub Actions.

## 🚀 Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/martonpaulo/github-blog.git`
2. Navigate to the project directory: `cd github-blog`
3. Install the dependencies: `npm install`

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`** - Starts the development server at `http://localhost:3000/github-blog`.
- **`npm run build`** - Builds the project for production, outputting the files to the `dist` folder.
- **`npm run lint`** - Runs ESLint to lint the code and ensure code quality.

## 🔍 API Information

GitHub Blog integrates with several GitHub APIs:

- **GitHub Users API**: Fetches user data such as profile image, name, and follower count.
- **GitHub Issues API**: Retrieves detailed information of individual issues used as blog posts.
- **GitHub Search API**: Enables filtering and searching for issues by title or content within a repository.

## TODO List

- [x] Set up project with Vite, React, and TypeScript
- [x] Add License
- [x] Set up ESLint
- [x] Add project favicon
- [x] Change port to 3000
- [x] Initial setup by clearing unnecessary files
- [x] Add responsive layout
- [x] Set up GitHub repository
- [x] Add GitHub Actions and deploy to GitHub Pages
- [x] Create repository issues
- [x] Add Axios
- [x] [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): `api.github.com/users/${login}`
- [x] [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue): `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1`
- [x] [GitHub Search API](https://docs.github.com/pt/rest/search): `https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge`
- [x] Add React Hook Form and Zod
- [x] Add package.json description and keywords
- [x] Add README description
- [x] Add GitHub description
- [x] Add API information
- [x] List project features
- [x] List project technologies
- [x] Add project recording
- [x] Add project to portfolio

## 📄 License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](LICENSE) file.
