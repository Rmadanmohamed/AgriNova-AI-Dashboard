"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Header } from "@/components/dashboard/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { FloatingPanel } from "@/components/dashboard/floating-panel"
import {
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  BarChart3,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"

const priceTrajectoryData = [
  { date: "Apr 13", actual: 38, predicted: null, upper: null, lower: null },
  { date: "Apr 20", actual: 40, predicted: null, upper: null, lower: null },
  { date: "Apr 27", actual: 42, predicted: null, upper: null, lower: null },
  { date: "May 4", actual: 41, predicted: null, upper: null, lower: null },
  { date: "May 11", actual: 43, predicted: null, upper: null, lower: null },
  { date: "May 18", actual: 42.85, predicted: 42.85, upper: 45, lower: 40 },
  { date: "May 25", actual: null, predicted: 44, upper: 47, lower: 41 },
  { date: "Jun 1", actual: null, predicted: 45, upper: 49, lower: 41 },
  { date: "Jun 8", actual: null, predicted: 45.5, upper: 51, lower: 40 },
  { date: "Jun 15", actual: null, predicted: 45.73, upper: 52.1, lower: 39.36 },
]

const impactFactors = [
  { factor: "Supply & Demand", impact: 72, positive: true },
  { factor: "Seasonality", impact: 48, positive: true },
  { factor: "Weather Impact", impact: 35, positive: true },
  { factor: "Production Cost", impact: 25, positive: true },
  { factor: "Export Demand", impact: 18, positive: true },
  { factor: "Market Sentiment", impact: 12, positive: true },
]

const topOpportunities = [
  { commodity: "Tomatoes", change: "+8.9%", profitability: "High" },
  { commodity: "Bell Pepper", change: "+7.6%", profitability: "High" },
  { commodity: "Strawberry", change: "+12.4%", profitability: "Very High" },
  { commodity: "Grapes", change: "+6.3%", profitability: "Medium" },
  { commodity: "Cucumber", change: "+5.7%", profitability: "Medium" },
]

const commodityData = [
  { commodity: "Tomatoes", icon: "🍅", current: 42.85, predicted: 45.73, change: 6.7, trend: "up", risk: "Low", profitability: "High", signal: "Buy" },
  { commodity: "Bell Pepper", icon: "🫑", current: 68.20, predicted: 73.38, change: 7.6, trend: "up", risk: "Low", profitability: "High", signal: "Buy" },
  { commodity: "Onion", icon: "🧅", current: 18.45, predicted: 19.22, change: 4.2, trend: "up", risk: "Medium", profitability: "Medium", signal: "Hold" },
  { commodity: "Strawberry", icon: "🍓", current: 95.10, predicted: 106.89, change: 12.4, trend: "up", risk: "Low", profitability: "Very High", signal: "Strong Buy" },
  { commodity: "Potato", icon: "🥔", current: 16.30, predicted: 16.90, change: 3.7, trend: "up", risk: "Low", profitability: "Medium", signal: "Hold" },
  { commodity: "Grapes", icon: "🍇", current: 54.70, predicted: 58.15, change: 6.3, trend: "up", risk: "Low", profitability: "Medium", signal: "Buy" },
  { commodity: "Cucumber", icon: "🥒", current: 22.15, predicted: 23.41, change: 5.7, trend: "up", risk: "Low", profitability: "Medium", signal: "Buy" },
]

const heatmapData = [
  { name: "Tomatoes", weeks: [2.1, 3.4, 4.2, 5.1, 5.8, 6.3, 6.8, 7.2, 6.7] },
  { name: "Bell Pepper", weeks: [2.8, 3.9, 4.7, 5.6, 6.4, 7.1, 7.6, 8.0, 7.6] },
  { name: "Onion", weeks: [0.8, 1.2, 1.8, 2.3, 2.7, 3.2, 3.6, 4.0, 4.2] },
  { name: "Strawberry", weeks: [4.5, 5.8, 6.9, 7.8, 8.6, 9.4, 10.3, 11.1, 12.4] },
  { name: "Potato", weeks: [0.6, 1.0, 1.4, 1.9, 2.3, 2.8, 3.2, 3.4, 3.7] },
  { name: "Grapes", weeks: [2.0, 2.9, 3.6, 4.1, 4.8, 5.2, 5.7, 6.1, 6.3] },
  { name: "Cucumber", weeks: [1.8, 2.5, 3.0, 3.6, 4.1, 4.6, 5.1, 5.4, 5.7] },
]

const marketNews = [
  { text: "Tomato exports to GCC expected to increase by 15% in Q2 2025", time: "10:30 AM" },
  { text: "Weather patterns indicate optimal growing conditions for bell peppers", time: "09:45 AM" },
  { text: "Rising demand for strawberries in European markets", time: "08:20 AM" },
]

export default function PricePredictionPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <Header
          pageNumber="06"
          title="Price Prediction"
          subtitle="AI-driven market forecasting and price intelligence"
        />

        {/* Stats Row */}
        <div className="grid grid-cols-6 gap-4">
          <StatCard
            title="Commodities Tracked"
            value="14"
            change="+2 vs last 7 days"
            trend="up"
            icon={<BarChart3 className="h-5 w-5 text-emerald-400" />}
            iconBg="bg-emerald-500/20"
          />
          <StatCard
            title="Current Market Price (EGP)"
            value="42.85"
            change="+6.8% vs last 7 days"
            trend="up"
            icon={<DollarSign className="h-5 w-5 text-blue-400" />}
            iconBg="bg-blue-500/20"
          />
          <StatCard
            title="Predicted Price (60 Days)"
            value="45.73"
            change="+6.7% vs current"
            trend="up"
            icon={<TrendingUp className="h-5 w-5 text-purple-400" />}
            iconBg="bg-purple-500/20"
          />
          <StatCard
            title="Expected Change (60 Days)"
            value="+ 6.7%"
            subtitle="Bullish Trend"
            subtitleColor="text-emerald-400"
            icon={<ArrowUpRight className="h-5 w-5 text-emerald-400" />}
            iconBg="bg-emerald-500/20"
          />
          <StatCard
            title="Market Risk Score"
            value="28"
            valueSuffix="/100"
            subtitle="Low Risk"
            subtitleColor="text-emerald-400"
            icon={<Shield className="h-5 w-5 text-cyan-400" />}
            iconBg="bg-cyan-500/20"
          />
          <StatCard
            title="Profitability Signal"
            value="High"
            subtitle="Strong Opportunity"
            subtitleColor="text-emerald-400"
            icon={<Target className="h-5 w-5 text-emerald-400" />}
            iconBg="bg-emerald-500/20"
            valueColor="text-emerald-400"
          />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Price Trajectory Chart */}
          <div className="col-span-5 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold">Price Trajectory (Tomatoes)</h3>
                <p className="text-gray-400 text-sm">Actual vs Predicted Price (EGP/kg)</p>
              </div>
              <div className="flex gap-2">
                {["7D", "30D", "60D", "90D"].map((period, i) => (
                  <button
                    key={period}
                    className={`px-3 py-1 rounded text-sm ${i === 2 ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-400"
                      }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-gray-400"></div>
                <span className="text-gray-400">Actual Price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-emerald-400"></div>
                <span className="text-gray-400">Predicted Price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-purple-400"></div>
                <span className="text-gray-400">Confidence Range</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceTrajectoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={10} />
                  <YAxis stroke="#6b7280" fontSize={10} domain={[20, 60]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0a1a0f",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="upper"
                    stroke="transparent"
                    fill="rgba(168, 85, 247, 0.1)"
                  />
                  <Area
                    type="monotone"
                    dataKey="lower"
                    stroke="transparent"
                    fill="#0a1a0f"
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#9ca3af"
                    strokeWidth={2}
                    dot={{ fill: "#9ca3af", r: 3 }}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "#10b981", r: 3 }}
                    connectNulls={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
              <div className="text-sm text-gray-400">Jun 15, 2025</div>
              <div className="text-emerald-400">Predicted: 45.73 EGP</div>
              <div className="text-xs text-gray-500">Upper: 52.10 EGP | Lower: 39.36 EGP</div>
            </div>
          </div>

          {/* Impact Factors */}
          <div className="col-span-3 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
            <div className="mb-4">
              <h3 className="text-white font-semibold">Impact Factors</h3>
              <p className="text-gray-400 text-sm">How factors influence predicted prices</p>
            </div>
            <div className="space-y-4">
              {impactFactors.map((item) => (
                <div key={item.factor}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{item.factor}</span>
                    <span className="text-emerald-400">+{item.impact}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${item.impact}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-xs text-gray-500">
              <span>Negative Impact</span>
              <span>Positive Impact</span>
            </div>
          </div>

          {/* Top Opportunities */}
          <div className="col-span-4 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold">Top Opportunities</h3>
                <p className="text-gray-400 text-sm">Highest predicted profitability</p>
              </div>
              <span className="text-gray-400 text-sm">60 Days</span>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-xs text-gray-500 pb-2 border-b border-gray-800">
                <span>Commodity</span>
                <span className="text-center">Predicted Change</span>
                <span className="text-right">Profitability</span>
              </div>
              {topOpportunities.map((item, i) => (
                <div key={item.commodity} className="grid grid-cols-3 py-2 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {["🍅", "🫑", "🍓", "🍇", "🥒"][i]}
                    </span>
                    <span className="text-gray-300 text-sm">{item.commodity}</span>
                  </div>
                  <span className="text-emerald-400 text-sm text-center">{item.change}</span>
                  <span className={`text-sm text-right ${item.profitability === "Very High" ? "text-emerald-400" :
                      item.profitability === "High" ? "text-emerald-400" : "text-yellow-400"
                    }`}>
                    {item.profitability}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-emerald-400 text-sm border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10">
              View All Opportunities
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Commodity Price Forecast Overview */}
          <div className="col-span-5 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
            <div className="mb-4">
              <h3 className="text-white font-semibold">Commodity Price Forecast Overview</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left py-2">Commodity</th>
                    <th className="text-right py-2">Current Price<br />(EGP/kg)</th>
                    <th className="text-right py-2">Predicted Price<br />(EGP/kg)</th>
                    <th className="text-right py-2">Change (%)</th>
                    <th className="text-center py-2">Trend</th>
                    <th className="text-center py-2">Risk Level</th>
                    <th className="text-center py-2">Profitability</th>
                    <th className="text-center py-2">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {commodityData.map((item) => (
                    <tr key={item.commodity} className="border-b border-gray-800/50">
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span className="text-gray-300">{item.commodity}</span>
                        </div>
                      </td>
                      <td className="text-right text-gray-300">{item.current.toFixed(2)}</td>
                      <td className="text-right text-emerald-400">{item.predicted.toFixed(2)}</td>
                      <td className="text-right text-emerald-400">+{item.change}%</td>
                      <td className="text-center">
                        <span className="text-gray-400">〰️</span>
                      </td>
                      <td className="text-center">
                        <span className={`px-2 py-0.5 rounded text-xs ${item.risk === "Low" ? "text-emerald-400" : "text-yellow-400"
                          }`}>
                          {item.risk}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`text-xs ${item.profitability === "Very High" || item.profitability === "High"
                            ? "text-emerald-400" : "text-yellow-400"
                          }`}>
                          {item.profitability}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`px-2 py-1 rounded text-xs ${item.signal === "Strong Buy" ? "bg-emerald-500/20 text-emerald-400" :
                            item.signal === "Buy" ? "bg-blue-500/20 text-blue-400" :
                              "bg-yellow-500/20 text-yellow-400"
                          }`}>
                          {item.signal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full mt-4 py-2 text-gray-400 text-sm border border-gray-700 rounded-lg hover:bg-gray-800">
              View Full Market Analysis
            </button>
          </div>

          {/* Price Heatmap */}
          <div className="col-span-4 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
            <div className="mb-4">
              <h3 className="text-white font-semibold">Price Heatmap (Change %)</h3>
              <p className="text-gray-400 text-sm">60 Days Forecast</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left py-1"></th>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((week) => (
                      <th key={week} className="text-center py-1 px-1">Week {week}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {heatmapData.map((row) => (
                    <tr key={row.name}>
                      <td className="py-1 text-gray-400 pr-2">{row.name}</td>
                      {row.weeks.map((value, i) => (
                        <td key={i} className="text-center py-1 px-1">
                          <span
                            className={`px-1.5 py-0.5 rounded text-xs ${value >= 8 ? "bg-emerald-500 text-white" :
                                value >= 5 ? "bg-emerald-600/70 text-white" :
                                  value >= 3 ? "bg-emerald-700/50 text-emerald-200" :
                                    "bg-emerald-800/30 text-emerald-300"
                              }`}
                          >
                            {value}%
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market News & AI Confidence */}
          <div className="col-span-3 space-y-4">
            {/* Market News */}
            <div className="bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-emerald-400" />
                <h3 className="text-white font-semibold text-sm">Market News & Insights</h3>
              </div>
              <div className="space-y-3">
                {marketNews.map((news, i) => (
                  <div key={i} className="flex gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-xs">{news.text}</p>
                      <span className="text-gray-500 text-xs">{news.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 py-1.5 text-emerald-400 text-xs border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10">
                View All Market News
              </button>
            </div>

            {/* AI Confidence Score */}
            <div className="bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4">
              <h3 className="text-white font-semibold text-sm mb-3">AI Confidence Score</h3>
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1f2937"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${94 * 3.52} ${100 * 3.52}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-emerald-400">94%</span>
                    <span className="text-xs text-emerald-400">High Confidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Intelligence Sidebar Card */}
        <FloatingPanel
          title="Market Intelligence"
          className="fixed left-4 bottom-24 w-44 hidden xl:block"
        >
          <div className="relative w-24 h-24 mx-auto my-2">
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border border-purple-500/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-7 w-7 text-purple-400 animate-spin-slow" />
            </div>
          </div>
          <div className="text-center my-2">
            <div className="text-gray-400 text-[10px]">Global Market Coverage</div>
            <div className="text-xl font-bold text-white leading-none my-1">32</div>
            <div className="text-gray-400 text-[10px]">Countries</div>
          </div>
          <button className="w-full py-1.5 text-emerald-400 text-[10px] border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-colors">
            View Market Reports
          </button>
        </FloatingPanel>
      </div>
    </DashboardLayout>
  )
}
