![Visits Badge](https://hits.sh/github.com/bshongwe/headstarter_AI-customer-support.svg?style=flat-square&label=Visits&color=blue)

# 🤖 StockBot AI

StockBot AI is an AI-powered chatbot SaaS that leverages OpenAI's GPT-3 to provide
users with a powerful and intuitive platform for gathering information and
communicating effectively. Users can interact freely with the chatbot to ask
questions, receive answers, and engage in meaningful conversations. The
platform also supports user authentication via Google and offers
subscription-based services through Stripe.
<br></br>

## ✨ Features

- 🤖 **AI-Powered Conversations:** Interact with StockBot AI using OpenAI's GPT-3
model to get insightful responses and information.
- 🔒 **User Authentication:** Secure and seamless login using Google accounts,
powered by NextAuth.js.
- 💳 **Subscription Plans:** Easy and secure payment processing using Stripe,
allowing users to subscribe to monthly plans.
- 🎨 **Responsive Design:** Beautiful and user-friendly UI built with Tailwind
CSS and ShadCN UI.
- 🎥 **Smooth Animations:** Engage users with elegant animations and
transitions using Framer Motion.
<br></br>

## 🛠️ Tech Stack

- 🔑 **OAuth:** Used for secure user authentication and authorization.
- 📝 **TypeScript:** Provides static typing for better code quality and
maintainability.
- 💼 **Stripe:** Integrated for managing subscription payments and plans.
- 🧠 **OpenAI-Edge:** Utilized for AI-driven conversational capabilities.
- 🎨 **TailwindCSS:** Ensures a responsive and modern user interface.
- 🔒 **NextAuth.js:** Implements authentication, allowing users to sign in with
their Google accounts.
- 🎥 **Framer Motion:** Powers the smooth animations and transitions within the
app.
- 🖌️ **Radix UI:** A collection of UI components that complement TailwindCSS
and ensure consistent and polished designs.
- 🚀 **Vercel AI SDK (Next.js 14):** Framework and deployment on Vercel with
optimized performance.
<br></br>

## 🚀 Getting Started
### 📋 Prerequisites

Ensure you have the following installed:
- ⚙️ Node.js (v14 or later)
- 📦 npm or Yarn
- 🔑 A Google account for OAuth setup
- 💳 A Stripe account for payment processing

### 📦 Installation

1. **Clone the repository:**
    ```bash
    git clone https://www.github.com/bshongwe/headstarter_AI-customer-support.git
    cd headstarter_AI-customer-support
    ```
<br></br>
2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
<br></br>
3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory and add the following variables:
    ```bash
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-next-auth-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    STRIPE_SECRET_KEY=your-stripe-secret-key
    STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
    OPENAI_API_KEY=your-openai-api-key
    ```
<br></br>
4. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
<br></br>
5. **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see StockBot AI in action.
<br></br>

### 🌐 Deployment
StockBot AI is optimized for deployment on Vercel. To deploy:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into your Vercel account.
3. Set up the required environment variables in Vercel.
4. Deploy the project directly from your Vercel dashboard.
<br></br>

### 💬 Usage
- 💬 **Chat with StockBot AI:** Simply type your questions or commands in the chat
interface and StockBot AI will provide responses using GPT-3.
- 👤 **Manage Account:** Log in via Google to manage your account settings and
subscription plan.
- 💳 **Subscribe:** Choose a monthly plan and process payments securely through
Stripe.
<br></br>

## 🤝 Contributing
We welcome contributions! If you'd like to contribute to StockBot AI, please fork
the repository and create a pull request with your changes. Ensure your code
follows the existing coding standards and is well-documented.

## 👥 Contributors

This project is the result of a collaborative effort by the following team
members:

- **Ernest Shongwe** – [GitHub](https://github.com/bshongwe)
- **Samuel Baiden** – [GitHub](https://github.com/<samuelbaiden>)
- **Christian Brown** – [GitHub](https://github.com/<christianbrown>)
- **Ihsan Gokalp** – [GitHub](https://github.com/<ihsangokalp>)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📧 Contact

For any inquiries or support, please reach out to [shongwe.bhekizwe@yahoo.com](mailto:shongwe.bhekizwe@yahoo.com).

---

*Powered by OpenAI and Vercel.*
