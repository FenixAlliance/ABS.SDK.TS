import { createClient as $, createConfig as x, formDataBodySerializer as u } from "@hey-api/client-fetch";
const r = $(x()), o = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ee = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/AccountGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), re = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ae = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/AccountGroups/{accountGroupId}",
  ...e
}), te = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountGroups/{accountGroupId}",
  ...e
}), ce = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/AccountGroups/{accountGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), le = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/AccountGroups/{accountGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ne = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountingPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ue = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/AccountingPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ie = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountingPeriods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), se = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/AccountingPeriods/{accountingPeriodId}",
  ...e
}), de = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/AccountingPeriods/{accountingPeriodId}",
  ...e
}), ve = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/AccountingPeriods/{accountingPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ge = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/AccountingPeriods/{accountingPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), he = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Summary/Incomes/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), me = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Summary/Expenses/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ce = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Summary/Debits/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Se = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Summary/Credits/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ye = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Te = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Root",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ie = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Accounts/{accountId}",
  ...e
}), je = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}",
  ...e
}), Ae = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Accounts/{accountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ge = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Accounts/{accountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Le = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/Root/Balance",
  ...e
}), Re = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Balance",
  ...e
}), be = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Children",
  ...e
}), ke = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Me = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), we = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/Debit",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ee = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/Credit",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), De = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}",
  ...e
}), Be = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}",
  ...e
}), $e = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xe = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Debits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ue = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Debits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Debits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), We = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Credits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), He = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Credits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Credits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ve = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Aggregate/Balance",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _e = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/Aggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Je = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ze = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Types/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ne = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Accounts/Types/{accountTypeId}",
  ...e
}), Ke = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Types/{accountTypeId}",
  ...e
}), Ye = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Accounts/Types/{accountTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ze = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Accounts/Types/{accountTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Relations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pe = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/Relations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oe = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Relations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), er = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Accounts/Relations/{accountRelationId}",
  ...e
}), rr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Accounts/Relations/{accountRelationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ar = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Accounts/Relations/{accountRelationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tr = (e) => ((e == null ? void 0 : e.client) ?? r).get({
  url: "/api/v2/AccountingService/Accounts/ChartsOfAccounts",
  ...e
}), cr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/ChartsOfAccounts/Seed",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Banking",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ur = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ir = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Banking/{bankId}",
  ...e
}), sr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}",
  ...e
}), dr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Banking/{bankId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Banking/{bankId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}",
  ...e
}), Sr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}",
  ...e
}), yr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ir = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}",
  ...e
}), Ar = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}",
  ...e
}), Gr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), br = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e
}), wr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e
}), Er = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Br = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BankProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $r = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BankProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ur = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Or = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes/{taxId}",
  ...e
}), Wr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes/{taxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/BillableLines/{billableLineId}/Taxes/{taxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/BillingProfiles/{billingProfileId}",
  ...e
}), Vr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillingProfiles/{billingProfileId}",
  ...e
}), _r = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/BillingProfiles/{billingProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/BillingProfiles/{billingProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillingProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qr = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/BillingProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillingProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Budgets/{budgetId}",
  ...e
}), Yr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Budgets/{budgetId}",
  ...e
}), Zr = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Budgets/{budgetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Budgets/{budgetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Budgets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), or = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Budgets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ea = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Budgets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ra = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aa = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ta = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{entryId}",
  ...e
}), ca = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{entryId}",
  ...e
}), la = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), na = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ua = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/Commissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ia = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Commissions/Commissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/Commissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), da = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Commissions/Commissions/{commissionId}",
  ...e
}), va = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/Commissions/{commissionId}",
  ...e
}), ga = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Commissions/Commissions/{commissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ha = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Commissions/Commissions/{commissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ma = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ca = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ya = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentCommissionId}",
  ...e
}), Ta = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentCommissionId}",
  ...e
}), Pa = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentCommissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fa = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentCommissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ia = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ja = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/CostCentres",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ga = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/CostCentres/{costCentreId}",
  ...e
}), La = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/{costCentreId}",
  ...e
}), Ra = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/CostCentres/{costCentreId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ba = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/CostCentres/{costCentreId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ka = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ma = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ea = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/{groupId}",
  ...e
}), Da = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/{groupId}",
  ...e
}), Ba = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $a = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fa = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ua = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets/{budgetId}",
  ...e
}), Oa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets/{budgetId}",
  ...e
}), Wa = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets/{budgetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ha = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/CostCentres/CostCentreBudgets/{budgetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseClaims",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Va = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/ExpenseClaims",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _a = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseClaims/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ja = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e
}), za = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e
}), Qa = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Na = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ka = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ya = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/ExpenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Za = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xa = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/ExpenseTypes/{expenseTypeId}",
  ...e
}), pa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseTypes/{expenseTypeId}",
  ...e
}), oa = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/ExpenseTypes/{expenseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), et = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/ExpenseTypes/{expenseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rt = (e) => ((e == null ? void 0 : e.client) ?? r).get({
  url: "/version",
  ...e
}), at = (e) => ((e == null ? void 0 : e.client) ?? r).get({
  url: "/health",
  ...e
}), tt = (e) => ((e == null ? void 0 : e.client) ?? r).get({
  url: "/hello",
  ...e
}), ct = (e) => (e.client ?? r).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lt = (e) => (e.client ?? r).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nt = (e) => (e.client ?? r).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ut = (e) => (e.client ?? r).get({
  url: "/confirmEmail",
  ...e
}), it = (e) => (e.client ?? r).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), st = (e) => (e.client ?? r).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dt = (e) => (e.client ?? r).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vt = (e) => (e.client ?? r).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gt = (e) => ((e == null ? void 0 : e.client) ?? r).get({
  url: "/manage/info",
  ...e
}), ht = (e) => (e.client ?? r).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mt = (e) => ((e == null ? void 0 : e.client) ?? r).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ct = (e) => ((e == null ? void 0 : e.client) ?? r).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), St = (e) => ((e == null ? void 0 : e.client) ?? r).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), yt = (e) => ((e == null ? void 0 : e.client) ?? r).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Tt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FinancialBooks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pt = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/FinancialBooks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ft = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FinancialBooks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), It = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/FinancialBooks/{financialBookId}",
  ...e
}), jt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FinancialBooks/{financialBookId}",
  ...e
}), At = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/FinancialBooks/{financialBookId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gt = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/FinancialBooks/{financialBookId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rt = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kt = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e
}), Mt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e
}), wt = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Et = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $t = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}",
  ...e
}), xt = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ft = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalYears/{fiscalYearId}",
  ...e
}), Ut = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalYears/{fiscalYearId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ot = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalYears/{fiscalYearId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/EnumerationRanges",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ht = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/EnumerationRanges/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/EnumerationRanges/{enumerationRangeId}",
  ...e
}), Vt = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _t = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges/{enumerationRangeId}",
  ...e
}), Jt = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges/{enumerationRangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zt = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges/{enumerationRangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/IdentificationTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/IdentificationTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/IdentificationTypes/{identificationTypeId}",
  ...e
}), Yt = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zt = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes/{identificationTypeId}",
  ...e
}), Xt = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes/{identificationTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pt = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes/{identificationTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ot = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ec = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/{fiscalPeriodId}",
  ...e
}), ac = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}",
  ...e
}), cc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}/Open",
  ...e
}), uc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}/Close",
  ...e
}), ic = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalRegimes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalRegimes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalRegimes/{regimeId}",
  ...e
}), vc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes/{regimeId}",
  ...e
}), hc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes/{regimeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes/{regimeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalResponsibilities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}",
  ...e
}), Tc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities/{fiscalResponsibilityId}",
  ...e
}), fc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities/{fiscalResponsibilityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ic = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities/{fiscalResponsibilityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ac = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}",
  ...e
}), Lc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}",
  ...e
}), bc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ec = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FiscalYears/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/FiscalYears/{fiscalYearId}",
  ...e
}), Bc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FiscalYears/{fiscalYearId}",
  ...e
}), $c = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/FiscalYears/{fiscalYearId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/FiscalYears/{fiscalYearId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Grants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Grants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Grants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Grants/{grantId}",
  ...e
}), Hc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Grants/{grantId}",
  ...e
}), qc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Grants/{grantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Grants/{grantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _c = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}",
  ...e
}), Qc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}",
  ...e
}), Nc = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kc = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Journals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Journals/{journalId}",
  ...e
}), oc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}",
  ...e
}), el = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Journals/{journalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rl = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Journals/{journalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), al = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Journals/{journalId}/AssignToBook",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ll = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nl = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}",
  ...e
}), ul = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}",
  ...e
}), il = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sl = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/Aggregate/Debits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/Aggregate/Credits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}/Post",
  ...e
}), hl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/{entryId}/Reverse",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ml = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/JournalTypes/{journalTypeId}",
  ...e
}), Cl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/JournalTypes/{journalTypeId}",
  ...e
}), Sl = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/JournalTypes/{journalTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yl = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/JournalTypes/{journalTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/JournalTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/JournalTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/JournalTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Il = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Ledgers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Ledgers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Al = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Ledgers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gl = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Ledgers/{ledgerId}",
  ...e
}), Ll = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Ledgers/{ledgerId}",
  ...e
}), Rl = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Ledgers/{ledgerId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bl = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Ledgers/{ledgerId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/LedgerTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ml = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/LedgerTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/LedgerTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), El = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/LedgerTypes/{ledgerTypeId}",
  ...e
}), Dl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/LedgerTypes/{ledgerTypeId}",
  ...e
}), Bl = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/LedgerTypes/{ledgerTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $l = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/LedgerTypes/{ledgerTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xl = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Loans/{loanId}",
  ...e
}), Fl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/{loanId}",
  ...e
}), Ul = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Loans/{loanId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ol = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Loans/{loanId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Loans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ql = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _l = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Loans/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Applications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zl = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Loans/Applications/{applicationId}",
  ...e
}), Ql = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Applications/{applicationId}",
  ...e
}), Nl = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Loans/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kl = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Loans/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Loans/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Types/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pl = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Loans/Types/{loanTypeId}",
  ...e
}), ol = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Types/{loanTypeId}",
  ...e
}), en = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Loans/Types/{loanTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Loans/Types/{loanTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), an = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/PostingExecutions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/PostingExecutions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Receipts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ln = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Receipts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Receipts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), un = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Receipts/{receiptId}",
  ...e
}), sn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Receipts/{receiptId}",
  ...e
}), dn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Receipts/{receiptId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Receipts/{receiptId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Reports/TrialBalance",
  ...e
}), hn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Classes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mn = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Shares/Classes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Classes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sn = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Shares/Classes/{shareClassId}",
  ...e
}), yn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Classes/{shareClassId}",
  ...e
}), Tn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Shares/Classes/{shareClassId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Shares/Classes/{shareClassId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Issuances",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), In = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Shares/Issuances",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Issuances/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), An = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Issuances/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gn = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Shares/Issuances/{issuanceId}",
  ...e
}), Ln = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Issuances/{issuanceId}",
  ...e
}), Rn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Shares/Issuances/{issuanceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Shares/Issuances/{issuanceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Transfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mn = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Shares/Transfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Transfers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), En = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Shares/Transfers/{transferId}",
  ...e
}), Dn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Transfers/{transferId}",
  ...e
}), Bn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Shares/Transfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $n = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Shares/Transfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/TransferReasons",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fn = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Shares/TransferReasons",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Un = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/TransferReasons/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), On = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Shares/TransferReasons/{reasonId}",
  ...e
}), Wn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/TransferReasons/{reasonId}",
  ...e
}), Hn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Shares/TransferReasons/{reasonId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Shares/TransferReasons/{reasonId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _n = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/TaxClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxClasses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zn = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxClasses/{id}",
  ...e
}), Qn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxClasses/{id}",
  ...e
}), Nn = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/TaxClasses/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/TaxClasses/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zn = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/TaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/ByAuthority/{authorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), on = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxPolicies/{id}",
  ...e
}), eu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{id}",
  ...e
}), ru = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/TaxPolicies/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), au = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/TaxPolicies/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cu = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lu = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}",
  ...e
}), nu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}",
  ...e
}), uu = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iu = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), su = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), du = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gu = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}",
  ...e
}), hu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}",
  ...e
}), mu = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cu = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Su = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxRates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yu = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/TaxRates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxRates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pu = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxRates/{id}",
  ...e
}), fu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxRates/{id}",
  ...e
}), Iu = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/TaxRates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ju = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/TaxRates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Au = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gu = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Transactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ru = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Transactions/{transactionId}",
  ...e
}), bu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/{transactionId}",
  ...e
}), ku = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Transactions/{transactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mu = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Transactions/{transactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eu = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Transactions/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Du = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/Categories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bu = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Transactions/Categories/{categoryId}",
  ...e
}), $u = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/Categories/{categoryId}",
  ...e
}), xu = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Transactions/Categories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fu = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Transactions/Categories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accountGroupsCreateAccountGroup: ee,
  accountGroupsDeleteAccountGroup: ae,
  accountGroupsGetAccountGroup: te,
  accountGroupsGetAccountGroups: o,
  accountGroupsGetAccountGroupsCount: re,
  accountGroupsPatchAccountGroup: ce,
  accountGroupsUpdateAccountGroup: le,
  accountingPeriodsCreateAccountingPeriod: ue,
  accountingPeriodsDeleteAccountingPeriod: se,
  accountingPeriodsGetAccountingPeriod: de,
  accountingPeriodsGetAccountingPeriods: ne,
  accountingPeriodsGetAccountingPeriodsCount: ie,
  accountingPeriodsPatchAccountingPeriod: ve,
  accountingPeriodsUpdateAccountingPeriod: ge,
  accountingSummaryGetCreditsSum: Se,
  accountingSummaryGetDebitsSum: Ce,
  accountingSummaryGetExpensesSum: me,
  accountingSummaryGetIncomesSum: he,
  accountsAggregateAccountsBalance: Ve,
  accountsBalanceAccount: Re,
  accountsBalanceRootAccount: Le,
  accountsCreateAccount: Te,
  accountsCreateAccountCredit: He,
  accountsCreateAccountDebit: Ue,
  accountsCreateAccountEntry: Me,
  accountsCreateAccountRelation: pe,
  accountsCreateAccountType: ze,
  accountsDeleteAccount: Ie,
  accountsDeleteAccountEntry: De,
  accountsDeleteAccountRelation: er,
  accountsDeleteAccountType: Ne,
  accountsGetAccountAggregate: _e,
  accountsGetAccountCredits: We,
  accountsGetAccountCreditsCount: qe,
  accountsGetAccountDebits: Fe,
  accountsGetAccountDebitsCount: Oe,
  accountsGetAccountDetails: je,
  accountsGetAccountEntries: ke,
  accountsGetAccountEntry: Be,
  accountsGetAccountRelations: Xe,
  accountsGetAccountRelationsCount: oe,
  accountsGetAccountTypeById: Ke,
  accountsGetAccountTypes: Je,
  accountsGetAccountTypesCount: Qe,
  accountsGetAccounts: ye,
  accountsGetAccountsCount: Pe,
  accountsGetChartsOfAccounts: tr,
  accountsGetChildAccounts: be,
  accountsGetCreditAccountEntries: Ee,
  accountsGetDebitAccountEntries: we,
  accountsGetRootAccounts: fe,
  accountsPatchAccount: Ae,
  accountsPatchAccountEntry: $e,
  accountsPatchAccountRelation: rr,
  accountsPatchAccountType: Ye,
  accountsSeedChartOfAccounts: cr,
  accountsUpdateAccount: Ge,
  accountsUpdateAccountEntry: xe,
  accountsUpdateAccountRelation: ar,
  accountsUpdateAccountType: Ze,
  bankProfilesGetBankProfiles: Br,
  bankProfilesGetBankProfilesCount: $r,
  bankingCreateBank: nr,
  bankingCreateBankAccount: hr,
  bankingCreateBankGuarantee: fr,
  bankingCreateBankTransaction: br,
  bankingDeleteBank: ir,
  bankingDeleteBankAccount: Cr,
  bankingDeleteBankGuarantee: jr,
  bankingDeleteBankTransaction: Mr,
  bankingGetBank: sr,
  bankingGetBankAccount: Sr,
  bankingGetBankAccounts: gr,
  bankingGetBankAccountsCount: mr,
  bankingGetBankGuarantee: Ar,
  bankingGetBankGuarantees: Pr,
  bankingGetBankGuaranteesCount: Ir,
  bankingGetBankTransaction: wr,
  bankingGetBankTransactions: Rr,
  bankingGetBankTransactionsCount: kr,
  bankingGetBanks: lr,
  bankingGetBanksCount: ur,
  bankingPatchBank: dr,
  bankingPatchBankAccount: yr,
  bankingPatchBankGuarantee: Gr,
  bankingPatchBankTransaction: Er,
  bankingUpdateBank: vr,
  bankingUpdateBankAccount: Tr,
  bankingUpdateBankGuarantee: Lr,
  bankingUpdateBankTransaction: Dr,
  billableLineTaxesCreateBillableLineTax: Fr,
  billableLineTaxesDeleteBillableLineTax: Or,
  billableLineTaxesGetBillableLineTaxes: xr,
  billableLineTaxesGetBillableLineTaxesCount: Ur,
  billableLineTaxesPatchBillableLineTax: Wr,
  billableLineTaxesUpdateBillableLineTax: Hr,
  billingProfilesCreateBillingProfile: Qr,
  billingProfilesDeleteBillingProfile: qr,
  billingProfilesGetBillingProfileById: Vr,
  billingProfilesGetBillingProfiles: zr,
  billingProfilesGetBillingProfilesCount: Nr,
  billingProfilesPatchBillingProfile: _r,
  billingProfilesUpdateBillingProfile: Jr,
  budgetsCreateBudget: or,
  budgetsCreateBudgetAccountEntry: aa,
  budgetsDeleteBudget: Kr,
  budgetsDeleteBudgetAccountEntry: ta,
  budgetsGetBudgetAccountEntriesCollection: ra,
  budgetsGetBudgetAccountEntry: ca,
  budgetsGetBudgetDetails: Yr,
  budgetsGetBudgets: pr,
  budgetsGetBudgetsCount: ea,
  budgetsPatchBudget: Zr,
  budgetsPatchBudgetAccountEntry: la,
  budgetsUpdateBudget: Xr,
  budgetsUpdateBudgetAccountEntry: na,
  commissionsCreateCommission: ia,
  commissionsCreatePaymentCommission: Ca,
  commissionsDeleteCommission: da,
  commissionsDeletePaymentCommission: ya,
  commissionsGetCommission: va,
  commissionsGetCommissions: ua,
  commissionsGetCommissionsCount: sa,
  commissionsGetPaymentCommission: Ta,
  commissionsGetPaymentCommissions: ma,
  commissionsGetPaymentCommissionsCount: Sa,
  commissionsPatchCommission: ga,
  commissionsPatchPaymentCommission: Pa,
  commissionsUpdateCommission: ha,
  commissionsUpdatePaymentCommission: fa,
  costCentresCreateCostCentre: ja,
  costCentresCreateCostCentreBudget: Fa,
  costCentresCreateCostCentreGroup: Ma,
  costCentresDeleteCostCentre: Ga,
  costCentresDeleteCostCentreBudget: Ua,
  costCentresDeleteCostCentreGroup: Ea,
  costCentresGetCostCentre: La,
  costCentresGetCostCentreBudget: Oa,
  costCentresGetCostCentreBudgets: xa,
  costCentresGetCostCentreGroup: Da,
  costCentresGetCostCentreGroups: ka,
  costCentresGetCostCentreGroupsCount: wa,
  costCentresGetCostCentres: Ia,
  costCentresGetCostCentresCount: Aa,
  costCentresPatchCostCentre: Ra,
  costCentresPatchCostCentreBudget: Wa,
  costCentresPatchCostCentreGroup: Ba,
  costCentresUpdateCostCentre: ba,
  costCentresUpdateCostCentreBudget: Ha,
  costCentresUpdateCostCentreGroup: $a,
  expenseClaimsCreateExpenseClaim: Va,
  expenseClaimsDeleteExpenseClaim: Ja,
  expenseClaimsGetExpenseClaim: za,
  expenseClaimsGetExpenseClaims: qa,
  expenseClaimsGetExpenseClaimsCount: _a,
  expenseClaimsPatchExpenseClaim: Qa,
  expenseClaimsUpdateExpenseClaim: Na,
  expenseTypesCreateExpenseType: Ya,
  expenseTypesDeleteExpenseType: Xa,
  expenseTypesGetExpenseType: pa,
  expenseTypesGetExpenseTypes: Ka,
  expenseTypesGetExpenseTypesCount: Za,
  expenseTypesPatchExpenseType: oa,
  expenseTypesUpdateExpenseType: et,
  financialBooksCreateFinancialBook: Pt,
  financialBooksDeleteFinancialBook: It,
  financialBooksGetFinancialBookDetails: jt,
  financialBooksGetFinancialBooks: Tt,
  financialBooksGetFinancialBooksCount: ft,
  financialBooksPatchFinancialBook: At,
  financialBooksUpdateFinancialBook: Gt,
  fiscalAuthoritiesCreateFiscalAuthority: Rt,
  fiscalAuthoritiesDeleteFiscalAuthority: kt,
  fiscalAuthoritiesGetFiscalAuthorities: Lt,
  fiscalAuthoritiesGetFiscalAuthoritiesCount: bt,
  fiscalAuthoritiesGetFiscalAuthority: Mt,
  fiscalAuthoritiesPatchFiscalAuthority: wt,
  fiscalAuthoritiesUpdateFiscalAuthority: Et,
  fiscalAuthorityYearsCreateFiscalYear: xt,
  fiscalAuthorityYearsDeleteFiscalYear: Ft,
  fiscalAuthorityYearsGetFiscalYear: $t,
  fiscalAuthorityYearsGetFiscalYears: Dt,
  fiscalAuthorityYearsGetFiscalYearsCount: Bt,
  fiscalAuthorityYearsPatchFiscalAuthorityYear: Ut,
  fiscalAuthorityYearsUpdateFiscalYear: Ot,
  fiscalEnumerationRangesCreateInvoiceEnumerationRange: Vt,
  fiscalEnumerationRangesDeleteInvoiceEnumerationRange: _t,
  fiscalEnumerationRangesGetInvoiceEnumerationRange: qt,
  fiscalEnumerationRangesGetInvoiceEnumerationRanges: Wt,
  fiscalEnumerationRangesGetInvoiceEnumerationRangesCount: Ht,
  fiscalEnumerationRangesPatchFiscalEnumerationRange: Jt,
  fiscalEnumerationRangesUpdateInvoiceEnumerationRange: zt,
  fiscalIdentificationTypesCreateFiscalIdentificationType: Yt,
  fiscalIdentificationTypesDeleteFiscalIdentificationType: Zt,
  fiscalIdentificationTypesGetFiscalIdentificationType: Kt,
  fiscalIdentificationTypesGetFiscalIdentificationTypes: Qt,
  fiscalIdentificationTypesGetFiscalIdentificationTypesCount: Nt,
  fiscalIdentificationTypesPatchFiscalIdentificationType: Xt,
  fiscalIdentificationTypesUpdateFiscalIdentificationType: pt,
  fiscalPeriodsCloseFiscalPeriod: uc,
  fiscalPeriodsCreateFiscalPeriod: ac,
  fiscalPeriodsDeleteFiscalPeriod: tc,
  fiscalPeriodsGetFiscalPeriod: rc,
  fiscalPeriodsGetFiscalPeriods: ot,
  fiscalPeriodsGetFiscalPeriodsCount: ec,
  fiscalPeriodsOpenFiscalPeriod: nc,
  fiscalPeriodsPatchFiscalPeriod: cc,
  fiscalPeriodsUpdateFiscalPeriod: lc,
  fiscalRegimesCreateFiscalRegime: vc,
  fiscalRegimesDeleteFiscalRegime: gc,
  fiscalRegimesGetFiscalRegime: dc,
  fiscalRegimesGetFiscalRegimes: ic,
  fiscalRegimesGetFiscalRegimesCount: sc,
  fiscalRegimesPatchFiscalRegime: hc,
  fiscalRegimesUpdateFiscalRegime: mc,
  fiscalResponsibilitiesCreateFiscalResponsibility: Tc,
  fiscalResponsibilitiesDeleteFiscalResponsibility: Pc,
  fiscalResponsibilitiesGetFiscalResponsibilities: Cc,
  fiscalResponsibilitiesGetFiscalResponsibilitiesCount: Sc,
  fiscalResponsibilitiesGetFiscalResponsibility: yc,
  fiscalResponsibilitiesPatchFiscalResponsibility: fc,
  fiscalResponsibilitiesUpdateFiscalResponsibility: Ic,
  fiscalResponsibilityRecordsCreateFiscalResponsibilityRecord: Lc,
  fiscalResponsibilityRecordsDeleteFiscalResponsibilityRecord: Rc,
  fiscalResponsibilityRecordsGetFiscalResponsibilityRecord: Gc,
  fiscalResponsibilityRecordsGetFiscalResponsibilityRecords: jc,
  fiscalResponsibilityRecordsGetFiscalResponsibilityRecordsCount: Ac,
  fiscalResponsibilityRecordsPatchFiscalResponsibilityRecord: bc,
  fiscalResponsibilityRecordsUpdateFiscalResponsibilityRecord: kc,
  fiscalYearsCreateFiscalYear: wc,
  fiscalYearsDeleteFiscalYear: Dc,
  fiscalYearsGetFiscalYearDetails: Bc,
  fiscalYearsGetFiscalYears: Mc,
  fiscalYearsGetFiscalYearsCount: Ec,
  fiscalYearsPatchFiscalYear: $c,
  fiscalYearsUpdateFiscalYear: xc,
  grantsCreateGrant: Uc,
  grantsDeleteGrant: Wc,
  grantsGetGrantDetails: Hc,
  grantsGetGrants: Fc,
  grantsGetGrantsCount: Oc,
  grantsPatchGrant: qc,
  grantsUpdateGrant: Vc,
  invoiceEnumerationRangesCreateInvoiceEnumerationRange: Jc,
  invoiceEnumerationRangesDeleteInvoiceEnumerationRange: zc,
  invoiceEnumerationRangesGetInvoiceEnumerationRangeDetails: Qc,
  invoiceEnumerationRangesGetInvoiceEnumerationRanges: _c,
  invoiceEnumerationRangesPatchInvoiceEnumerationRange: Nc,
  invoiceEnumerationRangesUpdateInvoiceEnumerationRange: Kc,
  journalTypesCreateJournalType: Pl,
  journalTypesDeleteJournalType: ml,
  journalTypesGetJournalTypeDetails: Cl,
  journalTypesGetJournalTypes: Tl,
  journalTypesGetJournalTypesCount: fl,
  journalTypesPatchJournalType: Sl,
  journalTypesUpdateJournalType: yl,
  journalsAggregateJournalEntryCredits: vl,
  journalsAggregateJournalEntryDebits: dl,
  journalsAssignJournalToBook: al,
  journalsCountJournals: Xc,
  journalsCreateJournal: Zc,
  journalsCreateJournalEntry: cl,
  journalsDeleteJournal: pc,
  journalsDeleteJournalEntry: nl,
  journalsGetJournalDetails: oc,
  journalsGetJournalEntries: tl,
  journalsGetJournalEntriesCount: ll,
  journalsGetJournalEntryDetails: ul,
  journalsGetJournals: Yc,
  journalsPatchJournal: el,
  journalsPatchJournalEntry: il,
  journalsPostJournalEntry: gl,
  journalsReverseJournalEntry: hl,
  journalsUpdateJournal: rl,
  journalsUpdateJournalEntry: sl,
  ledgerTypesCreateLedgerType: Ml,
  ledgerTypesDeleteLedgerType: El,
  ledgerTypesGetLedgerTypeDetails: Dl,
  ledgerTypesGetLedgerTypes: kl,
  ledgerTypesGetLedgerTypesCount: wl,
  ledgerTypesPatchLedgerType: Bl,
  ledgerTypesUpdateLedgerType: $l,
  ledgersCreateLedger: jl,
  ledgersDeleteLedger: Gl,
  ledgersGetLedgerDetails: Ll,
  ledgersGetLedgers: Il,
  ledgersGetLedgersCount: Al,
  ledgersPatchLedger: Rl,
  ledgersUpdateLedger: bl,
  loansCreateLoan: Hl,
  loansCreateLoanApplication: _l,
  loansCreateLoanType: Zl,
  loansDeleteLoan: xl,
  loansDeleteLoanApplication: zl,
  loansDeleteLoanType: pl,
  loansGetLoanApplicationDetails: Ql,
  loansGetLoanApplications: Vl,
  loansGetLoanApplicationsCount: Jl,
  loansGetLoanDetails: Fl,
  loansGetLoanTypeById: ol,
  loansGetLoanTypes: Yl,
  loansGetLoanTypesCount: Xl,
  loansGetLoans: Wl,
  loansGetLoansCount: ql,
  loansPatchLoan: Ul,
  loansPatchLoanApplication: Nl,
  loansPatchLoanType: en,
  loansUpdateLoan: Ol,
  loansUpdateLoanApplication: Kl,
  loansUpdateLoanType: rn,
  platformGetHealth: at,
  platformGetHello: tt,
  platformGetManageInfo: gt,
  platformGetVersion: rt,
  platformMapIdentityApiConfirmEmail: ut,
  platformPostAccountLogout: Ct,
  platformPostAccountManageDownloadPersonalData: yt,
  platformPostAccountManageLinkExternalLogin: St,
  platformPostAccountPerformExternalLogin: mt,
  platformPostForgotPassword: st,
  platformPostLogin: lt,
  platformPostManage2Fa: vt,
  platformPostManageInfo: ht,
  platformPostRefresh: nt,
  platformPostRegister: ct,
  platformPostResendConfirmationEmail: it,
  platformPostResetPassword: dt,
  postingExecutionsCountPostingExecutions: tn,
  postingExecutionsGetPostingExecutions: an,
  receiptsCreateReceipt: ln,
  receiptsDeleteReceipt: un,
  receiptsGetReceiptDetails: sn,
  receiptsGetReceipts: cn,
  receiptsGetReceiptsCount: nn,
  receiptsPatchReceipt: dn,
  receiptsUpdateReceipt: vn,
  reportsGetTrialBalance: gn,
  sharesCreateShareClass: mn,
  sharesCreateShareIssuance: In,
  sharesCreateShareTransfer: Mn,
  sharesCreateShareTransferReason: Fn,
  sharesDeleteShareClass: Sn,
  sharesDeleteShareIssuance: Gn,
  sharesDeleteShareTransfer: En,
  sharesDeleteShareTransferReason: On,
  sharesGetShareClass: yn,
  sharesGetShareClasses: hn,
  sharesGetShareClassesCount: Cn,
  sharesGetShareIssuance: Ln,
  sharesGetShareIssuances: fn,
  sharesGetShareIssuancesCount: jn,
  sharesGetShareIssuancesSum: An,
  sharesGetShareTransfer: Dn,
  sharesGetShareTransferReason: Wn,
  sharesGetShareTransferReasons: xn,
  sharesGetShareTransferReasonsCount: Un,
  sharesGetShareTransfers: kn,
  sharesGetShareTransfersCount: wn,
  sharesPatchShareClass: Tn,
  sharesPatchShareIssuance: Rn,
  sharesPatchShareTransfer: Bn,
  sharesPatchShareTransferReason: Hn,
  sharesUpdateShareClass: Pn,
  sharesUpdateShareIssuance: bn,
  sharesUpdateShareTransfer: $n,
  sharesUpdateShareTransferReason: qn,
  taxClassesCreateTaxClass: _n,
  taxClassesDeleteTaxClass: zn,
  taxClassesGetTaxClass: Qn,
  taxClassesGetTaxClasses: Vn,
  taxClassesGetTaxClassesCount: Jn,
  taxClassesPatchTaxClass: Nn,
  taxClassesUpdateTaxClass: Kn,
  taxPoliciesCreateAppliedTaxPolicyRecord: du,
  taxPoliciesCreateItemTaxPolicyRecord: cu,
  taxPoliciesCreateTaxPolicy: Zn,
  taxPoliciesDeleteAppliedTaxPolicyRecord: gu,
  taxPoliciesDeleteItemTaxPolicyRecord: lu,
  taxPoliciesDeleteTaxPolicy: on,
  taxPoliciesGetAppliedTaxPolicyRecord: hu,
  taxPoliciesGetAppliedTaxPolicyRecords: su,
  taxPoliciesGetAppliedTaxPolicyRecordsCount: vu,
  taxPoliciesGetItemTaxPolicyRecord: nu,
  taxPoliciesGetItemTaxPolicyRecords: tu,
  taxPoliciesGetTaxPolicies: Yn,
  taxPoliciesGetTaxPoliciesByAuthority: pn,
  taxPoliciesGetTaxPoliciesCount: Xn,
  taxPoliciesGetTaxPolicy: eu,
  taxPoliciesPatchAppliedTaxPolicyRecord: mu,
  taxPoliciesPatchItemTaxPolicyRecord: uu,
  taxPoliciesPatchTaxPolicy: ru,
  taxPoliciesUpdateAppliedTaxPolicyRecord: Cu,
  taxPoliciesUpdateItemTaxPolicyRecord: iu,
  taxPoliciesUpdateTaxPolicy: au,
  taxRatesCreateTaxRate: yu,
  taxRatesDeleteTaxRate: Pu,
  taxRatesGetTaxRate: fu,
  taxRatesGetTaxRates: Su,
  taxRatesGetTaxRatesCount: Tu,
  taxRatesPatchTaxRate: Iu,
  taxRatesUpdateTaxRate: ju,
  transactionsCreateTransaction: Gu,
  transactionsCreateTransactionCategory: Eu,
  transactionsDeleteTransaction: Ru,
  transactionsDeleteTransactionCategory: Bu,
  transactionsGetTransaction: bu,
  transactionsGetTransactionCategories: wu,
  transactionsGetTransactionCategoriesCount: Du,
  transactionsGetTransactionCategory: $u,
  transactionsGetTransactions: Au,
  transactionsGetTransactionsCount: Lu,
  transactionsPatchTransaction: ku,
  transactionsPatchTransactionCategory: xu,
  transactionsUpdateTransaction: Mu,
  transactionsUpdateTransactionCategory: Fu
}, Symbol.toStringTag, { value: "Module" })), V = $(x()), Uu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ou = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}",
  ...e
}), Hu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qu = (e) => (e.client ?? V).post({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _u = (e) => (e.client ?? V).delete({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e
}), Ju = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e
}), zu = (e) => (e.client ?? V).patch({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qu = (e) => (e.client ?? V).put({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/Activities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ku = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yu = (e) => (e.client ?? V).post({
  url: "/api/v2/ActivitiesService/ActivityTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xu = (e) => (e.client ?? V).delete({
  url: "/api/v2/ActivitiesService/ActivityTypes/{activityTypeId}",
  ...e
}), pu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityTypes/{activityTypeId}",
  ...e
}), ou = (e) => (e.client ?? V).patch({
  url: "/api/v2/ActivitiesService/ActivityTypes/{activityTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ei = (e) => (e.client ?? V).put({
  url: "/api/v2/ActivitiesService/ActivityTypes/{activityTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ri = (e) => ((e == null ? void 0 : e.client) ?? V).get({
  url: "/version",
  ...e
}), ai = (e) => ((e == null ? void 0 : e.client) ?? V).get({
  url: "/health",
  ...e
}), ti = (e) => ((e == null ? void 0 : e.client) ?? V).get({
  url: "/hello",
  ...e
}), ci = (e) => (e.client ?? V).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), li = (e) => (e.client ?? V).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ni = (e) => (e.client ?? V).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ui = (e) => (e.client ?? V).get({
  url: "/confirmEmail",
  ...e
}), ii = (e) => (e.client ?? V).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), si = (e) => (e.client ?? V).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), di = (e) => (e.client ?? V).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vi = (e) => (e.client ?? V).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gi = (e) => ((e == null ? void 0 : e.client) ?? V).get({
  url: "/manage/info",
  ...e
}), hi = (e) => (e.client ?? V).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mi = (e) => ((e == null ? void 0 : e.client) ?? V).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ci = (e) => ((e == null ? void 0 : e.client) ?? V).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Si = (e) => ((e == null ? void 0 : e.client) ?? V).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), yi = (e) => ((e == null ? void 0 : e.client) ?? V).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Vme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activityFeedsCountActivityTypes: Zu,
  activityFeedsCreateActivity: qu,
  activityFeedsCreateActivityType: Yu,
  activityFeedsDeleteActivity: _u,
  activityFeedsDeleteActivityType: Xu,
  activityFeedsGetActivities: Hu,
  activityFeedsGetActivitiesCount: Vu,
  activityFeedsGetActivity: Ju,
  activityFeedsGetActivityFeed: Wu,
  activityFeedsGetActivityFeeds: Uu,
  activityFeedsGetActivityFeedsCount: Ou,
  activityFeedsGetActivityRecordsCount: Nu,
  activityFeedsGetActivityTypeById: pu,
  activityFeedsGetActivityTypes: Ku,
  activityFeedsPatchActivity: zu,
  activityFeedsPatchActivityType: ou,
  activityFeedsUpdateActivity: Qu,
  activityFeedsUpdateActivityType: ei,
  platformGetHealth: ai,
  platformGetHello: ti,
  platformGetManageInfo: gi,
  platformGetVersion: ri,
  platformMapIdentityApiConfirmEmail: ui,
  platformPostAccountLogout: Ci,
  platformPostAccountManageDownloadPersonalData: yi,
  platformPostAccountManageLinkExternalLogin: Si,
  platformPostAccountPerformExternalLogin: mi,
  platformPostForgotPassword: si,
  platformPostLogin: li,
  platformPostManage2Fa: vi,
  platformPostManageInfo: hi,
  platformPostRefresh: ni,
  platformPostRegister: ci,
  platformPostResendConfirmationEmail: ii,
  platformPostResetPassword: di
}, Symbol.toStringTag, { value: "Module" })), Y = $(x()), Ti = (e) => (e.client ?? Y).get({
  url: "/api/v2/AnalyticsService/Datasets",
  ...e
}), Pi = (e) => ((e == null ? void 0 : e.client) ?? Y).get({
  url: "/version",
  ...e
}), fi = (e) => ((e == null ? void 0 : e.client) ?? Y).get({
  url: "/health",
  ...e
}), Ii = (e) => ((e == null ? void 0 : e.client) ?? Y).get({
  url: "/hello",
  ...e
}), ji = (e) => (e.client ?? Y).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ai = (e) => (e.client ?? Y).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gi = (e) => (e.client ?? Y).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Li = (e) => (e.client ?? Y).get({
  url: "/confirmEmail",
  ...e
}), Ri = (e) => (e.client ?? Y).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bi = (e) => (e.client ?? Y).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ki = (e) => (e.client ?? Y).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mi = (e) => (e.client ?? Y).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wi = (e) => ((e == null ? void 0 : e.client) ?? Y).get({
  url: "/manage/info",
  ...e
}), Ei = (e) => (e.client ?? Y).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Di = (e) => ((e == null ? void 0 : e.client) ?? Y).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Bi = (e) => ((e == null ? void 0 : e.client) ?? Y).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), $i = (e) => ((e == null ? void 0 : e.client) ?? Y).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), xi = (e) => ((e == null ? void 0 : e.client) ?? Y).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Fi = (e) => (e.client ?? Y).post({
  url: "/api/v2/AnalyticsService/Queries/Execute",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  datasetsGetCatalog: Ti,
  platformGetHealth: fi,
  platformGetHello: Ii,
  platformGetManageInfo: wi,
  platformGetVersion: Pi,
  platformMapIdentityApiConfirmEmail: Li,
  platformPostAccountLogout: Bi,
  platformPostAccountManageDownloadPersonalData: xi,
  platformPostAccountManageLinkExternalLogin: $i,
  platformPostAccountPerformExternalLogin: Di,
  platformPostForgotPassword: bi,
  platformPostLogin: Ai,
  platformPostManage2Fa: Mi,
  platformPostManageInfo: Ei,
  platformPostRefresh: Gi,
  platformPostRegister: ji,
  platformPostResendConfirmationEmail: Ri,
  platformPostResetPassword: ki,
  queriesExecute: Fi
}, Symbol.toStringTag, { value: "Module" })), Q = $(x()), Ui = (e) => (e.client ?? Q).get({
  url: "/api/v2/ApprovalsService/Pending",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oi = (e) => (e.client ?? Q).get({
  url: "/api/v2/ApprovalsService/Pending/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wi = (e) => (e.client ?? Q).get({
  url: "/api/v2/ApprovalsService/{ticketId}",
  ...e
}), Hi = (e) => (e.client ?? Q).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Decide",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qi = (e) => (e.client ?? Q).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Cancel",
  ...e
}), Vi = (e) => (e.client ?? Q).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Reassign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _i = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/version",
  ...e
}), Ji = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/health",
  ...e
}), zi = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/hello",
  ...e
}), Qi = (e) => (e.client ?? Q).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ni = (e) => (e.client ?? Q).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ki = (e) => (e.client ?? Q).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yi = (e) => (e.client ?? Q).get({
  url: "/confirmEmail",
  ...e
}), Zi = (e) => (e.client ?? Q).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xi = (e) => (e.client ?? Q).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pi = (e) => (e.client ?? Q).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oi = (e) => (e.client ?? Q).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), es = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/manage/info",
  ...e
}), rs = (e) => (e.client ?? Q).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), as = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ts = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), cs = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ls = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Jme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  approvalsCancelApproval: qi,
  approvalsDecideApproval: Hi,
  approvalsGetApprovalDetail: Wi,
  approvalsGetPendingApprovals: Ui,
  approvalsGetPendingApprovalsCount: Oi,
  approvalsReassignApproval: Vi,
  platformGetHealth: Ji,
  platformGetHello: zi,
  platformGetManageInfo: es,
  platformGetVersion: _i,
  platformMapIdentityApiConfirmEmail: Yi,
  platformPostAccountLogout: ts,
  platformPostAccountManageDownloadPersonalData: ls,
  platformPostAccountManageLinkExternalLogin: cs,
  platformPostAccountPerformExternalLogin: as,
  platformPostForgotPassword: Xi,
  platformPostLogin: Ni,
  platformPostManage2Fa: oi,
  platformPostManageInfo: rs,
  platformPostRefresh: Ki,
  platformPostRegister: Qi,
  platformPostResendConfirmationEmail: Zi,
  platformPostResetPassword: pi
}, Symbol.toStringTag, { value: "Module" })), P = $(x()), ns = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), us = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/AssetCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), is = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/AssetCategories/{categoryId}",
  ...e
}), ss = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetCategories/{categoryId}",
  ...e
}), ds = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/AssetCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vs = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/AssetCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetCategories/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ms = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ss = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}",
  ...e
}), ys = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}",
  ...e
}), Ts = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/{assetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ps = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/{assetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Is = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), js = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/Categories/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), As = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/Categories/{categoryId}",
  ...e
}), Gs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/Categories/{categoryId}",
  ...e
}), Ls = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/Categories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rs = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/Categories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ks = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ms = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ws = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}",
  ...e
}), Es = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}",
  ...e
}), Ds = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bs = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $s = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xs = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Us = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}",
  ...e
}), Os = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}",
  ...e
}), Ws = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hs = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vs = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _s = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Js = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e
}), zs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e
}), Qs = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ns = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ks = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ys = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xs = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}",
  ...e
}), ps = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}",
  ...e
}), os = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ed = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rd = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTransfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ad = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/AssetTransfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), td = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTransfers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cd = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/AssetTransfers/{transferId}",
  ...e
}), ld = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTransfers/{transferId}",
  ...e
}), nd = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/AssetTransfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ud = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/AssetTransfers/{transferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), id = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sd = (e) => (e.client ?? P).post({
  url: "/api/v2/AssetsService/AssetTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dd = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/AssetTypes/{typeId}",
  ...e
}), vd = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTypes/{typeId}",
  ...e
}), gd = (e) => (e.client ?? P).patch({
  url: "/api/v2/AssetsService/AssetTypes/{typeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hd = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/AssetTypes/{typeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), md = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTypes/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cd = (e) => ((e == null ? void 0 : e.client) ?? P).get({
  url: "/version",
  ...e
}), Sd = (e) => ((e == null ? void 0 : e.client) ?? P).get({
  url: "/health",
  ...e
}), yd = (e) => ((e == null ? void 0 : e.client) ?? P).get({
  url: "/hello",
  ...e
}), Td = (e) => (e.client ?? P).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pd = (e) => (e.client ?? P).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fd = (e) => (e.client ?? P).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Id = (e) => (e.client ?? P).get({
  url: "/confirmEmail",
  ...e
}), jd = (e) => (e.client ?? P).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ad = (e) => (e.client ?? P).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gd = (e) => (e.client ?? P).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ld = (e) => (e.client ?? P).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rd = (e) => ((e == null ? void 0 : e.client) ?? P).get({
  url: "/manage/info",
  ...e
}), bd = (e) => (e.client ?? P).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kd = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Md = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), wd = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ed = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), zme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assetCategoriesCreateAssetCategory: us,
  assetCategoriesDeleteAssetCategory: is,
  assetCategoriesGetAssetCategories: ns,
  assetCategoriesGetAssetCategoriesCount: gs,
  assetCategoriesGetAssetCategory: ss,
  assetCategoriesPatchAssetCategory: ds,
  assetCategoriesUpdateAssetCategory: vs,
  assetTransfersCreateAssetTransfer: ad,
  assetTransfersDeleteAssetTransfer: cd,
  assetTransfersGetAssetTransfer: ld,
  assetTransfersGetAssetTransfers: rd,
  assetTransfersGetAssetTransfersCount: td,
  assetTransfersPatchAssetTransfer: nd,
  assetTransfersUpdateAssetTransfer: ud,
  assetTypesCreateAssetType: sd,
  assetTypesDeleteAssetType: dd,
  assetTypesGetAssetType: vd,
  assetTypesGetAssetTypes: id,
  assetTypesGetAssetTypesCount: md,
  assetTypesPatchAssetType: gd,
  assetTypesUpdateAssetType: hd,
  assetsCreateAsset: ms,
  assetsCreateAssetAssetCategory: Is,
  assetsCreateAssetDepreciationRecord: Vs,
  assetsCreateAssetRepair: ks,
  assetsCreateAssetTransfer: Ys,
  assetsCreateAssetValueAmend: xs,
  assetsDeleteAsset: Ss,
  assetsDeleteAssetAssetCategory: As,
  assetsDeleteAssetDepreciationRecord: Js,
  assetsDeleteAssetRepair: ws,
  assetsDeleteAssetTransfer: Xs,
  assetsDeleteAssetValueAmend: Us,
  assetsGetAsset: ys,
  assetsGetAssetAssetCategories: fs,
  assetsGetAssetAssetCategoriesCount: js,
  assetsGetAssetAssetCategory: Gs,
  assetsGetAssetDepreciationRecord: zs,
  assetsGetAssetDepreciationRecords: qs,
  assetsGetAssetDepreciationRecordsCount: _s,
  assetsGetAssetRepair: Es,
  assetsGetAssetRepairs: bs,
  assetsGetAssetRepairsCount: Ms,
  assetsGetAssetTransfer: ps,
  assetsGetAssetTransfers: Ks,
  assetsGetAssetTransfersCount: Zs,
  assetsGetAssetValueAmend: Os,
  assetsGetAssetValueAmends: $s,
  assetsGetAssetValueAmendsCount: Fs,
  assetsGetAssets: hs,
  assetsGetAssetsCount: Cs,
  assetsPatchAsset: Ts,
  assetsPatchAssetAssetCategory: Ls,
  assetsPatchAssetDepreciationRecord: Qs,
  assetsPatchAssetRepair: Ds,
  assetsPatchAssetTransfer: os,
  assetsPatchAssetValueAmend: Ws,
  assetsUpdateAsset: Ps,
  assetsUpdateAssetAssetCategory: Rs,
  assetsUpdateAssetDepreciationRecord: Ns,
  assetsUpdateAssetRepair: Bs,
  assetsUpdateAssetTransfer: ed,
  assetsUpdateAssetValueAmend: Hs,
  platformGetHealth: Sd,
  platformGetHello: yd,
  platformGetManageInfo: Rd,
  platformGetVersion: Cd,
  platformMapIdentityApiConfirmEmail: Id,
  platformPostAccountLogout: Md,
  platformPostAccountManageDownloadPersonalData: Ed,
  platformPostAccountManageLinkExternalLogin: wd,
  platformPostAccountPerformExternalLogin: kd,
  platformPostForgotPassword: Ad,
  platformPostLogin: Pd,
  platformPostManage2Fa: Ld,
  platformPostManageInfo: bd,
  platformPostRefresh: fd,
  platformPostRegister: Td,
  platformPostResendConfirmationEmail: jd,
  platformPostResetPassword: Gd
}, Symbol.toStringTag, { value: "Module" })), H = $(x()), Dd = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bd = (e) => (e.client ?? H).post({
  url: "/api/v2/BlockchainsService/Blockchains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $d = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xd = (e) => (e.client ?? H).delete({
  url: "/api/v2/BlockchainsService/Blockchains/{id}",
  ...e
}), Fd = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains/{id}",
  ...e
}), Ud = (e) => (e.client ?? H).patch({
  url: "/api/v2/BlockchainsService/Blockchains/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Od = (e) => (e.client ?? H).put({
  url: "/api/v2/BlockchainsService/Blockchains/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wd = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hd = (e) => (e.client ?? H).post({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qd = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vd = (e) => (e.client ?? H).delete({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e
}), _d = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e
}), Jd = (e) => (e.client ?? H).patch({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zd = (e) => (e.client ?? H).put({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qd = (e) => ((e == null ? void 0 : e.client) ?? H).get({
  url: "/version",
  ...e
}), Nd = (e) => ((e == null ? void 0 : e.client) ?? H).get({
  url: "/health",
  ...e
}), Kd = (e) => ((e == null ? void 0 : e.client) ?? H).get({
  url: "/hello",
  ...e
}), Yd = (e) => (e.client ?? H).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zd = (e) => (e.client ?? H).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xd = (e) => (e.client ?? H).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pd = (e) => (e.client ?? H).get({
  url: "/confirmEmail",
  ...e
}), od = (e) => (e.client ?? H).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ev = (e) => (e.client ?? H).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rv = (e) => (e.client ?? H).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), av = (e) => (e.client ?? H).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tv = (e) => ((e == null ? void 0 : e.client) ?? H).get({
  url: "/manage/info",
  ...e
}), cv = (e) => (e.client ?? H).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lv = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), nv = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), uv = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), iv = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), sv = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dv = (e) => (e.client ?? H).post({
  url: "/api/v2/BlockchainsService/NonFungibleTokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vv = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gv = (e) => (e.client ?? H).delete({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e
}), hv = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e
}), mv = (e) => (e.client ?? H).patch({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cv = (e) => (e.client ?? H).put({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blockchainsCreateBlockchain: Bd,
  blockchainsCreateBlockchainBlock: Hd,
  blockchainsDeleteBlockchain: xd,
  blockchainsDeleteBlockchainBlock: Vd,
  blockchainsGetBlockchainBlockById: _d,
  blockchainsGetBlockchainBlocks: Wd,
  blockchainsGetBlockchainBlocksCount: qd,
  blockchainsGetBlockchainById: Fd,
  blockchainsGetBlockchains: Dd,
  blockchainsGetBlockchainsCount: $d,
  blockchainsPatchBlockchain: Ud,
  blockchainsPatchBlockchainBlock: Jd,
  blockchainsUpdateBlockchain: Od,
  blockchainsUpdateBlockchainBlock: zd,
  nonFungibleTokensCreateNonFungibleToken: dv,
  nonFungibleTokensDeleteNonFungibleToken: gv,
  nonFungibleTokensGetNonFungibleTokenById: hv,
  nonFungibleTokensGetNonFungibleTokens: sv,
  nonFungibleTokensGetNonFungibleTokensCount: vv,
  nonFungibleTokensPatchNonFungibleToken: mv,
  nonFungibleTokensUpdateNonFungibleToken: Cv,
  platformGetHealth: Nd,
  platformGetHello: Kd,
  platformGetManageInfo: tv,
  platformGetVersion: Qd,
  platformMapIdentityApiConfirmEmail: pd,
  platformPostAccountLogout: nv,
  platformPostAccountManageDownloadPersonalData: iv,
  platformPostAccountManageLinkExternalLogin: uv,
  platformPostAccountPerformExternalLogin: lv,
  platformPostForgotPassword: ev,
  platformPostLogin: Zd,
  platformPostManage2Fa: av,
  platformPostManageInfo: cv,
  platformPostRefresh: Xd,
  platformPostRegister: Yd,
  platformPostResendConfirmationEmail: od,
  platformPostResetPassword: rv
}, Symbol.toStringTag, { value: "Module" })), y = $(x()), Sv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e
}), yv = (e) => (e.client ?? y).patch({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Currency",
  ...e
}), fv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Currency",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Country",
  ...e
}), jv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Country",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Av = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Carts/{cartId}/Submit",
  ...e
}), Gv = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/CartService/Carts/ActingCart",
  ...e
}), Lv = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/CartService/Carts/GuestCart",
  ...e
}), Rv = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/CartService/Carts/UserCart",
  ...e
}), bv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/BusinessCart/{tenantId}",
  ...e
}), kv = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Items",
  ...e
}), Mv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Items",
  ...e
}), wv = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e
}), Ev = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e
}), Dv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Contains/{itemId}",
  ...e
}), $v = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Increase",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Decrease",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Lines",
  ...e
}), Uv = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e
}), Ov = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e
}), Wv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Increase",
  ...e
}), qv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Decrease",
  ...e
}), Vv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists",
  ...e
}), _v = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/Contains/{itemId}",
  ...e
}), zv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists",
  ...e
}), Qv = (e) => (e.client ?? y).head({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists",
  ...e
}), Nv = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e
}), Kv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e
}), Yv = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zv = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records",
  ...e
}), Xv = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pv = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}",
  ...e
}), ov = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}",
  ...e
}), eg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare",
  ...e
}), rg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/RecentlyViewed",
  ...e
}), ag = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), tg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), cg = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), lg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/Contains/{itemId}",
  ...e
}), ng = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Compare/{cartId}",
  ...e
}), ug = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Compare/{recordId}/Details",
  ...e
}), ig = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/api/v2/CartService/Compare",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sg = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Compare/{recordId}",
  ...e
}), dg = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/version",
  ...e
}), vg = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/health",
  ...e
}), gg = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/hello",
  ...e
}), hg = (e) => (e.client ?? y).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mg = (e) => (e.client ?? y).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cg = (e) => (e.client ?? y).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sg = (e) => (e.client ?? y).get({
  url: "/confirmEmail",
  ...e
}), yg = (e) => (e.client ?? y).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tg = (e) => (e.client ?? y).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pg = (e) => (e.client ?? y).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fg = (e) => (e.client ?? y).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ig = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/manage/info",
  ...e
}), jg = (e) => (e.client ?? y).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ag = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Gg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Lg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Rg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), bg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/api/v2/CartService/Records/AddItem",
  ...e
}), kg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Records/{cartId}",
  ...e
}), Mg = (e) => ((e == null ? void 0 : e.client) ?? y).delete({
  url: "/api/v2/CartService/Records",
  ...e
}), wg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/api/v2/CartService/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Records/IsInCart",
  ...e
}), Dg = (e) => (e.client ?? y).post({
  url: "/api/v2/CartService/Records/ClearCart",
  ...e
}), Bg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/Records/{recordId}/Details",
  ...e
}), $g = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e
}), xg = (e) => (e.client ?? y).patch({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fg = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ug = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Records/{recordId}/Increase",
  ...e
}), Og = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/Records/{recordId}/Decrease",
  ...e
}), Wg = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/CartService/WishLists/Contains",
  ...e
}), Hg = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/CartService/WishLists/Exists",
  ...e
}), qg = (e) => ((e == null ? void 0 : e.client) ?? y).head({
  url: "/api/v2/CartService/WishLists/Exists",
  ...e
}), Vg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/api/v2/CartService/WishLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _g = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e
}), Jg = (e) => (e.client ?? y).patch({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zg = (e) => (e.client ?? y).put({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/WishLists/{cartId}",
  ...e
}), Ng = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/WishLists/{wishListId}/Records",
  ...e
}), Kg = (e) => (e.client ?? y).get({
  url: "/api/v2/CartService/WishLists/{wishListId}/Details",
  ...e
}), Yg = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/api/v2/CartService/WishLists/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zg = (e) => (e.client ?? y).delete({
  url: "/api/v2/CartService/WishLists/Records/{recordId}",
  ...e
}), Nme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cartsAddItemToCart: Ev,
  cartsAddItemToCartCompareTable: cg,
  cartsAddItemToWishList: Xv,
  cartsCartWishListExistsHead: Qv,
  cartsClearCartRecords: kv,
  cartsCreateWishList: _v,
  cartsDecreaseCartItemQuantity: xv,
  cartsDecreaseCartLine: qv,
  cartsDeleteCartWishList: Nv,
  cartsDeleteCartWishListRecord: pv,
  cartsGetActingCart: Gv,
  cartsGetCartById: Sv,
  cartsGetCartCompareRecord: tg,
  cartsGetCartCompareRecords: eg,
  cartsGetCartCountry: Iv,
  cartsGetCartCurrency: Pv,
  cartsGetCartItems: Mv,
  cartsGetCartLine: Ov,
  cartsGetCartLines: Fv,
  cartsGetCartRecentlyViewedRecords: rg,
  cartsGetCartWishList: Vv,
  cartsGetCartWishListDetails: Kv,
  cartsGetCartWishListItem: ov,
  cartsGetCartWishListItems: Zv,
  cartsGetGuestCart: Lv,
  cartsGetTenantCart: bv,
  cartsGetUserCart: Rv,
  cartsIncreaseCartLine: Hv,
  cartsIncreaseItemCartRecordQuantity: $v,
  cartsIsItemAlreadyInCart: Bv,
  cartsIsItemInCompareTable: lg,
  cartsIsItemInWishLists: Jv,
  cartsPatchCart: yv,
  cartsRemoveCartLine: Uv,
  cartsRemoveItemFromCart: wv,
  cartsRemoveItemFromCompareTable: ag,
  cartsSetCartCountry: jv,
  cartsSetCartCurrency: fv,
  cartsSubmitCart: Av,
  cartsUpdateCart: Tv,
  cartsUpdateCartLine: Wv,
  cartsUpdateItemCartRecord: Dv,
  cartsUpdateItemToWishList: Yv,
  cartsWishListExists: zv,
  compareAddItemToCompareTable: ig,
  compareGetItemToCompareRecord: ug,
  compareGetItemToCompareRecords: ng,
  compareRemoveItemFromCompareTable: sg,
  platformGetHealth: vg,
  platformGetHello: gg,
  platformGetManageInfo: Ig,
  platformGetVersion: dg,
  platformMapIdentityApiConfirmEmail: Sg,
  platformPostAccountLogout: Gg,
  platformPostAccountManageDownloadPersonalData: Rg,
  platformPostAccountManageLinkExternalLogin: Lg,
  platformPostAccountPerformExternalLogin: Ag,
  platformPostForgotPassword: Tg,
  platformPostLogin: mg,
  platformPostManage2Fa: fg,
  platformPostManageInfo: jg,
  platformPostRefresh: Cg,
  platformPostRegister: hg,
  platformPostResendConfirmationEmail: yg,
  platformPostResetPassword: Pg,
  recordsAddItemToCart: bg,
  recordsAddProductToCart: wg,
  recordsClearCart: Dg,
  recordsDecreaseItemCartRecord: Og,
  recordsGetItemCartRecord: Bg,
  recordsGetItemsInCart: kg,
  recordsIncreaseItemCartRecord: Ug,
  recordsIsItemAlreadyInCart: Eg,
  recordsPatchItemCartRecord: xg,
  recordsRemoveProductFromCartByParams: Mg,
  recordsRemoveProductFromCartByRecordId: $g,
  recordsUpdateItemCartRecord: Fg,
  wishListsAddProductToWishList: Yg,
  wishListsCreateWishList: Vg,
  wishListsDeleteWishList: _g,
  wishListsDeleteWishListRecord: Zg,
  wishListsGetCartWishListDetails: Kg,
  wishListsGetCartWishListItems: Ng,
  wishListsGetWishList: Qg,
  wishListsIsProductInWishLists: Wg,
  wishListsPatchWishList: Jg,
  wishListsUpdateProductToWishList: zg,
  wishListsWishListExists: Hg,
  wishListsWishListExistsHead: qg
}, Symbol.toStringTag, { value: "Module" })), n = $(x()), Xg = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/version",
  ...e
}), pg = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/health",
  ...e
}), og = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/hello",
  ...e
}), eh = (e) => (e.client ?? n).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rh = (e) => (e.client ?? n).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ah = (e) => (e.client ?? n).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), th = (e) => (e.client ?? n).get({
  url: "/confirmEmail",
  ...e
}), ch = (e) => (e.client ?? n).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lh = (e) => (e.client ?? n).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nh = (e) => (e.client ?? n).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uh = (e) => (e.client ?? n).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ih = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/manage/info",
  ...e
}), sh = (e) => (e.client ?? n).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dh = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), vh = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), gh = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), hh = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), mh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ch = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sh = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e
}), yh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e
}), Th = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ph = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ih = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemAttributeOptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ah = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e
}), Gh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e
}), Lh = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rh = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mh = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wh = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e
}), Eh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e
}), Dh = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bh = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $h = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemBrands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xh = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemBrands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fh = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e
}), Uh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e
}), Oh = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wh = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemBundles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qh = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemBundles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemBundles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _h = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e
}), Jh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e
}), zh = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qh = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nh = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kh = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e
}), Yh = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e
}), Zh = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xh = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ph = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oh = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), em = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemFamilies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemFamilies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), am = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemFamilies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tm = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e
}), cm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e
}), lm = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nm = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), um = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), im = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/All",
  ...e
}), dm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/Primary",
  ...e
}), vm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}",
  ...e
}), gm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}/Children",
  ...e
}), hm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/tree",
  ...e
}), mm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemGoogleCategories/tree",
  ...e
}), Cm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemImages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemImages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ym = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e
}), Tm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e
}), Pm = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fm = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Im = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemQuestions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemQuestions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Am = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e
}), Gm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e
}), Lm = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rm = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), km = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemRefundPolicies",
  ...e
}), Mm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wm = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemRefundPolicies/{itemRefundPolicyId}",
  ...e
}), Em = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies/{itemRefundPolicyId}",
  ...e
}), Dm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemReturnPolicies",
  ...e
}), $m = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xm = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}",
  ...e
}), Fm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}",
  ...e
}), Um = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemReviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Om = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemReviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wm = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e
}), Hm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e
}), qm = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vm = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _m = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jm = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items/MaxPrice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items/MinPrice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nm = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Km = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e
}), Ym = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e
}), Zm = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xm = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pm = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Extended",
  ...e
}), om = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eC = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Items/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/Public/{itemId}",
  ...e
}), aC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/Batch",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/BulkUpsert",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/RecalculatePrices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), iC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), sC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), dC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), gC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), hC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), mC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/Primary",
  ...e
}), CC = (e) => (e.client ?? n).post({
  ...u,
  url: "/api/v2/CatalogService/Items/{itemId}/Images/Primary",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), SC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), TC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), PC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), fC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), jC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), AC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), GC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}",
  ...e
}), bC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}",
  ...e
}), kC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}",
  ...e
}), EC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}",
  ...e
}), DC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), $C = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), xC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), FC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e
}), OC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e
}), WC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), VC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), _C = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), JC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules",
  ...e
}), zC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), QC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), NC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), KC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), ZC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), XC = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), pC = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oC = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), eS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), rS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), aS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), cS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), lS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), nS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), iS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), sS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), dS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions",
  ...e
}), vS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), gS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), hS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), mS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), SS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), yS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), TS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemShippingPolicies",
  ...e
}), fS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemShippingPolicies/{itemShippingPolicyId}",
  ...e
}), jS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies/{itemShippingPolicyId}",
  ...e
}), AS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e
}), RS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e
}), bS = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kS = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemTaxPolicies",
  ...e
}), ES = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}",
  ...e
}), BS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}",
  ...e
}), $S = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), US = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e
}), OS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e
}), WS = (e) => (e.client ?? n).patch({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HS = (e) => (e.client ?? n).put({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VS = (e) => (e.client ?? n).post({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies",
  ...e
}), _S = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JS = (e) => (e.client ?? n).delete({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), zS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), QS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Merchants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NS = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/CatalogService/Merchants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KS = (e) => (e.client ?? n).get({
  url: "/api/v2/CatalogService/Merchants/{merchantId}",
  ...e
}), Kme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  itemAttachmentsCreateItemAttachment: Ch,
  itemAttachmentsDeleteItemAttachment: Sh,
  itemAttachmentsGetItemAttachmentById: yh,
  itemAttachmentsGetItemAttachments: mh,
  itemAttachmentsPatchItemAttachment: Th,
  itemAttachmentsUpdateItemAttachment: Ph,
  itemAttributeOptionsCreateItemAttributeOption: Ih,
  itemAttributeOptionsDeleteItemAttributeOption: Ah,
  itemAttributeOptionsGetItemAttributeOptionById: Gh,
  itemAttributeOptionsGetItemAttributeOptions: fh,
  itemAttributeOptionsGetItemAttributeOptionsCount: jh,
  itemAttributeOptionsPatchItemAttributeOption: Lh,
  itemAttributeOptionsUpdateItemAttributeOption: Rh,
  itemAttributesCountItemAttributes: bh,
  itemAttributesCreateItemAttribute: Mh,
  itemAttributesDeleteItemAttribute: wh,
  itemAttributesGetItemAttributeById: Eh,
  itemAttributesGetItemAttributes: kh,
  itemAttributesPatchItemAttribute: Dh,
  itemAttributesUpdateItemAttribute: Bh,
  itemBrandsCreateItemBrand: xh,
  itemBrandsDeleteItemBrand: Fh,
  itemBrandsGetItemBrandById: Uh,
  itemBrandsGetItemBrands: $h,
  itemBrandsPatchItemBrand: Oh,
  itemBrandsUpdateItemBrand: Wh,
  itemBundlesCreateItemBundle: qh,
  itemBundlesDeleteItemBundle: _h,
  itemBundlesGetItemBundleById: Jh,
  itemBundlesGetItemBundles: Hh,
  itemBundlesGetItemBundlesCount: Vh,
  itemBundlesPatchItemBundle: zh,
  itemBundlesUpdateItemBundle: Qh,
  itemCategoriesCountItemCategories: Nh,
  itemCategoriesCreateItemCategory: oh,
  itemCategoriesDeleteItemCategory: Kh,
  itemCategoriesGetItemCategories: ph,
  itemCategoriesGetItemCategoryById: Yh,
  itemCategoriesPatchItemCategory: Zh,
  itemCategoriesUpdateItemCategory: Xh,
  itemFamiliesCreateItemFamily: rm,
  itemFamiliesDeleteItemFamily: tm,
  itemFamiliesGetItemFamilies: em,
  itemFamiliesGetItemFamiliesCount: am,
  itemFamiliesGetItemFamilyById: cm,
  itemFamiliesPatchItemFamily: lm,
  itemFamiliesUpdateItemFamily: nm,
  itemGoogleCategoriesGetAllItemGoogleCategories: sm,
  itemGoogleCategoriesGetChildrenItemGoogleCategoriesById: gm,
  itemGoogleCategoriesGetItemGoogleCategories: um,
  itemGoogleCategoriesGetItemGoogleCategoriesCount: im,
  itemGoogleCategoriesGetItemGoogleCategoriesTree: hm,
  itemGoogleCategoriesGetItemGoogleCategoryById: vm,
  itemGoogleCategoriesGetRootItemGoogleCategories: dm,
  itemGoogleCategoriesMapItemGoogleCategoriesTree: mm,
  itemImagesCreateItemImage: Sm,
  itemImagesDeleteItemImage: ym,
  itemImagesGetItemImageById: Tm,
  itemImagesGetItemImages: Cm,
  itemImagesPatchItemImage: Pm,
  itemImagesUpdateItemImage: fm,
  itemQuestionsCreateItemQuestion: jm,
  itemQuestionsDeleteItemQuestion: Am,
  itemQuestionsGetItemQuestionById: Gm,
  itemQuestionsGetItemQuestions: Im,
  itemQuestionsPatchItemQuestion: Lm,
  itemQuestionsUpdateItemQuestion: Rm,
  itemRefundPoliciesCountItemRefundPolicies: Mm,
  itemRefundPoliciesGetItemRefundPolicies: bm,
  itemRefundPoliciesGetItemRefundPolicyById: Em,
  itemRefundPoliciesRelateItemToRefundPolicy: km,
  itemRefundPoliciesRemoveRefundPolicyFromItem: wm,
  itemReturnPoliciesCountItemReturnPolicies: $m,
  itemReturnPoliciesGetItemReturnPolicies: Dm,
  itemReturnPoliciesGetItemReturnPolicyById: Fm,
  itemReturnPoliciesRelateItemToReturnPolicy: Bm,
  itemReturnPoliciesRemoveReturnPolicyFromItem: xm,
  itemReviewsCreateItemReview: Om,
  itemReviewsDeleteItemReview: Wm,
  itemReviewsGetItemReviewById: Hm,
  itemReviewsGetItemReviews: Um,
  itemReviewsPatchItemReview: qm,
  itemReviewsUpdateItemReview: Vm,
  itemShippingPoliciesCountItemShippingPolicies: fS,
  itemShippingPoliciesGetCatalogItemShippingPolicies: TS,
  itemShippingPoliciesGetCatalogItemShippingPolicyById: jS,
  itemShippingPoliciesRelateItemToShippingPolicy: PS,
  itemShippingPoliciesRemoveShippingPolicyFromItem: IS,
  itemTagsCreateItemTag: GS,
  itemTagsDeleteItemTag: LS,
  itemTagsGetItemTagById: RS,
  itemTagsGetItemTags: AS,
  itemTagsPatchItemTag: bS,
  itemTagsUpdateItemTag: kS,
  itemTaxPoliciesCountItemTaxPolicies: ES,
  itemTaxPoliciesGetItemTaxPolicies: MS,
  itemTaxPoliciesGetItemTaxPolicyById: BS,
  itemTaxPoliciesRelateItemToTaxPolicy: wS,
  itemTaxPoliciesRemoveTaxPolicyFromItem: DS,
  itemTypesCountItemTypes: $S,
  itemTypesCreateItemType: FS,
  itemTypesDeleteItemType: US,
  itemTypesGetItemTypeById: OS,
  itemTypesGetItemTypes: xS,
  itemTypesPatchItemType: WS,
  itemTypesUpdateItemType: HS,
  itemWarrantyPoliciesCountItemWarrantyPolicies: _S,
  itemWarrantyPoliciesGetItemWarrantyPolicies: qS,
  itemWarrantyPoliciesGetItemWarrantyPolicyById: zS,
  itemWarrantyPoliciesRelateItemToWarrantyPolicy: VS,
  itemWarrantyPoliciesRemoveWarrantyPolicyFromItem: JS,
  itemsBatchUpdateStockItems: aC,
  itemsBulkUpsertStockItems: tC,
  itemsCountStockItemTagsByItemId: nC,
  itemsCountStockItemsByBusiness: Nm,
  itemsCreateStockItem: Jm,
  itemsDeleteStockItem: Km,
  itemsGetExtendedStockItemById: pm,
  itemsGetProductPrimaryImage: mC,
  itemsGetPublicStockItemById: rC,
  itemsGetPublicStockItems: om,
  itemsGetPublicStockItemsCount: eC,
  itemsGetStockItemAttachmentById: OC,
  itemsGetStockItemAttachmentsByItemId: FC,
  itemsGetStockItemAttributeOptionById: gS,
  itemsGetStockItemAttributeOptionsByItemId: dS,
  itemsGetStockItemBrandById: jC,
  itemsGetStockItemBrandsByItemId: fC,
  itemsGetStockItemById: Ym,
  itemsGetStockItemCategoriesByItemId: DC,
  itemsGetStockItemCategoryById: $C,
  itemsGetStockItemGoogleCategoriesByItemId: mS,
  itemsGetStockItemGoogleCategoryById: SS,
  itemsGetStockItemImageById: TC,
  itemsGetStockItemImagesByItemId: SC,
  itemsGetStockItemPriceRuleById: QC,
  itemsGetStockItemPriceRulesByItemId: JC,
  itemsGetStockItemQuestionById: EC,
  itemsGetStockItemQuestionsByItemId: kC,
  itemsGetStockItemRefundPoliciesByItemId: pC,
  itemsGetStockItemRefundPolicyById: eS,
  itemsGetStockItemReturnPoliciesByItemId: KC,
  itemsGetStockItemReturnPolicyById: ZC,
  itemsGetStockItemReviewById: bC,
  itemsGetStockItemReviewsByItemId: GC,
  itemsGetStockItemShippingPoliciesByItemId: aS,
  itemsGetStockItemShippingPolicyById: cS,
  itemsGetStockItemTagById: iC,
  itemsGetStockItemTagsByItemId: lC,
  itemsGetStockItemTaxPoliciesByItemId: HC,
  itemsGetStockItemTaxPolicyById: VC,
  itemsGetStockItemTypeById: gC,
  itemsGetStockItemTypesByItemId: dC,
  itemsGetStockItemWarrantyPoliciesByItemId: nS,
  itemsGetStockItemWarrantyPolicyById: iS,
  itemsGetStockItemsOdataMaxPrice: zm,
  itemsGetStockItemsOdataMinPrice: Qm,
  itemsGetStockItemsQuery: _m,
  itemsPatchStockItem: Zm,
  itemsRecalculateStockItemPrices: cC,
  itemsRelateAttachmentToStockItem: WC,
  itemsRelateAttributeOptionToStockItem: hS,
  itemsRelateBrandToStockItem: AC,
  itemsRelateCategoryToStockItem: xC,
  itemsRelateGoogleCategoryToStockItem: yS,
  itemsRelateImageToStockItem: PC,
  itemsRelatePriceRuleToStockItem: NC,
  itemsRelateQuestionToStockItem: MC,
  itemsRelateRefundPolicyToStockItem: rS,
  itemsRelateReturnPolicyToStockItem: XC,
  itemsRelateReviewToStockItem: LC,
  itemsRelateShippingPolicyToStockItem: lS,
  itemsRelateTagToStockItem: sC,
  itemsRelateTaxPolicyToStockItem: _C,
  itemsRelateTypeToStockItem: hC,
  itemsRelateWarrantyPolicyToStockItem: sS,
  itemsRemoveAttachmentFromStockItem: UC,
  itemsRemoveAttributeOptionFromStockItem: vS,
  itemsRemoveBrandFromStockItem: IC,
  itemsRemoveCategoryFromStockItem: BC,
  itemsRemoveGoogleCategoryFromStockItem: CS,
  itemsRemoveImageFromStockItem: yC,
  itemsRemovePriceRuleFromStockItem: zC,
  itemsRemoveQuestionFromStockItem: wC,
  itemsRemoveRefundPolicyFromStockItem: oC,
  itemsRemoveReturnPolicyFromStockItem: YC,
  itemsRemoveReviewFromStockItem: RC,
  itemsRemoveShippingPolicyFromStockItem: tS,
  itemsRemoveTagFromStockItem: uC,
  itemsRemoveTaxPolicyFromStockItem: qC,
  itemsRemoveTypeFromStockItem: vC,
  itemsRemoveWarrantyPolicyFromStockItem: uS,
  itemsUpdateProductPrimaryImage: CC,
  itemsUpdateStockItem: Xm,
  merchantsGetMerchantById: KS,
  merchantsGetMerchants: QS,
  merchantsGetMerchantsCount: NS,
  platformGetHealth: pg,
  platformGetHello: og,
  platformGetManageInfo: ih,
  platformGetVersion: Xg,
  platformMapIdentityApiConfirmEmail: th,
  platformPostAccountLogout: vh,
  platformPostAccountManageDownloadPersonalData: hh,
  platformPostAccountManageLinkExternalLogin: gh,
  platformPostAccountPerformExternalLogin: dh,
  platformPostForgotPassword: lh,
  platformPostLogin: rh,
  platformPostManage2Fa: uh,
  platformPostManageInfo: sh,
  platformPostRefresh: ah,
  platformPostRegister: eh,
  platformPostResendConfirmationEmail: ch,
  platformPostResetPassword: nh
}, Symbol.toStringTag, { value: "Module" })), M = $(x()), YS = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZS = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XS = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pS = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}",
  ...e
}), oS = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/End",
  ...e
}), ey = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Cancel",
  ...e
}), ry = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ay = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ty = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cy = (e) => (e.client ?? M).put({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ly = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Remove",
  ...e
}), ny = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Leave",
  ...e
}), uy = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/MediaGrant",
  ...e
}), iy = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/MediaGrant/Revoke",
  ...e
}), sy = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Admit",
  ...e
}), dy = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Deny",
  ...e
}), vy = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Join",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Admissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Admissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), my = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participation",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participation/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Participation",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Participation/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ty = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Py = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Providers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}",
  ...e
}), jy = (e) => (e.client ?? M).put({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ay = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Providers/EffectAttempts/Unsettled",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Readiness",
  ...e
}), Ly = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Enable",
  ...e
}), Ry = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Disable",
  ...e
}), by = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Suspend",
  ...e
}), ky = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Bindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), My = (e) => (e.client ?? M).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Bindings",
  ...e
}), wy = (e) => (e.client ?? M).get({
  url: "/api/v2/CommunicationsService/Composition",
  ...e
}), Ey = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/version",
  ...e
}), Dy = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/health",
  ...e
}), By = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/hello",
  ...e
}), $y = (e) => (e.client ?? M).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xy = (e) => (e.client ?? M).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fy = (e) => (e.client ?? M).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uy = (e) => (e.client ?? M).get({
  url: "/confirmEmail",
  ...e
}), Oy = (e) => (e.client ?? M).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wy = (e) => (e.client ?? M).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hy = (e) => (e.client ?? M).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qy = (e) => (e.client ?? M).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vy = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/manage/info",
  ...e
}), _y = (e) => (e.client ?? M).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jy = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zy = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Qy = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ny = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Yme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  communicationsAdmitParticipant: sy,
  communicationsBindSessionResource: My,
  communicationsCancelSession: ey,
  communicationsDenyParticipant: dy,
  communicationsDisableProviderRegistration: Ry,
  communicationsEnableProviderRegistration: Ly,
  communicationsEndSession: oS,
  communicationsGetAdmissions: gy,
  communicationsGetAdmissionsCount: hy,
  communicationsGetComposition: wy,
  communicationsGetParticipantParticipation: Sy,
  communicationsGetParticipantParticipationCount: yy,
  communicationsGetParticipants: ry,
  communicationsGetParticipantsCount: ty,
  communicationsGetParticipation: my,
  communicationsGetParticipationCount: Cy,
  communicationsGetProviderReadiness: Gy,
  communicationsGetProviderRegistration: Iy,
  communicationsGetProviderRegistrations: Ty,
  communicationsGetProviderRegistrationsCount: fy,
  communicationsGetSession: pS,
  communicationsGetSessionBindings: ky,
  communicationsGetSessions: YS,
  communicationsGetSessionsCount: XS,
  communicationsGetUnsettledProviderEffectAttempts: Ay,
  communicationsInviteParticipant: ay,
  communicationsIssueParticipantMediaGrant: uy,
  communicationsJoinSession: vy,
  communicationsLeaveSession: ny,
  communicationsRegisterProvider: Py,
  communicationsRemoveParticipant: ly,
  communicationsRevokeParticipantMediaGrant: iy,
  communicationsStartSession: ZS,
  communicationsSuspendProviderRegistration: by,
  communicationsUpdateParticipant: cy,
  communicationsUpdateProviderRegistration: jy,
  platformGetHealth: Dy,
  platformGetHello: By,
  platformGetManageInfo: Vy,
  platformGetVersion: Ey,
  platformMapIdentityApiConfirmEmail: Uy,
  platformPostAccountLogout: zy,
  platformPostAccountManageDownloadPersonalData: Ny,
  platformPostAccountManageLinkExternalLogin: Qy,
  platformPostAccountPerformExternalLogin: Jy,
  platformPostForgotPassword: Wy,
  platformPostLogin: xy,
  platformPostManage2Fa: qy,
  platformPostManageInfo: _y,
  platformPostRefresh: Fy,
  platformPostRegister: $y,
  platformPostResendConfirmationEmail: Oy,
  platformPostResetPassword: Hy
}, Symbol.toStringTag, { value: "Module" })), s = $(x()), Ky = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/BlogPostAuthors",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yy = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostAuthors/{authorId}",
  ...e
}), Zy = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xy = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), py = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oy = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPostCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPostCategories/{blogPostCategoryId}",
  ...e
}), aT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostCategories/{blogPostCategoryId}",
  ...e
}), tT = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/BlogPostCategories/{blogPostCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cT = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/BlogPostCategories/{blogPostCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/BlogPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}",
  ...e
}), sT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}",
  ...e
}), dT = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vT = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/Public/{blogPostId}",
  ...e
}), CT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ST = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}",
  ...e
}), TT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}",
  ...e
}), PT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}",
  ...e
}), jT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}",
  ...e
}), AT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Replies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Reply",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}",
  ...e
}), kT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPostTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostTags/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ET = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BlogPostTags/{blogPostTagId}",
  ...e
}), DT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostTags/{blogPostTagId}",
  ...e
}), BT = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/BlogPostTags/{blogPostTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $T = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/BlogPostTags/{blogPostTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BusinessDomains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BusinessDomains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BusinessDomains/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OT = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/BusinessDomains/{businessDomainId}",
  ...e
}), WT = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BusinessDomains/{businessDomainId}",
  ...e
}), HT = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/BusinessDomains/{businessDomainId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BusinessDomains/{businessDomainId}/Verify",
  ...e
}), VT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/version",
  ...e
}), _T = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/health",
  ...e
}), JT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/hello",
  ...e
}), zT = (e) => (e.client ?? s).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QT = (e) => (e.client ?? s).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NT = (e) => (e.client ?? s).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KT = (e) => (e.client ?? s).get({
  url: "/confirmEmail",
  ...e
}), YT = (e) => (e.client ?? s).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZT = (e) => (e.client ?? s).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XT = (e) => (e.client ?? s).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pT = (e) => (e.client ?? s).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/manage/info",
  ...e
}), eP = (e) => (e.client ?? s).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), aP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), tP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), cP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), lP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/LocalizationStrings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/LocalizationStrings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/LocalizationStrings/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/LocalizationStrings/{localizationStringId}",
  ...e
}), sP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/LocalizationStrings/{localizationStringId}",
  ...e
}), dP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/LocalizationStrings/{localizationStringId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/MenuContexts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/MenuContexts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/MenuContexts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/MenuContexts/{menuContextId}",
  ...e
}), CP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/MenuContexts/{menuContextId}",
  ...e
}), SP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/MenuContexts/{menuContextId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fP = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/Portals/Root",
  ...e
}), IP = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/Portals/Current",
  ...e
}), jP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  url: "/api/v2/ContentService/Portals/Initialize",
  ...e
}), AP = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/api/v2/ContentService/Portals/Current/Options",
  ...e
}), GP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/Search",
  ...e
}), LP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/Portals/{portalId}",
  ...e
}), RP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}",
  ...e
}), bP = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}/Settings",
  ...e
}), wP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/Portals/{portalId}/Settings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}/Settings/Full",
  ...e
}), DP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}/Options",
  ...e
}), BP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}/DomainBindings",
  ...e
}), $P = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/Portals/{portalId}/DomainBindings/{businessDomainId}",
  ...e
}), xP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/Portals/{portalId}/DomainBindings/{businessDomainId}",
  ...e
}), FP = (e) => ((e == null ? void 0 : e.client) ?? s).post({
  url: "/api/v2/ContentService/Themes/BaseWebContent",
  ...e
}), UP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebComponents/{webComponentId}",
  ...e
}), qP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebComponents/{webComponentId}",
  ...e
}), VP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebComponents/{webComponentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _P = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebContents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebContents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebContents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebContents/{webContentId}",
  ...e
}), NP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebContents/{webContentId}",
  ...e
}), KP = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebContents/{webContentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebContents/{webContentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPageCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oP = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebPageCategories/{webPageCategoryId}",
  ...e
}), ef = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageCategories/{webPageCategoryId}",
  ...e
}), rf = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebPageCategories/{webPageCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), af = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebPageCategories/{webPageCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebPages/{webPageId}",
  ...e
}), uf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages/{webPageId}",
  ...e
}), sf = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebPages/{webPageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), df = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebPages/{webPageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Tags/{tagId}",
  ...e
}), mf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Tags/{tagId}",
  ...e
}), Cf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Categories/{categoryId}",
  ...e
}), Tf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Categories/{categoryId}",
  ...e
}), Pf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ff = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebPageTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), If = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageTags/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebPageTags/{webPageTagId}",
  ...e
}), Af = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPageTags/{webPageTagId}",
  ...e
}), Gf = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebPageTags/{webPageTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lf = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebPageTags/{webPageTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebsiteThemes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bf = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebsiteThemes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebsiteThemes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e
}), wf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e
}), Ef = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Df = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $f = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebTemplates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ff = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebTemplates/{webTemplateId}",
  ...e
}), Uf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebTemplates/{webTemplateId}",
  ...e
}), Of = (e) => (e.client ?? s).patch({
  url: "/api/v2/ContentService/WebTemplates/{webTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wf = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/WebTemplates/{webTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blogPostAuthorsCountBlogPostsByAuthor: Xy,
  blogPostAuthorsGetBlogAuthorById: Yy,
  blogPostAuthorsGetBlogAuthors: Ky,
  blogPostAuthorsGetBlogPostsByAuthor: Zy,
  blogPostCategoriesCountBlogPostCategories: py,
  blogPostCategoriesCreateBlogPostCategory: eT,
  blogPostCategoriesDeleteBlogPostCategory: rT,
  blogPostCategoriesGetBlogPostCategories: oy,
  blogPostCategoriesGetBlogPostCategoryById: aT,
  blogPostCategoriesPatchBlogPostCategory: tT,
  blogPostCategoriesUpdateBlogPostCategory: cT,
  blogPostTagsCountBlogPostTags: wT,
  blogPostTagsCreateBlogPostTag: MT,
  blogPostTagsDeleteBlogPostTag: ET,
  blogPostTagsGetBlogPostTagById: DT,
  blogPostTagsGetBlogPostTags: kT,
  blogPostTagsPatchBlogPostTag: BT,
  blogPostTagsUpdateBlogPostTag: $T,
  blogPostsCountPublicBlogPosts: hT,
  blogPostsCreateBlogPost: nT,
  blogPostsCreateCategoryForBlogPost: fT,
  blogPostsCreateCommentForBlogPost: GT,
  blogPostsCreateTagForBlogPost: ST,
  blogPostsDeleteBlogPost: iT,
  blogPostsDeleteCommentFromBlogPost: bT,
  blogPostsGetBlogPostById: sT,
  blogPostsGetBlogPosts: lT,
  blogPostsGetBlogPostsCount: uT,
  blogPostsGetCategoriesForBlogPost: PT,
  blogPostsGetCommentsForBlogPost: AT,
  blogPostsGetPublicBlogPostById: mT,
  blogPostsGetPublicBlogPosts: gT,
  blogPostsGetRepliesForComment: LT,
  blogPostsGetTagsForBlogPost: CT,
  blogPostsPatchBlogPost: dT,
  blogPostsRelateCategoryToBlogPost: jT,
  blogPostsRelateTagToBlogPost: TT,
  blogPostsReplyToComment: RT,
  blogPostsUnrelateCategoryFromBlogPost: IT,
  blogPostsUnrelateTagFromBlogPost: yT,
  blogPostsUpdateBlogPost: vT,
  businessDomainsCreateBusinessDomain: FT,
  businessDomainsDeleteBusinessDomain: OT,
  businessDomainsGetBusinessDomainById: WT,
  businessDomainsGetBusinessDomains: xT,
  businessDomainsGetBusinessDomainsCount: UT,
  businessDomainsUpdateBusinessDomain: HT,
  businessDomainsVerifyBusinessDomain: qT,
  localizationStringsCountLocalizationStrings: uP,
  localizationStringsCreateLocalizationString: nP,
  localizationStringsDeleteLocalizationString: iP,
  localizationStringsGetLocalizationStringById: sP,
  localizationStringsGetLocalizationStrings: lP,
  localizationStringsUpdateLocalizationString: dP,
  menuContextsCountMenuContexts: hP,
  menuContextsCreateMenuContext: gP,
  menuContextsDeleteMenuContext: mP,
  menuContextsGetMenuContextById: CP,
  menuContextsGetMenuContexts: vP,
  menuContextsUpdateMenuContext: SP,
  platformGetHealth: _T,
  platformGetHello: JT,
  platformGetManageInfo: oT,
  platformGetVersion: VT,
  platformMapIdentityApiConfirmEmail: KT,
  platformPostAccountLogout: aP,
  platformPostAccountManageDownloadPersonalData: cP,
  platformPostAccountManageLinkExternalLogin: tP,
  platformPostAccountPerformExternalLogin: rP,
  platformPostForgotPassword: ZT,
  platformPostLogin: QT,
  platformPostManage2Fa: pT,
  platformPostManageInfo: eP,
  platformPostRefresh: NT,
  platformPostRegister: zT,
  platformPostResendConfirmationEmail: YT,
  platformPostResetPassword: XT,
  portalsBindWebPortalDomain: xP,
  portalsCountPortals: PP,
  portalsCreateWebPortal: TP,
  portalsDeleteWebPortal: LP,
  portalsGetCurrentWebPortal: IP,
  portalsGetCurrentWebPortalOptions: AP,
  portalsGetPortals: yP,
  portalsGetRootWebPortal: fP,
  portalsGetWebPortalById: RP,
  portalsGetWebPortalDomainBindings: BP,
  portalsGetWebPortalFullSettings: EP,
  portalsGetWebPortalOptions: DP,
  portalsGetWebPortalSettings: MP,
  portalsInitializeCurrentWebPortal: jP,
  portalsPatchWebPortal: bP,
  portalsSearchWebPortal: GP,
  portalsUnbindWebPortalDomain: $P,
  portalsUpdateWebPortal: kP,
  portalsUpdateWebPortalSettings: wP,
  themesUpdateBaseWebContent: FP,
  webComponentsCountWebComponents: WP,
  webComponentsCreateWebComponent: OP,
  webComponentsDeleteWebComponent: HP,
  webComponentsGetWebComponentById: qP,
  webComponentsGetWebComponents: UP,
  webComponentsUpdateWebComponent: VP,
  webContentsCountWebContents: _P,
  webContentsCreateWebContent: zP,
  webContentsDeleteWebContent: QP,
  webContentsGetWebContentById: NP,
  webContentsGetWebContents: JP,
  webContentsPatchWebContent: KP,
  webContentsUpdateWebContent: YP,
  webPageCategoriesCountWebPageCategories: pP,
  webPageCategoriesCreateWebPageCategory: XP,
  webPageCategoriesDeleteWebPageCategory: oP,
  webPageCategoriesGetWebPageCategories: ZP,
  webPageCategoriesGetWebPageCategoryById: ef,
  webPageCategoriesPatchWebPageCategory: rf,
  webPageCategoriesUpdateWebPageCategory: af,
  webPageTagsCountWebPageTags: If,
  webPageTagsCreateWebPageTag: ff,
  webPageTagsDeleteWebPageTag: jf,
  webPageTagsGetWebPageTagById: Af,
  webPageTagsGetWebPageTags: Pf,
  webPageTagsPatchWebPageTag: Gf,
  webPageTagsUpdateWebPageTag: Lf,
  webPagesCountWebPages: tf,
  webPagesCreateWebPage: lf,
  webPagesCreateWebPageCategoryRelation: Sf,
  webPagesCreateWebPageTagRelation: gf,
  webPagesDeleteWebPage: nf,
  webPagesGetCategoriesByWebPage: Cf,
  webPagesGetTagsByWebPage: vf,
  webPagesGetWebPageById: uf,
  webPagesGetWebPages: cf,
  webPagesPatchWebPage: sf,
  webPagesRelateWebPageToCategory: Tf,
  webPagesRelateWebPageToTag: mf,
  webPagesUnrelateWebPageCategory: yf,
  webPagesUnrelateWebPageTag: hf,
  webPagesUpdateWebPage: df,
  webTemplatesCountWebTemplates: xf,
  webTemplatesCreateWebTemplate: $f,
  webTemplatesDeleteWebTemplate: Ff,
  webTemplatesGetWebTemplateById: Uf,
  webTemplatesGetWebTemplates: Bf,
  webTemplatesPatchWebTemplate: Of,
  webTemplatesUpdateWebTemplate: Wf,
  websiteThemesCreateWebsiteTheme: bf,
  websiteThemesDeleteWebsiteTheme: Mf,
  websiteThemesGetWebsiteThemeById: wf,
  websiteThemesGetWebsiteThemes: Rf,
  websiteThemesGetWebsiteThemesCount: kf,
  websiteThemesPatchWebsiteTheme: Ef,
  websiteThemesUpdateWebsiteTheme: Df
}, Symbol.toStringTag, { value: "Module" })), h = $(x()), Hf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qf = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/ContactGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _f = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e
}), Jf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e
}), zf = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qf = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kf = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/ContactProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactProfiles/Patients/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactProfiles/Partners/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pf = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/ContactProfiles/{id}",
  ...e
}), of = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactProfiles/{id}",
  ...e
}), eI = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rI = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/ContactRelations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lI = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/ContactRelations/{id}",
  ...e
}), nI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelations/{id}",
  ...e
}), uI = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactRelations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iI = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactRelations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelationTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/ContactRelationTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelationTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gI = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/ContactRelationTypes/{id}",
  ...e
}), hI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelationTypes/{id}",
  ...e
}), mI = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactRelationTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CI = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactRelationTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fI = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/Contacts/{contactId}",
  ...e
}), II = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}",
  ...e
}), jI = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/Contacts/{contactId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AI = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/Contacts/{contactId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Extended",
  ...e
}), LI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/{contactId}",
  ...e
}), MI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/{contactId}",
  ...e
}), BI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Cart",
  ...e
}), $I = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Avatar",
  ...e
}), xI = (e) => (e.client ?? h).post({
  ...u,
  url: "/api/v2/CrmService/Contacts/{contactId}/Avatar",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), FI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Wallet",
  ...e
}), UI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Profiles",
  ...e
}), OI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Profiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Profiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HI = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/Contacts/{contactId}/Profiles/{profileId}",
  ...e
}), qI = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/Contacts/{contactId}/Profiles/{profileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/SocialProfile",
  ...e
}), _I = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/{contactId}/Organizations",
  ...e
}), JI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/{contactId}/Individuals",
  ...e
}), zI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/{contactId}/Individuals",
  ...e
}), QI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/{contactId}/Organizations",
  ...e
}), NI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/Organizations/Upsert",
  ...e
}), KI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/Individuals/Upsert",
  ...e
}), YI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/Related",
  ...e
}), ZI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XI = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/Addresses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r2 = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/{emailId}",
  ...e
}), a2 = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/{emailId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t2 = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/{emailId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Emails/{emailId}/Verify",
  ...e
}), l2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactSources",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/ContactSources",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactSources/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i2 = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/ContactSources/{id}",
  ...e
}), s2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactSources/{id}",
  ...e
}), d2 = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactSources/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v2 = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactSources/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g2 = (e) => ((e == null ? void 0 : e.client) ?? h).get({
  url: "/version",
  ...e
}), h2 = (e) => ((e == null ? void 0 : e.client) ?? h).get({
  url: "/health",
  ...e
}), m2 = (e) => ((e == null ? void 0 : e.client) ?? h).get({
  url: "/hello",
  ...e
}), C2 = (e) => (e.client ?? h).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S2 = (e) => (e.client ?? h).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y2 = (e) => (e.client ?? h).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T2 = (e) => (e.client ?? h).get({
  url: "/confirmEmail",
  ...e
}), P2 = (e) => (e.client ?? h).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f2 = (e) => (e.client ?? h).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I2 = (e) => (e.client ?? h).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j2 = (e) => (e.client ?? h).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A2 = (e) => ((e == null ? void 0 : e.client) ?? h).get({
  url: "/manage/info",
  ...e
}), G2 = (e) => (e.client ?? h).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L2 = (e) => ((e == null ? void 0 : e.client) ?? h).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), R2 = (e) => ((e == null ? void 0 : e.client) ?? h).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), b2 = (e) => ((e == null ? void 0 : e.client) ?? h).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), k2 = (e) => ((e == null ? void 0 : e.client) ?? h).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), M2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D2 = (e) => (e.client ?? h).delete({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), B2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), $2 = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x2 = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/Key/{key}",
  ...e
}), U2 = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/Key/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O2 = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Sync",
  ...e
}), H2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Sync/Me",
  ...e
}), q2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Sync/User",
  ...e
}), V2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Sync/Tenant",
  ...e
}), Xme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contactGroupsCreateContactGroup: qf,
  contactGroupsDeleteContactGroup: _f,
  contactGroupsGetContactGroupById: Jf,
  contactGroupsGetContactGroups: Hf,
  contactGroupsGetContactGroupsCount: Vf,
  contactGroupsPatchContactGroup: zf,
  contactGroupsUpdateContactGroup: Qf,
  contactProfilesCreateContactProfile: Kf,
  contactProfilesDeleteContactProfile: pf,
  contactProfilesGetContactProfileById: of,
  contactProfilesGetContactProfiles: Nf,
  contactProfilesGetContactProfilesCount: Yf,
  contactProfilesGetPartnerProfilesCount: Xf,
  contactProfilesGetPatientProfilesCount: Zf,
  contactProfilesPatchContactProfile: eI,
  contactProfilesUpdateContactProfile: rI,
  contactRelationTypesCreateContactRelationType: dI,
  contactRelationTypesDeleteContactRelationType: gI,
  contactRelationTypesGetContactRelationTypeById: hI,
  contactRelationTypesGetContactRelationTypes: sI,
  contactRelationTypesGetContactRelationTypesCount: vI,
  contactRelationTypesPatchContactRelationType: mI,
  contactRelationTypesUpdateContactRelationType: CI,
  contactRelationsCreateContactRelation: tI,
  contactRelationsDeleteContactRelation: lI,
  contactRelationsGetContactRelationById: nI,
  contactRelationsGetContactRelations: aI,
  contactRelationsGetContactRelationsCount: cI,
  contactRelationsPatchContactRelation: uI,
  contactRelationsUpdateContactRelation: iI,
  contactSourcesCreateContactSource: n2,
  contactSourcesDeleteContactSource: i2,
  contactSourcesGetContactSourceById: s2,
  contactSourcesGetContactSources: l2,
  contactSourcesGetContactSourcesCount: u2,
  contactSourcesPatchContactSource: d2,
  contactSourcesUpdateContactSource: v2,
  contactsCreateContact: yI,
  contactsCreateContactEmail: e2,
  contactsCreateProfileForContact: OI,
  contactsDeleteContact: fI,
  contactsDeleteContactEmail: r2,
  contactsDeleteProfileForContact: HI,
  contactsGetBusinessOwnedIndividual: kI,
  contactsGetBusinessOwnedIndividuals: LI,
  contactsGetBusinessOwnedIndividualsCount: RI,
  contactsGetBusinessOwnedOrganization: DI,
  contactsGetBusinessOwnedOrganizations: MI,
  contactsGetBusinessOwnedOrganizationsCount: wI,
  contactsGetContact: II,
  contactsGetContactAvatar: $I,
  contactsGetContactCart: BI,
  contactsGetContactEmails: pI,
  contactsGetContactEmailsCount: oI,
  contactsGetContactSocialProfile: VI,
  contactsGetContactWallet: FI,
  contactsGetContacts: SI,
  contactsGetContactsCount: TI,
  contactsGetExtendedBusinessOwnedIndividuals: bI,
  contactsGetExtendedBusinessOwnedOrganizations: EI,
  contactsGetExtendedContact: GI,
  contactsGetExtendedContacts: PI,
  contactsGetIndividualRelatedIndividuals: JI,
  contactsGetIndividualRelatedOrganizations: _I,
  contactsGetOrganizationRelatedIndividuals: zI,
  contactsGetOrganizationRelatedOrganizations: QI,
  contactsGetProfilesForContact: UI,
  contactsGetProfilesForContactCount: WI,
  contactsPatchContact: jI,
  contactsPatchContactEmail: a2,
  contactsPreviewContactEmailTemplate: ZI,
  contactsSendContactEmail: XI,
  contactsUpdateContact: AI,
  contactsUpdateContactAvatar: xI,
  contactsUpdateContactEmail: t2,
  contactsUpdateProfileForContact: qI,
  contactsUpsertCurrentUserRelatedContact: YI,
  contactsUpsertTenantOntoAnotherTenantContactList: NI,
  contactsUpsertUserOntoAnotherTenantContactList: KI,
  contactsVerifyContactEmail: c2,
  optionsCreateContactOption: w2,
  optionsDeleteContactOption: D2,
  optionsGetContactOptionById: B2,
  optionsGetContactOptionByKey: F2,
  optionsGetContactOptions: M2,
  optionsGetContactOptionsCount: E2,
  optionsPatchContactOption: $2,
  optionsPatchContactOptionByKey: U2,
  optionsUpdateContactOption: x2,
  optionsUpsertContactOption: O2,
  platformGetHealth: h2,
  platformGetHello: m2,
  platformGetManageInfo: A2,
  platformGetVersion: g2,
  platformMapIdentityApiConfirmEmail: T2,
  platformPostAccountLogout: R2,
  platformPostAccountManageDownloadPersonalData: k2,
  platformPostAccountManageLinkExternalLogin: b2,
  platformPostAccountPerformExternalLogin: L2,
  platformPostForgotPassword: f2,
  platformPostLogin: S2,
  platformPostManage2Fa: j2,
  platformPostManageInfo: G2,
  platformPostRefresh: y2,
  platformPostRegister: C2,
  platformPostResendConfirmationEmail: P2,
  platformPostResetPassword: I2,
  syncSyncCurrentHolderToCurrentTenantCrm: W2,
  syncSyncCurrentHolderToTenantCrm: H2,
  syncSyncHolderToTenantCrm: q2,
  syncSyncTenantToTenantCrm: V2
}, Symbol.toStringTag, { value: "Module" })), B = $(x()), _2 = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J2 = (e) => (e.client ?? B).post({
  url: "/api/v2/DealsService/DealUnitFlows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z2 = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q2 = (e) => (e.client ?? B).delete({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e
}), N2 = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e
}), K2 = (e) => (e.client ?? B).patch({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y2 = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z2 = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X2 = (e) => (e.client ?? B).post({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p2 = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o2 = (e) => (e.client ?? B).delete({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e
}), ej = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e
}), rj = (e) => (e.client ?? B).patch({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aj = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cj = (e) => (e.client ?? B).post({
  url: "/api/v2/DealsService/DealUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uj = (e) => (e.client ?? B).delete({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e
}), ij = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e
}), sj = (e) => (e.client ?? B).patch({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dj = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Extended",
  ...e
}), gj = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Calculate",
  ...e
}), hj = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Close",
  ...e
}), mj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cj = (e) => (e.client ?? B).post({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yj = (e) => (e.client ?? B).delete({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e
}), Tj = (e) => (e.client ?? B).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e
}), Pj = (e) => (e.client ?? B).patch({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fj = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ij = (e) => (e.client ?? B).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}/Calculate",
  ...e
}), jj = (e) => ((e == null ? void 0 : e.client) ?? B).get({
  url: "/version",
  ...e
}), Aj = (e) => ((e == null ? void 0 : e.client) ?? B).get({
  url: "/health",
  ...e
}), Gj = (e) => ((e == null ? void 0 : e.client) ?? B).get({
  url: "/hello",
  ...e
}), Lj = (e) => (e.client ?? B).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rj = (e) => (e.client ?? B).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bj = (e) => (e.client ?? B).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kj = (e) => (e.client ?? B).get({
  url: "/confirmEmail",
  ...e
}), Mj = (e) => (e.client ?? B).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wj = (e) => (e.client ?? B).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ej = (e) => (e.client ?? B).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dj = (e) => (e.client ?? B).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bj = (e) => ((e == null ? void 0 : e.client) ?? B).get({
  url: "/manage/info",
  ...e
}), $j = (e) => (e.client ?? B).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xj = (e) => ((e == null ? void 0 : e.client) ?? B).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Fj = (e) => ((e == null ? void 0 : e.client) ?? B).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Uj = (e) => ((e == null ? void 0 : e.client) ?? B).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Oj = (e) => ((e == null ? void 0 : e.client) ?? B).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), pme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dealUnitFlowsCreateDealUnitFlow: J2,
  dealUnitFlowsCreateDealUnitFlowStage: X2,
  dealUnitFlowsDeleteDealUnitFlow: Q2,
  dealUnitFlowsDeleteDealUnitFlowStage: o2,
  dealUnitFlowsGetDealUnitFlow: N2,
  dealUnitFlowsGetDealUnitFlowStage: ej,
  dealUnitFlowsGetDealUnitFlowStages: Z2,
  dealUnitFlowsGetDealUnitFlowStagesCount: p2,
  dealUnitFlowsGetDealUnitFlows: _2,
  dealUnitFlowsGetDealUnitFlowsCount: z2,
  dealUnitFlowsPatchDealUnitFlow: K2,
  dealUnitFlowsPatchDealUnitFlowStage: rj,
  dealUnitFlowsUpdateDealUnitFlow: Y2,
  dealUnitFlowsUpdateDealUnitFlowStage: aj,
  dealUnitsCalculateDealUnit: gj,
  dealUnitsCalculateDealUnitLine: Ij,
  dealUnitsCloseDealUnit: hj,
  dealUnitsCreateDealUnit: cj,
  dealUnitsCreateGetDealUnitLines: Cj,
  dealUnitsDeleteDealUnit: uj,
  dealUnitsDeleteDealUnitPrice: yj,
  dealUnitsGetDealUnit: ij,
  dealUnitsGetDealUnitLines: mj,
  dealUnitsGetDealUnitLinesCount: Sj,
  dealUnitsGetDealUnitPrice: Tj,
  dealUnitsGetDealUnits: tj,
  dealUnitsGetDealUnitsCount: lj,
  dealUnitsGetExtendedDealUnit: vj,
  dealUnitsGetExtendedDealUnits: nj,
  dealUnitsPatchDealUnit: sj,
  dealUnitsPatchDealUnitLine: Pj,
  dealUnitsUpdateDealUnit: dj,
  dealUnitsUpdateDealUnitPrice: fj,
  platformGetHealth: Aj,
  platformGetHello: Gj,
  platformGetManageInfo: Bj,
  platformGetVersion: jj,
  platformMapIdentityApiConfirmEmail: kj,
  platformPostAccountLogout: Fj,
  platformPostAccountManageDownloadPersonalData: Oj,
  platformPostAccountManageLinkExternalLogin: Uj,
  platformPostAccountPerformExternalLogin: xj,
  platformPostForgotPassword: wj,
  platformPostLogin: Rj,
  platformPostManage2Fa: Dj,
  platformPostManageInfo: $j,
  platformPostRefresh: bj,
  platformPostRegister: Lj,
  platformPostResendConfirmationEmail: Mj,
  platformPostResetPassword: Ej
}, Symbol.toStringTag, { value: "Module" })), X = $(x()), Wj = (e) => ((e == null ? void 0 : e.client) ?? X).get({
  url: "/version",
  ...e
}), Hj = (e) => ((e == null ? void 0 : e.client) ?? X).get({
  url: "/health",
  ...e
}), qj = (e) => ((e == null ? void 0 : e.client) ?? X).get({
  url: "/hello",
  ...e
}), Vj = (e) => (e.client ?? X).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _j = (e) => (e.client ?? X).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jj = (e) => (e.client ?? X).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zj = (e) => (e.client ?? X).get({
  url: "/confirmEmail",
  ...e
}), Qj = (e) => (e.client ?? X).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nj = (e) => (e.client ?? X).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kj = (e) => (e.client ?? X).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yj = (e) => (e.client ?? X).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zj = (e) => ((e == null ? void 0 : e.client) ?? X).get({
  url: "/manage/info",
  ...e
}), Xj = (e) => (e.client ?? X).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pj = (e) => ((e == null ? void 0 : e.client) ?? X).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), oj = (e) => ((e == null ? void 0 : e.client) ?? X).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), eA = (e) => ((e == null ? void 0 : e.client) ?? X).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), rA = (e) => ((e == null ? void 0 : e.client) ?? X).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), ome = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: Hj,
  platformGetHello: qj,
  platformGetManageInfo: Zj,
  platformGetVersion: Wj,
  platformMapIdentityApiConfirmEmail: zj,
  platformPostAccountLogout: oj,
  platformPostAccountManageDownloadPersonalData: rA,
  platformPostAccountManageLinkExternalLogin: eA,
  platformPostAccountPerformExternalLogin: pj,
  platformPostForgotPassword: Nj,
  platformPostLogin: _j,
  platformPostManage2Fa: Yj,
  platformPostManageInfo: Xj,
  platformPostRefresh: Jj,
  platformPostRegister: Vj,
  platformPostResendConfirmationEmail: Qj,
  platformPostResetPassword: Kj
}, Symbol.toStringTag, { value: "Module" })), z = $(x()), aA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  url: "/api/v2/ForexService/Documents/Reprice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tA = (e) => (e.client ?? z).get({
  url: "/api/v2/ForexService/Exchange/Latest",
  ...e
}), cA = (e) => (e.client ?? z).get({
  url: "/api/v2/ForexService/Exchange/History",
  ...e
}), lA = (e) => (e.client ?? z).get({
  url: "/api/v3/ForexService/Exchange/Latest",
  ...e
}), nA = (e) => (e.client ?? z).get({
  url: "/api/v3/ForexService/Exchange/History",
  ...e
}), uA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/version",
  ...e
}), iA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/health",
  ...e
}), sA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/hello",
  ...e
}), dA = (e) => (e.client ?? z).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vA = (e) => (e.client ?? z).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gA = (e) => (e.client ?? z).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hA = (e) => (e.client ?? z).get({
  url: "/confirmEmail",
  ...e
}), mA = (e) => (e.client ?? z).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CA = (e) => (e.client ?? z).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SA = (e) => (e.client ?? z).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yA = (e) => (e.client ?? z).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/manage/info",
  ...e
}), PA = (e) => (e.client ?? z).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), IA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), jA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), AA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), GA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/api/v2/ForexService/Rates/Latest",
  ...e
}), LA = (e) => (e.client ?? z).get({
  url: "/api/v2/ForexService/Rates/Latest/{currencyId}",
  ...e
}), RA = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/api/v2/ForexService/Rates/History",
  ...e
}), bA = (e) => (e.client ?? z).get({
  url: "/api/v2/ForexService/Rates/History/{currencyId}",
  ...e
}), kA = (e) => (e.client ?? z).get({
  url: "/api/v2/ForexService/Rates/History/{currencyId}/Series",
  ...e
}), MA = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  url: "/api/v2/ForexService/Sets/Repair",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  documentsRepriceUnissuedDocuments: aA,
  exchangeExchangeAmount: tA,
  exchangeExchangeAmountHistorical: cA,
  exchangeVExchangeAmountHistoricalV3: nA,
  exchangeVExchangeAmountV3: lA,
  platformGetHealth: iA,
  platformGetHello: sA,
  platformGetManageInfo: TA,
  platformGetVersion: uA,
  platformMapIdentityApiConfirmEmail: hA,
  platformPostAccountLogout: IA,
  platformPostAccountManageDownloadPersonalData: AA,
  platformPostAccountManageLinkExternalLogin: jA,
  platformPostAccountPerformExternalLogin: fA,
  platformPostForgotPassword: CA,
  platformPostLogin: vA,
  platformPostManage2Fa: yA,
  platformPostManageInfo: PA,
  platformPostRefresh: gA,
  platformPostRegister: dA,
  platformPostResendConfirmationEmail: mA,
  platformPostResetPassword: SA,
  ratesGetForexRateSeries: kA,
  ratesGetHistoricalCurrencyRate: bA,
  ratesGetHistoricalCurrencyRates: RA,
  ratesGetLatestCurrencyRate: LA,
  ratesGetLatestCurrencyRatesModel: GA,
  setsRepairForeignExchangeSets: MA
}, Symbol.toStringTag, { value: "Module" })), W = $(x()), wA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Countries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Countries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/Search",
  ...e
}), BA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}",
  ...e
}), $A = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/States",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/States/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/Timezones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/Timezones/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/Currencies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _A = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/CallingCodes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/CallingCodes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Currencies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Currencies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Currencies/{currencyId}",
  ...e
}), YA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/version",
  ...e
}), ZA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/health",
  ...e
}), XA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/hello",
  ...e
}), pA = (e) => (e.client ?? W).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oA = (e) => (e.client ?? W).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eG = (e) => (e.client ?? W).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rG = (e) => (e.client ?? W).get({
  url: "/confirmEmail",
  ...e
}), aG = (e) => (e.client ?? W).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tG = (e) => (e.client ?? W).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cG = (e) => (e.client ?? W).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lG = (e) => (e.client ?? W).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/manage/info",
  ...e
}), uG = (e) => (e.client ?? W).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iG = (e) => ((e == null ? void 0 : e.client) ?? W).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sG = (e) => ((e == null ? void 0 : e.client) ?? W).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), dG = (e) => ((e == null ? void 0 : e.client) ?? W).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), vG = (e) => ((e == null ? void 0 : e.client) ?? W).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), gG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Languages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Languages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mG = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Languages/{languageId}",
  ...e
}), CG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Timezones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Timezones/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yG = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Timezones/{timeZoneId}",
  ...e
}), rCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countriesCountCallingCodesByCountry: zA,
  countriesCountCitiesByState: OA,
  countriesCountCountries: EA,
  countriesCountCountryStates: xA,
  countriesCountTimezonesByCountry: HA,
  countriesCountTopLevelDomainsByCountry: _A,
  countriesGetAllCountries: wA,
  countriesGetCallingCodesByCountryId: JA,
  countriesGetCitiesByCountryStateId: UA,
  countriesGetCountryById: BA,
  countriesGetCountryStateById: FA,
  countriesGetCountryStates: $A,
  countriesGetEnabledCurrenciesByCountryId: qA,
  countriesGetTimeZonesByCountryId: WA,
  countriesGetTopLevelDomainsByCountryId: VA,
  countriesSearchCountriesByName: DA,
  currenciesCountCurrencies: NA,
  currenciesGetCurrencyById: KA,
  currenciesGetEnabledCurrencies: QA,
  languagesCountLanguages: hG,
  languagesGetLanguageById: mG,
  languagesGetLanguages: gG,
  platformGetHealth: ZA,
  platformGetHello: XA,
  platformGetManageInfo: nG,
  platformGetVersion: YA,
  platformMapIdentityApiConfirmEmail: rG,
  platformPostAccountLogout: sG,
  platformPostAccountManageDownloadPersonalData: vG,
  platformPostAccountManageLinkExternalLogin: dG,
  platformPostAccountPerformExternalLogin: iG,
  platformPostForgotPassword: tG,
  platformPostLogin: oA,
  platformPostManage2Fa: lG,
  platformPostManageInfo: uG,
  platformPostRefresh: eG,
  platformPostRegister: pA,
  platformPostResendConfirmationEmail: aG,
  platformPostResetPassword: cG,
  timezonesCountTimezones: SG,
  timezonesGetTimeZoneById: yG,
  timezonesGetTimeZones: CG
}, Symbol.toStringTag, { value: "Module" })), l = $(x()), TG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalStages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/AppraisalStages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalStages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IG = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/AppraisalStages/{stageId}",
  ...e
}), jG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalStages/{stageId}",
  ...e
}), AG = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/AppraisalStages/{stageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalWorkflows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/AppraisalWorkflows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalWorkflows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bG = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/AppraisalWorkflows/{workflowId}",
  ...e
}), kG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/AppraisalWorkflows/{workflowId}",
  ...e
}), MG = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/AppraisalWorkflows/{workflowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BG = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions/{sessionId}",
  ...e
}), $G = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions/{sessionId}",
  ...e
}), xG = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions/{sessionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FG = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions/{sessionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employees",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Employees",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employees/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HG = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Employees/{employeeId}",
  ...e
}), qG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employees/{employeeId}",
  ...e
}), VG = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Employees/{employeeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _G = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Employees/{employeeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/EmployeeTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NG = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/EmployeeTypes/{employeeTypeId}",
  ...e
}), KG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeTypes/{employeeTypeId}",
  ...e
}), YG = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/EmployeeTypes/{employeeTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZG = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/EmployeeTypes/{employeeTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Employers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eL = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Employers/{employerId}",
  ...e
}), rL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Employers/{employerId}",
  ...e
}), aL = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Employers/{employerId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tL = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Employers/{employerId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Employers/{employerId}/Publish",
  ...e
}), lL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Employers/{employerId}/Unpublish",
  ...e
}), nL = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/version",
  ...e
}), uL = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/health",
  ...e
}), iL = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/hello",
  ...e
}), sL = (e) => (e.client ?? l).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dL = (e) => (e.client ?? l).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vL = (e) => (e.client ?? l).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gL = (e) => (e.client ?? l).get({
  url: "/confirmEmail",
  ...e
}), hL = (e) => (e.client ?? l).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mL = (e) => (e.client ?? l).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CL = (e) => (e.client ?? l).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SL = (e) => (e.client ?? l).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yL = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/manage/info",
  ...e
}), TL = (e) => (e.client ?? l).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PL = (e) => ((e == null ? void 0 : e.client) ?? l).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), fL = (e) => ((e == null ? void 0 : e.client) ?? l).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), IL = (e) => ((e == null ? void 0 : e.client) ?? l).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), jL = (e) => ((e == null ? void 0 : e.client) ?? l).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), AL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/GigApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/GigApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/GigApplications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RL = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}",
  ...e
}), bL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}",
  ...e
}), kL = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ML = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}/Accept",
  ...e
}), EL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Gigs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Gigs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Gigs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $L = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Gigs/{gigId}",
  ...e
}), xL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Gigs/{gigId}",
  ...e
}), FL = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Gigs/{gigId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UL = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Gigs/{gigId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Gigs/{gigId}/Publish",
  ...e
}), WL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Gigs/{gigId}/Award",
  ...e
}), HL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Gigs/{gigId}/Complete",
  ...e
}), qL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Gigs/{gigId}/Cancel",
  ...e
}), VL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplicants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _L = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobApplicants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplicants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zL = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobApplicants/{jobApplicantId}",
  ...e
}), QL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplicants/{jobApplicantId}",
  ...e
}), NL = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobApplicants/{jobApplicantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KL = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobApplicants/{jobApplicantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pL = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobApplications/{jobApplicationId}",
  ...e
}), oL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplications/{jobApplicationId}",
  ...e
}), eR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobApplications/{jobApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobApplications/{jobApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobApplications/{jobApplicationId}/Status",
  ...e
}), tR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobFields",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobFields",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobFields/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobFields/{jobFieldId}",
  ...e
}), uR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobFields/{jobFieldId}",
  ...e
}), iR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobFields/{jobFieldId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobFields/{jobFieldId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOfferFields",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOfferFields",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOfferFields/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobOfferFields/{jobOfferFieldId}",
  ...e
}), mR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOfferFields/{jobOfferFieldId}",
  ...e
}), CR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobOfferFields/{jobOfferFieldId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobOfferFields/{jobOfferFieldId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOffers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOffers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOffers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}",
  ...e
}), IR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}",
  ...e
}), jR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GR = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/api/v2/HrmsService/JobOffers/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LR = (e) => ((e == null ? void 0 : e.client) ?? l).get({
  url: "/api/v2/HrmsService/JobOffers/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobOffers/Public/{jobOfferId}",
  ...e
}), bR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}/Publish",
  ...e
}), kR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}/Close",
  ...e
}), MR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}/Fill",
  ...e
}), wR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobTitles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ER = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobTitles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobTitles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobTitles/{jobTitleId}",
  ...e
}), $R = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobTitles/{jobTitleId}",
  ...e
}), xR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/JobTitles/{jobTitleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/JobTitles/{jobTitleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/LeaveApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveApplications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/LeaveApplications/{leaveApplicationId}",
  ...e
}), qR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveApplications/{leaveApplicationId}",
  ...e
}), VR = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/LeaveApplications/{leaveApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _R = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/LeaveApplications/{leaveApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/LeaveTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/LeaveTypes/{leaveTypeId}",
  ...e
}), KR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveTypes/{leaveTypeId}",
  ...e
}), YR = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/LeaveTypes/{leaveTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/PayrollPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/PayrollPeriods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/PayrollPeriods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oR = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/PayrollPeriods/{periodId}",
  ...e
}), eb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/PayrollPeriods/{periodId}",
  ...e
}), rb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/PayrollPeriods/{periodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ab = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Payrolls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Payrolls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Payrolls/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Payrolls/{payrollId}",
  ...e
}), nb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Payrolls/{payrollId}",
  ...e
}), ub = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Payrolls/{payrollId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ib = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Payrolls/{payrollId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), db = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments/{assignmentId}/End",
  ...e
}), hb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/{targetPositionId}/Assignments/Reassign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/Assignments/ReassignToNewPosition",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/{targetPositionId}/Assignments/AssignWithCapacity",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments/{assignmentId}/Primary",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Positions/{positionId}/Capacity",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Positions/{positionId}/Department",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/RequiredSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ib = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e
}), Ab = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e
}), Gb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Salaries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e
}), wb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e
}), Eb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Db = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $b = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Schedules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e
}), Ub = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e
}), Ob = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Shifts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _b = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e
}), Jb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e
}), zb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TimeIntervals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e
}), Xb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e
}), pb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ob = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ek = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rk = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingProgramCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ak = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tk = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e
}), ck = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e
}), lk = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nk = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ik = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingProgramEvents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dk = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e
}), vk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e
}), gk = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hk = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ck = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yk = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e
}), Tk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e
}), Pk = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appraisalStagesCreateAppraisalStage: PG,
  appraisalStagesDeleteAppraisalStage: IG,
  appraisalStagesGetAppraisalStageById: jG,
  appraisalStagesGetAppraisalStages: TG,
  appraisalStagesGetAppraisalStagesCount: fG,
  appraisalStagesUpdateAppraisalStage: AG,
  appraisalWorkflowsCreateAppraisalWorkflow: LG,
  appraisalWorkflowsDeleteAppraisalWorkflow: bG,
  appraisalWorkflowsGetAppraisalWorkflowById: kG,
  appraisalWorkflowsGetAppraisalWorkflows: GG,
  appraisalWorkflowsGetAppraisalWorkflowsCount: RG,
  appraisalWorkflowsUpdateAppraisalWorkflow: MG,
  employeeAppraisalSessionsCreateEmployeeAppraisalSession: EG,
  employeeAppraisalSessionsDeleteEmployeeAppraisalSession: BG,
  employeeAppraisalSessionsGetEmployeeAppraisalSessionById: $G,
  employeeAppraisalSessionsGetEmployeeAppraisalSessions: wG,
  employeeAppraisalSessionsGetEmployeeAppraisalSessionsCount: DG,
  employeeAppraisalSessionsPatchEmployeeAppraisalSession: xG,
  employeeAppraisalSessionsUpdateEmployeeAppraisalSession: FG,
  employeeTypesCreateEmployeeType: zG,
  employeeTypesDeleteEmployeeType: NG,
  employeeTypesGetEmployeeTypeById: KG,
  employeeTypesGetEmployeeTypes: JG,
  employeeTypesGetEmployeeTypesCount: QG,
  employeeTypesPatchEmployeeType: YG,
  employeeTypesUpdateEmployeeType: ZG,
  employeesCreateEmployee: OG,
  employeesDeleteEmployee: HG,
  employeesGetEmployeeById: qG,
  employeesGetEmployees: UG,
  employeesGetEmployeesCount: WG,
  employeesPatchEmployee: VG,
  employeesUpdateEmployee: _G,
  employersCreateEmployer: pG,
  employersDeleteEmployer: eL,
  employersGetEmployerById: rL,
  employersGetEmployers: XG,
  employersGetEmployersCount: oG,
  employersPatchEmployer: aL,
  employersPublishEmployerProfile: cL,
  employersUnpublishEmployerProfile: lL,
  employersUpdateEmployer: tL,
  gigApplicationsAcceptGigApplication: wL,
  gigApplicationsCreateGigApplication: GL,
  gigApplicationsDeleteGigApplication: RL,
  gigApplicationsGetGigApplicationById: bL,
  gigApplicationsGetGigApplications: AL,
  gigApplicationsGetGigApplicationsCount: LL,
  gigApplicationsPatchGigApplication: kL,
  gigApplicationsUpdateGigApplication: ML,
  gigsAwardGig: WL,
  gigsCancelGig: qL,
  gigsCompleteGig: HL,
  gigsCreateGig: DL,
  gigsDeleteGig: $L,
  gigsGetGigById: xL,
  gigsGetGigs: EL,
  gigsGetGigsCount: BL,
  gigsPatchGig: FL,
  gigsPublishGig: OL,
  gigsUpdateGig: UL,
  jobApplicantsCreateJobApplicant: _L,
  jobApplicantsDeleteJobApplicant: zL,
  jobApplicantsGetJobApplicantById: QL,
  jobApplicantsGetJobApplicants: VL,
  jobApplicantsGetJobApplicantsCount: JL,
  jobApplicantsPatchJobApplicant: NL,
  jobApplicantsUpdateJobApplicant: KL,
  jobApplicationsChangeJobApplicationStatus: aR,
  jobApplicationsCreateJobApplication: ZL,
  jobApplicationsDeleteJobApplication: pL,
  jobApplicationsGetJobApplicationById: oL,
  jobApplicationsGetJobApplications: YL,
  jobApplicationsGetJobApplicationsCount: XL,
  jobApplicationsPatchJobApplication: eR,
  jobApplicationsUpdateJobApplication: rR,
  jobFieldsCreateJobField: cR,
  jobFieldsDeleteJobField: nR,
  jobFieldsGetJobFieldById: uR,
  jobFieldsGetJobFields: tR,
  jobFieldsGetJobFieldsCount: lR,
  jobFieldsPatchJobField: iR,
  jobFieldsUpdateJobField: sR,
  jobOfferFieldsCreateJobOfferField: vR,
  jobOfferFieldsDeleteJobOfferField: hR,
  jobOfferFieldsGetJobOfferFieldById: mR,
  jobOfferFieldsGetJobOfferFields: dR,
  jobOfferFieldsGetJobOfferFieldsCount: gR,
  jobOfferFieldsPatchJobOfferField: CR,
  jobOfferFieldsUpdateJobOfferField: SR,
  jobOffersCloseJobOffer: kR,
  jobOffersCreateJobOffer: TR,
  jobOffersDeleteJobOffer: fR,
  jobOffersFillJobOffer: MR,
  jobOffersGetJobOfferById: IR,
  jobOffersGetJobOffers: yR,
  jobOffersGetJobOffersCount: PR,
  jobOffersGetPublicJobOfferById: RR,
  jobOffersGetPublicJobOffers: GR,
  jobOffersGetPublicJobOffersCount: LR,
  jobOffersPatchJobOffer: jR,
  jobOffersPublishJobOffer: bR,
  jobOffersUpdateJobOffer: AR,
  jobTitlesCreateJobTitle: ER,
  jobTitlesDeleteJobTitle: BR,
  jobTitlesGetJobTitleById: $R,
  jobTitlesGetJobTitles: wR,
  jobTitlesGetJobTitlesCount: DR,
  jobTitlesPatchJobTitle: xR,
  jobTitlesUpdateJobTitle: FR,
  leaveApplicationsCreateLeaveApplication: OR,
  leaveApplicationsDeleteLeaveApplication: HR,
  leaveApplicationsGetLeaveApplicationById: qR,
  leaveApplicationsGetLeaveApplications: UR,
  leaveApplicationsGetLeaveApplicationsCount: WR,
  leaveApplicationsPatchLeaveApplication: VR,
  leaveApplicationsUpdateLeaveApplication: _R,
  leaveTypesCreateLeaveType: zR,
  leaveTypesDeleteLeaveType: NR,
  leaveTypesGetLeaveTypeById: KR,
  leaveTypesGetLeaveTypes: JR,
  leaveTypesGetLeaveTypesCount: QR,
  leaveTypesUpdateLeaveType: YR,
  payrollPeriodsCreatePayrollPeriod: XR,
  payrollPeriodsDeletePayrollPeriod: oR,
  payrollPeriodsGetPayrollPeriodById: eb,
  payrollPeriodsGetPayrollPeriods: ZR,
  payrollPeriodsGetPayrollPeriodsCount: pR,
  payrollPeriodsUpdatePayrollPeriod: rb,
  payrollsCreatePayroll: tb,
  payrollsDeletePayroll: lb,
  payrollsGetPayrollById: nb,
  payrollsGetPayrolls: ab,
  payrollsGetPayrollsCount: cb,
  payrollsPatchPayroll: ub,
  payrollsUpdatePayroll: ib,
  platformGetHealth: uL,
  platformGetHello: iL,
  platformGetManageInfo: yL,
  platformGetVersion: nL,
  platformMapIdentityApiConfirmEmail: gL,
  platformPostAccountLogout: fL,
  platformPostAccountManageDownloadPersonalData: jL,
  platformPostAccountManageLinkExternalLogin: IL,
  platformPostAccountPerformExternalLogin: PL,
  platformPostForgotPassword: mL,
  platformPostLogin: dL,
  platformPostManage2Fa: SL,
  platformPostManageInfo: TL,
  platformPostRefresh: vL,
  platformPostRegister: sL,
  platformPostResendConfirmationEmail: hL,
  platformPostResetPassword: CL,
  positionSeatsAssignPosition: db,
  positionSeatsAssignWithCapacity: Cb,
  positionSeatsChangePositionCapacity: yb,
  positionSeatsChangePositionDepartment: Tb,
  positionSeatsEndPositionAssignment: gb,
  positionSeatsGetPositionAssignments: sb,
  positionSeatsGetPositionAssignmentsCount: vb,
  positionSeatsReassignPosition: hb,
  positionSeatsReassignToNewPosition: mb,
  positionSeatsSetPrimarySeat: Sb,
  requiredSkillsCreateRequiredSkill: fb,
  requiredSkillsDeleteRequiredSkill: jb,
  requiredSkillsGetRequiredSkillById: Ab,
  requiredSkillsGetRequiredSkills: Pb,
  requiredSkillsGetRequiredSkillsCount: Ib,
  requiredSkillsPatchRequiredSkill: Gb,
  requiredSkillsUpdateRequiredSkill: Lb,
  salariesCreateSalary: bb,
  salariesDeleteSalary: Mb,
  salariesGetSalaries: Rb,
  salariesGetSalariesCount: kb,
  salariesGetSalaryById: wb,
  salariesPatchSalary: Eb,
  salariesUpdateSalary: Db,
  schedulesCreateSchedule: $b,
  schedulesDeleteSchedule: Fb,
  schedulesGetScheduleById: Ub,
  schedulesGetSchedules: Bb,
  schedulesGetSchedulesCount: xb,
  schedulesPatchSchedule: Ob,
  schedulesUpdateSchedule: Wb,
  shiftsCreateShift: qb,
  shiftsDeleteShift: _b,
  shiftsGetShiftById: Jb,
  shiftsGetShifts: Hb,
  shiftsGetShiftsCount: Vb,
  shiftsPatchShift: zb,
  shiftsUpdateShift: Qb,
  timeIntervalsCreateTimeInterval: Kb,
  timeIntervalsDeleteTimeInterval: Zb,
  timeIntervalsGetTimeIntervalById: Xb,
  timeIntervalsGetTimeIntervals: Nb,
  timeIntervalsGetTimeIntervalsCount: Yb,
  timeIntervalsPatchTimeInterval: pb,
  timeIntervalsUpdateTimeInterval: ob,
  trainingProgramCoursesCreateTrainingProgramCourse: rk,
  trainingProgramCoursesDeleteTrainingProgramCourse: tk,
  trainingProgramCoursesGetTrainingProgramCourseById: ck,
  trainingProgramCoursesGetTrainingProgramCourses: ek,
  trainingProgramCoursesGetTrainingProgramCoursesCount: ak,
  trainingProgramCoursesPatchTrainingProgramCourse: lk,
  trainingProgramCoursesUpdateTrainingProgramCourse: nk,
  trainingProgramEventsCreateTrainingProgramEvent: ik,
  trainingProgramEventsDeleteTrainingProgramEvent: dk,
  trainingProgramEventsGetTrainingProgramEventById: vk,
  trainingProgramEventsGetTrainingProgramEvents: uk,
  trainingProgramEventsGetTrainingProgramEventsCount: sk,
  trainingProgramEventsPatchTrainingProgramEvent: gk,
  trainingProgramEventsUpdateTrainingProgramEvent: hk,
  trainingProgramsCreateTrainingProgram: Ck,
  trainingProgramsDeleteTrainingProgram: yk,
  trainingProgramsGetTrainingProgramById: Tk,
  trainingProgramsGetTrainingPrograms: mk,
  trainingProgramsGetTrainingProgramsCount: Sk,
  trainingProgramsUpdateTrainingProgram: Pk
}, Symbol.toStringTag, { value: "Module" })), _ = $(x()), fk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}",
  ...e
}), Ik = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/RequiredPermissions",
  ...e
}), jk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedPermissions",
  ...e
}), Ak = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedRoles",
  ...e
}), Gk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedRoles/{securityRoleId}/GrantedPermissions",
  ...e
}), Lk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/Auth/Checker/IsAuthenticated",
  ...e
}), Rk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/version",
  ...e
}), bk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/health",
  ...e
}), kk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/hello",
  ...e
}), Mk = (e) => (e.client ?? _).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wk = (e) => (e.client ?? _).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ek = (e) => (e.client ?? _).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dk = (e) => (e.client ?? _).get({
  url: "/confirmEmail",
  ...e
}), Bk = (e) => (e.client ?? _).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $k = (e) => (e.client ?? _).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xk = (e) => (e.client ?? _).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fk = (e) => (e.client ?? _).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/manage/info",
  ...e
}), Ok = (e) => (e.client ?? _).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Hk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), qk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Vk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), _k = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/OAuth/WhoAmI",
  ...e
}), Jk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/api/v2/OAuth/Token",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/Permissions",
  ...e
}), Qk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/OAuth/SignIn",
  ...e
}), Nk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/api/v2/OAuth/SignIn",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/{applicationId}/Keys",
  ...e
}), Yk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/{tenantId}/{applicationId}/.Well-Known/OpenId-Configuration",
  ...e
}), Zk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/IdentityService/Resource/message",
  ...e
}), Xk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/connect/userinfo",
  ...e
}), pk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/connect/userinfo",
  ...e
}), tCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applicationsGetApplication: fk,
  applicationsGetGrantedEnrollmentPermissions: Gk,
  applicationsGetGrantedTenantPermissions: jk,
  applicationsGetGrantedTenantRoles: Ak,
  applicationsGetRequiredPermissions: Ik,
  checkerIsAuthenticated: Lk,
  oAuthCheckPasswordSignIn: Qk,
  oAuthGet: _k,
  oAuthGetJwKs: Kk,
  oAuthGetOpenIdConfiguration: Yk,
  oAuthGetPermissions: zk,
  oAuthPasswordSignIn: Nk,
  oAuthToken: Jk,
  platformGetHealth: bk,
  platformGetHello: kk,
  platformGetManageInfo: Uk,
  platformGetVersion: Rk,
  platformMapIdentityApiConfirmEmail: Dk,
  platformPostAccountLogout: Hk,
  platformPostAccountManageDownloadPersonalData: Vk,
  platformPostAccountManageLinkExternalLogin: qk,
  platformPostAccountPerformExternalLogin: Wk,
  platformPostForgotPassword: $k,
  platformPostLogin: wk,
  platformPostManage2Fa: Fk,
  platformPostManageInfo: Ok,
  platformPostRefresh: Ek,
  platformPostRegister: Mk,
  platformPostResendConfirmationEmail: Bk,
  platformPostResetPassword: xk,
  resourceGetMessage: Zk,
  userInfoGetConnectUserinfo: Xk,
  userInfoPostConnectUserinfo: pk
}, Symbol.toStringTag, { value: "Module" })), m = $(x()), ok = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics/{id}",
  ...e
}), aM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Pools",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Workers/{workerId}/Activate",
  ...e
}), lM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Workers/{workerId}/Heartbeat",
  ...e
}), nM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Claim",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/WorkOrders/{workOrderId}/Cancelled",
  ...e
}), iM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Execute",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Complete",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Fault",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders/{id}",
  ...e
}), mM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/Agents/State",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Agents/{agentId}/Card",
  ...e
}), SM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiModelPrices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AiModelPrices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiModelPrices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiModelPrices/Effective",
  ...e
}), fM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiModelPrices/{id}",
  ...e
}), IM = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/AiModelPrices/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jM = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/api/v2/IntelligenceService/AiProviders",
  ...e
}), AM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiProviders/Availability",
  ...e
}), GM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns/{id}",
  ...e
}), bM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsage/Summary",
  ...e
}), kM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations/{id}",
  ...e
}), EM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/Disclosure",
  ...e
}), DM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/Consent",
  ...e
}), BM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/OptIn",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $M = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/OptOut",
  ...e
}), xM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities",
  ...e
}), FM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities/Count",
  ...e
}), UM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities/{key}",
  ...e
}), OM = (e) => (e.client ?? m).post({
  ...u,
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Attachments",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), WM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VM = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e
}), _M = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e
}), JM = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/{id}",
  ...e
}), KM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/PendingApprovals",
  ...e
}), YM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/ContextUsage",
  ...e
}), ZM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XM = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pM = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oM = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e
}), ew = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e
}), rw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/PermissionReadiness",
  ...e
}), tw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/BuiltInCapabilities",
  ...e
}), cw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Permissions/Grant",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Permissions/Revoke",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sw = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e
}), dw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e
}), vw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cw = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e
}), Sw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e
}), yw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iw = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e
}), jw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e
}), Aw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Validate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Install",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Update",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Uninstall",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/InstalledState",
  ...e
}), Mw = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/version",
  ...e
}), ww = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/health",
  ...e
}), Ew = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/hello",
  ...e
}), Dw = (e) => (e.client ?? m).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bw = (e) => (e.client ?? m).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $w = (e) => (e.client ?? m).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xw = (e) => (e.client ?? m).get({
  url: "/confirmEmail",
  ...e
}), Fw = (e) => (e.client ?? m).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uw = (e) => (e.client ?? m).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ow = (e) => (e.client ?? m).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ww = (e) => (e.client ?? m).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hw = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/manage/info",
  ...e
}), qw = (e) => (e.client ?? m).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vw = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _w = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Jw = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zw = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Qw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/Agents/{agentId}/agui",
  ...e
}), cCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  agentExecutionDiagnosticsGetDiagnosticById: rM,
  agentExecutionDiagnosticsGetDiagnostics: ok,
  agentExecutionDiagnosticsGetDiagnosticsCount: eM,
  agentRuntimeFabricActivate: cM,
  agentRuntimeFabricClaim: nM,
  agentRuntimeFabricComplete: sM,
  agentRuntimeFabricCreatePool: aM,
  agentRuntimeFabricExecute: iM,
  agentRuntimeFabricFault: dM,
  agentRuntimeFabricGetCancellation: uM,
  agentRuntimeFabricHeartbeat: lM,
  agentRuntimeFabricRegister: tM,
  agentRuntimeStatusGetWorkOrderById: hM,
  agentRuntimeStatusGetWorkOrders: vM,
  agentRuntimeStatusGetWorkOrdersCount: gM,
  agentStatesGetAgentCard: CM,
  agentStatesGetAgentStates: mM,
  aiModelPricesCreateAiModelPrice: yM,
  aiModelPricesGetAiModelPriceById: fM,
  aiModelPricesGetAiModelPrices: SM,
  aiModelPricesGetAiModelPricesCount: TM,
  aiModelPricesGetEffectiveAiModelPrice: PM,
  aiModelPricesUpdateAiModelPrice: IM,
  aiProvidersGetAiProviderAvailability: AM,
  aiProvidersGetAiProviders: jM,
  aiRunsGetAiRunById: RM,
  aiRunsGetAiRuns: GM,
  aiRunsGetAiRunsCount: LM,
  aiUsageGetAiUsageSummary: bM,
  aiUsageObservationsGetAiUsageObservationById: wM,
  aiUsageObservationsGetAiUsageObservations: kM,
  aiUsageObservationsGetAiUsageObservationsCount: MM,
  approvalAdviceGetApprovalAdviceConsent: DM,
  approvalAdviceGetApprovalAdviceDisclosure: EM,
  approvalAdviceOptInApprovalAdvice: BM,
  approvalAdviceOptOutApprovalAdvice: $M,
  capabilitiesGetCapabilities: xM,
  capabilitiesGetCapabilitiesCount: FM,
  capabilitiesGetCapabilityByKey: UM,
  cognitiveAgentConversationAttachmentsUploadCognitiveAgentConversationAttachment: OM,
  cognitiveAgentConversationsCreateCognitiveAgentConversation: HM,
  cognitiveAgentConversationsDeleteCognitiveAgentConversation: VM,
  cognitiveAgentConversationsGetCognitiveAgentConversationById: _M,
  cognitiveAgentConversationsGetCognitiveAgentConversations: WM,
  cognitiveAgentConversationsGetCognitiveAgentConversationsCount: qM,
  cognitiveAgentConversationsUpdateCognitiveAgentConversation: JM,
  cognitiveAgentMessagesGetCognitiveAgentMessageById: NM,
  cognitiveAgentMessagesGetCognitiveAgentMessages: zM,
  cognitiveAgentMessagesGetCognitiveAgentMessagesCount: QM,
  cognitiveAgentMessagesGetConversationContextUsage: YM,
  cognitiveAgentMessagesGetConversationPendingApprovals: KM,
  cognitiveAgentSkillsCreateCognitiveAgentSkill: uw,
  cognitiveAgentSkillsDeleteCognitiveAgentSkill: sw,
  cognitiveAgentSkillsGetCognitiveAgentSkillById: dw,
  cognitiveAgentSkillsGetCognitiveAgentSkills: nw,
  cognitiveAgentSkillsGetCognitiveAgentSkillsCount: iw,
  cognitiveAgentSkillsUpdateCognitiveAgentSkill: vw,
  cognitiveAgentVariablesCreateCognitiveAgentVariable: hw,
  cognitiveAgentVariablesDeleteCognitiveAgentVariable: Cw,
  cognitiveAgentVariablesGetCognitiveAgentVariableById: Sw,
  cognitiveAgentVariablesGetCognitiveAgentVariables: gw,
  cognitiveAgentVariablesGetCognitiveAgentVariablesCount: mw,
  cognitiveAgentVariablesUpdateCognitiveAgentVariable: yw,
  cognitiveAgentsCreateCognitiveAgent: XM,
  cognitiveAgentsDeleteCognitiveAgent: oM,
  cognitiveAgentsGetAgentPermissionReadiness: aw,
  cognitiveAgentsGetBuiltInAgentCapabilities: tw,
  cognitiveAgentsGetCognitiveAgentById: ew,
  cognitiveAgentsGetCognitiveAgents: ZM,
  cognitiveAgentsGetCognitiveAgentsCount: pM,
  cognitiveAgentsGrantAgentToolPermissions: cw,
  cognitiveAgentsRevokeAgentToolPermissions: lw,
  cognitiveAgentsUpdateCognitiveAgent: rw,
  cognitiveSkillsCreateCognitiveSkill: Pw,
  cognitiveSkillsDeleteCognitiveSkill: Iw,
  cognitiveSkillsGetCognitiveSkillById: jw,
  cognitiveSkillsGetCognitiveSkills: Tw,
  cognitiveSkillsGetCognitiveSkillsCount: fw,
  cognitiveSkillsUpdateCognitiveSkill: Aw,
  definitionDistributionGetInstalledDefinitionState: kw,
  definitionDistributionInstallDefinition: Lw,
  definitionDistributionUninstallDefinition: bw,
  definitionDistributionUpdateDefinition: Rw,
  definitionDistributionValidateDefinition: Gw,
  platformGetHealth: ww,
  platformGetHello: Ew,
  platformGetManageInfo: Hw,
  platformGetVersion: Mw,
  platformInvokeAgentSurface: Qw,
  platformMapIdentityApiConfirmEmail: xw,
  platformPostAccountLogout: _w,
  platformPostAccountManageDownloadPersonalData: zw,
  platformPostAccountManageLinkExternalLogin: Jw,
  platformPostAccountPerformExternalLogin: Vw,
  platformPostForgotPassword: Uw,
  platformPostLogin: Bw,
  platformPostManage2Fa: Ww,
  platformPostManageInfo: qw,
  platformPostRefresh: $w,
  platformPostRegister: Dw,
  platformPostResendConfirmationEmail: Fw,
  platformPostResetPassword: Ow
}, Symbol.toStringTag, { value: "Module" })), Z = $(x()), Nw = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/version",
  ...e
}), Kw = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/health",
  ...e
}), Yw = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/hello",
  ...e
}), Zw = (e) => (e.client ?? Z).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xw = (e) => (e.client ?? Z).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pw = (e) => (e.client ?? Z).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ow = (e) => (e.client ?? Z).get({
  url: "/confirmEmail",
  ...e
}), eE = (e) => (e.client ?? Z).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rE = (e) => (e.client ?? Z).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aE = (e) => (e.client ?? Z).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tE = (e) => (e.client ?? Z).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cE = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/manage/info",
  ...e
}), lE = (e) => (e.client ?? Z).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), uE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), iE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), dE = (e) => (e.client ?? Z).get({
  url: "/api/v2/InventoryService/Inventory/{stockItemId}/Details",
  ...e
}), lCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inventoryGetInventoryDetails: dE,
  platformGetHealth: Kw,
  platformGetHello: Yw,
  platformGetManageInfo: cE,
  platformGetVersion: Nw,
  platformMapIdentityApiConfirmEmail: ow,
  platformPostAccountLogout: uE,
  platformPostAccountManageDownloadPersonalData: sE,
  platformPostAccountManageLinkExternalLogin: iE,
  platformPostAccountPerformExternalLogin: nE,
  platformPostForgotPassword: rE,
  platformPostLogin: Xw,
  platformPostManage2Fa: tE,
  platformPostManageInfo: lE,
  platformPostRefresh: pw,
  platformPostRegister: Zw,
  platformPostResendConfirmationEmail: eE,
  platformPostResetPassword: aE
}, Symbol.toStringTag, { value: "Module" })), f = $(x()), vE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Coupons/Recognition",
  ...e
}), gE = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/version",
  ...e
}), hE = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/health",
  ...e
}), mE = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/hello",
  ...e
}), CE = (e) => (e.client ?? f).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SE = (e) => (e.client ?? f).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yE = (e) => (e.client ?? f).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TE = (e) => (e.client ?? f).get({
  url: "/confirmEmail",
  ...e
}), PE = (e) => (e.client ?? f).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fE = (e) => (e.client ?? f).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IE = (e) => (e.client ?? f).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jE = (e) => (e.client ?? f).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AE = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/manage/info",
  ...e
}), GE = (e) => (e.client ?? f).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LE = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), RE = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bE = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), kE = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), ME = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/EstablishmentRepost",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EE = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $E = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Extended",
  ...e
}), FE = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e
}), UE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e
}), OE = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WE = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HE = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Calculate",
  ...e
}), qE = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Issue",
  ...e
}), VE = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/CreditNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _E = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/DebitNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/CreditableAmount",
  ...e
}), zE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/IssuedUnnumbered",
  ...e
}), QE = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/IssuedAtBackfill",
  ...e
}), NE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KE = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZE = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e
}), XE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e
}), pE = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oE = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Calculate",
  ...e
}), rD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cD = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e
}), lD = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dD = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e
}), vD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e
}), gD = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yD = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e
}), TD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e
}), PD = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ID = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Payments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TotalsAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TaxesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/DiscountsAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TaxBasesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/GlobalSurchargesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/SalesInvoices/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/PurchaseInvoices/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ED = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  couponsGetBillingCouponRecognition: vE,
  invoiceEstablishmentRepostRepostInvoiceEstablishment: ME,
  invoicesAggregateInvoiceDiscounts: LD,
  invoicesAggregateInvoiceGlobalSurcharges: bD,
  invoicesAggregateInvoiceTaxBases: RD,
  invoicesAggregateInvoiceTaxes: GD,
  invoicesAggregateInvoiceTotals: AD,
  invoicesBackfillInvoiceIssuedAt: QE,
  invoicesCalculateInvoice: HE,
  invoicesCalculateInvoiceLine: eD,
  invoicesCreateCreditNote: VE,
  invoicesCreateDebitNote: _E,
  invoicesCreateInvoice: EE,
  invoicesCreateInvoiceAdjustment: iD,
  invoicesCreateInvoiceLine: KE,
  invoicesCreateInvoiceLineTax: aD,
  invoicesCreateInvoiceReference: CD,
  invoicesDeleteInvoice: FE,
  invoicesDeleteInvoiceAdjustment: dD,
  invoicesDeleteInvoiceLine: ZE,
  invoicesDeleteInvoiceLineTax: cD,
  invoicesDeleteInvoiceReference: yD,
  invoicesGetExtendedInvoice: xE,
  invoicesGetExtendedInvoices: BE,
  invoicesGetExtendedInvoicesCount: $E,
  invoicesGetInvoice: UE,
  invoicesGetInvoiceAdjustment: vD,
  invoicesGetInvoiceAdjustments: uD,
  invoicesGetInvoiceAdjustmentsCount: sD,
  invoicesGetInvoiceCreditableAmount: JE,
  invoicesGetInvoiceLine: XE,
  invoicesGetInvoiceLineTaxes: rD,
  invoicesGetInvoiceLineTaxesCount: tD,
  invoicesGetInvoiceLines: NE,
  invoicesGetInvoiceLinesCount: YE,
  invoicesGetInvoicePayments: ID,
  invoicesGetInvoicePaymentsCount: jD,
  invoicesGetInvoiceReference: TD,
  invoicesGetInvoiceReferences: mD,
  invoicesGetInvoiceReferencesCount: SD,
  invoicesGetInvoices: wE,
  invoicesGetInvoicesCount: DE,
  invoicesGetPurchaseInvoicesSum: MD,
  invoicesGetSalesInvoicesSum: kD,
  invoicesGetUnnumberedIssuingTenants: zE,
  invoicesIssueInvoice: qE,
  invoicesPatchInvoice: OE,
  invoicesPatchInvoiceAdjustment: gD,
  invoicesPatchInvoiceLine: pE,
  invoicesPatchInvoiceLineTax: lD,
  invoicesPatchInvoiceReference: PD,
  invoicesPreviewInvoiceEmail: ED,
  invoicesSendInvoiceEmail: wD,
  invoicesUpdateInvoice: WE,
  invoicesUpdateInvoiceAdjustment: hD,
  invoicesUpdateInvoiceLine: oE,
  invoicesUpdateInvoiceLineTax: nD,
  invoicesUpdateInvoiceReference: fD,
  platformGetHealth: hE,
  platformGetHello: mE,
  platformGetManageInfo: AE,
  platformGetVersion: gE,
  platformMapIdentityApiConfirmEmail: TE,
  platformPostAccountLogout: RE,
  platformPostAccountManageDownloadPersonalData: kE,
  platformPostAccountManageLinkExternalLogin: bE,
  platformPostAccountPerformExternalLogin: LE,
  platformPostForgotPassword: fE,
  platformPostLogin: SE,
  platformPostManage2Fa: jE,
  platformPostManageInfo: GE,
  platformPostRefresh: yE,
  platformPostRegister: CE,
  platformPostResendConfirmationEmail: PE,
  platformPostResetPassword: IE
}, Symbol.toStringTag, { value: "Module" })), a = $(x()), DD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $D = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e
}), FD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e
}), UD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignmentComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e
}), _D = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e
}), JD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ND = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e
}), ZD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e
}), XD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignmentTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e
}), tB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e
}), cB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e
}), dB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e
}), vB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates",
  ...e
}), mB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Count",
  ...e
}), SB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e
}), yB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e
}), TB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template",
  ...e
}), IB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCertificates/Template",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e
}), AB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e
}), GB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template/Count",
  ...e
}), bB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e
}), EB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e
}), DB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $B = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCollections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e
}), OB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e
}), WB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _B = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e
}), JB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e
}), zB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ContentGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e
}), oB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e
}), e$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/Student/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseFiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e
}), u$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e
}), i$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseForums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e
}), m$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e
}), C$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseGradingRubrics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e
}), I$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e
}), j$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseHandouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e
}), k$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e
}), M$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseLibraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e
}), x$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e
}), F$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CoursePages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e
}), V$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e
}), _$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e
}), Y$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e
}), Z$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ex = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rx = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e
}), ax = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e
}), tx = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cx = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lx = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Courses/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nx = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Courses/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ux = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/Public/{courseId}",
  ...e
}), ix = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Wikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Wikis/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Updates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Updates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Sections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Sections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Assignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Px = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Assignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ix = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Categories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Cohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ax = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Cohorts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Files",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Files/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Forums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Forums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Libraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Libraries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Pages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ex = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Pages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ProblemSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $x = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Handouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Handouts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/UnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ux = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/UnitComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ox = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Students",
  ...e
}), Wx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Students/Count",
  ...e
}), Hx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Instructors",
  ...e
}), qx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Instructors/Count",
  ...e
}), Vx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _x = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jx = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseSections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qx = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e
}), Nx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e
}), Kx = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yx = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xx = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseTeamMemberships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), px = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ox = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e
}), eF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e
}), rF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e
}), uF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e
}), iF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e
}), mF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e
}), CF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUpdates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e
}), IF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e
}), jF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseWikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e
}), kF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e
}), MF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/version",
  ...e
}), DF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/health",
  ...e
}), BF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/hello",
  ...e
}), $F = (e) => (e.client ?? a).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xF = (e) => (e.client ?? a).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FF = (e) => (e.client ?? a).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UF = (e) => (e.client ?? a).get({
  url: "/confirmEmail",
  ...e
}), OF = (e) => (e.client ?? a).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WF = (e) => (e.client ?? a).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HF = (e) => (e.client ?? a).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qF = (e) => (e.client ?? a).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/manage/info",
  ...e
}), _F = (e) => (e.client ?? a).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), QF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), NF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), KF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles",
  ...e
}), YF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/InstructorProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles/Count",
  ...e
}), XF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e
}), pF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e
}), oF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eU = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/StudentProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/StudentProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Enrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Courses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Courses/{courseId}/Enrollment",
  ...e
}), dU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorCourses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates/{courseCertificateId}",
  ...e
}), mU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Assignments/{courseAssignmentId}",
  ...e
}), CU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/ProblemSets/{courseProblemSetId}",
  ...e
}), SU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/AverageScore",
  ...e
}), TU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/HoursCompleted",
  ...e
}), PU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/PendingTasks",
  ...e
}), fU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles",
  ...e
}), IU = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/StudentProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/Count",
  ...e
}), AU = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e
}), GU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e
}), LU = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RU = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}/Average",
  ...e
}), kU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}/HoursCompleted",
  ...e
}), uCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  courseArticlesCreateCourseArticle: BD,
  courseArticlesDeleteCourseArticle: xD,
  courseArticlesGetCourseArticleById: FD,
  courseArticlesGetCourseArticles: DD,
  courseArticlesGetCourseArticlesCount: $D,
  courseArticlesPatchCourseArticle: UD,
  courseArticlesUpdateCourseArticle: OD,
  courseAssignmentComponentsCreateCourseAssignmentComponent: HD,
  courseAssignmentComponentsDeleteCourseAssignmentComponent: VD,
  courseAssignmentComponentsGetCourseAssignmentComponentById: _D,
  courseAssignmentComponentsGetCourseAssignmentComponents: WD,
  courseAssignmentComponentsGetCourseAssignmentComponentsCount: qD,
  courseAssignmentComponentsPatchCourseAssignmentComponent: JD,
  courseAssignmentComponentsUpdateCourseAssignmentComponent: zD,
  courseAssignmentTypesCreateCourseAssignmentType: eB,
  courseAssignmentTypesDeleteCourseAssignmentType: aB,
  courseAssignmentTypesGetCourseAssignmentTypeById: tB,
  courseAssignmentTypesGetCourseAssignmentTypes: oD,
  courseAssignmentTypesGetCourseAssignmentTypesCount: rB,
  courseAssignmentTypesPatchCourseAssignmentType: cB,
  courseAssignmentTypesUpdateCourseAssignmentType: lB,
  courseAssignmentsCreateCourseAssignment: ND,
  courseAssignmentsDeleteCourseAssignment: YD,
  courseAssignmentsGetCourseAssignmentById: ZD,
  courseAssignmentsGetCourseAssignments: QD,
  courseAssignmentsGetCourseAssignmentsCount: KD,
  courseAssignmentsPatchCourseAssignment: XD,
  courseAssignmentsUpdateCourseAssignment: pD,
  courseCategoriesCreateCourseCategory: uB,
  courseCategoriesDeleteCourseCategory: sB,
  courseCategoriesGetCourseCategories: nB,
  courseCategoriesGetCourseCategoriesCount: iB,
  courseCategoriesGetCourseCategoryById: dB,
  courseCategoriesPatchCourseCategory: vB,
  courseCategoriesUpdateCourseCategory: gB,
  courseCertificatesCreateCourseCertificate: mB,
  courseCertificatesCreateCourseCertificateTemplate: IB,
  courseCertificatesDeleteCourseCertificate: SB,
  courseCertificatesDeleteCourseCertificateTemplate: jB,
  courseCertificatesGetCourseCertificate: yB,
  courseCertificatesGetCourseCertificateTemplate: AB,
  courseCertificatesGetCourseCertificateTemplates: fB,
  courseCertificatesGetCourseCertificateTemplatesCount: RB,
  courseCertificatesGetCourseCertificates: hB,
  courseCertificatesGetCourseCertificatesCount: CB,
  courseCertificatesPatchCourseCertificate: TB,
  courseCertificatesPatchCourseCertificateTemplate: GB,
  courseCertificatesUpdateCourseCertificate: PB,
  courseCertificatesUpdateCourseCertificateTemplate: LB,
  courseCohortsCreateCourseCohort: kB,
  courseCohortsDeleteCourseCohort: wB,
  courseCohortsGetCourseCohortById: EB,
  courseCohortsGetCourseCohorts: bB,
  courseCohortsGetCourseCohortsCount: MB,
  courseCohortsPatchCourseCohort: DB,
  courseCohortsUpdateCourseCohort: BB,
  courseCollectionsCreateCourseCollection: xB,
  courseCollectionsDeleteCourseCollection: UB,
  courseCollectionsGetCourseCollectionById: OB,
  courseCollectionsGetCourseCollections: $B,
  courseCollectionsGetCourseCollectionsCount: FB,
  courseCollectionsUpdateCourseCollection: WB,
  courseContentGroupsCreateCourseContentGroup: qB,
  courseContentGroupsDeleteCourseContentGroup: _B,
  courseContentGroupsGetCourseContentGroupById: JB,
  courseContentGroupsGetCourseContentGroups: HB,
  courseContentGroupsGetCourseContentGroupsByCourse: NB,
  courseContentGroupsGetCourseContentGroupsByCourseCount: KB,
  courseContentGroupsGetCourseContentGroupsCount: VB,
  courseContentGroupsPatchCourseContentGroup: zB,
  courseContentGroupsUpdateCourseContentGroup: QB,
  courseEnrollmentsCreateCourseEnrollment: ZB,
  courseEnrollmentsDeleteCourseEnrollment: pB,
  courseEnrollmentsGetCourseEnrollment: oB,
  courseEnrollmentsGetEnrollments: YB,
  courseEnrollmentsGetEnrollmentsCount: XB,
  courseEnrollmentsGetStudentCourseEnrollments: a$,
  courseEnrollmentsPatchCourseEnrollment: e$,
  courseEnrollmentsUpdateCourseEnrollment: r$,
  courseFilesCreateCourseFile: c$,
  courseFilesDeleteCourseFile: n$,
  courseFilesGetCourseFileById: u$,
  courseFilesGetCourseFiles: t$,
  courseFilesGetCourseFilesCount: l$,
  courseFilesPatchCourseFile: i$,
  courseFilesUpdateCourseFile: s$,
  courseForumsCreateCourseForum: v$,
  courseForumsDeleteCourseForum: h$,
  courseForumsGetCourseForumById: m$,
  courseForumsGetCourseForums: d$,
  courseForumsGetCourseForumsCount: g$,
  courseForumsPatchCourseForum: C$,
  courseForumsUpdateCourseForum: S$,
  courseGradingRubricsCreateCourseGradingRubric: T$,
  courseGradingRubricsDeleteCourseGradingRubric: f$,
  courseGradingRubricsGetCourseGradingRubricById: I$,
  courseGradingRubricsGetCourseGradingRubrics: y$,
  courseGradingRubricsGetCourseGradingRubricsCount: P$,
  courseGradingRubricsPatchCourseGradingRubric: j$,
  courseGradingRubricsUpdateCourseGradingRubric: A$,
  courseHandoutsCreateCourseHandout: L$,
  courseHandoutsDeleteCourseHandout: b$,
  courseHandoutsGetCourseHandoutById: k$,
  courseHandoutsGetCourseHandouts: G$,
  courseHandoutsGetCourseHandoutsCount: R$,
  courseHandoutsPatchCourseHandout: M$,
  courseHandoutsUpdateCourseHandout: w$,
  courseLibrariesCreateCourseLibrary: D$,
  courseLibrariesDeleteCourseLibrary: $$,
  courseLibrariesGetCourseLibraries: E$,
  courseLibrariesGetCourseLibrariesCount: B$,
  courseLibrariesGetCourseLibraryById: x$,
  courseLibrariesPatchCourseLibrary: F$,
  courseLibrariesUpdateCourseLibrary: U$,
  coursePagesCreateCoursePage: W$,
  coursePagesDeleteCoursePage: q$,
  coursePagesGetCoursePageById: V$,
  coursePagesGetCoursePages: O$,
  coursePagesGetCoursePagesCount: H$,
  coursePagesPatchCoursePage: _$,
  coursePagesUpdateCoursePage: J$,
  courseProblemSetsCreateCourseProblemSet: Q$,
  courseProblemSetsDeleteCourseProblemSet: K$,
  courseProblemSetsGetCourseProblemSetById: Y$,
  courseProblemSetsGetCourseProblemSets: z$,
  courseProblemSetsGetCourseProblemSetsCount: N$,
  courseProblemSetsPatchCourseProblemSet: Z$,
  courseProblemSetsUpdateCourseProblemSet: X$,
  courseSectionsCreateCourseSection: Jx,
  courseSectionsDeleteCourseSection: Qx,
  courseSectionsGetCourseSectionById: Nx,
  courseSectionsGetCourseSections: _x,
  courseSectionsGetCourseSectionsCount: zx,
  courseSectionsPatchCourseSection: Kx,
  courseSectionsUpdateCourseSection: Yx,
  courseTeamMembershipsCreateCourseTeamMembership: Xx,
  courseTeamMembershipsDeleteCourseTeamMembership: ox,
  courseTeamMembershipsGetCourseTeamMembershipById: eF,
  courseTeamMembershipsGetCourseTeamMemberships: Zx,
  courseTeamMembershipsGetCourseTeamMembershipsCount: px,
  courseTeamMembershipsPatchCourseTeamMembership: rF,
  courseTeamMembershipsUpdateCourseTeamMembership: aF,
  courseUnitComponentsCreateCourseUnitComponent: cF,
  courseUnitComponentsDeleteCourseUnitComponent: nF,
  courseUnitComponentsGetCourseUnitComponentById: uF,
  courseUnitComponentsGetCourseUnitComponents: tF,
  courseUnitComponentsGetCourseUnitComponentsCount: lF,
  courseUnitComponentsPatchCourseUnitComponent: iF,
  courseUnitComponentsUpdateCourseUnitComponent: sF,
  courseUnitsCreateCourseUnit: vF,
  courseUnitsDeleteCourseUnit: hF,
  courseUnitsGetCourseUnitById: mF,
  courseUnitsGetCourseUnits: dF,
  courseUnitsGetCourseUnitsCount: gF,
  courseUnitsPatchCourseUnit: CF,
  courseUnitsUpdateCourseUnit: SF,
  courseUpdatesCreateCourseUpdate: TF,
  courseUpdatesDeleteCourseUpdate: fF,
  courseUpdatesGetCourseUpdateById: IF,
  courseUpdatesGetCourseUpdates: yF,
  courseUpdatesGetCourseUpdatesCount: PF,
  courseUpdatesPatchCourseUpdate: jF,
  courseUpdatesUpdateCourseUpdate: AF,
  courseWikisCreateCourseWiki: LF,
  courseWikisDeleteCourseWiki: bF,
  courseWikisGetCourseWikiById: kF,
  courseWikisGetCourseWikis: GF,
  courseWikisGetCourseWikisCount: RF,
  courseWikisPatchCourseWiki: MF,
  courseWikisUpdateCourseWiki: wF,
  coursesCreateCourse: o$,
  coursesDeleteCourse: rx,
  coursesGetCourseArticlesByCourseWiki: dx,
  coursesGetCourseArticlesByCourseWikiCount: vx,
  coursesGetCourseAssignmentsByCourse: Tx,
  coursesGetCourseAssignmentsByCourseCount: Px,
  coursesGetCourseById: ax,
  coursesGetCourseCategoriesByCourse: fx,
  coursesGetCourseCategoriesByCourseCount: Ix,
  coursesGetCourseCohortsByCourse: jx,
  coursesGetCourseCohortsByCourseCount: Ax,
  coursesGetCourseEnrollmentsByCourse: Vx,
  coursesGetCourseFilesByCourse: Gx,
  coursesGetCourseFilesByCourseCount: Lx,
  coursesGetCourseForumsByCourse: Rx,
  coursesGetCourseForumsByCourseCount: bx,
  coursesGetCourseHandoutsByCourse: $x,
  coursesGetCourseHandoutsByCourseCount: xx,
  coursesGetCourseLibrariesByCourse: kx,
  coursesGetCourseLibrariesByCourseCount: Mx,
  coursesGetCoursePagesByCourse: wx,
  coursesGetCoursePagesByCourseCount: Ex,
  coursesGetCourseProblemSetsByCourse: Dx,
  coursesGetCourseProblemSetsByCourseCount: Bx,
  coursesGetCourseSectionsByCourse: mx,
  coursesGetCourseSectionsByCourseCount: Cx,
  coursesGetCourseUnitComponentsByCourse: Fx,
  coursesGetCourseUnitComponentsByCourseCount: Ux,
  coursesGetCourseUnitsBySection: Sx,
  coursesGetCourseUnitsBySectionCount: yx,
  coursesGetCourseUpdatesByCourse: gx,
  coursesGetCourseUpdatesByCourseCount: hx,
  coursesGetCourseWikisByCourse: ix,
  coursesGetCourseWikisByCourseCount: sx,
  coursesGetCourses: p$,
  coursesGetCoursesCount: ex,
  coursesGetInstructorProfilesByCourse: Hx,
  coursesGetInstructorProfilesByCourseCount: qx,
  coursesGetPublicCourseById: ux,
  coursesGetPublicCourses: lx,
  coursesGetPublicCoursesCount: nx,
  coursesGetStudentProfilesByCourse: Ox,
  coursesGetStudentProfilesByCourseCount: Wx,
  coursesPatchCourse: tx,
  coursesUpdateCourse: cx,
  instructorProfilesDeleteInstructorProfilesByInstructorProfileId: XF,
  instructorProfilesGetInstructorProfiles: KF,
  instructorProfilesGetInstructorProfilesByInstructorProfileId: pF,
  instructorProfilesGetInstructorProfilesCount: ZF,
  instructorProfilesPatchInstructorProfilesByInstructorProfileId: oF,
  instructorProfilesPostInstructorProfiles: YF,
  instructorProfilesPutInstructorProfilesByInstructorProfileId: eU,
  meGetMyAverageScore: yU,
  meGetMyCertificate: hU,
  meGetMyCertificates: gU,
  meGetMyCertificatesCount: SU,
  meGetMyCourseAssignment: mU,
  meGetMyCourseEnrollmentStatus: sU,
  meGetMyCourseProblemSet: CU,
  meGetMyEnrollments: lU,
  meGetMyEnrollmentsCount: nU,
  meGetMyHoursCompleted: TU,
  meGetMyInstructorCourses: dU,
  meGetMyInstructorCoursesCount: vU,
  meGetMyInstructorProfiles: tU,
  meGetMyInstructorProfilesCount: cU,
  meGetMyPendingTaskCount: PU,
  meGetMyStudentCourses: uU,
  meGetMyStudentCoursesCount: iU,
  meGetMyStudentProfiles: rU,
  meGetMyStudentProfilesCount: aU,
  platformGetHealth: DF,
  platformGetHello: BF,
  platformGetManageInfo: VF,
  platformGetVersion: EF,
  platformMapIdentityApiConfirmEmail: UF,
  platformPostAccountLogout: zF,
  platformPostAccountManageDownloadPersonalData: NF,
  platformPostAccountManageLinkExternalLogin: QF,
  platformPostAccountPerformExternalLogin: JF,
  platformPostForgotPassword: WF,
  platformPostLogin: xF,
  platformPostManage2Fa: qF,
  platformPostManageInfo: _F,
  platformPostRefresh: FF,
  platformPostRegister: $F,
  platformPostResendConfirmationEmail: OF,
  platformPostResetPassword: HF,
  studentProfilesDeleteStudentProfilesByStudentProfileId: AU,
  studentProfilesGetStudentProfiles: fU,
  studentProfilesGetStudentProfilesByStudentProfileId: GU,
  studentProfilesGetStudentProfilesByStudentProfileIdAverage: bU,
  studentProfilesGetStudentProfilesByStudentProfileIdHoursCompleted: kU,
  studentProfilesGetStudentProfilesCount: jU,
  studentProfilesPatchStudentProfilesByStudentProfileId: LU,
  studentProfilesPostStudentProfiles: IU,
  studentProfilesPutStudentProfilesByStudentProfileId: RU
}, Symbol.toStringTag, { value: "Module" })), R = $(x()), MU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/version",
  ...e
}), wU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/health",
  ...e
}), EU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/hello",
  ...e
}), DU = (e) => (e.client ?? R).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BU = (e) => (e.client ?? R).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $U = (e) => (e.client ?? R).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xU = (e) => (e.client ?? R).get({
  url: "/confirmEmail",
  ...e
}), FU = (e) => (e.client ?? R).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UU = (e) => (e.client ?? R).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OU = (e) => (e.client ?? R).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WU = (e) => (e.client ?? R).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/manage/info",
  ...e
}), qU = (e) => (e.client ?? R).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _U = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), JU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), QU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NU = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YU = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e
}), ZU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e
}), XU = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pU = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseFeatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e
}), tO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e
}), cO = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/Licenses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e
}), dO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e
}), vO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e
}), SO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e
}), yO = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicensingCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e
}), AO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e
}), GO = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Usage",
  ...e
}), bO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Usage/Meters",
  ...e
}), kO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage",
  ...e
}), MO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}",
  ...e
}), wO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}/LimitOverrides",
  ...e
}), EO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}/LimitOverrides",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), iCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  licenseAttributesCreateLicenseAttribute: NU,
  licenseAttributesDeleteLicenseAttribute: YU,
  licenseAttributesGetLicenseAttributeById: ZU,
  licenseAttributesGetLicenseAttributes: QU,
  licenseAttributesGetLicenseAttributesCount: KU,
  licenseAttributesPatchLicenseAttribute: XU,
  licenseAttributesUpdateLicenseAttribute: pU,
  licenseFeaturesCreateLicenseFeature: eO,
  licenseFeaturesDeleteLicenseFeature: aO,
  licenseFeaturesGetLicenseFeatureById: tO,
  licenseFeaturesGetLicenseFeatures: oU,
  licenseFeaturesGetLicenseFeaturesCount: rO,
  licenseFeaturesPatchLicenseFeature: cO,
  licenseFeaturesUpdateLicenseFeature: lO,
  licenseTypesCreateLicenseType: hO,
  licenseTypesDeleteLicenseType: CO,
  licenseTypesGetLicenseTypeById: SO,
  licenseTypesGetLicenseTypes: gO,
  licenseTypesGetLicenseTypesCount: mO,
  licenseTypesPatchLicenseType: yO,
  licenseTypesUpdateLicenseType: TO,
  licensesCreateLicense: uO,
  licensesDeleteLicense: sO,
  licensesGetLicenseById: dO,
  licensesGetLicenses: nO,
  licensesGetLicensesCount: iO,
  licensesUpdateLicense: vO,
  licensingCertificatesCreateLicensingCertificate: fO,
  licensingCertificatesDeleteLicensingCertificate: jO,
  licensingCertificatesGetLicensingCertificateById: AO,
  licensingCertificatesGetLicensingCertificates: PO,
  licensingCertificatesGetLicensingCertificatesCount: IO,
  licensingCertificatesPatchLicensingCertificate: GO,
  licensingCertificatesUpdateLicensingCertificate: LO,
  platformGetHealth: wU,
  platformGetHello: EU,
  platformGetManageInfo: HU,
  platformGetVersion: MU,
  platformMapIdentityApiConfirmEmail: xU,
  platformPostAccountLogout: _U,
  platformPostAccountManageDownloadPersonalData: zU,
  platformPostAccountManageLinkExternalLogin: JU,
  platformPostAccountPerformExternalLogin: VU,
  platformPostForgotPassword: UU,
  platformPostLogin: BU,
  platformPostManage2Fa: WU,
  platformPostManageInfo: qU,
  platformPostRefresh: $U,
  platformPostRegister: DU,
  platformPostResendConfirmationEmail: FU,
  platformPostResetPassword: OU,
  usageCreateTenantUsageLimitOverride: EO,
  usageGetTenantUsage: RO,
  usageGetTenantUsageAsAdmin: MO,
  usageGetTenantUsageLimitOverrides: wO,
  usageGetTenantsUsage: kO,
  usageGetUsageMeters: bO
}, Symbol.toStringTag, { value: "Module" })), J = $(x()), DO = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/version",
  ...e
}), BO = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/health",
  ...e
}), $O = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/hello",
  ...e
}), xO = (e) => (e.client ?? J).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FO = (e) => (e.client ?? J).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UO = (e) => (e.client ?? J).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OO = (e) => (e.client ?? J).get({
  url: "/confirmEmail",
  ...e
}), WO = (e) => (e.client ?? J).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HO = (e) => (e.client ?? J).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qO = (e) => (e.client ?? J).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VO = (e) => (e.client ?? J).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _O = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/manage/info",
  ...e
}), JO = (e) => (e.client ?? J).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zO = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), QO = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), NO = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), KO = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), YO = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZO = (e) => (e.client ?? J).post({
  url: "/api/v2/LocationsService/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XO = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pO = (e) => (e.client ?? J).delete({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e
}), oO = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e
}), eW = (e) => (e.client ?? J).patch({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rW = (e) => (e.client ?? J).put({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aW = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tW = (e) => (e.client ?? J).post({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cW = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lW = (e) => (e.client ?? J).delete({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e
}), nW = (e) => (e.client ?? J).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e
}), uW = (e) => (e.client ?? J).patch({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iW = (e) => (e.client ?? J).put({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  locationsCreateLocation: ZO,
  locationsCreateWalletLocation: tW,
  locationsDeleteLocation: pO,
  locationsDeleteWalletLocation: lW,
  locationsGetLocation: oO,
  locationsGetLocations: YO,
  locationsGetLocationsCount: XO,
  locationsGetWalletLocation: nW,
  locationsGetWalletLocations: aW,
  locationsGetWalletLocationsCount: cW,
  locationsPatchLocation: eW,
  locationsPatchWalletLocation: uW,
  locationsUpdateLocation: rW,
  locationsUpdateWalletLocation: iW,
  platformGetHealth: BO,
  platformGetHello: $O,
  platformGetManageInfo: _O,
  platformGetVersion: DO,
  platformMapIdentityApiConfirmEmail: OO,
  platformPostAccountLogout: QO,
  platformPostAccountManageDownloadPersonalData: KO,
  platformPostAccountManageLinkExternalLogin: NO,
  platformPostAccountPerformExternalLogin: zO,
  platformPostForgotPassword: HO,
  platformPostLogin: FO,
  platformPostManage2Fa: VO,
  platformPostManageInfo: JO,
  platformPostRefresh: UO,
  platformPostRegister: xO,
  platformPostResendConfirmationEmail: WO,
  platformPostResetPassword: qO
}, Symbol.toStringTag, { value: "Module" })), t = $(x()), sW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e
}), hW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e
}), mW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Issue",
  ...e
}), yW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkInTransit",
  ...e
}), TW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkArrived",
  ...e
}), PW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkDelivered",
  ...e
}), fW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Cancel",
  ...e
}), IW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e
}), LW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/DeliveryNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e
}), EW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e
}), DW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/version",
  ...e
}), $W = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/health",
  ...e
}), xW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/hello",
  ...e
}), FW = (e) => (e.client ?? t).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UW = (e) => (e.client ?? t).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OW = (e) => (e.client ?? t).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WW = (e) => (e.client ?? t).get({
  url: "/confirmEmail",
  ...e
}), HW = (e) => (e.client ?? t).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qW = (e) => (e.client ?? t).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VW = (e) => (e.client ?? t).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _W = (e) => (e.client ?? t).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/manage/info",
  ...e
}), zW = (e) => (e.client ?? t).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), NW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), KW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), YW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), ZW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPackingSlips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e
}), eH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e
}), rH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e
}), uH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e
}), iH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPickLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e
}), mH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e
}), CH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e
}), IH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e
}), jH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRestocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e
}), kH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e
}), MH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $H = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e
}), xH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e
}), FH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRetainSamples",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e
}), VH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e
}), _H = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Ports",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e
}), YH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e
}), ZH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e
}), aq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e
}), tq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Sign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Dispute",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Reject",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e
}), gq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes",
  ...e
}), Cq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/Count",
  ...e
}), Sq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/{noteId}",
  ...e
}), yq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/{noteId}",
  ...e
}), Tq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e
}), jq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e
}), Aq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Issue",
  ...e
}), Rq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/MarkInTransit",
  ...e
}), bq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/MarkDelivered",
  ...e
}), kq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Cancel",
  ...e
}), Mq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e
}), Bq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $q = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e
}), Wq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e
}), Hq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Issue",
  ...e
}), _q = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/MarkInTransit",
  ...e
}), Jq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/MarkDelivered",
  ...e
}), zq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Dispute",
  ...e
}), Qq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Cancel",
  ...e
}), Nq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e
}), Xq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e
}), tV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e
}), cV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Issue",
  ...e
}), uV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/MarkInTransit",
  ...e
}), iV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/MarkArrived",
  ...e
}), sV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Release",
  ...e
}), dV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Cancel",
  ...e
}), vV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e
}), CV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SupplierProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e
}), IV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e
}), jV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e
}), kV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e
}), MV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}/Activate",
  ...e
}), DV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}/Deactivate",
  ...e
}), BV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $V = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e
}), UV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e
}), OV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _V = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e
}), JV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Dispatch",
  ...e
}), NV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Depart",
  ...e
}), KV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Arrive",
  ...e
}), YV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Deliver",
  ...e
}), ZV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Cancel",
  ...e
}), XV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Vessels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e
}), r_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e
}), a_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e
}), i_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e
}), s_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Start",
  ...e
}), g_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Complete",
  ...e
}), h_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Cancel",
  ...e
}), m_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e
}), T_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Warehouses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e
}), G_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e
}), L_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  airwayBillsAddAirwayBillLine: jW,
  airwayBillsCancelAirwayBill: fW,
  airwayBillsCreateAirwayBill: dW,
  airwayBillsDeleteAirwayBill: gW,
  airwayBillsGetAirwayBillById: hW,
  airwayBillsGetAirwayBillLines: IW,
  airwayBillsGetAirwayBillLinesCount: AW,
  airwayBillsGetAirwayBills: sW,
  airwayBillsGetAirwayBillsCount: vW,
  airwayBillsIssueAirwayBill: SW,
  airwayBillsMarkAirwayBillArrived: TW,
  airwayBillsMarkAirwayBillDelivered: PW,
  airwayBillsMarkAirwayBillInTransit: yW,
  airwayBillsPatchAirwayBill: mW,
  airwayBillsPatchAirwayBillLine: LW,
  airwayBillsRemoveAirwayBillLine: GW,
  airwayBillsUpdateAirwayBill: CW,
  airwayBillsUpdateAirwayBillLine: RW,
  deliveryNotesCreateDeliveryNote: kW,
  deliveryNotesDeleteDeliveryNote: wW,
  deliveryNotesGetDeliveryNoteById: EW,
  deliveryNotesGetDeliveryNotes: bW,
  deliveryNotesGetDeliveryNotesCount: MW,
  deliveryNotesUpdateDeliveryNote: DW,
  itemPackingSlipsCreateItemPackingSlip: XW,
  itemPackingSlipsCreateItemPackingSlipEntry: cH,
  itemPackingSlipsDeleteItemPackingSlip: oW,
  itemPackingSlipsDeleteItemPackingSlipEntry: nH,
  itemPackingSlipsGetItemPackingSlipById: eH,
  itemPackingSlipsGetItemPackingSlipEntries: tH,
  itemPackingSlipsGetItemPackingSlipEntriesCount: lH,
  itemPackingSlipsGetItemPackingSlipEntryById: uH,
  itemPackingSlipsGetItemPackingSlips: ZW,
  itemPackingSlipsGetItemPackingSlipsCount: pW,
  itemPackingSlipsPatchItemPackingSlip: rH,
  itemPackingSlipsPatchItemPackingSlipEntry: iH,
  itemPackingSlipsUpdateItemPackingSlip: aH,
  itemPackingSlipsUpdateItemPackingSlipEntry: sH,
  itemPickListsCreateItemPickList: vH,
  itemPickListsCreateItemPickListEntry: TH,
  itemPickListsDeleteItemPickList: hH,
  itemPickListsDeleteItemPickListEntry: fH,
  itemPickListsGetItemPickListById: mH,
  itemPickListsGetItemPickListEntries: yH,
  itemPickListsGetItemPickListEntriesCount: PH,
  itemPickListsGetItemPickListEntryById: IH,
  itemPickListsGetItemPickLists: dH,
  itemPickListsGetItemPickListsCount: gH,
  itemPickListsPatchItemPickList: CH,
  itemPickListsPatchItemPickListEntry: jH,
  itemPickListsUpdateItemPickList: SH,
  itemPickListsUpdateItemPickListEntry: AH,
  itemRestocksCreateItemRestock: LH,
  itemRestocksCreateItemRestockEntry: DH,
  itemRestocksDeleteItemRestock: bH,
  itemRestocksDeleteItemRestockEntry: $H,
  itemRestocksGetItemRestockById: kH,
  itemRestocksGetItemRestockEntries: EH,
  itemRestocksGetItemRestockEntriesCount: BH,
  itemRestocksGetItemRestockEntryById: xH,
  itemRestocksGetItemRestocks: GH,
  itemRestocksGetItemRestocksCount: RH,
  itemRestocksPatchItemRestock: MH,
  itemRestocksPatchItemRestockEntry: FH,
  itemRestocksUpdateItemRestock: wH,
  itemRestocksUpdateItemRestockEntry: UH,
  itemRetainSamplesCreateItemRetainSample: WH,
  itemRetainSamplesDeleteItemRetainSample: qH,
  itemRetainSamplesGetItemRetainSampleById: VH,
  itemRetainSamplesGetItemRetainSamples: OH,
  itemRetainSamplesGetItemRetainSamplesCount: HH,
  itemRetainSamplesPatchItemRetainSample: _H,
  itemRetainSamplesUpdateItemRetainSample: JH,
  platformGetHealth: $W,
  platformGetHello: xW,
  platformGetManageInfo: JW,
  platformGetVersion: BW,
  platformMapIdentityApiConfirmEmail: WW,
  platformPostAccountLogout: NW,
  platformPostAccountManageDownloadPersonalData: YW,
  platformPostAccountManageLinkExternalLogin: KW,
  platformPostAccountPerformExternalLogin: QW,
  platformPostForgotPassword: qW,
  platformPostLogin: UW,
  platformPostManage2Fa: _W,
  platformPostManageInfo: zW,
  platformPostRefresh: OW,
  platformPostRegister: FW,
  platformPostResendConfirmationEmail: HW,
  platformPostResetPassword: VW,
  portsCreatePort: QH,
  portsDeletePort: KH,
  portsGetPortById: YH,
  portsGetPorts: zH,
  portsGetPortsCount: NH,
  portsPatchPort: ZH,
  portsUpdatePort: XH,
  proofsOfDeliveryAddProofOfDeliveryLine: sq,
  proofsOfDeliveryAttachDeliveryNote: yq,
  proofsOfDeliveryCreateProofOfDelivery: oH,
  proofsOfDeliveryDeleteProofOfDelivery: rq,
  proofsOfDeliveryDetachDeliveryNote: Sq,
  proofsOfDeliveryDisputeProofOfDelivery: nq,
  proofsOfDeliveryGetProofOfDeliveryById: aq,
  proofsOfDeliveryGetProofOfDeliveryDeliveryNotes: mq,
  proofsOfDeliveryGetProofOfDeliveryDeliveryNotesCount: Cq,
  proofsOfDeliveryGetProofOfDeliveryLines: iq,
  proofsOfDeliveryGetProofOfDeliveryLinesCount: dq,
  proofsOfDeliveryGetProofsOfDelivery: pH,
  proofsOfDeliveryGetProofsOfDeliveryCount: eq,
  proofsOfDeliveryPatchProofOfDelivery: tq,
  proofsOfDeliveryPatchProofOfDeliveryLine: gq,
  proofsOfDeliveryRejectProofOfDelivery: uq,
  proofsOfDeliveryRemoveProofOfDeliveryLine: vq,
  proofsOfDeliverySignProofOfDelivery: lq,
  proofsOfDeliveryUpdateProofOfDelivery: cq,
  proofsOfDeliveryUpdateProofOfDeliveryLine: hq,
  railWaybillsAddRailWaybillLine: wq,
  railWaybillsCancelRailWaybill: kq,
  railWaybillsCreateRailWaybill: Pq,
  railWaybillsDeleteRailWaybill: Iq,
  railWaybillsGetRailWaybillById: jq,
  railWaybillsGetRailWaybillLines: Mq,
  railWaybillsGetRailWaybillLinesCount: Eq,
  railWaybillsGetRailWaybills: Tq,
  railWaybillsGetRailWaybillsCount: fq,
  railWaybillsIssueRailWaybill: Lq,
  railWaybillsMarkRailWaybillDelivered: bq,
  railWaybillsMarkRailWaybillInTransit: Rq,
  railWaybillsPatchRailWaybill: Aq,
  railWaybillsPatchRailWaybillLine: Bq,
  railWaybillsRemoveRailWaybillLine: Dq,
  railWaybillsUpdateRailWaybill: Gq,
  railWaybillsUpdateRailWaybillLine: $q,
  roadWaybillsAddRoadWaybillLine: Kq,
  roadWaybillsCancelRoadWaybill: Qq,
  roadWaybillsCreateRoadWaybill: Fq,
  roadWaybillsDeleteRoadWaybill: Oq,
  roadWaybillsDisputeRoadWaybill: zq,
  roadWaybillsGetRoadWaybillById: Wq,
  roadWaybillsGetRoadWaybillLines: Nq,
  roadWaybillsGetRoadWaybillLinesCount: Yq,
  roadWaybillsGetRoadWaybills: xq,
  roadWaybillsGetRoadWaybillsCount: Uq,
  roadWaybillsIssueRoadWaybill: Vq,
  roadWaybillsMarkRoadWaybillDelivered: Jq,
  roadWaybillsMarkRoadWaybillInTransit: _q,
  roadWaybillsPatchRoadWaybill: Hq,
  roadWaybillsPatchRoadWaybillLine: Xq,
  roadWaybillsRemoveRoadWaybillLine: Zq,
  roadWaybillsUpdateRoadWaybill: qq,
  roadWaybillsUpdateRoadWaybillLine: pq,
  seawayBillsAddSeawayBillLine: gV,
  seawayBillsCancelSeawayBill: dV,
  seawayBillsCreateSeawayBill: eV,
  seawayBillsDeleteSeawayBill: aV,
  seawayBillsGetSeawayBillById: tV,
  seawayBillsGetSeawayBillLines: vV,
  seawayBillsGetSeawayBillLinesCount: hV,
  seawayBillsGetSeawayBills: oq,
  seawayBillsGetSeawayBillsCount: rV,
  seawayBillsIssueSeawayBill: nV,
  seawayBillsMarkSeawayBillArrived: iV,
  seawayBillsMarkSeawayBillInTransit: uV,
  seawayBillsPatchSeawayBill: cV,
  seawayBillsPatchSeawayBillLine: CV,
  seawayBillsReleaseSeawayBill: sV,
  seawayBillsRemoveSeawayBillLine: mV,
  seawayBillsUpdateSeawayBill: lV,
  seawayBillsUpdateSeawayBillLine: SV,
  supplierProfilesCreateSupplierProfile: TV,
  supplierProfilesDeleteSupplierProfile: fV,
  supplierProfilesGetSupplierProfileById: IV,
  supplierProfilesGetSupplierProfiles: yV,
  supplierProfilesGetSupplierProfilesCount: PV,
  supplierProfilesPatchSupplierProfile: jV,
  supplierProfilesUpdateSupplierProfile: AV,
  truckDriversActivateTruckDriver: EV,
  truckDriversCreateTruckDriver: LV,
  truckDriversDeactivateTruckDriver: DV,
  truckDriversDeleteTruckDriver: bV,
  truckDriversGetTruckDriverById: kV,
  truckDriversGetTruckDrivers: GV,
  truckDriversGetTruckDriversCount: RV,
  truckDriversPatchTruckDriver: MV,
  truckDriversUpdateTruckDriver: wV,
  trucksArriveTrip: KV,
  trucksCancelTrip: ZV,
  trucksCreateTruck: $V,
  trucksCreateTruckTrip: qV,
  trucksDeleteTruck: FV,
  trucksDeleteTruckTrip: _V,
  trucksDeliverTrip: YV,
  trucksDepartTrip: NV,
  trucksDispatchTrip: QV,
  trucksGetTruckById: UV,
  trucksGetTruckTrips: HV,
  trucksGetTruckTripsCount: VV,
  trucksGetTrucks: BV,
  trucksGetTrucksCount: xV,
  trucksPatchTruck: OV,
  trucksPatchTruckTrip: JV,
  trucksUpdateTruck: WV,
  trucksUpdateTruckTrip: zV,
  vesselsCreateVessel: pV,
  vesselsDeleteVessel: e_,
  vesselsGetVesselById: r_,
  vesselsGetVessels: XV,
  vesselsGetVesselsCount: oV,
  vesselsPatchVessel: a_,
  vesselsUpdateVessel: t_,
  voyagesCancelVoyage: h_,
  voyagesCompleteVoyage: g_,
  voyagesCreateVoyage: l_,
  voyagesCreateVoyagePortCall: C_,
  voyagesDeleteVoyage: u_,
  voyagesDeleteVoyagePortCall: y_,
  voyagesGetVoyageById: i_,
  voyagesGetVoyagePortCalls: m_,
  voyagesGetVoyagePortCallsCount: S_,
  voyagesGetVoyages: c_,
  voyagesGetVoyagesCount: n_,
  voyagesPatchVoyage: s_,
  voyagesPatchVoyagePortCall: T_,
  voyagesStartVoyage: v_,
  voyagesUpdateVoyage: d_,
  voyagesUpdateVoyagePortCall: P_,
  warehousesCreateWarehouse: I_,
  warehousesDeleteWarehouse: A_,
  warehousesGetWarehouseById: G_,
  warehousesGetWarehouses: f_,
  warehousesGetWarehousesCount: j_,
  warehousesPatchWarehouse: L_,
  warehousesUpdateWarehouse: R_
}, Symbol.toStringTag, { value: "Module" })), U = $(x()), b_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/version",
  ...e
}), k_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/health",
  ...e
}), M_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/hello",
  ...e
}), w_ = (e) => (e.client ?? U).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E_ = (e) => (e.client ?? U).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D_ = (e) => (e.client ?? U).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B_ = (e) => (e.client ?? U).get({
  url: "/confirmEmail",
  ...e
}), $_ = (e) => (e.client ?? U).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x_ = (e) => (e.client ?? U).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F_ = (e) => (e.client ?? U).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U_ = (e) => (e.client ?? U).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/manage/info",
  ...e
}), W_ = (e) => (e.client ?? U).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), q_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), V_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), __ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), J_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/ProductionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N_ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e
}), K_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e
}), Y_ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z_ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eJ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e
}), rJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e
}), aJ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tJ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lJ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/WorkOrderTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uJ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e
}), iJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e
}), sJ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dJ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gJ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/Workstations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mJ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e
}), CJ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e
}), SJ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yJ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: k_,
  platformGetHello: M_,
  platformGetManageInfo: O_,
  platformGetVersion: b_,
  platformMapIdentityApiConfirmEmail: B_,
  platformPostAccountLogout: q_,
  platformPostAccountManageDownloadPersonalData: __,
  platformPostAccountManageLinkExternalLogin: V_,
  platformPostAccountPerformExternalLogin: H_,
  platformPostForgotPassword: x_,
  platformPostLogin: E_,
  platformPostManage2Fa: U_,
  platformPostManageInfo: W_,
  platformPostRefresh: D_,
  platformPostRegister: w_,
  platformPostResendConfirmationEmail: $_,
  platformPostResetPassword: F_,
  productionPlansCreateProductionPlan: z_,
  productionPlansDeleteProductionPlan: N_,
  productionPlansGetProductionPlanById: K_,
  productionPlansGetProductionPlans: J_,
  productionPlansGetProductionPlansCount: Q_,
  productionPlansPatchProductionPlan: Y_,
  productionPlansUpdateProductionPlan: Z_,
  workOrderTypesCreateWorkOrderType: lJ,
  workOrderTypesDeleteWorkOrderType: uJ,
  workOrderTypesGetWorkOrderTypeById: iJ,
  workOrderTypesGetWorkOrderTypes: cJ,
  workOrderTypesGetWorkOrderTypesCount: nJ,
  workOrderTypesPatchWorkOrderType: sJ,
  workOrderTypesUpdateWorkOrderType: dJ,
  workOrdersCreateWorkOrder: p_,
  workOrdersDeleteWorkOrder: eJ,
  workOrdersGetWorkOrderById: rJ,
  workOrdersGetWorkOrders: X_,
  workOrdersGetWorkOrdersCount: o_,
  workOrdersPatchWorkOrder: aJ,
  workOrdersUpdateWorkOrder: tJ,
  workstationsCreateWorkstation: gJ,
  workstationsDeleteWorkstation: mJ,
  workstationsGetWorkstationById: CJ,
  workstationsGetWorkstations: vJ,
  workstationsGetWorkstationsCount: hJ,
  workstationsPatchWorkstation: SJ,
  workstationsUpdateWorkstation: yJ
}, Symbol.toStringTag, { value: "Module" })), g = $(x()), TJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerCreatives/Public/{bannerCreativeId}/Click",
  ...e
}), PJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fJ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/BannerPlacementAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jJ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e
}), AJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e
}), GJ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerPlacementKeys",
  ...e
}), RJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerPlacements/Public/{placementKey}",
  ...e
}), bJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kJ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/BannerSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wJ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e
}), EJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e
}), DJ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Performance",
  ...e
}), $J = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xJ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UJ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e
}), OJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e
}), WJ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qJ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/EmailGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _J = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e
}), JJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e
}), zJ = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QJ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailSignatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KJ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/EmailSignatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailSignatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZJ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e
}), XJ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e
}), pJ = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oJ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ez = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/EmailTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), az = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailTemplates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tz = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e
}), cz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e
}), lz = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nz = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uz = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/version",
  ...e
}), iz = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/health",
  ...e
}), sz = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/hello",
  ...e
}), dz = (e) => (e.client ?? g).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vz = (e) => (e.client ?? g).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gz = (e) => (e.client ?? g).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hz = (e) => (e.client ?? g).get({
  url: "/confirmEmail",
  ...e
}), mz = (e) => (e.client ?? g).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cz = (e) => (e.client ?? g).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sz = (e) => (e.client ?? g).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yz = (e) => (e.client ?? g).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tz = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/manage/info",
  ...e
}), Pz = (e) => (e.client ?? g).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fz = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Iz = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), jz = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Az = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Gz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingAreas",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/MarketingAreas",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingAreas/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bz = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e
}), kz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e
}), Mz = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wz = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ez = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingCampaigns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/MarketingCampaigns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingCampaigns/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $z = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e
}), xz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e
}), Fz = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uz = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLeads",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/MarketingLeads",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLeads/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qz = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e
}), Vz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e
}), _z = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jz = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/MarketingLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kz = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e
}), Yz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e
}), Zz = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xz = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pz = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/Newsletters",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oz = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/Newsletters",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/Newsletters/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rQ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e
}), aQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e
}), tQ = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cQ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nQ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/NewsletterSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iQ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e
}), sQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e
}), dQ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialMediaPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gQ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/SocialMediaPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialMediaPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mQ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e
}), CQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e
}), SQ = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yQ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialPostBuckets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PQ = (e) => (e.client ?? g).post({
  url: "/api/v2/MarketingService/SocialPostBuckets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialPostBuckets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IQ = (e) => (e.client ?? g).delete({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e
}), jQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e
}), AQ = (e) => (e.client ?? g).patch({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GQ = (e) => (e.client ?? g).put({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LQ = (e) => (e.client ?? g).get({
  url: "/api/v2/MarketingService/TrackingPixels/{pixelId}",
  ...e
}), gCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bannerCreativesGetPublicBannerClick: TJ,
  bannerPlacementAssignmentsCreateBannerPlacementAssignment: fJ,
  bannerPlacementAssignmentsDeleteBannerPlacementAssignment: jJ,
  bannerPlacementAssignmentsGetBannerPlacementAssignmentById: AJ,
  bannerPlacementAssignmentsGetBannerPlacementAssignments: PJ,
  bannerPlacementAssignmentsGetBannerPlacementAssignmentsCount: IJ,
  bannerPlacementAssignmentsUpdateBannerPlacementAssignment: GJ,
  bannerPlacementKeysGetBannerPlacementKeys: LJ,
  bannerPlacementsGetPublicBannerPlacement: RJ,
  bannerSetsCreateBannerCreative: xJ,
  bannerSetsCreateBannerSet: kJ,
  bannerSetsDeleteBannerCreative: UJ,
  bannerSetsDeleteBannerSet: wJ,
  bannerSetsGetBannerCreativeById: OJ,
  bannerSetsGetBannerCreatives: $J,
  bannerSetsGetBannerCreativesCount: FJ,
  bannerSetsGetBannerSetById: EJ,
  bannerSetsGetBannerSetPerformance: BJ,
  bannerSetsGetBannerSets: bJ,
  bannerSetsGetBannerSetsCount: MJ,
  bannerSetsUpdateBannerCreative: WJ,
  bannerSetsUpdateBannerSet: DJ,
  emailGroupsCreateEmailGroup: qJ,
  emailGroupsDeleteEmailGroup: _J,
  emailGroupsGetEmailGroupDetails: JJ,
  emailGroupsGetEmailGroupsCount: VJ,
  emailGroupsGetEmailGroupsOData: HJ,
  emailGroupsPatchEmailGroup: zJ,
  emailGroupsUpdateEmailGroup: QJ,
  emailSignaturesCreateEmailSignature: KJ,
  emailSignaturesDeleteEmailSignature: ZJ,
  emailSignaturesGetEmailSignatureDetails: XJ,
  emailSignaturesGetEmailSignaturesCount: YJ,
  emailSignaturesGetEmailSignaturesOData: NJ,
  emailSignaturesPatchEmailSignature: pJ,
  emailSignaturesUpdateEmailSignature: oJ,
  emailTemplatesCreateEmailTemplate: rz,
  emailTemplatesDeleteEmailTemplate: tz,
  emailTemplatesGetEmailTemplateDetails: cz,
  emailTemplatesGetEmailTemplatesCount: az,
  emailTemplatesGetEmailTemplatesOData: ez,
  emailTemplatesPatchEmailTemplate: lz,
  emailTemplatesUpdateEmailTemplate: nz,
  marketingAreasCreateMarketingArea: Lz,
  marketingAreasDeleteMarketingArea: bz,
  marketingAreasGetMarketingAreaById: kz,
  marketingAreasGetMarketingAreas: Gz,
  marketingAreasGetMarketingAreasCount: Rz,
  marketingAreasPatchMarketingArea: Mz,
  marketingAreasUpdateMarketingArea: wz,
  marketingCampaignsCreateMarketingCampaign: Dz,
  marketingCampaignsDeleteMarketingCampaign: $z,
  marketingCampaignsGetMarketingCampaignDetails: xz,
  marketingCampaignsGetMarketingCampaignOData: Ez,
  marketingCampaignsGetMarketingCampaignsCount: Bz,
  marketingCampaignsPatchMarketingCampaign: Fz,
  marketingCampaignsUpdateMarketingCampaign: Uz,
  marketingLeadsCreateMarketingLead: Wz,
  marketingLeadsDeleteMarketingLead: qz,
  marketingLeadsGetMarketingLeadDetails: Vz,
  marketingLeadsGetMarketingLeadsCount: Hz,
  marketingLeadsGetMarketingLeadsOData: Oz,
  marketingLeadsPatchMarketingLead: _z,
  marketingLeadsUpdateMarketingLead: Jz,
  marketingListsCreateMarketingList: Qz,
  marketingListsDeleteMarketingList: Kz,
  marketingListsGetMarketingListDetails: Yz,
  marketingListsGetMarketingListOData: zz,
  marketingListsGetMarketingListsCount: Nz,
  marketingListsPatchMarketingList: Zz,
  marketingListsUpdateMarketingList: Xz,
  newsletterSubscriptionsCreateNewsletterSubscription: nQ,
  newsletterSubscriptionsDeleteNewsletterSubscription: iQ,
  newsletterSubscriptionsGetNewsletterSubscriptionById: sQ,
  newsletterSubscriptionsGetNewsletterSubscriptions: lQ,
  newsletterSubscriptionsGetNewsletterSubscriptionsCount: uQ,
  newsletterSubscriptionsUpdateNewsletterSubscription: dQ,
  newslettersCreateNewsletter: oz,
  newslettersDeleteNewsletter: rQ,
  newslettersGetNewsletterDetails: aQ,
  newslettersGetNewsletterOData: pz,
  newslettersGetNewslettersCount: eQ,
  newslettersPatchNewsletter: tQ,
  newslettersUpdateNewsletter: cQ,
  platformGetHealth: iz,
  platformGetHello: sz,
  platformGetManageInfo: Tz,
  platformGetVersion: uz,
  platformMapIdentityApiConfirmEmail: hz,
  platformPostAccountLogout: Iz,
  platformPostAccountManageDownloadPersonalData: Az,
  platformPostAccountManageLinkExternalLogin: jz,
  platformPostAccountPerformExternalLogin: fz,
  platformPostForgotPassword: Cz,
  platformPostLogin: vz,
  platformPostManage2Fa: yz,
  platformPostManageInfo: Pz,
  platformPostRefresh: gz,
  platformPostRegister: dz,
  platformPostResendConfirmationEmail: mz,
  platformPostResetPassword: Sz,
  socialMediaPostsCreateSocialMediaPost: gQ,
  socialMediaPostsDeleteSocialMediaPost: mQ,
  socialMediaPostsGetSocialMediaPostDetails: CQ,
  socialMediaPostsGetSocialMediaPostsCount: hQ,
  socialMediaPostsGetSocialMediaPostsOData: vQ,
  socialMediaPostsPatchSocialMediaPost: SQ,
  socialMediaPostsUpdateSocialMediaPost: yQ,
  socialPostBucketsCreateSocialPostBucket: PQ,
  socialPostBucketsDeleteSocialPostBucket: IQ,
  socialPostBucketsGetSocialPostBucketDetails: jQ,
  socialPostBucketsGetSocialPostBucketsCount: fQ,
  socialPostBucketsGetSocialPostBucketsOData: TQ,
  socialPostBucketsPatchSocialPostBucket: AQ,
  socialPostBucketsUpdateSocialPostBucket: GQ,
  trackingPixelsGetTrackingPixel: LQ
}, Symbol.toStringTag, { value: "Module" })), p = $(x()), RQ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/version",
  ...e
}), bQ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/health",
  ...e
}), kQ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/hello",
  ...e
}), MQ = (e) => (e.client ?? p).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wQ = (e) => (e.client ?? p).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EQ = (e) => (e.client ?? p).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DQ = (e) => (e.client ?? p).get({
  url: "/confirmEmail",
  ...e
}), BQ = (e) => (e.client ?? p).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $Q = (e) => (e.client ?? p).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xQ = (e) => (e.client ?? p).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FQ = (e) => (e.client ?? p).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UQ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/manage/info",
  ...e
}), OQ = (e) => (e.client ?? p).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WQ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), HQ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), qQ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), VQ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), hCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: bQ,
  platformGetHello: kQ,
  platformGetManageInfo: UQ,
  platformGetVersion: RQ,
  platformMapIdentityApiConfirmEmail: DQ,
  platformPostAccountLogout: HQ,
  platformPostAccountManageDownloadPersonalData: VQ,
  platformPostAccountManageLinkExternalLogin: qQ,
  platformPostAccountPerformExternalLogin: WQ,
  platformPostForgotPassword: $Q,
  platformPostLogin: wQ,
  platformPostManage2Fa: FQ,
  platformPostManageInfo: OQ,
  platformPostRefresh: EQ,
  platformPostRegister: MQ,
  platformPostResendConfirmationEmail: BQ,
  platformPostResetPassword: xQ
}, Symbol.toStringTag, { value: "Module" })), O = $(x()), _Q = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/version",
  ...e
}), JQ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/health",
  ...e
}), zQ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/hello",
  ...e
}), QQ = (e) => (e.client ?? O).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NQ = (e) => (e.client ?? O).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KQ = (e) => (e.client ?? O).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YQ = (e) => (e.client ?? O).get({
  url: "/confirmEmail",
  ...e
}), ZQ = (e) => (e.client ?? O).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XQ = (e) => (e.client ?? O).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pQ = (e) => (e.client ?? O).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oQ = (e) => (e.client ?? O).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eN = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/manage/info",
  ...e
}), rN = (e) => (e.client ?? O).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aN = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), tN = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), cN = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), lN = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), nN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/SubmitCart",
  ...e
}), uN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/{orderId}",
  ...e
}), mN = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CN = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/{orderId}",
  ...e
}), yN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PN = (e) => (e.client ?? O).delete({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e
}), fN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e
}), IN = (e) => (e.client ?? O).patch({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Calculate",
  ...e
}), GN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bN = (e) => (e.client ?? O).delete({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e
}), kN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e
}), MN = (e) => (e.client ?? O).patch({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}/Calculate",
  ...e
}), DN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ordersCalculateOrder: AN,
  ordersCalculateOrderLine: EN,
  ordersCreateOrder: iN,
  ordersCreateOrderLine: LN,
  ordersDeleteOrder: PN,
  ordersDeleteOrderLine: bN,
  ordersGetExtendedOrders: sN,
  ordersGetMyReceivedOrder: SN,
  ordersGetMyReceivedOrderLines: TN,
  ordersGetMyReceivedOrders: mN,
  ordersGetMyReceivedOrdersCount: CN,
  ordersGetOrder: fN,
  ordersGetOrderLine: kN,
  ordersGetOrderLines: GN,
  ordersGetOrderLinesCount: RN,
  ordersGetOrders: uN,
  ordersGetOrdersCount: dN,
  ordersGetReceivedOrder: hN,
  ordersGetReceivedOrderLines: yN,
  ordersGetReceivedOrders: vN,
  ordersGetReceivedOrdersCount: gN,
  ordersPatchOrder: IN,
  ordersPatchOrderLine: MN,
  ordersPreviewOrderEmailTemplate: BN,
  ordersSendOrderEmail: DN,
  ordersSubmitCart: nN,
  ordersUpdateOrder: jN,
  ordersUpdateOrderLine: wN,
  platformGetHealth: JQ,
  platformGetHello: zQ,
  platformGetManageInfo: eN,
  platformGetVersion: _Q,
  platformMapIdentityApiConfirmEmail: YQ,
  platformPostAccountLogout: tN,
  platformPostAccountManageDownloadPersonalData: lN,
  platformPostAccountManageLinkExternalLogin: cN,
  platformPostAccountPerformExternalLogin: aN,
  platformPostForgotPassword: XQ,
  platformPostLogin: NQ,
  platformPostManage2Fa: oQ,
  platformPostManageInfo: rN,
  platformPostRefresh: KQ,
  platformPostRegister: QQ,
  platformPostResendConfirmationEmail: ZQ,
  platformPostResetPassword: pQ
}, Symbol.toStringTag, { value: "Module" })), L = $(x()), $N = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/version",
  ...e
}), xN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/health",
  ...e
}), FN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/hello",
  ...e
}), UN = (e) => (e.client ?? L).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ON = (e) => (e.client ?? L).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WN = (e) => (e.client ?? L).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HN = (e) => (e.client ?? L).get({
  url: "/confirmEmail",
  ...e
}), qN = (e) => (e.client ?? L).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VN = (e) => (e.client ?? L).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _N = (e) => (e.client ?? L).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JN = (e) => (e.client ?? L).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/manage/info",
  ...e
}), QN = (e) => (e.client ?? L).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), KN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), YN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ZN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), XN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pN = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e
}), rK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e
}), aK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentModes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e
}), iK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e
}), sK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/RotateKey",
  ...e
}), CK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/Environment",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/Credential",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments/{paymentId}/Details",
  ...e
}), PK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e
}), fK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e
}), IK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentTerms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e
}), MK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e
}), wK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/ProviderOperations/AwaitingOutcome",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/ProviderOperations/AwaitingOutcome/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $K = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/ProviderOperations/{providerOperationId}/ReconcileOutcome",
  ...e
}), xK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/ProviderOperations/{providerOperationId}/Refund",
  ...e
}), FK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PublicPaymentLinks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PublicPaymentReferences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  paymentMethodsCreatePaymentMethod: pN,
  paymentMethodsDeletePaymentMethod: eK,
  paymentMethodsGetPaymentMethodDetails: rK,
  paymentMethodsGetPaymentMethods: XN,
  paymentMethodsGetPaymentMethodsCount: oN,
  paymentMethodsPatchPaymentMethod: aK,
  paymentMethodsUpdatePaymentMethod: tK,
  paymentModesCreatePaymentMode: lK,
  paymentModesDeletePaymentMode: uK,
  paymentModesGetPaymentModeDetails: iK,
  paymentModesGetPaymentModes: cK,
  paymentModesGetPaymentModesCount: nK,
  paymentModesPatchPaymentMode: sK,
  paymentModesUpdatePaymentMode: dK,
  paymentProviderRegistrationsCreate: gK,
  paymentProviderRegistrationsDeclareEnvironment: SK,
  paymentProviderRegistrationsGet: vK,
  paymentProviderRegistrationsGetCount: hK,
  paymentProviderRegistrationsRotateKey: mK,
  paymentProviderRegistrationsSetCredential: yK,
  paymentProviderRegistrationsUpdate: CK,
  paymentTermsCreatePaymentTerm: RK,
  paymentTermsDeletePaymentTerm: kK,
  paymentTermsGetPaymentTermDetails: MK,
  paymentTermsGetPaymentTerms: LK,
  paymentTermsGetPaymentTermsCount: bK,
  paymentTermsPatchPaymentTerm: wK,
  paymentTermsUpdatePaymentTerm: EK,
  paymentsCreatePayment: GK,
  paymentsDeletePayment: PK,
  paymentsGetPayment: TK,
  paymentsGetPaymentAsyncV2: fK,
  paymentsGetPayments: AK,
  paymentsPatchPayment: IK,
  paymentsUpdatePayment: jK,
  platformGetHealth: xN,
  platformGetHello: FN,
  platformGetManageInfo: zN,
  platformGetVersion: $N,
  platformMapIdentityApiConfirmEmail: HN,
  platformPostAccountLogout: KN,
  platformPostAccountManageDownloadPersonalData: ZN,
  platformPostAccountManageLinkExternalLogin: YN,
  platformPostAccountPerformExternalLogin: NN,
  platformPostForgotPassword: VN,
  platformPostLogin: ON,
  platformPostManage2Fa: JN,
  platformPostManageInfo: QN,
  platformPostRefresh: WN,
  platformPostRegister: UN,
  platformPostResendConfirmationEmail: qN,
  platformPostResetPassword: _N,
  providerOperationsGetAwaitingOutcome: DK,
  providerOperationsGetAwaitingOutcomeCount: BK,
  providerOperationsReconcileOutcome: $K,
  providerOperationsRefundCollection: xK,
  publicPaymentLinksIssue: FK,
  publicPaymentReferencesIssue: UK
}, Symbol.toStringTag, { value: "Module" })), A = $(x()), OK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WK = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/DiscountLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qK = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e
}), VK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e
}), _K = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JK = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QK = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KK = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e
}), YK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e
}), ZK = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XK = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/version",
  ...e
}), oK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/health",
  ...e
}), eY = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/hello",
  ...e
}), rY = (e) => (e.client ?? A).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aY = (e) => (e.client ?? A).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tY = (e) => (e.client ?? A).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cY = (e) => (e.client ?? A).get({
  url: "/confirmEmail",
  ...e
}), lY = (e) => (e.client ?? A).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nY = (e) => (e.client ?? A).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uY = (e) => (e.client ?? A).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iY = (e) => (e.client ?? A).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sY = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/manage/info",
  ...e
}), dY = (e) => (e.client ?? A).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), gY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), hY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), mY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), CY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PriceLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e
}), PY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e
}), fY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e
}), RY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e
}), bY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/Price",
  ...e
}), wY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/FinalPrice",
  ...e
}), EY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/TotalTaxes",
  ...e
}), DY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/TotalSavings",
  ...e
}), BY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $Y = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PricingRules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e
}), FY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e
}), UY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PricingRules/Update",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/RoundingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _Y = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e
}), JY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e
}), zY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  discountListsCreateDiscountList: WK,
  discountListsCreateDiscountListEntry: QK,
  discountListsDeleteDiscountList: qK,
  discountListsDeleteDiscountListEntry: KK,
  discountListsGetDiscountList: VK,
  discountListsGetDiscountListEntries: zK,
  discountListsGetDiscountListEntriesCount: NK,
  discountListsGetDiscountListEntry: YK,
  discountListsGetDiscountLists: OK,
  discountListsGetDiscountListsCount: HK,
  discountListsPatchDiscountList: _K,
  discountListsPatchDiscountListEntry: ZK,
  discountListsUpdateDiscountList: JK,
  discountListsUpdateDiscountListEntry: XK,
  platformGetHealth: oK,
  platformGetHello: eY,
  platformGetManageInfo: sY,
  platformGetVersion: pK,
  platformMapIdentityApiConfirmEmail: cY,
  platformPostAccountLogout: gY,
  platformPostAccountManageDownloadPersonalData: mY,
  platformPostAccountManageLinkExternalLogin: hY,
  platformPostAccountPerformExternalLogin: vY,
  platformPostForgotPassword: nY,
  platformPostLogin: aY,
  platformPostManage2Fa: iY,
  platformPostManageInfo: dY,
  platformPostRefresh: tY,
  platformPostRegister: rY,
  platformPostResendConfirmationEmail: lY,
  platformPostResetPassword: uY,
  priceListsCreatePriceList: SY,
  priceListsCreatePriceListPrices: AY,
  priceListsDeletePriceList: TY,
  priceListsDeletePriceListPrice: LY,
  priceListsGetPriceList: PY,
  priceListsGetPriceListPrice: RY,
  priceListsGetPriceListPrices: jY,
  priceListsGetPriceListPricesCount: GY,
  priceListsGetPriceLists: CY,
  priceListsGetPriceListsCount: yY,
  priceListsPatchPriceList: fY,
  priceListsPatchPriceListPrice: bY,
  priceListsUpdatePriceList: IY,
  priceListsUpdatePriceListPrice: kY,
  pricesGetFinalPrice: wY,
  pricesGetPrice: MY,
  pricesGetTotalSavingsInUsd: DY,
  pricesGetTotalTaxesInUsd: EY,
  pricingRulesCreatePricingRule: $Y,
  pricingRulesDeletePricingRule: xY,
  pricingRulesGetPricingRuleById: FY,
  pricingRulesGetPricingRules: BY,
  pricingRulesGetPricingRulesCount: OY,
  pricingRulesPatchPricingRule: UY,
  pricingRulesUpdatePricingRule: WY,
  roundingPoliciesCreateRoundingPolicy: qY,
  roundingPoliciesDeleteRoundingPolicy: _Y,
  roundingPoliciesGetRoundingPolicies: HY,
  roundingPoliciesGetRoundingPoliciesCount: VY,
  roundingPoliciesGetRoundingPolicyById: JY,
  roundingPoliciesPatchRoundingPolicy: zY,
  roundingPoliciesUpdateRoundingPolicy: QY
}, Symbol.toStringTag, { value: "Module" })), I = $(x()), NY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/version",
  ...e
}), KY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/health",
  ...e
}), YY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/hello",
  ...e
}), ZY = (e) => (e.client ?? I).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XY = (e) => (e.client ?? I).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pY = (e) => (e.client ?? I).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oY = (e) => (e.client ?? I).get({
  url: "/confirmEmail",
  ...e
}), eZ = (e) => (e.client ?? I).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rZ = (e) => (e.client ?? I).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aZ = (e) => (e.client ?? I).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tZ = (e) => (e.client ?? I).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cZ = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/manage/info",
  ...e
}), lZ = (e) => (e.client ?? I).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nZ = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), uZ = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), iZ = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sZ = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), dZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e
}), mZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e
}), CZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods",
  ...e
}), TZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e
}), fZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TimeLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e
}), kZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TaskCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/ProjectTasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $Z = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e
}), FZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e
}), UZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e
}), _Z = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e
}), JZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}/Types",
  ...e
}), NZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e
}), KZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e
}), YZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TaskTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TimeLogApprovals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogApprovals/{approvalId}/Status",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e1 = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogApprovals/{approvalId}/Approver",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a1 = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/ByResponsibleContact",
  ...e
}), l1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/CreatedByContact",
  ...e
}), n1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/ForProject/{projectId}",
  ...e
}), u1 = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e
}), i1 = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e
}), s1 = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d1 = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: KY,
  platformGetHello: YY,
  platformGetManageInfo: cZ,
  platformGetVersion: NY,
  platformMapIdentityApiConfirmEmail: oY,
  platformPostAccountLogout: uZ,
  platformPostAccountManageDownloadPersonalData: sZ,
  platformPostAccountManageLinkExternalLogin: iZ,
  platformPostAccountPerformExternalLogin: nZ,
  platformPostForgotPassword: rZ,
  platformPostLogin: XY,
  platformPostManage2Fa: tZ,
  platformPostManageInfo: lZ,
  platformPostRefresh: pY,
  platformPostRegister: ZY,
  platformPostResendConfirmationEmail: eZ,
  platformPostResetPassword: aZ,
  projectTasksCreateProjectTask: BZ,
  projectTasksDeleteProjectTask: xZ,
  projectTasksGetProjectTaskById: FZ,
  projectTasksGetProjectTasks: DZ,
  projectTasksGetProjectTasksCount: $Z,
  projectTasksPatchProjectTask: UZ,
  projectTasksUpdateProjectTask: OZ,
  projectsCreateProject: vZ,
  projectsCreateProjectPeriod: TZ,
  projectsCreateTaskForProject: LZ,
  projectsDeleteProject: hZ,
  projectsDeleteProjectPeriod: PZ,
  projectsDeleteTaskForProject: bZ,
  projectsGetProjectById: mZ,
  projectsGetProjectPeriods: yZ,
  projectsGetProjectTaskCategories: wZ,
  projectsGetProjectTaskCategoriesCount: EZ,
  projectsGetProjectTimeLogsCount: AZ,
  projectsGetProjectsByTenantId: dZ,
  projectsGetProjectsCountByTenantId: gZ,
  projectsGetTasksForProject: GZ,
  projectsGetTasksForProjectCount: RZ,
  projectsGetTimeLogsForProject: jZ,
  projectsPatchProject: CZ,
  projectsPatchProjectPeriod: fZ,
  projectsPatchTaskForProject: kZ,
  projectsUpdateProject: SZ,
  projectsUpdateProjectPeriod: IZ,
  projectsUpdateTaskForProject: MZ,
  taskCategoriesCountTenantTaskCategories: qZ,
  taskCategoriesCreateTaskCategory: HZ,
  taskCategoriesDeleteTaskCategory: VZ,
  taskCategoriesGetTaskCategoryById: _Z,
  taskCategoriesGetTaskCategoryTaskTypes: QZ,
  taskCategoriesGetTenantTaskCategories: WZ,
  taskCategoriesPatchTaskCategory: JZ,
  taskCategoriesUpdateTaskCategory: zZ,
  taskTypesCreateTaskType: XZ,
  taskTypesDeleteTaskType: NZ,
  taskTypesGetTaskTypeById: KZ,
  taskTypesPatchTaskType: YZ,
  taskTypesUpdateTaskType: ZZ,
  timeLogApprovalsRequestProjectHoursApproval: pZ,
  timeLogApprovalsUpdateProjectHoursApprovalApprover: e1,
  timeLogApprovalsUpdateProjectHoursApprovalStatus: oZ,
  timeLogsCountProjectPeriodTimeLogs: t1,
  timeLogsCreateProjectTimeLog: a1,
  timeLogsDeleteProjectTimeLog: u1,
  timeLogsGetProjectPeriodTimeLogs: r1,
  timeLogsGetProjectTimeLogById: i1,
  timeLogsGetProjectTimeLogs: n1,
  timeLogsGetProjectTimeLogsByResponsibleContact: c1,
  timeLogsGetProjectTimeLogsCreatedByContact: l1,
  timeLogsPatchProjectTimeLog: s1,
  timeLogsUpdateProjectTimeLog: d1
}, Symbol.toStringTag, { value: "Module" })), D = $(x()), v1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/version",
  ...e
}), g1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/health",
  ...e
}), h1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/hello",
  ...e
}), m1 = (e) => (e.client ?? D).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C1 = (e) => (e.client ?? D).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S1 = (e) => (e.client ?? D).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y1 = (e) => (e.client ?? D).get({
  url: "/confirmEmail",
  ...e
}), T1 = (e) => (e.client ?? D).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P1 = (e) => (e.client ?? D).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f1 = (e) => (e.client ?? D).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I1 = (e) => (e.client ?? D).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/manage/info",
  ...e
}), A1 = (e) => (e.client ?? D).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G1 = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), L1 = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), R1 = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), b1 = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), k1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M1 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Received/{quoteId}",
  ...e
}), x1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F1 = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/{quoteId}",
  ...e
}), O1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Received/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H1 = (e) => (e.client ?? D).delete({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e
}), q1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e
}), V1 = (e) => (e.client ?? D).patch({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _1 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J1 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Calculate",
  ...e
}), z1 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Close",
  ...e
}), Q1 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Reopen",
  ...e
}), N1 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Orders",
  ...e
}), K1 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/PlaceOrder",
  ...e
}), Y1 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/Me/{quoteId}/PlaceOrder",
  ...e
}), Z1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X1 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p1 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o1 = (e) => (e.client ?? D).delete({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e
}), e3 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e
}), r3 = (e) => (e.client ?? D).patch({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a3 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t3 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Upsert",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c3 = (e) => (e.client ?? D).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Calculate",
  ...e
}), l3 = (e) => (e.client ?? D).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/Exists",
  ...e
}), n3 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u3 = (e) => (e.client ?? D).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: g1,
  platformGetHello: h1,
  platformGetManageInfo: j1,
  platformGetVersion: v1,
  platformMapIdentityApiConfirmEmail: y1,
  platformPostAccountLogout: L1,
  platformPostAccountManageDownloadPersonalData: b1,
  platformPostAccountManageLinkExternalLogin: R1,
  platformPostAccountPerformExternalLogin: G1,
  platformPostForgotPassword: P1,
  platformPostLogin: C1,
  platformPostManage2Fa: I1,
  platformPostManageInfo: A1,
  platformPostRefresh: S1,
  platformPostRegister: m1,
  platformPostResendConfirmationEmail: T1,
  platformPostResetPassword: f1,
  quotesCalculateQuote: J1,
  quotesCalculateQuoteLine: c3,
  quotesCloseQuote: z1,
  quotesCreateOrderFromQuote: N1,
  quotesCreateQuote: M1,
  quotesCreateQuoteLine: X1,
  quotesDeleteQuote: H1,
  quotesDeleteQuoteLine: o1,
  quotesGetExtendedQuotes: E1,
  quotesGetMyReceivedQuote: U1,
  quotesGetMyReceivedQuoteLines: W1,
  quotesGetMyReceivedQuotes: x1,
  quotesGetMyReceivedQuotesCount: F1,
  quotesGetQuote: q1,
  quotesGetQuoteLine: e3,
  quotesGetQuoteLines: Z1,
  quotesGetQuoteLinesCount: p1,
  quotesGetQuotes: k1,
  quotesGetQuotesCount: w1,
  quotesGetReceivedQuote: $1,
  quotesGetReceivedQuoteLines: O1,
  quotesGetReceivedQuotes: D1,
  quotesGetReceivedQuotesCount: B1,
  quotesPatchQuote: V1,
  quotesPatchQuoteLine: r3,
  quotesPlaceMyOrderFromQuote: Y1,
  quotesPlaceOrderFromQuote: K1,
  quotesPreviewQuoteEmailTemplate: u3,
  quotesQuoteLineExists: l3,
  quotesReopenQuote: Q1,
  quotesSendQuoteEmail: n3,
  quotesUpdateQuote: _1,
  quotesUpdateQuoteLine: a3,
  quotesUpsertQuoteLine: t3
}, Symbol.toStringTag, { value: "Module" })), w = $(x()), i3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/api/v2/ReachService/Categories",
  ...e
}), s3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Categories/Reconciliation",
  ...e
}), d3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/{reachDecisionId}",
  ...e
}), h3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/Explain",
  ...e
}), m3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries/{reachDeliveryId}",
  ...e
}), y3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/version",
  ...e
}), T3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/health",
  ...e
}), P3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/hello",
  ...e
}), f3 = (e) => (e.client ?? w).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I3 = (e) => (e.client ?? w).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j3 = (e) => (e.client ?? w).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A3 = (e) => (e.client ?? w).get({
  url: "/confirmEmail",
  ...e
}), G3 = (e) => (e.client ?? w).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L3 = (e) => (e.client ?? w).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R3 = (e) => (e.client ?? w).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b3 = (e) => (e.client ?? w).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/manage/info",
  ...e
}), M3 = (e) => (e.client ?? w).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), E3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), D3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), B3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), $3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/{reachOccurrenceId}",
  ...e
}), U3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/{reachOccurrenceId}/Explain",
  ...e
}), O3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Policy",
  ...e
}), W3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Policy",
  ...e
}), H3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Policy",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Policy/Defaults",
  ...e
}), V3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Policy/Defaults",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e
}), Q3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e
}), N3 = (e) => ((e == null ? void 0 : e.client) ?? w).put({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e
}), Y3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e
}), Z3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p3 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e4 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules/{reachRuleId}",
  ...e
}), r4 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Rules/{reachRuleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a4 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules/{reachRuleId}/Enable",
  ...e
}), t4 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules/{reachRuleId}/Disable",
  ...e
}), c4 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Suppressions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l4 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Suppressions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n4 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Suppressions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  categoriesGetReachCategories: i3,
  categoriesGetReachCategoryReconciliation: s3,
  decisionsExplainReachRecipientOutcomes: h3,
  decisionsGetReachDecision: g3,
  decisionsGetReachDecisions: d3,
  decisionsGetReachDecisionsCount: v3,
  deliveriesGetReachDeliveries: m3,
  deliveriesGetReachDeliveriesCount: C3,
  deliveriesGetReachDelivery: S3,
  occurrencesExplainReachOccurrence: U3,
  occurrencesGetReachOccurrence: F3,
  occurrencesGetReachOccurrences: $3,
  occurrencesGetReachOccurrencesCount: x3,
  platformGetHealth: T3,
  platformGetHello: P3,
  platformGetManageInfo: k3,
  platformGetVersion: y3,
  platformMapIdentityApiConfirmEmail: A3,
  platformPostAccountLogout: E3,
  platformPostAccountManageDownloadPersonalData: B3,
  platformPostAccountManageLinkExternalLogin: D3,
  platformPostAccountPerformExternalLogin: w3,
  platformPostForgotPassword: L3,
  platformPostLogin: I3,
  platformPostManage2Fa: b3,
  platformPostManageInfo: M3,
  platformPostRefresh: j3,
  platformPostRegister: f3,
  platformPostResendConfirmationEmail: G3,
  platformPostResetPassword: R3,
  policyClearReachPolicy: O3,
  policyClearReachPolicyDefault: q3,
  policyGetReachPolicy: W3,
  policySetReachPolicy: H3,
  policySetReachPolicyDefault: V3,
  preferencesClearMemberReachPreference: K3,
  preferencesClearPersonalReachPreference: z3,
  preferencesGetMemberReachPreferences: Y3,
  preferencesGetPersonalReachPreferences: Q3,
  preferencesGetReachPreferences: _3,
  preferencesGetReachPreferencesCount: J3,
  preferencesSetMemberReachPreference: Z3,
  preferencesSetPersonalReachPreference: N3,
  rulesCreateReachRule: p3,
  rulesDisableReachRule: t4,
  rulesEnableReachRule: a4,
  rulesGetReachRule: e4,
  rulesGetReachRules: X3,
  rulesGetReachRulesCount: o3,
  rulesUpdateReachRuleAudience: r4,
  suppressionsCreateReachSuppression: l4,
  suppressionsGetReachSuppressions: c4,
  suppressionsGetReachSuppressionsCount: n4
}, Symbol.toStringTag, { value: "Module" })), F = $(x()), u4 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/version",
  ...e
}), i4 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/health",
  ...e
}), s4 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/hello",
  ...e
}), d4 = (e) => (e.client ?? F).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v4 = (e) => (e.client ?? F).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g4 = (e) => (e.client ?? F).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h4 = (e) => (e.client ?? F).get({
  url: "/confirmEmail",
  ...e
}), m4 = (e) => (e.client ?? F).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C4 = (e) => (e.client ?? F).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S4 = (e) => (e.client ?? F).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y4 = (e) => (e.client ?? F).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T4 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/manage/info",
  ...e
}), P4 = (e) => (e.client ?? F).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f4 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), I4 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), j4 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), A4 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), G4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/LoyaltyPrograms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/LoyaltyPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R4 = (e) => (e.client ?? F).post({
  url: "/api/v2/SalesService/LoyaltyPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b4 = (e) => (e.client ?? F).delete({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e
}), k4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e
}), M4 = (e) => (e.client ?? F).patch({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w4 = (e) => (e.client ?? F).put({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/Margins/{marginId}/Details",
  ...e
}), D4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/PointOfSales/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/PointOfSales",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $4 = (e) => (e.client ?? F).post({
  url: "/api/v2/SalesService/PointOfSales",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x4 = (e) => (e.client ?? F).delete({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e
}), F4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e
}), U4 = (e) => (e.client ?? F).patch({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O4 = (e) => (e.client ?? F).put({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/SalesLiteratures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/SalesLiteratures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q4 = (e) => (e.client ?? F).post({
  url: "/api/v2/SalesService/SalesLiteratures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/SalesLiteratures/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _4 = (e) => (e.client ?? F).delete({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e
}), J4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e
}), z4 = (e) => (e.client ?? F).patch({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q4 = (e) => (e.client ?? F).put({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/Stores/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/Stores",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y4 = (e) => (e.client ?? F).post({
  url: "/api/v2/SalesService/Stores",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z4 = (e) => (e.client ?? F).delete({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e
}), X4 = (e) => (e.client ?? F).get({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e
}), p4 = (e) => (e.client ?? F).patch({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o4 = (e) => (e.client ?? F).put({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loyaltyProgramsCountLoyaltyPrograms: G4,
  loyaltyProgramsCreateLoyaltyProgram: R4,
  loyaltyProgramsDeleteLoyaltyProgram: b4,
  loyaltyProgramsGetLoyaltyProgram: k4,
  loyaltyProgramsGetLoyaltyPrograms: L4,
  loyaltyProgramsPatchLoyaltyProgram: M4,
  loyaltyProgramsUpdateLoyaltyProgram: w4,
  marginsGetQuote: E4,
  platformGetHealth: i4,
  platformGetHello: s4,
  platformGetManageInfo: T4,
  platformGetVersion: u4,
  platformMapIdentityApiConfirmEmail: h4,
  platformPostAccountLogout: I4,
  platformPostAccountManageDownloadPersonalData: A4,
  platformPostAccountManageLinkExternalLogin: j4,
  platformPostAccountPerformExternalLogin: f4,
  platformPostForgotPassword: C4,
  platformPostLogin: v4,
  platformPostManage2Fa: y4,
  platformPostManageInfo: P4,
  platformPostRefresh: g4,
  platformPostRegister: d4,
  platformPostResendConfirmationEmail: m4,
  platformPostResetPassword: S4,
  pointOfSalesCountPointOfSales: D4,
  pointOfSalesCreatePointOfSale: $4,
  pointOfSalesDeletePointOfSale: x4,
  pointOfSalesGetPointOfSale: F4,
  pointOfSalesGetPointOfSales: B4,
  pointOfSalesPatchPointOfSale: U4,
  pointOfSalesUpdatePointOfSale: O4,
  salesLiteraturesCountSalesLiteratures: W4,
  salesLiteraturesCreateSalesLiterature: q4,
  salesLiteraturesDeleteSalesLiterature: _4,
  salesLiteraturesGetExtendedSalesLiteratures: V4,
  salesLiteraturesGetSalesLiterature: J4,
  salesLiteraturesGetSalesLiteratures: H4,
  salesLiteraturesPatchSalesLiterature: z4,
  salesLiteraturesUpdateSalesLiterature: Q4,
  storesCountStores: N4,
  storesCreateStore: Y4,
  storesDeleteStore: Z4,
  storesGetStore: X4,
  storesGetStores: K4,
  storesPatchStore: p4,
  storesUpdateStore: o4
}, Symbol.toStringTag, { value: "Module" })), K = $(x()), e5 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/version",
  ...e
}), r5 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/health",
  ...e
}), a5 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/hello",
  ...e
}), t5 = (e) => (e.client ?? K).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c5 = (e) => (e.client ?? K).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l5 = (e) => (e.client ?? K).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n5 = (e) => (e.client ?? K).get({
  url: "/confirmEmail",
  ...e
}), u5 = (e) => (e.client ?? K).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i5 = (e) => (e.client ?? K).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s5 = (e) => (e.client ?? K).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d5 = (e) => (e.client ?? K).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v5 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/manage/info",
  ...e
}), g5 = (e) => (e.client ?? K).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), m5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), C5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), S5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), y5 = (e) => (e.client ?? K).get({
  url: "/api/v2/SearchService/Query",
  ...e
}), T5 = (e) => (e.client ?? K).post({
  url: "/api/v2/SearchService/Query",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P5 = (e) => (e.client ?? K).get({
  url: "/api/v2/SearchService/Availability",
  ...e
}), f5 = (e) => (e.client ?? K).post({
  url: "/api/v2/SearchService/Index/Provision",
  ...e
}), ICe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: r5,
  platformGetHello: a5,
  platformGetManageInfo: v5,
  platformGetVersion: e5,
  platformMapIdentityApiConfirmEmail: n5,
  platformPostAccountLogout: m5,
  platformPostAccountManageDownloadPersonalData: S5,
  platformPostAccountManageLinkExternalLogin: C5,
  platformPostAccountPerformExternalLogin: h5,
  platformPostForgotPassword: i5,
  platformPostLogin: c5,
  platformPostManage2Fa: d5,
  platformPostManageInfo: g5,
  platformPostRefresh: l5,
  platformPostRegister: t5,
  platformPostResendConfirmationEmail: u5,
  platformPostResetPassword: s5,
  searchGetAvailability: P5,
  searchProvisionIndex: f5,
  searchSearch: y5,
  searchSearchStructured: T5
}, Symbol.toStringTag, { value: "Module" })), S = $(x()), I5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}",
  ...e
}), G5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/Provision",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R5 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Permissions/{permission}",
  ...e
}), b5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Enable",
  ...e
}), k5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Suspend",
  ...e
}), M5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Disable",
  ...e
}), w5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E5 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Applications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B5 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e
}), $5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e
}), x5 = (e) => (e.client ?? S).patch({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F5 = (e) => (e.client ?? S).put({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}/Permissions",
  ...e
}), O5 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}/Roles",
  ...e
}), W5 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/version",
  ...e
}), H5 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/health",
  ...e
}), q5 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/hello",
  ...e
}), V5 = (e) => (e.client ?? S).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _5 = (e) => (e.client ?? S).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J5 = (e) => (e.client ?? S).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z5 = (e) => (e.client ?? S).get({
  url: "/confirmEmail",
  ...e
}), Q5 = (e) => (e.client ?? S).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N5 = (e) => (e.client ?? S).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K5 = (e) => (e.client ?? S).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y5 = (e) => (e.client ?? S).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z5 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/manage/info",
  ...e
}), X5 = (e) => (e.client ?? S).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p5 = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), o5 = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), e6 = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), r6 = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), a6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Logs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Logs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c6 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/SecurityService/Logs/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l6 = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/SecurityService/Logs/Me/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications",
  ...e
}), u6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/OAuthApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications/Count",
  ...e
}), s6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e
}), d6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e
}), v6 = (e) => (e.client ?? S).patch({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g6 = (e) => (e.client ?? S).put({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations",
  ...e
}), m6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations/Count",
  ...e
}), C6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations/{authorizationId}",
  ...e
}), S6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e
}), f6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e
}), I6 = (e) => (e.client ?? S).patch({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j6 = (e) => (e.client ?? S).put({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}",
  ...e
}), G6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}",
  ...e
}), L6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles",
  ...e
}), R6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications",
  ...e
}), b6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments",
  ...e
}), k6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}",
  ...e
}), M6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}",
  ...e
}), w6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}",
  ...e
}), E6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}",
  ...e
}), D6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/ByEnrollment/{enrollmentId}",
  ...e
}), B6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/Mine",
  ...e
}), $6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Permissions/GrantableFor/{enrollmentId}",
  ...e
}), x6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Roles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e
}), W6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e
}), H6 = (e) => (e.client ?? S).patch({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q6 = (e) => (e.client ?? S).put({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions",
  ...e
}), _6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}",
  ...e
}), J6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}",
  ...e
}), z6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments",
  ...e
}), Q6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications",
  ...e
}), N6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}",
  ...e
}), K6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}",
  ...e
}), Y6 = (e) => (e.client ?? S).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}",
  ...e
}), Z6 = (e) => (e.client ?? S).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}",
  ...e
}), X6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Roles/ByEnrollment/{enrollmentId}",
  ...e
}), p6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/SecurityCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o6 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/SecurityCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e7 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/SecurityLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r7 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/SecurityLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a7 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Webhooks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t7 = (e) => (e.client ?? S).get({
  url: "/api/v2/SecurityService/Webhooks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applicationPrincipalsDisableApplicationPrincipal: M5,
  applicationPrincipalsEnableApplicationPrincipal: b5,
  applicationPrincipalsGetApplicationPrincipal: A5,
  applicationPrincipalsGetApplicationPrincipals: I5,
  applicationPrincipalsGetApplicationPrincipalsCount: j5,
  applicationPrincipalsGrantPermission: L5,
  applicationPrincipalsProvisionApplicationPrincipal: G5,
  applicationPrincipalsRevokePermission: R5,
  applicationPrincipalsSuspendApplicationPrincipal: k5,
  applicationsCreateBusinessApplication: E5,
  applicationsDeleteBusinessApplication: B5,
  applicationsGetBusinessApplicationById: $5,
  applicationsGetBusinessApplications: w5,
  applicationsGetBusinessApplicationsCount: D5,
  applicationsGetPermissionsByApplication: U5,
  applicationsGetRolesByApplication: O5,
  applicationsPatchBusinessApplication: x5,
  applicationsUpdateBusinessApplication: F5,
  logsGetLogs: a6,
  logsGetLogsCount: t6,
  logsGetMyLogs: c6,
  logsGetMyLogsCount: l6,
  oAuthApplicationsCreateOAuthApplication: u6,
  oAuthApplicationsDeleteOAuthApplication: s6,
  oAuthApplicationsGetOAuthApplicationById: d6,
  oAuthApplicationsGetOAuthApplications: n6,
  oAuthApplicationsGetOAuthApplicationsCount: i6,
  oAuthApplicationsGetOAuthAuthorizationById: C6,
  oAuthApplicationsGetOAuthAuthorizations: h6,
  oAuthApplicationsGetOAuthAuthorizationsCount: m6,
  oAuthApplicationsPatchOAuthApplication: v6,
  oAuthApplicationsUpdateOAuthApplication: g6,
  permissionsAssignPermissionToBusinessApplication: E6,
  permissionsAssignPermissionToEnrollment: M6,
  permissionsAssignRoleToPermission: G6,
  permissionsCreatePermission: y6,
  permissionsDeletePermission: P6,
  permissionsGetApplicationsByPermission: R6,
  permissionsGetEnrollmentsByPermission: b6,
  permissionsGetGrantablePermissionsForEnrollment: $6,
  permissionsGetMyPermissions: B6,
  permissionsGetPermission: f6,
  permissionsGetPermissions: S6,
  permissionsGetPermissionsByEnrollment: D6,
  permissionsGetPermissionsCount: T6,
  permissionsGetRolesByPermission: L6,
  permissionsPatchPermission: I6,
  permissionsRevokePermissionFromBusinessApplication: w6,
  permissionsRevokePermissionFromEnrollment: k6,
  permissionsRevokeRoleFromPermission: A6,
  permissionsUpdatePermission: j6,
  platformGetHealth: H5,
  platformGetHello: q5,
  platformGetManageInfo: Z5,
  platformGetVersion: W5,
  platformMapIdentityApiConfirmEmail: z5,
  platformPostAccountLogout: o5,
  platformPostAccountManageDownloadPersonalData: r6,
  platformPostAccountManageLinkExternalLogin: e6,
  platformPostAccountPerformExternalLogin: p5,
  platformPostForgotPassword: N5,
  platformPostLogin: _5,
  platformPostManage2Fa: Y5,
  platformPostManageInfo: X5,
  platformPostRefresh: J5,
  platformPostRegister: V5,
  platformPostResendConfirmationEmail: Q5,
  platformPostResetPassword: K5,
  rolesAssignPermissionToRole: J6,
  rolesAssignRoleToBusinessApplication: Z6,
  rolesAssignRoleToEnrollment: K6,
  rolesCreateRole: F6,
  rolesDeleteRole: O6,
  rolesGetApplicationsByRole: Q6,
  rolesGetEnrollmentsByRole: z6,
  rolesGetRole: W6,
  rolesGetRolePermissions: V6,
  rolesGetRoles: x6,
  rolesGetRolesByEnrollment: X6,
  rolesGetRolesCount: U6,
  rolesPatchRole: H6,
  rolesRevokePermissionFromRole: _6,
  rolesRevokeRoleFromBusinessApplication: Y6,
  rolesRevokeRoleFromEnrollment: N6,
  rolesUpdateRole: q6,
  securityCertificatesGetSecurityCertificates: p6,
  securityCertificatesGetSecurityCertificatesCount: o6,
  securityLogsGetSecurityLogs: e7,
  securityLogsGetSecurityLogsCount: r7,
  webhooksGetWebhookRequests: a7,
  webhooksGetWebhookRequestsCount: t7
}, Symbol.toStringTag, { value: "Module" })), G = $(x()), c7 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/version",
  ...e
}), l7 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/health",
  ...e
}), n7 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/hello",
  ...e
}), u7 = (e) => (e.client ?? G).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i7 = (e) => (e.client ?? G).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s7 = (e) => (e.client ?? G).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d7 = (e) => (e.client ?? G).get({
  url: "/confirmEmail",
  ...e
}), v7 = (e) => (e.client ?? G).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g7 = (e) => (e.client ?? G).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h7 = (e) => (e.client ?? G).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m7 = (e) => (e.client ?? G).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C7 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/manage/info",
  ...e
}), S7 = (e) => (e.client ?? G).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), T7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), P7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), f7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), I7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceCases",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e
}), L7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e
}), R7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceCaseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e
}), D7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e
}), B7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceLevelAgreements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e
}), W7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e
}), H7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e
}), K7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e
}), Y7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceQueues",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e8 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e
}), r8 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e
}), a8 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t8 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c8 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l8 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/Services",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n8 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u8 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e
}), i8 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e
}), s8 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d8 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ACe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: l7,
  platformGetHello: n7,
  platformGetManageInfo: C7,
  platformGetVersion: c7,
  platformMapIdentityApiConfirmEmail: d7,
  platformPostAccountLogout: T7,
  platformPostAccountManageDownloadPersonalData: f7,
  platformPostAccountManageLinkExternalLogin: P7,
  platformPostAccountPerformExternalLogin: y7,
  platformPostForgotPassword: g7,
  platformPostLogin: i7,
  platformPostManage2Fa: m7,
  platformPostManageInfo: S7,
  platformPostRefresh: s7,
  platformPostRegister: u7,
  platformPostResendConfirmationEmail: v7,
  platformPostResetPassword: h7,
  serviceCaseTypesCreateServiceCaseType: M7,
  serviceCaseTypesDeleteServiceCaseType: E7,
  serviceCaseTypesGetServiceCaseTypeById: D7,
  serviceCaseTypesGetServiceCaseTypes: k7,
  serviceCaseTypesGetServiceCaseTypesCount: w7,
  serviceCaseTypesPatchServiceCaseType: B7,
  serviceCaseTypesUpdateServiceCaseType: $7,
  serviceCasesCreateServiceCase: j7,
  serviceCasesDeleteServiceCase: G7,
  serviceCasesGetServiceCaseById: L7,
  serviceCasesGetServiceCases: I7,
  serviceCasesGetServiceCasesCount: A7,
  serviceCasesPatchServiceCase: R7,
  serviceCasesUpdateServiceCase: b7,
  serviceLevelAgreementsCreateServiceLevelAgreement: F7,
  serviceLevelAgreementsDeleteServiceLevelAgreement: O7,
  serviceLevelAgreementsGetServiceLevelAgreementById: W7,
  serviceLevelAgreementsGetServiceLevelAgreements: x7,
  serviceLevelAgreementsGetServiceLevelAgreementsCount: U7,
  serviceLevelAgreementsPatchServiceLevelAgreement: H7,
  serviceLevelAgreementsUpdateServiceLevelAgreement: q7,
  serviceLevelsCountAllServiceLevels: _7,
  serviceLevelsCreateServiceLevel: z7,
  serviceLevelsDeleteServiceLevel: N7,
  serviceLevelsGetAllServiceLevels: V7,
  serviceLevelsGetServiceLevelById: K7,
  serviceLevelsGetServiceLevels: J7,
  serviceLevelsGetServiceLevelsCount: Q7,
  serviceLevelsPatchServiceLevel: Y7,
  serviceLevelsUpdateServiceLevel: Z7,
  serviceQueuesCreateServiceQueue: p7,
  serviceQueuesDeleteServiceQueue: e8,
  serviceQueuesGetServiceQueueById: r8,
  serviceQueuesGetServiceQueues: X7,
  serviceQueuesGetServiceQueuesCount: o7,
  serviceQueuesPatchServiceQueue: a8,
  serviceQueuesUpdateServiceQueue: t8,
  servicesCreateService: l8,
  servicesDeleteService: u8,
  servicesGetServiceById: i8,
  servicesGetServices: c8,
  servicesGetServicesCount: n8,
  servicesPatchService: s8,
  servicesUpdateService: d8
}, Symbol.toStringTag, { value: "Module" })), T = $(x()), v8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/BillsOfLading",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e
}), C8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e
}), S8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e
}), j8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e
}), A8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/version",
  ...e
}), R8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/health",
  ...e
}), b8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/hello",
  ...e
}), k8 = (e) => (e.client ?? T).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M8 = (e) => (e.client ?? T).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w8 = (e) => (e.client ?? T).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E8 = (e) => (e.client ?? T).get({
  url: "/confirmEmail",
  ...e
}), D8 = (e) => (e.client ?? T).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B8 = (e) => (e.client ?? T).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $8 = (e) => (e.client ?? T).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x8 = (e) => (e.client ?? T).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/manage/info",
  ...e
}), U8 = (e) => (e.client ?? T).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), W8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), H8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), q8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), V8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e
}), Q8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e
}), N8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/Shipments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e
}), o8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e
}), e9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e
}), n9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e
}), u9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingCouriers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e
}), h9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e
}), m9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingLabels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e
}), f9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e
}), I9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e
}), b9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e
}), k9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingRegions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e
}), $9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e
}), x9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingZones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e
}), q9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e
}), V9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  billsOfLadingCreateBillOfLading: g8,
  billsOfLadingCreateBillOfLadingLine: P8,
  billsOfLadingDeleteBillOfLading: m8,
  billsOfLadingDeleteBillOfLadingLine: I8,
  billsOfLadingGetBillOfLadingById: C8,
  billsOfLadingGetBillOfLadingLineById: j8,
  billsOfLadingGetBillOfLadingLines: T8,
  billsOfLadingGetBillOfLadingLinesCount: f8,
  billsOfLadingGetBillsOfLading: v8,
  billsOfLadingGetBillsOfLadingCount: h8,
  billsOfLadingPatchBillOfLading: S8,
  billsOfLadingPatchBillOfLadingLine: A8,
  billsOfLadingUpdateBillOfLading: y8,
  billsOfLadingUpdateBillOfLadingLine: G8,
  itemShippingPoliciesCreateItemShippingPolicy: _8,
  itemShippingPoliciesDeleteItemShippingPolicy: z8,
  itemShippingPoliciesGetItemShippingPolicies: V8,
  itemShippingPoliciesGetItemShippingPoliciesCount: J8,
  itemShippingPoliciesGetItemShippingPolicyById: Q8,
  itemShippingPoliciesPatchItemShippingPolicy: N8,
  itemShippingPoliciesUpdateItemShippingPolicy: K8,
  platformGetHealth: R8,
  platformGetHello: b8,
  platformGetManageInfo: F8,
  platformGetVersion: L8,
  platformMapIdentityApiConfirmEmail: E8,
  platformPostAccountLogout: W8,
  platformPostAccountManageDownloadPersonalData: q8,
  platformPostAccountManageLinkExternalLogin: H8,
  platformPostAccountPerformExternalLogin: O8,
  platformPostForgotPassword: B8,
  platformPostLogin: M8,
  platformPostManage2Fa: x8,
  platformPostManageInfo: U8,
  platformPostRefresh: w8,
  platformPostRegister: k8,
  platformPostResendConfirmationEmail: D8,
  platformPostResetPassword: $8,
  shipmentsCreateShipment: Z8,
  shipmentsDeleteShipment: p8,
  shipmentsGetShipmentById: o8,
  shipmentsGetShipments: Y8,
  shipmentsGetShipmentsCount: X8,
  shipmentsPatchShipment: e9,
  shipmentsUpdateShipment: r9,
  shippingClassesCreateShippingClass: t9,
  shippingClassesDeleteShippingClass: l9,
  shippingClassesGetShippingClassById: n9,
  shippingClassesGetShippingClasses: a9,
  shippingClassesGetShippingClassesCount: c9,
  shippingClassesPatchShippingClass: u9,
  shippingClassesUpdateShippingClass: i9,
  shippingCouriersCreateShippingCourier: d9,
  shippingCouriersDeleteShippingCourier: g9,
  shippingCouriersGetShippingCourierById: h9,
  shippingCouriersGetShippingCouriers: s9,
  shippingCouriersGetShippingCouriersCount: v9,
  shippingCouriersPatchShippingCourier: m9,
  shippingCouriersUpdateShippingCourier: C9,
  shippingLabelsCreateShippingLabel: y9,
  shippingLabelsDeleteShippingLabel: P9,
  shippingLabelsGetShippingLabelById: f9,
  shippingLabelsGetShippingLabels: S9,
  shippingLabelsGetShippingLabelsCount: T9,
  shippingLabelsPatchShippingLabel: I9,
  shippingLabelsUpdateShippingLabel: j9,
  shippingMethodsCreateShippingMethod: G9,
  shippingMethodsDeleteShippingMethod: R9,
  shippingMethodsGetShippingMethodById: b9,
  shippingMethodsGetShippingMethods: A9,
  shippingMethodsGetShippingMethodsCount: L9,
  shippingMethodsPatchShippingMethod: k9,
  shippingMethodsUpdateShippingMethod: M9,
  shippingRegionsCreateShippingRegion: E9,
  shippingRegionsDeleteShippingRegion: B9,
  shippingRegionsGetShippingRegionById: $9,
  shippingRegionsGetShippingRegions: w9,
  shippingRegionsGetShippingRegionsCount: D9,
  shippingRegionsPatchShippingRegion: x9,
  shippingRegionsUpdateShippingRegion: F9,
  shippingZonesCreateShippingZone: O9,
  shippingZonesDeleteShippingZone: H9,
  shippingZonesGetShippingZoneById: q9,
  shippingZonesGetShippingZones: U9,
  shippingZonesGetShippingZonesCount: W9,
  shippingZonesPatchShippingZone: V9,
  shippingZonesUpdateShippingZone: _9
}, Symbol.toStringTag, { value: "Module" })), v = $(x()), J9 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z9 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q9 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N9 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e
}), K9 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e
}), Y9 = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z9 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X9 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p9 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/Curriculums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o9 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eX = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e
}), rX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e
}), aX = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tX = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cX = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/version",
  ...e
}), lX = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/health",
  ...e
}), nX = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/hello",
  ...e
}), uX = (e) => (e.client ?? v).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iX = (e) => (e.client ?? v).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sX = (e) => (e.client ?? v).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dX = (e) => (e.client ?? v).get({
  url: "/confirmEmail",
  ...e
}), vX = (e) => (e.client ?? v).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gX = (e) => (e.client ?? v).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hX = (e) => (e.client ?? v).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mX = (e) => (e.client ?? v).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CX = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/manage/info",
  ...e
}), SX = (e) => (e.client ?? v).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yX = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), TX = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), PX = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), fX = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), IX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jX = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Skills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GX = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e
}), LX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e
}), RX = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bX = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}",
  ...e
}), EX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DX = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $X = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e
}), xX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e
}), FX = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UX = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WX = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qX = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e
}), VX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e
}), _X = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JX = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QX = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KX = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e
}), YX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e
}), ZX = (e) => (e.client ?? v).patch({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XX = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pX = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oX = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e
}), a0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e
}), t0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c0 = (e) => (e.client ?? v).post({
  ...u,
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), l0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e
}), s0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e
}), d0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e
}), C0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e
}), S0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e
}), I0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e
}), j0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A0 = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G0 = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}",
  ...e
}), R0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/GroupEnrollments/Count",
  ...e
}), M0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), F0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), U0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), O0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}",
  ...e
}), V0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}/Archive",
  ...e
}), J0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}/Unarchive",
  ...e
}), z0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Direct",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z0 = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X0 = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p0 = (e) => (e.client ?? v).delete({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}",
  ...e
}), o0 = (e) => (e.client ?? v).put({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ep = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Read",
  ...e
}), rp = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/TeamConversations/{conversationId}/Messages",
  ...e
}), ap = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/TeamConversations/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tp = (e) => (e.client ?? v).get({
  url: "/api/v2/SocialService/TeamConversations/Inbox",
  ...e
}), cp = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/TeamConversations/Messages/{messageId}/Read",
  ...e
}), lp = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/TeamConversations/Messages/{messageId}/Ack",
  ...e
}), np = (e) => (e.client ?? v).post({
  url: "/api/v2/SocialService/TeamConversations/Messages/{messageId}/Notified",
  ...e
}), LCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curriculumExperiencesCreateCurriculumExperience: z9,
  curriculumExperiencesDeleteCurriculumExperience: N9,
  curriculumExperiencesGetCurriculumExperience: K9,
  curriculumExperiencesGetCurriculumExperiences: J9,
  curriculumExperiencesGetCurriculumExperiencesCount: Q9,
  curriculumExperiencesPatchCurriculumExperience: Y9,
  curriculumExperiencesUpdateCurriculumExperience: Z9,
  curriculumsCreateCurriculum: p9,
  curriculumsDeleteCurriculum: eX,
  curriculumsGetCurriculum: rX,
  curriculumsGetCurriculums: X9,
  curriculumsGetCurriculumsCount: o9,
  curriculumsPatchCurriculum: aX,
  curriculumsUpdateCurriculum: tX,
  platformGetHealth: lX,
  platformGetHello: nX,
  platformGetManageInfo: CX,
  platformGetVersion: cX,
  platformMapIdentityApiConfirmEmail: dX,
  platformPostAccountLogout: TX,
  platformPostAccountManageDownloadPersonalData: fX,
  platformPostAccountManageLinkExternalLogin: PX,
  platformPostAccountPerformExternalLogin: yX,
  platformPostForgotPassword: gX,
  platformPostLogin: iX,
  platformPostManage2Fa: mX,
  platformPostManageInfo: SX,
  platformPostRefresh: sX,
  platformPostRegister: uX,
  platformPostResendConfirmationEmail: vX,
  platformPostResetPassword: hX,
  skillsCreateSkill: jX,
  skillsDeleteSkill: GX,
  skillsGetSkillById: LX,
  skillsGetSkills: IX,
  skillsGetSkillsCount: AX,
  skillsPatchSkill: RX,
  skillsUpdateSkill: bX,
  socialFeedsCreateFeedPost: DX,
  socialFeedsDeleteFeedPost: $X,
  socialFeedsGetFeedNotifications: kX,
  socialFeedsGetFeedPost: xX,
  socialFeedsGetFeedPosts: EX,
  socialFeedsGetFeedPostsCount: BX,
  socialFeedsGetNotification: wX,
  socialFeedsGetNotificationsCount: MX,
  socialFeedsPatchFeedPost: FX,
  socialFeedsUpdateFeedPost: UX,
  socialGroupsCountSocialGroups: HX,
  socialGroupsCreateSocialGroup: WX,
  socialGroupsDeleteSocialGroup: qX,
  socialGroupsGetSocialGroupById: VX,
  socialGroupsGetSocialGroups: OX,
  socialGroupsPatchSocialGroup: _X,
  socialGroupsUpdateSocialGroup: JX,
  socialPostsCreateSocialCommentReaction: T0,
  socialPostsCreateSocialPost: QX,
  socialPostsCreateSocialPostAttachment: oX,
  socialPostsCreateSocialPostComment: g0,
  socialPostsCreateSocialPostReaction: n0,
  socialPostsDeleteSocialCommentReaction: f0,
  socialPostsDeleteSocialPost: KX,
  socialPostsDeleteSocialPostAttachment: r0,
  socialPostsDeleteSocialPostComment: m0,
  socialPostsDeleteSocialPostReaction: i0,
  socialPostsGetSocialCommentReaction: I0,
  socialPostsGetSocialCommentReactions: y0,
  socialPostsGetSocialCommentReactionsCount: P0,
  socialPostsGetSocialPost: YX,
  socialPostsGetSocialPostAttachment: a0,
  socialPostsGetSocialPostAttachments: pX,
  socialPostsGetSocialPostAttachmentsCount: e0,
  socialPostsGetSocialPostComment: C0,
  socialPostsGetSocialPostComments: v0,
  socialPostsGetSocialPostCommentsCount: h0,
  socialPostsGetSocialPostReaction: s0,
  socialPostsGetSocialPostReactions: l0,
  socialPostsGetSocialPostReactionsCount: u0,
  socialPostsGetSocialPosts: zX,
  socialPostsGetSocialPostsCount: NX,
  socialPostsPatchSocialPost: ZX,
  socialPostsUpdateSocialCommentReaction: j0,
  socialPostsUpdateSocialPost: XX,
  socialPostsUpdateSocialPostAttachment: t0,
  socialPostsUpdateSocialPostComment: S0,
  socialPostsUpdateSocialPostReaction: d0,
  socialPostsUploadSocialPostImageAttachment: c0,
  socialProfilesArchiveNotification: _0,
  socialProfilesCountConversations: N0,
  socialProfilesCountFollowedProfiles: $0,
  socialProfilesCountFollowerProfiles: w0,
  socialProfilesCountFollowers: b0,
  socialProfilesCountFollows: D0,
  socialProfilesCountGroupEnrollments: k0,
  socialProfilesCountMessages: X0,
  socialProfilesCountNotifications: H0,
  socialProfilesCountSocialProfiles: G0,
  socialProfilesCreateConversation: Q0,
  socialProfilesCreateMessage: Z0,
  socialProfilesCreateNotification: W0,
  socialProfilesDeleteMessage: p0,
  socialProfilesFollow: U0,
  socialProfilesFollowExists: F0,
  socialProfilesGetConversations: z0,
  socialProfilesGetFollowedProfiles: B0,
  socialProfilesGetFollowerProfiles: M0,
  socialProfilesGetFollowers: R0,
  socialProfilesGetFollows: E0,
  socialProfilesGetMessages: Y0,
  socialProfilesGetNotificationById: q0,
  socialProfilesGetNotifications: O0,
  socialProfilesGetOrCreateDirectConversation: K0,
  socialProfilesGetSocialProfile: L0,
  socialProfilesGetSocialProfiles: A0,
  socialProfilesMarkConversationRead: ep,
  socialProfilesMarkNotificationRead: V0,
  socialProfilesUnarchiveNotification: J0,
  socialProfilesUnfollow: x0,
  socialProfilesUpdateMessage: o0,
  teamConversationsAckTeamMessage: lp,
  teamConversationsGetTeamConversationMessages: rp,
  teamConversationsGetTeamInbox: tp,
  teamConversationsMarkTeamMessageNotified: np,
  teamConversationsMarkTeamMessageRead: cp,
  teamConversationsSendTeamMessage: ap
}, Symbol.toStringTag, { value: "Module" })), b = $(x()), up = (e) => (e.client ?? b).get({
  url: "/api/v2/ArtifactsService/Artifacts",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), ip = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/ArtifactsService/Artifacts",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sp = (e) => (e.client ?? b).get({
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}",
  ...e
}), dp = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}/Versions",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), vp = (e) => (e.client ?? b).post({
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}/Archive",
  ...e
}), gp = (e) => (e.client ?? b).post({
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}/Move",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hp = (e) => (e.client ?? b).post({
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}/Rename",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mp = (e) => (e.client ?? b).post({
  url: "/api/v2/ArtifactsService/Artifacts/{artifactId}/ViewCapability",
  ...e
}), Cp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Avatars/{socialProfileId}",
  ...e
}), Sp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/StorageService/Avatars/User",
  ...e
}), yp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/User",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Tp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Avatars/User/{userId}",
  ...e
}), Pp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Avatars/Tenant/{tenantId}",
  ...e
}), fp = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/Tenant/{tenantId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ip = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Avatars/Contact/{contactId}",
  ...e
}), jp = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/Contacts/{contactId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ap = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/StorageService/Blobs",
  ...e
}), Gp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/StorageService/Blobs/Single",
  ...e
}), Lp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/EditorAssets/{fileId}",
  ...e
}), Rp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  url: "/api/v2/StorageService/EditorAssets/resolve",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), bp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/version",
  ...e
}), kp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/health",
  ...e
}), Mp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/hello",
  ...e
}), wp = (e) => (e.client ?? b).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ep = (e) => (e.client ?? b).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dp = (e) => (e.client ?? b).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bp = (e) => (e.client ?? b).get({
  url: "/confirmEmail",
  ...e
}), $p = (e) => (e.client ?? b).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xp = (e) => (e.client ?? b).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fp = (e) => (e.client ?? b).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Up = (e) => (e.client ?? b).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Op = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/manage/info",
  ...e
}), Wp = (e) => (e.client ?? b).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), qp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Vp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _p = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Jp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  ...u,
  url: "/api/v2/StorageService/Files",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zp = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/api/v2/StorageService/Files",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Qp = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  ...u,
  url: "/api/v2/StorageService/Files/Count",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Np = (e) => (e.client ?? b).delete({
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e
}), Kp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e
}), Yp = (e) => (e.client ?? b).put({
  ...u,
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Zp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Files/{fileId}/Raw",
  ...e
}), Xp = (e) => (e.client ?? b).get({
  url: "/api/v2/StorageService/Files/{fileId}/Thumbnail",
  ...e
}), pp = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/single",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), op = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/single",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), eo = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ro = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ao = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/users/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), to = (e) => (e.client ?? b).post({
  ...u,
  url: "/api/v2/fs/radzen/users/{recordType}/{recordId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), co = (e) => (e.client ?? b).put({
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/stream",
  ...e
}), lo = (e) => (e.client ?? b).put({
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/stream",
  ...e
}), no = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/api/v2/StorageService/Uploads",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), RCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  artifactsArchiveArtifact: vp,
  artifactsGetArtifact: sp,
  artifactsGetArtifacts: up,
  artifactsMintArtifactViewCapability: mp,
  artifactsMoveArtifact: gp,
  artifactsPublishArtifact: ip,
  artifactsPublishArtifactVersion: dp,
  artifactsRenameArtifact: hp,
  avatarsGetAvatar: Cp,
  avatarsGetContactAvatar: Ip,
  avatarsGetCurrentUserAvatar: Sp,
  avatarsGetTenantAvatar: Pp,
  avatarsGetUserAvatar: Tp,
  avatarsUpdateContactAvatar: jp,
  avatarsUpdateTenantAvatar: fp,
  avatarsUpdateUserAvatar: yp,
  blobsGetBlob: Gp,
  blobsGetBlobs: Ap,
  editorAssetsGetEditorAsset: Lp,
  editorAssetsPostEditorAssetsResolve: Rp,
  filesCreateFile: zp,
  filesDeleteFile: Np,
  filesDownloadFile: Zp,
  filesGetFile: Kp,
  filesGetFileThumbnail: Xp,
  filesGetFiles: Jp,
  filesGetFilesCount: Qp,
  filesUpdateFile: Yp,
  platformGetHealth: kp,
  platformGetHello: Mp,
  platformGetManageInfo: Op,
  platformGetVersion: bp,
  platformMapIdentityApiConfirmEmail: Bp,
  platformPostAccountLogout: qp,
  platformPostAccountManageDownloadPersonalData: _p,
  platformPostAccountManageLinkExternalLogin: Vp,
  platformPostAccountPerformExternalLogin: Hp,
  platformPostForgotPassword: xp,
  platformPostLogin: Ep,
  platformPostManage2Fa: Up,
  platformPostManageInfo: Wp,
  platformPostRefresh: Dp,
  platformPostRegister: wp,
  platformPostResendConfirmationEmail: $p,
  platformPostResetPassword: Fp,
  radzenEditorRadzenUploadImage: eo,
  radzenEditorRadzenUploadImageScoped: ro,
  radzenEditorRadzenUploadSingle: pp,
  radzenEditorRadzenUploadSingleScoped: op,
  radzenEditorRadzenUploadStream: co,
  radzenEditorRadzenUploadStreamScoped: lo,
  radzenEditorRadzenUploadUserImage: ao,
  radzenEditorRadzenUploadUserImageScoped: to,
  uploadsSaveFile: no
}, Symbol.toStringTag, { value: "Module" })), q = $(x()), uo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), io = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), so = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/Purchase",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), go = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/{subscriptionId}/PayableObligation",
  ...e
}), ho = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/version",
  ...e
}), mo = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/health",
  ...e
}), Co = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/hello",
  ...e
}), So = (e) => (e.client ?? q).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yo = (e) => (e.client ?? q).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), To = (e) => (e.client ?? q).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Po = (e) => (e.client ?? q).get({
  url: "/confirmEmail",
  ...e
}), fo = (e) => (e.client ?? q).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Io = (e) => (e.client ?? q).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jo = (e) => (e.client ?? q).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ao = (e) => (e.client ?? q).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Go = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/manage/info",
  ...e
}), Lo = (e) => (e.client ?? q).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ro = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bo = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ko = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Mo = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), wo = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/api/v2/SubscriptionsService/PlatformPricing",
  ...e
}), Eo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Do = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $o = (e) => (e.client ?? q).delete({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e
}), xo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e
}), Fo = (e) => (e.client ?? q).patch({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uo = (e) => (e.client ?? q).put({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wo = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/Subscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ho = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qo = (e) => (e.client ?? q).delete({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e
}), Vo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e
}), _o = (e) => (e.client ?? q).patch({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jo = (e) => (e.client ?? q).put({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commercialSubscriptionsEstablishCommercialSubscription: io,
  commercialSubscriptionsGetCommercialSubscriptions: uo,
  commercialSubscriptionsGetCommercialSubscriptionsCount: vo,
  commercialSubscriptionsGetSubscriptionPayableObligation: go,
  commercialSubscriptionsPurchaseOffering: so,
  platformGetHealth: mo,
  platformGetHello: Co,
  platformGetManageInfo: Go,
  platformGetVersion: ho,
  platformMapIdentityApiConfirmEmail: Po,
  platformPostAccountLogout: bo,
  platformPostAccountManageDownloadPersonalData: Mo,
  platformPostAccountManageLinkExternalLogin: ko,
  platformPostAccountPerformExternalLogin: Ro,
  platformPostForgotPassword: Io,
  platformPostLogin: yo,
  platformPostManage2Fa: Ao,
  platformPostManageInfo: Lo,
  platformPostRefresh: To,
  platformPostRegister: So,
  platformPostResendConfirmationEmail: fo,
  platformPostResetPassword: jo,
  platformPricingGetPlatformPricing: wo,
  subscriptionPlansCreateSubscriptionPlan: Do,
  subscriptionPlansDeleteSubscriptionPlan: $o,
  subscriptionPlansGetSubscriptionPlanById: xo,
  subscriptionPlansGetSubscriptionPlans: Eo,
  subscriptionPlansGetSubscriptionPlansCount: Bo,
  subscriptionPlansPatchSubscriptionPlan: Fo,
  subscriptionPlansUpdateSubscriptionPlan: Uo,
  subscriptionsCreateSubscription: Wo,
  subscriptionsDeleteSubscription: qo,
  subscriptionsGetSubscriptionById: Vo,
  subscriptionsGetSubscriptions: Oo,
  subscriptionsGetSubscriptionsCount: Ho,
  subscriptionsPatchSubscription: _o,
  subscriptionsUpdateSubscription: Jo
}, Symbol.toStringTag, { value: "Module" })), d = $(x()), zo = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/version",
  ...e
}), Qo = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/health",
  ...e
}), No = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/hello",
  ...e
}), Ko = (e) => (e.client ?? d).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yo = (e) => (e.client ?? d).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zo = (e) => (e.client ?? d).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xo = (e) => (e.client ?? d).get({
  url: "/confirmEmail",
  ...e
}), po = (e) => (e.client ?? d).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oo = (e) => (e.client ?? d).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eee = (e) => (e.client ?? d).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ree = (e) => (e.client ?? d).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aee = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/manage/info",
  ...e
}), tee = (e) => (e.client ?? d).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cee = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), lee = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), nee = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), uee = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), iee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), see = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/InquiryRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e
}), gee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e
}), hee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), See = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/KnowledgeArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e
}), Pee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e
}), fee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/MaintenanceVisits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e
}), Ree = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e
}), bee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e
}), Bee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e
}), $ee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/RefundRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e
}), Hee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e
}), qee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e
}), Nee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e
}), Kee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/ReturnRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e
}), ere = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e
}), rre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), are = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportEntitlements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e
}), ure = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e
}), ire = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequestAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e
}), mre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e
}), Cre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e
}), Ire = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e
}), jre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Are = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Tickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/{attachmentId}",
  ...e
}), Mre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTicketPriorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ere = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e
}), Bre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e
}), $re = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ure = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ore = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e
}), Hre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e
}), qre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _re = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}",
  ...e
}), Qre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}",
  ...e
}), Nre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}/Messages",
  ...e
}), Kre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTicketTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e
}), pre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e
}), ore = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eae = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aae = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cae = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e
}), lae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e
}), nae = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uae = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sae = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/WarrantyRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vae = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e
}), gae = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e
}), hae = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mae = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inquiryRequestsCreateInquiryRequest: see,
  inquiryRequestsDeleteInquiryRequest: vee,
  inquiryRequestsGetInquiryRequest: gee,
  inquiryRequestsGetInquiryRequests: iee,
  inquiryRequestsGetInquiryRequestsCount: dee,
  inquiryRequestsPatchInquiryRequest: hee,
  inquiryRequestsUpdateInquiryRequest: mee,
  knowledgeArticlesCreateKnowledgeArticle: See,
  knowledgeArticlesDeleteKnowledgeArticle: Tee,
  knowledgeArticlesGetKnowledgeArticle: Pee,
  knowledgeArticlesGetKnowledgeArticles: Cee,
  knowledgeArticlesGetKnowledgeArticlesCount: yee,
  knowledgeArticlesPatchKnowledgeArticle: fee,
  knowledgeArticlesUpdateKnowledgeArticle: Iee,
  maintenanceVisitsCreateMaintenanceVisit: Aee,
  maintenanceVisitsDeleteMaintenanceVisit: Lee,
  maintenanceVisitsGetMaintenanceVisit: Ree,
  maintenanceVisitsGetMaintenanceVisits: jee,
  maintenanceVisitsGetMaintenanceVisitsCount: Gee,
  maintenanceVisitsPatchMaintenanceVisit: bee,
  maintenanceVisitsUpdateMaintenanceVisit: kee,
  platformGetHealth: Qo,
  platformGetHello: No,
  platformGetManageInfo: aee,
  platformGetVersion: zo,
  platformMapIdentityApiConfirmEmail: Xo,
  platformPostAccountLogout: lee,
  platformPostAccountManageDownloadPersonalData: uee,
  platformPostAccountManageLinkExternalLogin: nee,
  platformPostAccountPerformExternalLogin: cee,
  platformPostForgotPassword: oo,
  platformPostLogin: Yo,
  platformPostManage2Fa: ree,
  platformPostManageInfo: tee,
  platformPostRefresh: Zo,
  platformPostRegister: Ko,
  platformPostResendConfirmationEmail: po,
  platformPostResetPassword: eee,
  refundPoliciesCreateRefundPolicy: wee,
  refundPoliciesDeleteRefundPolicy: Dee,
  refundPoliciesGetRefundPolicies: Mee,
  refundPoliciesGetRefundPoliciesCount: Eee,
  refundPoliciesGetRefundPolicy: Bee,
  refundPoliciesPatchRefundPolicy: $ee,
  refundPoliciesUpdateRefundPolicy: xee,
  refundRequestsCreateRefundRequest: Uee,
  refundRequestsDeleteRefundRequest: Wee,
  refundRequestsGetRefundRequest: Hee,
  refundRequestsGetRefundRequests: Fee,
  refundRequestsGetRefundRequestsCount: Oee,
  refundRequestsPatchRefundRequest: qee,
  refundRequestsUpdateRefundRequest: Vee,
  returnPoliciesCreateReturnPolicy: Jee,
  returnPoliciesDeleteReturnPolicy: Qee,
  returnPoliciesGetReturnPolicies: _ee,
  returnPoliciesGetReturnPoliciesCount: zee,
  returnPoliciesGetReturnPolicy: Nee,
  returnPoliciesPatchReturnPolicy: Kee,
  returnPoliciesUpdateReturnPolicy: Yee,
  returnRequestsCreateReturnRequest: Xee,
  returnRequestsDeleteReturnRequest: oee,
  returnRequestsGetReturnRequest: ere,
  returnRequestsGetReturnRequests: Zee,
  returnRequestsGetReturnRequestsCount: pee,
  returnRequestsPatchReturnRequest: rre,
  returnRequestsUpdateReturnRequest: are,
  supportEntitlementsCreateSupportEntitlement: cre,
  supportEntitlementsDeleteSupportEntitlement: nre,
  supportEntitlementsGetSupportEntitlement: ure,
  supportEntitlementsGetSupportEntitlements: tre,
  supportEntitlementsGetSupportEntitlementsCount: lre,
  supportEntitlementsPatchSupportEntitlement: ire,
  supportEntitlementsUpdateSupportEntitlement: sre,
  supportRequestAttachmentsCreateSupportRequestAttachment: vre,
  supportRequestAttachmentsDeleteSupportRequestAttachment: hre,
  supportRequestAttachmentsGetSupportRequestAttachment: mre,
  supportRequestAttachmentsGetSupportRequestAttachments: dre,
  supportRequestAttachmentsGetSupportRequestAttachmentsCount: gre,
  supportRequestAttachmentsPatchSupportRequestAttachment: Cre,
  supportRequestAttachmentsUpdateSupportRequestAttachment: Sre,
  supportRequestsCreateSupportRequest: Tre,
  supportRequestsDeleteSupportRequest: fre,
  supportRequestsGetSupportRequest: Ire,
  supportRequestsGetSupportRequestAttachmentByRequest: kre,
  supportRequestsGetSupportRequestAttachmentsByRequest: Lre,
  supportRequestsGetSupportRequestAttachmentsCountByRequest: bre,
  supportRequestsGetSupportRequestTickets: Gre,
  supportRequestsGetSupportRequests: yre,
  supportRequestsGetSupportRequestsCount: Pre,
  supportRequestsPatchSupportRequest: jre,
  supportRequestsRelateSupportRequestToAttachment: Rre,
  supportRequestsUpdateSupportRequest: Are,
  supportTicketPrioritiesCreateSupportTicketPriority: wre,
  supportTicketPrioritiesDeleteSupportTicketPriority: Dre,
  supportTicketPrioritiesGetSupportTicketPriorities: Mre,
  supportTicketPrioritiesGetSupportTicketPrioritiesCount: Ere,
  supportTicketPrioritiesGetSupportTicketPriority: Bre,
  supportTicketPrioritiesPatchSupportTicketPriority: $re,
  supportTicketPrioritiesUpdateSupportTicketPriority: xre,
  supportTicketTypesCreateSupportTicketType: Yre,
  supportTicketTypesDeleteSupportTicketType: Xre,
  supportTicketTypesGetSupportTicketType: pre,
  supportTicketTypesGetSupportTicketTypes: Kre,
  supportTicketTypesGetSupportTicketTypesCount: Zre,
  supportTicketTypesPatchSupportTicketType: ore,
  supportTicketTypesUpdateSupportTicketType: eae,
  supportTicketsCreateSupportTicket: Ure,
  supportTicketsDeleteSupportTicket: Wre,
  supportTicketsDeleteSupportTicketConversation: zre,
  supportTicketsGetSupportTicket: Hre,
  supportTicketsGetSupportTicketConversation: Qre,
  supportTicketsGetSupportTicketConversationMessages: Nre,
  supportTicketsGetSupportTicketConversations: _re,
  supportTicketsGetSupportTickets: Fre,
  supportTicketsGetSupportTicketsCount: Ore,
  supportTicketsPatchSupportTicket: qre,
  supportTicketsRelateSupportTicketToConversation: Jre,
  supportTicketsUpdateSupportTicket: Vre,
  warrantyPoliciesCreateWarrantyPolicy: aae,
  warrantyPoliciesDeleteWarrantyPolicy: cae,
  warrantyPoliciesGetWarrantyPolicies: rae,
  warrantyPoliciesGetWarrantyPoliciesCount: tae,
  warrantyPoliciesGetWarrantyPolicy: lae,
  warrantyPoliciesPatchWarrantyPolicy: nae,
  warrantyPoliciesUpdateWarrantyPolicy: uae,
  warrantyRequestsCreateWarrantyRequest: sae,
  warrantyRequestsDeleteWarrantyRequest: vae,
  warrantyRequestsGetWarrantyRequest: gae,
  warrantyRequestsGetWarrantyRequests: iae,
  warrantyRequestsGetWarrantyRequestsCount: dae,
  warrantyRequestsPatchWarrantyRequest: hae,
  warrantyRequestsUpdateWarrantyRequest: mae
}, Symbol.toStringTag, { value: "Module" })), i = $(x()), Cae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Antiforgery/GetAndStoreTokens",
  ...e
}), Sae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Antiforgery/IsRequestValid",
  ...e
}), yae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}",
  ...e
}), fae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/Provision",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/PaymentsConnector",
  ...e
}), jae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions/{permission}",
  ...e
}), Gae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Enable",
  ...e
}), Lae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Suspend",
  ...e
}), Rae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Disable",
  ...e
}), bae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}",
  ...e
}), wae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}",
  ...e
}), Eae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}/Verify",
  ...e
}), Dae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Carts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Carts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Carts/{cartId}",
  ...e
}), xae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Carts/{cartId}",
  ...e
}), Fae = (e) => ((e == null ? void 0 : e.client) ?? i).delete({
  url: "/api/v2/SystemService/Carts/Guests",
  ...e
}), Uae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), qae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), Vae = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ae = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Emails/SendBasic",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/version",
  ...e
}), Nae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/health",
  ...e
}), Kae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/hello",
  ...e
}), Yae = (e) => (e.client ?? i).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zae = (e) => (e.client ?? i).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xae = (e) => (e.client ?? i).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pae = (e) => (e.client ?? i).get({
  url: "/confirmEmail",
  ...e
}), oae = (e) => (e.client ?? i).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ete = (e) => (e.client ?? i).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rte = (e) => (e.client ?? i).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ate = (e) => (e.client ?? i).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/manage/info",
  ...e
}), cte = (e) => (e.client ?? i).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lte = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), nte = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ute = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ite = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), ste = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Health",
  ...e
}), dte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages/{id}",
  ...e
}), hte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Inbox/Correlations/{correlationId}",
  ...e
}), mte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Duplicates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Duplicates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ste = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Expedite",
  ...e
}), yte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/CancelRetry",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/ReleaseLease",
  ...e
}), Pte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/DeadLetter",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Quarantine",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ite = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Replay",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/IPLookups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ate = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/IPLookups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/IPLookups/{ipLookupId}",
  ...e
}), Lte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/IPLookups/{ipLookupId}",
  ...e
}), Rte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/LicenseAssignments/{licenseId}",
  ...e
}), bte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/LicenseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), kte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/LicenseAssignments/{licenseId}/{enrollmentId}",
  ...e
}), Mte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses",
  ...e
}), wte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}",
  ...e
}), Ete = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Assignments",
  ...e
}), Dte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Attributes",
  ...e
}), Bte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Features",
  ...e
}), $te = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Quota",
  ...e
}), xte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Licensing/Licenses/Redeem",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), Fte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Licensing/Licenses/Validate",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), Ute = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Migrations",
  ...e
}), Ote = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Migrations/Migrate",
  ...e
}), Wte = (e) => (e.client ?? i).get({
  url: "/api/v2/StudioService/Modules",
  ...e
}), Hte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/StudioService/Modules/Data",
  ...e
}), qte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _te = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e
}), zte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e
}), Qte = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/Key/{key}",
  ...e
}), Yte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Health",
  ...e
}), Xte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ote = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages/{id}",
  ...e
}), ece = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Correlations/{correlationId}",
  ...e
}), rce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Replay",
  ...e
}), ace = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Expedite",
  ...e
}), tce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Cancel",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/DeadLetter",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/ReleaseLease",
  ...e
}), nce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Poison",
  ...e
}), uce = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Outbox/Poison/Resolve",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ice = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Tenants/{tenantId}/Poison",
  ...e
}), sce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Tenants/{tenantId}/Poison/Resolve",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Overview",
  ...e
}), vce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gce = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Portals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e
}), Cce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e
}), Sce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ice = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e
}), jce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e
}), Ace = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rce = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e
}), Ece = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e
}), Dce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/ModuleGrants",
  ...e
}), xce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}/ModuleGrants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e
}), Vce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e
}), _ce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qce = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Users",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e
}), Xce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e
}), pce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ele = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Extended",
  ...e
}), rle = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/AdminDetail",
  ...e
}), ale = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Password",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tle = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Email/Confirm",
  ...e
}), cle = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}/AdminProfile",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lle = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nle = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  antiforgeryGetAndStoreTokens: Cae,
  antiforgeryIsRequestValid: Sae,
  applicationPrincipalsDisableGlobalApplicationPrincipal: Rae,
  applicationPrincipalsEnableGlobalApplicationPrincipal: Gae,
  applicationPrincipalsGetGlobalApplicationPrincipal: Pae,
  applicationPrincipalsGetGlobalApplicationPrincipals: yae,
  applicationPrincipalsGetGlobalApplicationPrincipalsCount: Tae,
  applicationPrincipalsGrantGlobalApplicationPrincipalPermission: jae,
  applicationPrincipalsProvisionGlobalApplicationPrincipal: fae,
  applicationPrincipalsProvisionPaymentsConnector: Iae,
  applicationPrincipalsRevokeGlobalApplicationPrincipalPermission: Aae,
  applicationPrincipalsSuspendGlobalApplicationPrincipal: Lae,
  businessDomainsDeleteSystemBusinessDomain: Mae,
  businessDomainsGetSystemBusinessDomainById: wae,
  businessDomainsGetSystemBusinessDomains: bae,
  businessDomainsGetSystemBusinessDomainsCount: kae,
  businessDomainsVerifySystemBusinessDomain: Eae,
  cartsDeleteSystemCart: $ae,
  cartsGetSystemCartById: xae,
  cartsGetSystemCarts: Dae,
  cartsGetSystemCartsCount: Bae,
  cartsPurgeSystemGuestCarts: Fae,
  contactOptionsCreateSystemContactOption: Oae,
  contactOptionsDeleteSystemContactOption: Hae,
  contactOptionsGetSystemContactOptionById: qae,
  contactOptionsGetSystemContactOptions: Uae,
  contactOptionsGetSystemContactOptionsCount: Wae,
  contactOptionsPatchSystemContactOption: Vae,
  contactOptionsUpdateSystemContactOption: _ae,
  emailsAdminPreviewBasicEmailTemplate: zae,
  emailsAdminSendBasicEmail: Jae,
  inboxCancelInboxMessageRetry: yte,
  inboxDeadLetterInboxMessage: Pte,
  inboxExpediteInboxMessage: Ste,
  inboxGetDuplicateInboxMessages: mte,
  inboxGetDuplicateInboxMessagesCount: Cte,
  inboxGetInboxCorrelationChain: hte,
  inboxGetInboxHealth: ste,
  inboxGetInboxMessage: gte,
  inboxGetInboxMessages: dte,
  inboxGetInboxMessagesCount: vte,
  inboxQuarantineInboxMessage: fte,
  inboxReleaseInboxMessageLease: Tte,
  inboxReplayInboxMessage: Ite,
  ipLookupsDeleteSystemIpLookup: Gte,
  ipLookupsGetSystemIpLookupById: Lte,
  ipLookupsGetSystemIpLookups: jte,
  ipLookupsGetSystemIpLookupsCount: Ate,
  licenseAssignmentsAssignLicense: bte,
  licenseAssignmentsGetLicenseAssignments: Rte,
  licenseAssignmentsRevokeLicense: kte,
  licensingGetAttributesForLicense: Dte,
  licensingGetFeaturesForLicense: Bte,
  licensingGetLicenseAssignments: Ete,
  licensingGetLicenseById: wte,
  licensingGetLicenseRecordsQuota: $te,
  licensingGetLicenses: Mte,
  licensingRedeemLicense: xte,
  licensingValidateLicense: Fte,
  migrationsMigrate: Ote,
  migrationsMigrations: Ute,
  modulesGetAllModules: Wte,
  modulesGetAvailableModules: Hte,
  optionsCreateSystemOption: Vte,
  optionsDeleteSystemOption: Jte,
  optionsGetSystemOptionById: zte,
  optionsGetSystemOptionByKey: Kte,
  optionsGetSystemOptions: qte,
  optionsGetSystemOptionsCount: _te,
  optionsPatchSystemOption: Qte,
  optionsUpdateSystemOption: Nte,
  optionsUpsertSystemOption: Yte,
  outboxCancelOutboxMessage: tce,
  outboxDeadLetterOutboxMessage: cce,
  outboxExpediteOutboxMessage: ace,
  outboxGetOutboxCorrelationChain: ece,
  outboxGetOutboxHealth: Zte,
  outboxGetOutboxMessage: ote,
  outboxGetOutboxMessages: Xte,
  outboxGetOutboxMessagesCount: pte,
  outboxGetOutboxPoisonPositions: nce,
  outboxGetTenantOutboxPoisonPositions: ice,
  outboxReleaseOutboxMessageLease: lce,
  outboxReplayOutboxMessage: rce,
  outboxResolveOutboxPoison: uce,
  outboxResolveTenantOutboxPoison: sce,
  overviewGetSystemOverview: dce,
  platformGetHealth: Nae,
  platformGetHello: Kae,
  platformGetManageInfo: tte,
  platformGetVersion: Qae,
  platformMapIdentityApiConfirmEmail: pae,
  platformPostAccountLogout: nte,
  platformPostAccountManageDownloadPersonalData: ite,
  platformPostAccountManageLinkExternalLogin: ute,
  platformPostAccountPerformExternalLogin: lte,
  platformPostForgotPassword: ete,
  platformPostLogin: Zae,
  platformPostManage2Fa: ate,
  platformPostManageInfo: cte,
  platformPostRefresh: Xae,
  platformPostRegister: Yae,
  platformPostResendConfirmationEmail: oae,
  platformPostResetPassword: rte,
  portalsCreateSystemPortal: gce,
  portalsDeleteSystemPortal: mce,
  portalsGetSystemPortalById: Cce,
  portalsGetSystemPortals: vce,
  portalsGetSystemPortalsCount: hce,
  portalsPatchSystemPortal: Sce,
  portalsUpdateSystemPortal: yce,
  tenantOptionsCreateSystemTenantOption: Pce,
  tenantOptionsDeleteSystemTenantOption: Ice,
  tenantOptionsGetSystemTenantOptionById: jce,
  tenantOptionsGetSystemTenantOptions: Tce,
  tenantOptionsGetSystemTenantOptionsCount: fce,
  tenantOptionsPatchSystemTenantOption: Ace,
  tenantOptionsUpdateSystemTenantOption: Gce,
  tenantsAdminPreviewTenantEmail: Fce,
  tenantsAdminSendTenantEmail: Uce,
  tenantsCreateTenant: Rce,
  tenantsDeleteTenant: wce,
  tenantsGetAllExtendedTenants: kce,
  tenantsGetAllTenants: Lce,
  tenantsGetExtendedTenantsCount: Mce,
  tenantsGetTenant: Ece,
  tenantsGetTenantModuleGrants: $ce,
  tenantsGetTenantsCount: bce,
  tenantsPatchTenant: Dce,
  tenantsSetTenantModuleGrants: xce,
  tenantsUpdateTenant: Bce,
  userOptionsCreateSystemUserOption: Wce,
  userOptionsDeleteSystemUserOption: qce,
  userOptionsGetSystemUserOptionById: Vce,
  userOptionsGetSystemUserOptions: Oce,
  userOptionsGetSystemUserOptionsCount: Hce,
  userOptionsPatchSystemUserOption: _ce,
  userOptionsUpdateSystemUserOption: Jce,
  usersAdminPreviewUserEmailTemplate: lle,
  usersAdminSendUserEmail: nle,
  usersConfirmUserEmail: tle,
  usersCreateAccountHolder: Qce,
  usersDeleteAccountHolder: Zce,
  usersGetExtendedAccountHolder: ele,
  usersGetExtendedUsers: Kce,
  usersGetExtendedUsersCount: Yce,
  usersGetUser: Xce,
  usersGetUserAdminDetail: rle,
  usersGetUsers: zce,
  usersGetUsersCount: Nce,
  usersPatchAccountHolder: pce,
  usersSetUserPassword: ale,
  usersUpdateAccountHolder: oce,
  usersUpdateAccountHolderAdminProfile: cle
}, Symbol.toStringTag, { value: "Module" })), c = $(x()), ule = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/BusinessRelationships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ile = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/BusinessRelationships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/BusinessRelationships/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dle = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e
}), vle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e
}), gle = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Departments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mle = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Departments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Departments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sle = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e
}), yle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e
}), Tle = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ple = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fle = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}/Move",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ile = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}/Head",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jle = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}/Head/Member",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ale = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}/Archive",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gle = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}/Restore",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rle = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/EmployeeEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ble = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kle = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e
}), Mle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e
}), wle = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ele = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ble = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $le = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Enrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Enrollments/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fle = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Enrollments/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ule = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e
}), Ole = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e
}), Wle = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hle = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qle = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/version",
  ...e
}), Vle = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/health",
  ...e
}), _le = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/hello",
  ...e
}), Jle = (e) => (e.client ?? c).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zle = (e) => (e.client ?? c).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qle = (e) => (e.client ?? c).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nle = (e) => (e.client ?? c).get({
  url: "/confirmEmail",
  ...e
}), Kle = (e) => (e.client ?? c).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yle = (e) => (e.client ?? c).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zle = (e) => (e.client ?? c).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xle = (e) => (e.client ?? c).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ple = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/manage/info",
  ...e
}), ole = (e) => (e.client ?? c).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ene = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), rne = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ane = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), tne = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), cne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Industries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Industries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Industries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), une = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e
}), ine = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e
}), sne = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Invitations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Invitations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Invitations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mne = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Invitations/{invitationId}",
  ...e
}), Cne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Invitations/{invitationId}",
  ...e
}), Sne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Accept",
  ...e
}), yne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Decline",
  ...e
}), Tne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Resend",
  ...e
}), Pne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/JobRoles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/JobRoles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ine = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/JobRoles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/JobRoles/CapabilityCatalog",
  ...e
}), Ane = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}",
  ...e
}), Gne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}",
  ...e
}), Lne = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}/ReadingPack",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/JobRoles/{jobRoleId}/RequestedCapabilities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Members/{enrollmentId}/Card",
  ...e
}), wne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Members/ByAccountHolder/{accountHolderId}/Card",
  ...e
}), Ene = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Members/BySocialProfile/{socialProfileId}/Card",
  ...e
}), Dne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xne = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e
}), Fne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e
}), Une = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), One = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Options/Key/{key}",
  ...e
}), Hne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Organization/Chart",
  ...e
}), Vne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Positions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ne = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Positions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Positions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Positions/ByEnrollment/{enrollmentId}",
  ...e
}), Qne = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e
}), Nne = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e
}), Kne = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/ReportsTo",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/JobRole",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pne = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/ReadingPack",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), one = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/RequestedCapabilities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/Archive",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/Restore",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}/Save",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Positions/Save",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Segments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Segments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Segments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uue = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e
}), iue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e
}), sue = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), due = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Sizes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Sizes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Sizes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mue = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e
}), Cue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e
}), Sue = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yue = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Team",
  ...e
}), Pue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Team/Count",
  ...e
}), fue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Team/{enrollmentId}",
  ...e
}), Iue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/TeamContactEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gue = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e
}), Lue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e
}), Rue = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bue = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/TeamProjectEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eue = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e
}), Due = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e
}), Bue = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ue = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/TeamRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oue = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e
}), Wue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e
}), Hue = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), que = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Members",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Que = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Members",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Members/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/ByMember/{enrollmentId}",
  ...e
}), Yue = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/ByMembers",
  ...e
}), Zue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Members/{membershipId}/Remove",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xue = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Members/{membershipId}/Role",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pue = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams/Members/Move",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oue = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/HomeDepartment",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Archive",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}/Restore",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aie = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e
}), tie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e
}), cie = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lie = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nie = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/TenantsService/Tenants/Root",
  ...e
}), uie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/Current",
  ...e
}), iie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e
}), sie = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), die = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Extended",
  ...e
}), gie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Avatar",
  ...e
}), hie = (e) => (e.client ?? c).post({
  ...u,
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Avatar",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), mie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Wallet",
  ...e
}), Cie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/SocialProfile",
  ...e
}), Sie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Cart",
  ...e
}), yie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Users",
  ...e
}), Tie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments",
  ...e
}), Pie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}",
  ...e
}), fie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Extended",
  ...e
}), Iie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Permissions",
  ...e
}), jie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Permissions/Validate",
  ...e
}), Aie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations",
  ...e
}), Gie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Pending",
  ...e
}), Lie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Redeemed",
  ...e
}), Rie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Revoked",
  ...e
}), bie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Licenses",
  ...e
}), kie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses",
  ...e
}), Mie = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), wie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), Eie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), Die = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Features",
  ...e
}), Bie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/HasAccess",
  ...e
}), $ie = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Tenants",
  ...e
}), xie = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  url: "/api/v2/TenantsService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Select",
  ...e
}), Uie = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  url: "/api/v2/TenantsService/Tenants/Deselect",
  ...e
}), Oie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/WebPortals",
  ...e
}), Wie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Territories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Territories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Territories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jie = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e
}), zie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e
}), Qie = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nie = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yie = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Types/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xie = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e
}), pie = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e
}), oie = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ese = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ase = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/UnitGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cse = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e
}), lse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e
}), nse = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), use = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ise = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sse = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vse = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e
}), gse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e
}), hse = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mse = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sse = (e) => (e.client ?? c).post({
  url: "/api/v2/TenantsService/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Units/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tse = (e) => (e.client ?? c).delete({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e
}), Pse = (e) => (e.client ?? c).get({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e
}), fse = (e) => (e.client ?? c).patch({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ise = (e) => (e.client ?? c).put({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  businessRelationshipsCreateBusinessRelationship: ile,
  businessRelationshipsDeleteBusinessRelationship: dle,
  businessRelationshipsGetBusinessRelationshipById: vle,
  businessRelationshipsGetBusinessRelationships: ule,
  businessRelationshipsGetBusinessRelationshipsCount: sle,
  businessRelationshipsUpdateBusinessRelationship: gle,
  departmentsArchiveTenantDepartment: Ale,
  departmentsCreateTenantDepartment: mle,
  departmentsDeleteTenantDepartment: Sle,
  departmentsGetTenantDepartmentById: yle,
  departmentsGetTenantDepartments: hle,
  departmentsGetTenantDepartmentsCount: Cle,
  departmentsMakeTenantDepartmentHead: jle,
  departmentsMoveTenantDepartment: fle,
  departmentsPatchTenantDepartment: Tle,
  departmentsRestoreTenantDepartment: Gle,
  departmentsSetTenantDepartmentHead: Ile,
  departmentsUpdateTenantDepartment: Ple,
  employeeEnrollmentsCreateTenantEmployeeEnrollment: Rle,
  employeeEnrollmentsDeleteTenantEmployeeEnrollment: kle,
  employeeEnrollmentsGetTenantEmployeeEnrollmentById: Mle,
  employeeEnrollmentsGetTenantEmployeeEnrollments: Lle,
  employeeEnrollmentsGetTenantEmployeeEnrollmentsCount: ble,
  employeeEnrollmentsPatchTenantEmployeeEnrollment: wle,
  employeeEnrollmentsUpdateTenantEmployeeEnrollment: Ele,
  enrollmentsCreateTenantEnrollment: Ble,
  enrollmentsDeleteTenantEnrollment: Ule,
  enrollmentsGetExtendedTenantEnrollments: xle,
  enrollmentsGetExtendedTenantEnrollmentsCount: Fle,
  enrollmentsGetTenantEnrollmentById: Ole,
  enrollmentsGetTenantEnrollments: Dle,
  enrollmentsGetTenantEnrollmentsCount: $le,
  enrollmentsPatchTenantEnrollment: Wle,
  enrollmentsUpdateTenantEnrollment: Hle,
  industriesCreateTenantIndustry: lne,
  industriesDeleteTenantIndustry: une,
  industriesGetTenantIndustries: cne,
  industriesGetTenantIndustriesCount: nne,
  industriesGetTenantIndustryById: ine,
  industriesPatchTenantIndustry: sne,
  industriesUpdateTenantIndustry: dne,
  invitationsAcceptTenantInvitation: Sne,
  invitationsDeclineTenantInvitation: yne,
  invitationsDeleteTenantInvitation: mne,
  invitationsGetTenantInvitationById: Cne,
  invitationsGetTenantInvitations: vne,
  invitationsGetTenantInvitationsCount: hne,
  invitationsResendTenantInvitation: Tne,
  invitationsSendTenantInvitation: gne,
  jobRolesCreateTenantJobRole: fne,
  jobRolesDeleteTenantJobRole: Ane,
  jobRolesGetTenantJobRoleById: Gne,
  jobRolesGetTenantJobRoleCapabilityCatalog: jne,
  jobRolesGetTenantJobRoles: Pne,
  jobRolesGetTenantJobRolesCount: Ine,
  jobRolesPatchTenantJobRole: Lne,
  jobRolesSetTenantJobRoleReadingPack: bne,
  jobRolesSetTenantJobRoleRequestedCapabilities: kne,
  jobRolesUpdateTenantJobRole: Rne,
  membersGetTenantMemberCard: Mne,
  membersGetTenantMemberCardByAccountHolder: wne,
  membersGetTenantMemberCardBySocialProfile: Ene,
  optionsCreateTenantOption: Bne,
  optionsDeleteTenantOption: xne,
  optionsGetTenantOptionById: Fne,
  optionsGetTenantOptionByKey: Wne,
  optionsGetTenantOptions: Dne,
  optionsGetTenantOptionsCount: $ne,
  optionsPatchTenantOption: Une,
  optionsUpdateTenantOption: One,
  optionsUpsertTenantOption: Hne,
  organizationGetTenantOrgChart: qne,
  platformGetHealth: Vle,
  platformGetHello: _le,
  platformGetManageInfo: ple,
  platformGetVersion: qle,
  platformMapIdentityApiConfirmEmail: Nle,
  platformPostAccountLogout: rne,
  platformPostAccountManageDownloadPersonalData: tne,
  platformPostAccountManageLinkExternalLogin: ane,
  platformPostAccountPerformExternalLogin: ene,
  platformPostForgotPassword: Yle,
  platformPostLogin: zle,
  platformPostManage2Fa: Xle,
  platformPostManageInfo: ole,
  platformPostRefresh: Qle,
  platformPostRegister: Jle,
  platformPostResendConfirmationEmail: Kle,
  platformPostResetPassword: Zle,
  positionsAddTenantPosition: tue,
  positionsArchiveTenantPosition: eue,
  positionsCreateTenantPosition: _ne,
  positionsDeleteTenantPosition: Qne,
  positionsGetTenantMemberPositions: zne,
  positionsGetTenantPositionById: Nne,
  positionsGetTenantPositions: Vne,
  positionsGetTenantPositionsCount: Jne,
  positionsPatchTenantPosition: Kne,
  positionsRestoreTenantPosition: rue,
  positionsSaveTenantPosition: aue,
  positionsSetTenantPositionJobRole: Xne,
  positionsSetTenantPositionReadingPack: pne,
  positionsSetTenantPositionReportsTo: Zne,
  positionsSetTenantPositionRequestedCapabilities: one,
  positionsUpdateTenantPosition: Yne,
  segmentsCreateTenantSegment: lue,
  segmentsDeleteTenantSegment: uue,
  segmentsGetTenantSegmentById: iue,
  segmentsGetTenantSegments: cue,
  segmentsGetTenantSegmentsCount: nue,
  segmentsPatchTenantSegment: sue,
  segmentsUpdateTenantSegment: due,
  sizesCreateTenantSize: gue,
  sizesDeleteTenantSize: mue,
  sizesGetTenantSizeById: Cue,
  sizesGetTenantSizes: vue,
  sizesGetTenantSizesCount: hue,
  sizesPatchTenantSize: Sue,
  sizesUpdateTenantSize: yue,
  teamContactEnrollmentsCreateTenantTeamContactEnrollment: jue,
  teamContactEnrollmentsDeleteTenantTeamContactEnrollment: Gue,
  teamContactEnrollmentsGetTenantTeamContactEnrollmentById: Lue,
  teamContactEnrollmentsGetTenantTeamContactEnrollments: Iue,
  teamContactEnrollmentsGetTenantTeamContactEnrollmentsCount: Aue,
  teamContactEnrollmentsPatchTenantTeamContactEnrollment: Rue,
  teamContactEnrollmentsUpdateTenantTeamContactEnrollment: bue,
  teamGetTeamMember: fue,
  teamGetTeamMembers: Tue,
  teamGetTeamMembersCount: Pue,
  teamProjectEnrollmentsCreateTenantTeamProjectEnrollment: Mue,
  teamProjectEnrollmentsDeleteTenantTeamProjectEnrollment: Eue,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollmentById: Due,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollments: kue,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollmentsCount: wue,
  teamProjectEnrollmentsPatchTenantTeamProjectEnrollment: Bue,
  teamProjectEnrollmentsUpdateTenantTeamProjectEnrollment: $ue,
  teamRecordsCreateTenantTeamRecord: Fue,
  teamRecordsDeleteTenantTeamRecord: Oue,
  teamRecordsGetTenantTeamRecordById: Wue,
  teamRecordsGetTenantTeamRecords: xue,
  teamRecordsGetTenantTeamRecordsCount: Uue,
  teamRecordsPatchTenantTeamRecord: Hue,
  teamRecordsUpdateTenantTeamRecord: que,
  teamsAddTenantTeamMember: Que,
  teamsArchiveTenantTeam: eie,
  teamsCreateTenantTeam: _ue,
  teamsDeleteTenantTeam: aie,
  teamsGetTenantTeamById: tie,
  teamsGetTenantTeamMembers: zue,
  teamsGetTenantTeamMembersCount: Nue,
  teamsGetTenantTeams: Vue,
  teamsGetTenantTeamsByMember: Kue,
  teamsGetTenantTeamsByMembers: Yue,
  teamsGetTenantTeamsCount: Jue,
  teamsMoveTenantTeamMember: pue,
  teamsPatchTenantTeam: cie,
  teamsRemoveTenantTeamMember: Zue,
  teamsRestoreTenantTeam: rie,
  teamsSetTenantTeamHomeDepartment: oue,
  teamsSetTenantTeamMemberRole: Xue,
  teamsUpdateTenantTeam: lie,
  tenantsAssignLicense: Eie,
  tenantsCreateTenant: xie,
  tenantsDeSelectTenant: Uie,
  tenantsDeleteTenant: $ie,
  tenantsGetAccessibleFeatures: Die,
  tenantsGetCartForTenant: Sie,
  tenantsGetCurrentTenant: uie,
  tenantsGetEnrollmentLicenseById: wie,
  tenantsGetEnrollmentLicenses: kie,
  tenantsGetEnrollmentPermissions: Iie,
  tenantsGetExtendedTenant: vie,
  tenantsGetExtendedTenantEnrollment: fie,
  tenantsGetRootTenant: nie,
  tenantsGetTenant: iie,
  tenantsGetTenantAvatar: gie,
  tenantsGetTenantEnrollment: Pie,
  tenantsGetTenantEnrollments: Tie,
  tenantsGetTenantInvitations: Aie,
  tenantsGetTenantLicenses: bie,
  tenantsGetTenantNotifications: Wie,
  tenantsGetTenantNotificationsCount: Hie,
  tenantsGetTenantPendingInvitations: Gie,
  tenantsGetTenantRedeemedInvitations: Lie,
  tenantsGetTenantRevokedInvitations: Rie,
  tenantsGetTenantSocialProfile: Cie,
  tenantsGetTenantUsers: yie,
  tenantsGetTenantWallet: mie,
  tenantsGetTenantWebPortals: Oie,
  tenantsPatchTenant: sie,
  tenantsRevokeLicense: Mie,
  tenantsSelectTenant: Fie,
  tenantsUpdateTenant: die,
  tenantsUpdateTenantAvatar: hie,
  tenantsValidateEnrollmentFeatureAccess: Bie,
  tenantsValidateEnrollmentPermissions: jie,
  territoriesCreateTenantTerritory: Vie,
  territoriesDeleteTenantTerritory: Jie,
  territoriesGetTenantTerritories: qie,
  territoriesGetTenantTerritoriesCount: _ie,
  territoriesGetTenantTerritoryById: zie,
  territoriesPatchTenantTerritory: Qie,
  territoriesUpdateTenantTerritory: Nie,
  typesCreateTenantType: Yie,
  typesDeleteTenantType: Xie,
  typesGetTenantTypeById: pie,
  typesGetTenantTypes: Kie,
  typesGetTenantTypesCount: Zie,
  typesPatchTenantType: oie,
  typesUpdateTenantType: ese,
  unitGroupsCreateUnit: sse,
  unitGroupsCreateUnitGroup: ase,
  unitGroupsDeleteUnit: vse,
  unitGroupsDeleteUnitGroup: cse,
  unitGroupsGetUnit: gse,
  unitGroupsGetUnitGroup: lse,
  unitGroupsGetUnitGroups: rse,
  unitGroupsGetUnitGroupsCount: tse,
  unitGroupsGetUnits: ise,
  unitGroupsGetUnitsCount: dse,
  unitGroupsPatchUnit: hse,
  unitGroupsPatchUnitGroup: nse,
  unitGroupsUpdateUnit: mse,
  unitGroupsUpdateUnitGroup: use,
  unitsCreateTenantUnit: Sse,
  unitsDeleteTenantUnit: Tse,
  unitsGetTenantUnitById: Pse,
  unitsGetTenantUnits: Cse,
  unitsGetTenantUnitsCount: yse,
  unitsPatchTenantUnit: fse,
  unitsUpdateTenantUnit: Ise
}, Symbol.toStringTag, { value: "Module" })), C = $(x()), jse = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/version",
  ...e
}), Ase = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/health",
  ...e
}), Gse = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/hello",
  ...e
}), Lse = (e) => (e.client ?? C).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rse = (e) => (e.client ?? C).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bse = (e) => (e.client ?? C).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kse = (e) => (e.client ?? C).get({
  url: "/confirmEmail",
  ...e
}), Mse = (e) => (e.client ?? C).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wse = (e) => (e.client ?? C).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ese = (e) => (e.client ?? C).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dse = (e) => (e.client ?? C).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bse = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/manage/info",
  ...e
}), $se = (e) => (e.client ?? C).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xse = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Fse = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Use = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ose = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Wse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures/{id}",
  ...e
}), Vse = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/primary-file/{fileUploadId}",
  ...e
}), _se = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/freeze",
  ...e
}), Jse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}",
  ...e
}), zse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}/verify",
  ...e
}), Qse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocumentAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yse = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e
}), Zse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e
}), Xse = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pse = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ose = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ede = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocuments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ade = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e
}), tde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e
}), cde = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lde = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocuments/{id}/quick-sign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ude = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SignedDocuments/prepare-and-quick-sign",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ide = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/{id}/verify-signature",
  ...e
}), sde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gde = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e
}), hde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e
}), mde = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cde = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sde = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SigningCertificates/Import",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), yde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningEngine/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningEngine/Providers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningEngine/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningKeys/Platform",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ide = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningKeys",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningKeys/Platform/{authorityId}/{keyId}",
  ...e
}), Ade = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs/{id}",
  ...e
}), Rde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants/{id}",
  ...e
}), Mde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningParticipants/{id}/viewed",
  ...e
}), wde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningParticipants/{id}/outcome",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ede = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $de = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e
}), xde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e
}), Fde = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ude = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ode = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qde = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e
}), Vde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e
}), _de = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jde = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/{id}/execution-binding",
  ...e
}), Qde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfiles/{id}/execution-binding",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/{id}",
  ...e
}), Zde = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/{id}/Participants",
  ...e
}), Xde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pde = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/from-document/{signedDocumentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ode = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SigningRequests/prepare-and-create",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), eve = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/send",
  ...e
}), rve = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/void",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ave = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/expire",
  ...e
}), tve = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/finalize",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cve = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/execute-provider",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lve = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/TrustManifests/Platform",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ECe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: Ase,
  platformGetHello: Gse,
  platformGetManageInfo: Bse,
  platformGetVersion: jse,
  platformMapIdentityApiConfirmEmail: kse,
  platformPostAccountLogout: Fse,
  platformPostAccountManageDownloadPersonalData: Ose,
  platformPostAccountManageLinkExternalLogin: Use,
  platformPostAccountPerformExternalLogin: xse,
  platformPostForgotPassword: wse,
  platformPostLogin: Rse,
  platformPostManage2Fa: Dse,
  platformPostManageInfo: $se,
  platformPostRefresh: bse,
  platformPostRegister: Lse,
  platformPostResendConfirmationEmail: Mse,
  platformPostResetPassword: Ese,
  signaturesGetSignatureById: qse,
  signaturesGetSignatures: Wse,
  signaturesGetSignaturesCount: Hse,
  signedDocumentArtifactsFreeze: _se,
  signedDocumentArtifactsGetReference: Jse,
  signedDocumentArtifactsSetPrimaryAuthoringFile: Vse,
  signedDocumentArtifactsVerify: zse,
  signedDocumentAttachmentsCreateSignedDocumentAttachment: Nse,
  signedDocumentAttachmentsDeleteSignedDocumentAttachment: Yse,
  signedDocumentAttachmentsGetSignedDocumentAttachmentById: Zse,
  signedDocumentAttachmentsGetSignedDocumentAttachments: Qse,
  signedDocumentAttachmentsGetSignedDocumentAttachmentsCount: Kse,
  signedDocumentAttachmentsPatchSignedDocumentAttachment: Xse,
  signedDocumentAttachmentsUpdateSignedDocumentAttachment: pse,
  signedDocumentsCreateSignedDocument: ede,
  signedDocumentsDeleteSignedDocument: ade,
  signedDocumentsGetSignedDocumentById: tde,
  signedDocumentsGetSignedDocuments: ose,
  signedDocumentsGetSignedDocumentsCount: rde,
  signedDocumentsPatchSignedDocument: cde,
  signedDocumentsPrepareAndQuickSign: ude,
  signedDocumentsQuickSignSignedDocument: nde,
  signedDocumentsUpdateSignedDocument: lde,
  signedDocumentsVerifySignedDocumentSignature: ide,
  signingCertificatesCreateSigningCertificate: dde,
  signingCertificatesDeleteSigningCertificate: gde,
  signingCertificatesGetSigningCertificateById: hde,
  signingCertificatesGetSigningCertificates: sde,
  signingCertificatesGetSigningCertificatesCount: vde,
  signingCertificatesImportSigningCertificate: Sde,
  signingCertificatesPatchSigningCertificate: mde,
  signingCertificatesUpdateSigningCertificate: Cde,
  signingEngineGetProviders: yde,
  signingEngineGetProvidersCount: Tde,
  signingEnginePreview: Pde,
  signingKeysGeneratePlatformSigningKey: fde,
  signingKeysGenerateTenantSigningKey: Ide,
  signingKeysGetPlatformSigningKeyRecord: jde,
  signingLogsGetSigningLogById: Lde,
  signingLogsGetSigningLogs: Ade,
  signingLogsGetSigningLogsCount: Gde,
  signingParticipantsGetSigningParticipantById: kde,
  signingParticipantsGetSigningParticipants: Rde,
  signingParticipantsGetSigningParticipantsCount: bde,
  signingParticipantsMarkViewed: Mde,
  signingParticipantsRecordOutcome: wde,
  signingProfileGraphicalRepresentationsCreateSigningProfileGraphicalRepresentation: Dde,
  signingProfileGraphicalRepresentationsDeleteSigningProfileGraphicalRepresentation: $de,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentationById: xde,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentations: Ede,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentationsCount: Bde,
  signingProfileGraphicalRepresentationsPatchSigningProfileGraphicalRepresentation: Fde,
  signingProfileGraphicalRepresentationsUpdateSigningProfileGraphicalRepresentation: Ude,
  signingProfilesCreateSigningProfile: Wde,
  signingProfilesDeleteSigningProfile: qde,
  signingProfilesGetSigningProfileById: Vde,
  signingProfilesGetSigningProfileExecutionBinding: zde,
  signingProfilesGetSigningProfiles: Ode,
  signingProfilesGetSigningProfilesCount: Hde,
  signingProfilesPatchSigningProfile: _de,
  signingProfilesSetSigningProfileExecutionBinding: Qde,
  signingProfilesUpdateSigningProfile: Jde,
  signingRequestsAddParticipant: Xde,
  signingRequestsCreateFromDocument: pde,
  signingRequestsExecuteProvider: cve,
  signingRequestsExpire: ave,
  signingRequestsFinalize: tve,
  signingRequestsGetSigningRequestById: Yde,
  signingRequestsGetSigningRequestParticipants: Zde,
  signingRequestsGetSigningRequests: Nde,
  signingRequestsGetSigningRequestsCount: Kde,
  signingRequestsPrepareAndCreate: ode,
  signingRequestsSend: eve,
  signingRequestsVoid: rve,
  trustManifestsComposePlatformTrustManifest: lve
}, Symbol.toStringTag, { value: "Module" })), N = $(x()), nve = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/CreditNotes/{invoiceId}",
  ...e
}), uve = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/DebitNotes/{invoiceId}",
  ...e
}), ive = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/DespatchAdvices/{shipmentId}",
  ...e
}), sve = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/version",
  ...e
}), dve = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/health",
  ...e
}), vve = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/hello",
  ...e
}), gve = (e) => (e.client ?? N).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hve = (e) => (e.client ?? N).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mve = (e) => (e.client ?? N).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cve = (e) => (e.client ?? N).get({
  url: "/confirmEmail",
  ...e
}), Sve = (e) => (e.client ?? N).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yve = (e) => (e.client ?? N).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tve = (e) => (e.client ?? N).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pve = (e) => (e.client ?? N).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fve = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/manage/info",
  ...e
}), Ive = (e) => (e.client ?? N).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jve = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ave = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Gve = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Lve = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Rve = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/Invoices/{invoiceId}",
  ...e
}), bve = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/ReceiptAdvices/{itemRestockId}",
  ...e
}), kve = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/ReceiptAdvices/{itemRestockId}/partitions",
  ...e
}), DCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  creditNotesGetUblCreditNote: nve,
  debitNotesGetUblDebitNote: uve,
  despatchAdvicesGetUblDespatchAdvice: ive,
  invoicesGetUblInvoice: Rve,
  platformGetHealth: dve,
  platformGetHello: vve,
  platformGetManageInfo: fve,
  platformGetVersion: sve,
  platformMapIdentityApiConfirmEmail: Cve,
  platformPostAccountLogout: Ave,
  platformPostAccountManageDownloadPersonalData: Lve,
  platformPostAccountManageLinkExternalLogin: Gve,
  platformPostAccountPerformExternalLogin: jve,
  platformPostForgotPassword: yve,
  platformPostLogin: hve,
  platformPostManage2Fa: Pve,
  platformPostManageInfo: Ive,
  platformPostRefresh: mve,
  platformPostRegister: gve,
  platformPostResendConfirmationEmail: Sve,
  platformPostResetPassword: Tve,
  receiptAdvicesGetUblReceiptAdvice: bve,
  receiptAdvicesGetUblReceiptAdvicePartitions: kve
}, Symbol.toStringTag, { value: "Module" })), k = $(x()), Mve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/version",
  ...e
}), wve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/health",
  ...e
}), Eve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/hello",
  ...e
}), Dve = (e) => (e.client ?? k).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bve = (e) => (e.client ?? k).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ve = (e) => (e.client ?? k).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xve = (e) => (e.client ?? k).get({
  url: "/confirmEmail",
  ...e
}), Fve = (e) => (e.client ?? k).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uve = (e) => (e.client ?? k).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ove = (e) => (e.client ?? k).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wve = (e) => (e.client ?? k).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/manage/info",
  ...e
}), qve = (e) => (e.client ?? k).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vve = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _ve = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Jve = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zve = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Qve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nve = (e) => (e.client ?? k).post({
  url: "/api/v2/Me/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kve = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yve = (e) => (e.client ?? k).delete({
  url: "/api/v2/Me/Options/{optionId}",
  ...e
}), Zve = (e) => (e.client ?? k).get({
  url: "/api/v2/Me/Options/{optionId}",
  ...e
}), Xve = (e) => (e.client ?? k).patch({
  url: "/api/v2/Me/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pve = (e) => (e.client ?? k).put({
  url: "/api/v2/Me/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ove = (e) => (e.client ?? k).get({
  url: "/api/v2/Me/Options/Key/{key}",
  ...e
}), ege = (e) => (e.client ?? k).put({
  url: "/api/v2/Me/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/StudioAccess",
  ...e
}), age = (e) => (e.client ?? k).get({
  url: "/api/v2/UsersService/Users/{userId}/PublicProfile",
  ...e
}), tge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me",
  ...e
}), cge = (e) => ((e == null ? void 0 : e.client) ?? k).patch({
  url: "/api/v2/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lge = (e) => ((e == null ? void 0 : e.client) ?? k).put({
  url: "/api/v2/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Extended",
  ...e
}), uge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Avatar",
  ...e
}), ige = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/api/v2/Me/Avatar",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Follows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Follows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Followers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Followers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Tenants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Tenants/Extended",
  ...e
}), Sge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Enrollments",
  ...e
}), yge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Enrollments/Extended",
  ...e
}), Tge = (e) => (e.client ?? k).get({
  url: "/api/v2/Me/Enrollments/{enrollmentId}",
  ...e
}), Pge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/SocialProfile",
  ...e
}), fge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Cart",
  ...e
}), Ige = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Wallet",
  ...e
}), jge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Age = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Settings",
  ...e
}), Lge = (e) => ((e == null ? void 0 : e.client) ?? k).put({
  url: "/api/v2/Me/Settings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Addresses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bge = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/api/v2/Me/Invitations",
  ...e
}), kge = (e) => (e.client ?? k).get({
  url: "/api/v2/Me/Invitations/{invitationId}",
  ...e
}), BCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  optionsCreateUserOption: Nve,
  optionsDeleteUserOption: Yve,
  optionsGetUserOptionById: Zve,
  optionsGetUserOptionByKey: ove,
  optionsGetUserOptions: Qve,
  optionsGetUserOptionsCount: Kve,
  optionsPatchUserOption: Xve,
  optionsUpdateUserOption: pve,
  optionsUpsertUserOption: ege,
  platformGetHealth: wve,
  platformGetHello: Eve,
  platformGetManageInfo: Hve,
  platformGetVersion: Mve,
  platformMapIdentityApiConfirmEmail: xve,
  platformPostAccountLogout: _ve,
  platformPostAccountManageDownloadPersonalData: zve,
  platformPostAccountManageLinkExternalLogin: Jve,
  platformPostAccountPerformExternalLogin: Vve,
  platformPostForgotPassword: Uve,
  platformPostLogin: Bve,
  platformPostManage2Fa: Wve,
  platformPostManageInfo: qve,
  platformPostRefresh: $ve,
  platformPostRegister: Dve,
  platformPostResendConfirmationEmail: Fve,
  platformPostResetPassword: Ove,
  usersCountCurrentUserFollowers: gge,
  usersCountCurrentUserFollows: dge,
  usersCountCurrentUserNotifications: Age,
  usersCountCurrentUserTenants: mge,
  usersGetCurrentUser: tge,
  usersGetCurrentUserAddresses: Rge,
  usersGetCurrentUserAvatar: uge,
  usersGetCurrentUserCart: fge,
  usersGetCurrentUserEnrollments: Sge,
  usersGetCurrentUserEnrollmentsExtended: yge,
  usersGetCurrentUserFollowers: vge,
  usersGetCurrentUserFollows: sge,
  usersGetCurrentUserInvitation: bge,
  usersGetCurrentUserInvitationById: kge,
  usersGetCurrentUserNotifications: jge,
  usersGetCurrentUserSettings: Gge,
  usersGetCurrentUserSocialProfile: Pge,
  usersGetCurrentUserTenants: hge,
  usersGetCurrentUserTenantsExtended: Cge,
  usersGetCurrentUserWallet: Ige,
  usersGetEnrollment: Tge,
  usersGetExtendedCurrentUser: nge,
  usersGetMyStudioAccess: rge,
  usersGetUserPublicProfile: age,
  usersPatchCurrentUser: cge,
  usersUpdateAvatar: ige,
  usersUpdateCurrentUser: lge,
  usersUpdateCurrentUserSettings: Lge
}, Symbol.toStringTag, { value: "Module" })), j = $(x()), Mge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/version",
  ...e
}), wge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/health",
  ...e
}), Ege = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/hello",
  ...e
}), Dge = (e) => (e.client ?? j).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bge = (e) => (e.client ?? j).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ge = (e) => (e.client ?? j).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xge = (e) => (e.client ?? j).get({
  url: "/confirmEmail",
  ...e
}), Fge = (e) => (e.client ?? j).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uge = (e) => (e.client ?? j).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oge = (e) => (e.client ?? j).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wge = (e) => (e.client ?? j).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/manage/info",
  ...e
}), qge = (e) => (e.client ?? j).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _ge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Jge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Qge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/api/v2/WalletsService/Me/Ethereum/Balance",
  ...e
}), Nge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}",
  ...e
}), Kge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ehe = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ahe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), the = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), che = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lhe = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e
}), nhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e
}), uhe = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ihe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), she = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ghe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Che = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), She = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Quotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), The = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Phe = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ihe = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e
}), jhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e
}), Ahe = (e) => (e.client ?? j).patch({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ghe = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rhe = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), khe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), whe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Chargebacks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ehe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Chargebacks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Refunds",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Refunds/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $he = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xhe = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fhe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uhe = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e
}), Ohe = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e
}), Whe = (e) => (e.client ?? j).patch({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hhe = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meGetMyEthereumBalance: Qge,
  platformGetHealth: wge,
  platformGetHello: Ege,
  platformGetManageInfo: Hge,
  platformGetVersion: Mge,
  platformMapIdentityApiConfirmEmail: xge,
  platformPostAccountLogout: _ge,
  platformPostAccountManageDownloadPersonalData: zge,
  platformPostAccountManageLinkExternalLogin: Jge,
  platformPostAccountPerformExternalLogin: Vge,
  platformPostForgotPassword: Uge,
  platformPostLogin: Bge,
  platformPostManage2Fa: Wge,
  platformPostManageInfo: qge,
  platformPostRefresh: $ge,
  platformPostRegister: Dge,
  platformPostResendConfirmationEmail: Fge,
  platformPostResetPassword: Oge,
  walletsCreateLocationForWallet: the,
  walletsCreateWalletBankAccount: Phe,
  walletsCreateWalletPayment: ehe,
  walletsCreateWalletToken: xhe,
  walletsCreateWalletWithdrawRequest: Rhe,
  walletsDeleteLocationForWallet: lhe,
  walletsDeleteWalletBankAccount: Ihe,
  walletsDeleteWalletToken: Uhe,
  walletsGetIncomingPayments: ghe,
  walletsGetIncomingPaymentsCount: hhe,
  walletsGetIncomingWalletInvoices: ihe,
  walletsGetIncomingWalletInvoicesCount: she,
  walletsGetLocationForWallet: nhe,
  walletsGetLocationsForWallet: ahe,
  walletsGetLocationsForWalletCount: che,
  walletsGetOutgoingPayments: mhe,
  walletsGetOutgoingPaymentsCount: Che,
  walletsGetOutgoingWalletInvoices: dhe,
  walletsGetOutgoingWalletInvoicesCount: vhe,
  walletsGetWalletBankAccount: jhe,
  walletsGetWalletBankAccounts: The,
  walletsGetWalletBankAccountsCount: fhe,
  walletsGetWalletChargebacks: whe,
  walletsGetWalletChargebacksCount: Ehe,
  walletsGetWalletDetails: Nge,
  walletsGetWalletExtendedOrders: Yge,
  walletsGetWalletInvoices: Xge,
  walletsGetWalletInvoicesCount: pge,
  walletsGetWalletOrders: Kge,
  walletsGetWalletOrdersCount: Zge,
  walletsGetWalletPayments: oge,
  walletsGetWalletPaymentsCount: rhe,
  walletsGetWalletQuotes: She,
  walletsGetWalletQuotesCount: yhe,
  walletsGetWalletRefunds: Dhe,
  walletsGetWalletRefundsCount: Bhe,
  walletsGetWalletToken: Ohe,
  walletsGetWalletTokens: $he,
  walletsGetWalletTokensCount: Fhe,
  walletsGetWalletWithdrawRequests: khe,
  walletsGetWalletWithdrawRequestsCount: Mhe,
  walletsGetWalletWithdraws: Lhe,
  walletsGetWalletWithdrawsCount: bhe,
  walletsPatchWalletBankAccount: Ahe,
  walletsPatchWalletToken: Whe,
  walletsUpdateLocationForWallet: uhe,
  walletsUpdateWalletBankAccount: Ghe,
  walletsUpdateWalletToken: Hhe
}, Symbol.toStringTag, { value: "Module" })), E = $(x()), qhe = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/version",
  ...e
}), Vhe = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/health",
  ...e
}), _he = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/hello",
  ...e
}), Jhe = (e) => (e.client ?? E).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zhe = (e) => (e.client ?? E).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qhe = (e) => (e.client ?? E).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nhe = (e) => (e.client ?? E).get({
  url: "/confirmEmail",
  ...e
}), Khe = (e) => (e.client ?? E).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yhe = (e) => (e.client ?? E).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zhe = (e) => (e.client ?? E).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xhe = (e) => (e.client ?? E).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), phe = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/manage/info",
  ...e
}), ohe = (e) => (e.client ?? E).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eme = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), rme = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ame = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), tme = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), cme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowCapabilities",
  ...e
}), lme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowCapabilities/Count",
  ...e
}), nme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ume = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ime = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}",
  ...e
}), dme = (e) => (e.client ?? E).put({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Validate",
  ...e
}), gme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Publish",
  ...e
}), hme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/TriggerReconciliation",
  ...e
}), mme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Archive",
  ...e
}), Cme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Clone",
  ...e
}), Sme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Start",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/StartAsApplication",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/TestRun",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ime = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/{id}",
  ...e
}), jme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/{id}/Trace",
  ...e
}), Ame = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowNodeDescriptors",
  ...e
}), Gme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowNodeDescriptors/Count",
  ...e
}), Lme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kme = (e) => (e.client ?? E).delete({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e
}), Mme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e
}), wme = (e) => (e.client ?? E).put({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/EventContracts",
  ...e
}), Dme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Enable",
  ...e
}), Bme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Disable",
  ...e
}), $me = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/RepointVersion",
  ...e
}), xme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Webhook/RotateCredentials",
  ...e
}), Fme = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Readiness",
  ...e
}), Ume = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Occurrences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ome = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Occurrences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wme = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/Triggers/Webhooks/{webhookKey}",
  ...e
}), xCe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: Vhe,
  platformGetHello: _he,
  platformGetManageInfo: phe,
  platformGetVersion: qhe,
  platformMapIdentityApiConfirmEmail: Nhe,
  platformPostAccountLogout: rme,
  platformPostAccountManageDownloadPersonalData: tme,
  platformPostAccountManageLinkExternalLogin: ame,
  platformPostAccountPerformExternalLogin: eme,
  platformPostForgotPassword: Yhe,
  platformPostLogin: zhe,
  platformPostManage2Fa: Xhe,
  platformPostManageInfo: ohe,
  platformPostRefresh: Qhe,
  platformPostRegister: Jhe,
  platformPostResendConfirmationEmail: Khe,
  platformPostResetPassword: Zhe,
  workflowCapabilitiesGetWorkflowCapabilities: cme,
  workflowCapabilitiesGetWorkflowCapabilitiesCount: lme,
  workflowDefinitionsArchiveWorkflowDefinition: mme,
  workflowDefinitionsCloneWorkflowDefinitionDraft: Cme,
  workflowDefinitionsCreateWorkflowDefinition: ume,
  workflowDefinitionsGetWorkflowDefinitionById: sme,
  workflowDefinitionsGetWorkflowDefinitions: nme,
  workflowDefinitionsGetWorkflowDefinitionsCount: ime,
  workflowDefinitionsGetWorkflowTriggerReconciliation: hme,
  workflowDefinitionsPublishWorkflowDefinition: gme,
  workflowDefinitionsStartWorkflow: Sme,
  workflowDefinitionsStartWorkflowAsApplication: yme,
  workflowDefinitionsTestRunWorkflow: Tme,
  workflowDefinitionsUpdateWorkflowDefinitionDraft: dme,
  workflowDefinitionsValidateWorkflowDefinition: vme,
  workflowInstancesGetWorkflowInstanceById: Ime,
  workflowInstancesGetWorkflowInstanceTrace: jme,
  workflowInstancesGetWorkflowInstances: Pme,
  workflowInstancesGetWorkflowInstancesCount: fme,
  workflowNodeDescriptorsGetWorkflowNodeDescriptors: Ame,
  workflowNodeDescriptorsGetWorkflowNodeDescriptorsCount: Gme,
  workflowTriggerBindingsCreateWorkflowTriggerBinding: Rme,
  workflowTriggerBindingsDeleteWorkflowTriggerBinding: kme,
  workflowTriggerBindingsDisableWorkflowTriggerBinding: Bme,
  workflowTriggerBindingsEnableWorkflowTriggerBinding: Dme,
  workflowTriggerBindingsGetBusinessEventContracts: Eme,
  workflowTriggerBindingsGetWorkflowTriggerBindingById: Mme,
  workflowTriggerBindingsGetWorkflowTriggerBindingOccurrences: Ume,
  workflowTriggerBindingsGetWorkflowTriggerBindingOccurrencesCount: Ome,
  workflowTriggerBindingsGetWorkflowTriggerBindingReadiness: Fme,
  workflowTriggerBindingsGetWorkflowTriggerBindings: Lme,
  workflowTriggerBindingsGetWorkflowTriggerBindingsCount: bme,
  workflowTriggerBindingsRepointWorkflowTriggerBindingVersion: $me,
  workflowTriggerBindingsRotateWorkflowTriggerBindingWebhookCredentials: xme,
  workflowTriggerBindingsUpdateWorkflowTriggerBinding: wme,
  workflowWebhooksPostTriggersWebhooksByWebhookKey: Wme
}, Symbol.toStringTag, { value: "Module" }));
export {
  qme as AccountingService,
  Vme as ActivitiesService,
  _me as AnalyticsService,
  Jme as ApprovalsService,
  zme as AssetsService,
  Qme as BlockchainsService,
  Nme as CartService,
  Kme as CatalogService,
  Yme as CommunicationsService,
  Zme as ContentService,
  Xme as CrmService,
  pme as DealsService,
  ome as EmailTemplates,
  eCe as ForexService,
  rCe as GlobeService,
  aCe as HrmsService,
  tCe as IdentityService,
  cCe as IntelligenceService,
  lCe as InventoryService,
  nCe as InvoicingService,
  uCe as LearningService,
  iCe as LicensingService,
  sCe as LocationsService,
  dCe as LogisticsService,
  vCe as ManufacturingService,
  gCe as MarketingService,
  hCe as MarketplaceService,
  mCe as OrdersService,
  CCe as PaymentsService,
  SCe as PricingService,
  yCe as ProjectsService,
  TCe as QuotesService,
  PCe as ReachService,
  fCe as SalesService,
  ICe as SearchService,
  jCe as SecurityService,
  ACe as ServicesService,
  GCe as ShipmentsService,
  LCe as SocialService,
  RCe as StorageService,
  bCe as SubscriptionsService,
  kCe as SupportService,
  MCe as SystemService,
  wCe as TenantsService,
  ECe as TrustService,
  DCe as UblIntegration,
  BCe as UsersService,
  $Ce as WalletsService,
  xCe as WorkflowsService
};
