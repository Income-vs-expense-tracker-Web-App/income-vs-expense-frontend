// stores/store.js
import { defineStore } from 'pinia';

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    transactions: [
      { date: '2024-11-30', amount: 19300.20, source: 'Salary', comment: 'Monthly salary', category: 'Income' },
      { date: '2024-12-01', amount: 5000.00, source: 'Freelance', comment: 'Project payment', category: 'Income' },
      { date: '2024-12-15', amount: 500.00, source: 'Investment', comment: 'Dividends', category: 'Income' },
      { date: '2024-12-20', amount: 200.35, source: 'Gift', comment: 'Birthday gift', category: 'Income' },
      { date: '2024-12-25', amount: 1500.00, source: 'Groceries', comment: 'Monthly shopping', category: 'Expense' },
      { date: '2024-12-26', amount: 3000.55, source: 'Rent', comment: 'Monthly rent', category: 'Expense' },
      { date: '2024-12-28', amount: 8000.00, source: 'Travel', comment: 'Vacation', category: 'Expense' },
      { date: '2024-12-30', amount: 6000.00, source: 'Utilities', comment: 'Monthly utilities', category: 'Expense' }
    ],
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  },
  getters: {
    totalIncome: (state) => state.transactions.filter(t => t.category === 'Income').reduce((sum, t) => sum + t.amount, 0),
    totalExpense: (state) => state.transactions.filter(t => t.category === 'Expense').reduce((sum, t) => sum + t.amount, 0),
    netIncome: (state) => state.totalIncome - state.totalExpense,
  },
});
