# 💱 Contch

Real-time currency conversion platform built with SvelteKit, TypeScript, and Tailwind CSS.

## 🌟 Features

- 🔄 Real-time currency conversion
- 📊 Live exchange rates with trend indicators
- 📈 Mini historical charts
- 🌙 Dark theme with modern UI
- 📱 Mobile-first responsive design

## 🛠️ Tech Stack

- 🎯 **SvelteKit + TypeScript**: For dynamic and type-safe UI
- 🎨 **Tailwind CSS**: For styling
- 💾 **localStorage**: For historical data
- 🔌 **APIs**: Frankfurter and Binance

## 📁 Project Structure

### 🔄 `src/lib/convert.ts`

Core conversion functionality using multiple APIs:

#### Currency Conversions (via Frankfurter API)
- 💵 USD/TRY
- 💶 EUR/TRY
- 🇬🇧 GBP/TRY
- 🇨🇭 CHF/TRY
- 🇯🇵 JPY/TRY
- 🇨🇦 CAD/TRY
- 🇦🇺 AUD/TRY

#### Cryptocurrency Conversions (via Binance API)

**Major Cryptocurrencies**
- ₿ BTC/TRY
- Ξ ETH/TRY
- 🟡 BNB/TRY

**DeFi & Layer 1**
- ⟠ ADA/TRY
- ◎ SOL/TRY
- ● DOT/TRY
- 👻 FTM/TRY
- 🌌 NEAR/TRY
- 🌊 SUI/TRY
- 📚 STX/TRY

**Layer 2 Solutions**
- ⬡ MATIC/TRY
- 🔺 AVAX/TRY
- 🔴 OP/TRY
- 🔷 ARB/TRY

**Gaming & Metaverse**
- 🎮 MANA/TRY
- ⏳ SAND/TRY
- 🎮 GALA/TRY

**Stablecoins**
- 💵 USDT/TRY
- 💰 BUSD/TRY

**Other Popular Altcoins**
- 🔗 LINK/TRY
- 🦄 UNI/TRY
- ⚛️ ATOM/TRY
- 🔷 ALGO/TRY
- 🐸 PEPE/TRY
- 🔵 APT/TRY
- 💉 INJ/TRY

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/queaxtra/contch.git
```

2. Install dependencies
```bash
cd contch
npm install
```

3. Run development server
```bash
npm run dev
```

## 📈 Features in Detail

- **Real-time Updates**: Exchange rates refresh every 5 seconds
- **Historical Data**: Tracks up to 10 data points per currency
- **Trend Indicators**: Shows price movement direction (↑/↓)
- **Mini Charts**: Visual representation of price history
- **Responsive Design**: Works on all device sizes

## 🔒 Security

- Client-side API calls
- No sensitive data storage
- Rate limiting via API constraints

## 📝 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/queaxtra">Queaxtra</a></sub>

  <br />

  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/queaxtra) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/queaxtra)
</div>