import { createClient as B, createConfig as $, formDataBodySerializer as u } from "@hey-api/client-fetch";
const r = B($()), o = (e) => (e.client ?? r).get({
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
}), ge = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/AccountingPeriods/{accountingPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ve = (e) => (e.client ?? r).put({
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
}), we = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ee = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/{accountId}/Entries/Debit",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Me = (e) => (e.client ?? r).get({
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
}), ze = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Accounts/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qe = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Accounts/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Je = (e) => (e.client ?? r).get({
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
}), gr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Banking/{bankId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vr = (e) => (e.client ?? r).get({
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
}), wr = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e
}), Er = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}",
  ...e
}), Mr = (e) => (e.client ?? r).patch({
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
}), zr = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/BillingProfiles/{billingProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qr = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/BillingProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jr = (e) => (e.client ?? r).post({
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
}), ga = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Commissions/Commissions/{commissionId}",
  ...e
}), va = (e) => (e.client ?? r).patch({
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
}), wa = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ea = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/CostCentres/CostCentreGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ma = (e) => (e.client ?? r).delete({
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
}), za = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e
}), Qa = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/ExpenseClaims/{expenseClaimId}",
  ...e
}), Ja = (e) => (e.client ?? r).patch({
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
}), gt = (e) => (e.client ?? r).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vt = (e) => ((e == null ? void 0 : e.client) ?? r).get({
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
}), wt = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e
}), Et = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/{authorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mt = (e) => (e.client ?? r).put({
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
}), zt = (e) => (e.client ?? r).patch({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges/{enumerationRangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qt = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Fiscals/Authorities/EnumerationRanges/{enumerationRangeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jt = (e) => (e.client ?? r).get({
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
}), gc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vc = (e) => (e.client ?? r).delete({
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
}), wc = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ec = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/FiscalYears",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mc = (e) => (e.client ?? r).get({
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
}), zc = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qc = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}",
  ...e
}), Jc = (e) => (e.client ?? r).get({
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
}), gl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Journals/{journalId}/Entries/Aggregate/Credits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vl = (e) => (e.client ?? r).post({
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
}), wl = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/LedgerTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), El = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/LedgerTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ml = (e) => (e.client ?? r).delete({
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
}), zl = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Loans/Applications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ql = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/Loans/Applications/{applicationId}",
  ...e
}), Jl = (e) => (e.client ?? r).get({
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
}), gn = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Receipts/{receiptId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vn = (e) => (e.client ?? r).get({
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
}), wn = (e) => (e.client ?? r).post({
  url: "/api/v2/AccountingService/Shares/Transfers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), En = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Shares/Transfers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mn = (e) => (e.client ?? r).delete({
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
}), zn = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxClasses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qn = (e) => (e.client ?? r).delete({
  url: "/api/v2/AccountingService/TaxClasses/{id}",
  ...e
}), Jn = (e) => (e.client ?? r).get({
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
}), gu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vu = (e) => (e.client ?? r).delete({
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
}), wu = (e) => (e.client ?? r).put({
  url: "/api/v2/AccountingService/Transactions/{transactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eu = (e) => (e.client ?? r).get({
  url: "/api/v2/AccountingService/Transactions/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mu = (e) => (e.client ?? r).post({
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
}), Ghe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  accountingPeriodsPatchAccountingPeriod: ge,
  accountingPeriodsUpdateAccountingPeriod: ve,
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
  accountsCreateAccountEntry: we,
  accountsCreateAccountRelation: pe,
  accountsCreateAccountType: Qe,
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
  accountsGetAccountTypes: ze,
  accountsGetAccountTypesCount: Je,
  accountsGetAccounts: ye,
  accountsGetAccountsCount: Pe,
  accountsGetChartsOfAccounts: tr,
  accountsGetChildAccounts: be,
  accountsGetCreditAccountEntries: Me,
  accountsGetDebitAccountEntries: Ee,
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
  bankingDeleteBankTransaction: wr,
  bankingGetBank: sr,
  bankingGetBankAccount: Sr,
  bankingGetBankAccounts: vr,
  bankingGetBankAccountsCount: mr,
  bankingGetBankGuarantee: Ar,
  bankingGetBankGuarantees: Pr,
  bankingGetBankGuaranteesCount: Ir,
  bankingGetBankTransaction: Er,
  bankingGetBankTransactions: Rr,
  bankingGetBankTransactionsCount: kr,
  bankingGetBanks: lr,
  bankingGetBanksCount: ur,
  bankingPatchBank: dr,
  bankingPatchBankAccount: yr,
  bankingPatchBankGuarantee: Gr,
  bankingPatchBankTransaction: Mr,
  bankingUpdateBank: gr,
  bankingUpdateBankAccount: Tr,
  bankingUpdateBankGuarantee: Lr,
  bankingUpdateBankTransaction: Dr,
  billableLineTaxesCreateBillableLineTax: Fr,
  billableLineTaxesDeleteBillableLineTax: Or,
  billableLineTaxesGetBillableLineTaxes: xr,
  billableLineTaxesGetBillableLineTaxesCount: Ur,
  billableLineTaxesPatchBillableLineTax: Wr,
  billableLineTaxesUpdateBillableLineTax: Hr,
  billingProfilesCreateBillingProfile: Jr,
  billingProfilesDeleteBillingProfile: qr,
  billingProfilesGetBillingProfileById: Vr,
  billingProfilesGetBillingProfiles: Qr,
  billingProfilesGetBillingProfilesCount: Nr,
  billingProfilesPatchBillingProfile: _r,
  billingProfilesUpdateBillingProfile: zr,
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
  commissionsGetCommission: ga,
  commissionsGetCommissions: ua,
  commissionsGetCommissionsCount: sa,
  commissionsGetPaymentCommission: Ta,
  commissionsGetPaymentCommissions: ma,
  commissionsGetPaymentCommissionsCount: Sa,
  commissionsPatchCommission: va,
  commissionsPatchPaymentCommission: Pa,
  commissionsUpdateCommission: ha,
  commissionsUpdatePaymentCommission: fa,
  costCentresCreateCostCentre: ja,
  costCentresCreateCostCentreBudget: Fa,
  costCentresCreateCostCentreGroup: wa,
  costCentresDeleteCostCentre: Ga,
  costCentresDeleteCostCentreBudget: Ua,
  costCentresDeleteCostCentreGroup: Ma,
  costCentresGetCostCentre: La,
  costCentresGetCostCentreBudget: Oa,
  costCentresGetCostCentreBudgets: xa,
  costCentresGetCostCentreGroup: Da,
  costCentresGetCostCentreGroups: ka,
  costCentresGetCostCentreGroupsCount: Ea,
  costCentresGetCostCentres: Ia,
  costCentresGetCostCentresCount: Aa,
  costCentresPatchCostCentre: Ra,
  costCentresPatchCostCentreBudget: Wa,
  costCentresPatchCostCentreGroup: Ba,
  costCentresUpdateCostCentre: ba,
  costCentresUpdateCostCentreBudget: Ha,
  costCentresUpdateCostCentreGroup: $a,
  expenseClaimsCreateExpenseClaim: Va,
  expenseClaimsDeleteExpenseClaim: za,
  expenseClaimsGetExpenseClaim: Qa,
  expenseClaimsGetExpenseClaims: qa,
  expenseClaimsGetExpenseClaimsCount: _a,
  expenseClaimsPatchExpenseClaim: Ja,
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
  fiscalAuthoritiesGetFiscalAuthority: wt,
  fiscalAuthoritiesPatchFiscalAuthority: Et,
  fiscalAuthoritiesUpdateFiscalAuthority: Mt,
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
  fiscalEnumerationRangesPatchFiscalEnumerationRange: zt,
  fiscalEnumerationRangesUpdateInvoiceEnumerationRange: Qt,
  fiscalIdentificationTypesCreateFiscalIdentificationType: Yt,
  fiscalIdentificationTypesDeleteFiscalIdentificationType: Zt,
  fiscalIdentificationTypesGetFiscalIdentificationType: Kt,
  fiscalIdentificationTypesGetFiscalIdentificationTypes: Jt,
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
  fiscalRegimesCreateFiscalRegime: gc,
  fiscalRegimesDeleteFiscalRegime: vc,
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
  fiscalYearsCreateFiscalYear: Ec,
  fiscalYearsDeleteFiscalYear: Dc,
  fiscalYearsGetFiscalYearDetails: Bc,
  fiscalYearsGetFiscalYears: wc,
  fiscalYearsGetFiscalYearsCount: Mc,
  fiscalYearsPatchFiscalYear: $c,
  fiscalYearsUpdateFiscalYear: xc,
  grantsCreateGrant: Uc,
  grantsDeleteGrant: Wc,
  grantsGetGrantDetails: Hc,
  grantsGetGrants: Fc,
  grantsGetGrantsCount: Oc,
  grantsPatchGrant: qc,
  grantsUpdateGrant: Vc,
  invoiceEnumerationRangesCreateInvoiceEnumerationRange: zc,
  invoiceEnumerationRangesDeleteInvoiceEnumerationRange: Qc,
  invoiceEnumerationRangesGetInvoiceEnumerationRangeDetails: Jc,
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
  journalsAggregateJournalEntryCredits: gl,
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
  journalsPostJournalEntry: vl,
  journalsReverseJournalEntry: hl,
  journalsUpdateJournal: rl,
  journalsUpdateJournalEntry: sl,
  ledgerTypesCreateLedgerType: wl,
  ledgerTypesDeleteLedgerType: Ml,
  ledgerTypesGetLedgerTypeDetails: Dl,
  ledgerTypesGetLedgerTypes: kl,
  ledgerTypesGetLedgerTypesCount: El,
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
  loansDeleteLoanApplication: Ql,
  loansDeleteLoanType: pl,
  loansGetLoanApplicationDetails: Jl,
  loansGetLoanApplications: Vl,
  loansGetLoanApplicationsCount: zl,
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
  platformGetManageInfo: vt,
  platformGetVersion: rt,
  platformMapIdentityApiConfirmEmail: ut,
  platformPostAccountLogout: Ct,
  platformPostAccountManageDownloadPersonalData: yt,
  platformPostAccountManageLinkExternalLogin: St,
  platformPostAccountPerformExternalLogin: mt,
  platformPostForgotPassword: st,
  platformPostLogin: lt,
  platformPostManage2Fa: gt,
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
  receiptsUpdateReceipt: gn,
  reportsGetTrialBalance: vn,
  sharesCreateShareClass: mn,
  sharesCreateShareIssuance: In,
  sharesCreateShareTransfer: wn,
  sharesCreateShareTransferReason: Fn,
  sharesDeleteShareClass: Sn,
  sharesDeleteShareIssuance: Gn,
  sharesDeleteShareTransfer: Mn,
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
  sharesGetShareTransfersCount: En,
  sharesPatchShareClass: Tn,
  sharesPatchShareIssuance: Rn,
  sharesPatchShareTransfer: Bn,
  sharesPatchShareTransferReason: Hn,
  sharesUpdateShareClass: Pn,
  sharesUpdateShareIssuance: bn,
  sharesUpdateShareTransfer: $n,
  sharesUpdateShareTransferReason: qn,
  taxClassesCreateTaxClass: _n,
  taxClassesDeleteTaxClass: Qn,
  taxClassesGetTaxClass: Jn,
  taxClassesGetTaxClasses: Vn,
  taxClassesGetTaxClassesCount: zn,
  taxClassesPatchTaxClass: Nn,
  taxClassesUpdateTaxClass: Kn,
  taxPoliciesCreateAppliedTaxPolicyRecord: du,
  taxPoliciesCreateItemTaxPolicyRecord: cu,
  taxPoliciesCreateTaxPolicy: Zn,
  taxPoliciesDeleteAppliedTaxPolicyRecord: vu,
  taxPoliciesDeleteItemTaxPolicyRecord: lu,
  taxPoliciesDeleteTaxPolicy: on,
  taxPoliciesGetAppliedTaxPolicyRecord: hu,
  taxPoliciesGetAppliedTaxPolicyRecords: su,
  taxPoliciesGetAppliedTaxPolicyRecordsCount: gu,
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
  transactionsCreateTransactionCategory: Mu,
  transactionsDeleteTransaction: Ru,
  transactionsDeleteTransactionCategory: Bu,
  transactionsGetTransaction: bu,
  transactionsGetTransactionCategories: Eu,
  transactionsGetTransactionCategoriesCount: Du,
  transactionsGetTransactionCategory: $u,
  transactionsGetTransactions: Au,
  transactionsGetTransactionsCount: Lu,
  transactionsPatchTransaction: ku,
  transactionsPatchTransactionCategory: xu,
  transactionsUpdateTransaction: wu,
  transactionsUpdateTransactionCategory: Fu
}, Symbol.toStringTag, { value: "Module" })), V = B($()), Uu = (e) => (e.client ?? V).get({
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
}), zu = (e) => (e.client ?? V).get({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e
}), Qu = (e) => (e.client ?? V).patch({
  url: "/api/v2/ActivitiesService/ActivityFeeds/{activityFeedId}/Activities/{activityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ju = (e) => (e.client ?? V).put({
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
}), gi = (e) => (e.client ?? V).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vi = (e) => ((e == null ? void 0 : e.client) ?? V).get({
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
}), Lhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activityFeedsCountActivityTypes: Zu,
  activityFeedsCreateActivity: qu,
  activityFeedsCreateActivityType: Yu,
  activityFeedsDeleteActivity: _u,
  activityFeedsDeleteActivityType: Xu,
  activityFeedsGetActivities: Hu,
  activityFeedsGetActivitiesCount: Vu,
  activityFeedsGetActivity: zu,
  activityFeedsGetActivityFeed: Wu,
  activityFeedsGetActivityFeeds: Uu,
  activityFeedsGetActivityFeedsCount: Ou,
  activityFeedsGetActivityRecordsCount: Nu,
  activityFeedsGetActivityTypeById: pu,
  activityFeedsGetActivityTypes: Ku,
  activityFeedsPatchActivity: Qu,
  activityFeedsPatchActivityType: ou,
  activityFeedsUpdateActivity: Ju,
  activityFeedsUpdateActivityType: ei,
  platformGetHealth: ai,
  platformGetHello: ti,
  platformGetManageInfo: vi,
  platformGetVersion: ri,
  platformMapIdentityApiConfirmEmail: ui,
  platformPostAccountLogout: Ci,
  platformPostAccountManageDownloadPersonalData: yi,
  platformPostAccountManageLinkExternalLogin: Si,
  platformPostAccountPerformExternalLogin: mi,
  platformPostForgotPassword: si,
  platformPostLogin: li,
  platformPostManage2Fa: gi,
  platformPostManageInfo: hi,
  platformPostRefresh: ni,
  platformPostRegister: ci,
  platformPostResendConfirmationEmail: ii,
  platformPostResetPassword: di
}, Symbol.toStringTag, { value: "Module" })), Y = B($()), Ti = (e) => (e.client ?? Y).get({
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
}), wi = (e) => (e.client ?? Y).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ei = (e) => ((e == null ? void 0 : e.client) ?? Y).get({
  url: "/manage/info",
  ...e
}), Mi = (e) => (e.client ?? Y).post({
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
}), Rhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  datasetsGetCatalog: Ti,
  platformGetHealth: fi,
  platformGetHello: Ii,
  platformGetManageInfo: Ei,
  platformGetVersion: Pi,
  platformMapIdentityApiConfirmEmail: Li,
  platformPostAccountLogout: Bi,
  platformPostAccountManageDownloadPersonalData: xi,
  platformPostAccountManageLinkExternalLogin: $i,
  platformPostAccountPerformExternalLogin: Di,
  platformPostForgotPassword: bi,
  platformPostLogin: Ai,
  platformPostManage2Fa: wi,
  platformPostManageInfo: Mi,
  platformPostRefresh: Gi,
  platformPostRegister: ji,
  platformPostResendConfirmationEmail: Ri,
  platformPostResetPassword: ki,
  queriesExecute: Fi
}, Symbol.toStringTag, { value: "Module" })), J = B($()), Ui = (e) => (e.client ?? J).get({
  url: "/api/v2/ApprovalsService/Pending",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oi = (e) => (e.client ?? J).get({
  url: "/api/v2/ApprovalsService/Pending/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wi = (e) => (e.client ?? J).get({
  url: "/api/v2/ApprovalsService/{ticketId}",
  ...e
}), Hi = (e) => (e.client ?? J).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Decide",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qi = (e) => (e.client ?? J).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Cancel",
  ...e
}), Vi = (e) => (e.client ?? J).post({
  url: "/api/v2/ApprovalsService/{ticketId}/Reassign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _i = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/version",
  ...e
}), zi = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/health",
  ...e
}), Qi = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/hello",
  ...e
}), Ji = (e) => (e.client ?? J).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ni = (e) => (e.client ?? J).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ki = (e) => (e.client ?? J).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yi = (e) => (e.client ?? J).get({
  url: "/confirmEmail",
  ...e
}), Zi = (e) => (e.client ?? J).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xi = (e) => (e.client ?? J).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pi = (e) => (e.client ?? J).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oi = (e) => (e.client ?? J).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), es = (e) => ((e == null ? void 0 : e.client) ?? J).get({
  url: "/manage/info",
  ...e
}), rs = (e) => (e.client ?? J).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), as = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ts = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), cs = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ls = (e) => ((e == null ? void 0 : e.client) ?? J).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), bhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  approvalsCancelApproval: qi,
  approvalsDecideApproval: Hi,
  approvalsGetApprovalDetail: Wi,
  approvalsGetPendingApprovals: Ui,
  approvalsGetPendingApprovalsCount: Oi,
  approvalsReassignApproval: Vi,
  platformGetHealth: zi,
  platformGetHello: Qi,
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
  platformPostRegister: Ji,
  platformPostResendConfirmationEmail: Zi,
  platformPostResetPassword: pi
}, Symbol.toStringTag, { value: "Module" })), P = B($()), ns = (e) => (e.client ?? P).get({
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
}), gs = (e) => (e.client ?? P).put({
  url: "/api/v2/AssetsService/AssetCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vs = (e) => (e.client ?? P).get({
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
}), ws = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Es = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}",
  ...e
}), Ms = (e) => (e.client ?? P).get({
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
}), zs = (e) => (e.client ?? P).delete({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e
}), Qs = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}",
  ...e
}), Js = (e) => (e.client ?? P).patch({
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
}), gd = (e) => (e.client ?? P).get({
  url: "/api/v2/AssetsService/AssetTypes/{typeId}",
  ...e
}), vd = (e) => (e.client ?? P).patch({
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
}), wd = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ed = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Md = (e) => ((e == null ? void 0 : e.client) ?? P).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), khe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assetCategoriesCreateAssetCategory: us,
  assetCategoriesDeleteAssetCategory: is,
  assetCategoriesGetAssetCategories: ns,
  assetCategoriesGetAssetCategoriesCount: vs,
  assetCategoriesGetAssetCategory: ss,
  assetCategoriesPatchAssetCategory: ds,
  assetCategoriesUpdateAssetCategory: gs,
  assetTransfersCreateAssetTransfer: ad,
  assetTransfersDeleteAssetTransfer: cd,
  assetTransfersGetAssetTransfer: ld,
  assetTransfersGetAssetTransfers: rd,
  assetTransfersGetAssetTransfersCount: td,
  assetTransfersPatchAssetTransfer: nd,
  assetTransfersUpdateAssetTransfer: ud,
  assetTypesCreateAssetType: sd,
  assetTypesDeleteAssetType: dd,
  assetTypesGetAssetType: gd,
  assetTypesGetAssetTypes: id,
  assetTypesGetAssetTypesCount: md,
  assetTypesPatchAssetType: vd,
  assetTypesUpdateAssetType: hd,
  assetsCreateAsset: ms,
  assetsCreateAssetAssetCategory: Is,
  assetsCreateAssetDepreciationRecord: Vs,
  assetsCreateAssetRepair: ks,
  assetsCreateAssetTransfer: Ys,
  assetsCreateAssetValueAmend: xs,
  assetsDeleteAsset: Ss,
  assetsDeleteAssetAssetCategory: As,
  assetsDeleteAssetDepreciationRecord: zs,
  assetsDeleteAssetRepair: Es,
  assetsDeleteAssetTransfer: Xs,
  assetsDeleteAssetValueAmend: Us,
  assetsGetAsset: ys,
  assetsGetAssetAssetCategories: fs,
  assetsGetAssetAssetCategoriesCount: js,
  assetsGetAssetAssetCategory: Gs,
  assetsGetAssetDepreciationRecord: Qs,
  assetsGetAssetDepreciationRecords: qs,
  assetsGetAssetDepreciationRecordsCount: _s,
  assetsGetAssetRepair: Ms,
  assetsGetAssetRepairs: bs,
  assetsGetAssetRepairsCount: ws,
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
  assetsPatchAssetDepreciationRecord: Js,
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
  platformPostAccountLogout: wd,
  platformPostAccountManageDownloadPersonalData: Md,
  platformPostAccountManageLinkExternalLogin: Ed,
  platformPostAccountPerformExternalLogin: kd,
  platformPostForgotPassword: Ad,
  platformPostLogin: Pd,
  platformPostManage2Fa: Ld,
  platformPostManageInfo: bd,
  platformPostRefresh: fd,
  platformPostRegister: Td,
  platformPostResendConfirmationEmail: jd,
  platformPostResetPassword: Gd
}, Symbol.toStringTag, { value: "Module" })), H = B($()), Dd = (e) => (e.client ?? H).get({
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
}), zd = (e) => (e.client ?? H).patch({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qd = (e) => (e.client ?? H).put({
  url: "/api/v2/BlockchainsService/Blockchains/{blockchainId}/Blocks/{blockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jd = (e) => ((e == null ? void 0 : e.client) ?? H).get({
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
}), eg = (e) => (e.client ?? H).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rg = (e) => (e.client ?? H).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ag = (e) => (e.client ?? H).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tg = (e) => ((e == null ? void 0 : e.client) ?? H).get({
  url: "/manage/info",
  ...e
}), cg = (e) => (e.client ?? H).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lg = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ng = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ug = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ig = (e) => ((e == null ? void 0 : e.client) ?? H).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), sg = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dg = (e) => (e.client ?? H).post({
  url: "/api/v2/BlockchainsService/NonFungibleTokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gg = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vg = (e) => (e.client ?? H).delete({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e
}), hg = (e) => (e.client ?? H).get({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e
}), mg = (e) => (e.client ?? H).patch({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cg = (e) => (e.client ?? H).put({
  url: "/api/v2/BlockchainsService/NonFungibleTokens/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), whe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  blockchainsPatchBlockchainBlock: zd,
  blockchainsUpdateBlockchain: Od,
  blockchainsUpdateBlockchainBlock: Qd,
  nonFungibleTokensCreateNonFungibleToken: dg,
  nonFungibleTokensDeleteNonFungibleToken: vg,
  nonFungibleTokensGetNonFungibleTokenById: hg,
  nonFungibleTokensGetNonFungibleTokens: sg,
  nonFungibleTokensGetNonFungibleTokensCount: gg,
  nonFungibleTokensPatchNonFungibleToken: mg,
  nonFungibleTokensUpdateNonFungibleToken: Cg,
  platformGetHealth: Nd,
  platformGetHello: Kd,
  platformGetManageInfo: tg,
  platformGetVersion: Jd,
  platformMapIdentityApiConfirmEmail: pd,
  platformPostAccountLogout: ng,
  platformPostAccountManageDownloadPersonalData: ig,
  platformPostAccountManageLinkExternalLogin: ug,
  platformPostAccountPerformExternalLogin: lg,
  platformPostForgotPassword: eg,
  platformPostLogin: Zd,
  platformPostManage2Fa: ag,
  platformPostManageInfo: cg,
  platformPostRefresh: Xd,
  platformPostRegister: Yd,
  platformPostResendConfirmationEmail: od,
  platformPostResetPassword: rg
}, Symbol.toStringTag, { value: "Module" })), S = B($()), Sg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e
}), yg = (e) => (e.client ?? S).patch({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Currency",
  ...e
}), fg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Currency",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ig = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Country",
  ...e
}), jg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Country",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ag = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Carts/{cartId}/Submit",
  ...e
}), Gg = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/CartService/Carts/ActingCart",
  ...e
}), Lg = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/CartService/Carts/GuestCart",
  ...e
}), Rg = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/CartService/Carts/UserCart",
  ...e
}), bg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/BusinessCart/{tenantId}",
  ...e
}), kg = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Items",
  ...e
}), wg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Items",
  ...e
}), Eg = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e
}), Mg = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e
}), Dg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Contains/{itemId}",
  ...e
}), $g = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Increase",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Decrease",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Lines",
  ...e
}), Ug = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e
}), Og = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e
}), Wg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Increase",
  ...e
}), qg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Decrease",
  ...e
}), Vg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists",
  ...e
}), _g = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/Contains/{itemId}",
  ...e
}), Qg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists",
  ...e
}), Jg = (e) => (e.client ?? S).head({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists",
  ...e
}), Ng = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e
}), Kg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e
}), Yg = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zg = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records",
  ...e
}), Xg = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pg = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}",
  ...e
}), og = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}",
  ...e
}), ev = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare",
  ...e
}), rv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/RecentlyViewed",
  ...e
}), av = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), tv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), cv = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/{itemId}",
  ...e
}), lv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Carts/{cartId}/Compare/Contains/{itemId}",
  ...e
}), nv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Compare/{cartId}",
  ...e
}), uv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Compare/{recordId}/Details",
  ...e
}), iv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/api/v2/CartService/Compare",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sv = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Compare/{recordId}",
  ...e
}), dv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/version",
  ...e
}), gv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/health",
  ...e
}), vv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/hello",
  ...e
}), hv = (e) => (e.client ?? S).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mv = (e) => (e.client ?? S).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cv = (e) => (e.client ?? S).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sv = (e) => (e.client ?? S).get({
  url: "/confirmEmail",
  ...e
}), yv = (e) => (e.client ?? S).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tv = (e) => (e.client ?? S).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pv = (e) => (e.client ?? S).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fv = (e) => (e.client ?? S).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/manage/info",
  ...e
}), jv = (e) => (e.client ?? S).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Av = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Gv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Lv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Rv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), bv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/api/v2/CartService/Records/AddItem",
  ...e
}), kv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Records/{cartId}",
  ...e
}), wv = (e) => ((e == null ? void 0 : e.client) ?? S).delete({
  url: "/api/v2/CartService/Records",
  ...e
}), Ev = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/api/v2/CartService/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Records/IsInCart",
  ...e
}), Dv = (e) => (e.client ?? S).post({
  url: "/api/v2/CartService/Records/ClearCart",
  ...e
}), Bv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/Records/{recordId}/Details",
  ...e
}), $v = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e
}), xv = (e) => (e.client ?? S).patch({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fv = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Records/{recordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uv = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Records/{recordId}/Increase",
  ...e
}), Ov = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/Records/{recordId}/Decrease",
  ...e
}), Wv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/CartService/WishLists/Contains",
  ...e
}), Hv = (e) => ((e == null ? void 0 : e.client) ?? S).get({
  url: "/api/v2/CartService/WishLists/Exists",
  ...e
}), qv = (e) => ((e == null ? void 0 : e.client) ?? S).head({
  url: "/api/v2/CartService/WishLists/Exists",
  ...e
}), Vv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/api/v2/CartService/WishLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _v = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e
}), zv = (e) => (e.client ?? S).patch({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qv = (e) => (e.client ?? S).put({
  url: "/api/v2/CartService/WishLists/{wishListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/WishLists/{cartId}",
  ...e
}), Nv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/WishLists/{wishListId}/Records",
  ...e
}), Kv = (e) => (e.client ?? S).get({
  url: "/api/v2/CartService/WishLists/{wishListId}/Details",
  ...e
}), Yv = (e) => ((e == null ? void 0 : e.client) ?? S).post({
  url: "/api/v2/CartService/WishLists/Records",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zv = (e) => (e.client ?? S).delete({
  url: "/api/v2/CartService/WishLists/Records/{recordId}",
  ...e
}), Ehe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cartsAddItemToCart: Mg,
  cartsAddItemToCartCompareTable: cv,
  cartsAddItemToWishList: Xg,
  cartsCartWishListExistsHead: Jg,
  cartsClearCartRecords: kg,
  cartsCreateWishList: _g,
  cartsDecreaseCartItemQuantity: xg,
  cartsDecreaseCartLine: qg,
  cartsDeleteCartWishList: Ng,
  cartsDeleteCartWishListRecord: pg,
  cartsGetActingCart: Gg,
  cartsGetCartById: Sg,
  cartsGetCartCompareRecord: tv,
  cartsGetCartCompareRecords: ev,
  cartsGetCartCountry: Ig,
  cartsGetCartCurrency: Pg,
  cartsGetCartItems: wg,
  cartsGetCartLine: Og,
  cartsGetCartLines: Fg,
  cartsGetCartRecentlyViewedRecords: rv,
  cartsGetCartWishList: Vg,
  cartsGetCartWishListDetails: Kg,
  cartsGetCartWishListItem: og,
  cartsGetCartWishListItems: Zg,
  cartsGetGuestCart: Lg,
  cartsGetTenantCart: bg,
  cartsGetUserCart: Rg,
  cartsIncreaseCartLine: Hg,
  cartsIncreaseItemCartRecordQuantity: $g,
  cartsIsItemAlreadyInCart: Bg,
  cartsIsItemInCompareTable: lv,
  cartsIsItemInWishLists: zg,
  cartsPatchCart: yg,
  cartsRemoveCartLine: Ug,
  cartsRemoveItemFromCart: Eg,
  cartsRemoveItemFromCompareTable: av,
  cartsSetCartCountry: jg,
  cartsSetCartCurrency: fg,
  cartsSubmitCart: Ag,
  cartsUpdateCart: Tg,
  cartsUpdateCartLine: Wg,
  cartsUpdateItemCartRecord: Dg,
  cartsUpdateItemToWishList: Yg,
  cartsWishListExists: Qg,
  compareAddItemToCompareTable: iv,
  compareGetItemToCompareRecord: uv,
  compareGetItemToCompareRecords: nv,
  compareRemoveItemFromCompareTable: sv,
  platformGetHealth: gv,
  platformGetHello: vv,
  platformGetManageInfo: Iv,
  platformGetVersion: dv,
  platformMapIdentityApiConfirmEmail: Sv,
  platformPostAccountLogout: Gv,
  platformPostAccountManageDownloadPersonalData: Rv,
  platformPostAccountManageLinkExternalLogin: Lv,
  platformPostAccountPerformExternalLogin: Av,
  platformPostForgotPassword: Tv,
  platformPostLogin: mv,
  platformPostManage2Fa: fv,
  platformPostManageInfo: jv,
  platformPostRefresh: Cv,
  platformPostRegister: hv,
  platformPostResendConfirmationEmail: yv,
  platformPostResetPassword: Pv,
  recordsAddItemToCart: bv,
  recordsAddProductToCart: Ev,
  recordsClearCart: Dv,
  recordsDecreaseItemCartRecord: Ov,
  recordsGetItemCartRecord: Bv,
  recordsGetItemsInCart: kv,
  recordsIncreaseItemCartRecord: Uv,
  recordsIsItemAlreadyInCart: Mv,
  recordsPatchItemCartRecord: xv,
  recordsRemoveProductFromCartByParams: wv,
  recordsRemoveProductFromCartByRecordId: $v,
  recordsUpdateItemCartRecord: Fv,
  wishListsAddProductToWishList: Yv,
  wishListsCreateWishList: Vv,
  wishListsDeleteWishList: _v,
  wishListsDeleteWishListRecord: Zv,
  wishListsGetCartWishListDetails: Kv,
  wishListsGetCartWishListItems: Nv,
  wishListsGetWishList: Jv,
  wishListsIsProductInWishLists: Wv,
  wishListsPatchWishList: zv,
  wishListsUpdateProductToWishList: Qv,
  wishListsWishListExists: Hv,
  wishListsWishListExistsHead: qv
}, Symbol.toStringTag, { value: "Module" })), c = B($()), Xv = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/version",
  ...e
}), pv = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/health",
  ...e
}), ov = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/hello",
  ...e
}), eh = (e) => (e.client ?? c).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rh = (e) => (e.client ?? c).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ah = (e) => (e.client ?? c).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), th = (e) => (e.client ?? c).get({
  url: "/confirmEmail",
  ...e
}), ch = (e) => (e.client ?? c).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lh = (e) => (e.client ?? c).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nh = (e) => (e.client ?? c).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uh = (e) => (e.client ?? c).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ih = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/manage/info",
  ...e
}), sh = (e) => (e.client ?? c).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dh = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), gh = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), vh = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), hh = (e) => ((e == null ? void 0 : e.client) ?? c).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), mh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ch = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sh = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e
}), yh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e
}), Th = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ph = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ih = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemAttributeOptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ah = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e
}), Gh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e
}), Lh = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rh = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemAttributeOptions/{itemAttributeOptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wh = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eh = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e
}), Mh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e
}), Dh = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bh = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemAttributes/{itemAttributeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $h = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemBrands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xh = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemBrands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fh = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e
}), Uh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e
}), Oh = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wh = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemBrands/{itemBrandId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemBundles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qh = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemBundles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemBundles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _h = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e
}), zh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e
}), Qh = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jh = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemBundles/{itemBundleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nh = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kh = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e
}), Yh = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e
}), Zh = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xh = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemCategories/{itemCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ph = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oh = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), em = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemFamilies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemFamilies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), am = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemFamilies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tm = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e
}), cm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e
}), lm = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nm = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemFamilies/{itemFamilyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), um = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), im = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/All",
  ...e
}), dm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/Primary",
  ...e
}), gm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}",
  ...e
}), vm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}/Children",
  ...e
}), hm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemGoogleCategories/tree",
  ...e
}), mm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemGoogleCategories/tree",
  ...e
}), Cm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemImages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemImages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ym = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e
}), Tm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e
}), Pm = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fm = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemImages/{itemImageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Im = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemQuestions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemQuestions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Am = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e
}), Gm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e
}), Lm = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rm = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemQuestions/{itemQuestionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), km = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemRefundPolicies",
  ...e
}), wm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Em = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemRefundPolicies/{itemRefundPolicyId}",
  ...e
}), Mm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemRefundPolicies/{itemRefundPolicyId}",
  ...e
}), Dm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemReturnPolicies",
  ...e
}), $m = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xm = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}",
  ...e
}), Fm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}",
  ...e
}), Um = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemReviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Om = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemReviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wm = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e
}), Hm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e
}), qm = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vm = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemReviews/{itemReviewId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _m = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zm = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items/MaxPrice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items/MinPrice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nm = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Km = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e
}), Ym = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e
}), Zm = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xm = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/Items/{itemId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pm = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Extended",
  ...e
}), om = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eC = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Items/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/Public/{itemId}",
  ...e
}), aC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/Batch",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/BulkUpsert",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/RecalculatePrices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), iC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), sC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}",
  ...e
}), dC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), vC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), hC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}",
  ...e
}), mC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/Primary",
  ...e
}), CC = (e) => (e.client ?? c).post({
  ...u,
  url: "/api/v2/CatalogService/Items/{itemId}/Images/Primary",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), SC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), TC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), PC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}",
  ...e
}), fC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), jC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), AC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}",
  ...e
}), GC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}",
  ...e
}), bC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}",
  ...e
}), kC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}",
  ...e
}), MC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}",
  ...e
}), DC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), $C = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), xC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}",
  ...e
}), FC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e
}), OC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e
}), WC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), VC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), _C = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}",
  ...e
}), zC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules",
  ...e
}), QC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), JC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), NC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}",
  ...e
}), KC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), ZC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), XC = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}",
  ...e
}), pC = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oC = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), eS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), rS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}",
  ...e
}), aS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), cS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), lS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}",
  ...e
}), nS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), iS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), sS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), dS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions",
  ...e
}), gS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), vS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), hS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}",
  ...e
}), mS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), SS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), yS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}",
  ...e
}), TS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemShippingPolicies",
  ...e
}), fS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemShippingPolicies/{itemShippingPolicyId}",
  ...e
}), jS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemShippingPolicies/{itemShippingPolicyId}",
  ...e
}), AS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e
}), RS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e
}), bS = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kS = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemTags/{itemTagId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ES = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemTaxPolicies",
  ...e
}), MS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}",
  ...e
}), BS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}",
  ...e
}), $S = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), US = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e
}), OS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e
}), WS = (e) => (e.client ?? c).patch({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HS = (e) => (e.client ?? c).put({
  url: "/api/v2/CatalogService/ItemTypes/{itemTypeID}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VS = (e) => (e.client ?? c).post({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies",
  ...e
}), _S = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zS = (e) => (e.client ?? c).delete({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), QS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}",
  ...e
}), JS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Merchants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NS = (e) => ((e == null ? void 0 : e.client) ?? c).get({
  url: "/api/v2/CatalogService/Merchants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KS = (e) => (e.client ?? c).get({
  url: "/api/v2/CatalogService/Merchants/{merchantId}",
  ...e
}), Mhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  itemAttributesCreateItemAttribute: wh,
  itemAttributesDeleteItemAttribute: Eh,
  itemAttributesGetItemAttributeById: Mh,
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
  itemBundlesGetItemBundleById: zh,
  itemBundlesGetItemBundles: Hh,
  itemBundlesGetItemBundlesCount: Vh,
  itemBundlesPatchItemBundle: Qh,
  itemBundlesUpdateItemBundle: Jh,
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
  itemGoogleCategoriesGetChildrenItemGoogleCategoriesById: vm,
  itemGoogleCategoriesGetItemGoogleCategories: um,
  itemGoogleCategoriesGetItemGoogleCategoriesCount: im,
  itemGoogleCategoriesGetItemGoogleCategoriesTree: hm,
  itemGoogleCategoriesGetItemGoogleCategoryById: gm,
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
  itemRefundPoliciesCountItemRefundPolicies: wm,
  itemRefundPoliciesGetItemRefundPolicies: bm,
  itemRefundPoliciesGetItemRefundPolicyById: Mm,
  itemRefundPoliciesRelateItemToRefundPolicy: km,
  itemRefundPoliciesRemoveRefundPolicyFromItem: Em,
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
  itemTaxPoliciesCountItemTaxPolicies: MS,
  itemTaxPoliciesGetItemTaxPolicies: wS,
  itemTaxPoliciesGetItemTaxPolicyById: BS,
  itemTaxPoliciesRelateItemToTaxPolicy: ES,
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
  itemWarrantyPoliciesGetItemWarrantyPolicyById: QS,
  itemWarrantyPoliciesRelateItemToWarrantyPolicy: VS,
  itemWarrantyPoliciesRemoveWarrantyPolicyFromItem: zS,
  itemsBatchUpdateStockItems: aC,
  itemsBulkUpsertStockItems: tC,
  itemsCountStockItemTagsByItemId: nC,
  itemsCountStockItemsByBusiness: Nm,
  itemsCreateStockItem: zm,
  itemsDeleteStockItem: Km,
  itemsGetExtendedStockItemById: pm,
  itemsGetProductPrimaryImage: mC,
  itemsGetPublicStockItemById: rC,
  itemsGetPublicStockItems: om,
  itemsGetPublicStockItemsCount: eC,
  itemsGetStockItemAttachmentById: OC,
  itemsGetStockItemAttachmentsByItemId: FC,
  itemsGetStockItemAttributeOptionById: vS,
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
  itemsGetStockItemPriceRuleById: JC,
  itemsGetStockItemPriceRulesByItemId: zC,
  itemsGetStockItemQuestionById: MC,
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
  itemsGetStockItemTypeById: vC,
  itemsGetStockItemTypesByItemId: dC,
  itemsGetStockItemWarrantyPoliciesByItemId: nS,
  itemsGetStockItemWarrantyPolicyById: iS,
  itemsGetStockItemsOdataMaxPrice: Qm,
  itemsGetStockItemsOdataMinPrice: Jm,
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
  itemsRelateQuestionToStockItem: wC,
  itemsRelateRefundPolicyToStockItem: rS,
  itemsRelateReturnPolicyToStockItem: XC,
  itemsRelateReviewToStockItem: LC,
  itemsRelateShippingPolicyToStockItem: lS,
  itemsRelateTagToStockItem: sC,
  itemsRelateTaxPolicyToStockItem: _C,
  itemsRelateTypeToStockItem: hC,
  itemsRelateWarrantyPolicyToStockItem: sS,
  itemsRemoveAttachmentFromStockItem: UC,
  itemsRemoveAttributeOptionFromStockItem: gS,
  itemsRemoveBrandFromStockItem: IC,
  itemsRemoveCategoryFromStockItem: BC,
  itemsRemoveGoogleCategoryFromStockItem: CS,
  itemsRemoveImageFromStockItem: yC,
  itemsRemovePriceRuleFromStockItem: QC,
  itemsRemoveQuestionFromStockItem: EC,
  itemsRemoveRefundPolicyFromStockItem: oC,
  itemsRemoveReturnPolicyFromStockItem: YC,
  itemsRemoveReviewFromStockItem: RC,
  itemsRemoveShippingPolicyFromStockItem: tS,
  itemsRemoveTagFromStockItem: uC,
  itemsRemoveTaxPolicyFromStockItem: qC,
  itemsRemoveTypeFromStockItem: gC,
  itemsRemoveWarrantyPolicyFromStockItem: uS,
  itemsUpdateProductPrimaryImage: CC,
  itemsUpdateStockItem: Xm,
  merchantsGetMerchantById: KS,
  merchantsGetMerchants: JS,
  merchantsGetMerchantsCount: NS,
  platformGetHealth: pv,
  platformGetHello: ov,
  platformGetManageInfo: ih,
  platformGetVersion: Xv,
  platformMapIdentityApiConfirmEmail: th,
  platformPostAccountLogout: gh,
  platformPostAccountManageDownloadPersonalData: hh,
  platformPostAccountManageLinkExternalLogin: vh,
  platformPostAccountPerformExternalLogin: dh,
  platformPostForgotPassword: lh,
  platformPostLogin: rh,
  platformPostManage2Fa: uh,
  platformPostManageInfo: sh,
  platformPostRefresh: ah,
  platformPostRegister: eh,
  platformPostResendConfirmationEmail: ch,
  platformPostResetPassword: nh
}, Symbol.toStringTag, { value: "Module" })), k = B($()), YS = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZS = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XS = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pS = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}",
  ...e
}), oS = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/End",
  ...e
}), ey = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Cancel",
  ...e
}), ry = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ay = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ty = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cy = (e) => (e.client ?? k).put({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ly = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Remove",
  ...e
}), ny = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Leave",
  ...e
}), uy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/MediaGrant",
  ...e
}), iy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/MediaGrant/Revoke",
  ...e
}), sy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Admit",
  ...e
}), dy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Deny",
  ...e
}), gy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Join",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Admissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Admissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), my = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participation",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participation/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Participation",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Participants/{participantId}/Participation/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ty = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Py = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Providers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}",
  ...e
}), jy = (e) => (e.client ?? k).put({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ay = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Providers/EffectAttempts/Unsettled",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gy = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Readiness",
  ...e
}), Ly = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Enable",
  ...e
}), Ry = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Disable",
  ...e
}), by = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Providers/{registrationId}/Suspend",
  ...e
}), ky = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Bindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wy = (e) => (e.client ?? k).post({
  url: "/api/v2/CommunicationsService/Sessions/{sessionId}/Bindings",
  ...e
}), Ey = (e) => (e.client ?? k).get({
  url: "/api/v2/CommunicationsService/Composition",
  ...e
}), My = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/version",
  ...e
}), Dy = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/health",
  ...e
}), By = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/hello",
  ...e
}), $y = (e) => (e.client ?? k).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xy = (e) => (e.client ?? k).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fy = (e) => (e.client ?? k).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uy = (e) => (e.client ?? k).get({
  url: "/confirmEmail",
  ...e
}), Oy = (e) => (e.client ?? k).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wy = (e) => (e.client ?? k).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hy = (e) => (e.client ?? k).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qy = (e) => (e.client ?? k).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vy = (e) => ((e == null ? void 0 : e.client) ?? k).get({
  url: "/manage/info",
  ...e
}), _y = (e) => (e.client ?? k).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zy = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Qy = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Jy = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ny = (e) => ((e == null ? void 0 : e.client) ?? k).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Dhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  communicationsAdmitParticipant: sy,
  communicationsBindSessionResource: wy,
  communicationsCancelSession: ey,
  communicationsDenyParticipant: dy,
  communicationsDisableProviderRegistration: Ry,
  communicationsEnableProviderRegistration: Ly,
  communicationsEndSession: oS,
  communicationsGetAdmissions: vy,
  communicationsGetAdmissionsCount: hy,
  communicationsGetComposition: Ey,
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
  communicationsJoinSession: gy,
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
  platformGetVersion: My,
  platformMapIdentityApiConfirmEmail: Uy,
  platformPostAccountLogout: Qy,
  platformPostAccountManageDownloadPersonalData: Ny,
  platformPostAccountManageLinkExternalLogin: Jy,
  platformPostAccountPerformExternalLogin: zy,
  platformPostForgotPassword: Wy,
  platformPostLogin: xy,
  platformPostManage2Fa: qy,
  platformPostManageInfo: _y,
  platformPostRefresh: Fy,
  platformPostRegister: $y,
  platformPostResendConfirmationEmail: Oy,
  platformPostResetPassword: Hy
}, Symbol.toStringTag, { value: "Module" })), s = B($()), Ky = (e) => ((e == null ? void 0 : e.client) ?? s).get({
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
}), gT = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/BlogPosts/{blogPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vT = (e) => (e.client ?? s).get({
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
}), wT = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/BlogPostTags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ET = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/BlogPostTags/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MT = (e) => (e.client ?? s).delete({
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
}), zT = (e) => ((e == null ? void 0 : e.client) ?? s).get({
  url: "/hello",
  ...e
}), QT = (e) => (e.client ?? s).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JT = (e) => (e.client ?? s).post({
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
}), gP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/MenuContexts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vP = (e) => (e.client ?? s).post({
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
}), wP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/Portals/{portalId}/Settings",
  ...e
}), EP = (e) => (e.client ?? s).put({
  url: "/api/v2/ContentService/Portals/{portalId}/Settings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MP = (e) => (e.client ?? s).get({
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
}), zP = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebContents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QP = (e) => (e.client ?? s).post({
  url: "/api/v2/ContentService/WebContents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JP = (e) => (e.client ?? s).delete({
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
}), gf = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebPages/{webPageId}/Tags",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vf = (e) => (e.client ?? s).post({
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
}), wf = (e) => (e.client ?? s).delete({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e
}), Ef = (e) => (e.client ?? s).get({
  url: "/api/v2/ContentService/WebsiteThemes/{id}",
  ...e
}), Mf = (e) => (e.client ?? s).patch({
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
}), Bhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  blogPostTagsCountBlogPostTags: ET,
  blogPostTagsCreateBlogPostTag: wT,
  blogPostTagsDeleteBlogPostTag: MT,
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
  blogPostsGetPublicBlogPosts: vT,
  blogPostsGetRepliesForComment: LT,
  blogPostsGetTagsForBlogPost: CT,
  blogPostsPatchBlogPost: dT,
  blogPostsRelateCategoryToBlogPost: jT,
  blogPostsRelateTagToBlogPost: TT,
  blogPostsReplyToComment: RT,
  blogPostsUnrelateCategoryFromBlogPost: IT,
  blogPostsUnrelateTagFromBlogPost: yT,
  blogPostsUpdateBlogPost: gT,
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
  menuContextsCreateMenuContext: vP,
  menuContextsDeleteMenuContext: mP,
  menuContextsGetMenuContextById: CP,
  menuContextsGetMenuContexts: gP,
  menuContextsUpdateMenuContext: SP,
  platformGetHealth: _T,
  platformGetHello: zT,
  platformGetManageInfo: oT,
  platformGetVersion: VT,
  platformMapIdentityApiConfirmEmail: KT,
  platformPostAccountLogout: aP,
  platformPostAccountManageDownloadPersonalData: cP,
  platformPostAccountManageLinkExternalLogin: tP,
  platformPostAccountPerformExternalLogin: rP,
  platformPostForgotPassword: ZT,
  platformPostLogin: JT,
  platformPostManage2Fa: pT,
  platformPostManageInfo: eP,
  platformPostRefresh: NT,
  platformPostRegister: QT,
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
  portalsGetWebPortalFullSettings: MP,
  portalsGetWebPortalOptions: DP,
  portalsGetWebPortalSettings: wP,
  portalsInitializeCurrentWebPortal: jP,
  portalsPatchWebPortal: bP,
  portalsSearchWebPortal: GP,
  portalsUnbindWebPortalDomain: $P,
  portalsUpdateWebPortal: kP,
  portalsUpdateWebPortalSettings: EP,
  themesUpdateBaseWebContent: FP,
  webComponentsCountWebComponents: WP,
  webComponentsCreateWebComponent: OP,
  webComponentsDeleteWebComponent: HP,
  webComponentsGetWebComponentById: qP,
  webComponentsGetWebComponents: UP,
  webComponentsUpdateWebComponent: VP,
  webContentsCountWebContents: _P,
  webContentsCreateWebContent: QP,
  webContentsDeleteWebContent: JP,
  webContentsGetWebContentById: NP,
  webContentsGetWebContents: zP,
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
  webPagesCreateWebPageTagRelation: vf,
  webPagesDeleteWebPage: nf,
  webPagesGetCategoriesByWebPage: Cf,
  webPagesGetTagsByWebPage: gf,
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
  websiteThemesDeleteWebsiteTheme: wf,
  websiteThemesGetWebsiteThemeById: Ef,
  websiteThemesGetWebsiteThemes: Rf,
  websiteThemesGetWebsiteThemesCount: kf,
  websiteThemesPatchWebsiteTheme: Mf,
  websiteThemesUpdateWebsiteTheme: Df
}, Symbol.toStringTag, { value: "Module" })), h = B($()), Hf = (e) => (e.client ?? h).get({
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
}), zf = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e
}), Qf = (e) => (e.client ?? h).patch({
  url: "/api/v2/CrmService/ContactGroups/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jf = (e) => (e.client ?? h).put({
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
}), gI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/ContactRelationTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vI = (e) => (e.client ?? h).delete({
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
}), wI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MI = (e) => (e.client ?? h).get({
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
}), zI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Individuals/{contactId}/Individuals",
  ...e
}), QI = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/Organizations/{contactId}/Individuals",
  ...e
}), JI = (e) => (e.client ?? h).get({
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
}), g2 = (e) => (e.client ?? h).put({
  url: "/api/v2/CrmService/ContactSources/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v2 = (e) => ((e == null ? void 0 : e.client) ?? h).get({
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
}), w2 = (e) => (e.client ?? h).get({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E2 = (e) => (e.client ?? h).post({
  url: "/api/v2/CrmService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M2 = (e) => (e.client ?? h).get({
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
}), $he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contactGroupsCreateContactGroup: qf,
  contactGroupsDeleteContactGroup: _f,
  contactGroupsGetContactGroupById: zf,
  contactGroupsGetContactGroups: Hf,
  contactGroupsGetContactGroupsCount: Vf,
  contactGroupsPatchContactGroup: Qf,
  contactGroupsUpdateContactGroup: Jf,
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
  contactRelationTypesDeleteContactRelationType: vI,
  contactRelationTypesGetContactRelationTypeById: hI,
  contactRelationTypesGetContactRelationTypes: sI,
  contactRelationTypesGetContactRelationTypesCount: gI,
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
  contactSourcesUpdateContactSource: g2,
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
  contactsGetBusinessOwnedOrganizations: wI,
  contactsGetBusinessOwnedOrganizationsCount: EI,
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
  contactsGetExtendedBusinessOwnedOrganizations: MI,
  contactsGetExtendedContact: GI,
  contactsGetExtendedContacts: PI,
  contactsGetIndividualRelatedIndividuals: zI,
  contactsGetIndividualRelatedOrganizations: _I,
  contactsGetOrganizationRelatedIndividuals: QI,
  contactsGetOrganizationRelatedOrganizations: JI,
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
  optionsCreateContactOption: E2,
  optionsDeleteContactOption: D2,
  optionsGetContactOptionById: B2,
  optionsGetContactOptionByKey: F2,
  optionsGetContactOptions: w2,
  optionsGetContactOptionsCount: M2,
  optionsPatchContactOption: $2,
  optionsPatchContactOptionByKey: U2,
  optionsUpdateContactOption: x2,
  optionsUpsertContactOption: O2,
  platformGetHealth: h2,
  platformGetHello: m2,
  platformGetManageInfo: A2,
  platformGetVersion: v2,
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
}, Symbol.toStringTag, { value: "Module" })), D = B($()), _2 = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z2 = (e) => (e.client ?? D).post({
  url: "/api/v2/DealsService/DealUnitFlows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q2 = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J2 = (e) => (e.client ?? D).delete({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e
}), N2 = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e
}), K2 = (e) => (e.client ?? D).patch({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y2 = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z2 = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X2 = (e) => (e.client ?? D).post({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p2 = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o2 = (e) => (e.client ?? D).delete({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e
}), ej = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e
}), rj = (e) => (e.client ?? D).patch({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aj = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cj = (e) => (e.client ?? D).post({
  url: "/api/v2/DealsService/DealUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uj = (e) => (e.client ?? D).delete({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e
}), ij = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e
}), sj = (e) => (e.client ?? D).patch({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dj = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Extended",
  ...e
}), vj = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Calculate",
  ...e
}), hj = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Close",
  ...e
}), mj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cj = (e) => (e.client ?? D).post({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yj = (e) => (e.client ?? D).delete({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e
}), Tj = (e) => (e.client ?? D).get({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e
}), Pj = (e) => (e.client ?? D).patch({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fj = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ij = (e) => (e.client ?? D).put({
  url: "/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}/Calculate",
  ...e
}), jj = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/version",
  ...e
}), Aj = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/health",
  ...e
}), Gj = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/hello",
  ...e
}), Lj = (e) => (e.client ?? D).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rj = (e) => (e.client ?? D).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bj = (e) => (e.client ?? D).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kj = (e) => (e.client ?? D).get({
  url: "/confirmEmail",
  ...e
}), wj = (e) => (e.client ?? D).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ej = (e) => (e.client ?? D).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mj = (e) => (e.client ?? D).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dj = (e) => (e.client ?? D).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bj = (e) => ((e == null ? void 0 : e.client) ?? D).get({
  url: "/manage/info",
  ...e
}), $j = (e) => (e.client ?? D).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xj = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Fj = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Uj = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Oj = (e) => ((e == null ? void 0 : e.client) ?? D).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), xhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dealUnitFlowsCreateDealUnitFlow: z2,
  dealUnitFlowsCreateDealUnitFlowStage: X2,
  dealUnitFlowsDeleteDealUnitFlow: J2,
  dealUnitFlowsDeleteDealUnitFlowStage: o2,
  dealUnitFlowsGetDealUnitFlow: N2,
  dealUnitFlowsGetDealUnitFlowStage: ej,
  dealUnitFlowsGetDealUnitFlowStages: Z2,
  dealUnitFlowsGetDealUnitFlowStagesCount: p2,
  dealUnitFlowsGetDealUnitFlows: _2,
  dealUnitFlowsGetDealUnitFlowsCount: Q2,
  dealUnitFlowsPatchDealUnitFlow: K2,
  dealUnitFlowsPatchDealUnitFlowStage: rj,
  dealUnitFlowsUpdateDealUnitFlow: Y2,
  dealUnitFlowsUpdateDealUnitFlowStage: aj,
  dealUnitsCalculateDealUnit: vj,
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
  dealUnitsGetExtendedDealUnit: gj,
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
  platformPostForgotPassword: Ej,
  platformPostLogin: Rj,
  platformPostManage2Fa: Dj,
  platformPostManageInfo: $j,
  platformPostRefresh: bj,
  platformPostRegister: Lj,
  platformPostResendConfirmationEmail: wj,
  platformPostResetPassword: Mj
}, Symbol.toStringTag, { value: "Module" })), X = B($()), Wj = (e) => ((e == null ? void 0 : e.client) ?? X).get({
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
}), zj = (e) => (e.client ?? X).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qj = (e) => (e.client ?? X).get({
  url: "/confirmEmail",
  ...e
}), Jj = (e) => (e.client ?? X).post({
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
}), Fhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: Hj,
  platformGetHello: qj,
  platformGetManageInfo: Zj,
  platformGetVersion: Wj,
  platformMapIdentityApiConfirmEmail: Qj,
  platformPostAccountLogout: oj,
  platformPostAccountManageDownloadPersonalData: rA,
  platformPostAccountManageLinkExternalLogin: eA,
  platformPostAccountPerformExternalLogin: pj,
  platformPostForgotPassword: Nj,
  platformPostLogin: _j,
  platformPostManage2Fa: Yj,
  platformPostManageInfo: Xj,
  platformPostRefresh: zj,
  platformPostRegister: Vj,
  platformPostResendConfirmationEmail: Jj,
  platformPostResetPassword: Kj
}, Symbol.toStringTag, { value: "Module" })), Q = B($()), aA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  url: "/api/v2/ForexService/Documents/Reprice",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tA = (e) => (e.client ?? Q).get({
  url: "/api/v2/ForexService/Exchange/Latest",
  ...e
}), cA = (e) => (e.client ?? Q).get({
  url: "/api/v2/ForexService/Exchange/History",
  ...e
}), lA = (e) => (e.client ?? Q).get({
  url: "/api/v3/ForexService/Exchange/Latest",
  ...e
}), nA = (e) => (e.client ?? Q).get({
  url: "/api/v3/ForexService/Exchange/History",
  ...e
}), uA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/version",
  ...e
}), iA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/health",
  ...e
}), sA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/hello",
  ...e
}), dA = (e) => (e.client ?? Q).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gA = (e) => (e.client ?? Q).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vA = (e) => (e.client ?? Q).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hA = (e) => (e.client ?? Q).get({
  url: "/confirmEmail",
  ...e
}), mA = (e) => (e.client ?? Q).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CA = (e) => (e.client ?? Q).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SA = (e) => (e.client ?? Q).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yA = (e) => (e.client ?? Q).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/manage/info",
  ...e
}), PA = (e) => (e.client ?? Q).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), IA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), jA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), AA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), GA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/api/v2/ForexService/Rates/Latest",
  ...e
}), LA = (e) => (e.client ?? Q).get({
  url: "/api/v2/ForexService/Rates/Latest/{currencyId}",
  ...e
}), RA = (e) => ((e == null ? void 0 : e.client) ?? Q).get({
  url: "/api/v2/ForexService/Rates/History",
  ...e
}), bA = (e) => (e.client ?? Q).get({
  url: "/api/v2/ForexService/Rates/History/{currencyId}",
  ...e
}), kA = (e) => (e.client ?? Q).get({
  url: "/api/v2/ForexService/Rates/History/{currencyId}/Series",
  ...e
}), wA = (e) => ((e == null ? void 0 : e.client) ?? Q).post({
  url: "/api/v2/ForexService/Sets/Repair",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  platformPostLogin: gA,
  platformPostManage2Fa: yA,
  platformPostManageInfo: PA,
  platformPostRefresh: vA,
  platformPostRegister: dA,
  platformPostResendConfirmationEmail: mA,
  platformPostResetPassword: SA,
  ratesGetForexRateSeries: kA,
  ratesGetHistoricalCurrencyRate: bA,
  ratesGetHistoricalCurrencyRates: RA,
  ratesGetLatestCurrencyRate: LA,
  ratesGetLatestCurrencyRatesModel: GA,
  setsRepairForeignExchangeSets: wA
}, Symbol.toStringTag, { value: "Module" })), W = B($()), EA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
  url: "/api/v2/GlobeService/Countries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
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
}), zA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/CallingCodes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QA = (e) => (e.client ?? W).get({
  url: "/api/v2/GlobeService/Countries/{countryId}/CallingCodes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JA = (e) => ((e == null ? void 0 : e.client) ?? W).get({
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
}), gG = (e) => ((e == null ? void 0 : e.client) ?? W).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), vG = (e) => ((e == null ? void 0 : e.client) ?? W).get({
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
}), Ohe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countriesCountCallingCodesByCountry: QA,
  countriesCountCitiesByState: OA,
  countriesCountCountries: MA,
  countriesCountCountryStates: xA,
  countriesCountTimezonesByCountry: HA,
  countriesCountTopLevelDomainsByCountry: _A,
  countriesGetAllCountries: EA,
  countriesGetCallingCodesByCountryId: zA,
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
  currenciesGetEnabledCurrencies: JA,
  languagesCountLanguages: hG,
  languagesGetLanguageById: mG,
  languagesGetLanguages: vG,
  platformGetHealth: ZA,
  platformGetHello: XA,
  platformGetManageInfo: nG,
  platformGetVersion: YA,
  platformMapIdentityApiConfirmEmail: rG,
  platformPostAccountLogout: sG,
  platformPostAccountManageDownloadPersonalData: gG,
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
}, Symbol.toStringTag, { value: "Module" })), l = B($()), TG = (e) => (e.client ?? l).get({
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
}), wG = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/AppraisalWorkflows/{workflowId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeAppraisalSessions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MG = (e) => (e.client ?? l).post({
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
}), zG = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/EmployeeTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QG = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/EmployeeTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JG = (e) => (e.client ?? l).get({
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
}), gL = (e) => (e.client ?? l).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vL = (e) => (e.client ?? l).get({
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
}), wL = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EL = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/GigApplications/{gigApplicationId}/Accept",
  ...e
}), ML = (e) => (e.client ?? l).get({
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
}), zL = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobApplicants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QL = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/JobApplicants/{jobApplicantId}",
  ...e
}), JL = (e) => (e.client ?? l).get({
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
}), gR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOfferFields",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vR = (e) => (e.client ?? l).get({
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
}), wR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/JobOffers/{jobOfferId}/Fill",
  ...e
}), ER = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/JobTitles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MR = (e) => (e.client ?? l).post({
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
}), zR = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/LeaveTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QR = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/LeaveTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JR = (e) => (e.client ?? l).get({
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
}), gb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Positions/{positionId}/Assignments/{assignmentId}/End",
  ...e
}), hb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Positions/{positionId}/Capacity",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Positions/{positionId}/Department",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/RequiredSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e
}), Pb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e
}), fb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ib = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/RequiredSkills/{requiredSkillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ab = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Salaries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e
}), Rb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e
}), bb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Salaries/{salaryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Schedules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Db = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e
}), Bb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e
}), $b = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Schedules/{scheduleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ub = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/Shifts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ob = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e
}), Hb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e
}), qb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/Shifts/{shiftId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _b = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TimeIntervals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jb = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e
}), Nb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e
}), Kb = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yb = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TimeIntervals/{timeIntervalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xb = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingProgramCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pb = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ob = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e
}), ek = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e
}), rk = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ak = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingProgramCourses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ck = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingProgramEvents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nk = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e
}), uk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e
}), ik = (e) => (e.client ?? l).patch({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sk = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingProgramEvents/{eventId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gk = (e) => (e.client ?? l).post({
  url: "/api/v2/HrmsService/TrainingPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hk = (e) => (e.client ?? l).delete({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e
}), mk = (e) => (e.client ?? l).get({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e
}), Ck = (e) => (e.client ?? l).put({
  url: "/api/v2/HrmsService/TrainingPrograms/{programId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Whe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  appraisalWorkflowsUpdateAppraisalWorkflow: wG,
  employeeAppraisalSessionsCreateEmployeeAppraisalSession: MG,
  employeeAppraisalSessionsDeleteEmployeeAppraisalSession: BG,
  employeeAppraisalSessionsGetEmployeeAppraisalSessionById: $G,
  employeeAppraisalSessionsGetEmployeeAppraisalSessions: EG,
  employeeAppraisalSessionsGetEmployeeAppraisalSessionsCount: DG,
  employeeAppraisalSessionsPatchEmployeeAppraisalSession: xG,
  employeeAppraisalSessionsUpdateEmployeeAppraisalSession: FG,
  employeeTypesCreateEmployeeType: QG,
  employeeTypesDeleteEmployeeType: NG,
  employeeTypesGetEmployeeTypeById: KG,
  employeeTypesGetEmployeeTypes: zG,
  employeeTypesGetEmployeeTypesCount: JG,
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
  gigApplicationsAcceptGigApplication: EL,
  gigApplicationsCreateGigApplication: GL,
  gigApplicationsDeleteGigApplication: RL,
  gigApplicationsGetGigApplicationById: bL,
  gigApplicationsGetGigApplications: AL,
  gigApplicationsGetGigApplicationsCount: LL,
  gigApplicationsPatchGigApplication: kL,
  gigApplicationsUpdateGigApplication: wL,
  gigsAwardGig: WL,
  gigsCancelGig: qL,
  gigsCompleteGig: HL,
  gigsCreateGig: DL,
  gigsDeleteGig: $L,
  gigsGetGigById: xL,
  gigsGetGigs: ML,
  gigsGetGigsCount: BL,
  gigsPatchGig: FL,
  gigsPublishGig: OL,
  gigsUpdateGig: UL,
  jobApplicantsCreateJobApplicant: _L,
  jobApplicantsDeleteJobApplicant: QL,
  jobApplicantsGetJobApplicantById: JL,
  jobApplicantsGetJobApplicants: VL,
  jobApplicantsGetJobApplicantsCount: zL,
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
  jobOfferFieldsCreateJobOfferField: gR,
  jobOfferFieldsDeleteJobOfferField: hR,
  jobOfferFieldsGetJobOfferFieldById: mR,
  jobOfferFieldsGetJobOfferFields: dR,
  jobOfferFieldsGetJobOfferFieldsCount: vR,
  jobOfferFieldsPatchJobOfferField: CR,
  jobOfferFieldsUpdateJobOfferField: SR,
  jobOffersCloseJobOffer: kR,
  jobOffersCreateJobOffer: TR,
  jobOffersDeleteJobOffer: fR,
  jobOffersFillJobOffer: wR,
  jobOffersGetJobOfferById: IR,
  jobOffersGetJobOffers: yR,
  jobOffersGetJobOffersCount: PR,
  jobOffersGetPublicJobOfferById: RR,
  jobOffersGetPublicJobOffers: GR,
  jobOffersGetPublicJobOffersCount: LR,
  jobOffersPatchJobOffer: jR,
  jobOffersPublishJobOffer: bR,
  jobOffersUpdateJobOffer: AR,
  jobTitlesCreateJobTitle: MR,
  jobTitlesDeleteJobTitle: BR,
  jobTitlesGetJobTitleById: $R,
  jobTitlesGetJobTitles: ER,
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
  leaveTypesCreateLeaveType: QR,
  leaveTypesDeleteLeaveType: NR,
  leaveTypesGetLeaveTypeById: KR,
  leaveTypesGetLeaveTypes: zR,
  leaveTypesGetLeaveTypesCount: JR,
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
  platformMapIdentityApiConfirmEmail: vL,
  platformPostAccountLogout: fL,
  platformPostAccountManageDownloadPersonalData: jL,
  platformPostAccountManageLinkExternalLogin: IL,
  platformPostAccountPerformExternalLogin: PL,
  platformPostForgotPassword: mL,
  platformPostLogin: dL,
  platformPostManage2Fa: SL,
  platformPostManageInfo: TL,
  platformPostRefresh: gL,
  platformPostRegister: sL,
  platformPostResendConfirmationEmail: hL,
  platformPostResetPassword: CL,
  positionSeatsAssignPosition: db,
  positionSeatsChangePositionCapacity: hb,
  positionSeatsChangePositionDepartment: mb,
  positionSeatsEndPositionAssignment: vb,
  positionSeatsGetPositionAssignments: sb,
  positionSeatsGetPositionAssignmentsCount: gb,
  requiredSkillsCreateRequiredSkill: Sb,
  requiredSkillsDeleteRequiredSkill: Tb,
  requiredSkillsGetRequiredSkillById: Pb,
  requiredSkillsGetRequiredSkills: Cb,
  requiredSkillsGetRequiredSkillsCount: yb,
  requiredSkillsPatchRequiredSkill: fb,
  requiredSkillsUpdateRequiredSkill: Ib,
  salariesCreateSalary: Ab,
  salariesDeleteSalary: Lb,
  salariesGetSalaries: jb,
  salariesGetSalariesCount: Gb,
  salariesGetSalaryById: Rb,
  salariesPatchSalary: bb,
  salariesUpdateSalary: kb,
  schedulesCreateSchedule: Eb,
  schedulesDeleteSchedule: Db,
  schedulesGetScheduleById: Bb,
  schedulesGetSchedules: wb,
  schedulesGetSchedulesCount: Mb,
  schedulesPatchSchedule: $b,
  schedulesUpdateSchedule: xb,
  shiftsCreateShift: Ub,
  shiftsDeleteShift: Wb,
  shiftsGetShiftById: Hb,
  shiftsGetShifts: Fb,
  shiftsGetShiftsCount: Ob,
  shiftsPatchShift: qb,
  shiftsUpdateShift: Vb,
  timeIntervalsCreateTimeInterval: zb,
  timeIntervalsDeleteTimeInterval: Jb,
  timeIntervalsGetTimeIntervalById: Nb,
  timeIntervalsGetTimeIntervals: _b,
  timeIntervalsGetTimeIntervalsCount: Qb,
  timeIntervalsPatchTimeInterval: Kb,
  timeIntervalsUpdateTimeInterval: Yb,
  trainingProgramCoursesCreateTrainingProgramCourse: Xb,
  trainingProgramCoursesDeleteTrainingProgramCourse: ob,
  trainingProgramCoursesGetTrainingProgramCourseById: ek,
  trainingProgramCoursesGetTrainingProgramCourses: Zb,
  trainingProgramCoursesGetTrainingProgramCoursesCount: pb,
  trainingProgramCoursesPatchTrainingProgramCourse: rk,
  trainingProgramCoursesUpdateTrainingProgramCourse: ak,
  trainingProgramEventsCreateTrainingProgramEvent: ck,
  trainingProgramEventsDeleteTrainingProgramEvent: nk,
  trainingProgramEventsGetTrainingProgramEventById: uk,
  trainingProgramEventsGetTrainingProgramEvents: tk,
  trainingProgramEventsGetTrainingProgramEventsCount: lk,
  trainingProgramEventsPatchTrainingProgramEvent: ik,
  trainingProgramEventsUpdateTrainingProgramEvent: sk,
  trainingProgramsCreateTrainingProgram: gk,
  trainingProgramsDeleteTrainingProgram: hk,
  trainingProgramsGetTrainingProgramById: mk,
  trainingProgramsGetTrainingPrograms: dk,
  trainingProgramsGetTrainingProgramsCount: vk,
  trainingProgramsUpdateTrainingProgram: Ck
}, Symbol.toStringTag, { value: "Module" })), _ = B($()), Sk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}",
  ...e
}), yk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/RequiredPermissions",
  ...e
}), Tk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedPermissions",
  ...e
}), Pk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedRoles",
  ...e
}), fk = (e) => (e.client ?? _).get({
  url: "/api/v2/Applications/{appId}/GrantedRoles/{securityRoleId}/GrantedPermissions",
  ...e
}), Ik = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/Auth/Checker/IsAuthenticated",
  ...e
}), jk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/version",
  ...e
}), Ak = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/health",
  ...e
}), Gk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/hello",
  ...e
}), Lk = (e) => (e.client ?? _).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rk = (e) => (e.client ?? _).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bk = (e) => (e.client ?? _).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kk = (e) => (e.client ?? _).get({
  url: "/confirmEmail",
  ...e
}), wk = (e) => (e.client ?? _).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ek = (e) => (e.client ?? _).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mk = (e) => (e.client ?? _).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dk = (e) => (e.client ?? _).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/manage/info",
  ...e
}), $k = (e) => (e.client ?? _).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Fk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Uk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ok = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Wk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/OAuth/WhoAmI",
  ...e
}), Hk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/api/v2/OAuth/Token",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/Permissions",
  ...e
}), Vk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/OAuth/SignIn",
  ...e
}), _k = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/api/v2/OAuth/SignIn",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/{applicationId}/Keys",
  ...e
}), Qk = (e) => (e.client ?? _).get({
  url: "/api/v2/OAuth/{tenantId}/{applicationId}/.Well-Known/OpenId-Configuration",
  ...e
}), Jk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/api/v2/IdentityService/Resource/message",
  ...e
}), Nk = (e) => ((e == null ? void 0 : e.client) ?? _).get({
  url: "/connect/userinfo",
  ...e
}), Kk = (e) => ((e == null ? void 0 : e.client) ?? _).post({
  url: "/connect/userinfo",
  ...e
}), Hhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applicationsGetApplication: Sk,
  applicationsGetGrantedEnrollmentPermissions: fk,
  applicationsGetGrantedTenantPermissions: Tk,
  applicationsGetGrantedTenantRoles: Pk,
  applicationsGetRequiredPermissions: yk,
  checkerIsAuthenticated: Ik,
  oAuthCheckPasswordSignIn: Vk,
  oAuthGet: Wk,
  oAuthGetJwKs: zk,
  oAuthGetOpenIdConfiguration: Qk,
  oAuthGetPermissions: qk,
  oAuthPasswordSignIn: _k,
  oAuthToken: Hk,
  platformGetHealth: Ak,
  platformGetHello: Gk,
  platformGetManageInfo: Bk,
  platformGetVersion: jk,
  platformMapIdentityApiConfirmEmail: kk,
  platformPostAccountLogout: Fk,
  platformPostAccountManageDownloadPersonalData: Ok,
  platformPostAccountManageLinkExternalLogin: Uk,
  platformPostAccountPerformExternalLogin: xk,
  platformPostForgotPassword: Ek,
  platformPostLogin: Rk,
  platformPostManage2Fa: Dk,
  platformPostManageInfo: $k,
  platformPostRefresh: bk,
  platformPostRegister: Lk,
  platformPostResendConfirmationEmail: wk,
  platformPostResetPassword: Mk,
  resourceGetMessage: Jk,
  userInfoGetConnectUserinfo: Nk,
  userInfoPostConnectUserinfo: Kk
}, Symbol.toStringTag, { value: "Module" })), m = B($()), Yk = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zk = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xk = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentExecutionDiagnostics/{id}",
  ...e
}), pk = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Pools",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ok = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ew = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Workers/{workerId}/Activate",
  ...e
}), rw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Workers/{workerId}/Heartbeat",
  ...e
}), aw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Claim",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/WorkOrders/{workOrderId}/Cancelled",
  ...e
}), cw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Execute",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Complete",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/AgentRuntimeFabric/Fault",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AgentRuntimeStatus/WorkOrders/{id}",
  ...e
}), dw = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/api/v2/IntelligenceService/AiProviders",
  ...e
}), gw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiProviders/Availability",
  ...e
}), vw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiRuns/{id}",
  ...e
}), Cw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsage/Summary",
  ...e
}), Sw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/AiUsageObservations/{id}",
  ...e
}), Pw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/Disclosure",
  ...e
}), fw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/Consent",
  ...e
}), Iw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/OptIn",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/ApprovalAdvice/OptOut",
  ...e
}), Aw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities",
  ...e
}), Gw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities/Count",
  ...e
}), Lw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/Capabilities/{key}",
  ...e
}), Rw = (e) => (e.client ?? m).post({
  ...u,
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Attachments",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ww = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ew = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e
}), Mw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e
}), Dw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $w = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/{id}",
  ...e
}), Fw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/PendingApprovals",
  ...e
}), Uw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ow = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ww = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hw = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e
}), qw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e
}), Vw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _w = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/PermissionReadiness",
  ...e
}), zw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/BuiltInCapabilities",
  ...e
}), Qw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Permissions/Grant",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Permissions/Revoke",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kw = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zw = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e
}), Xw = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e
}), pw = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Skills/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ow = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aE = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e
}), tE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e
}), cE = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/CognitiveSkills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iE = (e) => (e.client ?? m).delete({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e
}), sE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e
}), dE = (e) => (e.client ?? m).put({
  url: "/api/v2/IntelligenceService/CognitiveSkills/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Validate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Install",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Update",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/Uninstall",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CE = (e) => (e.client ?? m).get({
  url: "/api/v2/IntelligenceService/DefinitionDistribution/InstalledState",
  ...e
}), SE = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/version",
  ...e
}), yE = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/health",
  ...e
}), TE = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/hello",
  ...e
}), PE = (e) => (e.client ?? m).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fE = (e) => (e.client ?? m).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IE = (e) => (e.client ?? m).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jE = (e) => (e.client ?? m).get({
  url: "/confirmEmail",
  ...e
}), AE = (e) => (e.client ?? m).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GE = (e) => (e.client ?? m).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LE = (e) => (e.client ?? m).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RE = (e) => (e.client ?? m).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bE = (e) => ((e == null ? void 0 : e.client) ?? m).get({
  url: "/manage/info",
  ...e
}), kE = (e) => (e.client ?? m).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wE = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), EE = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ME = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), DE = (e) => ((e == null ? void 0 : e.client) ?? m).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), BE = (e) => (e.client ?? m).post({
  url: "/api/v2/IntelligenceService/Agents/{agentId}/agui",
  ...e
}), qhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  agentExecutionDiagnosticsGetDiagnosticById: Xk,
  agentExecutionDiagnosticsGetDiagnostics: Yk,
  agentExecutionDiagnosticsGetDiagnosticsCount: Zk,
  agentRuntimeFabricActivate: ew,
  agentRuntimeFabricClaim: aw,
  agentRuntimeFabricComplete: lw,
  agentRuntimeFabricCreatePool: pk,
  agentRuntimeFabricExecute: cw,
  agentRuntimeFabricFault: nw,
  agentRuntimeFabricGetCancellation: tw,
  agentRuntimeFabricHeartbeat: rw,
  agentRuntimeFabricRegister: ok,
  agentRuntimeStatusGetWorkOrderById: sw,
  agentRuntimeStatusGetWorkOrders: uw,
  agentRuntimeStatusGetWorkOrdersCount: iw,
  aiProvidersGetAiProviderAvailability: gw,
  aiProvidersGetAiProviders: dw,
  aiRunsGetAiRunById: mw,
  aiRunsGetAiRuns: vw,
  aiRunsGetAiRunsCount: hw,
  aiUsageGetAiUsageSummary: Cw,
  aiUsageObservationsGetAiUsageObservationById: Tw,
  aiUsageObservationsGetAiUsageObservations: Sw,
  aiUsageObservationsGetAiUsageObservationsCount: yw,
  approvalAdviceGetApprovalAdviceConsent: fw,
  approvalAdviceGetApprovalAdviceDisclosure: Pw,
  approvalAdviceOptInApprovalAdvice: Iw,
  approvalAdviceOptOutApprovalAdvice: jw,
  capabilitiesGetCapabilities: Aw,
  capabilitiesGetCapabilitiesCount: Gw,
  capabilitiesGetCapabilityByKey: Lw,
  cognitiveAgentConversationAttachmentsUploadCognitiveAgentConversationAttachment: Rw,
  cognitiveAgentConversationsCreateCognitiveAgentConversation: kw,
  cognitiveAgentConversationsDeleteCognitiveAgentConversation: Ew,
  cognitiveAgentConversationsGetCognitiveAgentConversationById: Mw,
  cognitiveAgentConversationsGetCognitiveAgentConversations: bw,
  cognitiveAgentConversationsGetCognitiveAgentConversationsCount: ww,
  cognitiveAgentConversationsUpdateCognitiveAgentConversation: Dw,
  cognitiveAgentMessagesGetCognitiveAgentMessageById: xw,
  cognitiveAgentMessagesGetCognitiveAgentMessages: Bw,
  cognitiveAgentMessagesGetCognitiveAgentMessagesCount: $w,
  cognitiveAgentMessagesGetConversationPendingApprovals: Fw,
  cognitiveAgentSkillsCreateCognitiveAgentSkill: Kw,
  cognitiveAgentSkillsDeleteCognitiveAgentSkill: Zw,
  cognitiveAgentSkillsGetCognitiveAgentSkillById: Xw,
  cognitiveAgentSkillsGetCognitiveAgentSkills: Nw,
  cognitiveAgentSkillsGetCognitiveAgentSkillsCount: Yw,
  cognitiveAgentSkillsUpdateCognitiveAgentSkill: pw,
  cognitiveAgentVariablesCreateCognitiveAgentVariable: eE,
  cognitiveAgentVariablesDeleteCognitiveAgentVariable: aE,
  cognitiveAgentVariablesGetCognitiveAgentVariableById: tE,
  cognitiveAgentVariablesGetCognitiveAgentVariables: ow,
  cognitiveAgentVariablesGetCognitiveAgentVariablesCount: rE,
  cognitiveAgentVariablesUpdateCognitiveAgentVariable: cE,
  cognitiveAgentsCreateCognitiveAgent: Ow,
  cognitiveAgentsDeleteCognitiveAgent: Hw,
  cognitiveAgentsGetAgentPermissionReadiness: _w,
  cognitiveAgentsGetBuiltInAgentCapabilities: zw,
  cognitiveAgentsGetCognitiveAgentById: qw,
  cognitiveAgentsGetCognitiveAgents: Uw,
  cognitiveAgentsGetCognitiveAgentsCount: Ww,
  cognitiveAgentsGrantAgentToolPermissions: Qw,
  cognitiveAgentsRevokeAgentToolPermissions: Jw,
  cognitiveAgentsUpdateCognitiveAgent: Vw,
  cognitiveSkillsCreateCognitiveSkill: nE,
  cognitiveSkillsDeleteCognitiveSkill: iE,
  cognitiveSkillsGetCognitiveSkillById: sE,
  cognitiveSkillsGetCognitiveSkills: lE,
  cognitiveSkillsGetCognitiveSkillsCount: uE,
  cognitiveSkillsUpdateCognitiveSkill: dE,
  definitionDistributionGetInstalledDefinitionState: CE,
  definitionDistributionInstallDefinition: vE,
  definitionDistributionUninstallDefinition: mE,
  definitionDistributionUpdateDefinition: hE,
  definitionDistributionValidateDefinition: gE,
  platformGetHealth: yE,
  platformGetHello: TE,
  platformGetManageInfo: bE,
  platformGetVersion: SE,
  platformInvokeAgentSurface: BE,
  platformMapIdentityApiConfirmEmail: jE,
  platformPostAccountLogout: EE,
  platformPostAccountManageDownloadPersonalData: DE,
  platformPostAccountManageLinkExternalLogin: ME,
  platformPostAccountPerformExternalLogin: wE,
  platformPostForgotPassword: GE,
  platformPostLogin: fE,
  platformPostManage2Fa: RE,
  platformPostManageInfo: kE,
  platformPostRefresh: IE,
  platformPostRegister: PE,
  platformPostResendConfirmationEmail: AE,
  platformPostResetPassword: LE
}, Symbol.toStringTag, { value: "Module" })), Z = B($()), $E = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/version",
  ...e
}), xE = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/health",
  ...e
}), FE = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/hello",
  ...e
}), UE = (e) => (e.client ?? Z).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OE = (e) => (e.client ?? Z).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WE = (e) => (e.client ?? Z).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HE = (e) => (e.client ?? Z).get({
  url: "/confirmEmail",
  ...e
}), qE = (e) => (e.client ?? Z).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VE = (e) => (e.client ?? Z).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _E = (e) => (e.client ?? Z).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zE = (e) => (e.client ?? Z).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QE = (e) => ((e == null ? void 0 : e.client) ?? Z).get({
  url: "/manage/info",
  ...e
}), JE = (e) => (e.client ?? Z).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), KE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), YE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ZE = (e) => ((e == null ? void 0 : e.client) ?? Z).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), XE = (e) => (e.client ?? Z).get({
  url: "/api/v2/InventoryService/Inventory/{stockItemId}/Details",
  ...e
}), Vhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inventoryGetInventoryDetails: XE,
  platformGetHealth: xE,
  platformGetHello: FE,
  platformGetManageInfo: QE,
  platformGetVersion: $E,
  platformMapIdentityApiConfirmEmail: HE,
  platformPostAccountLogout: KE,
  platformPostAccountManageDownloadPersonalData: ZE,
  platformPostAccountManageLinkExternalLogin: YE,
  platformPostAccountPerformExternalLogin: NE,
  platformPostForgotPassword: VE,
  platformPostLogin: OE,
  platformPostManage2Fa: zE,
  platformPostManageInfo: JE,
  platformPostRefresh: WE,
  platformPostRegister: UE,
  platformPostResendConfirmationEmail: qE,
  platformPostResetPassword: _E
}, Symbol.toStringTag, { value: "Module" })), f = B($()), pE = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Coupons/Recognition",
  ...e
}), oE = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/version",
  ...e
}), eM = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/health",
  ...e
}), rM = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/hello",
  ...e
}), aM = (e) => (e.client ?? f).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tM = (e) => (e.client ?? f).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cM = (e) => (e.client ?? f).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lM = (e) => (e.client ?? f).get({
  url: "/confirmEmail",
  ...e
}), nM = (e) => (e.client ?? f).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uM = (e) => (e.client ?? f).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iM = (e) => (e.client ?? f).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sM = (e) => (e.client ?? f).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dM = (e) => ((e == null ? void 0 : e.client) ?? f).get({
  url: "/manage/info",
  ...e
}), gM = (e) => (e.client ?? f).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vM = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), hM = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), mM = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), CM = (e) => ((e == null ? void 0 : e.client) ?? f).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), SM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/EstablishmentRepost",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Extended",
  ...e
}), AM = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e
}), GM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e
}), LM = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RM = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bM = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Calculate",
  ...e
}), kM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Issue",
  ...e
}), wM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/CreditNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/DebitNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/CreditableAmount",
  ...e
}), DM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/IssuedUnnumbered",
  ...e
}), BM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/IssuedAtBackfill",
  ...e
}), $M = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UM = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e
}), OM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e
}), WM = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HM = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qM = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Calculate",
  ...e
}), VM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _M = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QM = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e
}), JM = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NM = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YM = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XM = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e
}), pM = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e
}), oM = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cD = (e) => (e.client ?? f).delete({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e
}), lD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e
}), nD = (e) => (e.client ?? f).patch({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uD = (e) => (e.client ?? f).put({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Payments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TotalsAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TaxesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/DiscountsAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/TaxBasesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/GlobalSurchargesAggregate",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/SalesInvoices/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SD = (e) => (e.client ?? f).get({
  url: "/api/v2/InvoicingService/Invoices/PurchaseInvoices/Sum",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TD = (e) => (e.client ?? f).post({
  url: "/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  couponsGetBillingCouponRecognition: pE,
  invoiceEstablishmentRepostRepostInvoiceEstablishment: SM,
  invoicesAggregateInvoiceDiscounts: vD,
  invoicesAggregateInvoiceGlobalSurcharges: mD,
  invoicesAggregateInvoiceTaxBases: hD,
  invoicesAggregateInvoiceTaxes: gD,
  invoicesAggregateInvoiceTotals: dD,
  invoicesBackfillInvoiceIssuedAt: BM,
  invoicesCalculateInvoice: bM,
  invoicesCalculateInvoiceLine: qM,
  invoicesCreateCreditNote: wM,
  invoicesCreateDebitNote: EM,
  invoicesCreateInvoice: TM,
  invoicesCreateInvoiceAdjustment: YM,
  invoicesCreateInvoiceLine: xM,
  invoicesCreateInvoiceLineTax: _M,
  invoicesCreateInvoiceReference: aD,
  invoicesDeleteInvoice: AM,
  invoicesDeleteInvoiceAdjustment: XM,
  invoicesDeleteInvoiceLine: UM,
  invoicesDeleteInvoiceLineTax: QM,
  invoicesDeleteInvoiceReference: cD,
  invoicesGetExtendedInvoice: jM,
  invoicesGetExtendedInvoices: fM,
  invoicesGetExtendedInvoicesCount: IM,
  invoicesGetInvoice: GM,
  invoicesGetInvoiceAdjustment: pM,
  invoicesGetInvoiceAdjustments: KM,
  invoicesGetInvoiceAdjustmentsCount: ZM,
  invoicesGetInvoiceCreditableAmount: MM,
  invoicesGetInvoiceLine: OM,
  invoicesGetInvoiceLineTaxes: VM,
  invoicesGetInvoiceLineTaxesCount: zM,
  invoicesGetInvoiceLines: $M,
  invoicesGetInvoiceLinesCount: FM,
  invoicesGetInvoicePayments: iD,
  invoicesGetInvoicePaymentsCount: sD,
  invoicesGetInvoiceReference: lD,
  invoicesGetInvoiceReferences: rD,
  invoicesGetInvoiceReferencesCount: tD,
  invoicesGetInvoices: yM,
  invoicesGetInvoicesCount: PM,
  invoicesGetPurchaseInvoicesSum: SD,
  invoicesGetSalesInvoicesSum: CD,
  invoicesGetUnnumberedIssuingTenants: DM,
  invoicesIssueInvoice: kM,
  invoicesPatchInvoice: LM,
  invoicesPatchInvoiceAdjustment: oM,
  invoicesPatchInvoiceLine: WM,
  invoicesPatchInvoiceLineTax: JM,
  invoicesPatchInvoiceReference: nD,
  invoicesPreviewInvoiceEmail: TD,
  invoicesSendInvoiceEmail: yD,
  invoicesUpdateInvoice: RM,
  invoicesUpdateInvoiceAdjustment: eD,
  invoicesUpdateInvoiceLine: HM,
  invoicesUpdateInvoiceLineTax: NM,
  invoicesUpdateInvoiceReference: uD,
  platformGetHealth: eM,
  platformGetHello: rM,
  platformGetManageInfo: dM,
  platformGetVersion: oE,
  platformMapIdentityApiConfirmEmail: lM,
  platformPostAccountLogout: hM,
  platformPostAccountManageDownloadPersonalData: CM,
  platformPostAccountManageLinkExternalLogin: mM,
  platformPostAccountPerformExternalLogin: vM,
  platformPostForgotPassword: uM,
  platformPostLogin: tM,
  platformPostManage2Fa: sM,
  platformPostManageInfo: gM,
  platformPostRefresh: cM,
  platformPostRegister: aM,
  platformPostResendConfirmationEmail: nM,
  platformPostResetPassword: iM
}, Symbol.toStringTag, { value: "Module" })), a = B($()), PD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ID = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e
}), AD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e
}), GD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseArticles/{articleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignmentComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e
}), ED = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e
}), MD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignmentComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $D = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e
}), UD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e
}), OD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignments/{assignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseAssignmentTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _D = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e
}), zD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e
}), QD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseAssignmentTypes/{assignmentTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ND = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KD = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZD = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e
}), XD = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e
}), pD = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oD = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCategories/{categoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates",
  ...e
}), rB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Count",
  ...e
}), tB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e
}), cB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e
}), lB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCertificates/{courseCertificateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template",
  ...e
}), iB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCertificates/Template",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e
}), dB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e
}), gB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCertificates/Template/{courseCertificateTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCertificates/Template/Count",
  ...e
}), mB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e
}), TB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e
}), PB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCohorts/{cohortId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseCollections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e
}), LB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e
}), RB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseCollections/{collectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e
}), MB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e
}), DB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseContentGroups/{groupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $B = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ContentGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ContentGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e
}), HB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e
}), qB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _B = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseEnrollments/Student/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseFiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NB = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e
}), KB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e
}), YB = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZB = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseFiles/{fileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pB = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseForums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oB = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e
}), r$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e
}), a$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseForums/{forumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseGradingRubrics",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e
}), i$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e
}), s$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseGradingRubrics/{rubricId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseHandouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e
}), C$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e
}), S$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseHandouts/{handoutId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseLibraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e
}), j$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e
}), A$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseLibraries/{libraryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CoursePages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e
}), w$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e
}), E$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CoursePages/{pageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e
}), F$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e
}), U$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseProblemSets/{problemSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H$ = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V$ = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e
}), _$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e
}), z$ = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q$ = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/Courses/{courseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J$ = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Courses/Public",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N$ = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Courses/Public/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/Public/{courseId}",
  ...e
}), Y$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Wikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Wikis/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o$ = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Updates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ex = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Updates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Sections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ax = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Sections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Assignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Assignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ux = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Categories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ix = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Categories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Cohorts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Cohorts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Files",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Files/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Forums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Forums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Libraries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Libraries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Pages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Pages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Px = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ProblemSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/ProblemSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ix = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Handouts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Handouts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ax = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/UnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/UnitComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Students",
  ...e
}), Rx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Students/Count",
  ...e
}), bx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Instructors",
  ...e
}), kx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Instructors/Count",
  ...e
}), wx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Courses/{courseId}/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ex = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mx = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseSections",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bx = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e
}), $x = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e
}), xx = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fx = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseSections/{sectionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ux = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ox = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseTeamMemberships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hx = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e
}), qx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e
}), Vx = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _x = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseTeamMemberships/{membershipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qx = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUnitComponents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nx = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e
}), Kx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e
}), Yx = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zx = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUnitComponents/{componentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xx = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), px = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUnits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ox = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e
}), rF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e
}), aF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUnits/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseUpdates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e
}), iF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e
}), sF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseUpdates/{updateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/CourseWikis",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e
}), CF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e
}), SF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/CourseWikis/{wikiId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/version",
  ...e
}), PF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/health",
  ...e
}), fF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/hello",
  ...e
}), IF = (e) => (e.client ?? a).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jF = (e) => (e.client ?? a).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AF = (e) => (e.client ?? a).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GF = (e) => (e.client ?? a).get({
  url: "/confirmEmail",
  ...e
}), LF = (e) => (e.client ?? a).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RF = (e) => (e.client ?? a).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bF = (e) => (e.client ?? a).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kF = (e) => (e.client ?? a).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/manage/info",
  ...e
}), EF = (e) => (e.client ?? a).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), DF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), BF = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), $F = (e) => ((e == null ? void 0 : e.client) ?? a).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), xF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles",
  ...e
}), FF = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/InstructorProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles/Count",
  ...e
}), OF = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e
}), WF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e
}), HF = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qF = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/InstructorProfiles/{instructorProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/StudentProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _F = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/StudentProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Enrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Courses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Courses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZF = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Courses/{courseId}/Enrollment",
  ...e
}), XF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorCourses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/InstructorCourses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oF = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates/{courseCertificateId}",
  ...e
}), rU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/Assignments/{courseAssignmentId}",
  ...e
}), aU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/Me/ProblemSets/{courseProblemSetId}",
  ...e
}), tU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/Certificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/AverageScore",
  ...e
}), lU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/HoursCompleted",
  ...e
}), nU = (e) => ((e == null ? void 0 : e.client) ?? a).get({
  url: "/api/v2/LearningService/Me/PendingTasks",
  ...e
}), uU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles",
  ...e
}), iU = (e) => (e.client ?? a).post({
  url: "/api/v2/LearningService/StudentProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/Count",
  ...e
}), dU = (e) => (e.client ?? a).delete({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e
}), gU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e
}), vU = (e) => (e.client ?? a).patch({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hU = (e) => (e.client ?? a).put({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}/Average",
  ...e
}), CU = (e) => (e.client ?? a).get({
  url: "/api/v2/LearningService/StudentProfiles/{studentProfileId}/HoursCompleted",
  ...e
}), zhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  courseArticlesCreateCourseArticle: fD,
  courseArticlesDeleteCourseArticle: jD,
  courseArticlesGetCourseArticleById: AD,
  courseArticlesGetCourseArticles: PD,
  courseArticlesGetCourseArticlesCount: ID,
  courseArticlesPatchCourseArticle: GD,
  courseArticlesUpdateCourseArticle: LD,
  courseAssignmentComponentsCreateCourseAssignmentComponent: bD,
  courseAssignmentComponentsDeleteCourseAssignmentComponent: wD,
  courseAssignmentComponentsGetCourseAssignmentComponentById: ED,
  courseAssignmentComponentsGetCourseAssignmentComponents: RD,
  courseAssignmentComponentsGetCourseAssignmentComponentsCount: kD,
  courseAssignmentComponentsPatchCourseAssignmentComponent: MD,
  courseAssignmentComponentsUpdateCourseAssignmentComponent: DD,
  courseAssignmentTypesCreateCourseAssignmentType: qD,
  courseAssignmentTypesDeleteCourseAssignmentType: _D,
  courseAssignmentTypesGetCourseAssignmentTypeById: zD,
  courseAssignmentTypesGetCourseAssignmentTypes: HD,
  courseAssignmentTypesGetCourseAssignmentTypesCount: VD,
  courseAssignmentTypesPatchCourseAssignmentType: QD,
  courseAssignmentTypesUpdateCourseAssignmentType: JD,
  courseAssignmentsCreateCourseAssignment: $D,
  courseAssignmentsDeleteCourseAssignment: FD,
  courseAssignmentsGetCourseAssignmentById: UD,
  courseAssignmentsGetCourseAssignments: BD,
  courseAssignmentsGetCourseAssignmentsCount: xD,
  courseAssignmentsPatchCourseAssignment: OD,
  courseAssignmentsUpdateCourseAssignment: WD,
  courseCategoriesCreateCourseCategory: KD,
  courseCategoriesDeleteCourseCategory: ZD,
  courseCategoriesGetCourseCategories: ND,
  courseCategoriesGetCourseCategoriesCount: YD,
  courseCategoriesGetCourseCategoryById: XD,
  courseCategoriesPatchCourseCategory: pD,
  courseCategoriesUpdateCourseCategory: oD,
  courseCertificatesCreateCourseCertificate: rB,
  courseCertificatesCreateCourseCertificateTemplate: iB,
  courseCertificatesDeleteCourseCertificate: tB,
  courseCertificatesDeleteCourseCertificateTemplate: sB,
  courseCertificatesGetCourseCertificate: cB,
  courseCertificatesGetCourseCertificateTemplate: dB,
  courseCertificatesGetCourseCertificateTemplates: uB,
  courseCertificatesGetCourseCertificateTemplatesCount: hB,
  courseCertificatesGetCourseCertificates: eB,
  courseCertificatesGetCourseCertificatesCount: aB,
  courseCertificatesPatchCourseCertificate: lB,
  courseCertificatesPatchCourseCertificateTemplate: gB,
  courseCertificatesUpdateCourseCertificate: nB,
  courseCertificatesUpdateCourseCertificateTemplate: vB,
  courseCohortsCreateCourseCohort: CB,
  courseCohortsDeleteCourseCohort: yB,
  courseCohortsGetCourseCohortById: TB,
  courseCohortsGetCourseCohorts: mB,
  courseCohortsGetCourseCohortsCount: SB,
  courseCohortsPatchCourseCohort: PB,
  courseCohortsUpdateCourseCohort: fB,
  courseCollectionsCreateCourseCollection: jB,
  courseCollectionsDeleteCourseCollection: GB,
  courseCollectionsGetCourseCollectionById: LB,
  courseCollectionsGetCourseCollections: IB,
  courseCollectionsGetCourseCollectionsCount: AB,
  courseCollectionsUpdateCourseCollection: RB,
  courseContentGroupsCreateCourseContentGroup: kB,
  courseContentGroupsDeleteCourseContentGroup: EB,
  courseContentGroupsGetCourseContentGroupById: MB,
  courseContentGroupsGetCourseContentGroups: bB,
  courseContentGroupsGetCourseContentGroupsByCourse: $B,
  courseContentGroupsGetCourseContentGroupsByCourseCount: xB,
  courseContentGroupsGetCourseContentGroupsCount: wB,
  courseContentGroupsPatchCourseContentGroup: DB,
  courseContentGroupsUpdateCourseContentGroup: BB,
  courseEnrollmentsCreateCourseEnrollment: UB,
  courseEnrollmentsDeleteCourseEnrollment: WB,
  courseEnrollmentsGetCourseEnrollment: HB,
  courseEnrollmentsGetEnrollments: FB,
  courseEnrollmentsGetEnrollmentsCount: OB,
  courseEnrollmentsGetStudentCourseEnrollments: _B,
  courseEnrollmentsPatchCourseEnrollment: qB,
  courseEnrollmentsUpdateCourseEnrollment: VB,
  courseFilesCreateCourseFile: QB,
  courseFilesDeleteCourseFile: NB,
  courseFilesGetCourseFileById: KB,
  courseFilesGetCourseFiles: zB,
  courseFilesGetCourseFilesCount: JB,
  courseFilesPatchCourseFile: YB,
  courseFilesUpdateCourseFile: ZB,
  courseForumsCreateCourseForum: pB,
  courseForumsDeleteCourseForum: e$,
  courseForumsGetCourseForumById: r$,
  courseForumsGetCourseForums: XB,
  courseForumsGetCourseForumsCount: oB,
  courseForumsPatchCourseForum: a$,
  courseForumsUpdateCourseForum: t$,
  courseGradingRubricsCreateCourseGradingRubric: l$,
  courseGradingRubricsDeleteCourseGradingRubric: u$,
  courseGradingRubricsGetCourseGradingRubricById: i$,
  courseGradingRubricsGetCourseGradingRubrics: c$,
  courseGradingRubricsGetCourseGradingRubricsCount: n$,
  courseGradingRubricsPatchCourseGradingRubric: s$,
  courseGradingRubricsUpdateCourseGradingRubric: d$,
  courseHandoutsCreateCourseHandout: v$,
  courseHandoutsDeleteCourseHandout: m$,
  courseHandoutsGetCourseHandoutById: C$,
  courseHandoutsGetCourseHandouts: g$,
  courseHandoutsGetCourseHandoutsCount: h$,
  courseHandoutsPatchCourseHandout: S$,
  courseHandoutsUpdateCourseHandout: y$,
  courseLibrariesCreateCourseLibrary: P$,
  courseLibrariesDeleteCourseLibrary: I$,
  courseLibrariesGetCourseLibraries: T$,
  courseLibrariesGetCourseLibrariesCount: f$,
  courseLibrariesGetCourseLibraryById: j$,
  courseLibrariesPatchCourseLibrary: A$,
  courseLibrariesUpdateCourseLibrary: G$,
  coursePagesCreateCoursePage: R$,
  coursePagesDeleteCoursePage: k$,
  coursePagesGetCoursePageById: w$,
  coursePagesGetCoursePages: L$,
  coursePagesGetCoursePagesCount: b$,
  coursePagesPatchCoursePage: E$,
  coursePagesUpdateCoursePage: M$,
  courseProblemSetsCreateCourseProblemSet: B$,
  courseProblemSetsDeleteCourseProblemSet: x$,
  courseProblemSetsGetCourseProblemSetById: F$,
  courseProblemSetsGetCourseProblemSets: D$,
  courseProblemSetsGetCourseProblemSetsCount: $$,
  courseProblemSetsPatchCourseProblemSet: U$,
  courseProblemSetsUpdateCourseProblemSet: O$,
  courseSectionsCreateCourseSection: Mx,
  courseSectionsDeleteCourseSection: Bx,
  courseSectionsGetCourseSectionById: $x,
  courseSectionsGetCourseSections: Ex,
  courseSectionsGetCourseSectionsCount: Dx,
  courseSectionsPatchCourseSection: xx,
  courseSectionsUpdateCourseSection: Fx,
  courseTeamMembershipsCreateCourseTeamMembership: Ox,
  courseTeamMembershipsDeleteCourseTeamMembership: Hx,
  courseTeamMembershipsGetCourseTeamMembershipById: qx,
  courseTeamMembershipsGetCourseTeamMemberships: Ux,
  courseTeamMembershipsGetCourseTeamMembershipsCount: Wx,
  courseTeamMembershipsPatchCourseTeamMembership: Vx,
  courseTeamMembershipsUpdateCourseTeamMembership: _x,
  courseUnitComponentsCreateCourseUnitComponent: Qx,
  courseUnitComponentsDeleteCourseUnitComponent: Nx,
  courseUnitComponentsGetCourseUnitComponentById: Kx,
  courseUnitComponentsGetCourseUnitComponents: zx,
  courseUnitComponentsGetCourseUnitComponentsCount: Jx,
  courseUnitComponentsPatchCourseUnitComponent: Yx,
  courseUnitComponentsUpdateCourseUnitComponent: Zx,
  courseUnitsCreateCourseUnit: px,
  courseUnitsDeleteCourseUnit: eF,
  courseUnitsGetCourseUnitById: rF,
  courseUnitsGetCourseUnits: Xx,
  courseUnitsGetCourseUnitsCount: ox,
  courseUnitsPatchCourseUnit: aF,
  courseUnitsUpdateCourseUnit: tF,
  courseUpdatesCreateCourseUpdate: lF,
  courseUpdatesDeleteCourseUpdate: uF,
  courseUpdatesGetCourseUpdateById: iF,
  courseUpdatesGetCourseUpdates: cF,
  courseUpdatesGetCourseUpdatesCount: nF,
  courseUpdatesPatchCourseUpdate: sF,
  courseUpdatesUpdateCourseUpdate: dF,
  courseWikisCreateCourseWiki: vF,
  courseWikisDeleteCourseWiki: mF,
  courseWikisGetCourseWikiById: CF,
  courseWikisGetCourseWikis: gF,
  courseWikisGetCourseWikisCount: hF,
  courseWikisPatchCourseWiki: SF,
  courseWikisUpdateCourseWiki: yF,
  coursesCreateCourse: H$,
  coursesDeleteCourse: V$,
  coursesGetCourseArticlesByCourseWiki: X$,
  coursesGetCourseArticlesByCourseWikiCount: p$,
  coursesGetCourseAssignmentsByCourse: lx,
  coursesGetCourseAssignmentsByCourseCount: nx,
  coursesGetCourseById: _$,
  coursesGetCourseCategoriesByCourse: ux,
  coursesGetCourseCategoriesByCourseCount: ix,
  coursesGetCourseCohortsByCourse: sx,
  coursesGetCourseCohortsByCourseCount: dx,
  coursesGetCourseEnrollmentsByCourse: wx,
  coursesGetCourseFilesByCourse: gx,
  coursesGetCourseFilesByCourseCount: vx,
  coursesGetCourseForumsByCourse: hx,
  coursesGetCourseForumsByCourseCount: mx,
  coursesGetCourseHandoutsByCourse: Ix,
  coursesGetCourseHandoutsByCourseCount: jx,
  coursesGetCourseLibrariesByCourse: Cx,
  coursesGetCourseLibrariesByCourseCount: Sx,
  coursesGetCoursePagesByCourse: yx,
  coursesGetCoursePagesByCourseCount: Tx,
  coursesGetCourseProblemSetsByCourse: Px,
  coursesGetCourseProblemSetsByCourseCount: fx,
  coursesGetCourseSectionsByCourse: rx,
  coursesGetCourseSectionsByCourseCount: ax,
  coursesGetCourseUnitComponentsByCourse: Ax,
  coursesGetCourseUnitComponentsByCourseCount: Gx,
  coursesGetCourseUnitsBySection: tx,
  coursesGetCourseUnitsBySectionCount: cx,
  coursesGetCourseUpdatesByCourse: o$,
  coursesGetCourseUpdatesByCourseCount: ex,
  coursesGetCourseWikisByCourse: Y$,
  coursesGetCourseWikisByCourseCount: Z$,
  coursesGetCourses: W$,
  coursesGetCoursesCount: q$,
  coursesGetInstructorProfilesByCourse: bx,
  coursesGetInstructorProfilesByCourseCount: kx,
  coursesGetPublicCourseById: K$,
  coursesGetPublicCourses: J$,
  coursesGetPublicCoursesCount: N$,
  coursesGetStudentProfilesByCourse: Lx,
  coursesGetStudentProfilesByCourseCount: Rx,
  coursesPatchCourse: z$,
  coursesUpdateCourse: Q$,
  instructorProfilesDeleteInstructorProfilesByInstructorProfileId: OF,
  instructorProfilesGetInstructorProfiles: xF,
  instructorProfilesGetInstructorProfilesByInstructorProfileId: WF,
  instructorProfilesGetInstructorProfilesCount: UF,
  instructorProfilesPatchInstructorProfilesByInstructorProfileId: HF,
  instructorProfilesPostInstructorProfiles: FF,
  instructorProfilesPutInstructorProfilesByInstructorProfileId: qF,
  meGetMyAverageScore: cU,
  meGetMyCertificate: eU,
  meGetMyCertificates: oF,
  meGetMyCertificatesCount: tU,
  meGetMyCourseAssignment: rU,
  meGetMyCourseEnrollmentStatus: ZF,
  meGetMyCourseProblemSet: aU,
  meGetMyEnrollments: JF,
  meGetMyEnrollmentsCount: NF,
  meGetMyHoursCompleted: lU,
  meGetMyInstructorCourses: XF,
  meGetMyInstructorCoursesCount: pF,
  meGetMyInstructorProfiles: zF,
  meGetMyInstructorProfilesCount: QF,
  meGetMyPendingTaskCount: nU,
  meGetMyStudentCourses: KF,
  meGetMyStudentCoursesCount: YF,
  meGetMyStudentProfiles: VF,
  meGetMyStudentProfilesCount: _F,
  platformGetHealth: PF,
  platformGetHello: fF,
  platformGetManageInfo: wF,
  platformGetVersion: TF,
  platformMapIdentityApiConfirmEmail: GF,
  platformPostAccountLogout: DF,
  platformPostAccountManageDownloadPersonalData: $F,
  platformPostAccountManageLinkExternalLogin: BF,
  platformPostAccountPerformExternalLogin: MF,
  platformPostForgotPassword: RF,
  platformPostLogin: jF,
  platformPostManage2Fa: kF,
  platformPostManageInfo: EF,
  platformPostRefresh: AF,
  platformPostRegister: IF,
  platformPostResendConfirmationEmail: LF,
  platformPostResetPassword: bF,
  studentProfilesDeleteStudentProfilesByStudentProfileId: dU,
  studentProfilesGetStudentProfiles: uU,
  studentProfilesGetStudentProfilesByStudentProfileId: gU,
  studentProfilesGetStudentProfilesByStudentProfileIdAverage: mU,
  studentProfilesGetStudentProfilesByStudentProfileIdHoursCompleted: CU,
  studentProfilesGetStudentProfilesCount: sU,
  studentProfilesPatchStudentProfilesByStudentProfileId: vU,
  studentProfilesPostStudentProfiles: iU,
  studentProfilesPutStudentProfilesByStudentProfileId: hU
}, Symbol.toStringTag, { value: "Module" })), R = B($()), SU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/version",
  ...e
}), yU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/health",
  ...e
}), TU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/hello",
  ...e
}), PU = (e) => (e.client ?? R).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fU = (e) => (e.client ?? R).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IU = (e) => (e.client ?? R).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jU = (e) => (e.client ?? R).get({
  url: "/confirmEmail",
  ...e
}), AU = (e) => (e.client ?? R).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GU = (e) => (e.client ?? R).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LU = (e) => (e.client ?? R).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RU = (e) => (e.client ?? R).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bU = (e) => ((e == null ? void 0 : e.client) ?? R).get({
  url: "/manage/info",
  ...e
}), kU = (e) => (e.client ?? R).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), EU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), MU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), DU = (e) => ((e == null ? void 0 : e.client) ?? R).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), BU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $U = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseAttributes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FU = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e
}), UU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e
}), OU = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WU = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseAttributes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qU = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseFeatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _U = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e
}), zU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e
}), QU = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JU = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseFeatures/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KU = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/Licenses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZU = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e
}), XU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e
}), pU = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/Licenses/{licenseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oU = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicenseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e
}), tO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e
}), cO = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicenseTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/LicensingCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sO = (e) => (e.client ?? R).delete({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e
}), dO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e
}), gO = (e) => (e.client ?? R).patch({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vO = (e) => (e.client ?? R).put({
  url: "/api/v2/LicensingService/LicensingCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Usage",
  ...e
}), mO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Usage/Meters",
  ...e
}), CO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage",
  ...e
}), SO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}",
  ...e
}), yO = (e) => (e.client ?? R).get({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}/LimitOverrides",
  ...e
}), TO = (e) => (e.client ?? R).post({
  url: "/api/v2/LicensingService/Admin/Usage/{targetTenantId}/LimitOverrides",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), Qhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  licenseAttributesCreateLicenseAttribute: $U,
  licenseAttributesDeleteLicenseAttribute: FU,
  licenseAttributesGetLicenseAttributeById: UU,
  licenseAttributesGetLicenseAttributes: BU,
  licenseAttributesGetLicenseAttributesCount: xU,
  licenseAttributesPatchLicenseAttribute: OU,
  licenseAttributesUpdateLicenseAttribute: WU,
  licenseFeaturesCreateLicenseFeature: qU,
  licenseFeaturesDeleteLicenseFeature: _U,
  licenseFeaturesGetLicenseFeatureById: zU,
  licenseFeaturesGetLicenseFeatures: HU,
  licenseFeaturesGetLicenseFeaturesCount: VU,
  licenseFeaturesPatchLicenseFeature: QU,
  licenseFeaturesUpdateLicenseFeature: JU,
  licenseTypesCreateLicenseType: eO,
  licenseTypesDeleteLicenseType: aO,
  licenseTypesGetLicenseTypeById: tO,
  licenseTypesGetLicenseTypes: oU,
  licenseTypesGetLicenseTypesCount: rO,
  licenseTypesPatchLicenseType: cO,
  licenseTypesUpdateLicenseType: lO,
  licensesCreateLicense: KU,
  licensesDeleteLicense: ZU,
  licensesGetLicenseById: XU,
  licensesGetLicenses: NU,
  licensesGetLicensesCount: YU,
  licensesUpdateLicense: pU,
  licensingCertificatesCreateLicensingCertificate: uO,
  licensingCertificatesDeleteLicensingCertificate: sO,
  licensingCertificatesGetLicensingCertificateById: dO,
  licensingCertificatesGetLicensingCertificates: nO,
  licensingCertificatesGetLicensingCertificatesCount: iO,
  licensingCertificatesPatchLicensingCertificate: gO,
  licensingCertificatesUpdateLicensingCertificate: vO,
  platformGetHealth: yU,
  platformGetHello: TU,
  platformGetManageInfo: bU,
  platformGetVersion: SU,
  platformMapIdentityApiConfirmEmail: jU,
  platformPostAccountLogout: EU,
  platformPostAccountManageDownloadPersonalData: DU,
  platformPostAccountManageLinkExternalLogin: MU,
  platformPostAccountPerformExternalLogin: wU,
  platformPostForgotPassword: GU,
  platformPostLogin: fU,
  platformPostManage2Fa: RU,
  platformPostManageInfo: kU,
  platformPostRefresh: IU,
  platformPostRegister: PU,
  platformPostResendConfirmationEmail: AU,
  platformPostResetPassword: LU,
  usageCreateTenantUsageLimitOverride: TO,
  usageGetTenantUsage: hO,
  usageGetTenantUsageAsAdmin: SO,
  usageGetTenantUsageLimitOverrides: yO,
  usageGetTenantsUsage: CO,
  usageGetUsageMeters: mO
}, Symbol.toStringTag, { value: "Module" })), z = B($()), PO = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/version",
  ...e
}), fO = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/health",
  ...e
}), IO = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/hello",
  ...e
}), jO = (e) => (e.client ?? z).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AO = (e) => (e.client ?? z).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GO = (e) => (e.client ?? z).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LO = (e) => (e.client ?? z).get({
  url: "/confirmEmail",
  ...e
}), RO = (e) => (e.client ?? z).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bO = (e) => (e.client ?? z).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kO = (e) => (e.client ?? z).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wO = (e) => (e.client ?? z).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EO = (e) => ((e == null ? void 0 : e.client) ?? z).get({
  url: "/manage/info",
  ...e
}), MO = (e) => (e.client ?? z).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DO = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), BO = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), $O = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), xO = (e) => ((e == null ? void 0 : e.client) ?? z).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), FO = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UO = (e) => (e.client ?? z).post({
  url: "/api/v2/LocationsService/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OO = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WO = (e) => (e.client ?? z).delete({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e
}), HO = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e
}), qO = (e) => (e.client ?? z).patch({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VO = (e) => (e.client ?? z).put({
  url: "/api/v2/LocationsService/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _O = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zO = (e) => (e.client ?? z).post({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QO = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JO = (e) => (e.client ?? z).delete({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e
}), NO = (e) => (e.client ?? z).get({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e
}), KO = (e) => (e.client ?? z).patch({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YO = (e) => (e.client ?? z).put({
  url: "/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  locationsCreateLocation: UO,
  locationsCreateWalletLocation: zO,
  locationsDeleteLocation: WO,
  locationsDeleteWalletLocation: JO,
  locationsGetLocation: HO,
  locationsGetLocations: FO,
  locationsGetLocationsCount: OO,
  locationsGetWalletLocation: NO,
  locationsGetWalletLocations: _O,
  locationsGetWalletLocationsCount: QO,
  locationsPatchLocation: qO,
  locationsPatchWalletLocation: KO,
  locationsUpdateLocation: VO,
  locationsUpdateWalletLocation: YO,
  platformGetHealth: fO,
  platformGetHello: IO,
  platformGetManageInfo: EO,
  platformGetVersion: PO,
  platformMapIdentityApiConfirmEmail: LO,
  platformPostAccountLogout: BO,
  platformPostAccountManageDownloadPersonalData: xO,
  platformPostAccountManageLinkExternalLogin: $O,
  platformPostAccountPerformExternalLogin: DO,
  platformPostForgotPassword: bO,
  platformPostLogin: AO,
  platformPostManage2Fa: wO,
  platformPostManageInfo: MO,
  platformPostRefresh: GO,
  platformPostRegister: jO,
  platformPostResendConfirmationEmail: RO,
  platformPostResetPassword: kO
}, Symbol.toStringTag, { value: "Module" })), t = B($()), ZO = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XO = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pO = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oO = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e
}), eW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e
}), rW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Issue",
  ...e
}), cW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkInTransit",
  ...e
}), lW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkArrived",
  ...e
}), nW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/MarkDelivered",
  ...e
}), uW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Cancel",
  ...e
}), iW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e
}), vW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/AirwayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/DeliveryNotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e
}), TW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e
}), PW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/DeliveryNotes/{deliveryNoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/version",
  ...e
}), IW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/health",
  ...e
}), jW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/hello",
  ...e
}), AW = (e) => (e.client ?? t).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GW = (e) => (e.client ?? t).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LW = (e) => (e.client ?? t).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RW = (e) => (e.client ?? t).get({
  url: "/confirmEmail",
  ...e
}), bW = (e) => (e.client ?? t).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kW = (e) => (e.client ?? t).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wW = (e) => (e.client ?? t).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EW = (e) => (e.client ?? t).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MW = (e) => ((e == null ? void 0 : e.client) ?? t).get({
  url: "/manage/info",
  ...e
}), DW = (e) => (e.client ?? t).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), $W = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), xW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), FW = (e) => ((e == null ? void 0 : e.client) ?? t).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), UW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPackingSlips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e
}), qW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e
}), VW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _W = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NW = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e
}), KW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e
}), YW = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZW = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPackingSlips/{packingSlipId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pW = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPickLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oW = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e
}), rH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e
}), aH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e
}), iH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e
}), sH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemPickLists/{pickListId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRestocks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e
}), CH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e
}), SH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e
}), jH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e
}), AH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRestocks/{restockId}/Entries/{entryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ItemRetainSamples",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e
}), wH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e
}), EH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ItemRetainSamples/{retainSampleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Ports",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $H = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e
}), FH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e
}), UH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Ports/{portId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e
}), _H = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e
}), zH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QH = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Sign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Dispute",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Reject",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZH = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XH = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pH = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e
}), oH = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes",
  ...e
}), aq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/Count",
  ...e
}), tq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/{noteId}",
  ...e
}), cq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/ProofsOfDelivery/{podId}/DeliveryNotes/{noteId}",
  ...e
}), lq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e
}), sq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e
}), dq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Issue",
  ...e
}), hq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/MarkInTransit",
  ...e
}), mq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/MarkDelivered",
  ...e
}), Cq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Cancel",
  ...e
}), Sq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e
}), fq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RailWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e
}), Rq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e
}), bq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Issue",
  ...e
}), Eq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/MarkInTransit",
  ...e
}), Mq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/MarkDelivered",
  ...e
}), Dq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Dispute",
  ...e
}), Bq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Cancel",
  ...e
}), $q = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uq = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e
}), Oq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/RoadWaybills/{waybillId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _q = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e
}), zq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e
}), Qq = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jq = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Issue",
  ...e
}), Kq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/MarkInTransit",
  ...e
}), Yq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/MarkArrived",
  ...e
}), Zq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Release",
  ...e
}), Xq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Cancel",
  ...e
}), pq = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oq = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e
}), aV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SeawayBills/{billId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/SupplierProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e
}), iV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e
}), sV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/SupplierProfiles/{supplierProfileId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e
}), CV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e
}), SV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}/Activate",
  ...e
}), PV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/TruckDrivers/{driverId}/Deactivate",
  ...e
}), fV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e
}), GV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e
}), LV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Trucks/{truckId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e
}), MV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Dispatch",
  ...e
}), $V = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Depart",
  ...e
}), xV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Arrive",
  ...e
}), FV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Deliver",
  ...e
}), UV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Trucks/{truckId}/Trips/{tripId}/Cancel",
  ...e
}), OV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Vessels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e
}), VV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e
}), _V = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Vessels/{vesselId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KV = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e
}), YV = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e
}), ZV = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XV = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Start",
  ...e
}), oV = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Complete",
  ...e
}), e_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/Cancel",
  ...e
}), r_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e
}), l_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Voyages/{voyageId}/PortCalls/{portCallId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i_ = (e) => (e.client ?? t).post({
  url: "/api/v2/LogisticsService/Warehouses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d_ = (e) => (e.client ?? t).delete({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e
}), g_ = (e) => (e.client ?? t).get({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e
}), v_ = (e) => (e.client ?? t).patch({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h_ = (e) => (e.client ?? t).put({
  url: "/api/v2/LogisticsService/Warehouses/{warehouseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  airwayBillsAddAirwayBillLine: sW,
  airwayBillsCancelAirwayBill: uW,
  airwayBillsCreateAirwayBill: XO,
  airwayBillsDeleteAirwayBill: oO,
  airwayBillsGetAirwayBillById: eW,
  airwayBillsGetAirwayBillLines: iW,
  airwayBillsGetAirwayBillLinesCount: dW,
  airwayBillsGetAirwayBills: ZO,
  airwayBillsGetAirwayBillsCount: pO,
  airwayBillsIssueAirwayBill: tW,
  airwayBillsMarkAirwayBillArrived: lW,
  airwayBillsMarkAirwayBillDelivered: nW,
  airwayBillsMarkAirwayBillInTransit: cW,
  airwayBillsPatchAirwayBill: rW,
  airwayBillsPatchAirwayBillLine: vW,
  airwayBillsRemoveAirwayBillLine: gW,
  airwayBillsUpdateAirwayBill: aW,
  airwayBillsUpdateAirwayBillLine: hW,
  deliveryNotesCreateDeliveryNote: CW,
  deliveryNotesDeleteDeliveryNote: yW,
  deliveryNotesGetDeliveryNoteById: TW,
  deliveryNotesGetDeliveryNotes: mW,
  deliveryNotesGetDeliveryNotesCount: SW,
  deliveryNotesUpdateDeliveryNote: PW,
  itemPackingSlipsCreateItemPackingSlip: OW,
  itemPackingSlipsCreateItemPackingSlipEntry: QW,
  itemPackingSlipsDeleteItemPackingSlip: HW,
  itemPackingSlipsDeleteItemPackingSlipEntry: NW,
  itemPackingSlipsGetItemPackingSlipById: qW,
  itemPackingSlipsGetItemPackingSlipEntries: zW,
  itemPackingSlipsGetItemPackingSlipEntriesCount: JW,
  itemPackingSlipsGetItemPackingSlipEntryById: KW,
  itemPackingSlipsGetItemPackingSlips: UW,
  itemPackingSlipsGetItemPackingSlipsCount: WW,
  itemPackingSlipsPatchItemPackingSlip: VW,
  itemPackingSlipsPatchItemPackingSlipEntry: YW,
  itemPackingSlipsUpdateItemPackingSlip: _W,
  itemPackingSlipsUpdateItemPackingSlipEntry: ZW,
  itemPickListsCreateItemPickList: pW,
  itemPickListsCreateItemPickListEntry: lH,
  itemPickListsDeleteItemPickList: eH,
  itemPickListsDeleteItemPickListEntry: uH,
  itemPickListsGetItemPickListById: rH,
  itemPickListsGetItemPickListEntries: cH,
  itemPickListsGetItemPickListEntriesCount: nH,
  itemPickListsGetItemPickListEntryById: iH,
  itemPickListsGetItemPickLists: XW,
  itemPickListsGetItemPickListsCount: oW,
  itemPickListsPatchItemPickList: aH,
  itemPickListsPatchItemPickListEntry: sH,
  itemPickListsUpdateItemPickList: tH,
  itemPickListsUpdateItemPickListEntry: dH,
  itemRestocksCreateItemRestock: vH,
  itemRestocksCreateItemRestockEntry: PH,
  itemRestocksDeleteItemRestock: mH,
  itemRestocksDeleteItemRestockEntry: IH,
  itemRestocksGetItemRestockById: CH,
  itemRestocksGetItemRestockEntries: TH,
  itemRestocksGetItemRestockEntriesCount: fH,
  itemRestocksGetItemRestockEntryById: jH,
  itemRestocksGetItemRestocks: gH,
  itemRestocksGetItemRestocksCount: hH,
  itemRestocksPatchItemRestock: SH,
  itemRestocksPatchItemRestockEntry: AH,
  itemRestocksUpdateItemRestock: yH,
  itemRestocksUpdateItemRestockEntry: GH,
  itemRetainSamplesCreateItemRetainSample: RH,
  itemRetainSamplesDeleteItemRetainSample: kH,
  itemRetainSamplesGetItemRetainSampleById: wH,
  itemRetainSamplesGetItemRetainSamples: LH,
  itemRetainSamplesGetItemRetainSamplesCount: bH,
  itemRetainSamplesPatchItemRetainSample: EH,
  itemRetainSamplesUpdateItemRetainSample: MH,
  platformGetHealth: IW,
  platformGetHello: jW,
  platformGetManageInfo: MW,
  platformGetVersion: fW,
  platformMapIdentityApiConfirmEmail: RW,
  platformPostAccountLogout: $W,
  platformPostAccountManageDownloadPersonalData: FW,
  platformPostAccountManageLinkExternalLogin: xW,
  platformPostAccountPerformExternalLogin: BW,
  platformPostForgotPassword: kW,
  platformPostLogin: GW,
  platformPostManage2Fa: EW,
  platformPostManageInfo: DW,
  platformPostRefresh: LW,
  platformPostRegister: AW,
  platformPostResendConfirmationEmail: bW,
  platformPostResetPassword: wW,
  portsCreatePort: BH,
  portsDeletePort: xH,
  portsGetPortById: FH,
  portsGetPorts: DH,
  portsGetPortsCount: $H,
  portsPatchPort: UH,
  portsUpdatePort: OH,
  proofsOfDeliveryAddProofOfDeliveryLine: ZH,
  proofsOfDeliveryAttachDeliveryNote: cq,
  proofsOfDeliveryCreateProofOfDelivery: HH,
  proofsOfDeliveryDeleteProofOfDelivery: VH,
  proofsOfDeliveryDetachDeliveryNote: tq,
  proofsOfDeliveryDisputeProofOfDelivery: NH,
  proofsOfDeliveryGetProofOfDeliveryById: _H,
  proofsOfDeliveryGetProofOfDeliveryDeliveryNotes: rq,
  proofsOfDeliveryGetProofOfDeliveryDeliveryNotesCount: aq,
  proofsOfDeliveryGetProofOfDeliveryLines: YH,
  proofsOfDeliveryGetProofOfDeliveryLinesCount: XH,
  proofsOfDeliveryGetProofsOfDelivery: WH,
  proofsOfDeliveryGetProofsOfDeliveryCount: qH,
  proofsOfDeliveryPatchProofOfDelivery: zH,
  proofsOfDeliveryPatchProofOfDeliveryLine: oH,
  proofsOfDeliveryRejectProofOfDelivery: KH,
  proofsOfDeliveryRemoveProofOfDeliveryLine: pH,
  proofsOfDeliverySignProofOfDelivery: JH,
  proofsOfDeliveryUpdateProofOfDelivery: QH,
  proofsOfDeliveryUpdateProofOfDeliveryLine: eq,
  railWaybillsAddRailWaybillLine: yq,
  railWaybillsCancelRailWaybill: Cq,
  railWaybillsCreateRailWaybill: nq,
  railWaybillsDeleteRailWaybill: iq,
  railWaybillsGetRailWaybillById: sq,
  railWaybillsGetRailWaybillLines: Sq,
  railWaybillsGetRailWaybillLinesCount: Tq,
  railWaybillsGetRailWaybills: lq,
  railWaybillsGetRailWaybillsCount: uq,
  railWaybillsIssueRailWaybill: vq,
  railWaybillsMarkRailWaybillDelivered: mq,
  railWaybillsMarkRailWaybillInTransit: hq,
  railWaybillsPatchRailWaybill: dq,
  railWaybillsPatchRailWaybillLine: fq,
  railWaybillsRemoveRailWaybillLine: Pq,
  railWaybillsUpdateRailWaybill: gq,
  railWaybillsUpdateRailWaybillLine: Iq,
  roadWaybillsAddRoadWaybillLine: xq,
  roadWaybillsCancelRoadWaybill: Bq,
  roadWaybillsCreateRoadWaybill: Aq,
  roadWaybillsDeleteRoadWaybill: Lq,
  roadWaybillsDisputeRoadWaybill: Dq,
  roadWaybillsGetRoadWaybillById: Rq,
  roadWaybillsGetRoadWaybillLines: $q,
  roadWaybillsGetRoadWaybillLinesCount: Fq,
  roadWaybillsGetRoadWaybills: jq,
  roadWaybillsGetRoadWaybillsCount: Gq,
  roadWaybillsIssueRoadWaybill: wq,
  roadWaybillsMarkRoadWaybillDelivered: Mq,
  roadWaybillsMarkRoadWaybillInTransit: Eq,
  roadWaybillsPatchRoadWaybill: bq,
  roadWaybillsPatchRoadWaybillLine: Oq,
  roadWaybillsRemoveRoadWaybillLine: Uq,
  roadWaybillsUpdateRoadWaybill: kq,
  roadWaybillsUpdateRoadWaybillLine: Wq,
  seawayBillsAddSeawayBillLine: oq,
  seawayBillsCancelSeawayBill: Xq,
  seawayBillsCreateSeawayBill: qq,
  seawayBillsDeleteSeawayBill: _q,
  seawayBillsGetSeawayBillById: zq,
  seawayBillsGetSeawayBillLines: pq,
  seawayBillsGetSeawayBillLinesCount: eV,
  seawayBillsGetSeawayBills: Hq,
  seawayBillsGetSeawayBillsCount: Vq,
  seawayBillsIssueSeawayBill: Nq,
  seawayBillsMarkSeawayBillArrived: Yq,
  seawayBillsMarkSeawayBillInTransit: Kq,
  seawayBillsPatchSeawayBill: Qq,
  seawayBillsPatchSeawayBillLine: aV,
  seawayBillsReleaseSeawayBill: Zq,
  seawayBillsRemoveSeawayBillLine: rV,
  seawayBillsUpdateSeawayBill: Jq,
  seawayBillsUpdateSeawayBillLine: tV,
  supplierProfilesCreateSupplierProfile: lV,
  supplierProfilesDeleteSupplierProfile: uV,
  supplierProfilesGetSupplierProfileById: iV,
  supplierProfilesGetSupplierProfiles: cV,
  supplierProfilesGetSupplierProfilesCount: nV,
  supplierProfilesPatchSupplierProfile: sV,
  supplierProfilesUpdateSupplierProfile: dV,
  truckDriversActivateTruckDriver: TV,
  truckDriversCreateTruckDriver: vV,
  truckDriversDeactivateTruckDriver: PV,
  truckDriversDeleteTruckDriver: mV,
  truckDriversGetTruckDriverById: CV,
  truckDriversGetTruckDrivers: gV,
  truckDriversGetTruckDriversCount: hV,
  truckDriversPatchTruckDriver: SV,
  truckDriversUpdateTruckDriver: yV,
  trucksArriveTrip: xV,
  trucksCancelTrip: UV,
  trucksCreateTruck: IV,
  trucksCreateTruckTrip: kV,
  trucksDeleteTruck: AV,
  trucksDeleteTruckTrip: EV,
  trucksDeliverTrip: FV,
  trucksDepartTrip: $V,
  trucksDispatchTrip: BV,
  trucksGetTruckById: GV,
  trucksGetTruckTrips: bV,
  trucksGetTruckTripsCount: wV,
  trucksGetTrucks: fV,
  trucksGetTrucksCount: jV,
  trucksPatchTruck: LV,
  trucksPatchTruckTrip: MV,
  trucksUpdateTruck: RV,
  trucksUpdateTruckTrip: DV,
  vesselsCreateVessel: WV,
  vesselsDeleteVessel: qV,
  vesselsGetVesselById: VV,
  vesselsGetVessels: OV,
  vesselsGetVesselsCount: HV,
  vesselsPatchVessel: _V,
  vesselsUpdateVessel: zV,
  voyagesCancelVoyage: e_,
  voyagesCompleteVoyage: oV,
  voyagesCreateVoyage: JV,
  voyagesCreateVoyagePortCall: a_,
  voyagesDeleteVoyage: KV,
  voyagesDeleteVoyagePortCall: c_,
  voyagesGetVoyageById: YV,
  voyagesGetVoyagePortCalls: r_,
  voyagesGetVoyagePortCallsCount: t_,
  voyagesGetVoyages: QV,
  voyagesGetVoyagesCount: NV,
  voyagesPatchVoyage: ZV,
  voyagesPatchVoyagePortCall: l_,
  voyagesStartVoyage: pV,
  voyagesUpdateVoyage: XV,
  voyagesUpdateVoyagePortCall: n_,
  warehousesCreateWarehouse: i_,
  warehousesDeleteWarehouse: d_,
  warehousesGetWarehouseById: g_,
  warehousesGetWarehouses: u_,
  warehousesGetWarehousesCount: s_,
  warehousesPatchWarehouse: v_,
  warehousesUpdateWarehouse: h_
}, Symbol.toStringTag, { value: "Module" })), U = B($()), m_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/version",
  ...e
}), C_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/health",
  ...e
}), S_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/hello",
  ...e
}), y_ = (e) => (e.client ?? U).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T_ = (e) => (e.client ?? U).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P_ = (e) => (e.client ?? U).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f_ = (e) => (e.client ?? U).get({
  url: "/confirmEmail",
  ...e
}), I_ = (e) => (e.client ?? U).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j_ = (e) => (e.client ?? U).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A_ = (e) => (e.client ?? U).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G_ = (e) => (e.client ?? U).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L_ = (e) => ((e == null ? void 0 : e.client) ?? U).get({
  url: "/manage/info",
  ...e
}), R_ = (e) => (e.client ?? U).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), k_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), w_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), E_ = (e) => ((e == null ? void 0 : e.client) ?? U).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), M_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/ProductionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $_ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e
}), x_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e
}), F_ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U_ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/ProductionPlans/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/WorkOrders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q_ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e
}), V_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e
}), __ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z_ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/WorkOrders/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/WorkOrderTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K_ = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e
}), Y_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e
}), Z_ = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X_ = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/WorkOrderTypes/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p_ = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o_ = (e) => (e.client ?? U).post({
  url: "/api/v2/ManufacturingService/Workstations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ez = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rz = (e) => (e.client ?? U).delete({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e
}), az = (e) => (e.client ?? U).get({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e
}), tz = (e) => (e.client ?? U).patch({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cz = (e) => (e.client ?? U).put({
  url: "/api/v2/ManufacturingService/Workstations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Khe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: C_,
  platformGetHello: S_,
  platformGetManageInfo: L_,
  platformGetVersion: m_,
  platformMapIdentityApiConfirmEmail: f_,
  platformPostAccountLogout: k_,
  platformPostAccountManageDownloadPersonalData: E_,
  platformPostAccountManageLinkExternalLogin: w_,
  platformPostAccountPerformExternalLogin: b_,
  platformPostForgotPassword: j_,
  platformPostLogin: T_,
  platformPostManage2Fa: G_,
  platformPostManageInfo: R_,
  platformPostRefresh: P_,
  platformPostRegister: y_,
  platformPostResendConfirmationEmail: I_,
  platformPostResetPassword: A_,
  productionPlansCreateProductionPlan: D_,
  productionPlansDeleteProductionPlan: $_,
  productionPlansGetProductionPlanById: x_,
  productionPlansGetProductionPlans: M_,
  productionPlansGetProductionPlansCount: B_,
  productionPlansPatchProductionPlan: F_,
  productionPlansUpdateProductionPlan: U_,
  workOrderTypesCreateWorkOrderType: J_,
  workOrderTypesDeleteWorkOrderType: K_,
  workOrderTypesGetWorkOrderTypeById: Y_,
  workOrderTypesGetWorkOrderTypes: Q_,
  workOrderTypesGetWorkOrderTypesCount: N_,
  workOrderTypesPatchWorkOrderType: Z_,
  workOrderTypesUpdateWorkOrderType: X_,
  workOrdersCreateWorkOrder: W_,
  workOrdersDeleteWorkOrder: q_,
  workOrdersGetWorkOrderById: V_,
  workOrdersGetWorkOrders: O_,
  workOrdersGetWorkOrdersCount: H_,
  workOrdersPatchWorkOrder: __,
  workOrdersUpdateWorkOrder: z_,
  workstationsCreateWorkstation: o_,
  workstationsDeleteWorkstation: rz,
  workstationsGetWorkstationById: az,
  workstationsGetWorkstations: p_,
  workstationsGetWorkstationsCount: ez,
  workstationsPatchWorkstation: tz,
  workstationsUpdateWorkstation: cz
}, Symbol.toStringTag, { value: "Module" })), v = B($()), lz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerCreatives/Public/{bannerCreativeId}/Click",
  ...e
}), nz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/BannerPlacementAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sz = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e
}), dz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e
}), gz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/BannerPlacementAssignments/{bannerPlacementAssignmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerPlacementKeys",
  ...e
}), hz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerPlacements/Public/{placementKey}",
  ...e
}), mz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/BannerSets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yz = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e
}), Tz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e
}), Pz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Performance",
  ...e
}), Iz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Az = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gz = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e
}), Lz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e
}), Rz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/BannerSets/{bannerSetId}/Creatives/{bannerCreativeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/EmailGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ez = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e
}), Mz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e
}), Dz = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/EmailGroups/{emailgroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $z = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailSignatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/EmailSignatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailSignatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uz = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e
}), Oz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e
}), Wz = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/EmailSignatures/{emailsignatureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vz = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/EmailTemplates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _z = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailTemplates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zz = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e
}), Qz = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e
}), Jz = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nz = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/EmailTemplates/{emailTemplateId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kz = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/version",
  ...e
}), Yz = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/health",
  ...e
}), Zz = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/hello",
  ...e
}), Xz = (e) => (e.client ?? v).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pz = (e) => (e.client ?? v).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oz = (e) => (e.client ?? v).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eQ = (e) => (e.client ?? v).get({
  url: "/confirmEmail",
  ...e
}), rQ = (e) => (e.client ?? v).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aQ = (e) => (e.client ?? v).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tQ = (e) => (e.client ?? v).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cQ = (e) => (e.client ?? v).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lQ = (e) => ((e == null ? void 0 : e.client) ?? v).get({
  url: "/manage/info",
  ...e
}), nQ = (e) => (e.client ?? v).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uQ = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), iQ = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sQ = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), dQ = (e) => ((e == null ? void 0 : e.client) ?? v).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), gQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingAreas",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/MarketingAreas",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingAreas/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e
}), CQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e
}), SQ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/MarketingAreas/{marketingAreaId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingCampaigns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/MarketingCampaigns",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingCampaigns/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e
}), jQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e
}), AQ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLeads",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/MarketingLeads",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLeads/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e
}), wQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e
}), EQ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/MarketingLeads/{marketingLeadId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/MarketingLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $Q = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e
}), FQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e
}), UQ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/MarketingLists/{marketinglistId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/Newsletters",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/Newsletters",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/Newsletters/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e
}), _Q = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e
}), zQ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/Newsletters/{newsletterId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/NewsletterSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YQ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e
}), ZQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e
}), XQ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/NewsletterSubscriptions/{newsletterSubscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pQ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialMediaPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oQ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/SocialMediaPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialMediaPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rJ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e
}), aJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e
}), tJ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cJ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialPostBuckets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nJ = (e) => (e.client ?? v).post({
  url: "/api/v2/MarketingService/SocialPostBuckets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialPostBuckets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iJ = (e) => (e.client ?? v).delete({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e
}), sJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e
}), dJ = (e) => (e.client ?? v).patch({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gJ = (e) => (e.client ?? v).put({
  url: "/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vJ = (e) => (e.client ?? v).get({
  url: "/api/v2/MarketingService/TrackingPixels/{pixelId}",
  ...e
}), Yhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bannerCreativesGetPublicBannerClick: lz,
  bannerPlacementAssignmentsCreateBannerPlacementAssignment: uz,
  bannerPlacementAssignmentsDeleteBannerPlacementAssignment: sz,
  bannerPlacementAssignmentsGetBannerPlacementAssignmentById: dz,
  bannerPlacementAssignmentsGetBannerPlacementAssignments: nz,
  bannerPlacementAssignmentsGetBannerPlacementAssignmentsCount: iz,
  bannerPlacementAssignmentsUpdateBannerPlacementAssignment: gz,
  bannerPlacementKeysGetBannerPlacementKeys: vz,
  bannerPlacementsGetPublicBannerPlacement: hz,
  bannerSetsCreateBannerCreative: jz,
  bannerSetsCreateBannerSet: Cz,
  bannerSetsDeleteBannerCreative: Gz,
  bannerSetsDeleteBannerSet: yz,
  bannerSetsGetBannerCreativeById: Lz,
  bannerSetsGetBannerCreatives: Iz,
  bannerSetsGetBannerCreativesCount: Az,
  bannerSetsGetBannerSetById: Tz,
  bannerSetsGetBannerSetPerformance: fz,
  bannerSetsGetBannerSets: mz,
  bannerSetsGetBannerSetsCount: Sz,
  bannerSetsUpdateBannerCreative: Rz,
  bannerSetsUpdateBannerSet: Pz,
  emailGroupsCreateEmailGroup: kz,
  emailGroupsDeleteEmailGroup: Ez,
  emailGroupsGetEmailGroupDetails: Mz,
  emailGroupsGetEmailGroupsCount: wz,
  emailGroupsGetEmailGroupsOData: bz,
  emailGroupsPatchEmailGroup: Dz,
  emailGroupsUpdateEmailGroup: Bz,
  emailSignaturesCreateEmailSignature: xz,
  emailSignaturesDeleteEmailSignature: Uz,
  emailSignaturesGetEmailSignatureDetails: Oz,
  emailSignaturesGetEmailSignaturesCount: Fz,
  emailSignaturesGetEmailSignaturesOData: $z,
  emailSignaturesPatchEmailSignature: Wz,
  emailSignaturesUpdateEmailSignature: Hz,
  emailTemplatesCreateEmailTemplate: Vz,
  emailTemplatesDeleteEmailTemplate: zz,
  emailTemplatesGetEmailTemplateDetails: Qz,
  emailTemplatesGetEmailTemplatesCount: _z,
  emailTemplatesGetEmailTemplatesOData: qz,
  emailTemplatesPatchEmailTemplate: Jz,
  emailTemplatesUpdateEmailTemplate: Nz,
  marketingAreasCreateMarketingArea: vQ,
  marketingAreasDeleteMarketingArea: mQ,
  marketingAreasGetMarketingAreaById: CQ,
  marketingAreasGetMarketingAreas: gQ,
  marketingAreasGetMarketingAreasCount: hQ,
  marketingAreasPatchMarketingArea: SQ,
  marketingAreasUpdateMarketingArea: yQ,
  marketingCampaignsCreateMarketingCampaign: PQ,
  marketingCampaignsDeleteMarketingCampaign: IQ,
  marketingCampaignsGetMarketingCampaignDetails: jQ,
  marketingCampaignsGetMarketingCampaignOData: TQ,
  marketingCampaignsGetMarketingCampaignsCount: fQ,
  marketingCampaignsPatchMarketingCampaign: AQ,
  marketingCampaignsUpdateMarketingCampaign: GQ,
  marketingLeadsCreateMarketingLead: RQ,
  marketingLeadsDeleteMarketingLead: kQ,
  marketingLeadsGetMarketingLeadDetails: wQ,
  marketingLeadsGetMarketingLeadsCount: bQ,
  marketingLeadsGetMarketingLeadsOData: LQ,
  marketingLeadsPatchMarketingLead: EQ,
  marketingLeadsUpdateMarketingLead: MQ,
  marketingListsCreateMarketingList: BQ,
  marketingListsDeleteMarketingList: xQ,
  marketingListsGetMarketingListDetails: FQ,
  marketingListsGetMarketingListOData: DQ,
  marketingListsGetMarketingListsCount: $Q,
  marketingListsPatchMarketingList: UQ,
  marketingListsUpdateMarketingList: OQ,
  newsletterSubscriptionsCreateNewsletterSubscription: NQ,
  newsletterSubscriptionsDeleteNewsletterSubscription: YQ,
  newsletterSubscriptionsGetNewsletterSubscriptionById: ZQ,
  newsletterSubscriptionsGetNewsletterSubscriptions: JQ,
  newsletterSubscriptionsGetNewsletterSubscriptionsCount: KQ,
  newsletterSubscriptionsUpdateNewsletterSubscription: XQ,
  newslettersCreateNewsletter: HQ,
  newslettersDeleteNewsletter: VQ,
  newslettersGetNewsletterDetails: _Q,
  newslettersGetNewsletterOData: WQ,
  newslettersGetNewslettersCount: qQ,
  newslettersPatchNewsletter: zQ,
  newslettersUpdateNewsletter: QQ,
  platformGetHealth: Yz,
  platformGetHello: Zz,
  platformGetManageInfo: lQ,
  platformGetVersion: Kz,
  platformMapIdentityApiConfirmEmail: eQ,
  platformPostAccountLogout: iQ,
  platformPostAccountManageDownloadPersonalData: dQ,
  platformPostAccountManageLinkExternalLogin: sQ,
  platformPostAccountPerformExternalLogin: uQ,
  platformPostForgotPassword: aQ,
  platformPostLogin: pz,
  platformPostManage2Fa: cQ,
  platformPostManageInfo: nQ,
  platformPostRefresh: oz,
  platformPostRegister: Xz,
  platformPostResendConfirmationEmail: rQ,
  platformPostResetPassword: tQ,
  socialMediaPostsCreateSocialMediaPost: oQ,
  socialMediaPostsDeleteSocialMediaPost: rJ,
  socialMediaPostsGetSocialMediaPostDetails: aJ,
  socialMediaPostsGetSocialMediaPostsCount: eJ,
  socialMediaPostsGetSocialMediaPostsOData: pQ,
  socialMediaPostsPatchSocialMediaPost: tJ,
  socialMediaPostsUpdateSocialMediaPost: cJ,
  socialPostBucketsCreateSocialPostBucket: nJ,
  socialPostBucketsDeleteSocialPostBucket: iJ,
  socialPostBucketsGetSocialPostBucketDetails: sJ,
  socialPostBucketsGetSocialPostBucketsCount: uJ,
  socialPostBucketsGetSocialPostBucketsOData: lJ,
  socialPostBucketsPatchSocialPostBucket: dJ,
  socialPostBucketsUpdateSocialPostBucket: gJ,
  trackingPixelsGetTrackingPixel: vJ
}, Symbol.toStringTag, { value: "Module" })), p = B($()), hJ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/version",
  ...e
}), mJ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/health",
  ...e
}), CJ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/hello",
  ...e
}), SJ = (e) => (e.client ?? p).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yJ = (e) => (e.client ?? p).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TJ = (e) => (e.client ?? p).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PJ = (e) => (e.client ?? p).get({
  url: "/confirmEmail",
  ...e
}), fJ = (e) => (e.client ?? p).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IJ = (e) => (e.client ?? p).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jJ = (e) => (e.client ?? p).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AJ = (e) => (e.client ?? p).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GJ = (e) => ((e == null ? void 0 : e.client) ?? p).get({
  url: "/manage/info",
  ...e
}), LJ = (e) => (e.client ?? p).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RJ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bJ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), kJ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), wJ = (e) => ((e == null ? void 0 : e.client) ?? p).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Zhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: mJ,
  platformGetHello: CJ,
  platformGetManageInfo: GJ,
  platformGetVersion: hJ,
  platformMapIdentityApiConfirmEmail: PJ,
  platformPostAccountLogout: bJ,
  platformPostAccountManageDownloadPersonalData: wJ,
  platformPostAccountManageLinkExternalLogin: kJ,
  platformPostAccountPerformExternalLogin: RJ,
  platformPostForgotPassword: IJ,
  platformPostLogin: yJ,
  platformPostManage2Fa: AJ,
  platformPostManageInfo: LJ,
  platformPostRefresh: TJ,
  platformPostRegister: SJ,
  platformPostResendConfirmationEmail: fJ,
  platformPostResetPassword: jJ
}, Symbol.toStringTag, { value: "Module" })), O = B($()), EJ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/version",
  ...e
}), MJ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/health",
  ...e
}), DJ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/hello",
  ...e
}), BJ = (e) => (e.client ?? O).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $J = (e) => (e.client ?? O).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xJ = (e) => (e.client ?? O).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FJ = (e) => (e.client ?? O).get({
  url: "/confirmEmail",
  ...e
}), UJ = (e) => (e.client ?? O).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OJ = (e) => (e.client ?? O).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WJ = (e) => (e.client ?? O).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HJ = (e) => (e.client ?? O).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qJ = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/manage/info",
  ...e
}), VJ = (e) => (e.client ?? O).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _J = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zJ = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), QJ = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), JJ = (e) => ((e == null ? void 0 : e.client) ?? O).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), NJ = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/SubmitCart",
  ...e
}), KJ = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YJ = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZJ = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XJ = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pJ = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oJ = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/{orderId}",
  ...e
}), rN = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aN = (e) => ((e == null ? void 0 : e.client) ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/{orderId}",
  ...e
}), cN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Received/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/Me/Received/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nN = (e) => (e.client ?? O).delete({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e
}), uN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e
}), iN = (e) => (e.client ?? O).patch({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Calculate",
  ...e
}), gN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mN = (e) => (e.client ?? O).delete({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e
}), CN = (e) => (e.client ?? O).get({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e
}), SN = (e) => (e.client ?? O).patch({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TN = (e) => (e.client ?? O).put({
  url: "/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}/Calculate",
  ...e
}), PN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fN = (e) => (e.client ?? O).post({
  url: "/api/v2/OrdersService/Orders/{orderId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xhe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ordersCalculateOrder: dN,
  ordersCalculateOrderLine: TN,
  ordersCreateOrder: YJ,
  ordersCreateOrderLine: vN,
  ordersDeleteOrder: nN,
  ordersDeleteOrderLine: mN,
  ordersGetExtendedOrders: ZJ,
  ordersGetMyReceivedOrder: tN,
  ordersGetMyReceivedOrderLines: lN,
  ordersGetMyReceivedOrders: rN,
  ordersGetMyReceivedOrdersCount: aN,
  ordersGetOrder: uN,
  ordersGetOrderLine: CN,
  ordersGetOrderLines: gN,
  ordersGetOrderLinesCount: hN,
  ordersGetOrders: KJ,
  ordersGetOrdersCount: XJ,
  ordersGetReceivedOrder: eN,
  ordersGetReceivedOrderLines: cN,
  ordersGetReceivedOrders: pJ,
  ordersGetReceivedOrdersCount: oJ,
  ordersPatchOrder: iN,
  ordersPatchOrderLine: SN,
  ordersPreviewOrderEmailTemplate: fN,
  ordersSendOrderEmail: PN,
  ordersSubmitCart: NJ,
  ordersUpdateOrder: sN,
  ordersUpdateOrderLine: yN,
  platformGetHealth: MJ,
  platformGetHello: DJ,
  platformGetManageInfo: qJ,
  platformGetVersion: EJ,
  platformMapIdentityApiConfirmEmail: FJ,
  platformPostAccountLogout: zJ,
  platformPostAccountManageDownloadPersonalData: JJ,
  platformPostAccountManageLinkExternalLogin: QJ,
  platformPostAccountPerformExternalLogin: _J,
  platformPostForgotPassword: OJ,
  platformPostLogin: $J,
  platformPostManage2Fa: HJ,
  platformPostManageInfo: VJ,
  platformPostRefresh: xJ,
  platformPostRegister: BJ,
  platformPostResendConfirmationEmail: UJ,
  platformPostResetPassword: WJ
}, Symbol.toStringTag, { value: "Module" })), L = B($()), IN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/version",
  ...e
}), jN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/health",
  ...e
}), AN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/hello",
  ...e
}), GN = (e) => (e.client ?? L).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LN = (e) => (e.client ?? L).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RN = (e) => (e.client ?? L).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bN = (e) => (e.client ?? L).get({
  url: "/confirmEmail",
  ...e
}), kN = (e) => (e.client ?? L).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wN = (e) => (e.client ?? L).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EN = (e) => (e.client ?? L).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MN = (e) => (e.client ?? L).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DN = (e) => ((e == null ? void 0 : e.client) ?? L).get({
  url: "/manage/info",
  ...e
}), BN = (e) => (e.client ?? L).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $N = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), xN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), FN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), UN = (e) => ((e == null ? void 0 : e.client) ?? L).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), ON = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WN = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qN = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e
}), VN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e
}), _N = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zN = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentMethods/{paymentMethodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JN = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentModes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KN = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e
}), YN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e
}), ZN = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XN = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentModes/{paymentModeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pN = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oN = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/RotateKey",
  ...e
}), aK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/Environment",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/Credential",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments/{paymentId}/Details",
  ...e
}), nK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e
}), uK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e
}), iK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/Payments/{paymentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PaymentTerms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CK = (e) => (e.client ?? L).delete({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e
}), SK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e
}), yK = (e) => (e.client ?? L).patch({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TK = (e) => (e.client ?? L).put({
  url: "/api/v2/PaymentsService/PaymentTerms/{paymentTermId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/ProviderOperations/AwaitingOutcome",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fK = (e) => (e.client ?? L).get({
  url: "/api/v2/PaymentsService/ProviderOperations/AwaitingOutcome/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/ProviderOperations/{providerOperationId}/ReconcileOutcome",
  ...e
}), jK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/ProviderOperations/{providerOperationId}/Refund",
  ...e
}), AK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PublicPaymentLinks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GK = (e) => (e.client ?? L).post({
  url: "/api/v2/PaymentsService/PublicPaymentReferences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), phe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  paymentMethodsCreatePaymentMethod: WN,
  paymentMethodsDeletePaymentMethod: qN,
  paymentMethodsGetPaymentMethodDetails: VN,
  paymentMethodsGetPaymentMethods: ON,
  paymentMethodsGetPaymentMethodsCount: HN,
  paymentMethodsPatchPaymentMethod: _N,
  paymentMethodsUpdatePaymentMethod: zN,
  paymentModesCreatePaymentMode: JN,
  paymentModesDeletePaymentMode: KN,
  paymentModesGetPaymentModeDetails: YN,
  paymentModesGetPaymentModes: QN,
  paymentModesGetPaymentModesCount: NN,
  paymentModesPatchPaymentMode: ZN,
  paymentModesUpdatePaymentMode: XN,
  paymentProviderRegistrationsCreate: oN,
  paymentProviderRegistrationsDeclareEnvironment: tK,
  paymentProviderRegistrationsGet: pN,
  paymentProviderRegistrationsGetCount: eK,
  paymentProviderRegistrationsRotateKey: rK,
  paymentProviderRegistrationsSetCredential: cK,
  paymentProviderRegistrationsUpdate: aK,
  paymentTermsCreatePaymentTerm: hK,
  paymentTermsDeletePaymentTerm: CK,
  paymentTermsGetPaymentTermDetails: SK,
  paymentTermsGetPaymentTerms: vK,
  paymentTermsGetPaymentTermsCount: mK,
  paymentTermsPatchPaymentTerm: yK,
  paymentTermsUpdatePaymentTerm: TK,
  paymentsCreatePayment: gK,
  paymentsDeletePayment: nK,
  paymentsGetPayment: lK,
  paymentsGetPaymentAsyncV2: uK,
  paymentsGetPayments: dK,
  paymentsPatchPayment: iK,
  paymentsUpdatePayment: sK,
  platformGetHealth: jN,
  platformGetHello: AN,
  platformGetManageInfo: DN,
  platformGetVersion: IN,
  platformMapIdentityApiConfirmEmail: bN,
  platformPostAccountLogout: xN,
  platformPostAccountManageDownloadPersonalData: UN,
  platformPostAccountManageLinkExternalLogin: FN,
  platformPostAccountPerformExternalLogin: $N,
  platformPostForgotPassword: wN,
  platformPostLogin: LN,
  platformPostManage2Fa: MN,
  platformPostManageInfo: BN,
  platformPostRefresh: RN,
  platformPostRegister: GN,
  platformPostResendConfirmationEmail: kN,
  platformPostResetPassword: EN,
  providerOperationsGetAwaitingOutcome: PK,
  providerOperationsGetAwaitingOutcomeCount: fK,
  providerOperationsReconcileOutcome: IK,
  providerOperationsRefundCollection: jK,
  publicPaymentLinksIssue: AK,
  publicPaymentReferencesIssue: GK
}, Symbol.toStringTag, { value: "Module" })), A = B($()), LK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RK = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/DiscountLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kK = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e
}), wK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e
}), EK = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MK = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BK = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $K = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xK = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e
}), FK = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e
}), UK = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OK = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/version",
  ...e
}), HK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/health",
  ...e
}), qK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/hello",
  ...e
}), VK = (e) => (e.client ?? A).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _K = (e) => (e.client ?? A).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zK = (e) => (e.client ?? A).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QK = (e) => (e.client ?? A).get({
  url: "/confirmEmail",
  ...e
}), JK = (e) => (e.client ?? A).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NK = (e) => (e.client ?? A).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), KK = (e) => (e.client ?? A).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), YK = (e) => (e.client ?? A).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZK = (e) => ((e == null ? void 0 : e.client) ?? A).get({
  url: "/manage/info",
  ...e
}), XK = (e) => (e.client ?? A).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pK = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), oK = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), eY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), rY = (e) => ((e == null ? void 0 : e.client) ?? A).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), aY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PriceLists",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e
}), nY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e
}), uY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PriceLists/{priceListId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e
}), hY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e
}), mY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/Price",
  ...e
}), yY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/FinalPrice",
  ...e
}), TY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/TotalTaxes",
  ...e
}), PY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/Prices/{itemId}/TotalSavings",
  ...e
}), fY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/PricingRules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e
}), AY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e
}), GY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/PricingRules/{pricingRuleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/PricingRules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/PricingRules/Update",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kY = (e) => (e.client ?? A).post({
  url: "/api/v2/PricingService/RoundingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EY = (e) => (e.client ?? A).delete({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e
}), MY = (e) => (e.client ?? A).get({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e
}), DY = (e) => (e.client ?? A).patch({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BY = (e) => (e.client ?? A).put({
  url: "/api/v2/PricingService/RoundingPolicies/{roundingPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ohe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  discountListsCreateDiscountList: RK,
  discountListsCreateDiscountListEntry: BK,
  discountListsDeleteDiscountList: kK,
  discountListsDeleteDiscountListEntry: xK,
  discountListsGetDiscountList: wK,
  discountListsGetDiscountListEntries: DK,
  discountListsGetDiscountListEntriesCount: $K,
  discountListsGetDiscountListEntry: FK,
  discountListsGetDiscountLists: LK,
  discountListsGetDiscountListsCount: bK,
  discountListsPatchDiscountList: EK,
  discountListsPatchDiscountListEntry: UK,
  discountListsUpdateDiscountList: MK,
  discountListsUpdateDiscountListEntry: OK,
  platformGetHealth: HK,
  platformGetHello: qK,
  platformGetManageInfo: ZK,
  platformGetVersion: WK,
  platformMapIdentityApiConfirmEmail: QK,
  platformPostAccountLogout: oK,
  platformPostAccountManageDownloadPersonalData: rY,
  platformPostAccountManageLinkExternalLogin: eY,
  platformPostAccountPerformExternalLogin: pK,
  platformPostForgotPassword: NK,
  platformPostLogin: _K,
  platformPostManage2Fa: YK,
  platformPostManageInfo: XK,
  platformPostRefresh: zK,
  platformPostRegister: VK,
  platformPostResendConfirmationEmail: JK,
  platformPostResetPassword: KK,
  priceListsCreatePriceList: tY,
  priceListsCreatePriceListPrices: dY,
  priceListsDeletePriceList: lY,
  priceListsDeletePriceListPrice: vY,
  priceListsGetPriceList: nY,
  priceListsGetPriceListPrice: hY,
  priceListsGetPriceListPrices: sY,
  priceListsGetPriceListPricesCount: gY,
  priceListsGetPriceLists: aY,
  priceListsGetPriceListsCount: cY,
  priceListsPatchPriceList: uY,
  priceListsPatchPriceListPrice: mY,
  priceListsUpdatePriceList: iY,
  priceListsUpdatePriceListPrice: CY,
  pricesGetFinalPrice: yY,
  pricesGetPrice: SY,
  pricesGetTotalSavingsInUsd: PY,
  pricesGetTotalTaxesInUsd: TY,
  pricingRulesCreatePricingRule: IY,
  pricingRulesDeletePricingRule: jY,
  pricingRulesGetPricingRuleById: AY,
  pricingRulesGetPricingRules: fY,
  pricingRulesGetPricingRulesCount: LY,
  pricingRulesPatchPricingRule: GY,
  pricingRulesUpdatePricingRule: RY,
  roundingPoliciesCreateRoundingPolicy: kY,
  roundingPoliciesDeleteRoundingPolicy: EY,
  roundingPoliciesGetRoundingPolicies: bY,
  roundingPoliciesGetRoundingPoliciesCount: wY,
  roundingPoliciesGetRoundingPolicyById: MY,
  roundingPoliciesPatchRoundingPolicy: DY,
  roundingPoliciesUpdateRoundingPolicy: BY
}, Symbol.toStringTag, { value: "Module" })), I = B($()), $Y = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/version",
  ...e
}), xY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/health",
  ...e
}), FY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/hello",
  ...e
}), UY = (e) => (e.client ?? I).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OY = (e) => (e.client ?? I).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WY = (e) => (e.client ?? I).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HY = (e) => (e.client ?? I).get({
  url: "/confirmEmail",
  ...e
}), qY = (e) => (e.client ?? I).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VY = (e) => (e.client ?? I).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _Y = (e) => (e.client ?? I).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zY = (e) => (e.client ?? I).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QY = (e) => ((e == null ? void 0 : e.client) ?? I).get({
  url: "/manage/info",
  ...e
}), JY = (e) => (e.client ?? I).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NY = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), KY = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), YY = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ZY = (e) => ((e == null ? void 0 : e.client) ?? I).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), XY = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pY = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oY = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e
}), rZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e
}), aZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods",
  ...e
}), lZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e
}), uZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TimeLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e
}), CZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), SZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/Projects/{projectId}/TaskCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/ProjectTasks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), IZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e
}), AZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e
}), GZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/ProjectTasks/{projectTaskId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TaskCategories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e
}), EZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e
}), MZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskCategories/{taskCategoryId}/Types",
  ...e
}), $Z = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e
}), xZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e
}), FZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TaskTypes/{taskTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TaskTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WZ = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TimeLogApprovals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogApprovals/{approvalId}/Status",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogApprovals/{approvalId}/Approver",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), VZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _Z = (e) => (e.client ?? I).post({
  url: "/api/v2/ProjectsService/TimeLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/ByResponsibleContact",
  ...e
}), JZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/CreatedByContact",
  ...e
}), NZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/ForProject/{projectId}",
  ...e
}), KZ = (e) => (e.client ?? I).delete({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e
}), YZ = (e) => (e.client ?? I).get({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e
}), ZZ = (e) => (e.client ?? I).patch({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XZ = (e) => (e.client ?? I).put({
  url: "/api/v2/ProjectsService/TimeLogs/{timeLogId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: xY,
  platformGetHello: FY,
  platformGetManageInfo: QY,
  platformGetVersion: $Y,
  platformMapIdentityApiConfirmEmail: HY,
  platformPostAccountLogout: KY,
  platformPostAccountManageDownloadPersonalData: ZY,
  platformPostAccountManageLinkExternalLogin: YY,
  platformPostAccountPerformExternalLogin: NY,
  platformPostForgotPassword: VY,
  platformPostLogin: OY,
  platformPostManage2Fa: zY,
  platformPostManageInfo: JY,
  platformPostRefresh: WY,
  platformPostRegister: UY,
  platformPostResendConfirmationEmail: qY,
  platformPostResetPassword: _Y,
  projectTasksCreateProjectTask: fZ,
  projectTasksDeleteProjectTask: jZ,
  projectTasksGetProjectTaskById: AZ,
  projectTasksGetProjectTasks: PZ,
  projectTasksGetProjectTasksCount: IZ,
  projectTasksPatchProjectTask: GZ,
  projectTasksUpdateProjectTask: LZ,
  projectsCreateProject: pY,
  projectsCreateProjectPeriod: lZ,
  projectsCreateTaskForProject: vZ,
  projectsDeleteProject: eZ,
  projectsDeleteProjectPeriod: nZ,
  projectsDeleteTaskForProject: mZ,
  projectsGetProjectById: rZ,
  projectsGetProjectPeriods: cZ,
  projectsGetProjectTaskCategories: yZ,
  projectsGetProjectTaskCategoriesCount: TZ,
  projectsGetProjectTimeLogsCount: dZ,
  projectsGetProjectsByTenantId: XY,
  projectsGetProjectsCountByTenantId: oY,
  projectsGetTasksForProject: gZ,
  projectsGetTasksForProjectCount: hZ,
  projectsGetTimeLogsForProject: sZ,
  projectsPatchProject: aZ,
  projectsPatchProjectPeriod: uZ,
  projectsPatchTaskForProject: CZ,
  projectsUpdateProject: tZ,
  projectsUpdateProjectPeriod: iZ,
  projectsUpdateTaskForProject: SZ,
  taskCategoriesCountTenantTaskCategories: kZ,
  taskCategoriesCreateTaskCategory: bZ,
  taskCategoriesDeleteTaskCategory: wZ,
  taskCategoriesGetTaskCategoryById: EZ,
  taskCategoriesGetTaskCategoryTaskTypes: BZ,
  taskCategoriesGetTenantTaskCategories: RZ,
  taskCategoriesPatchTaskCategory: MZ,
  taskCategoriesUpdateTaskCategory: DZ,
  taskTypesCreateTaskType: OZ,
  taskTypesDeleteTaskType: $Z,
  taskTypesGetTaskTypeById: xZ,
  taskTypesPatchTaskType: FZ,
  taskTypesUpdateTaskType: UZ,
  timeLogApprovalsRequestProjectHoursApproval: WZ,
  timeLogApprovalsUpdateProjectHoursApprovalApprover: qZ,
  timeLogApprovalsUpdateProjectHoursApprovalStatus: HZ,
  timeLogsCountProjectPeriodTimeLogs: zZ,
  timeLogsCreateProjectTimeLog: _Z,
  timeLogsDeleteProjectTimeLog: KZ,
  timeLogsGetProjectPeriodTimeLogs: VZ,
  timeLogsGetProjectTimeLogById: YZ,
  timeLogsGetProjectTimeLogs: NZ,
  timeLogsGetProjectTimeLogsByResponsibleContact: QZ,
  timeLogsGetProjectTimeLogsCreatedByContact: JZ,
  timeLogsPatchProjectTimeLog: ZZ,
  timeLogsUpdateProjectTimeLog: XZ
}, Symbol.toStringTag, { value: "Module" })), M = B($()), pZ = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/version",
  ...e
}), oZ = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/health",
  ...e
}), e1 = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/hello",
  ...e
}), r1 = (e) => (e.client ?? M).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a1 = (e) => (e.client ?? M).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t1 = (e) => (e.client ?? M).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c1 = (e) => (e.client ?? M).get({
  url: "/confirmEmail",
  ...e
}), l1 = (e) => (e.client ?? M).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n1 = (e) => (e.client ?? M).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u1 = (e) => (e.client ?? M).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i1 = (e) => (e.client ?? M).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s1 = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/manage/info",
  ...e
}), d1 = (e) => (e.client ?? M).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g1 = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), v1 = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), h1 = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), m1 = (e) => ((e == null ? void 0 : e.client) ?? M).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), C1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Received/{quoteId}",
  ...e
}), j1 = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A1 = (e) => ((e == null ? void 0 : e.client) ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/{quoteId}",
  ...e
}), L1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Received/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/Me/Received/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b1 = (e) => (e.client ?? M).delete({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e
}), k1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e
}), w1 = (e) => (e.client ?? M).patch({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Calculate",
  ...e
}), D1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Close",
  ...e
}), B1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Reopen",
  ...e
}), $1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Orders",
  ...e
}), x1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/PlaceOrder",
  ...e
}), F1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/Me/{quoteId}/PlaceOrder",
  ...e
}), U1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H1 = (e) => (e.client ?? M).delete({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e
}), q1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e
}), V1 = (e) => (e.client ?? M).patch({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Upsert",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q1 = (e) => (e.client ?? M).put({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Calculate",
  ...e
}), J1 = (e) => (e.client ?? M).get({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Lines/Exists",
  ...e
}), N1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K1 = (e) => (e.client ?? M).post({
  url: "/api/v2/QuotesService/Quotes/{quoteId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: oZ,
  platformGetHello: e1,
  platformGetManageInfo: s1,
  platformGetVersion: pZ,
  platformMapIdentityApiConfirmEmail: c1,
  platformPostAccountLogout: v1,
  platformPostAccountManageDownloadPersonalData: m1,
  platformPostAccountManageLinkExternalLogin: h1,
  platformPostAccountPerformExternalLogin: g1,
  platformPostForgotPassword: n1,
  platformPostLogin: a1,
  platformPostManage2Fa: i1,
  platformPostManageInfo: d1,
  platformPostRefresh: t1,
  platformPostRegister: r1,
  platformPostResendConfirmationEmail: l1,
  platformPostResetPassword: u1,
  quotesCalculateQuote: M1,
  quotesCalculateQuoteLine: Q1,
  quotesCloseQuote: D1,
  quotesCreateOrderFromQuote: $1,
  quotesCreateQuote: S1,
  quotesCreateQuoteLine: O1,
  quotesDeleteQuote: b1,
  quotesDeleteQuoteLine: H1,
  quotesGetExtendedQuotes: T1,
  quotesGetMyReceivedQuote: G1,
  quotesGetMyReceivedQuoteLines: R1,
  quotesGetMyReceivedQuotes: j1,
  quotesGetMyReceivedQuotesCount: A1,
  quotesGetQuote: k1,
  quotesGetQuoteLine: q1,
  quotesGetQuoteLines: U1,
  quotesGetQuoteLinesCount: W1,
  quotesGetQuotes: C1,
  quotesGetQuotesCount: y1,
  quotesGetReceivedQuote: I1,
  quotesGetReceivedQuoteLines: L1,
  quotesGetReceivedQuotes: P1,
  quotesGetReceivedQuotesCount: f1,
  quotesPatchQuote: w1,
  quotesPatchQuoteLine: V1,
  quotesPlaceMyOrderFromQuote: F1,
  quotesPlaceOrderFromQuote: x1,
  quotesPreviewQuoteEmailTemplate: K1,
  quotesQuoteLineExists: J1,
  quotesReopenQuote: B1,
  quotesSendQuoteEmail: N1,
  quotesUpdateQuote: E1,
  quotesUpdateQuoteLine: _1,
  quotesUpsertQuoteLine: z1
}, Symbol.toStringTag, { value: "Module" })), w = B($()), Y1 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/api/v2/ReachService/Categories",
  ...e
}), Z1 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Categories/Reconciliation",
  ...e
}), X1 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p1 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o1 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/{reachDecisionId}",
  ...e
}), e3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Decisions/Explain",
  ...e
}), r3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Deliveries/{reachDeliveryId}",
  ...e
}), c3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/version",
  ...e
}), l3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/health",
  ...e
}), n3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/hello",
  ...e
}), u3 = (e) => (e.client ?? w).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i3 = (e) => (e.client ?? w).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s3 = (e) => (e.client ?? w).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d3 = (e) => (e.client ?? w).get({
  url: "/confirmEmail",
  ...e
}), g3 = (e) => (e.client ?? w).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v3 = (e) => (e.client ?? w).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h3 = (e) => (e.client ?? w).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m3 = (e) => (e.client ?? w).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/manage/info",
  ...e
}), S3 = (e) => (e.client ?? w).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), T3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), P3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), f3 = (e) => ((e == null ? void 0 : e.client) ?? w).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), I3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/{reachOccurrenceId}",
  ...e
}), G3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Occurrences/{reachOccurrenceId}/Explain",
  ...e
}), L3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Policy",
  ...e
}), R3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Policy",
  ...e
}), b3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Policy",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Policy/Defaults",
  ...e
}), w3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Policy/Defaults",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e
}), B3 = (e) => ((e == null ? void 0 : e.client) ?? w).get({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e
}), $3 = (e) => ((e == null ? void 0 : e.client) ?? w).put({
  url: "/api/v2/ReachService/Preferences/Personal",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x3 = (e) => (e.client ?? w).delete({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e
}), F3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e
}), U3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Preferences/Member",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W3 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Rules/{reachRuleId}",
  ...e
}), V3 = (e) => (e.client ?? w).put({
  url: "/api/v2/ReachService/Rules/{reachRuleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _3 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules/{reachRuleId}/Enable",
  ...e
}), z3 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Rules/{reachRuleId}/Disable",
  ...e
}), Q3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Suppressions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J3 = (e) => (e.client ?? w).post({
  url: "/api/v2/ReachService/Suppressions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N3 = (e) => (e.client ?? w).get({
  url: "/api/v2/ReachService/Suppressions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ame = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  categoriesGetReachCategories: Y1,
  categoriesGetReachCategoryReconciliation: Z1,
  decisionsExplainReachRecipientOutcomes: e3,
  decisionsGetReachDecision: o1,
  decisionsGetReachDecisions: X1,
  decisionsGetReachDecisionsCount: p1,
  deliveriesGetReachDeliveries: r3,
  deliveriesGetReachDeliveriesCount: a3,
  deliveriesGetReachDelivery: t3,
  occurrencesExplainReachOccurrence: G3,
  occurrencesGetReachOccurrence: A3,
  occurrencesGetReachOccurrences: I3,
  occurrencesGetReachOccurrencesCount: j3,
  platformGetHealth: l3,
  platformGetHello: n3,
  platformGetManageInfo: C3,
  platformGetVersion: c3,
  platformMapIdentityApiConfirmEmail: d3,
  platformPostAccountLogout: T3,
  platformPostAccountManageDownloadPersonalData: f3,
  platformPostAccountManageLinkExternalLogin: P3,
  platformPostAccountPerformExternalLogin: y3,
  platformPostForgotPassword: v3,
  platformPostLogin: i3,
  platformPostManage2Fa: m3,
  platformPostManageInfo: S3,
  platformPostRefresh: s3,
  platformPostRegister: u3,
  platformPostResendConfirmationEmail: g3,
  platformPostResetPassword: h3,
  policyClearReachPolicy: L3,
  policyClearReachPolicyDefault: k3,
  policyGetReachPolicy: R3,
  policySetReachPolicy: b3,
  policySetReachPolicyDefault: w3,
  preferencesClearMemberReachPreference: x3,
  preferencesClearPersonalReachPreference: D3,
  preferencesGetMemberReachPreferences: F3,
  preferencesGetPersonalReachPreferences: B3,
  preferencesGetReachPreferences: E3,
  preferencesGetReachPreferencesCount: M3,
  preferencesSetMemberReachPreference: U3,
  preferencesSetPersonalReachPreference: $3,
  rulesCreateReachRule: W3,
  rulesDisableReachRule: z3,
  rulesEnableReachRule: _3,
  rulesGetReachRule: q3,
  rulesGetReachRules: O3,
  rulesGetReachRulesCount: H3,
  rulesUpdateReachRuleAudience: V3,
  suppressionsCreateReachSuppression: J3,
  suppressionsGetReachSuppressions: Q3,
  suppressionsGetReachSuppressionsCount: N3
}, Symbol.toStringTag, { value: "Module" })), x = B($()), K3 = (e) => ((e == null ? void 0 : e.client) ?? x).get({
  url: "/version",
  ...e
}), Y3 = (e) => ((e == null ? void 0 : e.client) ?? x).get({
  url: "/health",
  ...e
}), Z3 = (e) => ((e == null ? void 0 : e.client) ?? x).get({
  url: "/hello",
  ...e
}), X3 = (e) => (e.client ?? x).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p3 = (e) => (e.client ?? x).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o3 = (e) => (e.client ?? x).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e4 = (e) => (e.client ?? x).get({
  url: "/confirmEmail",
  ...e
}), r4 = (e) => (e.client ?? x).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a4 = (e) => (e.client ?? x).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t4 = (e) => (e.client ?? x).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c4 = (e) => (e.client ?? x).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l4 = (e) => ((e == null ? void 0 : e.client) ?? x).get({
  url: "/manage/info",
  ...e
}), n4 = (e) => (e.client ?? x).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u4 = (e) => ((e == null ? void 0 : e.client) ?? x).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), i4 = (e) => ((e == null ? void 0 : e.client) ?? x).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), s4 = (e) => ((e == null ? void 0 : e.client) ?? x).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), d4 = (e) => ((e == null ? void 0 : e.client) ?? x).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), g4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/LoyaltyPrograms/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/LoyaltyPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h4 = (e) => (e.client ?? x).post({
  url: "/api/v2/SalesService/LoyaltyPrograms",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m4 = (e) => (e.client ?? x).delete({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e
}), C4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e
}), S4 = (e) => (e.client ?? x).patch({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y4 = (e) => (e.client ?? x).put({
  url: "/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/Margins/{marginId}/Details",
  ...e
}), P4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/PointOfSales/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/PointOfSales",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I4 = (e) => (e.client ?? x).post({
  url: "/api/v2/SalesService/PointOfSales",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j4 = (e) => (e.client ?? x).delete({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e
}), A4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e
}), G4 = (e) => (e.client ?? x).patch({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L4 = (e) => (e.client ?? x).put({
  url: "/api/v2/SalesService/PointOfSales/{pointOfSaleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/SalesLiteratures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/SalesLiteratures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k4 = (e) => (e.client ?? x).post({
  url: "/api/v2/SalesService/SalesLiteratures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/SalesLiteratures/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E4 = (e) => (e.client ?? x).delete({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e
}), M4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e
}), D4 = (e) => (e.client ?? x).patch({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B4 = (e) => (e.client ?? x).put({
  url: "/api/v2/SalesService/SalesLiteratures/{salesLiteratureId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/Stores/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/Stores",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F4 = (e) => (e.client ?? x).post({
  url: "/api/v2/SalesService/Stores",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U4 = (e) => (e.client ?? x).delete({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e
}), O4 = (e) => (e.client ?? x).get({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e
}), W4 = (e) => (e.client ?? x).patch({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H4 = (e) => (e.client ?? x).put({
  url: "/api/v2/SalesService/Stores/{storeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loyaltyProgramsCountLoyaltyPrograms: g4,
  loyaltyProgramsCreateLoyaltyProgram: h4,
  loyaltyProgramsDeleteLoyaltyProgram: m4,
  loyaltyProgramsGetLoyaltyProgram: C4,
  loyaltyProgramsGetLoyaltyPrograms: v4,
  loyaltyProgramsPatchLoyaltyProgram: S4,
  loyaltyProgramsUpdateLoyaltyProgram: y4,
  marginsGetQuote: T4,
  platformGetHealth: Y3,
  platformGetHello: Z3,
  platformGetManageInfo: l4,
  platformGetVersion: K3,
  platformMapIdentityApiConfirmEmail: e4,
  platformPostAccountLogout: i4,
  platformPostAccountManageDownloadPersonalData: d4,
  platformPostAccountManageLinkExternalLogin: s4,
  platformPostAccountPerformExternalLogin: u4,
  platformPostForgotPassword: a4,
  platformPostLogin: p3,
  platformPostManage2Fa: c4,
  platformPostManageInfo: n4,
  platformPostRefresh: o3,
  platformPostRegister: X3,
  platformPostResendConfirmationEmail: r4,
  platformPostResetPassword: t4,
  pointOfSalesCountPointOfSales: P4,
  pointOfSalesCreatePointOfSale: I4,
  pointOfSalesDeletePointOfSale: j4,
  pointOfSalesGetPointOfSale: A4,
  pointOfSalesGetPointOfSales: f4,
  pointOfSalesPatchPointOfSale: G4,
  pointOfSalesUpdatePointOfSale: L4,
  salesLiteraturesCountSalesLiteratures: R4,
  salesLiteraturesCreateSalesLiterature: k4,
  salesLiteraturesDeleteSalesLiterature: E4,
  salesLiteraturesGetExtendedSalesLiteratures: w4,
  salesLiteraturesGetSalesLiterature: M4,
  salesLiteraturesGetSalesLiteratures: b4,
  salesLiteraturesPatchSalesLiterature: D4,
  salesLiteraturesUpdateSalesLiterature: B4,
  storesCountStores: $4,
  storesCreateStore: F4,
  storesDeleteStore: U4,
  storesGetStore: O4,
  storesGetStores: x4,
  storesPatchStore: W4,
  storesUpdateStore: H4
}, Symbol.toStringTag, { value: "Module" })), K = B($()), q4 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/version",
  ...e
}), V4 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/health",
  ...e
}), _4 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/hello",
  ...e
}), z4 = (e) => (e.client ?? K).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q4 = (e) => (e.client ?? K).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J4 = (e) => (e.client ?? K).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N4 = (e) => (e.client ?? K).get({
  url: "/confirmEmail",
  ...e
}), K4 = (e) => (e.client ?? K).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y4 = (e) => (e.client ?? K).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z4 = (e) => (e.client ?? K).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X4 = (e) => (e.client ?? K).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p4 = (e) => ((e == null ? void 0 : e.client) ?? K).get({
  url: "/manage/info",
  ...e
}), o4 = (e) => (e.client ?? K).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), r5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), a5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), t5 = (e) => ((e == null ? void 0 : e.client) ?? K).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), c5 = (e) => (e.client ?? K).get({
  url: "/api/v2/SearchService/Query",
  ...e
}), l5 = (e) => (e.client ?? K).post({
  url: "/api/v2/SearchService/Query",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n5 = (e) => (e.client ?? K).get({
  url: "/api/v2/SearchService/Availability",
  ...e
}), u5 = (e) => (e.client ?? K).post({
  url: "/api/v2/SearchService/Index/Provision",
  ...e
}), cme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: V4,
  platformGetHello: _4,
  platformGetManageInfo: p4,
  platformGetVersion: q4,
  platformMapIdentityApiConfirmEmail: N4,
  platformPostAccountLogout: r5,
  platformPostAccountManageDownloadPersonalData: t5,
  platformPostAccountManageLinkExternalLogin: a5,
  platformPostAccountPerformExternalLogin: e5,
  platformPostForgotPassword: Y4,
  platformPostLogin: Q4,
  platformPostManage2Fa: X4,
  platformPostManageInfo: o4,
  platformPostRefresh: J4,
  platformPostRegister: z4,
  platformPostResendConfirmationEmail: K4,
  platformPostResetPassword: Z4,
  searchGetAvailability: n5,
  searchProvisionIndex: u5,
  searchSearch: c5,
  searchSearchStructured: l5
}, Symbol.toStringTag, { value: "Module" })), y = B($()), i5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}",
  ...e
}), g5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/Provision",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h5 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Permissions/{permission}",
  ...e
}), m5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Enable",
  ...e
}), C5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Suspend",
  ...e
}), S5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/ApplicationPrincipals/{principalId}/Disable",
  ...e
}), y5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Applications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Applications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f5 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e
}), I5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e
}), j5 = (e) => (e.client ?? y).patch({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A5 = (e) => (e.client ?? y).put({
  url: "/api/v2/SecurityService/Applications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}/Permissions",
  ...e
}), L5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Applications/{applicationId}/Roles",
  ...e
}), R5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/version",
  ...e
}), b5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/health",
  ...e
}), k5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/hello",
  ...e
}), w5 = (e) => (e.client ?? y).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E5 = (e) => (e.client ?? y).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M5 = (e) => (e.client ?? y).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D5 = (e) => (e.client ?? y).get({
  url: "/confirmEmail",
  ...e
}), B5 = (e) => (e.client ?? y).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $5 = (e) => (e.client ?? y).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x5 = (e) => (e.client ?? y).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F5 = (e) => (e.client ?? y).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/manage/info",
  ...e
}), O5 = (e) => (e.client ?? y).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W5 = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), H5 = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), q5 = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), V5 = (e) => ((e == null ? void 0 : e.client) ?? y).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), _5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Logs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Logs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/SecurityService/Logs/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J5 = (e) => ((e == null ? void 0 : e.client) ?? y).get({
  url: "/api/v2/SecurityService/Logs/Me/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications",
  ...e
}), K5 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/OAuthApplications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications/Count",
  ...e
}), Z5 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e
}), X5 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e
}), p5 = (e) => (e.client ?? y).patch({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o5 = (e) => (e.client ?? y).put({
  url: "/api/v2/SecurityService/OAuthApplications/{applicationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations",
  ...e
}), r6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations/Count",
  ...e
}), a6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/OAuthApplications/Authorizations/{authorizationId}",
  ...e
}), t6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e
}), u6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e
}), i6 = (e) => (e.client ?? y).patch({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s6 = (e) => (e.client ?? y).put({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}",
  ...e
}), g6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}",
  ...e
}), v6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles",
  ...e
}), h6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications",
  ...e
}), m6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments",
  ...e
}), C6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}",
  ...e
}), S6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}",
  ...e
}), y6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}",
  ...e
}), T6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}",
  ...e
}), P6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Permissions/ByEnrollment/{enrollmentId}",
  ...e
}), f6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Roles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e
}), G6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e
}), L6 = (e) => (e.client ?? y).patch({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R6 = (e) => (e.client ?? y).put({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions",
  ...e
}), k6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}",
  ...e
}), w6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}",
  ...e
}), E6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments",
  ...e
}), M6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications",
  ...e
}), D6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}",
  ...e
}), B6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}",
  ...e
}), $6 = (e) => (e.client ?? y).delete({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}",
  ...e
}), x6 = (e) => (e.client ?? y).post({
  url: "/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}",
  ...e
}), F6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Roles/ByEnrollment/{enrollmentId}",
  ...e
}), U6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/SecurityCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/SecurityCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/SecurityLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/SecurityLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Webhooks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V6 = (e) => (e.client ?? y).get({
  url: "/api/v2/SecurityService/Webhooks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applicationPrincipalsDisableApplicationPrincipal: S5,
  applicationPrincipalsEnableApplicationPrincipal: m5,
  applicationPrincipalsGetApplicationPrincipal: d5,
  applicationPrincipalsGetApplicationPrincipals: i5,
  applicationPrincipalsGetApplicationPrincipalsCount: s5,
  applicationPrincipalsGrantPermission: v5,
  applicationPrincipalsProvisionApplicationPrincipal: g5,
  applicationPrincipalsRevokePermission: h5,
  applicationPrincipalsSuspendApplicationPrincipal: C5,
  applicationsCreateBusinessApplication: T5,
  applicationsDeleteBusinessApplication: f5,
  applicationsGetBusinessApplicationById: I5,
  applicationsGetBusinessApplications: y5,
  applicationsGetBusinessApplicationsCount: P5,
  applicationsGetPermissionsByApplication: G5,
  applicationsGetRolesByApplication: L5,
  applicationsPatchBusinessApplication: j5,
  applicationsUpdateBusinessApplication: A5,
  logsGetLogs: _5,
  logsGetLogsCount: z5,
  logsGetMyLogs: Q5,
  logsGetMyLogsCount: J5,
  oAuthApplicationsCreateOAuthApplication: K5,
  oAuthApplicationsDeleteOAuthApplication: Z5,
  oAuthApplicationsGetOAuthApplicationById: X5,
  oAuthApplicationsGetOAuthApplications: N5,
  oAuthApplicationsGetOAuthApplicationsCount: Y5,
  oAuthApplicationsGetOAuthAuthorizationById: a6,
  oAuthApplicationsGetOAuthAuthorizations: e6,
  oAuthApplicationsGetOAuthAuthorizationsCount: r6,
  oAuthApplicationsPatchOAuthApplication: p5,
  oAuthApplicationsUpdateOAuthApplication: o5,
  permissionsAssignPermissionToBusinessApplication: T6,
  permissionsAssignPermissionToEnrollment: S6,
  permissionsAssignRoleToPermission: g6,
  permissionsCreatePermission: c6,
  permissionsDeletePermission: n6,
  permissionsGetApplicationsByPermission: h6,
  permissionsGetEnrollmentsByPermission: m6,
  permissionsGetPermission: u6,
  permissionsGetPermissions: t6,
  permissionsGetPermissionsByEnrollment: P6,
  permissionsGetPermissionsCount: l6,
  permissionsGetRolesByPermission: v6,
  permissionsPatchPermission: i6,
  permissionsRevokePermissionFromBusinessApplication: y6,
  permissionsRevokePermissionFromEnrollment: C6,
  permissionsRevokeRoleFromPermission: d6,
  permissionsUpdatePermission: s6,
  platformGetHealth: b5,
  platformGetHello: k5,
  platformGetManageInfo: U5,
  platformGetVersion: R5,
  platformMapIdentityApiConfirmEmail: D5,
  platformPostAccountLogout: H5,
  platformPostAccountManageDownloadPersonalData: V5,
  platformPostAccountManageLinkExternalLogin: q5,
  platformPostAccountPerformExternalLogin: W5,
  platformPostForgotPassword: $5,
  platformPostLogin: E5,
  platformPostManage2Fa: F5,
  platformPostManageInfo: O5,
  platformPostRefresh: M5,
  platformPostRegister: w5,
  platformPostResendConfirmationEmail: B5,
  platformPostResetPassword: x5,
  rolesAssignPermissionToRole: w6,
  rolesAssignRoleToBusinessApplication: x6,
  rolesAssignRoleToEnrollment: B6,
  rolesCreateRole: I6,
  rolesDeleteRole: A6,
  rolesGetApplicationsByRole: M6,
  rolesGetEnrollmentsByRole: E6,
  rolesGetRole: G6,
  rolesGetRolePermissions: b6,
  rolesGetRoles: f6,
  rolesGetRolesByEnrollment: F6,
  rolesGetRolesCount: j6,
  rolesPatchRole: L6,
  rolesRevokePermissionFromRole: k6,
  rolesRevokeRoleFromBusinessApplication: $6,
  rolesRevokeRoleFromEnrollment: D6,
  rolesUpdateRole: R6,
  securityCertificatesGetSecurityCertificates: U6,
  securityCertificatesGetSecurityCertificatesCount: O6,
  securityLogsGetSecurityLogs: W6,
  securityLogsGetSecurityLogsCount: H6,
  webhooksGetWebhookRequests: q6,
  webhooksGetWebhookRequestsCount: V6
}, Symbol.toStringTag, { value: "Module" })), G = B($()), _6 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/version",
  ...e
}), z6 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/health",
  ...e
}), Q6 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/hello",
  ...e
}), J6 = (e) => (e.client ?? G).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N6 = (e) => (e.client ?? G).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K6 = (e) => (e.client ?? G).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y6 = (e) => (e.client ?? G).get({
  url: "/confirmEmail",
  ...e
}), Z6 = (e) => (e.client ?? G).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X6 = (e) => (e.client ?? G).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p6 = (e) => (e.client ?? G).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o6 = (e) => (e.client ?? G).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e7 = (e) => ((e == null ? void 0 : e.client) ?? G).get({
  url: "/manage/info",
  ...e
}), r7 = (e) => (e.client ?? G).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), t7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), c7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), l7 = (e) => ((e == null ? void 0 : e.client) ?? G).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), n7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceCases",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e
}), d7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e
}), g7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceCases/{serviceCaseId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceCaseTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e
}), y7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e
}), T7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceCaseTypes/{serviceCaseTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceLevelAgreements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e
}), G7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e
}), L7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), b7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceLevels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e
}), B7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e
}), $7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/Services/{serviceId}/ServiceLevels/{serviceLevelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/ServiceQueues",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e
}), H7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e
}), q7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/ServiceQueues/{serviceQueueId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z7 = (e) => (e.client ?? G).post({
  url: "/api/v2/ServicesService/Services",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Q7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), J7 = (e) => (e.client ?? G).delete({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e
}), N7 = (e) => (e.client ?? G).get({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e
}), K7 = (e) => (e.client ?? G).patch({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y7 = (e) => (e.client ?? G).put({
  url: "/api/v2/ServicesService/Services/{serviceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: z6,
  platformGetHello: Q6,
  platformGetManageInfo: e7,
  platformGetVersion: _6,
  platformMapIdentityApiConfirmEmail: Y6,
  platformPostAccountLogout: t7,
  platformPostAccountManageDownloadPersonalData: l7,
  platformPostAccountManageLinkExternalLogin: c7,
  platformPostAccountPerformExternalLogin: a7,
  platformPostForgotPassword: X6,
  platformPostLogin: N6,
  platformPostManage2Fa: o6,
  platformPostManageInfo: r7,
  platformPostRefresh: K6,
  platformPostRegister: J6,
  platformPostResendConfirmationEmail: Z6,
  platformPostResetPassword: p6,
  serviceCaseTypesCreateServiceCaseType: m7,
  serviceCaseTypesDeleteServiceCaseType: S7,
  serviceCaseTypesGetServiceCaseTypeById: y7,
  serviceCaseTypesGetServiceCaseTypes: h7,
  serviceCaseTypesGetServiceCaseTypesCount: C7,
  serviceCaseTypesPatchServiceCaseType: T7,
  serviceCaseTypesUpdateServiceCaseType: P7,
  serviceCasesCreateServiceCase: u7,
  serviceCasesDeleteServiceCase: s7,
  serviceCasesGetServiceCaseById: d7,
  serviceCasesGetServiceCases: n7,
  serviceCasesGetServiceCasesCount: i7,
  serviceCasesPatchServiceCase: g7,
  serviceCasesUpdateServiceCase: v7,
  serviceLevelAgreementsCreateServiceLevelAgreement: I7,
  serviceLevelAgreementsDeleteServiceLevelAgreement: A7,
  serviceLevelAgreementsGetServiceLevelAgreementById: G7,
  serviceLevelAgreementsGetServiceLevelAgreements: f7,
  serviceLevelAgreementsGetServiceLevelAgreementsCount: j7,
  serviceLevelAgreementsPatchServiceLevelAgreement: L7,
  serviceLevelAgreementsUpdateServiceLevelAgreement: R7,
  serviceLevelsCountAllServiceLevels: k7,
  serviceLevelsCreateServiceLevel: E7,
  serviceLevelsDeleteServiceLevel: D7,
  serviceLevelsGetAllServiceLevels: b7,
  serviceLevelsGetServiceLevelById: B7,
  serviceLevelsGetServiceLevels: w7,
  serviceLevelsGetServiceLevelsCount: M7,
  serviceLevelsPatchServiceLevel: $7,
  serviceLevelsUpdateServiceLevel: x7,
  serviceQueuesCreateServiceQueue: U7,
  serviceQueuesDeleteServiceQueue: W7,
  serviceQueuesGetServiceQueueById: H7,
  serviceQueuesGetServiceQueues: F7,
  serviceQueuesGetServiceQueuesCount: O7,
  serviceQueuesPatchServiceQueue: q7,
  serviceQueuesUpdateServiceQueue: V7,
  servicesCreateService: z7,
  servicesDeleteService: J7,
  servicesGetServiceById: N7,
  servicesGetServices: _7,
  servicesGetServicesCount: Q7,
  servicesPatchService: K7,
  servicesUpdateService: Y7
}, Symbol.toStringTag, { value: "Module" })), T = B($()), Z7 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X7 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/BillsOfLading",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p7 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o7 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e
}), e8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e
}), r8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), n8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e
}), u8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e
}), i8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/BillsOfLading/{billOfLadingId}/Lines/{lineId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/version",
  ...e
}), g8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/health",
  ...e
}), v8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/hello",
  ...e
}), h8 = (e) => (e.client ?? T).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m8 = (e) => (e.client ?? T).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C8 = (e) => (e.client ?? T).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S8 = (e) => (e.client ?? T).get({
  url: "/confirmEmail",
  ...e
}), y8 = (e) => (e.client ?? T).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T8 = (e) => (e.client ?? T).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P8 = (e) => (e.client ?? T).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f8 = (e) => (e.client ?? T).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I8 = (e) => ((e == null ? void 0 : e.client) ?? T).get({
  url: "/manage/info",
  ...e
}), j8 = (e) => (e.client ?? T).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), G8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), L8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), R8 = (e) => ((e == null ? void 0 : e.client) ?? T).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), b8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), w8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e
}), M8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e
}), D8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ItemShippingPolicies/{policyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/Shipments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e
}), O8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e
}), W8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), H8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/Shipments/{shipmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), q8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingClasses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), z8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e
}), Q8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e
}), J8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N8 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingClasses/{classId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y8 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingCouriers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Z8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X8 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e
}), p8 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e
}), o8 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), e9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingCouriers/{courierId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), r9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingLabels",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e
}), l9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e
}), n9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), u9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingLabels/{labelId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingMethods",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), g9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e
}), v9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e
}), h9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), m9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingMethods/{methodId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingRegions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e
}), P9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e
}), f9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), I9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingRegions/{regionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), j9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), A9 = (e) => (e.client ?? T).post({
  url: "/api/v2/ShipmentsService/ShippingZones",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L9 = (e) => (e.client ?? T).delete({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e
}), R9 = (e) => (e.client ?? T).get({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e
}), b9 = (e) => (e.client ?? T).patch({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k9 = (e) => (e.client ?? T).put({
  url: "/api/v2/ShipmentsService/ShippingZones/{zoneId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ume = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  billsOfLadingCreateBillOfLading: X7,
  billsOfLadingCreateBillOfLadingLine: c8,
  billsOfLadingDeleteBillOfLading: o7,
  billsOfLadingDeleteBillOfLadingLine: n8,
  billsOfLadingGetBillOfLadingById: e8,
  billsOfLadingGetBillOfLadingLineById: u8,
  billsOfLadingGetBillOfLadingLines: t8,
  billsOfLadingGetBillOfLadingLinesCount: l8,
  billsOfLadingGetBillsOfLading: Z7,
  billsOfLadingGetBillsOfLadingCount: p7,
  billsOfLadingPatchBillOfLading: r8,
  billsOfLadingPatchBillOfLadingLine: i8,
  billsOfLadingUpdateBillOfLading: a8,
  billsOfLadingUpdateBillOfLadingLine: s8,
  itemShippingPoliciesCreateItemShippingPolicy: k8,
  itemShippingPoliciesDeleteItemShippingPolicy: E8,
  itemShippingPoliciesGetItemShippingPolicies: b8,
  itemShippingPoliciesGetItemShippingPoliciesCount: w8,
  itemShippingPoliciesGetItemShippingPolicyById: M8,
  itemShippingPoliciesPatchItemShippingPolicy: D8,
  itemShippingPoliciesUpdateItemShippingPolicy: B8,
  platformGetHealth: g8,
  platformGetHello: v8,
  platformGetManageInfo: I8,
  platformGetVersion: d8,
  platformMapIdentityApiConfirmEmail: S8,
  platformPostAccountLogout: G8,
  platformPostAccountManageDownloadPersonalData: R8,
  platformPostAccountManageLinkExternalLogin: L8,
  platformPostAccountPerformExternalLogin: A8,
  platformPostForgotPassword: T8,
  platformPostLogin: m8,
  platformPostManage2Fa: f8,
  platformPostManageInfo: j8,
  platformPostRefresh: C8,
  platformPostRegister: h8,
  platformPostResendConfirmationEmail: y8,
  platformPostResetPassword: P8,
  shipmentsCreateShipment: x8,
  shipmentsDeleteShipment: U8,
  shipmentsGetShipmentById: O8,
  shipmentsGetShipments: $8,
  shipmentsGetShipmentsCount: F8,
  shipmentsPatchShipment: W8,
  shipmentsUpdateShipment: H8,
  shippingClassesCreateShippingClass: V8,
  shippingClassesDeleteShippingClass: z8,
  shippingClassesGetShippingClassById: Q8,
  shippingClassesGetShippingClasses: q8,
  shippingClassesGetShippingClassesCount: _8,
  shippingClassesPatchShippingClass: J8,
  shippingClassesUpdateShippingClass: N8,
  shippingCouriersCreateShippingCourier: Y8,
  shippingCouriersDeleteShippingCourier: X8,
  shippingCouriersGetShippingCourierById: p8,
  shippingCouriersGetShippingCouriers: K8,
  shippingCouriersGetShippingCouriersCount: Z8,
  shippingCouriersPatchShippingCourier: o8,
  shippingCouriersUpdateShippingCourier: e9,
  shippingLabelsCreateShippingLabel: a9,
  shippingLabelsDeleteShippingLabel: c9,
  shippingLabelsGetShippingLabelById: l9,
  shippingLabelsGetShippingLabels: r9,
  shippingLabelsGetShippingLabelsCount: t9,
  shippingLabelsPatchShippingLabel: n9,
  shippingLabelsUpdateShippingLabel: u9,
  shippingMethodsCreateShippingMethod: s9,
  shippingMethodsDeleteShippingMethod: g9,
  shippingMethodsGetShippingMethodById: v9,
  shippingMethodsGetShippingMethods: i9,
  shippingMethodsGetShippingMethodsCount: d9,
  shippingMethodsPatchShippingMethod: h9,
  shippingMethodsUpdateShippingMethod: m9,
  shippingRegionsCreateShippingRegion: S9,
  shippingRegionsDeleteShippingRegion: T9,
  shippingRegionsGetShippingRegionById: P9,
  shippingRegionsGetShippingRegions: C9,
  shippingRegionsGetShippingRegionsCount: y9,
  shippingRegionsPatchShippingRegion: f9,
  shippingRegionsUpdateShippingRegion: I9,
  shippingZonesCreateShippingZone: A9,
  shippingZonesDeleteShippingZone: L9,
  shippingZonesGetShippingZoneById: R9,
  shippingZonesGetShippingZones: j9,
  shippingZonesGetShippingZonesCount: G9,
  shippingZonesPatchShippingZone: b9,
  shippingZonesUpdateShippingZone: k9
}, Symbol.toStringTag, { value: "Module" })), g = B($()), w9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), E9 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D9 = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e
}), B9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e
}), $9 = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x9 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U9 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/Curriculums",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), O9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W9 = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e
}), H9 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e
}), q9 = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), V9 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/Curriculums/{curriculumId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _9 = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/version",
  ...e
}), z9 = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/health",
  ...e
}), Q9 = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/hello",
  ...e
}), J9 = (e) => (e.client ?? g).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), N9 = (e) => (e.client ?? g).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), K9 = (e) => (e.client ?? g).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Y9 = (e) => (e.client ?? g).get({
  url: "/confirmEmail",
  ...e
}), Z9 = (e) => (e.client ?? g).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), X9 = (e) => (e.client ?? g).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), p9 = (e) => (e.client ?? g).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), o9 = (e) => (e.client ?? g).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eX = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/manage/info",
  ...e
}), rX = (e) => (e.client ?? g).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aX = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), tX = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), cX = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), lX = (e) => ((e == null ? void 0 : e.client) ?? g).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), nX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/Skills",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Skills/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e
}), dX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e
}), gX = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/Skills/{skillId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), CX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}",
  ...e
}), SX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), TX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), PX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e
}), fX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e
}), IX = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), AX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), GX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), LX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), RX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e
}), bX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e
}), kX = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialGroups/{socialGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), EX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), MX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialPosts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), DX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), BX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e
}), $X = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e
}), xX = (e) => (e.client ?? g).patch({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), FX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), UX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), OX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), WX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), HX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e
}), qX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e
}), VX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _X = (e) => (e.client ?? g).post({
  ...u,
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), zX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), QX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), JX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), NX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e
}), KX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e
}), YX = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ZX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), XX = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pX = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oX = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e
}), e0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e
}), r0 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), a0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), t0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), c0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), l0 = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e
}), n0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e
}), u0 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}/Reactions/{reactionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), i0 = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), s0 = (e) => ((e == null ? void 0 : e.client) ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), d0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}",
  ...e
}), g0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), v0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), h0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/GroupEnrollments/Count",
  ...e
}), m0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), C0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), S0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), y0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), T0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), P0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), f0 = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), I0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), j0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}",
  ...e
}), A0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), G0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), L0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), R0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}",
  ...e
}), b0 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), k0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}/Archive",
  ...e
}), w0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/{notificationId}/Unarchive",
  ...e
}), E0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), M0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), D0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), B0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Direct",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), x0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), F0 = (e) => (e.client ?? g).get({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), U0 = (e) => (e.client ?? g).delete({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}",
  ...e
}), O0 = (e) => (e.client ?? g).put({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), W0 = (e) => (e.client ?? g).post({
  url: "/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Read",
  ...e
}), ime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curriculumExperiencesCreateCurriculumExperience: E9,
  curriculumExperiencesDeleteCurriculumExperience: D9,
  curriculumExperiencesGetCurriculumExperience: B9,
  curriculumExperiencesGetCurriculumExperiences: w9,
  curriculumExperiencesGetCurriculumExperiencesCount: M9,
  curriculumExperiencesPatchCurriculumExperience: $9,
  curriculumExperiencesUpdateCurriculumExperience: x9,
  curriculumsCreateCurriculum: U9,
  curriculumsDeleteCurriculum: W9,
  curriculumsGetCurriculum: H9,
  curriculumsGetCurriculums: F9,
  curriculumsGetCurriculumsCount: O9,
  curriculumsPatchCurriculum: q9,
  curriculumsUpdateCurriculum: V9,
  platformGetHealth: z9,
  platformGetHello: Q9,
  platformGetManageInfo: eX,
  platformGetVersion: _9,
  platformMapIdentityApiConfirmEmail: Y9,
  platformPostAccountLogout: tX,
  platformPostAccountManageDownloadPersonalData: lX,
  platformPostAccountManageLinkExternalLogin: cX,
  platformPostAccountPerformExternalLogin: aX,
  platformPostForgotPassword: X9,
  platformPostLogin: N9,
  platformPostManage2Fa: o9,
  platformPostManageInfo: rX,
  platformPostRefresh: K9,
  platformPostRegister: J9,
  platformPostResendConfirmationEmail: Z9,
  platformPostResetPassword: p9,
  skillsCreateSkill: uX,
  skillsDeleteSkill: sX,
  skillsGetSkillById: dX,
  skillsGetSkills: nX,
  skillsGetSkillsCount: iX,
  skillsPatchSkill: gX,
  skillsUpdateSkill: vX,
  socialFeedsCreateFeedPost: yX,
  socialFeedsDeleteFeedPost: PX,
  socialFeedsGetFeedNotifications: hX,
  socialFeedsGetFeedPost: fX,
  socialFeedsGetFeedPosts: SX,
  socialFeedsGetFeedPostsCount: TX,
  socialFeedsGetNotification: CX,
  socialFeedsGetNotificationsCount: mX,
  socialFeedsPatchFeedPost: IX,
  socialFeedsUpdateFeedPost: jX,
  socialGroupsCountSocialGroups: LX,
  socialGroupsCreateSocialGroup: GX,
  socialGroupsDeleteSocialGroup: RX,
  socialGroupsGetSocialGroupById: bX,
  socialGroupsGetSocialGroups: AX,
  socialGroupsPatchSocialGroup: kX,
  socialGroupsUpdateSocialGroup: wX,
  socialPostsCreateSocialCommentReaction: t0,
  socialPostsCreateSocialPost: MX,
  socialPostsCreateSocialPostAttachment: OX,
  socialPostsCreateSocialPostComment: XX,
  socialPostsCreateSocialPostReaction: QX,
  socialPostsDeleteSocialCommentReaction: l0,
  socialPostsDeleteSocialPost: BX,
  socialPostsDeleteSocialPostAttachment: HX,
  socialPostsDeleteSocialPostComment: oX,
  socialPostsDeleteSocialPostReaction: NX,
  socialPostsGetSocialCommentReaction: n0,
  socialPostsGetSocialCommentReactions: a0,
  socialPostsGetSocialCommentReactionsCount: c0,
  socialPostsGetSocialPost: $X,
  socialPostsGetSocialPostAttachment: qX,
  socialPostsGetSocialPostAttachments: UX,
  socialPostsGetSocialPostAttachmentsCount: WX,
  socialPostsGetSocialPostComment: e0,
  socialPostsGetSocialPostComments: ZX,
  socialPostsGetSocialPostCommentsCount: pX,
  socialPostsGetSocialPostReaction: KX,
  socialPostsGetSocialPostReactions: zX,
  socialPostsGetSocialPostReactionsCount: JX,
  socialPostsGetSocialPosts: EX,
  socialPostsGetSocialPostsCount: DX,
  socialPostsPatchSocialPost: xX,
  socialPostsUpdateSocialCommentReaction: u0,
  socialPostsUpdateSocialPost: FX,
  socialPostsUpdateSocialPostAttachment: VX,
  socialPostsUpdateSocialPostComment: r0,
  socialPostsUpdateSocialPostReaction: YX,
  socialPostsUploadSocialPostImageAttachment: _X,
  socialProfilesArchiveNotification: k0,
  socialProfilesCountConversations: D0,
  socialProfilesCountFollowedProfiles: P0,
  socialProfilesCountFollowerProfiles: C0,
  socialProfilesCountFollowers: v0,
  socialProfilesCountFollows: y0,
  socialProfilesCountGroupEnrollments: h0,
  socialProfilesCountMessages: F0,
  socialProfilesCountNotifications: L0,
  socialProfilesCountSocialProfiles: s0,
  socialProfilesCreateConversation: M0,
  socialProfilesCreateMessage: x0,
  socialProfilesCreateNotification: G0,
  socialProfilesDeleteMessage: U0,
  socialProfilesFollow: j0,
  socialProfilesFollowExists: I0,
  socialProfilesGetConversations: E0,
  socialProfilesGetFollowedProfiles: T0,
  socialProfilesGetFollowerProfiles: m0,
  socialProfilesGetFollowers: g0,
  socialProfilesGetFollows: S0,
  socialProfilesGetMessages: $0,
  socialProfilesGetNotificationById: R0,
  socialProfilesGetNotifications: A0,
  socialProfilesGetOrCreateDirectConversation: B0,
  socialProfilesGetSocialProfile: d0,
  socialProfilesGetSocialProfiles: i0,
  socialProfilesMarkConversationRead: W0,
  socialProfilesMarkNotificationRead: b0,
  socialProfilesUnarchiveNotification: w0,
  socialProfilesUnfollow: f0,
  socialProfilesUpdateMessage: O0
}, Symbol.toStringTag, { value: "Module" })), F = B($()), H0 = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Avatars/{socialProfileId}",
  ...e
}), q0 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/api/v2/StorageService/Avatars/User",
  ...e
}), V0 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/User",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), _0 = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Avatars/User/{userId}",
  ...e
}), z0 = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Avatars/Tenant/{tenantId}",
  ...e
}), Q0 = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/Tenant/{tenantId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), J0 = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Avatars/Contact/{contactId}",
  ...e
}), N0 = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/StorageService/Avatars/Contacts/{contactId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), K0 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/api/v2/StorageService/Blobs",
  ...e
}), Y0 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/api/v2/StorageService/Blobs/Single",
  ...e
}), Z0 = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/EditorAssets/{fileId}",
  ...e
}), X0 = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  url: "/api/v2/StorageService/EditorAssets/resolve",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), p0 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/version",
  ...e
}), o0 = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/health",
  ...e
}), ep = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/hello",
  ...e
}), rp = (e) => (e.client ?? F).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ap = (e) => (e.client ?? F).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tp = (e) => (e.client ?? F).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cp = (e) => (e.client ?? F).get({
  url: "/confirmEmail",
  ...e
}), lp = (e) => (e.client ?? F).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), np = (e) => (e.client ?? F).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), up = (e) => (e.client ?? F).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ip = (e) => (e.client ?? F).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sp = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  url: "/manage/info",
  ...e
}), dp = (e) => (e.client ?? F).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), vp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), hp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), mp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Cp = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  ...u,
  url: "/api/v2/StorageService/Files",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Sp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/api/v2/StorageService/Files",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), yp = (e) => ((e == null ? void 0 : e.client) ?? F).get({
  ...u,
  url: "/api/v2/StorageService/Files/Count",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Tp = (e) => (e.client ?? F).delete({
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e
}), Pp = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e
}), fp = (e) => (e.client ?? F).put({
  ...u,
  url: "/api/v2/StorageService/Files/{fileId}",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ip = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Files/{fileId}/Raw",
  ...e
}), jp = (e) => (e.client ?? F).get({
  url: "/api/v2/StorageService/Files/{fileId}/Thumbnail",
  ...e
}), Ap = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/single",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Gp = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/single",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Lp = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Rp = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/users/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), kp = (e) => (e.client ?? F).post({
  ...u,
  url: "/api/v2/fs/radzen/users/{recordType}/{recordId}/upload/image",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), wp = (e) => (e.client ?? F).put({
  url: "/api/v2/fs/radzen/tenants/{tenantId}/upload/stream",
  ...e
}), Ep = (e) => (e.client ?? F).put({
  url: "/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/stream",
  ...e
}), Mp = (e) => ((e == null ? void 0 : e.client) ?? F).post({
  ...u,
  url: "/api/v2/StorageService/Uploads",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), sme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  avatarsGetAvatar: H0,
  avatarsGetContactAvatar: J0,
  avatarsGetCurrentUserAvatar: q0,
  avatarsGetTenantAvatar: z0,
  avatarsGetUserAvatar: _0,
  avatarsUpdateContactAvatar: N0,
  avatarsUpdateTenantAvatar: Q0,
  avatarsUpdateUserAvatar: V0,
  blobsGetBlob: Y0,
  blobsGetBlobs: K0,
  editorAssetsGetEditorAsset: Z0,
  editorAssetsPostEditorAssetsResolve: X0,
  filesCreateFile: Sp,
  filesDeleteFile: Tp,
  filesDownloadFile: Ip,
  filesGetFile: Pp,
  filesGetFileThumbnail: jp,
  filesGetFiles: Cp,
  filesGetFilesCount: yp,
  filesUpdateFile: fp,
  platformGetHealth: o0,
  platformGetHello: ep,
  platformGetManageInfo: sp,
  platformGetVersion: p0,
  platformMapIdentityApiConfirmEmail: cp,
  platformPostAccountLogout: vp,
  platformPostAccountManageDownloadPersonalData: mp,
  platformPostAccountManageLinkExternalLogin: hp,
  platformPostAccountPerformExternalLogin: gp,
  platformPostForgotPassword: np,
  platformPostLogin: ap,
  platformPostManage2Fa: ip,
  platformPostManageInfo: dp,
  platformPostRefresh: tp,
  platformPostRegister: rp,
  platformPostResendConfirmationEmail: lp,
  platformPostResetPassword: up,
  radzenEditorRadzenUploadImage: Lp,
  radzenEditorRadzenUploadImageScoped: Rp,
  radzenEditorRadzenUploadSingle: Ap,
  radzenEditorRadzenUploadSingleScoped: Gp,
  radzenEditorRadzenUploadStream: wp,
  radzenEditorRadzenUploadStreamScoped: Ep,
  radzenEditorRadzenUploadUserImage: bp,
  radzenEditorRadzenUploadUserImageScoped: kp,
  uploadsSaveFile: Mp
}, Symbol.toStringTag, { value: "Module" })), q = B($()), Dp = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bp = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $p = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/Purchase",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xp = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fp = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/CommercialSubscriptions/{subscriptionId}/PayableObligation",
  ...e
}), Up = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/version",
  ...e
}), Op = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/health",
  ...e
}), Wp = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/hello",
  ...e
}), Hp = (e) => (e.client ?? q).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qp = (e) => (e.client ?? q).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vp = (e) => (e.client ?? q).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _p = (e) => (e.client ?? q).get({
  url: "/confirmEmail",
  ...e
}), zp = (e) => (e.client ?? q).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qp = (e) => (e.client ?? q).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jp = (e) => (e.client ?? q).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Np = (e) => (e.client ?? q).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kp = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/manage/info",
  ...e
}), Yp = (e) => (e.client ?? q).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zp = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Xp = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), pp = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), op = (e) => ((e == null ? void 0 : e.client) ?? q).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), eo = (e) => ((e == null ? void 0 : e.client) ?? q).get({
  url: "/api/v2/SubscriptionsService/PlatformPricing",
  ...e
}), ro = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ao = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), to = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), co = (e) => (e.client ?? q).delete({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e
}), lo = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e
}), no = (e) => (e.client ?? q).patch({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uo = (e) => (e.client ?? q).put({
  url: "/api/v2/SubscriptionsService/SubscriptionPlans/{planId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), io = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), so = (e) => (e.client ?? q).post({
  url: "/api/v2/SubscriptionsService/Subscriptions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), go = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vo = (e) => (e.client ?? q).delete({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e
}), ho = (e) => (e.client ?? q).get({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e
}), mo = (e) => (e.client ?? q).patch({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Co = (e) => (e.client ?? q).put({
  url: "/api/v2/SubscriptionsService/Subscriptions/{subscriptionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commercialSubscriptionsEstablishCommercialSubscription: Bp,
  commercialSubscriptionsGetCommercialSubscriptions: Dp,
  commercialSubscriptionsGetCommercialSubscriptionsCount: xp,
  commercialSubscriptionsGetSubscriptionPayableObligation: Fp,
  commercialSubscriptionsPurchaseOffering: $p,
  platformGetHealth: Op,
  platformGetHello: Wp,
  platformGetManageInfo: Kp,
  platformGetVersion: Up,
  platformMapIdentityApiConfirmEmail: _p,
  platformPostAccountLogout: Xp,
  platformPostAccountManageDownloadPersonalData: op,
  platformPostAccountManageLinkExternalLogin: pp,
  platformPostAccountPerformExternalLogin: Zp,
  platformPostForgotPassword: Qp,
  platformPostLogin: qp,
  platformPostManage2Fa: Np,
  platformPostManageInfo: Yp,
  platformPostRefresh: Vp,
  platformPostRegister: Hp,
  platformPostResendConfirmationEmail: zp,
  platformPostResetPassword: Jp,
  platformPricingGetPlatformPricing: eo,
  subscriptionPlansCreateSubscriptionPlan: ao,
  subscriptionPlansDeleteSubscriptionPlan: co,
  subscriptionPlansGetSubscriptionPlanById: lo,
  subscriptionPlansGetSubscriptionPlans: ro,
  subscriptionPlansGetSubscriptionPlansCount: to,
  subscriptionPlansPatchSubscriptionPlan: no,
  subscriptionPlansUpdateSubscriptionPlan: uo,
  subscriptionsCreateSubscription: so,
  subscriptionsDeleteSubscription: vo,
  subscriptionsGetSubscriptionById: ho,
  subscriptionsGetSubscriptions: io,
  subscriptionsGetSubscriptionsCount: go,
  subscriptionsPatchSubscription: mo,
  subscriptionsUpdateSubscription: Co
}, Symbol.toStringTag, { value: "Module" })), d = B($()), So = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/version",
  ...e
}), yo = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/health",
  ...e
}), To = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/hello",
  ...e
}), Po = (e) => (e.client ?? d).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fo = (e) => (e.client ?? d).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Io = (e) => (e.client ?? d).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jo = (e) => (e.client ?? d).get({
  url: "/confirmEmail",
  ...e
}), Ao = (e) => (e.client ?? d).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Go = (e) => (e.client ?? d).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lo = (e) => (e.client ?? d).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ro = (e) => (e.client ?? d).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bo = (e) => ((e == null ? void 0 : e.client) ?? d).get({
  url: "/manage/info",
  ...e
}), ko = (e) => (e.client ?? d).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wo = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Eo = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Mo = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Do = (e) => ((e == null ? void 0 : e.client) ?? d).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Bo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $o = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/InquiryRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fo = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e
}), Uo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e
}), Oo = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wo = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/InquiryRequests/{inquiryRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ho = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qo = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/KnowledgeArticles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _o = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e
}), zo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e
}), Qo = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jo = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/KnowledgeArticles/{knowledgeArticleId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), No = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ko = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/MaintenanceVisits",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zo = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e
}), Xo = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e
}), po = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oo = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/MaintenanceVisits/{maintenanceVisitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ree = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/RefundPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), aee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e
}), cee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e
}), lee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/RefundPolicies/{refundPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), iee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/RefundRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), see = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e
}), gee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e
}), vee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/RefundRequests/{refundRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/ReturnPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), See = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e
}), Tee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e
}), Pee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/ReturnPolicies/{returnPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/ReturnRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e
}), Lee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e
}), Ree = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/ReturnRequests/{returnRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportEntitlements",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e
}), Dee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e
}), Bee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequestAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e
}), Wee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e
}), Hee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qee = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e
}), Jee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e
}), Nee = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kee = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Tickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xee = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oee = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/{attachmentId}",
  ...e
}), ere = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTicketPriorities",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), are = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e
}), cre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e
}), lre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ure = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ire = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTickets",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e
}), gre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e
}), vre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}",
  ...e
}), yre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}",
  ...e
}), Tre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}/Messages",
  ...e
}), Pre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/SupportTicketTypes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ire = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e
}), Are = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e
}), Gre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bre = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/WarrantyPolicies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e
}), Ere = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e
}), Mre = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/WarrantyPolicies/{warrantyPolicyId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $re = (e) => (e.client ?? d).post({
  url: "/api/v2/SupportService/WarrantyRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xre = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fre = (e) => (e.client ?? d).delete({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e
}), Ure = (e) => (e.client ?? d).get({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e
}), Ore = (e) => (e.client ?? d).patch({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wre = (e) => (e.client ?? d).put({
  url: "/api/v2/SupportService/WarrantyRequests/{warrantyRequestId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  inquiryRequestsCreateInquiryRequest: $o,
  inquiryRequestsDeleteInquiryRequest: Fo,
  inquiryRequestsGetInquiryRequest: Uo,
  inquiryRequestsGetInquiryRequests: Bo,
  inquiryRequestsGetInquiryRequestsCount: xo,
  inquiryRequestsPatchInquiryRequest: Oo,
  inquiryRequestsUpdateInquiryRequest: Wo,
  knowledgeArticlesCreateKnowledgeArticle: qo,
  knowledgeArticlesDeleteKnowledgeArticle: _o,
  knowledgeArticlesGetKnowledgeArticle: zo,
  knowledgeArticlesGetKnowledgeArticles: Ho,
  knowledgeArticlesGetKnowledgeArticlesCount: Vo,
  knowledgeArticlesPatchKnowledgeArticle: Qo,
  knowledgeArticlesUpdateKnowledgeArticle: Jo,
  maintenanceVisitsCreateMaintenanceVisit: Ko,
  maintenanceVisitsDeleteMaintenanceVisit: Zo,
  maintenanceVisitsGetMaintenanceVisit: Xo,
  maintenanceVisitsGetMaintenanceVisits: No,
  maintenanceVisitsGetMaintenanceVisitsCount: Yo,
  maintenanceVisitsPatchMaintenanceVisit: po,
  maintenanceVisitsUpdateMaintenanceVisit: oo,
  platformGetHealth: yo,
  platformGetHello: To,
  platformGetManageInfo: bo,
  platformGetVersion: So,
  platformMapIdentityApiConfirmEmail: jo,
  platformPostAccountLogout: Eo,
  platformPostAccountManageDownloadPersonalData: Do,
  platformPostAccountManageLinkExternalLogin: Mo,
  platformPostAccountPerformExternalLogin: wo,
  platformPostForgotPassword: Go,
  platformPostLogin: fo,
  platformPostManage2Fa: Ro,
  platformPostManageInfo: ko,
  platformPostRefresh: Io,
  platformPostRegister: Po,
  platformPostResendConfirmationEmail: Ao,
  platformPostResetPassword: Lo,
  refundPoliciesCreateRefundPolicy: ree,
  refundPoliciesDeleteRefundPolicy: tee,
  refundPoliciesGetRefundPolicies: eee,
  refundPoliciesGetRefundPoliciesCount: aee,
  refundPoliciesGetRefundPolicy: cee,
  refundPoliciesPatchRefundPolicy: lee,
  refundPoliciesUpdateRefundPolicy: nee,
  refundRequestsCreateRefundRequest: iee,
  refundRequestsDeleteRefundRequest: dee,
  refundRequestsGetRefundRequest: gee,
  refundRequestsGetRefundRequests: uee,
  refundRequestsGetRefundRequestsCount: see,
  refundRequestsPatchRefundRequest: vee,
  refundRequestsUpdateRefundRequest: hee,
  returnPoliciesCreateReturnPolicy: Cee,
  returnPoliciesDeleteReturnPolicy: yee,
  returnPoliciesGetReturnPolicies: mee,
  returnPoliciesGetReturnPoliciesCount: See,
  returnPoliciesGetReturnPolicy: Tee,
  returnPoliciesPatchReturnPolicy: Pee,
  returnPoliciesUpdateReturnPolicy: fee,
  returnRequestsCreateReturnRequest: jee,
  returnRequestsDeleteReturnRequest: Gee,
  returnRequestsGetReturnRequest: Lee,
  returnRequestsGetReturnRequests: Iee,
  returnRequestsGetReturnRequestsCount: Aee,
  returnRequestsPatchReturnRequest: Ree,
  returnRequestsUpdateReturnRequest: bee,
  supportEntitlementsCreateSupportEntitlement: wee,
  supportEntitlementsDeleteSupportEntitlement: Mee,
  supportEntitlementsGetSupportEntitlement: Dee,
  supportEntitlementsGetSupportEntitlements: kee,
  supportEntitlementsGetSupportEntitlementsCount: Eee,
  supportEntitlementsPatchSupportEntitlement: Bee,
  supportEntitlementsUpdateSupportEntitlement: $ee,
  supportRequestAttachmentsCreateSupportRequestAttachment: Fee,
  supportRequestAttachmentsDeleteSupportRequestAttachment: Oee,
  supportRequestAttachmentsGetSupportRequestAttachment: Wee,
  supportRequestAttachmentsGetSupportRequestAttachments: xee,
  supportRequestAttachmentsGetSupportRequestAttachmentsCount: Uee,
  supportRequestAttachmentsPatchSupportRequestAttachment: Hee,
  supportRequestAttachmentsUpdateSupportRequestAttachment: qee,
  supportRequestsCreateSupportRequest: _ee,
  supportRequestsDeleteSupportRequest: Qee,
  supportRequestsGetSupportRequest: Jee,
  supportRequestsGetSupportRequestAttachmentByRequest: oee,
  supportRequestsGetSupportRequestAttachmentsByRequest: Zee,
  supportRequestsGetSupportRequestAttachmentsCountByRequest: pee,
  supportRequestsGetSupportRequestTickets: Yee,
  supportRequestsGetSupportRequests: Vee,
  supportRequestsGetSupportRequestsCount: zee,
  supportRequestsPatchSupportRequest: Nee,
  supportRequestsRelateSupportRequestToAttachment: Xee,
  supportRequestsUpdateSupportRequest: Kee,
  supportTicketPrioritiesCreateSupportTicketPriority: rre,
  supportTicketPrioritiesDeleteSupportTicketPriority: tre,
  supportTicketPrioritiesGetSupportTicketPriorities: ere,
  supportTicketPrioritiesGetSupportTicketPrioritiesCount: are,
  supportTicketPrioritiesGetSupportTicketPriority: cre,
  supportTicketPrioritiesPatchSupportTicketPriority: lre,
  supportTicketPrioritiesUpdateSupportTicketPriority: nre,
  supportTicketTypesCreateSupportTicketType: fre,
  supportTicketTypesDeleteSupportTicketType: jre,
  supportTicketTypesGetSupportTicketType: Are,
  supportTicketTypesGetSupportTicketTypes: Pre,
  supportTicketTypesGetSupportTicketTypesCount: Ire,
  supportTicketTypesPatchSupportTicketType: Gre,
  supportTicketTypesUpdateSupportTicketType: Lre,
  supportTicketsCreateSupportTicket: ire,
  supportTicketsDeleteSupportTicket: dre,
  supportTicketsDeleteSupportTicketConversation: Sre,
  supportTicketsGetSupportTicket: gre,
  supportTicketsGetSupportTicketConversation: yre,
  supportTicketsGetSupportTicketConversationMessages: Tre,
  supportTicketsGetSupportTicketConversations: mre,
  supportTicketsGetSupportTickets: ure,
  supportTicketsGetSupportTicketsCount: sre,
  supportTicketsPatchSupportTicket: vre,
  supportTicketsRelateSupportTicketToConversation: Cre,
  supportTicketsUpdateSupportTicket: hre,
  warrantyPoliciesCreateWarrantyPolicy: bre,
  warrantyPoliciesDeleteWarrantyPolicy: wre,
  warrantyPoliciesGetWarrantyPolicies: Rre,
  warrantyPoliciesGetWarrantyPoliciesCount: kre,
  warrantyPoliciesGetWarrantyPolicy: Ere,
  warrantyPoliciesPatchWarrantyPolicy: Mre,
  warrantyPoliciesUpdateWarrantyPolicy: Dre,
  warrantyRequestsCreateWarrantyRequest: $re,
  warrantyRequestsDeleteWarrantyRequest: Fre,
  warrantyRequestsGetWarrantyRequest: Ure,
  warrantyRequestsGetWarrantyRequests: Bre,
  warrantyRequestsGetWarrantyRequestsCount: xre,
  warrantyRequestsPatchWarrantyRequest: Ore,
  warrantyRequestsUpdateWarrantyRequest: Wre
}, Symbol.toStringTag, { value: "Module" })), i = B($()), Hre = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Antiforgery/GetAndStoreTokens",
  ...e
}), qre = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Antiforgery/IsRequestValid",
  ...e
}), Vre = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _re = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zre = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}",
  ...e
}), Qre = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/Provision",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jre = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/PaymentsConnector",
  ...e
}), Nre = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kre = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions/{permission}",
  ...e
}), Yre = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Enable",
  ...e
}), Zre = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Suspend",
  ...e
}), Xre = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/ApplicationPrincipals/{principalId}/Disable",
  ...e
}), pre = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ore = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}",
  ...e
}), rae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}",
  ...e
}), aae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/BusinessDomains/{businessDomainId}/Verify",
  ...e
}), tae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Carts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Carts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Carts/{cartId}",
  ...e
}), nae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Carts/{cartId}",
  ...e
}), uae = (e) => ((e == null ? void 0 : e.client) ?? i).delete({
  url: "/api/v2/SystemService/Carts/Guests",
  ...e
}), iae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), vae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e
}), hae = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mae = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Emails/SendBasic",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/version",
  ...e
}), Tae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/health",
  ...e
}), Pae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/hello",
  ...e
}), fae = (e) => (e.client ?? i).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Iae = (e) => (e.client ?? i).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jae = (e) => (e.client ?? i).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aae = (e) => (e.client ?? i).get({
  url: "/confirmEmail",
  ...e
}), Gae = (e) => (e.client ?? i).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lae = (e) => (e.client ?? i).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rae = (e) => (e.client ?? i).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bae = (e) => (e.client ?? i).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/manage/info",
  ...e
}), wae = (e) => (e.client ?? i).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Mae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Dae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Bae = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), $ae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Health",
  ...e
}), xae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Inbox/Messages/{id}",
  ...e
}), Oae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Inbox/Correlations/{correlationId}",
  ...e
}), Wae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Duplicates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Inbox/Duplicates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Expedite",
  ...e
}), Vae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/CancelRetry",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/ReleaseLease",
  ...e
}), zae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/DeadLetter",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Quarantine",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Inbox/Messages/{id}/Replay",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/IPLookups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kae = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/IPLookups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/IPLookups/{ipLookupId}",
  ...e
}), Zae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/IPLookups/{ipLookupId}",
  ...e
}), Xae = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/LicenseAssignments/{licenseId}",
  ...e
}), pae = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/LicenseAssignments",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), oae = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/LicenseAssignments/{licenseId}/{enrollmentId}",
  ...e
}), ete = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses",
  ...e
}), rte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}",
  ...e
}), ate = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Assignments",
  ...e
}), tte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Attributes",
  ...e
}), cte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Features",
  ...e
}), lte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Licensing/Licenses/{licenseId}/Quota",
  ...e
}), nte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Licensing/Licenses/Redeem",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), ute = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Licensing/Licenses/Validate",
  ...e,
  headers: {
    "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
    ...e == null ? void 0 : e.headers
  }
}), ite = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Migrations",
  ...e
}), ste = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Migrations/Migrate",
  ...e
}), dte = (e) => (e.client ?? i).get({
  url: "/api/v2/StudioService/Modules",
  ...e
}), gte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/StudioService/Modules/Data",
  ...e
}), vte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e
}), Ste = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e
}), yte = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Options/Key/{key}",
  ...e
}), fte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ite = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Health",
  ...e
}), jte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ate = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Messages/{id}",
  ...e
}), Lte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Correlations/{correlationId}",
  ...e
}), Rte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Replay",
  ...e
}), bte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Expedite",
  ...e
}), kte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/Cancel",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/DeadLetter",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ete = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Messages/{id}/ReleaseLease",
  ...e
}), Mte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Poison",
  ...e
}), Dte = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Outbox/Poison/Resolve",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Outbox/Tenants/{tenantId}/Poison",
  ...e
}), $te = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Outbox/Tenants/{tenantId}/Poison/Resolve",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Overview",
  ...e
}), Fte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ute = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Portals",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ote = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Portals/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e
}), Hte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e
}), qte = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Portals/{portalId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _te = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zte = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jte = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e
}), Nte = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e
}), Kte = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yte = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xte = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pte = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ote = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ece = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Tenants/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e
}), ace = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e
}), tce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Tenants/{tenantId}/ModuleGrants",
  ...e
}), nce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Tenants/{tenantId}/ModuleGrants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ice = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Tenants/{tenantId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vce = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e
}), hce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e
}), mce = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yce = (e) => ((e == null ? void 0 : e.client) ?? i).post({
  url: "/api/v2/SystemService/Users",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fce = (e) => ((e == null ? void 0 : e.client) ?? i).get({
  url: "/api/v2/SystemService/Users/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ice = (e) => (e.client ?? i).delete({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e
}), jce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e
}), Ace = (e) => (e.client ?? i).patch({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/Extended",
  ...e
}), Rce = (e) => (e.client ?? i).get({
  url: "/api/v2/SystemService/Users/{userId}/AdminDetail",
  ...e
}), bce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Password",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Email/Confirm",
  ...e
}), wce = (e) => (e.client ?? i).put({
  url: "/api/v2/SystemService/Users/{userId}/AdminProfile",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ece = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Emails/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mce = (e) => (e.client ?? i).post({
  url: "/api/v2/SystemService/Users/{userId}/Emails/Send",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  antiforgeryGetAndStoreTokens: Hre,
  antiforgeryIsRequestValid: qre,
  applicationPrincipalsDisableGlobalApplicationPrincipal: Xre,
  applicationPrincipalsEnableGlobalApplicationPrincipal: Yre,
  applicationPrincipalsGetGlobalApplicationPrincipal: zre,
  applicationPrincipalsGetGlobalApplicationPrincipals: Vre,
  applicationPrincipalsGetGlobalApplicationPrincipalsCount: _re,
  applicationPrincipalsGrantGlobalApplicationPrincipalPermission: Nre,
  applicationPrincipalsProvisionGlobalApplicationPrincipal: Qre,
  applicationPrincipalsProvisionPaymentsConnector: Jre,
  applicationPrincipalsRevokeGlobalApplicationPrincipalPermission: Kre,
  applicationPrincipalsSuspendGlobalApplicationPrincipal: Zre,
  businessDomainsDeleteSystemBusinessDomain: eae,
  businessDomainsGetSystemBusinessDomainById: rae,
  businessDomainsGetSystemBusinessDomains: pre,
  businessDomainsGetSystemBusinessDomainsCount: ore,
  businessDomainsVerifySystemBusinessDomain: aae,
  cartsDeleteSystemCart: lae,
  cartsGetSystemCartById: nae,
  cartsGetSystemCarts: tae,
  cartsGetSystemCartsCount: cae,
  cartsPurgeSystemGuestCarts: uae,
  contactOptionsCreateSystemContactOption: sae,
  contactOptionsDeleteSystemContactOption: gae,
  contactOptionsGetSystemContactOptionById: vae,
  contactOptionsGetSystemContactOptions: iae,
  contactOptionsGetSystemContactOptionsCount: dae,
  contactOptionsPatchSystemContactOption: hae,
  contactOptionsUpdateSystemContactOption: mae,
  emailsAdminPreviewBasicEmailTemplate: Sae,
  emailsAdminSendBasicEmail: Cae,
  inboxCancelInboxMessageRetry: Vae,
  inboxDeadLetterInboxMessage: zae,
  inboxExpediteInboxMessage: qae,
  inboxGetDuplicateInboxMessages: Wae,
  inboxGetDuplicateInboxMessagesCount: Hae,
  inboxGetInboxCorrelationChain: Oae,
  inboxGetInboxHealth: $ae,
  inboxGetInboxMessage: Uae,
  inboxGetInboxMessages: xae,
  inboxGetInboxMessagesCount: Fae,
  inboxQuarantineInboxMessage: Qae,
  inboxReleaseInboxMessageLease: _ae,
  inboxReplayInboxMessage: Jae,
  ipLookupsDeleteSystemIpLookup: Yae,
  ipLookupsGetSystemIpLookupById: Zae,
  ipLookupsGetSystemIpLookups: Nae,
  ipLookupsGetSystemIpLookupsCount: Kae,
  licenseAssignmentsAssignLicense: pae,
  licenseAssignmentsGetLicenseAssignments: Xae,
  licenseAssignmentsRevokeLicense: oae,
  licensingGetAttributesForLicense: tte,
  licensingGetFeaturesForLicense: cte,
  licensingGetLicenseAssignments: ate,
  licensingGetLicenseById: rte,
  licensingGetLicenseRecordsQuota: lte,
  licensingGetLicenses: ete,
  licensingRedeemLicense: nte,
  licensingValidateLicense: ute,
  migrationsMigrate: ste,
  migrationsMigrations: ite,
  modulesGetAllModules: dte,
  modulesGetAvailableModules: gte,
  optionsCreateSystemOption: hte,
  optionsDeleteSystemOption: Cte,
  optionsGetSystemOptionById: Ste,
  optionsGetSystemOptionByKey: Pte,
  optionsGetSystemOptions: vte,
  optionsGetSystemOptionsCount: mte,
  optionsPatchSystemOption: yte,
  optionsUpdateSystemOption: Tte,
  optionsUpsertSystemOption: fte,
  outboxCancelOutboxMessage: kte,
  outboxDeadLetterOutboxMessage: wte,
  outboxExpediteOutboxMessage: bte,
  outboxGetOutboxCorrelationChain: Lte,
  outboxGetOutboxHealth: Ite,
  outboxGetOutboxMessage: Gte,
  outboxGetOutboxMessages: jte,
  outboxGetOutboxMessagesCount: Ate,
  outboxGetOutboxPoisonPositions: Mte,
  outboxGetTenantOutboxPoisonPositions: Bte,
  outboxReleaseOutboxMessageLease: Ete,
  outboxReplayOutboxMessage: Rte,
  outboxResolveOutboxPoison: Dte,
  outboxResolveTenantOutboxPoison: $te,
  overviewGetSystemOverview: xte,
  platformGetHealth: Tae,
  platformGetHello: Pae,
  platformGetManageInfo: kae,
  platformGetVersion: yae,
  platformMapIdentityApiConfirmEmail: Aae,
  platformPostAccountLogout: Mae,
  platformPostAccountManageDownloadPersonalData: Bae,
  platformPostAccountManageLinkExternalLogin: Dae,
  platformPostAccountPerformExternalLogin: Eae,
  platformPostForgotPassword: Lae,
  platformPostLogin: Iae,
  platformPostManage2Fa: bae,
  platformPostManageInfo: wae,
  platformPostRefresh: jae,
  platformPostRegister: fae,
  platformPostResendConfirmationEmail: Gae,
  platformPostResetPassword: Rae,
  portalsCreateSystemPortal: Ute,
  portalsDeleteSystemPortal: Wte,
  portalsGetSystemPortalById: Hte,
  portalsGetSystemPortals: Fte,
  portalsGetSystemPortalsCount: Ote,
  portalsPatchSystemPortal: qte,
  portalsUpdateSystemPortal: Vte,
  tenantOptionsCreateSystemTenantOption: zte,
  tenantOptionsDeleteSystemTenantOption: Jte,
  tenantOptionsGetSystemTenantOptionById: Nte,
  tenantOptionsGetSystemTenantOptions: _te,
  tenantOptionsGetSystemTenantOptionsCount: Qte,
  tenantOptionsPatchSystemTenantOption: Kte,
  tenantOptionsUpdateSystemTenantOption: Yte,
  tenantsAdminPreviewTenantEmail: uce,
  tenantsAdminSendTenantEmail: ice,
  tenantsCreateTenant: Xte,
  tenantsDeleteTenant: rce,
  tenantsGetAllExtendedTenants: ote,
  tenantsGetAllTenants: Zte,
  tenantsGetExtendedTenantsCount: ece,
  tenantsGetTenant: ace,
  tenantsGetTenantModuleGrants: lce,
  tenantsGetTenantsCount: pte,
  tenantsPatchTenant: tce,
  tenantsSetTenantModuleGrants: nce,
  tenantsUpdateTenant: cce,
  userOptionsCreateSystemUserOption: dce,
  userOptionsDeleteSystemUserOption: vce,
  userOptionsGetSystemUserOptionById: hce,
  userOptionsGetSystemUserOptions: sce,
  userOptionsGetSystemUserOptionsCount: gce,
  userOptionsPatchSystemUserOption: mce,
  userOptionsUpdateSystemUserOption: Cce,
  usersAdminPreviewUserEmailTemplate: Ece,
  usersAdminSendUserEmail: Mce,
  usersConfirmUserEmail: kce,
  usersCreateAccountHolder: yce,
  usersDeleteAccountHolder: Ice,
  usersGetExtendedAccountHolder: Lce,
  usersGetExtendedUsers: Pce,
  usersGetExtendedUsersCount: fce,
  usersGetUser: jce,
  usersGetUserAdminDetail: Rce,
  usersGetUsers: Sce,
  usersGetUsersCount: Tce,
  usersPatchAccountHolder: Ace,
  usersSetUserPassword: bce,
  usersUpdateAccountHolder: Gce,
  usersUpdateAccountHolderAdminProfile: wce
}, Symbol.toStringTag, { value: "Module" })), n = B($()), Dce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/BusinessRelationships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bce = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/BusinessRelationships",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/BusinessRelationships/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xce = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e
}), Fce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e
}), Uce = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/BusinessRelationships/{businessRelationshipId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Departments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wce = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Departments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Departments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qce = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e
}), Vce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e
}), _ce = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zce = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Departments/{tenantDepartmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jce = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/EmployeeEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kce = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e
}), Yce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e
}), Zce = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xce = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pce = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oce = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Enrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ele = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Enrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Enrollments/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ale = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Enrollments/Extended/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tle = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e
}), cle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e
}), lle = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nle = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Enrollments/{enrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ule = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/version",
  ...e
}), ile = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/health",
  ...e
}), sle = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/hello",
  ...e
}), dle = (e) => (e.client ?? n).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gle = (e) => (e.client ?? n).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vle = (e) => (e.client ?? n).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hle = (e) => (e.client ?? n).get({
  url: "/confirmEmail",
  ...e
}), mle = (e) => (e.client ?? n).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cle = (e) => (e.client ?? n).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sle = (e) => (e.client ?? n).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yle = (e) => (e.client ?? n).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tle = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/manage/info",
  ...e
}), Ple = (e) => (e.client ?? n).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fle = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ile = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), jle = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ale = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), Gle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Industries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lle = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Industries",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Industries/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ble = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e
}), kle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e
}), wle = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ele = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Industries/{tenantIndustryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Invitations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dle = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Invitations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ble = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Invitations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $le = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Invitations/{invitationId}",
  ...e
}), xle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Invitations/{invitationId}",
  ...e
}), Fle = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Accept",
  ...e
}), Ule = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Decline",
  ...e
}), Ole = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Invitations/{invitationId}/Resend",
  ...e
}), Wle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hle = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vle = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e
}), _le = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e
}), zle = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qle = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Options/Key/{key}",
  ...e
}), Nle = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Positions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yle = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Positions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zle = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Positions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xle = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e
}), ple = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e
}), ole = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ene = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Positions/{tenantPositionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Segments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ane = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Segments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Segments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e
}), lne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e
}), nne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), une = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Segments/{tenantSegmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ine = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Sizes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sne = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Sizes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Sizes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e
}), vne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e
}), hne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mne = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Sizes/{tenantSizeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sne = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/TeamContactEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e
}), Pne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e
}), fne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ine = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/TeamContactEnrollments/{tenantTeamContactEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ane = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/TeamProjectEnrollments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e
}), Rne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e
}), bne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kne = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/TeamProjectEnrollments/{tenantTeamProjectEnrollmentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ene = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/TeamRecords",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamRecords/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e
}), Bne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e
}), $ne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xne = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/TeamRecords/{tenantTeamRecordId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Teams",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Une = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Teams",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), One = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Teams/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wne = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e
}), Hne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e
}), qne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vne = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Teams/{tenantTeamId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ne = (e) => ((e == null ? void 0 : e.client) ?? n).get({
  url: "/api/v2/TenantsService/Tenants/Root",
  ...e
}), zne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/Current",
  ...e
}), Qne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e
}), Jne = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nne = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Tenants/{tenantId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Extended",
  ...e
}), Yne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Avatar",
  ...e
}), Zne = (e) => (e.client ?? n).post({
  ...u,
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Avatar",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Xne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Wallet",
  ...e
}), pne = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/SocialProfile",
  ...e
}), one = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Cart",
  ...e
}), eue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Users",
  ...e
}), rue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments",
  ...e
}), aue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}",
  ...e
}), tue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Extended",
  ...e
}), cue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Permissions",
  ...e
}), lue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Permissions/Validate",
  ...e
}), nue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations",
  ...e
}), uue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Pending",
  ...e
}), iue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Redeemed",
  ...e
}), sue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Invitations/Revoked",
  ...e
}), due = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Licenses",
  ...e
}), gue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses",
  ...e
}), vue = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), hue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), mue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Licenses/{licenseId}",
  ...e
}), Cue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/Features",
  ...e
}), Sue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Enrollments/{enrollmentId}/HasAccess",
  ...e
}), yue = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Tenants",
  ...e
}), Tue = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  url: "/api/v2/TenantsService/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Select",
  ...e
}), fue = (e) => ((e == null ? void 0 : e.client) ?? n).post({
  url: "/api/v2/TenantsService/Tenants/Deselect",
  ...e
}), Iue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/WebPortals",
  ...e
}), jue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Tenants/{tenantId}/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Territories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Territories",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Rue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Territories/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bue = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e
}), kue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e
}), wue = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eue = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Territories/{tenantTerritoryId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Due = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Types",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Types/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ue = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e
}), xue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e
}), Fue = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uue = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Types/{tenantTypeId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/UnitGroups",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), que = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e
}), Vue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e
}), _ue = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zue = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Que = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kue = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e
}), Yue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e
}), Zue = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xue = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/UnitGroups/{unitGroupId}/Units/{unitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pue = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oue = (e) => (e.client ?? n).post({
  url: "/api/v2/TenantsService/Units",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eie = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Units/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rie = (e) => (e.client ?? n).delete({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e
}), aie = (e) => (e.client ?? n).get({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e
}), tie = (e) => (e.client ?? n).patch({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cie = (e) => (e.client ?? n).put({
  url: "/api/v2/TenantsService/Units/{tenantUnitId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  businessRelationshipsCreateBusinessRelationship: Bce,
  businessRelationshipsDeleteBusinessRelationship: xce,
  businessRelationshipsGetBusinessRelationshipById: Fce,
  businessRelationshipsGetBusinessRelationships: Dce,
  businessRelationshipsGetBusinessRelationshipsCount: $ce,
  businessRelationshipsUpdateBusinessRelationship: Uce,
  departmentsCreateTenantDepartment: Wce,
  departmentsDeleteTenantDepartment: qce,
  departmentsGetTenantDepartmentById: Vce,
  departmentsGetTenantDepartments: Oce,
  departmentsGetTenantDepartmentsCount: Hce,
  departmentsPatchTenantDepartment: _ce,
  departmentsUpdateTenantDepartment: zce,
  employeeEnrollmentsCreateTenantEmployeeEnrollment: Jce,
  employeeEnrollmentsDeleteTenantEmployeeEnrollment: Kce,
  employeeEnrollmentsGetTenantEmployeeEnrollmentById: Yce,
  employeeEnrollmentsGetTenantEmployeeEnrollments: Qce,
  employeeEnrollmentsGetTenantEmployeeEnrollmentsCount: Nce,
  employeeEnrollmentsPatchTenantEmployeeEnrollment: Zce,
  employeeEnrollmentsUpdateTenantEmployeeEnrollment: Xce,
  enrollmentsCreateTenantEnrollment: oce,
  enrollmentsDeleteTenantEnrollment: tle,
  enrollmentsGetExtendedTenantEnrollments: rle,
  enrollmentsGetExtendedTenantEnrollmentsCount: ale,
  enrollmentsGetTenantEnrollmentById: cle,
  enrollmentsGetTenantEnrollments: pce,
  enrollmentsGetTenantEnrollmentsCount: ele,
  enrollmentsPatchTenantEnrollment: lle,
  enrollmentsUpdateTenantEnrollment: nle,
  industriesCreateTenantIndustry: Lle,
  industriesDeleteTenantIndustry: ble,
  industriesGetTenantIndustries: Gle,
  industriesGetTenantIndustriesCount: Rle,
  industriesGetTenantIndustryById: kle,
  industriesPatchTenantIndustry: wle,
  industriesUpdateTenantIndustry: Ele,
  invitationsAcceptTenantInvitation: Fle,
  invitationsDeclineTenantInvitation: Ule,
  invitationsDeleteTenantInvitation: $le,
  invitationsGetTenantInvitationById: xle,
  invitationsGetTenantInvitations: Mle,
  invitationsGetTenantInvitationsCount: Ble,
  invitationsResendTenantInvitation: Ole,
  invitationsSendTenantInvitation: Dle,
  optionsCreateTenantOption: Hle,
  optionsDeleteTenantOption: Vle,
  optionsGetTenantOptionById: _le,
  optionsGetTenantOptionByKey: Jle,
  optionsGetTenantOptions: Wle,
  optionsGetTenantOptionsCount: qle,
  optionsPatchTenantOption: zle,
  optionsUpdateTenantOption: Qle,
  optionsUpsertTenantOption: Nle,
  platformGetHealth: ile,
  platformGetHello: sle,
  platformGetManageInfo: Tle,
  platformGetVersion: ule,
  platformMapIdentityApiConfirmEmail: hle,
  platformPostAccountLogout: Ile,
  platformPostAccountManageDownloadPersonalData: Ale,
  platformPostAccountManageLinkExternalLogin: jle,
  platformPostAccountPerformExternalLogin: fle,
  platformPostForgotPassword: Cle,
  platformPostLogin: gle,
  platformPostManage2Fa: yle,
  platformPostManageInfo: Ple,
  platformPostRefresh: vle,
  platformPostRegister: dle,
  platformPostResendConfirmationEmail: mle,
  platformPostResetPassword: Sle,
  positionsCreateTenantPosition: Yle,
  positionsDeleteTenantPosition: Xle,
  positionsGetTenantPositionById: ple,
  positionsGetTenantPositions: Kle,
  positionsGetTenantPositionsCount: Zle,
  positionsPatchTenantPosition: ole,
  positionsUpdateTenantPosition: ene,
  segmentsCreateTenantSegment: ane,
  segmentsDeleteTenantSegment: cne,
  segmentsGetTenantSegmentById: lne,
  segmentsGetTenantSegments: rne,
  segmentsGetTenantSegmentsCount: tne,
  segmentsPatchTenantSegment: nne,
  segmentsUpdateTenantSegment: une,
  sizesCreateTenantSize: sne,
  sizesDeleteTenantSize: gne,
  sizesGetTenantSizeById: vne,
  sizesGetTenantSizes: ine,
  sizesGetTenantSizesCount: dne,
  sizesPatchTenantSize: hne,
  sizesUpdateTenantSize: mne,
  teamContactEnrollmentsCreateTenantTeamContactEnrollment: Sne,
  teamContactEnrollmentsDeleteTenantTeamContactEnrollment: Tne,
  teamContactEnrollmentsGetTenantTeamContactEnrollmentById: Pne,
  teamContactEnrollmentsGetTenantTeamContactEnrollments: Cne,
  teamContactEnrollmentsGetTenantTeamContactEnrollmentsCount: yne,
  teamContactEnrollmentsPatchTenantTeamContactEnrollment: fne,
  teamContactEnrollmentsUpdateTenantTeamContactEnrollment: Ine,
  teamProjectEnrollmentsCreateTenantTeamProjectEnrollment: Ane,
  teamProjectEnrollmentsDeleteTenantTeamProjectEnrollment: Lne,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollmentById: Rne,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollments: jne,
  teamProjectEnrollmentsGetTenantTeamProjectEnrollmentsCount: Gne,
  teamProjectEnrollmentsPatchTenantTeamProjectEnrollment: bne,
  teamProjectEnrollmentsUpdateTenantTeamProjectEnrollment: kne,
  teamRecordsCreateTenantTeamRecord: Ene,
  teamRecordsDeleteTenantTeamRecord: Dne,
  teamRecordsGetTenantTeamRecordById: Bne,
  teamRecordsGetTenantTeamRecords: wne,
  teamRecordsGetTenantTeamRecordsCount: Mne,
  teamRecordsPatchTenantTeamRecord: $ne,
  teamRecordsUpdateTenantTeamRecord: xne,
  teamsCreateTenantTeam: Une,
  teamsDeleteTenantTeam: Wne,
  teamsGetTenantTeamById: Hne,
  teamsGetTenantTeams: Fne,
  teamsGetTenantTeamsCount: One,
  teamsPatchTenantTeam: qne,
  teamsUpdateTenantTeam: Vne,
  tenantsAssignLicense: mue,
  tenantsCreateTenant: Tue,
  tenantsDeSelectTenant: fue,
  tenantsDeleteTenant: yue,
  tenantsGetAccessibleFeatures: Cue,
  tenantsGetCartForTenant: one,
  tenantsGetCurrentTenant: zne,
  tenantsGetEnrollmentLicenseById: hue,
  tenantsGetEnrollmentLicenses: gue,
  tenantsGetEnrollmentPermissions: cue,
  tenantsGetExtendedTenant: Kne,
  tenantsGetExtendedTenantEnrollment: tue,
  tenantsGetRootTenant: _ne,
  tenantsGetTenant: Qne,
  tenantsGetTenantAvatar: Yne,
  tenantsGetTenantEnrollment: aue,
  tenantsGetTenantEnrollments: rue,
  tenantsGetTenantInvitations: nue,
  tenantsGetTenantLicenses: due,
  tenantsGetTenantNotifications: jue,
  tenantsGetTenantNotificationsCount: Aue,
  tenantsGetTenantPendingInvitations: uue,
  tenantsGetTenantRedeemedInvitations: iue,
  tenantsGetTenantRevokedInvitations: sue,
  tenantsGetTenantSocialProfile: pne,
  tenantsGetTenantUsers: eue,
  tenantsGetTenantWallet: Xne,
  tenantsGetTenantWebPortals: Iue,
  tenantsPatchTenant: Jne,
  tenantsRevokeLicense: vue,
  tenantsSelectTenant: Pue,
  tenantsUpdateTenant: Nne,
  tenantsUpdateTenantAvatar: Zne,
  tenantsValidateEnrollmentFeatureAccess: Sue,
  tenantsValidateEnrollmentPermissions: lue,
  territoriesCreateTenantTerritory: Lue,
  territoriesDeleteTenantTerritory: bue,
  territoriesGetTenantTerritories: Gue,
  territoriesGetTenantTerritoriesCount: Rue,
  territoriesGetTenantTerritoryById: kue,
  territoriesPatchTenantTerritory: wue,
  territoriesUpdateTenantTerritory: Eue,
  typesCreateTenantType: Due,
  typesDeleteTenantType: $ue,
  typesGetTenantTypeById: xue,
  typesGetTenantTypes: Mue,
  typesGetTenantTypesCount: Bue,
  typesPatchTenantType: Fue,
  typesUpdateTenantType: Uue,
  unitGroupsCreateUnit: Jue,
  unitGroupsCreateUnitGroup: Wue,
  unitGroupsDeleteUnit: Kue,
  unitGroupsDeleteUnitGroup: que,
  unitGroupsGetUnit: Yue,
  unitGroupsGetUnitGroup: Vue,
  unitGroupsGetUnitGroups: Oue,
  unitGroupsGetUnitGroupsCount: Hue,
  unitGroupsGetUnits: Que,
  unitGroupsGetUnitsCount: Nue,
  unitGroupsPatchUnit: Zue,
  unitGroupsPatchUnitGroup: _ue,
  unitGroupsUpdateUnit: Xue,
  unitGroupsUpdateUnitGroup: zue,
  unitsCreateTenantUnit: oue,
  unitsDeleteTenantUnit: rie,
  unitsGetTenantUnitById: aie,
  unitsGetTenantUnits: pue,
  unitsGetTenantUnitsCount: eie,
  unitsPatchTenantUnit: tie,
  unitsUpdateTenantUnit: cie
}, Symbol.toStringTag, { value: "Module" })), C = B($()), lie = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/version",
  ...e
}), nie = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/health",
  ...e
}), uie = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/hello",
  ...e
}), iie = (e) => (e.client ?? C).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sie = (e) => (e.client ?? C).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), die = (e) => (e.client ?? C).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gie = (e) => (e.client ?? C).get({
  url: "/confirmEmail",
  ...e
}), vie = (e) => (e.client ?? C).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hie = (e) => (e.client ?? C).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mie = (e) => (e.client ?? C).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cie = (e) => (e.client ?? C).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sie = (e) => ((e == null ? void 0 : e.client) ?? C).get({
  url: "/manage/info",
  ...e
}), yie = (e) => (e.client ?? C).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tie = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Pie = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), fie = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Iie = (e) => ((e == null ? void 0 : e.client) ?? C).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), jie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Aie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/Signatures/{id}",
  ...e
}), Lie = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/primary-file/{fileUploadId}",
  ...e
}), Rie = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/freeze",
  ...e
}), bie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}",
  ...e
}), kie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}/verify",
  ...e
}), wie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eie = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocumentAttachments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Die = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e
}), Bie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e
}), $ie = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xie = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocumentAttachments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uie = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocuments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wie = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e
}), Hie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e
}), qie = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vie = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SignedDocuments/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _ie = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SignedDocuments/{id}/quick-sign",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zie = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SignedDocuments/prepare-and-quick-sign",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Qie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SignedDocuments/{id}/verify-signature",
  ...e
}), Jie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nie = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningCertificates",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yie = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e
}), Zie = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e
}), Xie = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pie = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningCertificates/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oie = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SigningCertificates/Import",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ese = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningEngine/Providers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningEngine/Providers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ase = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningEngine/Preview",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningKeys/Platform",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningKeys",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningKeys/Platform/{authorityId}/{keyId}",
  ...e
}), nse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), use = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ise = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningLogs/{id}",
  ...e
}), sse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningParticipants/{id}",
  ...e
}), vse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningParticipants/{id}/viewed",
  ...e
}), hse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningParticipants/{id}/outcome",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yse = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e
}), Tse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e
}), Pse = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fse = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningProfileGraphicalRepresentations/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ise = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfiles",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ase = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Gse = (e) => (e.client ?? C).delete({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e
}), Lse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e
}), Rse = (e) => (e.client ?? C).patch({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), bse = (e) => (e.client ?? C).put({
  url: "/api/v2/TrustService/SigningProfiles/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningProfiles/{id}/execution-binding",
  ...e
}), wse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningProfiles/{id}/execution-binding",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ese = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/{id}",
  ...e
}), Bse = (e) => (e.client ?? C).get({
  url: "/api/v2/TrustService/SigningRequests/{id}/Participants",
  ...e
}), $se = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/Participants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/from-document/{signedDocumentId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fse = (e) => (e.client ?? C).post({
  ...u,
  url: "/api/v2/TrustService/SigningRequests/prepare-and-create",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Use = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/send",
  ...e
}), Ose = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/void",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/expire",
  ...e
}), Hse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/finalize",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/SigningRequests/{id}/execute-provider",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vse = (e) => (e.client ?? C).post({
  url: "/api/v2/TrustService/TrustManifests/Platform",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: nie,
  platformGetHello: uie,
  platformGetManageInfo: Sie,
  platformGetVersion: lie,
  platformMapIdentityApiConfirmEmail: gie,
  platformPostAccountLogout: Pie,
  platformPostAccountManageDownloadPersonalData: Iie,
  platformPostAccountManageLinkExternalLogin: fie,
  platformPostAccountPerformExternalLogin: Tie,
  platformPostForgotPassword: hie,
  platformPostLogin: sie,
  platformPostManage2Fa: Cie,
  platformPostManageInfo: yie,
  platformPostRefresh: die,
  platformPostRegister: iie,
  platformPostResendConfirmationEmail: vie,
  platformPostResetPassword: mie,
  signaturesGetSignatureById: Gie,
  signaturesGetSignatures: jie,
  signaturesGetSignaturesCount: Aie,
  signedDocumentArtifactsFreeze: Rie,
  signedDocumentArtifactsGetReference: bie,
  signedDocumentArtifactsSetPrimaryAuthoringFile: Lie,
  signedDocumentArtifactsVerify: kie,
  signedDocumentAttachmentsCreateSignedDocumentAttachment: Eie,
  signedDocumentAttachmentsDeleteSignedDocumentAttachment: Die,
  signedDocumentAttachmentsGetSignedDocumentAttachmentById: Bie,
  signedDocumentAttachmentsGetSignedDocumentAttachments: wie,
  signedDocumentAttachmentsGetSignedDocumentAttachmentsCount: Mie,
  signedDocumentAttachmentsPatchSignedDocumentAttachment: $ie,
  signedDocumentAttachmentsUpdateSignedDocumentAttachment: xie,
  signedDocumentsCreateSignedDocument: Uie,
  signedDocumentsDeleteSignedDocument: Wie,
  signedDocumentsGetSignedDocumentById: Hie,
  signedDocumentsGetSignedDocuments: Fie,
  signedDocumentsGetSignedDocumentsCount: Oie,
  signedDocumentsPatchSignedDocument: qie,
  signedDocumentsPrepareAndQuickSign: zie,
  signedDocumentsQuickSignSignedDocument: _ie,
  signedDocumentsUpdateSignedDocument: Vie,
  signedDocumentsVerifySignedDocumentSignature: Qie,
  signingCertificatesCreateSigningCertificate: Nie,
  signingCertificatesDeleteSigningCertificate: Yie,
  signingCertificatesGetSigningCertificateById: Zie,
  signingCertificatesGetSigningCertificates: Jie,
  signingCertificatesGetSigningCertificatesCount: Kie,
  signingCertificatesImportSigningCertificate: oie,
  signingCertificatesPatchSigningCertificate: Xie,
  signingCertificatesUpdateSigningCertificate: pie,
  signingEngineGetProviders: ese,
  signingEngineGetProvidersCount: rse,
  signingEnginePreview: ase,
  signingKeysGeneratePlatformSigningKey: tse,
  signingKeysGenerateTenantSigningKey: cse,
  signingKeysGetPlatformSigningKeyRecord: lse,
  signingLogsGetSigningLogById: ise,
  signingLogsGetSigningLogs: nse,
  signingLogsGetSigningLogsCount: use,
  signingParticipantsGetSigningParticipantById: gse,
  signingParticipantsGetSigningParticipants: sse,
  signingParticipantsGetSigningParticipantsCount: dse,
  signingParticipantsMarkViewed: vse,
  signingParticipantsRecordOutcome: hse,
  signingProfileGraphicalRepresentationsCreateSigningProfileGraphicalRepresentation: Cse,
  signingProfileGraphicalRepresentationsDeleteSigningProfileGraphicalRepresentation: yse,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentationById: Tse,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentations: mse,
  signingProfileGraphicalRepresentationsGetSigningProfileGraphicalRepresentationsCount: Sse,
  signingProfileGraphicalRepresentationsPatchSigningProfileGraphicalRepresentation: Pse,
  signingProfileGraphicalRepresentationsUpdateSigningProfileGraphicalRepresentation: fse,
  signingProfilesCreateSigningProfile: jse,
  signingProfilesDeleteSigningProfile: Gse,
  signingProfilesGetSigningProfileById: Lse,
  signingProfilesGetSigningProfileExecutionBinding: kse,
  signingProfilesGetSigningProfiles: Ise,
  signingProfilesGetSigningProfilesCount: Ase,
  signingProfilesPatchSigningProfile: Rse,
  signingProfilesSetSigningProfileExecutionBinding: wse,
  signingProfilesUpdateSigningProfile: bse,
  signingRequestsAddParticipant: $se,
  signingRequestsCreateFromDocument: xse,
  signingRequestsExecuteProvider: qse,
  signingRequestsExpire: Wse,
  signingRequestsFinalize: Hse,
  signingRequestsGetSigningRequestById: Dse,
  signingRequestsGetSigningRequestParticipants: Bse,
  signingRequestsGetSigningRequests: Ese,
  signingRequestsGetSigningRequestsCount: Mse,
  signingRequestsPrepareAndCreate: Fse,
  signingRequestsSend: Use,
  signingRequestsVoid: Ose,
  trustManifestsComposePlatformTrustManifest: Vse
}, Symbol.toStringTag, { value: "Module" })), N = B($()), _se = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/CreditNotes/{invoiceId}",
  ...e
}), zse = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/DebitNotes/{invoiceId}",
  ...e
}), Qse = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/DespatchAdvices/{shipmentId}",
  ...e
}), Jse = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/version",
  ...e
}), Nse = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/health",
  ...e
}), Kse = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/hello",
  ...e
}), Yse = (e) => (e.client ?? N).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zse = (e) => (e.client ?? N).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xse = (e) => (e.client ?? N).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pse = (e) => (e.client ?? N).get({
  url: "/confirmEmail",
  ...e
}), ose = (e) => (e.client ?? N).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ede = (e) => (e.client ?? N).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rde = (e) => (e.client ?? N).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ade = (e) => (e.client ?? N).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tde = (e) => ((e == null ? void 0 : e.client) ?? N).get({
  url: "/manage/info",
  ...e
}), cde = (e) => (e.client ?? N).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), lde = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), nde = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ude = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), ide = (e) => ((e == null ? void 0 : e.client) ?? N).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), sde = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/Invoices/{invoiceId}",
  ...e
}), dde = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/ReceiptAdvices/{itemRestockId}",
  ...e
}), gde = (e) => (e.client ?? N).get({
  url: "/api/v2/UblService/ReceiptAdvices/{itemRestockId}/partitions",
  ...e
}), Cme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  creditNotesGetUblCreditNote: _se,
  debitNotesGetUblDebitNote: zse,
  despatchAdvicesGetUblDespatchAdvice: Qse,
  invoicesGetUblInvoice: sde,
  platformGetHealth: Nse,
  platformGetHello: Kse,
  platformGetManageInfo: tde,
  platformGetVersion: Jse,
  platformMapIdentityApiConfirmEmail: pse,
  platformPostAccountLogout: nde,
  platformPostAccountManageDownloadPersonalData: ide,
  platformPostAccountManageLinkExternalLogin: ude,
  platformPostAccountPerformExternalLogin: lde,
  platformPostForgotPassword: ede,
  platformPostLogin: Zse,
  platformPostManage2Fa: ade,
  platformPostManageInfo: cde,
  platformPostRefresh: Xse,
  platformPostRegister: Yse,
  platformPostResendConfirmationEmail: ose,
  platformPostResetPassword: rde,
  receiptAdvicesGetUblReceiptAdvice: dde,
  receiptAdvicesGetUblReceiptAdvicePartitions: gde
}, Symbol.toStringTag, { value: "Module" })), b = B($()), vde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/version",
  ...e
}), hde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/health",
  ...e
}), mde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/hello",
  ...e
}), Cde = (e) => (e.client ?? b).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sde = (e) => (e.client ?? b).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yde = (e) => (e.client ?? b).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tde = (e) => (e.client ?? b).get({
  url: "/confirmEmail",
  ...e
}), Pde = (e) => (e.client ?? b).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fde = (e) => (e.client ?? b).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ide = (e) => (e.client ?? b).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jde = (e) => (e.client ?? b).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ade = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/manage/info",
  ...e
}), Gde = (e) => (e.client ?? b).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lde = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Rde = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bde = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), kde = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), wde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ede = (e) => (e.client ?? b).post({
  url: "/api/v2/Me/Options",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Mde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Options/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dde = (e) => (e.client ?? b).delete({
  url: "/api/v2/Me/Options/{optionId}",
  ...e
}), Bde = (e) => (e.client ?? b).get({
  url: "/api/v2/Me/Options/{optionId}",
  ...e
}), $de = (e) => (e.client ?? b).patch({
  url: "/api/v2/Me/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xde = (e) => (e.client ?? b).put({
  url: "/api/v2/Me/Options/{optionId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fde = (e) => (e.client ?? b).get({
  url: "/api/v2/Me/Options/Key/{key}",
  ...e
}), Ude = (e) => (e.client ?? b).put({
  url: "/api/v2/Me/Options/Upsert/{key}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ode = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/StudioAccess",
  ...e
}), Wde = (e) => (e.client ?? b).get({
  url: "/api/v2/UsersService/Users/{userId}/PublicProfile",
  ...e
}), Hde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me",
  ...e
}), qde = (e) => ((e == null ? void 0 : e.client) ?? b).patch({
  url: "/api/v2/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vde = (e) => ((e == null ? void 0 : e.client) ?? b).put({
  url: "/api/v2/Me",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), _de = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Extended",
  ...e
}), zde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Avatar",
  ...e
}), Qde = (e) => ((e == null ? void 0 : e.client) ?? b).post({
  ...u,
  url: "/api/v2/Me/Avatar",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Jde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Follows",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Follows/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Followers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Followers/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Tenants",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Tenants/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pde = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Tenants/Extended",
  ...e
}), ode = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Enrollments",
  ...e
}), ege = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Enrollments/Extended",
  ...e
}), rge = (e) => (e.client ?? b).get({
  url: "/api/v2/Me/Enrollments/{enrollmentId}",
  ...e
}), age = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/SocialProfile",
  ...e
}), tge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Cart",
  ...e
}), cge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Wallet",
  ...e
}), lge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Notifications",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), nge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Notifications/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Settings",
  ...e
}), ige = (e) => ((e == null ? void 0 : e.client) ?? b).put({
  url: "/api/v2/Me/Settings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Addresses",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dge = (e) => ((e == null ? void 0 : e.client) ?? b).get({
  url: "/api/v2/Me/Invitations",
  ...e
}), gge = (e) => (e.client ?? b).get({
  url: "/api/v2/Me/Invitations/{invitationId}",
  ...e
}), Sme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  optionsCreateUserOption: Ede,
  optionsDeleteUserOption: Dde,
  optionsGetUserOptionById: Bde,
  optionsGetUserOptionByKey: Fde,
  optionsGetUserOptions: wde,
  optionsGetUserOptionsCount: Mde,
  optionsPatchUserOption: $de,
  optionsUpdateUserOption: xde,
  optionsUpsertUserOption: Ude,
  platformGetHealth: hde,
  platformGetHello: mde,
  platformGetManageInfo: Ade,
  platformGetVersion: vde,
  platformMapIdentityApiConfirmEmail: Tde,
  platformPostAccountLogout: Rde,
  platformPostAccountManageDownloadPersonalData: kde,
  platformPostAccountManageLinkExternalLogin: bde,
  platformPostAccountPerformExternalLogin: Lde,
  platformPostForgotPassword: fde,
  platformPostLogin: Sde,
  platformPostManage2Fa: jde,
  platformPostManageInfo: Gde,
  platformPostRefresh: yde,
  platformPostRegister: Cde,
  platformPostResendConfirmationEmail: Pde,
  platformPostResetPassword: Ide,
  usersCountCurrentUserFollowers: Yde,
  usersCountCurrentUserFollows: Nde,
  usersCountCurrentUserNotifications: nge,
  usersCountCurrentUserTenants: Xde,
  usersGetCurrentUser: Hde,
  usersGetCurrentUserAddresses: sge,
  usersGetCurrentUserAvatar: zde,
  usersGetCurrentUserCart: tge,
  usersGetCurrentUserEnrollments: ode,
  usersGetCurrentUserEnrollmentsExtended: ege,
  usersGetCurrentUserFollowers: Kde,
  usersGetCurrentUserFollows: Jde,
  usersGetCurrentUserInvitation: dge,
  usersGetCurrentUserInvitationById: gge,
  usersGetCurrentUserNotifications: lge,
  usersGetCurrentUserSettings: uge,
  usersGetCurrentUserSocialProfile: age,
  usersGetCurrentUserTenants: Zde,
  usersGetCurrentUserTenantsExtended: pde,
  usersGetCurrentUserWallet: cge,
  usersGetEnrollment: rge,
  usersGetExtendedCurrentUser: _de,
  usersGetMyStudioAccess: Ode,
  usersGetUserPublicProfile: Wde,
  usersPatchCurrentUser: qde,
  usersUpdateAvatar: Qde,
  usersUpdateCurrentUser: Vde,
  usersUpdateCurrentUserSettings: ige
}, Symbol.toStringTag, { value: "Module" })), j = B($()), vge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/version",
  ...e
}), hge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/health",
  ...e
}), mge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/hello",
  ...e
}), Cge = (e) => (e.client ?? j).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sge = (e) => (e.client ?? j).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yge = (e) => (e.client ?? j).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tge = (e) => (e.client ?? j).get({
  url: "/confirmEmail",
  ...e
}), Pge = (e) => (e.client ?? j).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fge = (e) => (e.client ?? j).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ige = (e) => (e.client ?? j).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jge = (e) => (e.client ?? j).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Age = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/manage/info",
  ...e
}), Gge = (e) => (e.client ?? j).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Lge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Rge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), bge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), kge = (e) => ((e == null ? void 0 : e.client) ?? j).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), wge = (e) => ((e == null ? void 0 : e.client) ?? j).get({
  url: "/api/v2/WalletsService/Me/Ethereum/Balance",
  ...e
}), Ege = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}",
  ...e
}), Mge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders/Extended",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Orders/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Fge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uge = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Oge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Wge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Hge = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), qge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Vge = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e
}), _ge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e
}), zge = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Nge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Yge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Zge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Xge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), pge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), oge = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Quotes",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), eve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Quotes/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ave = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), tve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), cve = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e
}), lve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e
}), nve = (e) => (e.client ?? j).patch({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), uve = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ive = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), sve = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Withdraws/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), gve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), vve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), hve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Chargebacks",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Chargebacks/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Cve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Refunds",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Sve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Refunds/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Tve = (e) => (e.client ?? j).post({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Pve = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), fve = (e) => (e.client ?? j).delete({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e
}), Ive = (e) => (e.client ?? j).get({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e
}), jve = (e) => (e.client ?? j).patch({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ave = (e) => (e.client ?? j).put({
  url: "/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), yme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meGetMyEthereumBalance: wge,
  platformGetHealth: hge,
  platformGetHello: mge,
  platformGetManageInfo: Age,
  platformGetVersion: vge,
  platformMapIdentityApiConfirmEmail: Tge,
  platformPostAccountLogout: Rge,
  platformPostAccountManageDownloadPersonalData: kge,
  platformPostAccountManageLinkExternalLogin: bge,
  platformPostAccountPerformExternalLogin: Lge,
  platformPostForgotPassword: fge,
  platformPostLogin: Sge,
  platformPostManage2Fa: jge,
  platformPostManageInfo: Gge,
  platformPostRefresh: yge,
  platformPostRegister: Cge,
  platformPostResendConfirmationEmail: Pge,
  platformPostResetPassword: Ige,
  walletsCreateLocationForWallet: Hge,
  walletsCreateWalletBankAccount: ave,
  walletsCreateWalletPayment: Uge,
  walletsCreateWalletToken: Tve,
  walletsCreateWalletWithdrawRequest: sve,
  walletsDeleteLocationForWallet: Vge,
  walletsDeleteWalletBankAccount: cve,
  walletsDeleteWalletToken: fve,
  walletsGetIncomingPayments: Yge,
  walletsGetIncomingPaymentsCount: Zge,
  walletsGetIncomingWalletInvoices: Qge,
  walletsGetIncomingWalletInvoicesCount: Jge,
  walletsGetLocationForWallet: _ge,
  walletsGetLocationsForWallet: Wge,
  walletsGetLocationsForWalletCount: qge,
  walletsGetOutgoingPayments: Xge,
  walletsGetOutgoingPaymentsCount: pge,
  walletsGetOutgoingWalletInvoices: Nge,
  walletsGetOutgoingWalletInvoicesCount: Kge,
  walletsGetWalletBankAccount: lve,
  walletsGetWalletBankAccounts: rve,
  walletsGetWalletBankAccountsCount: tve,
  walletsGetWalletChargebacks: hve,
  walletsGetWalletChargebacksCount: mve,
  walletsGetWalletDetails: Ege,
  walletsGetWalletExtendedOrders: Dge,
  walletsGetWalletInvoices: $ge,
  walletsGetWalletInvoicesCount: xge,
  walletsGetWalletOrders: Mge,
  walletsGetWalletOrdersCount: Bge,
  walletsGetWalletPayments: Fge,
  walletsGetWalletPaymentsCount: Oge,
  walletsGetWalletQuotes: oge,
  walletsGetWalletQuotesCount: eve,
  walletsGetWalletRefunds: Cve,
  walletsGetWalletRefundsCount: Sve,
  walletsGetWalletToken: Ive,
  walletsGetWalletTokens: yve,
  walletsGetWalletTokensCount: Pve,
  walletsGetWalletWithdrawRequests: gve,
  walletsGetWalletWithdrawRequestsCount: vve,
  walletsGetWalletWithdraws: ive,
  walletsGetWalletWithdrawsCount: dve,
  walletsPatchWalletBankAccount: nve,
  walletsPatchWalletToken: jve,
  walletsUpdateLocationForWallet: zge,
  walletsUpdateWalletBankAccount: uve,
  walletsUpdateWalletToken: Ave
}, Symbol.toStringTag, { value: "Module" })), E = B($()), Gve = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/version",
  ...e
}), Lve = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/health",
  ...e
}), Rve = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/hello",
  ...e
}), bve = (e) => (e.client ?? E).post({
  url: "/register",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), kve = (e) => (e.client ?? E).post({
  url: "/login",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), wve = (e) => (e.client ?? E).post({
  url: "/refresh",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Eve = (e) => (e.client ?? E).get({
  url: "/confirmEmail",
  ...e
}), Mve = (e) => (e.client ?? E).post({
  url: "/resendConfirmationEmail",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Dve = (e) => (e.client ?? E).post({
  url: "/forgotPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Bve = (e) => (e.client ?? E).post({
  url: "/resetPassword",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), $ve = (e) => (e.client ?? E).post({
  url: "/manage/2fa",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), xve = (e) => ((e == null ? void 0 : e.client) ?? E).get({
  url: "/manage/info",
  ...e
}), Fve = (e) => (e.client ?? E).post({
  url: "/manage/info",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Uve = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/PerformExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Ove = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/Logout",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Wve = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  ...u,
  url: "/Account/Manage/LinkExternalLogin",
  ...e,
  headers: {
    "Content-Type": null,
    ...e == null ? void 0 : e.headers
  }
}), Hve = (e) => ((e == null ? void 0 : e.client) ?? E).post({
  url: "/Account/Manage/DownloadPersonalData",
  ...e
}), qve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowCapabilities",
  ...e
}), Vve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowCapabilities/Count",
  ...e
}), _ve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), zve = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Qve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Jve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}",
  ...e
}), Nve = (e) => (e.client ?? E).put({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Kve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Validate",
  ...e
}), Yve = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Publish",
  ...e
}), Zve = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/TriggerReconciliation",
  ...e
}), Xve = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Archive",
  ...e
}), pve = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Clone",
  ...e
}), ove = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/Start",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ehe = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/StartAsApplication",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), rhe = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowDefinitions/{id}/TestRun",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ahe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), the = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), che = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/{id}",
  ...e
}), lhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowInstances/{id}/Trace",
  ...e
}), nhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowNodeDescriptors",
  ...e
}), uhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowNodeDescriptors/Count",
  ...e
}), ihe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), she = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), dhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), ghe = (e) => (e.client ?? E).delete({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e
}), vhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e
}), hhe = (e) => (e.client ?? E).put({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), mhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/EventContracts",
  ...e
}), Che = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Enable",
  ...e
}), She = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Disable",
  ...e
}), yhe = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/RepointVersion",
  ...e
}), The = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Webhook/RotateCredentials",
  ...e
}), Phe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Readiness",
  ...e
}), fhe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Occurrences",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), Ihe = (e) => (e.client ?? E).get({
  url: "/api/v2/WorkflowsService/WorkflowTriggerBindings/{id}/Occurrences/Count",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e == null ? void 0 : e.headers
  }
}), jhe = (e) => (e.client ?? E).post({
  url: "/api/v2/WorkflowsService/Triggers/Webhooks/{webhookKey}",
  ...e
}), Tme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  platformGetHealth: Lve,
  platformGetHello: Rve,
  platformGetManageInfo: xve,
  platformGetVersion: Gve,
  platformMapIdentityApiConfirmEmail: Eve,
  platformPostAccountLogout: Ove,
  platformPostAccountManageDownloadPersonalData: Hve,
  platformPostAccountManageLinkExternalLogin: Wve,
  platformPostAccountPerformExternalLogin: Uve,
  platformPostForgotPassword: Dve,
  platformPostLogin: kve,
  platformPostManage2Fa: $ve,
  platformPostManageInfo: Fve,
  platformPostRefresh: wve,
  platformPostRegister: bve,
  platformPostResendConfirmationEmail: Mve,
  platformPostResetPassword: Bve,
  workflowCapabilitiesGetWorkflowCapabilities: qve,
  workflowCapabilitiesGetWorkflowCapabilitiesCount: Vve,
  workflowDefinitionsArchiveWorkflowDefinition: Xve,
  workflowDefinitionsCloneWorkflowDefinitionDraft: pve,
  workflowDefinitionsCreateWorkflowDefinition: zve,
  workflowDefinitionsGetWorkflowDefinitionById: Jve,
  workflowDefinitionsGetWorkflowDefinitions: _ve,
  workflowDefinitionsGetWorkflowDefinitionsCount: Qve,
  workflowDefinitionsGetWorkflowTriggerReconciliation: Zve,
  workflowDefinitionsPublishWorkflowDefinition: Yve,
  workflowDefinitionsStartWorkflow: ove,
  workflowDefinitionsStartWorkflowAsApplication: ehe,
  workflowDefinitionsTestRunWorkflow: rhe,
  workflowDefinitionsUpdateWorkflowDefinitionDraft: Nve,
  workflowDefinitionsValidateWorkflowDefinition: Kve,
  workflowInstancesGetWorkflowInstanceById: che,
  workflowInstancesGetWorkflowInstanceTrace: lhe,
  workflowInstancesGetWorkflowInstances: ahe,
  workflowInstancesGetWorkflowInstancesCount: the,
  workflowNodeDescriptorsGetWorkflowNodeDescriptors: nhe,
  workflowNodeDescriptorsGetWorkflowNodeDescriptorsCount: uhe,
  workflowTriggerBindingsCreateWorkflowTriggerBinding: she,
  workflowTriggerBindingsDeleteWorkflowTriggerBinding: ghe,
  workflowTriggerBindingsDisableWorkflowTriggerBinding: She,
  workflowTriggerBindingsEnableWorkflowTriggerBinding: Che,
  workflowTriggerBindingsGetBusinessEventContracts: mhe,
  workflowTriggerBindingsGetWorkflowTriggerBindingById: vhe,
  workflowTriggerBindingsGetWorkflowTriggerBindingOccurrences: fhe,
  workflowTriggerBindingsGetWorkflowTriggerBindingOccurrencesCount: Ihe,
  workflowTriggerBindingsGetWorkflowTriggerBindingReadiness: Phe,
  workflowTriggerBindingsGetWorkflowTriggerBindings: ihe,
  workflowTriggerBindingsGetWorkflowTriggerBindingsCount: dhe,
  workflowTriggerBindingsRepointWorkflowTriggerBindingVersion: yhe,
  workflowTriggerBindingsRotateWorkflowTriggerBindingWebhookCredentials: The,
  workflowTriggerBindingsUpdateWorkflowTriggerBinding: hhe,
  workflowWebhooksPostTriggersWebhooksByWebhookKey: jhe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ghe as AccountingService,
  Lhe as ActivitiesService,
  Rhe as AnalyticsService,
  bhe as ApprovalsService,
  khe as AssetsService,
  whe as BlockchainsService,
  Ehe as CartService,
  Mhe as CatalogService,
  Dhe as CommunicationsService,
  Bhe as ContentService,
  $he as CrmService,
  xhe as DealsService,
  Fhe as EmailTemplates,
  Uhe as ForexService,
  Ohe as GlobeService,
  Whe as HrmsService,
  Hhe as IdentityService,
  qhe as IntelligenceService,
  Vhe as InventoryService,
  _he as InvoicingService,
  zhe as LearningService,
  Qhe as LicensingService,
  Jhe as LocationsService,
  Nhe as LogisticsService,
  Khe as ManufacturingService,
  Yhe as MarketingService,
  Zhe as MarketplaceService,
  Xhe as OrdersService,
  phe as PaymentsService,
  ohe as PricingService,
  eme as ProjectsService,
  rme as QuotesService,
  ame as ReachService,
  tme as SalesService,
  cme as SearchService,
  lme as SecurityService,
  nme as ServicesService,
  ume as ShipmentsService,
  ime as SocialService,
  sme as StorageService,
  dme as SubscriptionsService,
  gme as SupportService,
  vme as SystemService,
  hme as TenantsService,
  mme as TrustService,
  Cme as UblIntegration,
  Sme as UsersService,
  yme as WalletsService,
  Tme as WorkflowsService
};
