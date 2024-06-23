import { defineStore } from 'pinia';

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    transactions: [
      { date: '2024-11-30T00:00:00Z', amount: 19300.20, source: 'Salary', comment: 'Monthly salary', category: 'Income' },
      { date: '2024-12-01T00:00:00Z', amount: 5000.00, source: 'Freelance', comment: 'Project payment', category: 'Income' },
      { date: '2024-12-15T00:00:00Z', amount: 500.00, source: 'Investment', comment: 'Dividends', category: 'Income' },
      { date: '2024-12-20T00:00:00Z', amount: 200.35, source: 'Gift', comment: 'Birthday gift', category: 'Income' },
      { date: '2024-12-25T00:00:00Z', amount: 1500.00, source: 'Groceries', comment: 'Monthly shopping', category: 'Expense' },
      { date: '2024-12-26T00:00:00Z', amount: 3000.55, source: 'Rent', comment: 'Monthly rent', category: 'Expense' },
      { date: '2024-12-28T00:00:00Z', amount: 8000.00, source: 'Travel', comment: 'Vacation', category: 'Expense' },
      { date: '2024-12-30T00:00:00Z', amount: 6000.00, source: 'Utilities', comment: 'Monthly utilities', category: 'Expense' }
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
