import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Monitor, 
  BookOpen, 
  Settings, 
  LogOut 
} from 'lucide-react';
import Logo from '../components/Logo';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import useAuth from '../hooks/useAuth';

// Mock Data
const chartData = [
  { name: 'Nov', value: 410000 },
  { name: 'Dec', value: 425000 },
  { name: 'Jan', value: 440000 },
  { name: 'Feb', value: 435000 },
  { name: 'Mar', value: 465000 },
  { name: 'Apr', value: 482500 },
];

const mockTrades = [
  { id: 1, date: '17 Apr', symbol: 'NIFTY', type: 'Buy', qty: 50, entry: 22140, exit: 22190, pnl: 2500 },
  { id: 2, date: '16 Apr', symbol: 'BANKNIFTY', type: 'Sell', qty: 30, entry: 47500, exit: 47400, pnl: 3000 },
  { id: 3, date: '15 Apr', symbol: 'RELIANCE', type: 'Buy', qty: 100, entry: 2950, exit: 2940, pnl: -1000 },
  { id: 4, date: '14 Apr', symbol: 'HDFC', type: 'Buy', qty: 200, entry: 1450, exit: 1465, pnl: 3000 },
  { id: 5, date: '13 Apr', symbol: 'INFY', type: 'Sell', qty: 150, entry: 1420, exit: 1435, pnl: -2250 },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Portfolio', icon: TrendingUp },
    { name: 'Terminals', icon: Monitor },
    { name: 'Education', icon: BookOpen },
    { name: 'Settings', icon: Settings },
  ];

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-[#F5F5F0] overflow-hidden">
      {/* Sidebar */}
      <aside 
        className="fixed bottom-0 left-0 w-full md:relative md:w-[240px] md:h-full bg-[#0F0F0F] z-50 flex md:flex-col"
        style={{ borderTop: '3px solid #C9A84C' }}
      >
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center p-5 mb-4">
          <Logo size={30} />
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex md:flex-col justify-around md:justify-start w-full md:gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 flex-1 md:flex-none py-3 md:px-6 transition-colors border-t-[3px] md:border-t-0 md:border-l-[3px] ${
                  isActive 
                    ? 'text-[#C9A84C] border-[#C9A84C]' 
                    : 'text-[#9E9E8F] hover:bg-[#C9A84C]/5 border-transparent hover:text-[#F5F5F0]'
                }`}
                style={{
                  backgroundColor: isActive ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                }}
              >
                <item.icon size={22} className={isActive ? 'text-[#C9A84C]' : 'group-hover:text-[#C9A84C]'} />
                <span className="text-[10px] md:text-sm font-medium">{item.name}</span>
              </button>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 flex-1 md:flex-none py-3 md:px-6 text-red-500 hover:bg-red-500/10 transition-colors md:mt-auto md:mb-6 border-t-[3px] border-transparent md:border-t-0 md:border-l-[3px]"
          >
            <LogOut size={22} />
            <span className="text-[10px] md:text-sm font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24 md:pb-8 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <h1 className="font-display text-2xl text-white font-semibold">
                Welcome back, {user?.displayName || user?.email || 'Trader'}
              </h1>
              <p className="text-[#9E9E8F] text-sm mt-1">{today}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C9A84C]/30">
                Trader
              </span>
            </div>
          </header>

          {/* Widget Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-5 border-t-[3px] border-[#C9A84C] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#9E9E8F] text-xs sm:text-sm mb-1">Total Portfolio Value</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold">₹4,82,500</h3>
                <span className="text-green-400 text-sm font-medium">+2.4%</span>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-5 border-t-[3px] border-[#C9A84C] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#9E9E8F] text-xs sm:text-sm mb-1">Today's P&L</p>
              <div className="flex items-end justify-between">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-green-400">+₹3,240</h3>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-5 border-t-[3px] border-[#C9A84C] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#9E9E8F] text-xs sm:text-sm mb-1">Active Positions</p>
              <h3 className="text-xl sm:text-2xl font-display font-bold">5</h3>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-5 border-t-[3px] border-[#C9A84C] hover:-translate-y-1 transition-transform duration-300">
              <p className="text-[#9E9E8F] text-xs sm:text-sm mb-1">Win Rate</p>
              <h3 className="text-xl sm:text-2xl font-display font-bold">67%</h3>
            </div>
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 gap-8 mb-8">
            {/* Portfolio Chart Section */}
            <div className="bg-[#1A1A1A] rounded-xl p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold mb-6">Portfolio Performance</h3>
              <div className="h-[250px] sm:h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9E9E8F', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9E9E8F', fontSize: 12 }}
                      tickFormatter={(value) => `₹${value / 1000}k`}
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(201,168,76,0.3)', borderRadius: '8px' }}
                      itemStyle={{ color: '#C9A84C' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#C9A84C" 
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#C9A84C', strokeWidth: 0 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-white/5">
                <h3 className="font-display text-lg font-semibold">Recent Trades</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-[#141414] text-[#9E9E8F]">
                    <tr>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Symbol</th>
                      <th className="px-6 py-4 font-medium">Type</th>
                      <th className="px-6 py-4 font-medium text-right">Qty</th>
                      <th className="px-6 py-4 font-medium text-right">Entry</th>
                      <th className="px-6 py-4 font-medium text-right">Exit</th>
                      <th className="px-6 py-4 font-medium text-right">P&L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTrades.map((trade, i) => (
                      <tr 
                        key={trade.id} 
                        className={`border-b border-black/20 ${i % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#141414]'}`}
                      >
                        <td className="px-6 py-4 text-[#9E9E8F]">{trade.date}</td>
                        <td className="px-6 py-4 font-semibold">{trade.symbol}</td>
                        <td className="px-6 py-4">
                          <span className={trade.type === 'Buy' ? 'text-green-400' : 'text-red-400'}>
                            {trade.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">{trade.qty}</td>
                        <td className="px-6 py-4 text-right text-[#9E9E8F]">{trade.entry}</td>
                        <td className="px-6 py-4 text-right text-[#9E9E8F]">{trade.exit}</td>
                        <td className={`px-6 py-4 text-right font-semibold ${trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {trade.pnl >= 0 ? '+' : ''}₹{Math.abs(trade.pnl)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
