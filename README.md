
# 🛍️ Elegance — Full-Stack E-Commerce Web App
<p align="center">
![Capture d'écran 2025-05-14 023724](https://github.com/user-attachments/assets/21b40b1d-fce0-4154-ab00-2958fad9c658)
![Capture d'écran 2025-05-14 023732](https://github.com/user-attachments/assets/0752a49e-aa96-46a6-abc4-9c64a97353a3)

<p align="center">




![Capture d'écran 2025-05-14 023724](https://github.com/user-attachments/assets/1d06aff9-322a-46ee-a670-9c5f014177f0)
![Capture d'écran 2025-05-14 023732](https://github.com/user-attachments/assets/73ee68e0-8d41-4651-aba8-e0a02291eede)
![Capture d'écran 2025-05-14 023753](https://github.com/user-attachments/assets/4f92a79c-cf93-47ef-ab6e-60265246e2f1)
![Capture d'écran 2025-05-14 023815](https://github.com/user-attachments/assets/d2d714f9-2d2d-43fc-af3c-5fba5e1c9e7e)
![Capture d'écran 2025-05-14 023831](https://github.com/user-attachments/assets/8c39f938-87ed-45f1-aab0-8dc4f8941ae6)
![Capture d'écran 2025-05-14 023836](https://github.com/user-attachments/assets/0b8cc9c6-b52a-458a-a952-150a04820523)
![Capture d'écran 2025-05-14 023933](https://github.com/user-attachments/assets/7a9980a3-3193-4721-b7fc-a05c4f3841d8)
</p>
## ✨ Features


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
