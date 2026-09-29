# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

inventory-system/
│
├── client/                         # React + Vite
│   ├── public/
│   │   └── ...
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   └── Loading.jsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Layout.jsx
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── ProductTable.jsx
│   │   │   │   ├── ProductForm.jsx
│   │   │   │   └── ProductModal.jsx
│   │   │   │
│   │   │   ├── stock/
│   │   │   │   ├── StockTable.jsx
│   │   │   │   ├── StockAdjustment.jsx
│   │   │   │   └── StockMovementTable.jsx
│   │   │   │
│   │   │   └── requests/
│   │   │       ├── RequestTable.jsx
│   │   │       ├── RequestDetail.jsx
│   │   │       └── RequestAction.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   └── Login.jsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── Products.jsx
│   │   │   │   ├── AddProduct.jsx
│   │   │   │   └── EditProduct.jsx
│   │   │   │
│   │   │   ├── stock/
│   │   │   │   ├── Stock.jsx
│   │   │   │   └── StockHistory.jsx
│   │   │   │
│   │   │   ├── requests/
│   │   │   │   ├── Requests.jsx
│   │   │   │   └── RequestDetail.jsx
│   │   │   │
│   │   │   ├── suppliers/
│   │   │   │   ├── Suppliers.jsx
│   │   │   │   └── SupplierDetail.jsx
│   │   │   │
│   │   │   └── reports/
│   │   │       └── Reports.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authApi.js
│   │   │   ├── productApi.js
│   │   │   ├── stockApi.js
│   │   │   ├── requestApi.js
│   │   │   ├── supplierApi.js
│   │   │   └── reportApi.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useProducts.js
│   │   │   ├── useStock.js
│   │   │   └── useRequests.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   └── constants.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
│
├── server/                         # Express API
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── env.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── stock.controller.js
│   │   │   ├── request.controller.js
│   │   │   ├── supplier.controller.js
│   │   │   └── report.controller.js
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── stock.service.js
│   │   │   ├── request.service.js
│   │   │   ├── supplier.service.js
│   │   │   └── report.service.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── stock.routes.js
│   │   │   ├── request.routes.js
│   │   │   ├── supplier.routes.js
│   │   │   └── report.routes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── role.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │   │
│   │   ├── validators/
│   │   │   ├── auth.validator.js
│   │   │   ├── product.validator.js
│   │   │   ├── stock.validator.js
│   │   │   └── request.validator.js
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.js
│   │   │   ├── response.js
│   │   │   └── generateNumber.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── .env
│   └── package.json
│
│
├── docs/
│   ├── architecture/
│   │   └── architecture.md
│   ├── api/
│   │   └── swagger.yaml
│   └── database/
│       └── erd.png
│
├── .gitignore
├── README.md
└── package.json
# inventory-system
