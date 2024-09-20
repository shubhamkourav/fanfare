## [Fanfare - Multipurpose SaaS theme built with TailwindCSS and Next Js](https://fanfare.vercel.app)

<a href="https://fanfare.vercel.app/" rel="Fanfare - Multipurpose SaaS theme built with TailwindCSS and Next Js">![Fanfare - Multipurpose SaaS theme built with TailwindCSS and Next Js](https://3qruqslsz8mta81y.public.blob.vercel-storage.com/fanfare-eRjgVkwAseuzR78VN6jl3KJ47Dmvtp.png)</a>


**Fanfare** is a highly customizable multipurpose SaaS theme built with **TailwindCSS** and **Next.js**. It provides developers with a flexible, modular template to quickly build and deploy SaaS applications with a focus on responsiveness, performance, and scalability. Whether you're building a startup pages, career, pricing, or changelogs, Fanfare can be easily tailored to suit a wide range of needs.

Built with ❤️ by [Shubham kourav](https://github.com/shubhamkourav) based on Next Js and Tailwind CSS.


## Table of Contents

- [Live Preview](#live-preview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Live preview

Check out a live demo by clicking here:

🔗 [Fanfare Live Preview](https://fanfare.vercel.app/)

## Features

- **Highly Customizable**: Easily adapt the theme for different SaaS use cases (dashboards, landing pages, etc.).
- **Built with TailwindCSS**: Modern utility-first CSS framework for rapid UI development.
- **Powered by Next.js**: SEO-friendly, server-side rendering, and fast client-side transitions.
- **Modular Design**: Components structured for easy reuse and extension.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **SEO & Accessibility**: Preconfigured for SEO best practices and accessible design.

## Installation

To install and run Fanfare locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubhamkourav/fanfare.git
   cd fanfare
   ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Run the development server**:
    ```bash
    npm run dev
    ```
4. **View the application**: Open your browser and visit http://localhost:3000 to view the app.

## Usage

Fanfare can be used to quickly bootstrap SaaS applications with minimal configuration. You can:

- Customize UI components with TailwindCSS utility classes.
- Add new pages and components by following the Next.js routing conventions.
- Deploy the app to any Vercel-compatible platform for fast, serverless deployments.

## Customization
### TailwindCSS Configuration
You can extend or override the default TailwindCSS configuration by editing the ```tailwind.config.js``` file
```bash
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
      },
    },
  },
};
```
### Theming and Layout
Modify the default layout by editing the ```app/layout.js``` file. You can easily switch between light and dark modes, and adjust the global styles.

## Adding New Pages
Next.js routing is file-based, so adding a new page is as simple as creating a file in the ```app/``` directory. For example, creating ```app/about/page.js``` will automatically generate a new route at ```app/```.


## Technologies
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TailwindCSS**: A utility-first CSS framework for building responsive UIs.
- **Node.js**: Used for running the development and production servers.
- **Vercel**: Deployment and hosting platform optimized for Next.js applications.

## Contributing
We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (```git checkout -b feature/your-feature-name```).
3. Commit your changes (```git commit -m 'Add a new feature'```).
4. Push to the branch (```git push origin feature/your-feature-name```).
5. Open a pull request for review.


## License

This project is open source under the MIT license.