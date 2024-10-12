# 🚀 Next.js Supabase Auth Boilerplate

Welcome to the coolest Next.js Supabase authentication boilerplate in town! 😎

## 🌟 Features

- ⚡ Next.js 14 with App Router
- 🔐 Supabase Authentication
- 🎨 Tailwind CSS for styling
- 📘 TypeScript for type safety
- 🔒 Protected routes
- 🏠 Home page
- 🔑 Login page
- 📝 Registration page
- 📊 Dashboard page

## 🚀 Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/my-nextjs-supabase-auth.git
   cd my-nextjs-supabase-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Supabase project:
   - Create a new project on [Supabase](https://supabase.com)
   - Copy your project URL and anon key

4. Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser and see the magic! ✨

## 📁 Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── supabase.ts
├── .env.local
├── package.json
└── README.md
```

## 🛠️ Customization

Feel free to customize this boilerplate to fit your needs:

- 🎨 Modify the Tailwind styles in the components
- 🔧 Add more Supabase features like real-time subscriptions
- 📚 Create additional pages and components
- 🔒 Implement more advanced authentication flows

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📜 License


## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🐛 Found a bug?

If you find a bug, please open an issue on GitHub. We appreciate your help in improving this boilerplate!

## 💖 Like this boilerplate?

Give it a ⭐️ on GitHub and share it with your friends!

Happy coding! 💻✨
