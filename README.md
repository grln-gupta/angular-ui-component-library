# Angular UI Component Library

A modern, build-ready Angular UI component library built with **standalone components**,
focused on **accessibility**, **reusability**, and **enterprise-scale applications**.

---

## ✨ Highlights

- Built using Angular standalone components (Angular 16+)
- WCAG-aware and accessibility-focused UI components
- Reactive-forms ready input using ControlValueAccessor
- Keyboard-accessible modal (ESC key + backdrop support)
- ag-Grid wrapper for enterprise-grade data tables
- Library-first architecture suitable for large Angular applications

---

## 📦 Components

This library provides reusable and consistent UI components designed for
long-lived, enterprise Angular applications.

---

### Button

Reusable base button component with a clean API.

```html
<ui-button>Save</ui-button>

Input (Forms + WCAG)

Reactive forms-ready input component with proper accessibility support.

<ui-input
  label="Email"
  id="email"
  type="email"
  formControlName="email">
</ui-input>

Modal (A11y + Keyboard)

Accessible modal dialog with ESC key handling and backdrop close support.

<ui-modal
  [open]="isOpen"
  title="Confirm Action"
  (close)="isOpen = false">
  Are you sure you want to proceed?
</ui-modal>

Table (ag-Grid Wrapper)

Enterprise-ready table abstraction built on top of ag-Grid.

<ui-table
  [columnDefs]="cols"
  [rowData]="rows">
</ui-table>
```

🛠 Tech Stack

Angular (Standalone Components)

TypeScript

ag-Grid

WCAG Accessibility

CSS / SCSS



🚀 Build

Build the library using:

ng build ui-kit
The build output will be generated in:
dist/ui-kit

📌 Status

Actively evolving.
Designed for enterprise Angular applications with a strong focus on
accessibility, maintainability, and scalability.# angular-ui-component-library
