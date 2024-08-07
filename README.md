# LEGALEASE CLIENT

Frontend implementations for the Legalease platform.  
This is a web application for a legal assistance firm, built with Next.js and TailwindCSS.  
It allows users to book appointments with lawyers, view profiles, and contact the firm.

## Table of Contents

- [LEGALEASE CLIENT](#legalease-client)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
  - [Usage](#usage)
    - [Development](#development)
    - [Build](#build)
    - [Start](#start)
  - [Components](#components)
  - [File Structure](#file-structure)
  - [Styling](#styling)
  - [Example of TailwindCSS usage](#example-of-tailwindcss-usage)
  - [Authors](#authors)
  - [License](#license)

## Installation

### Prerequisites

Node.js (>= 12.x)
npm (>= 6.x) or yarn (>= 1.22.x)

### Clone the repository

```sh
[git clone](https://github.com/Project-legalease/legalease-client.git)
cd legalease-client
```

### Install dependencies

Using npm

```sh
npm install
```

## Usage

### Development

To run the development server:

Using npm

```sh
npm run dev
```

[Open http://localhost:3000 with your browser to see the result](http://localhost:3000)

### Build

To create a production build:

Using npm

```sh
npm run build
```

### Start

To start the application in production mode:

Using npm

```sh
npm start
```

## Components

An example of a reusable button component `CustomButton`:

```sh
import Link from "next/link";

const CustomButton = ({ href, children }) => (
`<Link href={href}>`
`<button className="bg-primary-orange61 text-white text-semibold py-2 px-4 rounded-md">`
{children}
</button>

  </Link>
);

export default CustomButton;
```

## File Structure

```sh
legalease-client/
├── app/
│ ├── globals.css       # Global CSS styles
│ ├── layout.tsx        # Main layout file
│ ├── page.tsx          # Main page component
│ ├── about/            # About page components
│ │ └── page.tsx        # About page
│ ├── contact/          # Contact page components
│ │ └── page.tsx        # Contact page
│ ├── profile-page/     # Profile page components
│ │ └── page.tsx        # Profile page
│ ├── appointment/      # Book Appointment page components
│ │ └── page.tsx        # Book Appointment page
│ └── payment/          # Payment page component
│ └── page.tsx          # Payment page
| └── ...
├── components/
│ ├── auth/
│ │ └── auth-form.tsx
│ │ └── back-button.tsx
│ │ └── login.tsx
│ │ └── new-password.tsx
│ │ └── reset-password.tsx
│ │ └── signup.tsx
│ ├── booking-app/
│ │ └── booking-app-form.tsx
│ │ └── booking-app-img.tsx
│ │ └── booking.tsx
│ ├── payment/
│ │ └── payment-option.tsx
│ ├── reviews/
│ │ └── leave-feedback.tsx
│ ├── services/
│ └── services-menu.tsx
| └── ...
├── public/
│ └── images/
│ └── ProfileBackground.jpg         # Background image
│ └── ask-a-lawyer.jpg
│ └── bg-4.jpg
│ └── bg-5.jpg
│ └── feedback.jpg
 └── ...
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration file
├── package.json            # Package configuration file
├── README.md               # Project README file
├── tailwind.config.js      # TailwindCSS configuration file
└── tsconfig.json           # TypeScript configuration file
```

## Styling

This project uses TailwindCSS for styling. The TailwindCSS configuration is located in tailwind.config.js and global styles are in globals.css.

## Example of TailwindCSS usage

```sh
<>
type="text"
name="name"
value={clientData.name}
onChange={handleClientChange}
className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
placeholder="Input Your First Name"
required
</>
```

## Authors

- **Etomu Gbenga Joshua** - _CyberGa_ - [etomu.joshua@gmail.com](mailto:etomu.joshua@gmail.com)
- **Obikwelu Chidera Jane** - _Derasine96_ - [chidexobikwelu@gmail.com](mailto:chidexobikwelu@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
