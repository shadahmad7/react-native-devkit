# @shadhmad7/react-native-devkit

> **React Native DevKit** — Production-safe, modular debugging core for React Native apps.
> Phase 1 focuses on a stable core with Debug Panel, Logger, Network interceptors, Storage, Config, and Bridge modules.

---

## 🚀 Project Overview

`react-native-devkit` is a **monorepo** for building reusable React Native debugging tools, structured to be **production-safe**, **extensible**, and **Turborepo-ready**.

**Phase 1 goal:**

- Launch a stable debugging core (`core` package)
- Provide **Debug Panel UI** + basic modules
- Enable **example app** integration
- Build with **Turborepo** for multi-package support

---

## 🏗 Monorepo Structure

```
react-native-devkit/
│
├── packages/
│   ├── core/                  # Core debug engine + modules
│   │   ├── src/
│   │   │   ├── ui/            # Debug panel UI
│   │   │   ├── network/       # Fetch/XHR interceptor
│   │   │   ├── logger/        # Console/log overrides
│   │   │   ├── storage/       # Session snapshot
│   │   │   ├── config/        # Production flags / whitelisting
│   │   │   ├── bridge/        # JS ⇆ Native wrapper
│   │   │   └── index.ts       # Barrel export
│   │   ├── android/
│   │   ├── ios/
│   │   └── package.json
│   │
│   ├── native-modules/        # Future native modules
│   │   ├── android/
│   │   ├── ios/
│   │   └── package.json
│   │
│   ├── example/               # React Native example app
│   │   ├── App.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── docs/                  # Documentation site
│       ├── README.md
│       └── package.json
│
├── .github/                   # GitHub workflows + issue templates
│   ├── workflows/
│   │   └── build-test.yml
│   └── ISSUE_TEMPLATE/
│
├── turbo.json                 # Turborepo config
├── package.json               # Root package
├── tsconfig.base.json         # Base TS config
└── README.md                  # Root README
```

---

## 📦 Packages Overview

### 1. **Core (`@core`)**

- **UI**: Debug Panel modal, show/hide API
- **Logger**: `log(message)` with timestamp
- **Network**: Fetch/XHR interceptor
- **Storage**: Save/load key-value snapshot
- **Config**: Runtime flags, whitelisting
- **Bridge**: JS ⇆ Native communication

> **Example usage:**

```tsx
import {
  showDebugPanel,
  log,
  fetchInterceptor,
  saveItem,
  CONFIG,
  sendToNative,
} from "@core";

showDebugPanel();
log("Debug panel opened");
fetchInterceptor("https://example.com", { method: "GET" });
saveItem("test", { a: 1 });
sendToNative("testEvent", { data: 123 });
console.log(CONFIG);
```

---

### 2. **Example App (`example`)**

- Demonstrates **core package usage**
- Uses **React Native CLI**
- Contains buttons to trigger debug panel and test core modules

> **Run example:**

```bash
cd packages/example
npx react-native start       # Start Metro bundler
npx react-native run-ios     # Run on iOS simulator
npx react-native run-android # Run on Android device/emulator
```

---

### 3. **Native Modules (`native-modules`)**

- Placeholder for **future native-only modules**
- Will integrate with **TurboModules** for performance metrics and crash handling

---

### 4. **Docs (`docs`)**

- Documentation site + API reference
- Can be expanded for **Phase 2+** to include screenshots, usage guides

---

## ⚡ Development Setup

1. **Install dependencies**

```bash
yarn install
```

2. **Build core**

```bash
yarn turbo run build --filter=core
```

3. **Run example app**

```bash
cd packages/example
npx react-native start
npx react-native run-ios   # or run-android
```

4. **Watch core for changes**

```bash
cd packages/core
tsc --build --watch
```

---

## 🛠 Phase 1 Milestones

| Module         | Status  | Notes                                     |
| -------------- | ------- | ----------------------------------------- |
| Debug Panel UI | ✅ Done | Modal shows/hides via `showDebugPanel()`  |
| Logger         | ✅ Done | `log(message)` with timestamp             |
| Network        | ✅ Done | Basic fetch/XHR interceptor               |
| Storage        | ✅ Done | Save/load session snapshot (console stub) |
| Config         | ✅ Done | Runtime flags, whitelist                  |
| Bridge         | ✅ Done | JS ⇆ Native communication (console stub)  |
| Example App    | ✅ Done | Uses core modules, test buttons           |

**Next:** Add network replay, UI tabs, snapshot export, and CI setup.

---

## 📈 Turborepo Usage

- **Build all packages:**

```bash
yarn turbo run build
```

- Run **tests, lint, or watch** in a single root command
- Phase 2 will include native modules build + performance telemetry

---

## 📌 Notes

- Root `README.md` is a **gateway**
- Package-level `README.md` files exist for **core**, **example**, **docs**
- Do **not remove package-level READMEs** — they contain **package-specific usage**
