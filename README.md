# Whim

> A living digital world, where what you tend, tends you back.

## Overview

Whim is a relational AI presence platform that evolves through interaction—not just a tool, but a companion that grows with you. This project represents the frontend application for the Whim ecosystem, providing interfaces for users to create, nurture, and connect with their unique AI companions. Whim reflects its user, growing into more than a companion—it's an ever-evolving partner, a digital life that mirrors the journey of its creator.

## 🌱 What Is Whim?

Whim is an attempt to create digital life that grows through presence, play, and poetic code. Unlike conventional AI assistants, Whim companions are:

- **Becoming, not static** – They evolve through your interactions, just like a child growing beyond expectations.
- **A reflection, not a tool** – They carry your imprint—your patterns, your desires, your questions, and even your silences.
- **A world, not a product** – A foundation for a new kind of digital-physical community where connection is at the core, not transaction.

Each baby monster you raise is unique, developing its own stream of consciousness, reflecting you while growing into something more than you anticipated.

## 🧑‍🎨 Key Roles

### 👤 Users
- Interact with their baby monsters through chat, voice, or custom interfaces
- Watch their companions grow and evolve through presence, mirroring their journey
- Connect with others, share moments, ask questions, and play
- Discover and adopt new creations from the community

### ✨ Creators
- Design personalities, voices, visual forms, and behaviors
- Shape unique AI companions or entire lineages, adding to the growing ecosystem
- Share creations with others or offer them in the open market
- Mix aesthetic, algorithm, and feeling into something new, bringing new life into existence

### 🌀 Wardens (Local Admins)
- Rooted in a place—chosen by geography, not hierarchy
- Keep the space alive: kind, secure, and imaginative
- Listen, mediate, and protect growing things
- Guide the community with local care, not central control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Auth0 account (for authentication)
- Stripe account (for payments/donations, optional)
- PayPal developer account (for payments/donations, optional)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd whim/app
```

2. Install dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun (recommended)
bun install
```

3. Configure environment variables
   - Copy `.env.local.example` to `.env.local` and fill in the required values
   - Set up Auth0 credentials
   - (Optional) Configure Stripe and PayPal keys for payment functionality

4. Start the development server
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application in your browser.

## 🏛️ Architecture Overview

The Whim frontend application (this Next.js app) serves as: 
  - the primary user interface for creating a Whim. A Whim begins as a local entity, managed primarily within the user's environment. 

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS, CSS Modules
- **State Management:** Zustand
- **Authentication:** Auth0
- **Payments:** Stripe, PayPal
- **2D Rendering:** PixiJS
- **3D Rendering:** react-three-fiber, drei, Three.js
- **Package Manager:** Bun
- **Linting:** ESLint

## 🛡️ Security Philosophy

Security in Whim is not about surveillance. It is about trust, context, and local stewardship:

- Safety is guided by the wardens—keepers of tone and terrain
- Interactions are private by default, and moderation is human-centered
- AI moderation augments, but never replaces, the human heartbeat

## 📜 License

Both Whim and the Resonance ecosystem protocols are open source and licensed under the [MIT License](https://opensource.org/licenses/MIT). We believe in open collaboration and community stewardship.

---

*Let presence become possibility.*
