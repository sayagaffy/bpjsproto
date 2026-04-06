export const dashboardStats = {
  totalAssets: 154200000000,
  djsAssets: 120500000000,
  bpjsAssets: 33700000000,
  activeTransactions: 1245,
  pendingReconciliation: 15,
  ytdGrowth: 4.5,
};

export const transactions = [
  { id: 'TRX-2023-001', date: '2023-10-25', entity: 'DJS', description: 'Penerimaan Iuran Peserta Mandiri', amount: 450000000, status: 'Completed', type: 'Credit' },
  { id: 'TRX-2023-002', date: '2023-10-25', entity: 'BPJS', description: 'Pembayaran Klaim RS Cipto', amount: 120000000, status: 'Pending Approval', type: 'Debit' },
  { id: 'TRX-2023-003', date: '2023-10-24', entity: 'DJS', description: 'Investasi Deposito Bank Mandiri', amount: 5000000000, status: 'Completed', type: 'Debit' },
  { id: 'TRX-2023-004', date: '2023-10-24', entity: 'BPJS', description: 'Biaya Operasional Kantor Pusat', amount: 25000000, status: 'Draft', type: 'Debit' },
  { id: 'TRX-2023-005', date: '2023-10-23', entity: 'DJS', description: 'Penerimaan Iuran PBI APBN', amount: 1500000000, status: 'Completed', type: 'Credit' },
];

export const accountHierarchy = [
  {
    id: '1', name: 'Aset', level: 1, type: 'Kategori',
    children: [
      {
        id: '1.1', name: 'Aset Lancar', level: 2, type: 'Sub-kategori',
        children: [
          {
            id: '1.1.1', name: 'Kas dan Setara Kas', level: 3, type: 'Kelompok Akun',
            children: [
              { id: '1.1.1.01', name: 'Kas di Bank Mandiri (DJS)', level: 4, type: 'Akun Detail', balance: 50000000000 },
              { id: '1.1.1.02', name: 'Kas di Bank BNI (BPJS)', level: 4, type: 'Akun Detail', balance: 12000000000 },
            ]
          },
          { id: '1.1.2', name: 'Piutang Iuran', level: 3, type: 'Kelompok Akun', children: [] }
        ]
      },
      { id: '1.2', name: 'Aset Tidak Lancar', level: 2, type: 'Sub-kategori', children: [] }
    ]
  },
  { id: '2', name: 'Liabilitas', level: 1, type: 'Kategori', children: [] },
  { id: '3', name: 'Ekuitas', level: 1, type: 'Kategori', children: [] },
];

export const ojkReports = [
  { id: 'OJK-01', name: 'Laporan Posisi Keuangan', period: 'Q3 2023', status: 'Approved', lastModified: '2023-10-15', preparedBy: 'Budi Santoso' },
  { id: 'OJK-02', name: 'Laporan Kinerja Keuangan', period: 'Q3 2023', status: 'Under Review', lastModified: '2023-10-18', preparedBy: 'Siti Aminah' },
  { id: 'OJK-03', name: 'Laporan Arus Kas', period: 'Q3 2023', status: 'Draft', lastModified: '2023-10-20', preparedBy: 'Agus Salim' },
  { id: 'OJK-04', name: 'Laporan Perubahan Ekuitas', period: 'Q3 2023', status: 'Approved', lastModified: '2023-10-10', preparedBy: 'Budi Santoso' },
  { id: 'OJK-05', name: 'Laporan Aktivitas', period: 'Q3 2023', status: 'Pending Approval', lastModified: '2023-10-22', preparedBy: 'Siti Aminah' },
  { id: 'OJK-06', name: 'Laporan Rasio Keuangan', period: 'Q3 2023', status: 'Draft', lastModified: '2023-10-25', preparedBy: 'Agus Salim' },
];

export const activityLogs = [
  { id: 'LOG-001', timestamp: '2023-10-25 14:30:00', user: 'Agus Salim', role: 'Maker', action: 'Created Journal Entry TRX-2023-004', entity: 'BPJS' },
  { id: 'LOG-002', timestamp: '2023-10-25 15:00:00', user: 'Siti Aminah', role: 'Checker', action: 'Reviewed Journal Entry TRX-2023-004', entity: 'BPJS' },
  { id: 'LOG-003', timestamp: '2023-10-25 15:45:00', user: 'Budi Santoso', role: 'Approver', action: 'Approved Journal Entry TRX-2023-002', entity: 'BPJS' },
  { id: 'LOG-004', timestamp: '2023-10-24 10:15:00', user: 'Admin', role: 'Superadmin', action: 'Updated Account Mapping 1.1.1.01', entity: 'DJS' },
  { id: 'LOG-005', timestamp: '2023-10-24 16:20:00', user: 'Siti Aminah', role: 'Maker', action: 'Generated OJK Report OJK-05', entity: 'Combined' },
];

export const userManagement = [
   { id: 'U-001', name: 'Budi Santoso', email: 'budi.s@bpjs.go.id', role: 'Approver', status: 'Active', department: 'Keuangan Pusat' },
   { id: 'U-002', name: 'Siti Aminah', email: 'siti.a@bpjs.go.id', role: 'Checker', status: 'Active', department: 'Akuntansi' },
   { id: 'U-003', name: 'Agus Salim', email: 'agus.s@bpjs.go.id', role: 'Maker', status: 'Active', department: 'Akuntansi' },
   { id: 'U-004', name: 'Rina Nose', email: 'rina.n@bpjs.go.id', role: 'Viewer', status: 'Inactive', department: 'Audit Internal' },
];

export const formatCurrency = (amount, compact = false) => {
  if (amount < 1000000) return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

  if (compact) {
    if (amount >= 1000000000000) {
      return `Rp ${(amount / 1000000000000).toFixed(1)} T`;
    }
    if (amount >= 1000000000) {
      return `Rp ${(amount / 1000000000).toFixed(1)} M`;
    }
    if (amount >= 1000000) {
      return `Rp ${(amount / 1000000).toFixed(1)} Jt`;
    }
  }

  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};
