# 🌱 TemuDataku

**TemuDataku** is a web platform built to support self-learners in **Data Science**. It provides structured **practice problems**, **case studies**, and future **mentorship opportunities** to accelerate your learning journey.

🔗 **Live Site**: [temudataku-seven.vercel.app](https://temudataku-seven.vercel.app/)

---

## 🎥 Demo

1. Landing Page
   
![image](https://github.com/user-attachments/assets/4ba5d6eb-e0f2-4f76-b002-cf8046679cee)

2. Login Page

![image](https://github.com/user-attachments/assets/b606d2f5-2ca0-40a3-bc1b-5f9fc9470fca)

3. Sign Up Page

![image](https://github.com/user-attachments/assets/31a09af5-93ec-43e9-a68f-6caa8652ee4f)

4. Product Catalog Page

![image](https://github.com/user-attachments/assets/633e212e-0506-4100-9573-f58026bff438)

5. Login (Error Messages)

![image](https://github.com/user-attachments/assets/8cab7588-5f55-43af-8ffb-5a3fcd329b27)

6. Sign Up (Error Messages)

![image](https://github.com/user-attachments/assets/bfdbd9df-684b-4ff6-a332-e2e92c059132)

7. Login / Sign Up (Loading State)<br>

![image](https://github.com/user-attachments/assets/cfc14324-2635-4004-9bc3-da42bf1bc8e1)

---

## ✨ Features

- 🔐 User authentication with **NextAuth.js** (Credentials Provider)
- 📦 PostgreSQL Database hosted on **Supabase**
- 🔑 **JWT-based session** strategy for authentication
- 🖼️ Clean, responsive **UI built with Tailwind CSS**
- 📚 Data Science practice cases (Static Display)
- 👥 1-on-1 and Group Mentorship (Coming Soon)
- 🧑‍💻 Bootcamp Opportunities (Coming Soon)

---

## 🛠️ Tech Stack

| Layer          | Technology                                  |
|----------------|---------------------------------------------|
| Frontend       | [Next.js](https://nextjs.org)               |
| Backend/API    | [Next.js](https://nextjs.org)               |
| Authentication | [NextAuth.js](https://next-auth.js.org)     |
| Database       | [Supabase PostgreSQL](https://supabase.com) |
| ORM            | [Prisma](https://www.prisma.io)             |
| Styling        | [Tailwind CSS](https://tailwindcss.com)     |
| Deployment     | [Vercel](https://vercel.com)                |

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/HilmyAmmar/temudataku.git
cd temudataku
```
### 2. Install Dependenceis
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your credentials:

```env
DATABASE_URL=your-database-url
NEXTAUTH_SECRET=your-secret-key
```
`NEXTAUTH_SECRET` is generated with:

```bash
npx auth secret
```

### 4. Push Prisma Schema to the Database

```bash
npx prisma db push
```

### 5. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view the app
