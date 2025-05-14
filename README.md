```markdown
# 🛍️ Elegance — Full-Stack E-Commerce Web App
<p align="center">
  <img src="https://github.com/user-attachments/assets/ea1fcf0e-c68b-4777-ac94-6baf53d05bfb" width="22%"/>
  <img src="https://github.com/user-attachments/assets/060d9060-7ccb-4889-a2ce-79c0cb55397c" width="22%"/>
  <img src="https://github.com/user-attachments/assets/f4ca13c5-0691-4e8a-9016-f503e514911b" width="22%"/>
  <img src="https://github.com/user-attachments/assets/96c2a731-b318-4d87-99de-83ae5d0ebf97" width="22%"/>



  <img src="https://github.com/user-attachments/assets/4e3ca63d-f8d0-4498-9ee5-6bc671637abd" width="48%"/>
  <img src="https://github.com/user-attachments/assets/17240e47-a5da-40a8-89ad-1ee60bd7cd66" width="48%"/>
</p>
## ✨ Features
![Capture d'écran 2025-05-14 023724](https://github.com/user-attachments/assets/79aaf123-cbc1-4dd0-8ed3-a769c60c58b2)

### 👤 User Features

- 🔍 Product listing with filters, search & categories
- 🖼️ Product details with image gallery and stock info
- 🛒 Shopping cart with `localStorage` + DB persistence
- 💳 Seamless checkout with Stripe integration
- 📦 Order history & tracking
- 🔐 Secure authentication via **NextAuth.js** (Email, OAuth, JWT)
- ❤️ Wishlist & favorites
- ⭐ Product reviews & ratings
- 🌍 Multilingual support (English + French)

### 🛠️ Admin Features

- 📊 Admin dashboard with real-time charts
- 👥 Role-Based Access Control (Admin, User, Guest)
- 📦 Product Management (Create, Read, Update, Delete)
- 📥 Order Management (View, Fulfill, Cancel)
- 🙍 User Management (View, Promote, Ban)
- 📉 Inventory tracking & stock alerts
- 📈 Sales Analytics (Revenue, Users, Orders, Inventory)

---

## 🧱 Tech Stack

| Layer         | Technologies                                              |
|---------------|-----------------------------------------------------------|
| **Frontend**  | Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui  |
| **Auth**      | NextAuth.js (JWT + OAuth)                                |
| **Backend**   | Server Actions, API Routes (Next.js)                     |
| **Database**  | MongoDB (via Mongoose)                                   |
| **Payments**  | Stripe (PayPal optional)                                 |
| **Charts**    | Recharts (Admin analytics)                               |
| **State**     | React Context or Zustand (optional)                      |
| **i18n**      | next-intl or next-i18next                                |
| **Deployment**| Vercel, Railway, Docker-ready                            |

---

## 📁 Project Structure

```

📦 app/
├── layout.tsx       # Root layout with <Providers />
├── page.tsx         # Landing / Home page
├── (auth)/          # Login / Register pages
├── (user)/          # Cart, Orders, Wishlist, etc.
├── (admin)/         # Dashboard, Products, Users, Analytics
├── product/\[id]/    # Dynamic product pages
└── checkout/        # Stripe checkout routes

📦 components/
├── Navbar, Footer, ProductCard, etc.
├── ThemeToggle, AdminSidebar
└── charts/
├── RevenueChart.tsx
└── SalesChart.tsx

📦 models/
├── User.ts
├── Product.ts
├── Order.ts
└── Review\.ts

📦 actions/
├── product.actions.ts
├── order.actions.ts
└── user.actions.ts

📦 lib/
├── db.ts       # MongoDB connection
├── auth.ts     # NextAuth config
├── stripe.ts   # Stripe integration
└── rbac.ts     # Role-based access logic

📁 public/
📁 styles/
└── globals.css

🧾 middleware.ts
🧾 next.config.js
🧾 tailwind.config.ts
🧾 i18n.ts

````

---

## 🔐 Environment Variables

Create a `.env.local` file with the following:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
````

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

App will be available at http://localhost:3000
```

---

## 🌍 Internationalization (i18n)

Default: English

Supported: English (en), French (fr)

Easily extendable via next-intl message files

---

## 📊 Charts & Admin Analytics

* 📈 Revenue and sales over time
* 📦 Inventory & stock levels
* 👥 User growth & activity

Powered by Recharts and displayed in the Admin Dashboard.

---

## 🌓 Theming

Built-in light/dark mode

Toggle using ThemeProvider and Tailwind’s `dark:` utility

---

## 📱 Mobile-First UX

* Fully responsive
* Card-based product displays
* Clean typography
* Smooth transitions and animations

---

## 🔮 Future Improvements

* ✅ PayPal integration
* ✅ Email notifications
* ✅ Abandoned cart recovery
* ✅ AI-powered product recommendations
* ✅ PWA support for offline shopping

---

## 🧑‍💻 License

MIT License © 2025

```
```
